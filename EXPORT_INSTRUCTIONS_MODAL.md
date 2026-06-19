# Export button + post-export instructions modal

This documents two changes to the responses page (currently at
`/forms/[id]/responses`): renaming the CSV export button to be more
user-friendly, and showing an instructional modal after the download
starts, walking the user through importing the file into Gmail. Give
this file to Claude Code along with COLOR_PALETTE.md.

## Background
Many users won't know what a "CSV" is or what to do with the
downloaded file. This modal closes that gap by giving step-by-step
instructions for importing the file into Google Contacts and turning
it into a usable Gmail mailing list, right after they download it.

## Button text change
Change the export button label from "Export CSV" to
**"Download Email List"**. Keep everything else about the button
unchanged (icon, styling, position, and the underlying export
functionality/file format — this is a label-only change).

## Post-export modal

When the user clicks the button and the file download is triggered,
show a modal dialog with import instructions. The modal should
appear every time the button is clicked (not just the first time).

### Modal structure

**Overlay:** semi-transparent dark overlay behind the modal
(`rgba(56,64,47,0.35)` — using the primary dark tone from the palette
at low opacity, rather than plain black, so it stays on-brand),
covering the full viewport, modal centered within it.

**Modal container:**
- White background, `16px` border-radius, `2rem` padding, max-width
  `460px`, centered
- Soft drop shadow: `0 12px 40px rgba(56,64,47,0.18)`
- Close button (✕) in the top-right corner: muted text color, no
  background, closes the modal on click
- Clicking the overlay outside the modal should also close it
- Pressing Escape should also close it

**Header section:**
- Small icon badge (36px square, `10px` border-radius, `mint` token
  background) containing a checkmark icon (`IconCircleCheck` from
  `@tabler/icons-react`, sage-green/dark-green tone)
- Next to it: "Your list is downloading" — 18px, medium weight,
  primary text color
- Below both: "Here's how to add these contacts to Gmail so you can
  start emailing them." — 13px, secondary text color, `20px` margin
  below before the steps

**Steps section:** 5 numbered steps, each as a row with a small
circular number badge (22px, `sage` token background, dark text,
centered number) on the left and step text on the right, `14px` gap
between badge and text, `14px` gap between rows:

1. Open Google Contacts — make sure you're signed in with the Gmail
   account you'll use to send your weekly emails. ("Google Contacts"
   should be a hyperlink to https://contacts.google.com/, opening in
   a new tab.)
2. Click **Import** on the left sidebar, then **Select file** and
   choose the file you just downloaded.
3. Click **Import** again to finish. Google automatically creates a
   label for this batch, named something like "Imported on [today's
   date]."
4. Find that label in the left sidebar under **Labels**, click the
   pencil/edit icon next to it, and rename it to something like
   "Weekly Mission Email."
5. When you're ready to send an update, click **Compose** in Gmail
   and type your label name into the To field — everyone in the
   group will be added.

Bold text within steps (Import, Select file, Labels, Compose, etc.)
should use medium font weight, primary text color — same color as
surrounding text, just bolder, not a different color.

**Footer:** a full-width "Got it" button at the bottom, `sage` token
background, `12px` vertical padding, 14px font, medium weight, `24px`
margin-top from the steps. Clicking it closes the modal.

## What NOT to change
- Don't change the actual CSV export logic, file format, or what
  data is included in the export
- Don't add a "don't show this again" option — the modal is intended
  to show on every export, per product decision
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
Implement the button text change first (trivial), then build the
modal component and wire it to trigger after the download starts.
Show me the result, including a check that closing via the X button,
clicking outside, and pressing Escape all work.
