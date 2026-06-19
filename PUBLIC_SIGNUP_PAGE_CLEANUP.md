# Public signup page — implementation brief

This documents UI changes for the public-facing missionary signup page
(currently at `/m/[slug]`). This is the page visitors see when a
missionary shares their link — it's the most important page in the
app since it's what the outside world sees. Give this file to Claude
Code along with COLOR_PALETTE.md and ask it to implement these
changes.

Note: this page has NO logged-in user context — it's fully public.
The header is simplified accordingly (no email, no log out button).

## Problems with the current version
- No consistent header bar — page feels disconnected from the rest
  of the app.
- Image is a raw rectangular block with no visual polish.
- Title and welcome message are left-aligned, which feels uncentered
  and informal for what is essentially a personal profile/invite page.
- Form fields are unstyled and don't match the card + input patterns
  established on the dashboard and create-list pages.
- "Submit" is cold and generic — doesn't match the warm personal tone
  of the product.
- No branding footer — missed opportunity for free marketing on every
  shared page.

## Structural changes

1. **Simplified header bar** at the top: MissionaryMail brand name on
   the left only. No user email, no log out button (this is a public
   page). Same bottom border separator as other pages (`border` token,
   `0.5px solid`).

2. **Center the hero section** (image + title + welcome message) with
   `text-align: center`. This is intentionally different from the
   left-aligned layout on authenticated pages — it reads more like a
   personal invite card, which fits the public-facing context.

3. **Image treatment**: keep the image as a square/landscape rectangle
   (do NOT crop to a circle). Apply:
   - `border-radius: 12px` (rounded corners, not fully circular)
   - `box-shadow: 0 4px 20px rgba(56, 64, 47, 0.12)` (soft warm
     shadow using the primary dark tone from the palette)
   - No border
   - Max width of ~300px, centered, with ~16px margin below before
     the title. If no image was uploaded for the list, hide the image
     element entirely rather than showing a broken or empty box.

4. **Title and welcome message** below the image, centered:
   - Title: 24px, medium weight, primary text color
   - Welcome message: 15px, secondary text color, ~6px below the
     title

5. **Thin divider line** (`border-top: 0.5px solid` using `border`
   token) between the hero section and the form card below, with
   ~28px margin on both sides of it.

6. **Form card**: white background, thin border (`border` token),
   `border-radius` matching the large radius used on other pages,
   ~28px padding. Inside the card at the top, add:
   - A small card heading: "Sign up for updates" (16px, medium weight,
     primary text color)
   - A one-line subtitle below it in secondary text color, e.g. "Add
     your info below and you'll receive [missionary name]'s weekly
     emails directly." — use the missionary's name dynamically from
     the list data.
   Then the form fields below that.

## Field styling
Match exactly what was established in CREATE_LIST_FORM_CLEANUP.md:
- Labels: 13px, medium weight, primary text color, 6px margin below
- Inputs + textarea: cream background, 0.5px border using `border`
  token, rounded corners, 10px vertical / 12px horizontal padding,
  14px font size
- 16px margin between field groups
- "Message (optional)" label should show "(optional)" in muted text
  color and regular weight, matching the pattern from the create-list
  page

## Button
- Change "Submit" to "Sign me up" — warmer and more personal
- Keep full-width
- Keep `sage` background per COLOR_PALETTE.md
- 12px vertical padding, 15px font size, medium weight

## Footer
Add a small centered footer line below the form card:
- "Powered by MissionaryMail"
- 12px font size, muted text color (`text-muted` token)
- ~20px margin above it

## What NOT to change
- Don't change form submission logic or what happens after a
  successful submit (success state, redirect, etc.)
- Don't change which fields are shown or their validation rules
- Don't add new fields
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
Implement in steps: header + hero section first, then divider + form
card + fields, then button + footer. Show me the result after each
step before moving on.
