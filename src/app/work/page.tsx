import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import { archive, projects } from "@/lib/projects";
import { WorkGrid } from "@/components/home/WorkGrid";
import { Archive } from "@/components/Archive";
import { RevealText } from "@/components/motion/RevealText";

export const metadata: Metadata = meta({
  title: "Our work — websites, platforms, eCommerce and UI/UX",
  description:
    "Case studies from 7CODE: marketplaces, eCommerce stores, Next.js websites and local SEO for clients in the UAE, Oman, the UK and Pakistan.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <section className="wrap pt-16 md:pt-24">
        <p className="text-sm text-graphite">
          Work, {projects.length} case studies and {archive.length} archived projects
        </p>
        <RevealText as="h1" onLoad className="display invisible mt-6 max-w-[14ch] text-[clamp(2.8rem,9vw,8rem)]">
          Work that brings in the calls.
        </RevealText>
        <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-graphite">
          Marketplaces, storefronts, business websites and search programmes. Each case study says exactly what we did,
          including where we contributed to a larger team&apos;s product.
        </p>
      </section>

      <section aria-label="Case studies" className="wrap py-16 md:py-24">
        <WorkGrid projects={projects} />
      </section>

      <section aria-labelledby="archive-h" className="wrap pb-24 md:pb-32">
        <div className="grid gap-6 border-t border-night pt-10 md:grid-cols-12">
          <RevealText id="archive-h" className="display text-[clamp(2.4rem,5.5vw,4.5rem)] md:col-span-7">
            The archive
          </RevealText>
          <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
            Earlier websites, eCommerce builds and UI/UX design work.
          </p>
        </div>
        <div className="mt-10">
          <Archive items={archive} />
        </div>
      </section>
    </>
  );
}
