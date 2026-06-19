import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { submitResponse } from "@/app/m/actions";
import { AppHeader } from "@/components/AppHeader";
import { Footer } from "@/components/Footer";

export default async function PublicFormPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { submitted?: string; error?: string };
}) {
  const supabase = createClient();
  const { data: form } = await supabase
    .from("public_forms")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!form) {
    notFound();
  }

  const fieldClassName =
    "rounded-md border-[0.5px] border-border bg-white px-3 py-2.5 text-sm text-text-primary";

  return (
    <main className="mx-auto max-w-2xl p-8">
      <AppHeader />

      <div className="flex flex-col items-center pt-6 text-center">
        {form.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={form.image_url}
            alt={form.missionary_name}
            className="mb-4 max-w-[300px] rounded-xl shadow-[0_4px_20px_rgba(56,64,47,0.12)]"
          />
        )}
        <h1 className="text-2xl font-medium text-text-primary">
          {form.title}
        </h1>
        <p className="mt-1.5 text-[15px] text-text-secondary">
          {form.welcome_message}
        </p>
      </div>

      <hr className="my-7 border-t-[0.5px] border-border" />

      {searchParams.submitted ? (
        <>
          <p className="mb-4 rounded bg-success-bg px-3 py-2 text-center text-sm text-success-text">
            Thanks! {form.missionary_name} will be in touch.
          </p>

          <div className="flex justify-center">
            <a
              href={`/m/${form.slug}`}
              className="rounded-md border border-border bg-white px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-tan"
            >
              Add another response
            </a>
          </div>
        </>
      ) : (
        <div className="rounded-lg border border-border bg-white p-7">
          <h2 className="text-[16px] font-medium text-text-primary">
            Sign up for updates
          </h2>
          <p className="text-sm text-text-secondary">
            Add your info below and you&apos;ll receive{" "}
            {form.missionary_name}&apos;s weekly emails directly.
          </p>

          <form action={submitResponse} className="mt-4 flex flex-col gap-4">
            <input type="hidden" name="form_id" value={form.id} />
            <input type="hidden" name="slug" value={form.slug} />

            {/* Honeypot: hidden from real users, but bots that auto-fill
                every field will trip it. Checked server-side in
                submitResponse. */}
            <div aria-hidden="true" className="absolute left-[-9999px] top-auto">
              <label>
                Company
                <input
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5 text-[13px] font-medium text-text-primary">
              Name
              <input
                name="name"
                type="text"
                required
                className={fieldClassName}
              />
            </label>

            <label className="flex flex-col gap-1.5 text-[13px] font-medium text-text-primary">
              Email
              <input
                name="email"
                type="email"
                required
                className={fieldClassName}
              />
            </label>

            <label className="flex flex-col gap-1.5 text-[13px] font-medium text-text-primary">
              <span>
                Message{" "}
                <span className="font-normal text-text-muted">
                  (optional)
                </span>
              </span>
              <textarea name="message" rows={3} className={fieldClassName} />
            </label>

            <button
              type="submit"
              className="w-full rounded bg-sage px-3 py-3 text-[15px] font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
            >
              Sign me up
            </button>

            {searchParams.error && (
              <p className="rounded bg-error-bg px-3 py-2 text-sm text-error-text">
                {searchParams.error}
              </p>
            )}
          </form>
        </div>
      )}

      <p className="mt-5 text-center text-xs text-text-muted">
        Powered by{" "}
        <a href="/" className="underline">
          MyMissionaryMail.com
        </a>
      </p>

      <Footer className="mt-4" />
    </main>
  );
}
