import { forgotPassword } from "@/app/auth/actions";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export default function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: { message?: string; error?: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream py-10">
      <div className="mb-8 flex flex-col items-center text-center">
        <Logo />
        <p className="mt-1.5 text-sm text-text-muted">
          Collect emails for your missionary&apos;s weekly updates
        </p>
      </div>

      <div className="w-full max-w-[400px] rounded-xl border-[0.5px] border-border bg-white p-8">
        <h1 className="mb-2 text-lg font-medium text-text-primary">
          Reset your password
        </h1>
        <p className="mb-5 text-[13px] text-text-secondary">
          Enter your email and we&apos;ll send you a link to reset your
          password.
        </p>

        {searchParams.message ? (
          <p className="rounded bg-success-bg px-3 py-2.5 text-sm text-success-text">
            {searchParams.message}
          </p>
        ) : (
          <form action={forgotPassword} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5 text-[13px] font-medium text-text-primary">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text-primary"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-md bg-sage py-3 text-[15px] font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
            >
              Send reset link
            </button>

            {searchParams.error && (
              <p className="rounded bg-error-bg px-3 py-2 text-sm text-error-text">
                {searchParams.error}
              </p>
            )}
          </form>
        )}

        <p className="mt-5 text-center text-[13px] text-text-muted">
          Remember it?{" "}
          <a href="/login" className="font-medium text-deep-sage no-underline">
            Back to log in
          </a>
        </p>
      </div>

      <Footer className="mt-6" />
    </main>
  );
}
