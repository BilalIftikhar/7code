"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Card3D } from "@/components/motion/Card3D";
import { prefersReducedMotion } from "@/components/motion/utils";

/**
 * Pinned horizontal gallery: vertical scroll drives the track sideways while
 * each card turns in 3D by its distance from the centre (cover-flow).
 * Below 1024px it becomes a native swipe carousel with snap points.
 */
export function WorkGallery3D({ projects, total }: { projects: Project[]; total: number }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sec = section.current;
    const tr = track.current;
    if (!sec || !tr || prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);
    const cards = Array.from(tr.querySelectorAll<HTMLElement>("[data-slide]"));
    let last = -1;

    const update3D = () => {
      const vw = window.innerWidth;
      let best = 0;
      let bestD = Infinity;
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const d = (r.left + r.width / 2 - vw / 2) / (vw / 2); // -1 .. 1 across the viewport
        const cd = Math.max(-1.6, Math.min(1.6, d));
        const rot = -cd * 26;
        const z = -Math.abs(cd) * 220;
        const s = 1 - Math.min(Math.abs(cd), 1) * 0.08;
        c.style.transform = `perspective(1600px) translateZ(${z.toFixed(1)}px) rotateY(${rot.toFixed(2)}deg) scale(${s.toFixed(3)})`;
        c.style.opacity = String(1 - Math.min(Math.abs(cd), 1.4) * 0.35);
        if (Math.abs(d) < bestD) {
          bestD = Math.abs(d);
          best = i;
        }
      });
      if (best !== last) {
        last = best;
        setActive(best);
      }
    };

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const distance = () => tr.scrollWidth - window.innerWidth;
      const tween = gsap.to(tr, {
        x: () => -distance(),
        ease: "none",
        onUpdate: update3D,
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      });
      update3D();
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        cards.forEach((c) => {
          c.style.transform = "";
          c.style.opacity = "";
        });
      };
    });
    mm.add("(max-width: 1023px)", () => {
      const onScroll = () => {
        const max = tr.scrollWidth - tr.clientWidth;
        setProgress(max > 0 ? tr.scrollLeft / max : 0);
        const w = cards[0]?.getBoundingClientRect().width ?? 1;
        setActive(Math.min(cards.length - 1, Math.round(tr.scrollLeft / (w + 16))));
      };
      tr.addEventListener("scroll", onScroll, { passive: true });
      return () => tr.removeEventListener("scroll", onScroll);
    });
    return () => mm.revert();
  }, []);

  const count = projects.length;

  return (
    <section ref={section} aria-labelledby="gallery-h" className="relative overflow-hidden py-20 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0">
      <div className="wrap flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm tabular-nums text-graphite" aria-live="polite">
            {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
          <h2 id="gallery-h" className="display mt-3 text-[clamp(2.4rem,5.5vw,4.5rem)]">
            Selected work
          </h2>
        </div>
        <Link
          href="/work"
          className="rounded-full border border-night/20 bg-card px-6 py-3 font-semibold transition-colors hover:border-night"
        >
          All {total} projects
        </Link>
      </div>

      <ul
        ref={track}
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 [scrollbar-width:none] md:px-8 lg:mt-12 lg:snap-none lg:gap-8 lg:overflow-visible lg:pb-0 lg:pl-[max(3rem,calc((100vw-88rem)/2+3rem))] lg:pr-[30vw] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((p, i) => (
          <li key={p.slug} data-slide className="w-[82vw] shrink-0 snap-center will-change-transform sm:w-[60vw] lg:w-[min(40vw,600px)]">
            <Card3D className="rounded-2xl" max={6}>
              <Link
                href={`/work/${p.slug}`}
                data-cursor="View case"
                className="group block rounded-2xl border border-rule bg-card p-2"
              >
                <div data-depth style={{ ["--depth" as string]: 30 }} className="overflow-hidden rounded-xl">
                  <ProjectVisual
                    project={p}
                    index={i}
                    className="aspect-[4/3] transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-center justify-between gap-4 px-3 pb-2 pt-4">
                  <div data-depth style={{ ["--depth" as string]: 16 }}>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-sm text-graphite">{p.industry}</p>
                  </div>
                  <span data-depth style={{ ["--depth" as string]: 50 }} className="shrink-0 rounded-full bg-night px-3 py-1 text-xs font-semibold text-white">
                    {p.kind}
                  </span>
                </div>
              </Link>
            </Card3D>
          </li>
        ))}
      </ul>

      <div className="wrap mt-4 lg:mt-10">
        <div className="h-1 overflow-hidden rounded-full bg-rule" aria-hidden="true">
          <div className="h-full origin-left bg-night" style={{ transform: `scaleX(${Math.max(progress, 0.02)})` }} />
        </div>
      </div>
    </section>
  );
}
