# Marketing / landing page — implementation brief

This documents the new public marketing page (the root `/` route,
shown to visitors who aren't logged in). Give this file to Claude
Code along with COLOR_PALETTE.md and ask it to build this page. This
is a new page, not a cleanup of an existing one — the current root
page just has the app name and Log in / Sign up links.

## Required asset
The flags image (uploaded separately as `missionflags.png`) needs to
be added to the project's static assets (e.g. `public/` folder in
Next.js) before this page is built. Use it as the photo inside the
phone mockup described below. If the asset isn't available yet, ask
me where to place it rather than substituting a placeholder.

## Page structure (top to bottom)

### 1. Header
- Reuse the existing brand mark style ("MissionaryMail", 18px,
  medium weight, primary text color) on the left
- On the right: a "Log in" button (plain text, no background,
  secondary text color, links to `/login`) and a "Sign up" button
  (solid `sage` background, primary text color, `6px` border-radius,
  links to the sign-up route)
- `0.5px solid border` token bottom border, same as other pages
- Content max-width `1000px` (wider than the `680px` used on app
  pages, since this is a marketing page meant to use more horizontal
  space), centered

### 2. Hero section
Two-column layout (`1.1fr 0.9fr` grid, `48px` gap), stacking to a
single column on mobile/narrow viewports:

**Left column:**
- Headline: "Collect your missionary's email list in minutes, not
  months" — 34px, medium weight, primary text color, 1.25 line-height
- Subtext below it: "Create a simple sign-up page, share the link or
  QR code, and watch the emails roll in. No more sign-up sheets at
  farewell parties or chasing comments on Instagram." — 16px,
  secondary text color, 1.6 line-height
- Primary CTA button: "Get started — it's free" — solid `sage`
  background, `12px 22px` padding, 15px font, medium weight, links to
  the sign-up route

**Right column — phone mockup:**
- Outer container: light tan/cream background (`#EDEAE1` or the
  closest existing token), `20px` border-radius, `28px` padding,
  centered content
- Phone frame: dark background (`#1a1a1a` or near-black), `32px`
  border-radius, `10px` padding, ~230px wide
- Screen (white background, `24px` border-radius, `overflow: hidden`):
  - A thin dark address-bar strip at the top showing
    "missionarymail.com/m/elder-smith" in small light text (9-10px,
    cream/white text on a deep-sage or dark background) — purely
    decorative, not a real input
  - Below that, padded content mimicking the real public signup page:
    - The flags image, ~90px tall, full width, `8px` border-radius,
      soft box-shadow (`0 4px 16px rgba(56,64,47,0.12)`) — matching
      the image treatment already used on the real public signup page
    - List title: "Elder Smith's email list" — small (13px), medium
      weight, centered
    - Welcome message: "Thanks for your support!" — smaller (9-10px),
      secondary text color, centered
    - A thin divider line
    - Name field: small label + small bordered input (visual only,
      not a real functional input — this is a static mockup image)
    - Email field: same treatment
    - "Sign me up" button: small solid `sage` button, centered text
  - This mockup should visually mirror the real public signup page
    (see PUBLIC_SIGNUP_PAGE_CLEANUP.md) at a reduced scale — same
    structure, same colors, same fields, just shrunk to fit a phone
    frame. It does not need to be interactive.

### 3. How it works section
- White background, full-width section with top and bottom
  `0.5px solid border` token borders to visually separate it from the
  hero and the rest of the page
- Centered section heading: "How it works" — 22px, medium weight
- Three-column grid (`28px` gap) below it, each column containing:
  - A small icon badge: 48px square, `12px` border-radius, centered
    icon (use `@tabler/icons-react`), alternating `mint` and `tan`
    token backgrounds across the three columns
  - A short title (15px, medium weight)
  - A one-line description (13px, secondary text color)
  - Content for the three steps:
    1. Icon: `IconPencil`. Title: "Create your list". Description:
       "Add a name, welcome message, and photo in under a minute."
    2. Icon: `IconQrcode`. Title: "Share the link or QR code".
       Description: "Post it on social media, or print the QR code
       for farewell parties."
    3. Icon: `IconDownload`. Title: "Export and email". Description:
       "Download responses as a list ready to import into Gmail."

### 4. Final CTA section
- Centered, `56px` vertical padding
- Heading: "Ready to set up your list?" — 24px, medium weight
- Subtext: "Free to create. Takes less than five minutes." — 15px,
  secondary text color
- "Sign up" button — solid `sage` background, links to sign-up route

### 5. Footer
- Top border separator, centered text
- "© 2026 MissionaryMail" — 12px, muted text color

## Responsive behavior
This page needs to work on mobile, since it'll be the entry point for
many first-time visitors clicking a link from social media:
- Hero section: stack to a single column below ~768px width, phone
  mockup centered below the text content
- "How it works" grid: stack to a single column below ~640px width
- Header: keep Log in / Sign up buttons visible at all widths; don't
  hide them behind a hamburger menu for this simple a header

## What NOT to change
- Don't change the actual login/signup page logic — this page only
  links to those existing routes
- Don't make the phone mockup functional/interactive — it's a static
  visual element
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
Build in sections: header, then hero (text first, then phone mockup),
then how-it-works, then final CTA + footer. Show me the result after
the hero section specifically before continuing, since it's the most
important part of the page, then show the rest once complete.
