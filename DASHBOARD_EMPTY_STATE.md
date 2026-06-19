# Dashboard empty state

This documents the empty state shown on the dashboard ("Your lists"
page) when a user has no lists yet. Give this file to Claude Code
along with COLOR_PALETTE.md and ask it to implement this.

## Problem with the current version
When there are no lists, the page just shows plain text ("No forms
yet — create one above.") directly on the cream page background with
no container around it. Next to the styled white cards that appear
once real lists exist, this looks unfinished rather than like an
intentional empty state.

## Fix: styled empty state card

Replace the current plain text with a centered card, in the same
position where the list of cards would otherwise appear (same
horizontal placement/width as the regular list cards on this page).

**Card:**
- White background, `0.5px solid border` token border, `12px`
  border-radius
- `56px 24px` padding (much more vertical padding than a normal list
  card, since this should feel spacious, not cramped)
- All content inside centered (`text-align: center`)

**Icon badge:**
- 56px square, `14px` border-radius, `mint` token background,
  centered
- Inside it, the same envelope icon mark used in the app's logo
  (see LOGO_AND_REBRAND.md for the icon SVG), sized ~28px, using a
  darker green stroke color (`#4D5C42` or the closest token) so it
  reads clearly against the mint background
- `18px` margin below the badge before the heading

**Text:**
- Heading: "No lists yet" — 17px, medium weight, primary text color,
  `6px` margin below
- Subtext: "Create your first list to start collecting emails for
  your missionary's weekly updates." — 14px, secondary text color,
  `1.5` line-height, max-width ~360px so it doesn't stretch full
  width on a wide screen, centered, `22px` margin below before the
  button

**Button:**
- "+ Create your first list" — solid `sage` token background,
  primary text color, `10px 18px` padding, 14px font, medium weight,
  `6px` border-radius
- Clicking it should do the same thing as the "New list" button in
  the page header (navigate to the create-list page) — don't
  duplicate logic, just trigger the same action/navigation

## What NOT to change
- Don't change the "New list" button in the page header — it stays
  as-is; this empty state adds a second, more prominent entry point
  specifically for the zero-state, it doesn't replace the existing one
- Don't change this page's behavior once lists exist — this only
  affects what's shown when the list count is zero
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
Implement and show me the result in the empty state (zero lists) —
if there's existing test data, temporarily check with no lists or
ask me to confirm how to view the empty state during review.
