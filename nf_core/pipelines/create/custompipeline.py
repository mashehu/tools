from textwrap import dedent

from textual import on
from textual.app import ComposeResult
from textual.containers import Center, ScrollableContainer
from textual.screen import Screen
from textual.widgets import Button, Footer, Header, Markdown, Switch

from nf_core.pipelines.create.utils import PipelineFeature, markdown_genomes, markdown_multiqc

markdown_ci = """
Nf-core provides a set of Continuous Integration (CI) tests for Github.
When you open a pull request (PR) on your pipeline repository, these tests will run automatically.

There are different types of tests:
* Linting tests check that your code is formatted correctly and that it adheres to nf-core standards
    For code linting they will use [prettier](https://prettier.io/).
* Pipeline tests run your pipeline on a small dataset to check that it works
    These tests are run with a small test dataset on GitHub and a larger test dataset on AWS
* Marking old issues as stale
"""

markdown_badges = """
The pipeline `README.md` will include badges for:
* AWS CI Tests
* Zenodo DOI
* Nextflow
* Conda
* Docker
* Singularity
* Launching on Nextflow Tower
"""

markdown_configuration = """
Nf-core has a repository with a collection of configuration profiles.

Those config files define a set of parameters which are specific to compute environments at different Institutions.
They can be used within all nf-core pipelines.
If you are likely to be running nf-core pipelines regularly it is a good idea to use or create a custom config file for your organisation.

For more information about nf-core configuration profiles, see the [nf-core/configs repository](https://github.com/nf-core/configs)
"""

markdown_code_linters = """
Pipelines include code linters to check the formatting of your code in order to harmonize code styles between developers.
Linters will check all non-ignored files, e.g., JSON, YAML, Nextlow or Python files in your repository.
The available code linters are:

- pre-commit (https://pre-commit.com/): used to run all code-linters on every PR and on ever commit if you run `pre-commit install` to install it in your local repository.
- editor-config (https://github.com/editorconfig-checker/editorconfig-checker): checks rules such as indentation or trailing spaces.
- prettier (https://github.com/prettier/prettier): enforces a consistent style (indentation, quoting, line length, etc).
"""

markdown_citations = """
If adding citations, the pipeline template will contain a `CITATIONS.md` file to add the citations of all tools used in the pipeline.

Additionally, it will include a YAML file (`assets/methods_description_template.yml`) to add a Materials & Methods section describing the tools used in the pieline,
and the logics to add this section to the output MultiQC report (if the report is generated).
"""

markdown_gitpod = """
Gitpod (https://www.gitpod.io/) provides standardized and automated development environments.

Including this to your pipeline will provide an environment with the latest version of nf-core/tools installed and all its requirements.
This is useful to have all the tools ready for pipeline development.
"""

markdown_codespaces = """
The pipeline will include a devcontainer configuration.
The devcontainer will create a GitHub Codespaces for Nextflow development with nf-core/tools and Nextflow installed.

Github Codespaces (https://github.com/features/codespaces) is an online developer environment that runs in your browser, complete with VSCode and a terminal.
"""

markdown_changelog = """
Having a `CHANGELOG.md` file in the pipeline root directory is useful to track the changes added to each version.
You can read more information on the recommended format here: https://keepachangelog.com/en/1.0.0/
"""


class CustomPipeline(Screen):
    """Select if the pipeline will use genomic data."""

    def compose(self) -> ComposeResult:
        yield Header()
        yield Footer()
        yield Markdown(
            dedent(
                """
                # Template features
                """
            )
        )
        yield ScrollableContainer(
            PipelineFeature(
                markdown_genomes,
                "Use reference genomes",
                "The pipeline will be configured to use a copy of the most common reference genome files from iGenomes",
                "igenomes",
            ),
            PipelineFeature(
                markdown_ci,
                "Add Github CI tests",
                "The pipeline will include several GitHub actions for Continuous Integration (CI) testing",
                "ci",
            ),
            PipelineFeature(
                markdown_badges,
                "Add Github badges",
                "The README.md file of the pipeline will include GitHub badges",
                "github_badges",
            ),
            PipelineFeature(
                markdown_configuration,
                "Add configuration files",
                "The pipeline will include configuration profiles containing custom parameters requried to run nf-core pipelines at different institutions",
                "nf_core_configs",
            ),
            PipelineFeature(
                markdown_code_linters,
                "Use code linters",
                "The pipeline will include code linters and CI tests to lint your code: pre-commit, editor-config and prettier.",
                "code_linters",
            ),
            PipelineFeature(
                markdown_citations,
                "Include citations",
                "Include pipeline tools citations in CITATIONS.md and a method description in the MultiQC report (if enabled).",
                "citations",
            ),
            PipelineFeature(
                markdown_gitpod,
                "Include a gitpod environment",
                "Include the configuration required to use Gitpod.",
                "gitpod",
            ),
            PipelineFeature(
                markdown_codespaces,
                "Include GitHub Codespaces",
                "The pipeline will include a devcontainer configuration for GitHub Codespaces, providing a development environment with nf-core/tools and Nextflow installed.",
                "codespaces",
            ),
            PipelineFeature(
                markdown_multiqc,
                "Use multiqc",
                "The pipeline will include the MultiQC module which generates an HTML report for quality control.",
                "multiqc",
            ),
            PipelineFeature(
                markdown_changelog,
                "Add a changelog",
                "Add a CHANGELOG.md file.",
                "changelog",
            ),
            classes="features-container",
        )
        yield Center(
            Button("Back", id="back", variant="default"),
            Button("Continue", id="continue", variant="success"),
            classes="cta",
        )

    @on(Button.Pressed, "#continue")
    def on_button_pressed(self, event: Button.Pressed) -> None:
        """Save fields to the config."""
        skip = []
        for feature_input in self.query("PipelineFeature"):
            this_switch = feature_input.query_one(Switch)
            if not this_switch.value:
                skip.append(this_switch.id)
        self.parent.TEMPLATE_CONFIG.__dict__.update({"skip_features": skip, "is_nfcore": False})
