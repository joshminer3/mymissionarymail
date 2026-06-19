import { login } from "@/app/auth/actions";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
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
        <h1 className="mb-5 text-lg font-medium text-text-primary">
          Log in
        </h1>

        <form action={login} className="mb-4 flex flex-col gap-4">
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

          <label className="flex flex-col gap-1.5 text-[13px] font-medium text-text-primary">
            Password
            <input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text-primary"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-sage py-3 text-[15px] font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
          >
            Log in
          </button>

          {searchParams.error && (
            <p className="rounded bg-error-bg px-3 py-2 text-sm text-error-text">
              {searchParams.error}
            </p>
          )}
        </form>

        <p className="text-center text-[13px] text-text-muted">
          Need an account?{" "}
          <a href="/signup" className="font-medium text-deep-sage no-underline">
            Sign up
          </a>
        </p>
      </div>

      <Footer className="mt-6" />
    </main>
  );
}
