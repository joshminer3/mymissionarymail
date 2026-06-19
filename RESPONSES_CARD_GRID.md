# Responses page — card grid layout

This documents replacing the table layout on the responses page
(currently at `/forms/[id]/responses`) with a 3-column card grid.
This is an update to the page covered in RESPONSES_PAGE_CLEANUP.md —
if that brief was already implemented, this brief only replaces the
table section; the header, back-nav, and title card from that brief
stay as-is. Give this file to Claude Code along with
COLOR_PALETTE.md.

## Why this change
The table layout breaks down when message content varies in length —
a long message forces the entire row to expand, distorting the other
columns and creating uneven whitespace. A card grid lets each
response's height adjust independently, which handles variable-length
messages cleanly. Given that most lists are expected to have 50+
responses, a 3-column grid was chosen over 2-column to keep more
responses visible without scrolling, accepting that longer messages
will make individual cards taller relative to short ones.

## Replace the table with a card grid

Remove the existing table (header row + data rows) entirely. Replace
it with a CSS grid of response cards.

**Grid container:**
- `display: grid`, `grid-template-columns: 1fr 1fr 1fr`, `14px` gap
- Below ~900px viewport width, drop to 2 columns; below ~600px, drop
  to 1 column — this grid needs to be responsive since dashboard
  pages get viewed on a range of screen sizes
- `16px` margin-top from the title card above

**Each response card:**
- White background, `0.5px solid border` token border, `12px`
  border-radius, `1.1rem` padding
- Top section:
  - Name: 14px, medium weight, primary text color
  - Below the name (own line, not sharing a row): timestamp, 12px,
    muted text color (`text-muted` token). Format as "Jun 18, 6:03 PM"
    (abbreviated month, no year, no seconds) — same format as used
    in RESPONSES_PAGE_CLEANUP.md
  - Below the timestamp: email, 13px, secondary text color, `10px`
    margin below before the divider
- Divider: `0.5px solid #F0EDE4` top border, `9px` padding-top before
  the message content below it
- Message: 13px, primary text color, `1.5` line-height. If the
  message field is empty/null, either omit the divider + message
  block entirely for that card, or show a muted "No message" instead
  — pick whichever is simpler given the existing component structure,
  but don't leave an empty divider with nothing under it.

**Card height:**
- Do not set a fixed or max height on cards — let each card grow to
  fit its content naturally. This is the core fix for the problem
  the table had; don't reintroduce it by truncating or clipping
  message text.
- Do not truncate long messages with ellipsis or a "show more"
  toggle for this pass — show the full message. This can be revisited
  later if extremely long messages become a real problem in practice,
  but isn't needed now.

## What NOT to change
- Don't change the title card, header, back-navigation, or Export
  CSV button — those stay exactly as implemented in
  RESPONSES_PAGE_CLEANUP.md
- Don't change the CSV export logic or what data is fetched
- Don't add sorting, filtering, search, or pagination — not part of
  this pass
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
Implement the grid and card component, show me the result with a mix
of short and long messages (like the current test data) so we can
confirm variable-length content displays correctly without breaking
the layout.
