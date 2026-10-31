import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import Link from "next/link";
import { locations } from "@/lib/locations";
import { CtaBox, PageHeader } from "@/components/PageParts";

export const metadata: Metadata = meta({
  title: "Locations — Lahore, Dubai and Abu Dhabi",
  description:
    "7CODE is headquartered in Lahore, Pakistan, and serves businesses in Dubai, Abu Dhabi and the rest of the UAE remotely.",
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
      <CtaBox />
    </>
  );
}
