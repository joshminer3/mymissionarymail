"use client";

import { useEffect, useState } from "react";
import { IconCamera } from "@tabler/icons-react";
import { generateStoryImage } from "@/lib/storyImage";
import { tryOpenInstagramStoryDirectly } from "@/lib/instagramDeepLink";

const gradientStyle = {
  background: "linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7)",
};

const MOBILE_USER_AGENT = /Android|iPhone|iPod|Mobile/i;
const IOS_USER_AGENT = /iPhone|iPod/i;
const META_APP_ID = process.env.NEXT_PUBLIC_META_APP_ID;

export function ShareToStoryButton({
  path,
  className = "",
}: {
  path: string;
  className?: string;
}) {
  const [supported, setSupported] = useState(false);
  const [open, setOpen] = useState(false);
  const [sharing, setSharing] = useState(false);

  useEffect(() => {
    try {
      const testFile = new File([""], "test.png", { type: "image/png" });
      setSupported(
        MOBILE_USER_AGENT.test(navigator.userAgent) &&
          typeof navigator.share === "function" &&
          typeof navigator.canShare === "function" &&
          navigator.canShare({ files: [testFile] })
      );
    } catch {
      setSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  if (!supported) {
    return null;
  }

  const usesDirectIOSPath =
    Boolean(META_APP_ID) && IOS_USER_AGENT.test(navigator.userAgent);

  const handleShare = async () => {
    setSharing(true);
    try {
      const blob = generateStoryImage();

      if (usesDirectIOSPath && META_APP_ID) {
        try {
          const openedDirectly = await tryOpenInstagramStoryDirectly(
            blob,
            META_APP_ID
          );
          if (openedDirectly) return;
        } catch {
          // Clipboard write blocked or unsupported — fall back to the
          // share sheet below.
        }
      }

      const file = new File([blob], "missionary-mail-story.png", {
        type: "image/png",
      });
      await navigator.share({
        files: [file],
        url: `${window.location.origin}${path}`,
      });
    } catch (err) {
      if ((err as Error)?.name !== "AbortError") {
        console.error(err);
      }
    } finally {
      setSharing(false);
      setOpen(false);
    }
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={gradientStyle}
        className={`flex w-full items-center justify-center gap-1 rounded px-2 py-1 text-xs text-white ${className}`}
      >
        <IconCamera size={16} />
        Share to Story
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xs rounded-md border-[0.5px] border-border bg-white p-4 shadow-[0_4px_16px_rgba(56,64,47,0.12)]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[13px] leading-normal text-text-secondary">
              {usesDirectIOSPath
                ? <>This opens Instagram with your background ready to go — add the link as a Link sticker, plus a caption like &quot;Sign up to get my weekly missionary emails!&quot;, before you post.</>
                : <>This opens Instagram with your link ready to go — just add a caption like &quot;Sign up to get my weekly missionary emails!&quot; before you post.</>}
            </p>
            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded border border-border px-2 py-1 text-xs text-text-primary hover:bg-tan"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleShare}
                disabled={sharing}
                style={gradientStyle}
                className="rounded px-2 py-1 text-xs text-white disabled:opacity-60"
              >
                {sharing ? "Sharing…" : "Share"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
