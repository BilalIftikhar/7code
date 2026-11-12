import { ids } from "@/lib/schema";
import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import { Card3D } from "@/components/motion/Card3D";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { archive, projects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";
import { WorkGrid } from "@/components/home/WorkGrid";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { RevealText } from "@/components/motion/RevealText";
import { Magnetic } from "@/components/motion/Magnetic";
import { LandingGrid, LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { getLanding, landings, slugsUnder } from "@/lib/landings";

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...slugsUnder("/services").map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return landingMetadata(`/services/${slug}`);
  return meta({ title: s.seoTitle, description: s.metaDescription, path: `/services/${s.slug}`, image: `/services/${s.slug}/opengraph-image` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) {
    if (getLanding(`/services/${slug}`)) return <LandingPage path={`/services/${slug}`} />;
    notFound();
  }
  const children = landings.filter((l) => l.crumbs.at(-1)?.href === `/services/${s.slug}`);

  const related = s.related.map((r) => projects.find((p) => p.slug === r)).filter((p) => p !== undefined);
  const archived = s.archiveKinds ? archive.filter((a) => s.archiveKinds!.includes(a.kind)) : [];
  const others = services.filter((o) => o.slug !== s.slug);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.metaDescription,
    serviceType: s.name,
    provider: { "@type": "Organization", "@id": ids.org, name: site.name, url: site.url },
    areaServed: ["Pakistan", "United Arab Emirates", "Oman", "Saudi Arabia", "United Kingdom", "United States"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.name,
      itemListElement: s.details.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d.name, description: d.body } })),
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: s.name, item: `${site.url}/services/${s.slug}` },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceLd, faqJsonLd(s.faqs), breadcrumbLd]) }}
      />

      {/* Header */}
      <header className="wrap pt-10 md:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-graphite">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-night">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services" className="hover:text-night">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-night">{s.name}</li>
          </ol>
        </nav>
        <RevealText as="h1" onLoad className="display invisible mt-12 max-w-[16ch] text-[clamp(2.8rem,9vw,8rem)] md:mt-16">
          {s.h1}
        </RevealText>
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <div className="space-y-5 md:col-span-7">
            {s.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl leading-relaxed md:text-2xl" : "text-lg leading-relaxed text-graphite"}>
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap content-start gap-3 md:col-span-4 md:col-start-9 md:justify-end">
            <Magnetic>
              <Link
                href={`/contact?service=${s.slug}`}
                className="block rounded-full bg-signal px-7 py-4 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
              >
                Start a project
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={whatsappLink(`Hi 7CODE, I'd like to talk about ${s.name.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-night/20 bg-card px-7 py-4 font-semibold transition-colors hover:border-night"
              >
                WhatsApp us
              </a>
            </Magnetic>
          </div>
        </div>
      </header>

      {/* What's included */}
      <section aria-labelledby="included-h" className="wrap py-20 md:py-28">
        <RevealText id="included-h" className="display text-[clamp(2.2rem,5vw,4rem)]">
          What&apos;s included
        </RevealText>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.details.map((d) => (
            <li key={d.name}>
              <Card3D className="h-full rounded-xl bg-card p-6 md:p-8" max={8}>
                <h3 data-depth style={{ ["--depth" as string]: 30 }} className="text-xl font-semibold">{d.name}</h3>
                <p className="mt-3 leading-relaxed text-graphite">{d.body}</p>
              </Card3D>
            </li>
          ))}
        </ul>
      </section>

      {/* Who it's for + tools */}
      <section aria-label="Who it's for and tools" className="wrap pb-20 md:pb-28">
        <div className="grid gap-12 border-t border-night pt-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="display-soft text-3xl">Who it&apos;s for</h2>
            <ul className="mt-6 space-y-3">
              {s.forWho.map((w) => (
                <li key={w} className="flex gap-3 text-lg leading-relaxed">
                  <span className="mt-[0.8em] h-[3px] w-3 shrink-0 rounded-sm bg-cursor" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <h2 className="display-soft text-3xl">Tools we use</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.tools.map((t) => (
                <li key={t} className="rounded-full border border-rule bg-card px-4 py-2 text-sm font-semibold">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-h" className="bg-night py-20 text-white md:py-28">
        <div className="wrap">
          <RevealText id="approach-h" className="display text-[clamp(2.2rem,5vw,4rem)]">
            How we approach it
          </RevealText>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {s.approach.map((a, i) => (
              <li key={a.name} className="bg-night p-6 md:p-8">
                <span className="text-sm tabular-nums text-mist">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-xl font-semibold">{a.name}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Related work */}
      {(related.length > 0 || archived.length > 0) && (
        <section aria-labelledby="work-h" className="wrap py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <RevealText id="work-h" className="display text-[clamp(2.2rem,5vw,4rem)]">
              Related work
            </RevealText>
            <Link href="/work" className="font-semibold underline-offset-4 hover:underline">
              All work
            </Link>
          </div>
          {related.length > 0 && (
            <div className="mt-10">
              <WorkGrid projects={related} offset={1} />
            </div>
          )}
          {archived.length > 0 && (
            <div className="mt-12">
              <h3 className="text-sm text-graphite">Also in our archive</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {archived.map((a) => (
                  <li key={a.name} className="rounded-full border border-rule bg-card px-4 py-2 text-sm">
                    {a.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {children.length > 0 && (
        <section aria-labelledby="explore-h" className="wrap pb-20 md:pb-28">
          <div className="border-t border-night pt-10">
            <h2 id="explore-h" className="display text-[clamp(2.2rem,5vw,4rem)]">
              Explore {s.name.toLowerCase()}
            </h2>
          </div>
          <div className="mt-10">
            <LandingGrid items={children} />
          </div>
        </section>
      )}

      {/* FAQs */}
      <section aria-labelledby="faq-h" className={`wrap pb-20 md:pb-28 ${related.length || archived.length ? "" : "pt-20 md:pt-28"}`}>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <RevealText id="faq-h" className="display text-[clamp(2.2rem,5vw,4rem)]">
              Questions
            </RevealText>
            <p className="mt-5 max-w-[34ch] leading-relaxed text-graphite">
              Something else? Ask us on{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-night underline underline-offset-4">
                WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={s.faqs} />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section aria-labelledby="others-h" className="wrap pb-20 md:pb-28">
        <h2 id="others-h" className="text-sm text-graphite">Other services</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/services/${o.slug}`}
                className="block rounded-full border border-rule bg-card px-5 py-3 font-semibold transition-colors hover:border-night"
              >
                {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section aria-labelledby="cta-h" className="wrap pb-6">
        <div className="grid gap-8 rounded-2xl bg-night px-6 py-14 text-white md:grid-cols-12 md:px-12 md:py-20">
          <h2 id="cta-h" className="display text-[clamp(2.2rem,5vw,4.25rem)] md:col-span-8">
            Tell us what you need built.
          </h2>
          <div className="md:col-span-4 md:self-end">
            <p className="leading-relaxed text-white/75">
              Share a few details and we&apos;ll reply with a plan, a timeline and a fixed quote.
            </p>
            <Link
              href={`/contact?service=${s.slug}`}
              className="mt-6 inline-block rounded-full bg-white px-7 py-4 font-semibold text-night transition-colors hover:bg-chalk"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
