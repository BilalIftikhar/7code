import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { WorkGrid } from "@/components/home/WorkGrid";
import { RevealText } from "@/components/motion/RevealText";

export const metadata: Metadata = {
  title: "Our work — websites and SEO for UAE, Oman and Pakistan businesses",
  description:
    "Case studies from 7CODE: Next.js websites and local SEO for crane hire, logistics, heavy equipment and apparel manufacturing companies in Abu Dhabi, Sohar and Faisalabad.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="wrap pt-16 md:pt-24">
        <p className="text-sm text-graphite">Work, {projects.length} projects</p>
        <RevealText as="h1" onLoad className="display invisible mt-6 max-w-[14ch] text-[clamp(2.8rem,9vw,8rem)]">
          Work that brings in the calls.
        </RevealText>
        <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-graphite">
          Projects for companies that sell specialised services — cranes, freight, lifting, manufacturing — where a single
          enquiry can be worth a month of revenue.
        </p>
      </section>

      <section className="wrap py-16 md:py-24">
        <WorkGrid projects={projects} />
      </section>
    </>
  );
}
