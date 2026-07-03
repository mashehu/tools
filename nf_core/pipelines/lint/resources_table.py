import logging
from pathlib import Path

from nf_core.pipelines.resources_utils import ResourcesTable, extract_table_block, normalise_block

log = logging.getLogger(__name__)


def resources_table(self):
    """Check that the compute resources table in ``docs/resources.md`` is up to date.

    Regenerates the module resources table (CPUs / memory / time, resolved per
    directive following ``withName`` > ``withLabel`` > process default) from the
    pipeline configuration and module files, and compares it to the auto-generated
    block committed in ``docs/resources.md``.

    If the block is missing or out of date the test fails; run
    ``nf-core pipelines lint --fix resources_table`` to regenerate it.

    Can be skipped by adding the following to the ``.nf-core.yml`` file:

    .. code-block:: yaml

        lint:
            resources_table: False
    """
    passed = []
    failed = []
    warned = []
    fixed = []
    could_fix = False

    docs_file = Path(self.wf_path) / "docs" / "resources.md"

    table = ResourcesTable(self.wf_path)
    try:
        expected = table.render_block()
    except (OSError, UnicodeDecodeError) as e:
        # unreadable / undecodable pipeline files: warn but let logic bugs surface
        warned.append(f"Could not generate the resources table: {e}")
        return {"passed": passed, "failed": failed, "warned": warned}

    current = docs_file.read_text() if docs_file.is_file() else ""
    fixing = "resources_table" in self.fix

    if normalise_block(extract_table_block(current)) == normalise_block(expected):
        passed.append("`docs/resources.md` resources table is up to date")
    elif fixing:
        # reuses the parse/discovery already cached on `table` from render_block above
        table.write_table(docs_file)
        fixed.append("`docs/resources.md` resources table regenerated.")
        passed.append("`docs/resources.md` resources table is up to date")
    else:
        if not docs_file.is_file():
            failed.append(
                "`docs/resources.md` is missing – run `nf-core pipelines lint --fix resources_table` to generate it."
            )
        else:
            failed.append(
                "`docs/resources.md` resources table is out of date – run "
                "`nf-core pipelines lint --fix resources_table` to update it."
            )
        could_fix = True

    return {"passed": passed, "failed": failed, "warned": warned, "fixed": fixed, "could_fix": could_fix}
