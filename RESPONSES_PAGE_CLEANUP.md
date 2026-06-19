# Responses page — implementation brief

This documents UI changes for the responses page (currently at
`/forms/[id]/responses`). Give this file to Claude Code along with
COLOR_PALETTE.md and ask it to implement these changes, following the
same conventions established on the dashboard and create-list pages.

## Problems with the current version
- No shared header bar — page feels disconnected from the rest of
  the app.
- "Export CSV" is a plain underlined text link at the top, not a
  proper button.
- Page title "Josh Email List — responses" is clunky and
  unprofessional.
- The table is a raw unstyled HTML table with no card, no row
  shading, no visual polish.
- "Back home" is an underlined link at the bottom — wrong position
  and wrong label.
- Full ISO timestamp ("6/18/2026, 12:43:03 PM") is unnecessarily
  long and hard to scan.

## Structural changes

1. **Add the shared header bar** (same component used on dashboard
   and create-list pages — logo left, email + log out button right,
   bottom border separator). Do not create a new one; reuse the
   existing shared component.

2. **Contain and center page content** at `max-width: 680px`,
   centered horizontally, matching all other pages.

3. **Add back-navigation** at the top of the content area, above the
   title card: "← Back to your lists" in secondary text color, no
   underline, using `IconArrowLeft` from `@tabler/icons-react`.
   Remove "Back home" from the bottom of the page entirely.

## Title card

Replace the plain page title with a styled card above the table:
- White background, `0.5px solid border` token border, `12px`
  border-radius, `20px 24px` padding
- Inside, two sections side by side (space-between):

  **Left side:**
  - A `4px` wide, `44px` tall sage green accent bar
    (`background: #B3CAA8`, `border-radius: 4px`) flush to the left
  - `16px` gap between the bar and the text
  - List name as the title (18px, medium weight, primary text color)
  - Below that: "[n] responses collected" in secondary text color,
    13px — use the actual response count dynamically

  **Right side:**
  - "Export CSV" as a solid sage button (`sage` token background,
    primary text color, `10px 16px` padding, `14px` font, medium
    weight, `6px` border-radius) with a download icon
    (`IconDownload` from `@tabler/icons-react`) to the left of the
    label. This button should trigger the existing CSV export logic —
    don't change the export functionality, only the button styling.

## Table

Replace the existing raw HTML table with a styled card:

**Card wrapper:**
- White background, `0.5px solid border` token border, `12px`
  border-radius, `overflow: hidden` (so row backgrounds don't bleed
  outside the rounded corners), `16px` margin-top from the title
  card above

**Column header row:**
- White background (same as card — no separate shading)
- `0.5px solid border` token bottom border separating it from the
  first data row
- `12px 20px` padding
- 4-column grid: Name / Email / Message / Submitted
- Column header text: 12px, medium weight, muted text color
  (`text-muted` token), uppercase, `0.05em` letter-spacing
- Grid column widths: `1.2fr 1.8fr 1.4fr 1.4fr`

**Data rows:**
- Same 4-column grid and `14px 20px` padding as the header
- Alternating row backgrounds: odd rows white, even rows `#FAFAF7`
  (a very slightly warm off-white — just enough to help the eye
  track across rows without being heavy)
- Row separator: `0.5px solid #F0EDE4` bottom border on each row
  except the last
- Name column: 14px, medium weight, primary text color — it's the
  anchor identity field so it gets the most visual weight
- Email column: 14px, secondary text color
- Message column: 14px, secondary text color. If the message field
  is empty/null, display a single "—" dash in muted text color
  instead of leaving the cell blank
- Submitted column: 12px, muted text color. Format the timestamp as
  "Jun 18, 12:43 PM" (abbreviated month, no year, no seconds) —
  the full ISO timestamp currently shown is too long to scan quickly

## What NOT to change
- Don't change the CSV export logic or file format — only the button
  that triggers it
- Don't change which columns are shown or what data is fetched
- Don't add sorting, filtering, pagination, or search — those are
  future features, not part of this pass
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
Implement in steps: header + back-nav first, then title card, then
table card. Show me the result after each step before moving on.
