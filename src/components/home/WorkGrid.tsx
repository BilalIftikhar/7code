"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { prefersReducedMotion } from "@/components/motion/utils";

/** Gallery grid of project cards: cover, title, by-line, tags. */
export function WorkGrid({ projects, offset = 0 }: { projects: Project[]; offset?: number }) {
  const grid = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !grid.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.batch("[data-work-card]", {
        start: "top 90%",
        once: true,
        onEnter: (els) =>
          gsap.fromTo(els, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "expo.out", stagger: 0.12 }),
      });
    }, grid);
    return () => ctx.revert();
  }, []);

  return (
    <ul ref={grid} className="grid gap-x-5 gap-y-12 md:grid-cols-2 md:gap-y-16">
      {projects.map((p, i) => (
        <li key={p.slug} data-work-card>
          <Link href={`/work/${p.slug}`} data-cursor="View case" className="group block">
            <div className="overflow-hidden rounded-xl">
              <ProjectVisual
                project={p}
                index={i + offset}
                className="aspect-[16/11] transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-0.5 text-sm text-graphite">
                  {p.industry}, {p.region}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-rule bg-card px-3 py-1 text-xs font-semibold">
                {p.kind}
              </span>
            </div>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 3).map((s) => (
                <li key={s} className="rounded-full bg-chalk px-2.5 py-0.5 text-xs text-graphite">
                  {s}
                </li>
              ))}
            </ul>
          </Link>
        </li>
      ))}
    </ul>
  );
}
