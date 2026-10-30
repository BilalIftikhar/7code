import Link from "next/link";
import { projects } from "@/lib/projects";

/** Endless strip of real client and project names, linking to each case study. */
export function ClientStrip() {
  const row = projects.map((p) => (
    <li key={p.slug} className="flex items-center">
      <Link
        href={`/work/${p.slug}`}
        tabIndex={-1}
        className="display-soft whitespace-nowrap px-8 text-2xl text-graphite transition-colors hover:text-night md:px-12 md:text-3xl"
      >
        {p.name}
      </Link>
      <svg viewBox="0 0 100 120" className="h-4 w-auto text-rule" aria-hidden="true">
        <path d="M0 0H100V17L51 120H29L76 19H0Z" fill="currentColor" />
      </svg>
    </li>
  ));

  return (
    <section aria-label="Clients and projects" className="border-y border-rule py-6 md:py-8">
      <p className="wrap mb-5 text-sm text-graphite">Projects delivered for companies in the UAE, Oman, the UK and Pakistan</p>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-[marquee_42s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <ul className="flex shrink-0">{row}</ul>
          <ul className="flex shrink-0" aria-hidden="true">
            {row}
          </ul>
        </div>
      </div>
    </section>
  );
}
