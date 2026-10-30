type Props = { className?: string; tone?: "night" | "chalk" };

/** The 7CODE mark: a 7 whose stroke is a code slash. */
export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="var(--color-signal)" />
      <path d="M8.5 9.5h15L14 24" fill="none" stroke="var(--color-on-signal)" strokeWidth="3.4" strokeLinecap="square" />
      <path d="M17.5 24h6" stroke="var(--color-on-signal)" strokeOpacity=".55" strokeWidth="3.4" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ className = "", tone = "night" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${tone === "chalk" ? "text-chalk" : "text-night"} ${className}`}
    >
      <Mark />
      <span className="display text-[1.35rem] leading-none tracking-[-0.04em]">7CODE</span>
    </span>
  );
}
