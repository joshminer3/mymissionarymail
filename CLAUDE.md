# Project: MyMissionaryMail (MyMissionaryMail.com)

## What this is
A web app for missionaries (primarily LDS/Mormon missionaries, ~40,000/year)
and their families to collect names and emails from friends/family before
departure, so they have a ready-made mailing list for weekly emails home.

Core user flow:
1. User signs up and creates an account.
2. User creates a "missionary form" — a simple page asking visitors for
   name + email (+ optional relationship/message field).
3. App generates a unique shareable link (e.g. mymissionarymail.com/m/elder-smith-1234) and a
   QR code for that link.
4. User shares the link/QR on social media, at farewell parties, etc.
5. Visitors fill out the form; submissions are stored against that form.
6. User can view responses in a dashboard and export them as a CSV
   formatted for Gmail Contacts import (and ideally a Gmail Group/label).

## Explicit non-goals for MVP (do not build these yet)
- No drag-and-drop custom form builder — fields are fixed for v1.
- No payments/billing integration yet.
- No multi-form-per-user management UI polish — basic CRUD is enough.
- No native mobile app.
- No direct Gmail API push — CSV export is sufficient for v1.

## Tech stack
- Next.js (App Router) + TypeScript
- Supabase (Postgres + Auth + Storage) for backend
- Tailwind CSS for styling
- Deployed target: Vercel (frontend) + Supabase (backend), both free-tier
  friendly to start
- QR code generation: a lightweight client or server library (e.g. `qrcode`
  npm package) — no external paid API needed

## Data model (initial draft — confirm before large migrations)
- `users` (handled by Supabase Auth)
- `forms`
  - id, user_id (FK), slug (unique, used in share URL), title,
    missionary_name, welcome_message, created_at
- `responses`
  - id, form_id (FK), name, email, relationship (optional),
    message (optional), submitted_at

## Coding conventions
- TypeScript strict mode on.
- Prefer server components by default; use client components only when
  interactivity requires it (forms, copy-to-clipboard buttons, etc.).
- Keep API logic in Next.js route handlers under `app/api/`.
- Use Supabase Row Level Security (RLS) so users can only read/edit their
  own forms and responses — flag this explicitly when writing any DB
  schema or policy so we don't ship something insecure by default.
- Validate all public form submissions server-side (this form is public-
  facing and will get spam/bot traffic — rate limiting and basic honeypot
  or CAPTCHA should be considered before real launch, not necessarily MVP
  day one, but call it out when relevant).

## Current status
Just starting. No code written yet. First task is project scaffolding.

## How to talk to me about this project
I'm an Information Systems major, comfortable with Python, C#, and
JavaScript, but new to Claude Code and fairly new to Next.js/Supabase
specifically. Explain non-obvious architectural decisions briefly as you
make them. Prefer working in small, reviewable steps over large
one-shot file dumps.


# MyMissionaryMail color palette — implementation brief

This file documents the finalized brand palette for MyMissionaryMail and
should be used as the source of truth when implementing colors across
the app. Give this file to Claude Code and ask it to apply the palette
to the existing UI.

## Concept
Soft sage green + warm tan, on a cream background. Muted and warm
rather than bright pastel — designed to feel calm, simple, and
family-friendly rather than playful or saturated.

## Core palette (hex values)

| Token            | Hex       | Usage                                      |
|------------------|-----------|---------------------------------------------|
| `cream`          | `#F6F5EF` | Page background, card backgrounds           |
| `mint`           | `#DCE8D5` | Light accent fill (stat cards, soft sections)|
| `sage`           | `#B3CAA8` | Primary buttons, primary accent              |
| `sage-hover`     | `#9DB892` | Button hover state                           |
| `tan`            | `#E1D6C6` | Secondary buttons, secondary accent fill     |
| `deep-sage`      | `#647262` | Headlines accent, dark UI elements, footers  |
| `text-primary`   | `#38402F` | Main body text, headings                     |
| `text-secondary` | `#647262` | Subtext, labels, descriptions                |
| `text-muted`     | `#9CA395` | Placeholder text, hints, disabled text       |
| `border`         | `#DCD8CB` | Input borders, card borders, dividers        |

## Semantic states (kept muted to match the palette — do not use
bright red/green/yellow, which clash with the pastel aesthetic)

| Token              | Background | Text      | Usage                          |
|--------------------|------------|-----------|----------------------------------|
| `success-bg`       | `#E3EFD9`  | `#3D5A2A` | Confirmation messages            |
| `warning-bg`       | `#FBEFD9`  | `#8A6418` | Non-critical alerts               |
| `error-bg`         | `#F8E2DE`  | `#8C3D2F` | Form validation errors            |

Note: double-check the error state contrast in real use — if it
doesn't read as "something's wrong" fast enough on the public-facing
signup form, it's fine to saturate error-bg/error text slightly more
than the rest of the palette. Errors are the one place where breaking
strict palette consistency for clarity is acceptable.

## Button states reference
- Default: bg `sage` (#B3CAA8), text `text-primary` (#38402F)
- Hover: bg `sage-hover` (#9DB892), text white (#FFFFFF)
- Active/pressed: bg `deep-sage` (#647262), text `cream` (#F6F5EF)
- Secondary: bg `tan` (#E1D6C6), text `text-primary` (#38402F)
- Outline: transparent bg, 1px border `sage`, text `text-secondary`
- Disabled: bg `#EDEAE1`, text `#B0AC9E`

## Implementation instructions for Claude Code

1. Add these as CSS custom properties in the global stylesheet
   (e.g. `app/globals.css`), scoped to `:root`, using the token names
   above prefixed with `--color-` (e.g. `--color-cream`, `--color-sage`).
2. If using Tailwind v4 (CSS-based config), define these directly in
   the `@theme` block in `globals.css` so they're available as
   utility classes (e.g. `bg-sage`, `text-text-primary`).
3. If using Tailwind v3 (JS config), add these to the `colors` key
   under `theme.extend` in `tailwind.config.ts`/`.js` instead, using
   the same token names.
4. Replace any existing placeholder/default colors (grays, default
   blues, etc.) across the app's existing components — buttons, form
   inputs, cards, the dashboard, and the public signup form — with
   these tokens. Do this component by component and show me a diff or
   summary of what changed, rather than a single massive commit, so I
   can review each change before moving to the next.
5. Set the page background (body/html or root layout) to `cream`.
6. Keep the existing layout, spacing, and component structure
   unchanged — this is a color-only pass, not a redesign. Flag any
   place where applying these colors creates a contrast or
   accessibility issue (e.g. text-secondary or text-muted on a sage
   or tan background may not pass WCAG AA) rather than silently
   applying it anyway.
7. Do not invent additional colors outside this palette. If a
   component needs a color not listed here, ask me rather than
   guessing.