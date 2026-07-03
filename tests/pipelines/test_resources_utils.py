"""Unit tests for the resources table generator (nf_core.pipelines.resources_utils)."""

from pathlib import Path
from textwrap import dedent

from nf_core.pipelines.resources_utils import TABLE_END, TABLE_START, ResourcesTable

BASE_CONFIG = dedent(
    """\
    process {
        cpus   = { 1    * task.attempt }
        memory = { 6.GB * task.attempt }
        time   = { 4.h  * task.attempt }

        withLabel:process_low {
            cpus   = { 2     * task.attempt }
            memory = { 12.GB * task.attempt }
            time   = { 4.h   * task.attempt }
        }
        withLabel:process_high {
            cpus   = { 12    * task.attempt }
            memory = { 72.GB * task.attempt }
            time   = { 16.h  * task.attempt }
        }
        withLabel:process_long {
            time = { 20.h * task.attempt }
        }
        withLabel:error_ignore {
            errorStrategy = 'ignore'
        }
    }
    """
)


def _scaffold(tmp_path: Path, modules: dict[str, list[str]], includes: str, modules_config: str = "") -> Path:
    """Create a minimal pipeline directory.

    Args:
        modules: mapping of MODULE_NAME -> list of labels, written as modules/nf-core/<name>/main.nf
        includes: contents of workflows/pipeline.nf (the include statements)
        modules_config: optional extra content for conf/modules.config
    """
    (tmp_path / "conf").mkdir()
    (tmp_path / "conf" / "base.config").write_text(BASE_CONFIG)
    if modules_config:
        (tmp_path / "conf" / "modules.config").write_text(modules_config)

    (tmp_path / "workflows").mkdir()
    (tmp_path / "workflows" / "pipeline.nf").write_text(includes)

    for name, labels in modules.items():
        mod_dir = tmp_path / "modules" / "nf-core" / name.lower()
        mod_dir.mkdir(parents=True)
        label_lines = "\n".join(f"    label '{label}'" for label in labels)
        (mod_dir / "main.nf").write_text(f"process {name} {{\n{label_lines}\n\n    script:\n    '''\n    '''\n}}\n")
    return tmp_path


def test_default_only(tmp_path):
    """A module with no labels falls back to the process defaults."""
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"FOO": []},
            includes="include { FOO } from '../modules/nf-core/foo/main'\n",
        )
    )
    row = rt.resolve()["FOO"]
    assert row["cpus"] == ("1", "default", "conf/base.config")
    assert row["memory"] == ("6.GB", "default", "conf/base.config")
    assert row["time"] == ("4.h", "default", "conf/base.config")


def test_single_withlabel(tmp_path):
    """A single label resolves all three directives from that label."""
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"FASTQC": ["process_low"]},
            includes="include { FASTQC } from '../modules/nf-core/fastqc/main'\n",
        )
    )
    row = rt.resolve()["FASTQC"]
    assert row["cpus"] == ("2", "withLabel:process_low", "conf/base.config")
    assert row["memory"] == ("12.GB", "withLabel:process_low", "conf/base.config")
    assert row["time"] == ("4.h", "withLabel:process_low", "conf/base.config")


def test_multi_label_per_directive(tmp_path):
    """Multiple labels resolve per-directive: cpus/memory from one, time from another."""
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"ALIGN": ["process_high", "process_long"]},
            includes="include { ALIGN } from '../modules/nf-core/align/main'\n",
        )
    )
    row = rt.resolve()["ALIGN"]
    assert row["cpus"] == ("12", "withLabel:process_high", "conf/base.config")
    assert row["memory"] == ("72.GB", "withLabel:process_high", "conf/base.config")
    # process_long only sets time, and does so more specifically than process_high
    assert row["time"] == ("20.h", "withLabel:process_long", "conf/base.config")


def test_withname_overrides_label(tmp_path):
    """withName beats withLabel, but only for the directives it sets."""
    modules_config = dedent(
        """\
        process {
            withName: 'FASTQC' {
                cpus = { 8 * task.attempt }
            }
        }
        """
    )
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"FASTQC": ["process_low"]},
            includes="include { FASTQC } from '../modules/nf-core/fastqc/main'\n",
            modules_config=modules_config,
        )
    )
    row = rt.resolve()["FASTQC"]
    assert row["cpus"] == ("8", "withName", "conf/modules.config")  # overridden
    assert row["memory"] == ("12.GB", "withLabel:process_low", "conf/base.config")  # untouched
    assert row["time"] == ("4.h", "withLabel:process_low", "conf/base.config")


