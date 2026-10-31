"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Card3D } from "@/components/motion/Card3D";
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
          <Card3D className="rounded-2xl" max={7}>
            <Link
              href={`/work/${p.slug}`}
              data-cursor="View case"
              className="group block rounded-2xl border border-rule bg-card p-2 transition-colors hover:border-night/30"
            >
              <div data-depth style={{ ["--depth" as string]: 26 }} className="overflow-hidden rounded-xl">
                <ProjectVisual
                  project={p}
                  index={i + offset}
                  className="aspect-[16/11] transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-4">
                <div data-depth style={{ ["--depth" as string]: 14 }}>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-0.5 text-sm text-graphite">
                    {p.industry}, {p.region}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 3).map((s) => (
                      <li key={s} className="rounded-full bg-chalk px-2.5 py-0.5 text-xs text-graphite">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <span
                  data-depth
                  style={{ ["--depth" as string]: 48 }}
                  className="shrink-0 rounded-full bg-night px-3 py-1 text-xs font-semibold text-white"
                >
                  {p.kind}
                </span>
              </div>
            </Link>
          </Card3D>
        </li>
      ))}
    </ul>
  );
}
