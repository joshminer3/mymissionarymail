"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function CreatedBanner() {
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      router.replace("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  if (!visible) {
    return null;
  }

  return (
    <p className="rounded bg-success-bg px-3 py-2 text-sm text-success-text">
      Created!
    </p>
  );
}
