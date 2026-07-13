# MyMissionaryMail

A web app for LDS missionary families to collect email addresses before departure — without sign-up sheets or chasing Instagram comments.

**Live:** [mymissionarymail.com](https://mymissionarymail.com)

---

## Features

- Create a personalized missionary sign-up page with a photo and welcome message in under two minutes
- Share via a unique link or auto-generated QR code for farewell parties and social media
- Public-facing form collects supporter names, emails, and messages automatically
- Dashboard to view all responses and manage multiple lists
- Export the full email list as a CSV formatted for direct import into Gmail Contacts

---

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Backend:** Supabase (Postgres, Auth, Storage)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project ([supabase.com](https://supabase.com))

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/mymissionarymail.git
   cd mymissionarymail
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see below)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## Environment Variables

Create a `.env.local` file in the project root with the following:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find both values in your Supabase dashboard under **Project Settings → API**.

> **Note:** Never commit `.env.local` to version control — it is already included in `.gitignore` by default. For production deployment on Vercel, add these same variables under **Project Settings → Environment Variables**.

---

## Database Setup

This project uses Supabase with the following tables:

- `forms` — stores each missionary's list (title, slug, welcome message, image, user_id)
- `responses` — stores each sign-up submission (name, email, message, form_id)

Row Level Security (RLS) is enabled so users can only read and edit their own data.

---

## Deployment

This app is deployed on Vercel. To deploy your own instance:

1. Push your repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add your environment variables in Vercel's project settings
4. Deploy

---

## Author

Built by Josh — [mymissionarymail.com](https://mymissionarymail.com)
