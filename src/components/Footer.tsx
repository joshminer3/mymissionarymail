export function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`text-center text-xs text-text-muted ${className}`}>
      <p>© 2026 MyMissionaryMail</p>
      <p className="mt-1">
        Contact us at{" "}
        <a
          href="mailto:mymissionarymailsupport@gmail.com"
          className="font-medium text-deep-sage no-underline"
        >
          mymissionarymailsupport@gmail.com
        </a>
      </p>
    </footer>
  );
}
