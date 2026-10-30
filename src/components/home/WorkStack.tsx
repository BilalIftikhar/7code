"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/projects";
import { prefersReducedMotion } from "@/components/motion/utils";

const themes = [
  { bg: "bg-night", text: "text-white", sub: "text-mist", accent: "text-signal", chip: "border-white/20 text-chalk/80" },
  { bg: "bg-signal", text: "text-on-signal", sub: "text-on-signal/70", accent: "text-on-signal/15", chip: "border-on-signal/30 text-on-signal/85" },
  { bg: "bg-chalk", text: "text-night", sub: "text-graphite", accent: "text-signal", chip: "border-night/15 text-graphite" },
  { bg: "bg-night-2", text: "text-white", sub: "text-mist", accent: "text-signal-soft/40", chip: "border-white/20 text-chalk/80" },
  { bg: "bg-white", text: "text-night", sub: "text-graphite", accent: "text-night/10", chip: "border-night/15 text-graphite" },
];

/** Full-screen case-study cards that stack as you scroll (BASIC/DEPT + Clay-style). */
export function WorkStack({ projects }: { projects: Project[] }) {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !list.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray<HTMLElement>("[data-card]", list.current);
    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        gsap.fromTo(card.firstElementChild, { scale: 1, filter: "brightness(1)" }, {
          scale: 0.9,
          filter: "brightness(0.6)",
          ease: "none",
          scrollTrigger: { trigger: next, start: "top bottom", end: "top 15%", scrub: true },
        });
      });
    }, list);
    return () => ctx.revert();
  }, []);

  return (
    <ol ref={list} className="relative">
      {projects.map((p, i) => {
        const t = themes[i % themes.length];
        return (
          <li
            key={p.slug}
            data-card
            className="sticky pb-6"
            style={{ top: `calc(5.5rem + ${i * 0.9}rem)` }}
          >
            <Link
              href={`/work/${p.slug}`}
              data-cursor="View case"
              className={`group relative grid min-h-[78svh] origin-top overflow-hidden rounded-[1.75rem] ${t.bg} ${t.text} p-6 will-change-transform md:grid-cols-12 md:p-12`}
            >
              <svg
                viewBox="0 0 100 120"
                className={`pointer-events-none absolute -bottom-16 -right-10 h-[85%] w-auto ${t.accent} transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:-translate-y-4 group-hover:rotate-[-4deg]`}
                aria-hidden="true"
              >
                <path d="M8 14 H90 L38 116" fill="none" stroke="currentColor" strokeWidth="13" />
              </svg>

              <div className="relative flex flex-col justify-between gap-10 md:col-span-12">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <p className={t.sub}>
                    <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mx-3 inline-block h-px w-8 translate-y-[-0.3em] bg-current align-middle opacity-50" />
                    {p.industry}
                  </p>
                  <p className={t.sub}>{p.region}</p>
                </div>

                <h3 className="display text-[clamp(3rem,11vw,10rem)]">{p.name}</h3>

                <div className="grid gap-6 md:grid-cols-12 md:items-end">
                  <p className="max-w-[48ch] text-lg leading-relaxed md:col-span-6 md:text-xl">{p.summary}</p>
                  <ul className="flex flex-wrap gap-2 md:col-span-5 md:col-start-8 md:justify-end">
                    {p.scope.map((s) => (
                      <li key={s} className={`rounded-full border px-3 py-1 text-sm ${t.chip}`}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
