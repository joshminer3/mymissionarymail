# Page width consistency fix

This documents a small fix: the dashboard ("Your lists") and
create-list pages are currently using a `680px` max-width container,
while the responses page uses `1000px` (widened earlier to fit its
3-column card grid). This creates a visible inconsistency when
navigating between pages — the header and content shift width.

## Fix
Change the container `max-width` on the following pages from `680px`
to `1000px`, matching the responses page:
- Dashboard / "Your lists" page (root authenticated page)
- Create-list page (`/forms/new`)

This should make the header bar, back-navigation, and page content
on these pages span the same width as the responses page, so
navigating between them feels seamless rather than shifting width.

## Do NOT change
- **The public signup page** (`/m/[slug]`) stays at its current
  narrower width. This is intentional — that page is a focused,
  centered single-action page (like an invite card), not a
  browsing/dashboard page, and widening it would just add empty
  space on either side of the centered content without improving
  anything.
- Don't change the internal layout, spacing, or content structure of
  the dashboard or create-list pages otherwise — this is a container
  width change only. Existing cards, buttons, and form fields keep
  their current internal proportions; they'll just sit inside a wider
  centered container.
- If the shared header component reads its width from a layout
  wrapper rather than being set per-page, update it in that one
  shared place rather than duplicating the value across pages — check
  how the responses page currently gets its `1000px` width and apply
  the same approach (shared layout/component vs. per-page style) for
  consistency.

## Process
Make the change and show me the dashboard and create-list pages
side by side (or one after another) with the responses page so we
can confirm the widths now match.
