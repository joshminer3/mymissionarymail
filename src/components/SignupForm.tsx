"use client";

import { useState, type FormEvent } from "react";

export function SignupForm({
  action,
}: {
  action: (formData: FormData) => void;
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mismatchError, setMismatchError] = useState(false);

  const recheckIfShowingError = (nextPassword: string, nextConfirm: string) => {
    if (mismatchError && (!nextConfirm || nextConfirm === nextPassword)) {
      setMismatchError(false);
    }
  };

  const handleConfirmBlur = () => {
    setMismatchError(confirmPassword.length > 0 && confirmPassword !== password);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (confirmPassword && confirmPassword !== password) {
      e.preventDefault();
      setMismatchError(true);
    }
  };

  return (
    <form action={action} onSubmit={handleSubmit} className="mb-4 flex flex-col gap-4">
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
          minLength={6}
          placeholder="••••••••"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            recheckIfShowingError(e.target.value, confirmPassword);
          }}
          className="rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text-primary"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-[13px] font-medium text-text-primary">
        Confirm password
        <input
          name="confirmPassword"
          type="password"
          required
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            recheckIfShowingError(password, e.target.value);
          }}
          onBlur={handleConfirmBlur}
          className="rounded-md border border-border bg-white px-3 py-2.5 text-sm text-text-primary"
        />
        {mismatchError && (
          <span className="text-xs text-error-text">
            Passwords don&apos;t match
          </span>
        )}
      </label>

      <button
        type="submit"
        className="w-full rounded-md bg-sage py-3 text-[15px] font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
      >
        Sign up
      </button>
    </form>
  );
}
