import type { Metadata } from "next";
import { LandingGrid } from "@/components/landing/LandingPage";
import { byKind } from "@/lib/landings";
import { meta } from "@/lib/meta";
import Link from "next/link";
import { CtaBox, PageHeader, SectionTitle } from "@/components/PageParts";
import { projects } from "@/lib/projects";

export const metadata: Metadata = meta({
  title: "Industries we serve — logistics, heavy equipment, eCommerce & more",
  description:
    "Websites, platforms and SEO for logistics, heavy equipment and crane hire, eCommerce, marketplaces, manufacturing and enterprise technology.",
  path: "/industries",
});

const proven = [
  {
    name: "Heavy equipment & crane hire",
    body: "Hire companies win work on the phone within minutes of a search. We build fast sites with call and WhatsApp on every screen, fleet pages and location pages for the districts and industrial zones where jobs happen.",
    work: ["seven-lift", "maxtgc", "masood-lifts"],
  },
  {
    name: "Logistics & transport",
    body: "Freight, warehousing and customs companies offer many services from few locations. We structure those services so procurement teams find what they need, and build the dashboards logistics platforms run on.",
    work: ["ferry-global", "logistivo"],
  },
  {
    name: "Marketplaces",
    body: "Two-sided platforms live or die on matching and booking. We design the data model and APIs first so the platform stays fast as both sides grow.",
    work: ["av-leads"],
  },
  {
    name: "eCommerce & retail",
    body: "Large catalogues, careful buyers, and revenue that depends on product page speed. We build and tune storefronts around the pages that sell the most.",
    work: ["poolstore"],
  },
  {
    name: "Manufacturing & B2B",
    body: "Manufacturers sell on quotes, not carts. We build catalogues where overseas buyers browse the range and send a quote request straight to WhatsApp or email.",
    work: ["muhseeq"],
  },
  {
    name: "Enterprise technology",
    body: "Established products need frontend and integration work that slots into an existing team's release process without disruption.",
    work: ["igivu"],
  },
];

const also = ["Real estate", "Healthcare & clinics", "Education", "Hospitality & travel", "Professional services", "SaaS & startups", "Construction & contracting", "Security services"];

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Industries" }]}
        title="Industries we know from the inside."
        wide
        intro={
          <p className="text-xl leading-relaxed md:text-2xl">
            Most of our work is for businesses that sell specialised, high-value services, where one good enquiry is worth a
            lot. Each industry below links to the projects behind it.
          </p>
        }
      />

      <section aria-label="Industries with case studies" className="wrap py-16 md:py-24">
        <ul className="divide-y divide-rule border-y border-night">
          {proven.map((ind) => (
            <li key={ind.name} className="grid gap-6 py-10 md:grid-cols-12">
              <h2 className="display-soft text-3xl md:col-span-4">{ind.name}</h2>
              <p className="max-w-[56ch] text-lg leading-relaxed text-graphite md:col-span-5">{ind.body}</p>
              <ul className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end">
                {ind.work.map((slug) => {
                  const p = projects.find((x) => x.slug === slug);
                  if (!p) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={`/work/${slug}`}
                        className="block rounded-full bg-night px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-night-2"
                      >
                        {p.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="also-h" className="wrap pb-20 md:pb-28">
        <SectionTitle id="also-h" note="We build for these sectors with the same approach. Case studies will be added as projects launch.">
          Also building for
        </SectionTitle>
        <ul className="mt-10 flex flex-wrap gap-2">
          {also.map((a) => (
            <li key={a} className="rounded-full border border-rule bg-card px-5 py-3">
              {a}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="ind-h" className="wrap pb-20 md:pb-28">
        <div className="border-t border-night pt-10">
          <h2 id="ind-h" className="display text-[clamp(2.2rem,5vw,4rem)]">Software and websites by industry</h2>
        </div>
        <div className="mt-10">
          <LandingGrid items={byKind("industry")} />
        </div>
      </section>

      <CtaBox title="Don't see your industry?" body="Tell us how your customers buy. The approach carries over more often than you'd think." />
    </>
  );
}
