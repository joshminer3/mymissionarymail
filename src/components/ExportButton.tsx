"use client";

import { useState } from "react";
import { IconDownload } from "@tabler/icons-react";
import { ExportInstructionsModal } from "@/components/ExportInstructionsModal";

export function ExportButton({
  href,
  fileName,
}: {
  href: string;
  fileName: string;
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a
        href={href}
        onClick={() => setShowModal(true)}
        className="flex items-center gap-1 rounded-md bg-sage px-4 py-2.5 text-sm font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
      >
        <IconDownload size={16} />
        Download Email List
      </a>

      {showModal && (
        <ExportInstructionsModal
          fileName={fileName}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
