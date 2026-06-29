import {
  IconPlus,
  IconExternalLink,
  IconUsers,
  IconQrcode,
} from "@tabler/icons-react";
import { createClient } from "@/lib/supabase/server";
import { QrCode } from "@/components/QrCode";
import { AppHeader } from "@/components/AppHeader";
import { MarketingPage } from "@/components/MarketingPage";
import { LogoMark } from "@/components/Logo";
import { CreatedBanner } from "@/components/CreatedBanner";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { Footer } from "@/components/Footer";
import { ShareToStoryButton } from "@/components/ShareToStoryButton";

export default async function Home({
  searchParams,
}: {
  searchParams: { created?: string };
}) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  const { data: forms } = user
    ? await supabase
        .from("forms")
        .select("*, responses(count)")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
    : { data: null };

  if (user) {
    return (
      <main className="mx-auto max-w-4xl p-8">
        <AppHeader email={user.email ?? ""} />

        <div className="flex flex-col gap-4 pt-6">
          {searchParams.created && <CreatedBanner />}

          <div className="flex items-center justify-between">
            <h2
              className="text-xl font-medium tracking-[0.01em]"
              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
            >
              Your lists
            </h2>
            <a
              href="/forms/new"
              className="flex items-center gap-1 rounded bg-sage px-3 py-2 text-sm text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
            >
              <IconPlus size={16} />
              New list
            </a>
          </div>

          <div className="flex w-full flex-col gap-3">
            {forms?.length ? (
              forms.map((form) => {
                const count = form.responses?.[0]?.count ?? 0;
                const actionClassName =
                  "flex items-center gap-1 rounded border border-border bg-white px-2 py-1 text-xs text-text-primary hover:bg-tan";

                return (
                  <div
                    key={form.id}
                    className="flex flex-col gap-2 rounded border-[0.5px] border-border bg-white p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-text-primary">
                        {form.title}
                      </span>
                      <span className="text-xs text-text-secondary">
                        {count} response{count === 1 ? "" : "s"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-text-muted">
                        mymissionarymail.com/m/{form.slug}
                      </span>
                      <CopyLinkButton path={`/m/${form.slug}`} />
                    </div>

                    <div className="flex gap-2">
                      <a href={`/m/${form.slug}`} className={actionClassName}>
                        <IconExternalLink size={16} />
                        Public page
                      </a>
                      <a
                        href={`/forms/${form.id}/responses`}
                        className={actionClassName}
                      >
                        <IconUsers size={16} />
                        Responses
                      </a>
                      <QrCode
                        path={`/m/${form.slug}`}
                        showPreview={false}
                        linkClassName={actionClassName}
                        icon={<IconQrcode size={16} />}
                      />
                      <ShareToStoryButton path={`/m/${form.slug}`} />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-xl border-[0.5px] border-border bg-white px-6 py-14 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] bg-mint">
                  <LogoMark size={28} strokeWidth={1.5} color="#4D5C42" />
                </div>

                <h3 className="mb-1.5 mt-[18px] text-[17px] font-medium text-text-primary">
                  No lists yet
                </h3>
                <p className="mx-auto mb-[22px] max-w-[360px] text-sm leading-normal text-text-secondary">
                  Create your first list to start collecting emails for your
                  missionary&apos;s weekly updates.
                </p>

                <a
                  href="/forms/new"
                  className="inline-flex items-center gap-1 rounded-md bg-sage px-[18px] py-2.5 text-sm font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
                >
                  + Create your first list
                </a>
              </div>
            )}
          </div>
        </div>

        <Footer className="mt-10 border-t-[0.5px] border-border pt-6" />
      </main>
    );
  }

  return <MarketingPage />;
}
