import { signup } from "@/app/auth/actions";
import { SignupForm } from "@/components/SignupForm";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/Footer";

export default function SignupPage({
  searchParams,
}: {
  searchParams: { error?: string; message?: string };
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
          Sign up
        </h1>

        <SignupForm action={signup} />

        {searchParams.error && (
          <p className="mb-4 rounded bg-error-bg px-3 py-2 text-sm text-error-text">
            {searchParams.error}
          </p>
        )}
        {searchParams.message && (
          <p className="mb-4 rounded bg-success-bg px-3 py-2 text-sm text-success-text">
            {searchParams.message}
          </p>
        )}

        <p className="text-center text-[13px] text-text-muted">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-deep-sage no-underline">
            Log in
          </a>
        </p>
      </div>

      <Footer className="mt-6" />
    </main>
  );
}
