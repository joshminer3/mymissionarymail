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
    QRCode.toDataURL(url, { width: 200 }).then(setDataUrl);
  }, [path]);

  if (!dataUrl) {
    return null;
  }

  return (
    <div className="flex flex-col items-start gap-2">
      {showPreview && (
        <img src={dataUrl} alt="QR code for share link" width={200} height={200} />
      )}
      <a
        href={dataUrl}
        download="missionary-mail-qr-code.png"
        className={linkClassName}
      >
        {icon ? (
          <span className="inline-flex items-center gap-1">
            {icon}
            Download QR code
          </span>
        ) : (
          "Download QR code"
        )}
      </a>
    </div>
  );
}
