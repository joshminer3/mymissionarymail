# Create list form page — implementation brief

This documents UI changes for the "create a form" page (currently at
`/forms/new`). Give this file to Claude Code along with
COLOR_PALETTE.md and ask it to implement these changes. This page
should follow the same layout conventions established on the
dashboard page (see DASHBOARD_UI_CLEANUP.md if that's already been
implemented) so the two pages feel like the same app.

## Problems with the current version
- Content is pinned to the top-left with no contained width, same
  issue as the dashboard had.
- The page header bar (logo, account email, log out) from the
  dashboard isn't present here, so navigating between pages feels
  disjointed.
- The form fields float directly on the page background rather than
  being grouped in a card.
- The native browser file input ("Choose File / No file chosen") is
  unstyled and visually clashes with everything else.
- "Back home" is a small underlined link at the very bottom of the
  page, which is not where users expect back-navigation.
- Page title "Create a form" doesn't match the language used
  elsewhere ("Your lists" on the dashboard) — should say "list" not
  "form" for consistency, since "list" is the term used everywhere
  else in the product.

## Structural changes

1. **Reuse the page header bar** from the dashboard (logo on left,
   user email + log out button on right, bottom border separator).
   This should be a shared layout component if it isn't already,
   rather than being duplicated per-page — if the dashboard header
   isn't already a reusable component, extract it into one now and
   use it on both pages.

2. **Contain and center the page content** at `max-width: 680px`,
   centered horizontally, matching the dashboard.

3. **Add a back-navigation link at the top of the page**, above the
   title, styled as plain text with a left-arrow icon (use
   `IconArrowLeft` from `@tabler/icons-react`), reading "Back to your
   lists". Remove "Back home" from the bottom of the page.

4. **Rename the page title** from "Create a form" to "Create a list",
   and add a one-line subtitle below it in secondary text color, e.g.
   "Set up a new sign-up page to share with friends and family."

5. **Wrap all form fields in a card**: white/cream background, thin
   border (`border` token), rounded corners (`var(--border-radius-lg)`
   or whatever large radius token the app already uses), generous
   padding (~28px).

## Field styling

1. Each field label should be small, medium-weight, primary text
   color, with ~6px margin below it before the input.
2. Text inputs and the textarea should have: background slightly
   different from the card (use `cream` token if the card itself is
   white, or vice versa, so the input is visually distinct from the
   card surface), thin border (`border` token), rounded corners
   matching the card's radius scale (one step smaller than the card's
   radius is fine), and consistent padding (~10px vertical, ~12px
   horizontal) across all fields.
3. Add ~18px margin between each field group (label + input).

## File input styling

The native file input must not be shown in its default browser
styling. Implement a custom-styled file picker:
1. Hide the native `<input type="file">` (visually hidden, but still
   functional and accessible — don't use `display: none` in a way
   that breaks screen readers; use a visually-hidden technique or
   trigger it via a ref from a styled button).
2. Show a dashed-border container (use `border` token, `1px dashed`)
   with cream/light background, containing:
   - A small styled button reading "Choose file" with an upload icon
     (`IconUpload` from `@tabler/icons-react`)
   - Text next to it showing the selected filename, or "No file
     chosen" if none selected yet (use muted text color for this)
3. Clicking the styled button should trigger the hidden native file
   input's click event.
4. Once a file is selected, update the displayed filename text to
   match. Optional: show a small image preview thumbnail if a file is
   selected, but this is a nice-to-have, not required for this pass.

## Button changes

The "Create" button should:
- Read "Create list" instead of "Create" for consistency with the
  page title change
- Remain full-width (matches current behavior)
- Use the `sage` token background per COLOR_PALETTE.md (already
  correct in current version — no color change needed here, just
  confirming it should stay as-is)

## What NOT to change
- Don't change form validation logic, submission behavior, or what
  happens after a successful create — this is a layout/styling pass.
- Don't make any fields required/optional that aren't already.
- Don't add new fields.
- Keep using color tokens from COLOR_PALETTE.md; don't introduce new
  colors.

## Process
Implement this in steps and show me the result after each major
piece (header/back-nav, card + field styling, file input) rather than
all at once, so I can confirm it looks right before moving on.
