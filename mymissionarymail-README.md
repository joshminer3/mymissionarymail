# MyMissionaryMail

A web app for LDS missionary families to collect email addresses before departure — without sign-up sheets or chasing Instagram comments.

**Live:** https://mymissionarymail.com

## Features

- Create a personalized missionary sign-up page with a photo and welcome message in under two minutes
- Share via a unique link or auto-generated QR code for farewell parties and social media
- Public-facing form collects supporter names, emails, and messages automatically
- Export the full email list as a CSV formatted for direct import into Gmail Contacts
- Dashboard to view all responses and manage multiple lists

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Supabase (Postgres, Auth, Storage)
- Tailwind CSS
- Vercel (deployment)

## Screenshots

<img width="954" height="521" alt="Screenshot 2026-07-10 at 2 41 45 PM" src="https://github.com/user-attachments/assets/5401507f-9ca1-4e21-a442-ba4d0deccc47" />

## Getting started

```bash
git clone https://github.com/joshminer3/<repo-name>.git
cd <repo-name>
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file in the project root with the following:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Never commit `.env.local` to version control — it's already 
included in `.gitignore` by default in Next.js projects.

For production deployment on Vercel, add these same variables 
under Project Settings → Environment Variables rather than 
using a .env file.

## Status

Live, actively used by missionaries building their mailing lists. 
