# Dashboard UI cleanup — implementation brief

This documents specific UI/UX changes for the logged-in dashboard page
(the page showing "Your lists" after sign in). Give this file to
Claude Code along with COLOR_PALETTE.md and ask it to implement these
changes on the existing dashboard component(s).

## Problems with the current version
- Content is pinned to the top-left with no contained width — it
  floats in raw page whitespace instead of living in a proper layout.
- No visual separation between the account/header area and the list
  content below it.
- Primary actions ("Create an email list", "View public page", "View
  responses", "Download QR code") are rendered as default underlined
  text links, indistinguishable from incidental text.
- Inside each list card, all text is the same size/weight, so the
  list name doesn't stand out from secondary details like the share
  link.

## Structural changes

1. **Contain and center the page content.** Wrap the dashboard content
   in a container with `max-width: 680px` (or similar — match
   whatever container width is already used elsewhere in the app if
   one exists), centered horizontally (`margin: 0 auto`). Do not let
   content span the full page width or sit flush to the left edge.

2. **Add a page header bar** at the top, separated from the content
   below by a bottom border (`border-bottom: 0.5px solid` using the
   `border` token from COLOR_PALETTE.md). The header should contain:
   - App name/logo on the left
   - User's email and a "Log out" button on the right, grouped
     together
   The "Log out" button should be a proper outlined button (border +
   transparent background), not a solid colored button — it's a
   low-priority action and shouldn't visually compete with primary
   actions on the page.

3. **Add a section header row** below the page header, containing:
   - "Your lists" as a heading (use the `h2`-equivalent size in the
     app's existing type scale)
   - A "New list" button on the right side of the same row, styled as
     a solid primary button (`sage` background per COLOR_PALETTE.md),
     replacing the current underlined "Create an email list" text
     link. Include a plus icon if the app has an icon library
     available; otherwise text-only is fine.

## Card changes (apply to each list item)

1. Remove underline styling from all action links inside the card.
2. Restructure each card's internal layout as:
   - Top row: list name (left, bold/medium weight, primary text
     color) and response count (right, smaller, secondary text
     color) — e.g. "1 response"
   - Below that: the share URL, demoted to small, muted/tertiary text
     color, monospace font if available
   - Below that: a row of 3 action buttons (Public page, Responses,
     QR code), each styled as a small outlined button with an icon if
     available — not plain text links. Use `8px` gap between buttons.
3. Card background should be a plain white/surface color with a thin
   border, not the tan accent color — reserve tan for secondary
   buttons/accents elsewhere, since using it as the card background
   for every card makes the page feel heavy. Use `cream` or white for
   card background, with a `0.5px solid border` token border.
4. Use `12px` gap between stacked cards (not the current larger gap).

## What NOT to change
- Don't change the underlying data/logic — this is a layout and
  styling pass only.
- Don't add new features (pagination, search, filters) — just clean
  up what's already there.
- Keep using the color tokens from COLOR_PALETTE.md throughout; don't
  introduce new colors for this pass.

## Icons

Use the `@tabler/icons-react` package for any icons referenced in this
brief (the plus icon on "New list", and the icons inside the Public
page / Responses / QR code buttons).

1. Install it: `npm install @tabler/icons-react`
2. Import only the specific icons needed, e.g.:
   ```tsx
   import { IconExternalLink, IconUsers, IconQrcode, IconPlus } from '@tabler/icons-react';
   ```
3. Use them as components, sized to match the surrounding text
   (roughly 14-16px to align with button label text), e.g.:
   ```tsx
   <IconExternalLink size={16} />
   ```
4. Suggested mapping for this brief:
   - "New list" button → `IconPlus`
   - "Public page" button → `IconExternalLink`
   - "Responses" button → `IconUsers`
   - "QR code" button → `IconQrcode`
5. Icons should inherit the button's text color rather than being
   hardcoded to a specific color — don't set a `color` prop unless a
   button's text color is also hardcoded for some reason.

## Process
Implement this in small steps and show me the result after each major
piece (header bar, section header row, card restructure) rather than
all at once, so I can confirm it looks right before moving on.
