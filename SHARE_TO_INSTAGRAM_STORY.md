# Share to Instagram Story button

This documents a new feature: a "Share to Story" button on each list
card on the dashboard, which opens a pre-filled Instagram Story
(background image + working link sticker) via the device's native
share sheet. Give this file to Claude Code along with
COLOR_PALETTE.md.

## Important platform constraints (read first)
- Instagram does not provide a way to deep-link directly into a
  pre-filled Story from a website button. The actual mechanism is:
  trigger the device's native OS share sheet (via the Web Share API
  in the browser), the user then taps "Instagram" from the list of
  share targets the OS shows them, and Instagram opens with the
  shared content pre-loaded as a Story draft.
- This only works on mobile (iOS/Android), since the Web Share API
  and Instagram's Stories sharing intent both require a mobile OS
  and the Instagram app installed. It will not work on desktop
  browsers.
- The user still has full control once Instagram opens — they can
  move, resize, or delete the link sticker, and can still choose not
  to post. We are pre-filling a draft, not auto-posting.
- The text on the background image becomes a flattened part of the
  image once shared — Instagram does not let us pre-fill *editable
  text* as a separate layer via the share API. To give the user an
  editable text experience, we instead share a plain background
  image (color/icon only, no baked-in text) plus the link sticker,
  and prompt the user to add their own Instagram Text element on top
  once they're in Instagram. See "Background image" section below
  for exactly what to generate.

## Button placement
Add a new button to each list card on the dashboard (alongside the
existing "Public page", "Responses", "QR code" buttons — see
DASHBOARD_UI_CLEANUP.md for the existing card structure). Label:
"Share to Story". Style it distinctly from the other buttons using
the recognizable Instagram gradient (`linear-gradient(45deg, #f9ce34,
#ee2a7b, #6228d7)`), white text, same border-radius and padding as
the other card buttons, with a small camera icon
(`IconCamera` from `@tabler/icons-react`) before the label.

**Visibility:** Since this only works on mobile, detect if the
browser supports the Web Share API with file sharing
(`navigator.canShare` with a files array) before showing the button.
If unsupported (e.g. desktop), either hide the button entirely or
show it disabled with a tooltip/title like "Available on mobile" —
hiding entirely is preferred so the dashboard doesn't look broken on
desktop.

## Background image
Generate a simple background image server-side (or client-side via
canvas) for the Story, using:
- A gradient background using `mint` to `sage` tokens
  (`linear-gradient(135deg, #DCE8D5 0%, #B3CAA8 100%)`)
- The envelope icon mark (same as the logo, see LOGO_AND_REBRAND.md)
  centered near the top-middle, outlined in `text-primary` color
- Below the icon, do NOT bake in the "Sign up to get my weekly
  missionary emails!" text as part of the image — leave that area
  visually empty/plain. Instead, prompt the user via a brief on-page
  instruction (see "User flow" below) to add this as their own
  Instagram text layer after the share sheet opens, so they can
  freely edit, reword, or personalize it before posting.
- Image dimensions: 1080x1920 (standard Story aspect ratio)
- Export as PNG

## Link sticker
Pass the list's actual public page URL (e.g.
`mymissionarymail.com/m/elder-smith-f871c0`) as the link sticker URL
parameter when invoking the share.

## User flow
1. User taps "Share to Story" on a list card.
2. Before invoking the share sheet, show a brief one-time tooltip or
   small inline note near the button (or a lightweight modal) saying
   something like: "This opens Instagram with your link ready to go —
   just add a caption like 'Sign up to get my weekly missionary
   emails!' before you post." This sets expectations that they'll be
   adding their own text, since we can't pre-fill editable text.
3. Trigger `navigator.share()` (or the appropriate Web Share API call
   with the generated image file and a `url` field set to the link
   sticker target) — this opens the native OS share sheet.
4. User selects Instagram from the share sheet.
5. Instagram opens a new Story draft with our background image and
   link sticker already placed. User adds their own caption/text,
   adjusts as desired, and posts (or doesn't — no auto-posting).

## What NOT to build
- Do not attempt to auto-post to Instagram on the user's behalf —
  there is no API for this and it would require dangerous
  credential handling we don't want any part of.
- Do not bake the caption text into the background image — per
  above, leave that editable by sharing a plain background and
  letting the user add their own text inside Instagram.
- Do not block or hide other share options that might appear in the
  share sheet (WhatsApp, Messages, etc.) — let the OS show whatever
  share targets are available; we're only customizing what happens
  if the user picks Instagram specifically.

## Process
Implement the button, the background image generation, and the Web
Share API trigger. Test on an actual mobile device if possible (this
cannot be meaningfully tested in a desktop browser dev tools mobile
emulator, since the Web Share API behavior and Instagram's share
intent both depend on the real OS). Show me the button on the
dashboard first, then walk through the share flow on a real phone
before considering this done.
