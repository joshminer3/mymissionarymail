import { redirect } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";
import { createClient } from "@/lib/supabase/server";
import { createForm } from "@/app/forms/actions";
import { AppHeader } from "@/components/AppHeader";
import { FileInput } from "@/components/FileInput";

export default async function NewFormPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const fieldClassName =
    "rounded-md border border-border bg-white px-3 py-2.5 text-text-primary";

  return (
    <main className="mx-auto max-w-4xl p-8">
      <AppHeader email={user.email ?? ""} />

      <div className="flex flex-col gap-4 pt-6">
        <a
          href="/"
          className="flex w-fit items-center gap-1 text-sm text-text-primary"
        >
          <IconArrowLeft size={16} />
          Back to your lists
        </a>

        <div>
          <h1
            className="text-2xl font-medium tracking-[0.01em]"
            style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
          >
            Create a list
          </h1>
          <p className="text-sm text-text-secondary">
            Set up a new sign-up page to share with friends and family.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-white p-7">
          <form action={createForm} className="flex flex-col gap-[18px]">
            <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
              Title
              <input
                name="title"
                type="text"
                required
                placeholder="e.g. Elder/Sister Smith's Mission Email"
                className={fieldClassName}
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
              Missionary name
              <input
                name="missionary_name"
                type="text"
                required
                placeholder="e.g. Elder/Sister Smith"
                className={fieldClassName}
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
              Welcome message
              <textarea
                name="welcome_message"
                required
                rows={4}
                placeholder="A short note visitors see before they sign up"
                className={fieldClassName}
              />
            </label>

            <FileInput name="image" accept="image/*" label="Picture (optional)" />

            <button
              type="submit"
              className="rounded bg-sage px-3 py-2 text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
            >
              Create list
            </button>
          </form>
        </div>

        {searchParams.error && (
          <p className="rounded bg-error-bg px-3 py-2 text-sm text-error-text">
            {searchParams.error}
          </p>
        )}
      </div>
    </main>
  );
}
