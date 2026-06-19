import { Logo } from "@/components/Logo";
import { HeaderUserMenu } from "@/components/HeaderUserMenu";

export function AppHeader({ email }: { email?: string }) {
  return (
    <header className="flex items-center justify-between border-b-[0.5px] border-border pb-4">
      <Logo />
      {email && <HeaderUserMenu email={email} />}
    </header>
  );
}
