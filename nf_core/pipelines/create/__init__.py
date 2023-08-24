"""A Textual app to create a pipeline."""
from textual.app import App
from textual.widgets import Button

from nf_core.pipelines.create.basicdetails import BasicDetails
from nf_core.pipelines.create.custompipeline import CustomPipeline
from nf_core.pipelines.create.pipelinetype import ChoosePipelineType
from nf_core.pipelines.create.utils import CreateConfig
from nf_core.pipelines.create.welcome import WelcomeScreen


class PipelineCreateApp(App):
    """A Textual app to manage stopwatches."""

    CSS_PATH = "create.tcss"
    TITLE = "nf-core create"
    SUB_TITLE = "Create a new pipeline with the nf-core pipeline template"
    BINDINGS = [
        ("d", "toggle_dark", "Toggle dark mode"),
        ("q", "quit", "Quit"),
    ]
    SCREENS = {
        "welcome": WelcomeScreen(),
        "basic_details": BasicDetails(),
        "choose_type": ChoosePipelineType(),
        "type_custom": CustomPipeline(),
    }

    # Initialise config as empty
    TEMPLATE_CONFIG = CreateConfig()

    def on_mount(self) -> None:
        self.push_screen("welcome")

    def on_button_pressed(self, event: Button.Pressed) -> None:
        """Handle all button pressed events."""
        if event.button.id == "start":
            self.switch_screen("basic_details")
        elif event.button.id == "type_nfcore":
            self.switch_screen("type_nfcore")
        elif event.button.id == "type_custom":
            self.switch_screen("type_custom")
        elif event.button.id == "custom_done":
            pass

    def action_toggle_dark(self) -> None:
        """An action to toggle dark mode."""
        self.dark = not self.dark
