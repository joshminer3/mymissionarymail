# Mobile header fix + contact footer

This documents two changes: fixing the header overflow on mobile
screens (both authenticated pages and the marketing page), and adding
a contact email footer across the entire app. Give this file to
Claude Code along with COLOR_PALETTE.md.

## Background
On narrow/mobile screens, the header content (logo + email + log out
button, or logo + log in + sign up buttons) doesn't wrap or adapt —
it overflows the viewport width, forcing users to horizontally scroll
to see the log out button or sign up button. This needs a proper
responsive treatment, not just smaller text.

Breakpoint: apply these mobile-specific layouts below approximately
`480px` viewport width.

## Fix 1: Authenticated pages header (dashboard, create-list,
responses, etc. — wherever the shared header component with
email + Log out is used)

**Above 480px:** no change — keep the current layout (logo left,
email + Log out button right).

**Below 480px:**
- Keep the logo + "MyMissionaryMail" wordmark visible on the left,
  same as always
- Replace the email text + Log out button on the right with a single
  small icon button: a circular or rounded-square button (~32px),
  transparent background, `0.5px solid border` token border, containing
  a vertical three-dot icon (`IconDotsVertical` from
  `@tabler/icons-react`)
- Tapping this button opens a small dropdown menu (anchored below the
  button, aligned to the right edge so it doesn't overflow off-screen)
  containing:
  - The user's email, displayed as plain text (not clickable), 13px,
    secondary text color
  - A thin divider
  - "Log out" as a clickable row, triggering the same log out action
    as the current button
- The dropdown should close when the user taps outside it, taps an
  item in it, or presses Escape
- This should be a reusable behavior in the shared header component
  (not duplicated per page) — implement it once where the header
  component is defined

## Fix 2: Marketing page header

**Above 480px:** no change — keep "Log in" (plain text button) and
"Sign up" (solid sage button) both visible side by side.

**Below 480px:**
- Keep the logo + wordmark on the left
- Keep "Sign up" visible as the solid sage button on the right (this
  is the primary conversion action and should stay prominent)
- Move "Log in" out of the main header row — place it as a smaller
  text link, either stacked above/below "Sign up" at a reduced size,
  or accessible via the same dropdown-menu pattern used in Fix 1 if
  that's simpler to implement consistently. Either approach is fine;
  prioritize "Sign up" staying the single clearly visible primary
  action and nothing overflowing the screen width.

## Fix 3: Contact footer (add to every page)

Add a contact line to the existing footer on every page that has one
(marketing page, login, signup), and add a footer if one doesn't
already exist on pages that need it (dashboard, create-list,
responses, public signup page).

**Footer content:**
- Existing copyright line stays: "© 2026 MyMissionaryMail"
- Below it, add: "Contact us at mymissionarymailsupport@gmail.com" —
  the email portion should be an actual `mailto:` link
  (`mailto:mymissionarymailsupport@gmail.com`) so tapping/clicking it
  opens the user's email client
- Styling: 12px, muted text color (`text-muted` token) for the
  surrounding text; the email link itself in `deep-sage` token color,
  medium weight, no underline — consistent with how other inline
  links are styled elsewhere in the app (e.g. the "Sign up" / "Log in"
  links on the login/signup pages)
- Centered, same as the existing footer treatment

## What NOT to change
- Don't change desktop/tablet layouts — these fixes are specifically
  for the sub-480px mobile breakpoint (header) and footer addition
  (all breakpoints)
- Don't change login/logout logic or navigation — only how these
  controls are displayed at small widths
- Keep all color tokens from COLOR_PALETTE.md; don't introduce new
  colors

## Process
1. Fix the authenticated-page header first, test by resizing the
   browser to mobile width (or using device emulation) to confirm no
   horizontal overflow and the dropdown works
2. Fix the marketing page header the same way
3. Add the contact footer across all pages
Show me the result at mobile width for both header fixes before
moving to the footer step.
