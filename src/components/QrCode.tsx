"use client";

import { useEffect, useState, type ReactNode } from "react";
import QRCode from "qrcode";

export function QrCode({
  path,
  showPreview = true,
  linkClassName = "text-sm underline",
  icon,
}: {
  path: string;
  showPreview?: boolean;
  linkClassName?: string;
  icon?: ReactNode;
}) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const url = `${window.location.origin}${path}`;
    QRCode.toDataURL(url, { width: 400 }).then(setDataUrl);
  }, [path]);

  const handleSave = async () => {
    if (!dataUrl) return;

    // On mobile, try Web Share API with files — on iOS this opens the share
    // sheet which includes "Save Image" → saves directly to Photos.
    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], "qr-code.png", { type: "image/png" });

    if (navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "QR Code" });
        return;
      } catch {
        // User cancelled or share failed — fall through to download
      }
    }

    // Desktop fallback: trigger a standard file download
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "missionary-mail-qr-code.png";
    a.click();
  };

  if (!dataUrl) {
    return null;
  }

  return (
    <div className="flex flex-col items-start gap-2">
      {showPreview && (
        <img src={dataUrl} alt="QR code for share link" width={200} height={200} />
      )}
      <button type="button" onClick={handleSave} className={linkClassName}>
        {icon ? (
          <span className="inline-flex items-center gap-1">
            {icon}
            Download QR code
          </span>
        ) : (
          "Download QR code"
        )}
      </button>
    </div>
  );
}
