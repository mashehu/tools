#! /usr/bin/env python3
"""
Taken from https://github.com/MultiQC/MultiQC/blob/main/.github/workflows/changelog.py and updated for nf-core

To be called by a CI action. Assumes the following environment variables are set:
PR_TITLE, PR_NUMBER, GITHUB_WORKSPACE.

Adds a line into the CHANGELOG.md:
* Looks for the section to add the line to, based on the PR title, e.g. `Template:`, `Modules:`.
* All other change will go under the "### General" section.
* If an entry for the PR is already added, it will not run.

Other assumptions:
- CHANGELOG.md has a running section for an ongoing "dev" version
(i.e. titled "## nf-core vX.Ydev").
"""

import os
import re
import sys
from pathlib import Path

REPO_URL = "https://github.com/nf-core/tools"

# Section headers in CHANGELOG.md
SECTIONS = {
    "Template": "### Template",
    "Download": "### Download",
    "Linting": "### Linting",
    "Modules": "### Modules",
    "Subworkflows": "### Subworkflows",
}
DEFAULT_SECTION = "General"
DEFAULT_SECTION_HEADER = "### General"

# Skip patterns
SKIP_CHANGELOG_PATTERNS = [
    "skip changelog",
    "skip change log",
    "no changelog",
    "no change log",
    "bump version",
]

# Changelog file title
CHANGELOG_TITLE = "# nf-core/tools: Changelog"

# Version patterns
VERSION_HEADER_PREFIX = "## "
VERSION_REGEX = r".*(v\d+\.\d+\.\d+(dev)?).*"

# Assumes the environment is set by the GitHub action.
pr_title = os.environ["PR_TITLE"]
pr_number = os.environ["PR_NUMBER"]
comment = os.environ.get("COMMENT", "")
workspace_path = Path(os.environ.get("GITHUB_WORKSPACE", ""))

assert pr_title, pr_title
assert pr_number, pr_number

# Trim the PR number added when GitHub squashes commits, e.g. "Template: Updated (#2026)"
pr_title = pr_title.removesuffix(f" (#{pr_number})")  # type: ignore

changelog_path = workspace_path / "CHANGELOG.md"

if any(line in pr_title.lower() for line in SKIP_CHANGELOG_PATTERNS):
    print("Skipping changelog update")
    sys.exit(0)


def _normalize_section_name(name: str) -> str:
    """
    Normalize section name for matching by removing plural 's' and 'ing' suffix.
    E.g., 'Linting' -> 'Lint', 'Modules' -> 'Module'
    """
    normalized = name.lower()
    # Remove 'ing' suffix (e.g., 'Linting' -> 'Lint')
    if normalized.endswith("ing"):
        normalized = normalized[:-3]
    # Remove plural 's' (e.g., 'Modules' -> 'Module')
    elif normalized.endswith("s"):
        normalized = normalized[:-1]
    return normalized


def _determine_change_type(pr_title) -> tuple[str, str]:
    """
    Determine the type of the PR: Template, Download, Linting, Modules, Subworkflows, or General
    Returns a tuple of the section name and the section header.
    """
    current_section_header = DEFAULT_SECTION_HEADER
    current_section = DEFAULT_SECTION

    pr_title_lower = pr_title.lower()

    # Check if the PR title matches any of the sections.
    for section, section_header in SECTIONS.items():
        normalized_section = _normalize_section_name(section)
        # Match normalized section name or exact section name
        if normalized_section in pr_title_lower or section.lower() in pr_title_lower:
            current_section_header = section_header
            current_section = section
            break

    print(f"Detected section: {current_section}")
    return current_section, current_section_header


# Determine the type of the PR
section, section_header = _determine_change_type(pr_title)

# Remove section indicator from the PR title.
pr_title = re.sub(rf"{section}:[\s]*", "", pr_title, flags=re.IGNORECASE)

# Prepare the change log entry.
pr_link = f"([#{pr_number}]({REPO_URL}/pull/{pr_number}))"

# Handle manual changelog entries through comments.
if comment := comment.removeprefix("@nf-core-bot changelog").strip():  # type: ignore
    print(f"Adding manual changelog entry: {comment}")
    pr_title = comment
new_lines = [
    f"- {pr_title} {pr_link}\n",
]
print(f"Adding new lines into section '{section}':\n" + "".join(new_lines))

# Finally, updating the changelog.
# Read the current changelog lines. We will print them back as is, except for one new
# entry, corresponding to this new PR.
try:
    with changelog_path.open("r") as f:
        orig_lines = f.readlines()
except FileNotFoundError:
    print(f"Error: CHANGELOG.md not found at {changelog_path}", file=sys.stderr)
    sys.exit(1)
except OSError as e:
    print(f"Error reading CHANGELOG.md: {e}", file=sys.stderr)
    sys.exit(1)

updated_lines: list[str] = []


