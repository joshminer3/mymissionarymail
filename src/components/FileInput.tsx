"use client";

import { useRef, useState } from "react";
import { IconUpload } from "@tabler/icons-react";

export function FileInput({
  name,
  accept,
  label,
}: {
  name: string;
  accept?: string;
  label: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputId = `file-input-${name}`;

  return (
    <div className="flex flex-col gap-1.5 text-sm font-medium text-text-primary">
      <label htmlFor={inputId}>{label}</label>
      <div className="flex items-center gap-3 rounded-md border border-dashed border-border bg-white px-3 py-2.5">
        <input
          ref={inputRef}
          id={inputId}
          name={name}
          type="file"
          accept={accept}
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex items-center gap-1 rounded border border-border bg-cream px-2 py-1 text-xs font-normal text-text-primary hover:bg-tan"
        >
          <IconUpload size={16} />
          Choose file
        </button>
        <span className="text-sm font-normal text-text-muted">
          {fileName ?? "No file chosen"}
        </span>
      </div>
    </div>
  );
}
