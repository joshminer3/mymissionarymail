# Logo + rebrand to MyMissionaryMail — implementation brief

This documents the new logo and the rename from "MissionaryMail" to
"MyMissionaryMail" across the app. Give this file to Claude Code
along with COLOR_PALETTE.md and ask it to implement these changes.

## Background
The product is being renamed from "MissionaryMail" to
"MyMissionaryMail" to avoid confusion with an existing unrelated
company/site with a similar name. This brief covers both the new
logo and the text rename — do them together since they touch the
same places (the shared header component, page titles, etc).

## Logo design

### Icon mark
A minimal line-art envelope:
- Outer shape: rounded rectangle, no fill (transparent/outline only)
- Stroke color: `deep-sage` token (`#647262`)
- Stroke width: `1.5px` at normal display sizes (header, body content)
- Inside the rectangle: a simple V-shaped line (the envelope flap),
  same stroke color and width, drawn from the top-left corner down to
  a center point about 60% down the shape, then back up to the
  top-right corner — this is what makes it read as an envelope rather
  than a plain rectangle
- Proportions: roughly 26 wide x 18 tall within a 32x32 viewBox,
  centered with a few pixels of margin on all sides
- No fill color anywhere in the normal-size version — it's a pure
  outline mark

As an SVG reference (adjust exact coordinates as needed to match the
app's icon component conventions, but preserve this structure):
```svg
<svg viewBox="0 0 32 32">
  <rect x="3" y="7" width="26" height="18" rx="3" fill="none" stroke="#647262" stroke-width="1.5"/>
  <path d="M4 9L16 17L28 9" stroke="#647262" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### Horizontal lockup (primary logo — use in the header)
- Icon mark on the left, sized ~32px square
- `12px` gap
- Wordmark "MyMissionaryMail" to the right: 22px, regular weight
  (400, not medium — this logo is intentionally lighter weight than
  the rest of the app's UI text), primary text color, slight letter
  spacing (`0.01em`)
- This lockup replaces the current plain-text "MissionaryMail" in the
  shared header component used across all authenticated pages, the
  login/signup pages' brand block, and the marketing landing page
  header

### Icon-only mark (for favicon and app icon use)
Same envelope icon as above, but needs a version with a heavier
stroke for small-size legibility:
- At favicon size (16px and 32px, the sizes browsers actually render
  in browser tabs), thin 1.5px strokes become illegible. Generate a
  separate version of the icon with `stroke-width: 2.5` for these
  small sizes specifically — don't just scale down the same exact SVG
  used in the header.
- Generate the standard favicon files needed for a Next.js app:
  - `favicon.ico` (multi-resolution, 16x16 and 32x32)
  - `icon.png` or `apple-icon.png` at 180x180 for iOS home screen /
    bookmark use (use the heavier-stroke version here too, and
    consider placing the icon on a solid `cream` or `sage` background
    square rather than transparent, since iOS app icons don't support
    transparency well)
  - Place these in the appropriate Next.js App Router location
    (`app/favicon.ico`, `app/icon.png`, etc.) so they're picked up
    automatically — check the Next.js version in use and follow its
    convention for static metadata files
- If generating actual ICO/PNG files isn't straightforward in this
  environment, at minimum generate the SVG versions and ask me how I
  want to convert/export them, rather than skipping this step
  silently.

## Text rename: MissionaryMail → MyMissionaryMail

Search the codebase for all instances of "MissionaryMail" as
user-facing text (not as a variable/function name unless trivial to
rename) and update to "MyMissionaryMail", including:
- The shared header component (paired with the new logo above)
- Login and signup page brand blocks ("MissionaryMail" heading +
  tagline)
- Marketing landing page header and any other mentions
- Footer copyright lines ("© 2026 MissionaryMail" → "© 2026
  MyMissionaryMail")
- The "Powered by MissionaryMail" line on the public signup page
- Page `<title>` / metadata tags (browser tab title, social share
  meta tags if any exist)
- Any hardcoded references in email templates, if applicable

Do NOT rename:
- Internal variable names, component names, or file names unless
  trivial and low-risk — a text/branding rename shouldn't turn into a
  large refactor. If a deeper rename is wanted later, treat that as a
  separate task.
- Database table/column names or any data already stored

## What NOT to change
- Don't change the color palette or any other established UI
  patterns — this is a logo + naming update only
- Don't change the actual domain/URL structure — that's a separate
  concern from this codebase change (the user will handle domain
  registration separately)

## Process
1. Implement the logo (icon mark + horizontal lockup) as a reusable
   component first, show me the result
2. Generate the favicon/app icon files
3. Do the text rename pass across the app, show me a summary of what
   changed (which files/pages were touched) rather than every single
   diff
