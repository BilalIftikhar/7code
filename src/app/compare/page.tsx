import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import { CtaBox, PageHeader } from "@/components/PageParts";
import { LandingGrid } from "@/components/landing/LandingPage";
import { byKind } from "@/lib/landings";

export const metadata: Metadata = meta({
  title: "Comparisons — software, frameworks and automation tools",
  description:
    "Plain-English comparisons to help you decide: custom vs off-the-shelf software, Laravel vs Node.js, React vs Vue.js, n8n vs Zapier and more.",
  path: "/compare",
});

export default function ComparePage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Comparisons" }]}
        title="Decide with the trade-offs in front of you."
        wide
        intro={
          <p className="text-xl leading-relaxed md:text-2xl">
            Honest comparisons of the choices our clients ask about most, including when the answer isn&apos;t to hire us.
          </p>
        }
      />
      <section aria-label="Comparisons" className="wrap py-16 md:py-24">
        <LandingGrid items={byKind("compare")} />
      </section>
      <CtaBox />
    </>
  );
}
