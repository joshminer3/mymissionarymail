"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitResponse(formData: FormData) {
  const formId = formData.get("form_id") as string;
  const slug = formData.get("slug") as string;
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim() || null;

  // Honeypot: real visitors never fill this field. Pretend success so bots
  // don't learn to avoid it, but skip the actual insert.
  if (formData.get("company")) {
    redirect(`/m/${slug}?submitted=1`);
  }

  if (!name || !email || !EMAIL_RE.test(email)) {
    redirect(
      `/m/${slug}?error=${encodeURIComponent(
        "Please enter a valid name and email"
      )}`
    );
  }

  const supabase = createClient();
  const { error } = await supabase.from("responses").insert({
    form_id: formId,
    name,
    email,
    message,
  });

  if (error) {
    redirect(`/m/${slug}?error=${encodeURIComponent(error.message)}`);
  }

  redirect(`/m/${slug}?submitted=1`);
}
