"""Generate a markdown table summarising the default compute resources
(CPUs / memory / time) requested by each module in a pipeline.

The table is built by parsing the pipeline configuration and module files
directly (no Nextflow runtime required) and applying Nextflow's process
selector precedence **independently for each directive**:

    withName > withLabel > process default

Resolving per-directive is important: a process may carry several labels
(e.g. the axis-decomposed ``process_cpus_low`` / ``process_mem_medium`` /
``process_time_long`` labels) where each label sets only a single directive.
"""

import logging
import re
from pathlib import Path
from typing import NamedTuple

log = logging.getLogger(__name__)

# Directives summarised in the table, in column order.
RESOURCE_DIRECTIVES = ("cpus", "memory", "time")

# Delimiters marking the auto-generated block inside ``docs/resources.md``.
TABLE_START = "<!-- nf-core resources table start -->"
TABLE_END = "<!-- nf-core resources table end -->"


def extract_table_block(content: str) -> str:
    """Return the delimited resources-table block (delimiters included) from
    ``content``, or an empty string if it is not present."""
    match = re.search(re.escape(TABLE_START) + r".*?" + re.escape(TABLE_END), content, flags=re.DOTALL)
    return match.group(0) if match else ""


def normalise_block(block: str) -> str:
    """Normalise a table block for comparison.

    Collapses runs of whitespace and drops blank lines so that reformatting by
    tools such as prettier (which pads markdown table columns) does not cause
    spurious linting failures.
    """
    lines = (re.sub(r"\s+", " ", line).strip() for line in block.splitlines())
    return "\n".join(line for line in lines if line)


# Directories searched for module ``include`` statements (matches container_configs).
_INCLUDE_SEARCH_DIRS = ("workflows", "subworkflows")

# include { NAME as ALIAS } from 'path'   (alias optional; alias group captured)
_INCLUDE_RE = re.compile(
    r"include\s*\{\s*([A-Za-z0-9_]+)(?:\s+as\s+([A-Za-z0-9_]+))?\s*\}\s*from\s+['\"]([^'\"]+)['\"]"
)
# process {   (opening of the top-level process scope in a config file)
_PROCESS_BLOCK_RE = re.compile(r"^\s*process\s*\{")
# label 'process_low'
_LABEL_RE = re.compile(r"^\s*label\s+['\"]?([A-Za-z0-9_-]+)['\"]?")
# withLabel:foo {  /  withName: 'BAR' {
_SELECTOR_RE = re.compile(r"^\s*with(Label|Name)\s*:\s*['\"]?([^'\"{ ]+)['\"]?\s*\{")
# cpus = { 1 * task.attempt }
_DIRECTIVE_RE = re.compile(rf"^\s*({'|'.join(RESOURCE_DIRECTIVES)})\s*=\s*(.+)$")


class Resolved(NamedTuple):
    """One resolved directive value and where it comes from.

    ``selector`` is the process selector that set the value (``default``,
    ``withLabel:<name>``, ``withName`` or ``withName (verify manually)``);
    ``file`` is the config file the value is defined in, relative to the
    pipeline root (e.g. ``conf/base.config``).
    """

    value: str
    selector: str
    file: str


