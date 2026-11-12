import type { Metadata } from "next";
import { LandingGrid } from "@/components/landing/LandingPage";
import { byKind } from "@/lib/landings";
import { meta } from "@/lib/meta";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { CtaBox, PageHeader } from "@/components/PageParts";

export const metadata: Metadata = meta({
  title: "Locations — UAE, Oman, Pakistan and worldwide",
  description:
    "7CODE is headquartered in Lahore, Pakistan, and serves businesses in the UAE, Oman, Saudi Arabia, Qatar, the UK, the US and across Pakistan remotely.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Locations" }]}
        title="Based in Lahore. Working across the Gulf."
        wide
        intro={
          <p className="text-xl leading-relaxed md:text-2xl">
            Our team works from Lahore. We serve UAE clients remotely, with a UAE WhatsApp line and working hours that
            overlap with yours.
          </p>
        }
      />
      <section aria-label="Locations" className="wrap py-16 md:py-24">
        <ul className="grid gap-3 md:grid-cols-3">
          {locations.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex h-full flex-col justify-between gap-12 rounded-xl bg-card p-6 transition-colors hover:bg-night hover:text-white md:p-8"
              >
                <div>
                  <p className="text-sm text-graphite group-hover:text-white/60">
                    {l.presence === "headquarters" ? "Headquarters" : "Served remotely"}, {l.country}
                  </p>
                  <h2 className="display mt-6 text-5xl">{l.city}</h2>
                </div>
                <p className="leading-relaxed text-graphite group-hover:text-white/75">{l.metaDescription}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="co-h" className="wrap pb-20 md:pb-28">
        <div className="border-t border-night pt-10">
          <h2 id="co-h" className="display text-[clamp(2.2rem,5vw,4rem)]">Countries we serve</h2>
        </div>
        <div className="mt-10">
          <LandingGrid items={byKind("country")} />
        </div>
      </section>

      <section aria-labelledby="ci-h" className="wrap pb-20 md:pb-28">
        <div className="border-t border-night pt-10">
          <h2 id="ci-h" className="display text-[clamp(2.2rem,5vw,4rem)]">More cities</h2>
        </div>
        <div className="mt-10">
          <LandingGrid items={byKind("city")} />
        </div>
      </section>

      <section aria-labelledby="cs-h" className="wrap pb-20 md:pb-28">
        <div className="border-t border-night pt-10">
          <h2 id="cs-h" className="display text-[clamp(2.2rem,5vw,4rem)]">Services by city</h2>
        </div>
        <div className="mt-10">
          <LandingGrid items={byKind("city-service")} />
        </div>
      </section>

      <CtaBox />
    </>
  );
}
