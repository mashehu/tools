"""Tests for the resources_table pipeline lint check.

These build a minimal pipeline directory directly (rather than the full create
fixture) so the check can be exercised without a Nextflow runtime.
"""

from pathlib import Path
from textwrap import dedent

import nf_core.pipelines.lint
from nf_core.pipelines.resources_utils import ResourcesTable

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
    }
    """
)


def _scaffold(tmp_path: Path, *, write_table: bool = True) -> Path:
    """Create a minimal pipeline with one labelled module and (optionally) the docs table."""
    (tmp_path / "conf").mkdir()
    (tmp_path / "conf" / "base.config").write_text(BASE_CONFIG)
    (tmp_path / "workflows").mkdir()
    (tmp_path / "workflows" / "pipeline.nf").write_text("include { FASTQC } from '../modules/nf-core/fastqc/main'\n")
    mod_dir = tmp_path / "modules" / "nf-core" / "fastqc"
    mod_dir.mkdir(parents=True)
    (mod_dir / "main.nf").write_text("process FASTQC {\n    label 'process_low'\n\n    script:\n    ''' '''\n}\n")
    (tmp_path / "docs").mkdir()
    docs_file = tmp_path / "docs" / "resources.md"
    docs_file.write_text(
        "# Resources\n\n<!-- nf-core resources table start -->\n<!-- nf-core resources table end -->\n"
    )
    if write_table:
        ResourcesTable(tmp_path).write_table(docs_file)
    return tmp_path


def _lint(wf_path: Path, fix=()):
    lint_obj = nf_core.pipelines.lint.PipelineLint(wf_path, fix=fix)
    return lint_obj.resources_table()


def test_resources_table_up_to_date(tmp_path):
    """Passes when the committed table matches the config."""
    result = _lint(_scaffold(tmp_path))
    assert len(result["failed"]) == 0
    assert any("up to date" in p for p in result["passed"])


def test_resources_table_out_of_date(tmp_path):
    """Fails when the committed table no longer matches the config."""
    wf = _scaffold(tmp_path)
    docs_file = wf / "docs" / "resources.md"
    docs_file.write_text(docs_file.read_text().replace("`FASTQC`", "`FASTQC` | 999"))

    result = _lint(wf)
    assert any("out of date" in f for f in result["failed"])
    assert result["could_fix"]


def test_resources_table_missing_file(tmp_path):
    """Fails when docs/resources.md is missing entirely."""
    wf = _scaffold(tmp_path, write_table=False)
    (wf / "docs" / "resources.md").unlink()

    result = _lint(wf)
    assert any("missing" in f for f in result["failed"])
    assert result["could_fix"]


def test_resources_table_fix_regenerates(tmp_path):
    """--fix regenerates the table and a subsequent lint passes."""
    wf = _scaffold(tmp_path)
    docs_file = wf / "docs" / "resources.md"
    docs_file.write_text(docs_file.read_text().replace("`FASTQC`", "`FASTQC` | 999"))

    result = _lint(wf, fix=("resources_table",))
    assert len(result["failed"]) == 0
    assert any("regenerated" in f for f in result["fixed"])
    assert len(_lint(wf)["failed"]) == 0


def test_resources_table_survives_reformatting(tmp_path):
    """A prettier-style reformat of the table (padded columns) still lints as up to date."""
    wf = _scaffold(tmp_path)
    docs_file = wf / "docs" / "resources.md"
    # Simulate prettier padding the table columns.
    content = docs_file.read_text().replace("| `FASTQC` |", "| `FASTQC`   |")
    docs_file.write_text(content)

    result = _lint(wf)
    assert len(result["failed"]) == 0
    assert any("up to date" in p for p in result["passed"])