class ResourcesTable:
    """Summarise the default compute resources requested by pipeline modules.

    Args:
        workflow_directory (Path): The directory containing the workflow files.
    """

    def __init__(self, workflow_directory: Path = Path()):
        self.workflow_directory = Path(workflow_directory)
        # Parsed directive values carry the config file they were defined in:
        # each stored value is a (value, file) tuple.
        # process default directives, e.g. {"cpus": ("1", "conf/base.config")}
        self.defaults: dict[str, tuple[str, str]] = {}
        # label name -> {directive: (value, file)} (config/insertion order preserved)
        self.with_label: dict[str, dict[str, tuple[str, str]]] = {}
        # (selector, {directive: (value, file)}) in config order
        self.with_name: list[tuple[str, dict[str, tuple[str, str]]]] = []
        # cached alias -> labels mapping (module discovery reads every .nf file)
        self._modules: dict[str, list[str]] | None = None

    # ------------------------------------------------------------------
    # value normalisation
    # ------------------------------------------------------------------

    @staticmethod
    def _normalise_value(rhs: str) -> str:
        """Turn a config directive right-hand side into a displayable base value.

        Unwraps a closure, drops ``* task.attempt`` scaling (the table shows the
        first-attempt value) and collapses whitespace. Unparseable values are
        returned as-is so nothing is silently dropped.
        """
        value = rhs.strip().rstrip(",")
        # Drop trailing line comments.
        value = re.sub(r"//.*$", "", value).strip()
        # Unwrap a single surrounding closure { ... }.
        if value.startswith("{") and value.endswith("}"):
            value = value[1:-1].strip()
        # Remove `task.attempt` scaling (either side of the operator).
        value = re.sub(r"\*?\s*task\.attempt\s*\*?", "", value).strip()
        value = re.sub(r"\s+", " ", value)
        return value or rhs.strip()

    # ------------------------------------------------------------------
    # config parsing
    # ------------------------------------------------------------------

    def _parse_config_file(self, path: Path) -> None:
        """Parse one config file, populating defaults / with_label / with_name.

        Line-oriented with brace-depth tracking. Groovy closures such as
        ``{ 6.GB * task.attempt }`` open and close on the same line (net zero),
        so the depth counter correctly distinguishes selector blocks (net +1)
        from directive closures.
        """
        try:
            text = path.read_text()
        except OSError as e:
            log.debug(f"Could not read config file {path}: {e}")
            return

        source_file = self._relative_to_root(path)
        depth = 0  # open braces in effect at the start of the current line
        in_process = False  # inside the top-level `process { }` scope
        selector: tuple[str, str] | None = None  # (type, name) of the active with* block
        selector_depth = 0  # depth at which the active selector block opened

        for raw_line in text.splitlines():
            # --- interpret the line at the current depth ---
            if depth == 0 and _PROCESS_BLOCK_RE.match(raw_line):
                in_process = True

            selector_match = None
            if in_process and depth == 1:
                selector_match = _SELECTOR_RE.match(raw_line)
                if selector_match:
                    selector = (selector_match.group(1), selector_match.group(2))
                    selector_depth = depth

            directive_match = _DIRECTIVE_RE.match(raw_line)
            if directive_match:
                name, value = directive_match.group(1), self._normalise_value(directive_match.group(2))
                if selector is not None and depth == selector_depth + 1:
                    if selector[0] == "Label":
                        self.with_label.setdefault(selector[1], {})[name] = (value, source_file)
                    else:
                        self._record_with_name(selector[1], name, value, source_file)
                elif in_process and depth == 1 and selector is None:
                    self.defaults[name] = (value, source_file)

            # --- update depth, then close scopes that have ended ---
            depth += raw_line.count("{") - raw_line.count("}")
            if selector is not None and depth <= selector_depth:
                selector = None
            if in_process and depth <= 0:
                in_process = False

    def _record_with_name(self, selector: str, directive: str, value: str, source_file: str) -> None:
        """Store a withName directive, merging into the last block for this selector."""
        if self.with_name and self.with_name[-1][0] == selector:
            self.with_name[-1][1][directive] = (value, source_file)
        else:
            self.with_name.append((selector, {directive: (value, source_file)}))

    def _relative_to_root(self, path: Path) -> str:
        """Return ``path`` relative to the pipeline directory (posix), for display."""
        try:
            return path.relative_to(self.workflow_directory).as_posix()
        except ValueError:
            return path.name

    def parse_configs(self) -> None:
        """Parse ``conf/base.config`` first (defaults + labels), then the other
        config files in ``conf/`` for withName / withLabel overrides."""
        conf_dir = self.workflow_directory / "conf"
        base = conf_dir / "base.config"
        others = sorted(p for p in conf_dir.glob("*.config") if p != base)
        for cfg in [base, *others]:
            if cfg.exists():
                self._parse_config_file(cfg)

    # ------------------------------------------------------------------
    # module discovery
    # ------------------------------------------------------------------

    def _iter_include_files(self):
        """Yield .nf files that may contain module include statements."""
        yield from self.workflow_directory.glob("*.nf")
        for search_dir in _INCLUDE_SEARCH_DIRS:
            search_path = self.workflow_directory / search_dir
            if search_path.is_dir():
                yield from search_path.rglob("*.nf")

    def _resolve_module_file(self, nf_file: Path, include_path: str) -> Path | None:
        """Resolve an include path (relative to ``nf_file``) to a module main.nf."""
        base = (nf_file.parent / include_path).resolve()
        candidates = [base, base.with_suffix(".nf"), base / "main.nf"]
        for candidate in candidates:
            if candidate.is_file():
                return candidate
        return None

    @staticmethod
    def _parse_module(module_file: Path) -> list[str]:
        """Extract the process labels from a module main.nf."""
        labels: list[str] = []
        try:
            lines = module_file.read_text().splitlines()
        except OSError as e:
            log.debug(f"Could not read module file {module_file}: {e}")
            return labels
        for line in lines:
            label = _LABEL_RE.match(line)
            if label:
                labels.append(label.group(1))
        return labels

    def discover_modules(self) -> dict[str, list[str]]:
        """Map each invoked module (by its alias, if any) to its labels.

        Only includes pointing at a ``modules/`` directory are considered. A
        module invoked under several aliases yields one entry per alias. The
        result is cached on the instance: discovery reads every workflow and
        module file, so repeat ``resolve()`` calls reuse the first scan.
        """
        if self._modules is not None:
            return self._modules
        modules: dict[str, list[str]] = {}
        labels_by_file: dict[Path, list[str]] = {}  # a module aliased N times is read once
        for nf_file in self._iter_include_files():
            try:
                content = nf_file.read_text()
            except OSError as e:
                log.debug(f"Could not read {nf_file}: {e}")
                continue
            for name, alias, include_path in _INCLUDE_RE.findall(content):
                if "modules/" not in include_path:
                    continue
                module_file = self._resolve_module_file(nf_file, include_path)
                if module_file is None:
                    log.debug(f"Could not resolve module include '{include_path}' in {nf_file}")
                    continue
                if module_file not in labels_by_file:
                    labels_by_file[module_file] = self._parse_module(module_file)
                modules[alias or name] = labels_by_file[module_file]
        self._modules = modules
        return modules

    # ------------------------------------------------------------------
    # resolution
    # ------------------------------------------------------------------

    @staticmethod
    def _selector_matches(selector: str, alias: str) -> tuple[bool, bool]:
        """Does a withName selector match this alias? Returns (matched, uncertain).

        Handles exact names and simple ``.*:NAME`` glob prefixes confidently.
        A match that relies on more complex regex is flagged uncertain so the
        table can tell the reader to verify it manually.
        """
        sel = selector.strip("'\"")
        if sel == alias:
            return True, False
        # Strip a leading `.*` / `.*:` glob prefix and compare the remainder.
        core = re.sub(r"^\.\*:?", "", sel)
        if core == alias:
            return True, False
        try:
            if re.fullmatch(sel, alias):
                return True, True
        except re.error:
            pass
        return False, False

    def _resolve_with_name(self, alias: str, directive: str) -> Resolved | None:
        """Most specific matching withName value for a directive (last wins)."""
        winner = None
        for selector, directives in self.with_name:
            if directive not in directives:
                continue
            matched, uncertain = self._selector_matches(selector, alias)
            if matched:
                sel = "withName (verify manually)" if uncertain else "withName"
                value, file = directives[directive]
                winner = Resolved(value, sel, file)
        return winner

    def _resolve_with_label(self, labels: list[str], directive: str) -> Resolved | None:
        """Most specific matching withLabel value for a directive (last in config wins)."""
        winner = None
        for name, directives in self.with_label.items():  # config order
            if name in labels and directive in directives:
                value, file = directives[directive]
                winner = Resolved(value, f"withLabel:{name}", file)
        return winner

    def _resolve_directive(self, alias: str, labels: list[str], directive: str) -> Resolved:
        """Resolve one directive for one module, applying precedence."""
        resolved = self._resolve_with_name(alias, directive) or self._resolve_with_label(labels, directive)
        if resolved is not None:
            return resolved
        default = self.defaults.get(directive)
        if default is not None:
            value, file = default
            return Resolved(value, "default", file)
        return Resolved("–", "default", "–")

    def resolve(self) -> dict[str, dict[str, Resolved]]:
        """Resolve resources for every module.

        Returns a mapping of ``alias -> {directive: Resolved(value, selector, file)}``.
        """
        if not self.defaults and not self.with_label and not self.with_name:
            self.parse_configs()
        rows: dict[str, dict[str, Resolved]] = {}
        for alias, labels in self.discover_modules().items():
            rows[alias] = {d: self._resolve_directive(alias, labels, d) for d in RESOURCE_DIRECTIVES}
        return rows

    # ------------------------------------------------------------------
    # rendering
    # ------------------------------------------------------------------

    @staticmethod
    def _summarise(row: dict[str, Resolved], field: str) -> str:
        """Summarise a per-directive field (``selector`` or ``file``) into one cell.

        Collapses to a single value when all three directives agree, otherwise
        lists each distinct value with the directives it applies to.
        """
        by_value: dict[str, list[str]] = {}
        for directive in RESOURCE_DIRECTIVES:
            by_value.setdefault(getattr(row[directive], field), []).append(directive)
        if len(by_value) == 1:
            return next(iter(by_value))
        return "; ".join(
            val if len(directives) == len(RESOURCE_DIRECTIVES) else f"{val} ({', '.join(directives)})"
            for val, directives in by_value.items()
        )

    def render_markdown(self) -> str:
        """Render the resolved resources as a markdown table."""
        rows = self.resolve()
        lines = [
            "| Process | CPUs | Memory | Time | Selector | Source |",
            "| ------- | ---- | ------ | ---- | -------- | ------ |",
        ]
        for alias in sorted(rows):
            row = rows[alias]
            cpus, memory, time = (row[d].value for d in RESOURCE_DIRECTIVES)
            selector = self._summarise(row, "selector")
            source = self._summarise(row, "file")
            lines.append(f"| `{alias}` | {cpus} | {memory} | {time} | {selector} | {source} |")
        return "\n".join(lines)

    def render_block(self) -> str:
        """Render the delimited, auto-generated block for ``docs/resources.md``."""
        caption = (
            "_Values are the defaults requested on the first attempt using the `local` executor "
            "(retries scale them by `task.attempt`). Resolved per directive following Nextflow "
            "selector precedence `withName` > `withLabel` > process default. The **Selector** column "
            "shows which selector set each value and **Source** the config file it is defined in._"
        )
        return f"{TABLE_START}\n\n{self.render_markdown()}\n\n{caption}\n\n{TABLE_END}"

    def write_table(self, docs_file: Path | None = None) -> Path:
        """Write/refresh the resources table block in ``docs/resources.md``.

        Replaces the content between the delimiters if present, otherwise
        appends a fresh block. Returns the path written.
        """
        if docs_file is None:
            docs_file = self.workflow_directory / "docs" / "resources.md"
        block = self.render_block()
        if docs_file.exists():
            content = docs_file.read_text()
            if TABLE_START in content and TABLE_END in content:
                new_content = re.sub(
                    re.escape(TABLE_START) + r".*?" + re.escape(TABLE_END),
                    block,
                    content,
                    flags=re.DOTALL,
                )
            else:
                new_content = content.rstrip() + "\n\n" + block + "\n"
        else:
            docs_file.parent.mkdir(parents=True, exist_ok=True)
            new_content = f"# Resources\n\n{block}\n"
        docs_file.write_text(new_content)
        return docs_file


def try_generate_resources_table(directory: Path) -> None:
    """Best-effort generation of the resources table for a pipeline directory."""
    try:
        ResourcesTable(directory).write_table()
    except (OSError, UnicodeDecodeError) as e:
        # unreadable / undecodable pipeline files: warn but let logic bugs surface
        log.warning(f"Could not generate the resources table: {e}")
