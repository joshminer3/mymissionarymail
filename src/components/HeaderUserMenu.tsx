"use client";

import { useEffect, useRef, useState } from "react";
import { IconDotsVertical } from "@tabler/icons-react";
import { logout } from "@/app/auth/actions";

export function HeaderUserMenu({ email }: { email: string }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <div className="hidden items-center gap-3 min-[480px]:flex">
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

      <div ref={containerRef} className="relative min-[480px]:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Account menu"
          aria-expanded={open}
          className="flex h-8 w-8 items-center justify-center rounded-full border-[0.5px] border-border bg-transparent text-text-primary"
        >
          <IconDotsVertical size={18} />
        </button>

        {open && (
          <div className="absolute right-0 top-[calc(100%+6px)] z-10 w-48 rounded-md border-[0.5px] border-border bg-white py-2 shadow-[0_4px_16px_rgba(56,64,47,0.12)]">
            <p className="px-3 pb-2 text-[13px] text-text-secondary">
              {email}
            </p>
            <div className="border-t-[0.5px] border-border" />
            <form action={logout}>
              <button
                type="submit"
                className="w-full px-3 pt-2 text-left text-sm text-text-primary hover:bg-tan"
              >
                Log out
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