def _skip_existing_entry_for_this_pr(line: str, same_section: bool = True) -> str:
    if line.strip().endswith(pr_link):
        print(f"Found existing entry for this pull request #{pr_number}:")
        existing_lines = [line]
        if new_lines and new_lines == existing_lines and same_section:
            print(f"Found existing identical entry for this pull request #{pr_number} in the same section:")
            print("".join(existing_lines))
            sys.exit(0)  # Just leaving the CHANGELOG intact
        else:
            print(
                f"Found existing entry for this pull request #{pr_number}. It will be replaced and/or moved to proper section"
            )
            print("".join(existing_lines))
            for _ in range(len(existing_lines)):
                try:
                    line = orig_lines.pop(0)
                except IndexError:
                    break
    return line


# Find the next line in the change log that matches the pattern "# nf-core/tools v.*dev"
# If it doesn't exist, exist with code 1 (let's assume that a new section is added
# manually or by CI when a release is pushed).
# Else, find the next line that matches the `section` variable, and insert a new line
# under it (we also assume that section headers are added already).
inside_version_dev = False
already_added_entry = False
while orig_lines:
    line = orig_lines.pop(0)

    # If the line already contains a link to the PR, don't add it again.
    line = _skip_existing_entry_for_this_pr(line, same_section=False)

    if (
        line.startswith(VERSION_HEADER_PREFIX) and not line.strip() == CHANGELOG_TITLE
    ):  # Version header, e.g. "## v2.12.0dev"
        print(f"Found version header: {line.strip()}")
        updated_lines.append(line)

        # Parse version from the line `## v2.12.0dev` or
        # `## [v2.11.1 - Magnesium Dragon Patch](https://github.com/nf-core/tools/releases/tag/2.11) - [2023-12-20]` ...
        if not (m := re.match(VERSION_REGEX, line)):
            print(f"Cannot parse version from line {line.strip()}.", file=sys.stderr)
            sys.exit(1)
        version = m.group(1)
        print(f"Found version: {version}")

        if not inside_version_dev:
            if not version.endswith("dev"):
                print(
                    "Can't find a 'dev' version section in the changelog. Make sure "
                    "it's created, and all the required sections, e.g. `### Template` are created under it .",
                    file=sys.stderr,
                )
                sys.exit(1)
            inside_version_dev = True
        else:
            if version.endswith("dev"):
                print(
                    f"Found another 'dev' version section in the changelog, make"
                    f"sure to change it to a 'release' stable version tag. "
                    f"Line: {line.strip()}",
                    file=sys.stderr,
                )
                sys.exit(1)
            # We are past the dev version, so just add back the rest of the lines and break.
            while orig_lines:
                line = orig_lines.pop(0)
                line = _skip_existing_entry_for_this_pr(line, same_section=False)
                if line:
                    updated_lines.append(line)
            break
        continue
    print(f"Found line: {line.strip()}")
    print(f"inside_version_dev: {inside_version_dev}")
    print(f"section_header: {section_header}")
    if inside_version_dev and line.lower().startswith(section_header.lower()):  # Section of interest header
        print(f"Found section header: {line.strip()}")
        if already_added_entry:
            print(
                f"Already added new lines into section {section}, is the section duplicated?",
                file=sys.stderr,
            )
            sys.exit(1)
        updated_lines.append(line)
        # Collecting lines until the next section.
        section_lines: list[str] = []
        while True:
            if not orig_lines:
                print(
                    f"Error: Reached end of file while processing section '{section}' without finding next section header",
                    file=sys.stderr,
                )
                sys.exit(1)
            line = orig_lines.pop(0)
            if line.startswith("#"):
                print(f"Found the next section header: {line.strip()}")
                # Found the next section header, so need to put all the lines we collected.
                updated_lines.append("\n")
                _updated_lines = [_l for _l in section_lines + new_lines if _l.strip()]
                updated_lines.extend(_updated_lines)
                updated_lines.append("\n")
                if new_lines:
                    print(f"Updated {changelog_path} section '{section}' with lines:\n" + "".join(new_lines))
                else:
                    print(f"Removed existing entry from {changelog_path} section '{section}'")
                already_added_entry = True
                # Pushing back the next section header line
                orig_lines.insert(0, line)
                break
            # If the line already contains a link to the PR, don't add it again.
            line = _skip_existing_entry_for_this_pr(line, same_section=True)
            section_lines.append(line)

    else:
        updated_lines.append(line)


def collapse_newlines(lines: list[str]) -> list[str]:
    updated = []
    for idx in range(len(lines)):
        if idx != 0 and not lines[idx].strip() and not lines[idx - 1].strip():
            continue
        updated.append(lines[idx])
    return updated


updated_lines = collapse_newlines(updated_lines)


# Finally, writing the updated lines back.
try:
    with changelog_path.open("w") as f:
        f.writelines(updated_lines)
except OSError as e:
    print(f"Error writing to CHANGELOG.md: {e}", file=sys.stderr)
    sys.exit(1)
