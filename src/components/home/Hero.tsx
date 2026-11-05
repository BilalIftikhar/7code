"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Magnetic } from "@/components/motion/Magnetic";
import { ScrambleText } from "@/components/motion/ScrambleText";
import { ProjectVisual } from "@/components/ProjectVisual";
import { HeroSeven } from "@/components/three/HeroSeven";
import { SmokeField } from "@/components/three/SmokeField";
import { prefersReducedMotion } from "@/components/motion/utils";
import { whenIdle } from "@/components/motion/idle";
import { site, whatsappLink } from "@/lib/site";
import type { Project } from "@/lib/projects";

const LINES = ["Digital", "experiences,", "engineered", "for growth."];

export function Hero({ featured }: { featured: Project }) {
  const showcase = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop only: the scroll-scrubbed clip-path repaints on every scroll frame
    if (prefersReducedMotion() || window.innerWidth < 1024) return;
    let ctx: gsap.Context | null = null;
    const cancel = whenIdle(() => {
    gsap.registerPlugin(ScrollTrigger);
    ctx = gsap.context(() => {
      // Showcase opens up as it scrolls in (headline reveal is pure CSS — see .line-rise)
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
    });
    return () => {
      cancel();
      ctx?.revert();
    };
  }, []);

  return (
    <section className="wrap pt-6 md:pt-8">
      {/* Cinematic hero card: smoky light, light-weight type, glass controls */}
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[#0a0b0c] text-white ring-1 ring-white/10 md:rounded-[36px]">
        <SmokeField />
        <div className="relative grid min-h-[min(92svh,880px)] items-center gap-4 px-6 pb-8 pt-20 sm:px-10 md:pt-24 lg:grid-cols-12 lg:px-14 lg:pb-12">
          <div className="relative z-10 lg:col-span-8">
            <h1>
              <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[0.8rem] font-medium text-white/80 backdrop-blur-md md:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#25d366] shadow-[0_0_0_4px_rgba(37,211,102,0.2)]" aria-hidden="true" />
                <ScrambleText text="Web development, SEO & digital marketing agency for Dubai, Abu Dhabi & Worldwide" delay={150} afterIntro />
              </span>{" "}
              <span className="mt-8 block text-[clamp(2.9rem,7.6vw,7.6rem)] font-[300] leading-[0.95] tracking-[-0.05em]">
                {LINES.map((l, i) => (
                  <span key={l} className="block overflow-hidden pb-[0.07em]">
                    <span
                      className={`line-rise block ${i >= 2 ? "text-white/45" : ""}`}
                      style={{ ["--d" as string]: `${0.15 + i * 0.09}s` }}
                    >
                      {l}
                    </span>{" "}
                  </span>
                ))}
              </span>
            </h1>

            <div className="rise mt-8" style={{ ["--d" as string]: "0.8s" }}>
              <p className="max-w-[46ch] text-lg leading-relaxed text-white/70 text-pretty">
                Custom websites, web apps, Shopify stores and mobile apps, plus the SEO, AI-search and ad campaigns that make
                them pay. Built by senior engineers for businesses across the UAE, Oman, the UK and Pakistan.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] py-2 pl-6 pr-2 font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition-colors hover:bg-white/[0.14]"
                  >
                    Get a free quote
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-night transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:rotate-45" aria-hidden="true">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5"><path d="M4 12L12 4M6 4h6v6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </span>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full px-6 py-3.5 font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    WhatsApp us
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
          <HeroSeven onDark className="-mt-2 h-[260px] sm:h-[340px] lg:col-span-4 lg:mt-0 lg:h-[520px]" />

          <ul className="rise relative z-10 flex flex-wrap gap-2 text-sm lg:col-span-12 lg:mt-6" style={{ ["--d" as string]: "1s" }}>
            <li className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-2 backdrop-blur-md">
              <span className="font-semibold">Top Rated Plus</span>
              <span className="text-white/60">on Upwork</span>
            </li>
            <li className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-2 backdrop-blur-md">
              <span className="font-semibold">100%</span>
              <span className="text-white/60">Job Success</span>
            </li>
            <li className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-2 backdrop-blur-md">
              <span className="font-semibold">{site.founder.yearsExperience} years</span>
              <span className="text-white/60">senior engineering</span>
            </li>
          </ul>
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
