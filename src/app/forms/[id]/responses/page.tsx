import { notFound, redirect } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";
import { createClient } from "@/lib/supabase/server";
import { AppHeader } from "@/components/AppHeader";
import { ExportButton } from "@/components/ExportButton";
import { Footer } from "@/components/Footer";
import { slugify } from "@/lib/slug";

export default async function FormResponsesPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: form } = await supabase
    .from("forms")
    .select("*")
    .eq("id", params.id)
    .single();

  if (!form) {
    notFound();
  }

  const { data: responses } = await supabase
    .from("responses")
    .select("*")
    .eq("form_id", params.id)
    .order("submitted_at", { ascending: false });

  const formatSubmittedAt = (iso: string) =>
    new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });

  return (
    <main className="mx-auto max-w-4xl p-8">
      <AppHeader email={user.email ?? ""} />

      <div className="flex flex-col gap-4 pt-6">
        <a
          href="/"
          className="flex w-fit items-center gap-1 text-sm text-text-secondary"
        >
          <IconArrowLeft size={16} />
          Back to your lists
        </a>

        <div className="flex items-center justify-between rounded-xl border-[0.5px] border-border bg-white px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="h-11 w-1 rounded bg-sage" />
            <div>
              <h1 className="text-lg font-medium text-text-primary">
                {form.title}
              </h1>
              <p className="text-[13px] text-text-secondary">
                {responses?.length ?? 0} response
                {(responses?.length ?? 0) === 1 ? "" : "s"} collected
              </p>
            </div>
          </div>

          {responses?.length ? (
            <ExportButton
              href={`/forms/${form.id}/responses/export`}
              fileName={`${slugify(form.missionary_name)}-responses.csv`}
            />
          ) : null}
        </div>

        {responses?.length ? (
          <div className="mt-4 grid grid-cols-1 gap-3.5 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
            {responses.map((r) => (
              <div
                key={r.id}
                className="rounded-xl border-[0.5px] border-border bg-white p-[1.1rem]"
              >
                <p className="text-sm font-medium text-text-primary">
                  {r.name}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  {formatSubmittedAt(r.submitted_at)}
                </p>
                <p className="mb-2.5 mt-1 text-[13px] text-text-secondary">
                  {r.email}
                </p>

                {r.message && (
                  <div className="border-t-[0.5px] border-[#F0EDE4] pt-[9px]">
                    <p className="text-[13px] leading-normal text-text-primary">
                      {r.message}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-secondary">No responses yet.</p>
        )}
      </div>

      <Footer className="mt-10 border-t-[0.5px] border-border pt-6" />
    </main>
  );
}