def test_alias_used_for_row_and_matching(tmp_path):
    """A module included `as ALIAS` is reported under the alias, and withName matches the alias."""
    modules_config = dedent(
        """\
        process {
            withName: 'FASTQC_TRIMMED' {
                cpus = { 4 * task.attempt }
            }
        }
        """
    )
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"FASTQC": ["process_low"]},
            includes="include { FASTQC as FASTQC_TRIMMED } from '../modules/nf-core/fastqc/main'\n",
            modules_config=modules_config,
        )
    )
    rows = rt.resolve()
    assert "FASTQC_TRIMMED" in rows
    assert "FASTQC" not in rows
    assert rows["FASTQC_TRIMMED"]["cpus"] == ("4", "withName", "conf/modules.config")


def test_complex_withname_flagged(tmp_path):
    """A withName selector matched via non-trivial regex is flagged for manual verification."""
    modules_config = dedent(
        """\
        process {
            withName: '.*FASTQ.*' {
                cpus = { 4 * task.attempt }
            }
        }
        """
    )
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"FASTQC": ["process_low"]},
            includes="include { FASTQC } from '../modules/nf-core/fastqc/main'\n",
            modules_config=modules_config,
        )
    )
    resolved = rt.resolve()["FASTQC"]["cpus"]
    assert resolved.value == "4"
    assert resolved.selector == "withName (verify manually)"
    assert resolved.file == "conf/modules.config"


def test_glob_prefix_withname_confident(tmp_path):
    """A `.*:NAME` glob-prefix selector matches confidently (no manual-verify flag)."""
    modules_config = dedent(
        """\
        process {
            withName: '.*:FASTQC' {
                time = { 2.h * task.attempt }
            }
        }
        """
    )
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"FASTQC": ["process_low"]},
            includes="include { FASTQC } from '../modules/nf-core/fastqc/main'\n",
            modules_config=modules_config,
        )
    )
    assert rt.resolve()["FASTQC"]["time"] == ("2.h", "withName", "conf/modules.config")


def test_non_module_includes_ignored(tmp_path):
    """Plugin and subworkflow includes (not under modules/) are ignored."""
    includes = dedent(
        """\
        include { FASTQC } from '../modules/nf-core/fastqc/main'
        include { paramsSummaryMap } from 'plugin/nf-schema'
        include { UTILS_NFCORE_PIPELINE } from '../subworkflows/nf-core/utils_nfcore_pipeline'
        """
    )
    rt = ResourcesTable(_scaffold(tmp_path, modules={"FASTQC": ["process_low"]}, includes=includes))
    assert set(rt.resolve()) == {"FASTQC"}


def test_render_markdown_and_source_grouping(tmp_path):
    """The rendered table groups mixed per-directive selectors into one Selector cell."""
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"ALIGN": ["process_high", "process_long"]},
            includes="include { ALIGN } from '../modules/nf-core/align/main'\n",
        )
    )
    table = rt.render_markdown()
    assert "| Process | CPUs | Memory | Time | Selector | Source |" in table
    # cpus+memory from process_high, time from process_long -> grouped selector cell
    assert "withLabel:process_high (cpus, memory); withLabel:process_long (time)" in table
    # both labels live in base.config, so the Source cell collapses to a single file
    assert "| conf/base.config |" in table


def test_write_table_replaces_block(tmp_path):
    """write_table refreshes only the delimited block and leaves surrounding prose intact."""
    docs = tmp_path / "docs"
    docs.mkdir()
    docs_file = docs / "resources.md"
    docs_file.write_text(f"# Resources\n\nIntro paragraph.\n\n{TABLE_START}\n\nOLD\n\n{TABLE_END}\n\nAfter.\n")
    rt = ResourcesTable(
        _scaffold(
            tmp_path,
            modules={"FASTQC": ["process_low"]},
            includes="include { FASTQC } from '../modules/nf-core/fastqc/main'\n",
        )
    )
    rt.write_table(docs_file)
    content = docs_file.read_text()
    assert "Intro paragraph." in content
    assert "After." in content
    assert "OLD" not in content
    assert "`FASTQC`" in content
    assert content.count(TABLE_START) == 1
