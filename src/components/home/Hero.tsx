"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText } from "@/components/motion/RevealText";
import { Magnetic } from "@/components/motion/Magnetic";
import { ProjectVisual } from "@/components/ProjectVisual";
import { prefersReducedMotion } from "@/components/motion/utils";
import type { Project } from "@/lib/projects";

export function Hero({ featured }: { featured: Project }) {
  const showcase = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !showcase.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Showcase opens up from slightly inset to full width as it scrolls in
      gsap.fromTo(
        showcase.current,
        { clipPath: "inset(6% 4% 0% 4% round 18px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 12px)",
          ease: "none",
          scrollTrigger: { trigger: showcase.current, start: "top 95%", end: "top 30%", scrub: 0.5 },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="wrap pt-12 md:pt-20">
      <div className="flex flex-wrap items-baseline justify-between gap-3 text-sm text-graphite">
        <p className="rise" style={{ animationDelay: "0.1s" }}>
          Digital agency, Lahore
        </p>
        <p className="rise" style={{ animationDelay: "0.15s" }}>
          Working with the UAE, Oman and worldwide
        </p>
      </div>

      <RevealText
        as="h1"
        onLoad
        delay={0.15}
        className="display invisible mt-6 text-[clamp(2.9rem,10.6vw,10.5rem)] text-balance"
      >
        Digital experiences, engineered for growth.
      </RevealText>

      <div className="rise mt-10 grid gap-6 md:mt-12 md:grid-cols-12 md:items-end" style={{ animationDelay: "0.7s" }}>
        <p className="max-w-[46ch] text-lg leading-relaxed text-graphite text-pretty md:col-span-6">
          From custom software and high-performing websites to mobile apps, eCommerce and search marketing, 7CODE helps
          businesses build, launch and grow with confidence.
        </p>
        <div className="flex flex-wrap gap-3 md:col-span-6 md:justify-end">
          <Magnetic>
            <Link
              href="/contact"
              className="block rounded-full bg-signal px-7 py-4 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
            >
              Start a project
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/work"
              className="block rounded-full border border-night/20 bg-card px-7 py-4 font-semibold text-night transition-colors hover:border-night"
            >
              Explore our work
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* Featured project showcase */}
      <div className="mt-14 md:mt-20">
        <Link href={`/work/${featured.slug}`} data-cursor="View case" className="group block">
          <div ref={showcase} className="overflow-hidden rounded-xl will-change-[clip-path]">
            <ProjectVisual
              project={featured}
              index={0}
              size="lg"
              className="aspect-[4/5] transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:scale-[1.015] sm:aspect-[16/10] md:aspect-[16/8]"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 items-center gap-4 rounded-xl bg-card px-5 py-4 md:grid-cols-12 md:px-6">
            <div className="flex items-center gap-3 md:col-span-4">
              <span className="rounded-full bg-night px-3 py-1 text-xs font-semibold text-white">Featured project</span>
              <span className="font-semibold">{featured.name}</span>
            </div>
            <p className="hidden text-sm text-graphite md:col-span-3 md:block">{featured.industry}</p>
            <p className="hidden text-sm text-graphite md:col-span-3 md:block">{featured.region}</p>
            <span className="justify-self-end text-sm font-semibold underline-offset-4 group-hover:underline md:col-span-2">
              View case study
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
