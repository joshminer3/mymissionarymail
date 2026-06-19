export function LogoMark({
  size = 32,
  strokeWidth = 1.5,
  color = "#647262",
  className,
}: {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="7"
        width="26"
        height="18"
        rx="3"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <path
        d="M4 9L16 17L28 9"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="/"
      className={`flex items-center gap-3 no-underline ${className ?? ""}`}
    >
      <LogoMark size={32} strokeWidth={1.5} />
      <span className="text-[22px] font-normal tracking-[0.01em] text-text-primary">
        MyMissionaryMail
      </span>
    </a>
  );
}
