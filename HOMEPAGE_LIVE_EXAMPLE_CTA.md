# Homepage hero — add "See a live example" secondary CTA

This documents adding a second, lower-commitment call-to-action below
the existing "Get started — it's free" button on the homepage hero
section. Give this file to Claude Code along with COLOR_PALETTE.md.

## Background
Current cold-traffic visitors (e.g. people arriving from a shared
Instagram story) only have one path forward on the homepage: clicking
"Get started" routes straight into account signup. There's no way to
see the actual product working before being asked to create an
account, which is likely contributing to bounce. This adds a
secondary path that lets visitors view a real, live example of the
public signup page with zero commitment.

## Change

Below the existing "Get started — it's free" button (which stays
exactly as-is, same position, same styling, same link target), add a
second button directly underneath it:

**Button:**
- Label: "See a live example →" (include the arrow character)
- Style: outline/secondary button — transparent background, `1px
  solid border` token border, secondary text color, NOT the solid
  sage style used by the primary button (this should visually read
  as the lower-priority option)
- Same width behavior as the primary button (don't force them to
  exactly match width if the text length differs — natural button
  sizing is fine, just keep them stacked and left-aligned with each
  other on desktop)
- `10px` margin-top from the primary "Get started" button
- Padding and font-size should match the primary button's dimensions
  so they feel like a matched pair, just different visual weight
- Links to an existing live public signup page already in the
  product. Use this exact, verified-working URL:
  `https://mymissionarymail.com/m/elder-smith-6ba37e` — opening in
  the same tab (not a new tab). Note: the plain `/m/elder-smith` slug
  referenced in the phone mockup graphic is NOT a real working page;
  do not use it. Use the full slug with the random suffix above.

**Small reassurance line below both buttons:**
- Text: "No account needed to look around."
- 12px, muted text color (`text-muted` token)
- `8px` margin-top from the second button

## Layout notes
- Both buttons and the reassurance text stay within the existing left
  column of the hero (don't span the full width or move into the
  phone-mockup column on the right)
- On mobile/narrow viewports, both buttons should remain stacked
  vertically with the same spacing — don't switch to side-by-side at
  narrow widths, vertical stacking is the desired layout at all sizes
  for this pair

## What NOT to change
- Don't change the existing "Get started" button's text, styling,
  position, or link target
- Don't change the headline, subtext, or phone mockup graphic
- Don't change anything below the hero section (How it works, footer,
  etc.)
- The link above (`elder-smith-6ba37e`) has already been manually
  verified as a real, working, publicly-accessible page — use it
  as-is, no further verification needed.  should be used instead

## Process
Implement and show me the updated hero section, including how it
looks on a narrow/mobile viewport, before considering this done.
