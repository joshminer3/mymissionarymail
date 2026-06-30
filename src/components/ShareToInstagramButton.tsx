"use client";

import { useState } from "react";
import { IconBrandInstagram, IconCircleCheck } from "@tabler/icons-react";

interface Props {
  slug: string;
  className?: string;
}

export function ShareToInstagramButton({ slug, className }: Props) {
  const [toast, setToast] = useState<string | null>(null);

  const handleClick = async () => {
    const url = `https://mymissionarymail.com/m/${slug}`;
    await navigator.clipboard.writeText(url);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      setToast("Link copied! Paste it onto your story.");
      window.location.href = "instagram://story-camera";
    } else {
      setToast("Link copied! Open Instagram on your phone to share.");
    }

    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={className}>
        <IconBrandInstagram size={16} />
        Share to Instagram
      </button>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-lg bg-text-primary px-4 py-2.5 text-sm text-cream shadow-lg">
          <IconCircleCheck size={16} className="shrink-0 text-sage" />
          {toast}
        </div>
      )}
    </>
  );
}
