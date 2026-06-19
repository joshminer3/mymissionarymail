"use client";

import { useState } from "react";
import { IconCopy, IconCheck } from "@tabler/icons-react";

export function CopyLinkButton({
  path,
  className = "flex items-center gap-1 text-sm text-text-primary hover:text-deep-sage",
}: {
  path: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const url = `${window.location.origin}${path}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" onClick={handleCopy} className={className}>
      {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
      {copied ? "Copied!" : "Copy link"}
    </button>
  );
}
