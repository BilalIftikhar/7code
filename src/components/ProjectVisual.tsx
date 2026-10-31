import type { Project } from "@/lib/projects";

// Monochrome tile tones, one per project, so the grid has rhythm without colour.
const tones = [
  { bg: "bg-night", fg: "text-white", stroke: "text-white/10", sub: "text-white/80" },
  { bg: "bg-[#e6e6e6]", fg: "text-night", stroke: "text-night/[0.07]", sub: "text-night/80" },
  { bg: "bg-night-2", fg: "text-white", stroke: "text-white/10", sub: "text-white/80" },
  { bg: "bg-card", fg: "text-night", stroke: "text-night/[0.06]", sub: "text-night/75" },
  { bg: "bg-[#3a3a3a]", fg: "text-white", stroke: "text-white/10", sub: "text-white/80" },
];

/**
 * Typographic cover for a project — stands in for screenshots until real
 * captures of the live sites are added.
 */
export function ProjectVisual({
  project,
  index,
  size = "md",
  className = "",
}: {
  project: Project;
  index: number;
  size?: "md" | "lg";
  className?: string;
}) {
  const t = tones[index % tones.length];
  return (
    <div className={`relative isolate overflow-hidden ${t.bg} ${t.fg} ${className}`}>
      <svg
        viewBox="0 0 100 120"
        className={`absolute -bottom-[12%] right-[-4%] h-[115%] w-auto ${t.stroke} transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:-translate-y-[3%] group-hover:rotate-[-3deg]`}
        aria-hidden="true"
      >
        <path d="M8 14 H90 L38 116" fill="none" stroke="currentColor" strokeWidth="13" />
      </svg>
      <div className={`absolute inset-0 flex flex-col justify-between ${size === "lg" ? "p-6 md:p-12" : "p-5 md:p-7"}`}>
        <p className={`text-sm ${t.sub}`}>{project.region}</p>
        <div>
          <p
            className={`display transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:translate-x-1 ${
              size === "lg" ? "text-[clamp(3rem,10vw,9.5rem)]" : "text-[clamp(2.2rem,4.6vw,4rem)]"
            }`}
          >
            {project.name}
          </p>
          {project.url && (
            <p className={`mt-3 text-sm ${t.sub}`}>{project.url.replace(/^https?:\/\/(www\.)?/, "")}</p>
          )}
        </div>
      </div>
    </div>
  );
}
