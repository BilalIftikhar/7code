import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import { Card3D } from "@/components/motion/Card3D";
import Link from "next/link";
import { Breadcrumbs } from "@/components/PageParts";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";
import { RevealText } from "@/components/motion/RevealText";

export const metadata: Metadata = meta({
  title: "Services — web, mobile, eCommerce, SEO, design and AI",
  description:
    "Web and software development, mobile apps, Shopify and eCommerce, WordPress, SEO/AEO/GEO, social media, branding, UI/UX, paid ads and AI automation.",
  path: "/services",
});

export default function ServicesPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "7CODE services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${site.url}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <section className="wrap pt-10 md:pt-14">
        <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Services" }]} />
        <p className="mt-10 text-sm text-graphite md:mt-14">Services, {services.length} disciplines</p>
        <RevealText as="h1" onLoad className="display invisible mt-6 max-w-[14ch] text-[clamp(2.8rem,9vw,8rem)]">
          Build it, then grow it.
        </RevealText>
        <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-graphite md:text-xl">
          One team for the website, the app, the store and the marketing that follows. Hire us for a single job, or for
          everything from first design to the leads it brings in.
        </p>
      </section>

      <section aria-label="All services" className="wrap py-16 md:py-24">
        <ul className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Card3D className="h-full rounded-xl" max={8}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col justify-between gap-10 rounded-xl bg-card p-6 transition-colors hover:bg-night hover:text-white md:p-8"
              >
                <div>
                  <h2 className="display-soft text-2xl md:text-3xl">{s.name}</h2>
                  <p className="mt-4 leading-relaxed text-graphite transition-colors group-hover:text-white/70">{s.line}</p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-1.5">
                    {s.includes.slice(0, 4).map((x) => (
                      <li
                        key={x}
                        className="rounded-full bg-chalk px-2.5 py-1 text-xs text-graphite transition-colors group-hover:bg-white/10 group-hover:text-white/80"
                      >
                        {x}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-block text-sm font-semibold underline-offset-4 group-hover:underline">
                    View service
                  </span>
                </div>
              </Link>
              </Card3D>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="unsure-h" className="wrap pb-6">
        <div className="grid gap-8 rounded-2xl bg-night px-6 py-14 text-white md:grid-cols-12 md:px-12 md:py-20">
          <h2 id="unsure-h" className="display text-[clamp(2.2rem,5vw,4.25rem)] md:col-span-7">
            Not sure what you need?
          </h2>
          <div className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="leading-relaxed text-white/75">
              Tell us the problem instead. We&apos;ll suggest the smallest thing that solves it.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-4 font-semibold text-night transition-colors hover:bg-chalk"
              >
                Start a project
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 px-7 py-4 font-semibold transition-colors hover:border-white"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
