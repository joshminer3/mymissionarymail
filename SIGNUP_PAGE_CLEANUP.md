# Signup page — implementation brief

This documents UI changes for the signup page (currently at
`/signup`), plus a new password confirmation field with validation.
Give this file to Claude Code along with COLOR_PALETTE.md and ask it
to implement these changes.

This page should match the login page exactly in layout and styling
(see LOGIN_PAGE_CLEANUP.md if already implemented) — same brand
block, same centered layout, same card style, same white inputs. The
only differences are the heading ("Sign up" instead of "Log in"), one
additional field (confirm password), and the bottom link pointing to
login instead of signup.

## Layout (identical to login page)
- Vertically and horizontally centered on the page using flexbox,
  `min-height: 100vh`
- Page background: `cream` token
- Brand block above the card: "MissionaryMail" (22px, medium weight,
  primary text color) + tagline "Collect emails for your missionary's
  weekly updates" (14px, muted text color), `32px` margin below
- Card: white background, `0.5px solid border` token border, `12px`
  border-radius, `2rem` padding, max-width `400px`
- No shared header on this page (same exception as login — no user
  is logged in yet)

## Card heading
"Sign up" — 18px, medium weight, primary text color, `20px` margin
below before the first field

## Fields
All fields use the same styling as the login page (white background,
`1px solid border` token border — full 1px since it's white-on-white,
`6px` border-radius, `10px 12px` padding, 14px font, primary text
color). Labels: 13px, medium weight, primary text color, `6px` margin
below, `16px` margin between field groups.

1. **Email** — placeholder "your@email.com"
2. **Password** — type="password", placeholder "••••••••"
3. **Confirm password** — type="password", placeholder "••••••••"
   (new field, see validation below)

## Password confirmation validation
- Validate on blur (when the user clicks/tabs away from the confirm
  password field) — not on every keystroke, and not only on submit.
- If the confirm password field is non-empty and does not match the
  password field at the time of blur, show an inline error message
  directly below the confirm password field: "Passwords don't match"
  — use the `error` text color from COLOR_PALETTE.md (`#8C3D2F`),
  12px, `6px` margin-top.
- If the user then edits either field and they come to match, clear
  the error message (re-check on every change once an error is
  showing, not just on the next blur — so the error disappears as
  soon as it's resolved rather than requiring another blur event).
- Also enforce this same check on form submit as a safety net — don't
  allow submission if the passwords don't match, even if the blur
  check was somehow bypassed (e.g. autofill).
- Do not block typing or disable the submit button preemptively while
  the field is simply empty — only show the error once there's a
  non-empty mismatch.

## Button
"Sign up" — full width, `sage` token background, primary text color,
`12px` vertical padding, 15px font, medium weight, `6px`
border-radius, `16px` margin below before the bottom link

## Bottom link
"Already have an account? Log in" — 13px, muted text color line,
with "Log in" portion in `deep-sage` token color, medium weight, no
underline, linking to the existing `/login` route

## Footer
"© 2026 MissionaryMail" — 12px, muted text color, centered, `24px`
margin above

## What NOT to change
- Don't change the actual account creation logic, email/password
  requirements, or what happens after successful signup — this is a
  layout/styling pass plus the one new validation behavior described
  above
- Don't add additional fields beyond email, password, confirm
  password
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
Implement in one pass, matching the login page's existing
implementation as closely as possible. Show me the result when done,
including a quick test of the validation behavior (mismatched
passwords on blur, then corrected).
