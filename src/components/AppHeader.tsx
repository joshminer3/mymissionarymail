import { logout } from "@/app/auth/actions";
import { Logo } from "@/components/Logo";

export function AppHeader({ email }: { email?: string }) {
  return (
    <header className="flex items-center justify-between border-b-[0.5px] border-border pb-4">
      <Logo />
      {email && (
        <div className="flex items-center gap-3">
          <span className="text-sm text-text-secondary">{email}</span>
          <form action={logout}>
            <button
              type="submit"
              className="rounded border border-border bg-transparent px-3 py-1.5 text-sm text-text-primary hover:bg-tan"
            >
              Log out
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
