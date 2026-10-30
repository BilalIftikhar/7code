// Typographic cover for an article — consistent with the project covers.
const tones = [
  "bg-night text-white",
  "bg-[#e6e6e6] text-night",
  "bg-night-2 text-white",
];

export function ArticleCover({
  title,
  category,
  index,
  size = "md",
  className = "",
}: {
  title: string;
  category: string;
  index: number;
  size?: "md" | "lg";
  className?: string;
}) {
  const tone = tones[index % tones.length];
  const dark = tone.includes("text-white");
  return (
    <div className={`relative isolate overflow-hidden ${tone} ${className}`}>
      <svg
        viewBox="0 0 100 120"
        className={`absolute -bottom-[14%] right-[-6%] h-[120%] w-auto ${dark ? "text-white/[0.07]" : "text-night/[0.06]"} transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:-translate-y-[3%] group-hover:rotate-[-3deg]`}
        aria-hidden="true"
      >
        <path d="M8 14 H90 L38 116" fill="none" stroke="currentColor" strokeWidth="13" />
      </svg>
      <div className={`absolute inset-0 flex flex-col justify-between ${size === "lg" ? "p-6 md:p-12" : "p-5 md:p-7"}`}>
        <span className={`self-start rounded-full px-3 py-1 text-xs font-semibold ${dark ? "bg-white/10" : "bg-night/[0.07]"}`}>
          {category}
        </span>
        <p
          aria-hidden="true"
          className={`display-soft max-w-[18ch] ${size === "lg" ? "text-[clamp(1.8rem,4.5vw,3.75rem)]" : "text-[clamp(1.35rem,2.2vw,1.85rem)]"}`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
