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
      <span aria-hidden="true" className={`absolute bottom-6 right-6 h-[5px] w-8 rounded-sm bg-cursor md:bottom-8 md:right-8`} />
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
