# Login page — implementation brief

This documents UI changes for the login page (currently at `/login`).
Give this file to Claude Code along with COLOR_PALETTE.md and ask it
to implement these changes.

Note: this page is intentionally different from the authenticated
pages (dashboard, create-list, responses) in two ways: there is no
shared header bar (no user is logged in yet), and the content is
vertically centered on the page rather than top-aligned. Do not add
the shared header component here.

## Problems with the current version
- Content is pinned to the top-left with no centering or container.
- No brand presence — a first-time visitor has no idea what the
  product is or what it does.
- No tagline or context below the brand name.
- Input fields are unstyled and don't match the rest of the app.
- "Sign up" link uses default browser underline styling.
- No footer.

## Layout

- The entire page should be vertically and horizontally centered,
  using `min-height: 100vh` with flexbox (`display: flex`,
  `flex-direction: column`, `align-items: center`,
  `justify-content: center`) on the page wrapper.
- Page background: `cream` token (`#F6F5EF`).
- Add `40px` padding top and bottom so content doesn't touch the
  viewport edges on small screens.

## Brand section (above the card)

Add a centered brand block above the login card with `32px` margin
below it:
- App name "MissionaryMail": 22px, medium weight, primary text color
- Tagline below it: "Collect emails for your missionary's weekly
  updates", 14px, muted text color (`text-muted` token), `6px`
  margin above it

## Login card

- White background, `0.5px solid border` token border, `12px`
  border-radius, `2rem` padding
- Max width `400px`, full width up to that max
- Inside the card at the top: "Log in" as a heading, 18px, medium
  weight, primary text color, `20px` margin below before the first
  field

## Field styling

Input fields on this page are white-on-white (white card, white
inputs), so they need slightly more border visibility than the cream
inputs used on other pages:
- Background: `#FFFFFF` (white, not cream — this is the exception to
  the pattern used on other pages, intentional here so fields stand
  out on the white card)
- Border: `1px solid` using `border` token (full 1px, not 0.5px —
  needed for white-on-white visibility)
- Border-radius: `6px`
- Padding: `10px 12px`
- Font size: 14px, primary text color
- Labels: 13px, medium weight, primary text color, `6px` margin
  below, `16px` margin between field groups

Add a placeholder to each field:
- Email: "your@email.com"
- Password: "••••••••"

## Button
- "Log in": full width, `sage` token background, primary text color,
  `12px` vertical padding, 15px font, medium weight, `6px`
  border-radius
- `16px` margin below the button before the sign-up line

## Sign up link
Below the button, centered:
- "Need an account? Sign up"
- Full line: 13px, muted text color
- "Sign up" portion only: `deep-sage` token color (`#647262`),
  medium weight, no underline (`text-decoration: none`) — should
  link to the existing sign-up route
- Do not change the sign-up route or logic, only the styling

## Footer
Below the card, `24px` margin above:
- "© 2026 MissionaryMail"
- 12px, muted text color, centered

## What NOT to change
- Don't change login logic, form submission, error handling, or
  redirect behavior after successful login
- Don't add the shared header component — this page intentionally
  has no header
- Don't add social login buttons or "forgot password" link unless
  they already exist in the current version
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
Implement in one pass since this page is simpler than the others —
brand section, card, fields, button, sign-up link, footer. Show me
the full result when done.
