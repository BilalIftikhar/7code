import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import { CtaBox, PageHeader } from "@/components/PageParts";
import { LandingGrid } from "@/components/landing/LandingPage";
import { byKind } from "@/lib/landings";

export const metadata: Metadata = meta({
  title: "Technologies — Laravel, Next.js, React, Node.js, Python & more",
  description:
    "The technologies 7CODE builds with: Laravel, PHP, React, Next.js, Node.js, NestJS, Vue.js, Python, MySQL and REST APIs, and when we recommend each one.",
  path: "/technologies",
});

export default function TechnologiesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Technologies" }]}
        title="The stack we build with."
        wide
        intro={
          <>
            <p className="text-xl leading-relaxed md:text-2xl">
              We choose technology for the job and for the people who will maintain it after us, not for novelty.
            </p>
            <p className="text-lg leading-relaxed text-graphite">
              Most of our work uses Next.js and React on the front end, Laravel or Node.js behind it, PostgreSQL or MySQL for
              data, and Python for automation and AI.
            </p>
          </>
        }
      />
      <section aria-label="Technologies" className="wrap py-16 md:py-24">
        <LandingGrid items={byKind("technology")} />
      </section>
      <CtaBox />
    </>
  );
}
