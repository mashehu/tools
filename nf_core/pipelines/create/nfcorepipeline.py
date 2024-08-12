from textwrap import dedent

from textual import on
from textual.app import ComposeResult
from textual.containers import Center, ScrollableContainer
from textual.screen import Screen
from textual.widgets import Button, Footer, Header, Markdown, Switch

from nf_core.pipelines.create.utils import PipelineFeature, markdown_genomes, markdown_multiqc


class NfcorePipeline(Screen):
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
                markdown_multiqc,
                "Use multiqc",
                "The pipeline will include the MultiQC module which generates an HTML report for quality control.",
                "multiqc",
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
        self.parent.TEMPLATE_CONFIG.__dict__.update({"skip_features": skip, "is_nfcore": True})
