type Props = { className?: string; tone?: "night" | "chalk" };

/** The 7CODE mark: a 7 whose stroke is a code slash. */
export function Mark({ className = "h-7 w-7", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill={invert ? "#fff" : "var(--color-signal)"} />
      <path d="M8.5 9.5h15L14 24" fill="none" stroke={invert ? "var(--color-night)" : "var(--color-on-signal)"} strokeWidth="3.4" strokeLinecap="square" />
      <path d="M17.5 24h6" stroke="var(--color-cursor)" strokeWidth="3.4" strokeLinecap="square" />
    </svg>
  );
}

export function Logo({ className = "", tone = "night" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${tone === "chalk" ? "text-chalk" : "text-night"} ${className}`}
    >
      <Mark invert={tone === "chalk"} />
      <span className="display text-[1.35rem] leading-none tracking-[-0.04em]">7CODE</span>
    </span>
  );
}

/**
 * The "7_" code mark, flat: a 7 plus a terminal cursor. The same geometry as
 * the 3D hero mark, used for fallbacks, the preloader and page transitions.
 */
export function CodeMark({
  className = "",
  blink = false,
  outline = false,
  color = "currentColor",
}: {
  className?: string;
  blink?: boolean;
  outline?: boolean;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 114 120" className={className} aria-hidden="true">
      <path
        d="M0 0H100V17L51 120H29L76 19H0Z"
        pathLength={1}
        className={outline ? "preloader-seven" : undefined}
        fill={outline ? "none" : color}
        stroke={outline ? color : undefined}
        strokeWidth={outline ? 3 : undefined}
      />
      <rect x="74" y="108" width="40" height="12" rx="2" fill="var(--color-cursor)" className={blink ? "cursor-blink" : undefined} />
    </svg>
  );
}
