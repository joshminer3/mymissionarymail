import Image from "next/image";
import { IconPencil, IconQrcode, IconDownload } from "@tabler/icons-react";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

const steps = [
  {
    icon: IconPencil,
    badgeClassName: "bg-mint",
    title: "Create your list",
    description: "Add a name, welcome message, and photo in under a minute.",
  },
  {
    icon: IconQrcode,
    badgeClassName: "bg-tan",
    title: "Share the link or QR code",
    description:
      "Post it on social media, or print the QR code for farewell parties.",
  },
  {
    icon: IconDownload,
    badgeClassName: "bg-mint",
    title: "Export and email",
    description: "Download responses as a list ready to import into Gmail.",
  },
];

export function MarketingPage() {
  return (
    <div className="bg-cream">
      <header className="border-b-[0.5px] border-border">
        <div className="mx-auto flex max-w-[1000px] items-center justify-between px-8 py-4">
          <Logo />
          <div className="flex flex-col-reverse items-end gap-1 min-[480px]:flex-row min-[480px]:items-center min-[480px]:gap-4">
            <a
              href="/login"
              className="text-xs text-text-secondary min-[480px]:text-sm"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="rounded-md bg-sage px-4 py-2 text-sm text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
            >
              Sign up
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1000px] px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            <h1 className="text-[34px] leading-[1.25] font-medium text-text-primary">
              Collect your missionary&apos;s email list in minutes, not
              months
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-text-secondary">
              Create a simple sign-up page, share the link or QR code, and
              watch the emails roll in. No more sign-up sheets at farewell
              parties or chasing comments on Instagram.
            </p>
            <a
              href="/signup"
              className="mt-6 w-fit rounded-md bg-sage px-[22px] py-3 text-[15px] font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
            >
              Get started — it&apos;s free
            </a>
          </div>

          <div className="flex items-center justify-center rounded-[20px] bg-disabled-bg p-7">
            <div className="w-[230px] rounded-[32px] bg-[#1a1a1a] p-2.5">
              <div className="overflow-hidden rounded-3xl bg-white">
                <div className="bg-deep-sage px-2 py-1 text-center text-[9px] text-cream">
                  mymissionarymail.com/m/elder-smith
                </div>

                <div className="flex flex-col items-center gap-2 p-3">
                  <Image
                    src="/missionflags.png"
                    alt="Elder Smith"
                    width={230}
                    height={90}
                    className="h-[90px] w-full rounded-lg object-cover shadow-[0_4px_16px_rgba(56,64,47,0.12)]"
                  />

                  <p className="text-center text-[13px] font-medium text-text-primary">
                    Elder Smith&apos;s email list
                  </p>
                  <p className="text-center text-[9px] text-text-secondary">
                    Thanks for your support!
                  </p>

                  <div className="my-1 h-px w-full bg-border" />

                  <div className="flex w-full flex-col gap-1.5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[8px] font-medium text-text-primary">
                        Name
                      </span>
                      <div className="h-4 w-full rounded border border-border bg-white" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[8px] font-medium text-text-primary">
                        Email
                      </span>
                      <div className="h-4 w-full rounded border border-border bg-white" />
                    </div>
                    <div className="mt-1 rounded bg-sage py-1 text-center text-[9px] font-medium text-text-primary">
                      Sign me up
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-[0.5px] border-border bg-white px-8 py-16">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="text-center text-[22px] font-medium text-text-primary">
            How it works
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.badgeClassName}`}
                  >
                    <Icon size={24} className="text-text-primary" />
                  </div>
                  <p className="mt-3 text-[15px] font-medium text-text-primary">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[13px] text-text-secondary">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-8 py-14 text-center">
        <h2 className="text-2xl font-medium text-text-primary">
          Ready to set up your list?
        </h2>
        <p className="mt-2 text-[15px] text-text-secondary">
          Free to create. Takes less than five minutes.
        </p>
        <a
          href="/signup"
          className="mt-6 inline-block rounded-md bg-sage px-[22px] py-3 text-[15px] font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
        >
          Sign up
        </a>
      </section>

      <Footer className="border-t-[0.5px] border-border py-6" />
    </div>
  );
}
