"use client";

import { useEffect } from "react";
import { IconCircleCheck, IconX } from "@tabler/icons-react";

function getSteps(fileName: string): React.ReactNode[] {
  return [
    <>
      Open{" "}
      <a
        href="https://contacts.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-black underline"
      >
        Google Contacts
      </a>{" "}
      — make sure you&apos;re signed in with the Gmail account you&apos;ll
      use to send your weekly emails.
    </>,
    <>
      Click <span className="font-medium text-text-primary">Import</span> on
      the left sidebar, then{" "}
      <span className="font-medium text-text-primary">Select file</span> and
      choose the file you just downloaded, titled{" "}
      <span className="font-medium text-text-primary">
        &quot;{fileName}&quot;
      </span>
      .
    </>,
    <>
      Click <span className="font-medium text-text-primary">Import</span>{" "}
      again to finish. Google automatically creates a label for this batch,
      named something like &quot;Imported on [today&apos;s date].&quot;
    </>,
    <>
      Find that label in the left sidebar under{" "}
      <span className="font-medium text-text-primary">Labels</span>, click
      the pencil/edit icon next to it, and rename it to something like
      &quot;Weekly Mission Email.&quot;
    </>,
    <>
      When you&apos;re ready to send an update, click{" "}
      <span className="font-medium text-text-primary">Compose</span> in Gmail
      and type your label name into the To field — everyone in the group will
      be added.
    </>,
  ];
}

export function ExportInstructionsModal({
  fileName,
  onClose,
}: {
  fileName: string;
  onClose: () => void;
}) {
  const steps = getSteps(fileName);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(56,64,47,0.35)] p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[460px] rounded-2xl bg-white p-8 shadow-[0_12px_40px_rgba(56,64,47,0.18)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-text-muted"
        >
          <IconX size={18} />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-mint">
            <IconCircleCheck size={20} className="text-deep-sage" />
          </div>
          <h2 className="pt-1.5 text-lg font-medium text-text-primary">
            Your list is downloading
          </h2>
        </div>
        <p className="mb-5 mt-3 text-[13px] text-text-secondary">
          Here&apos;s how to add these contacts to Gmail so you can start
          emailing them.
        </p>

        <ol className="flex flex-col gap-3.5">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-3.5">
              <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-sage text-xs font-medium text-text-primary">
                {i + 1}
              </span>
              <span className="text-[13px] leading-normal text-text-primary">
                {step}
              </span>
            </li>
          ))}
        </ol>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-md bg-sage py-3 text-sm font-medium text-text-primary hover:bg-sage-hover hover:text-text-primary active:bg-deep-sage active:text-cream"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
