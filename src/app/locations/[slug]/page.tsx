import type { Metadata } from "next";
import { Card3D } from "@/components/motion/Card3D";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLocation, locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { site, whatsappLink } from "@/lib/site";
import { CtaBox, JsonLd, PageHeader, SectionTitle } from "@/components/PageParts";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { WorkGrid } from "@/components/home/WorkGrid";
import { Magnetic } from "@/components/motion/Magnetic";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) return {};
  return {
    title: { absolute: l.seoTitle },
    description: l.metaDescription,
    alternates: { canonical: `/locations/${l.slug}` },
    openGraph: { title: l.seoTitle, description: l.metaDescription },
  };
}

export default async function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const l = getLocation(slug);
  if (!l) notFound();

  const svc = l.services.map((s) => services.find((x) => x.slug === s)).filter((s) => s !== undefined);
  const work = l.work.map((w) => projects.find((p) => p.slug === w)).filter((p) => p !== undefined);
  const others = locations.filter((o) => o.slug !== l.slug);

  // Only the headquarters page carries an address; UAE pages describe a served area.
  const ld =
    l.presence === "headquarters"
      ? {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          url: site.url,
          description: l.metaDescription,
          address: { "@type": "PostalAddress", addressLocality: "Lahore", addressRegion: "Punjab", addressCountry: "PK" },
          areaServed: { "@type": "City", name: l.city },
          telephone: site.contact.whatsapp,
        }
      : {
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Web development and digital marketing in ${l.city}`,
          description: l.metaDescription,
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: { "@type": "City", name: l.city, containedInPlace: { "@type": "Country", name: l.country } },
        };

  return (
    <>
      <JsonLd data={[ld, faqJsonLd(l.faqs)]} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Locations", href: "/locations" }, { name: l.city }]}
        title={l.h1}
        wide
        intro={l.intro.map((p, i) => (
          <p key={i} className={i === 0 ? "text-xl leading-relaxed md:text-2xl" : "text-lg leading-relaxed text-graphite"}>
            {p}
          </p>
        ))}
        aside={
          <div className="space-y-3">
            <div className="rounded-xl bg-card p-6">
              <p className="text-sm text-graphite">{l.presence === "headquarters" ? "Headquarters" : "How we serve " + l.city}</p>
              <p className="mt-2 leading-relaxed">{l.presenceNote}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <Link href="/contact" className="block rounded-full bg-signal px-7 py-4 font-semibold text-on-signal hover:bg-signal-hover">
                  Start a project
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href={whatsappLink(`Hi 7CODE, I'm in ${l.city} and would like to discuss a project.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full border border-night/20 bg-card px-7 py-4 font-semibold hover:border-night"
                >
                  WhatsApp us
                </a>
              </Magnetic>
            </div>
          </div>
        }
      />

      {/* Local needs */}
      <section aria-labelledby="needs-h" className="wrap py-20 md:py-28">
        <SectionTitle id="needs-h">What {l.city} businesses need</SectionTitle>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {l.needs.map((n) => (
            <li key={n.name} className="rounded-xl bg-card p-6 md:p-8">
              <h3 className="text-xl font-semibold">{n.name}</h3>
              <p className="mt-3 leading-relaxed text-graphite">{n.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Areas */}
      <section aria-labelledby="areas-h" className="bg-night py-20 text-white md:py-28">
        <div className="wrap grid gap-10 md:grid-cols-12">
          <h2 id="areas-h" className="display text-[clamp(2.2rem,5vw,4rem)] md:col-span-5">
            {l.areas.label}
          </h2>
          <ul className="flex flex-wrap content-start gap-2 md:col-span-7">
            {l.areas.items.map((a) => (
              <li key={a} className="rounded-full border border-white/20 px-5 py-3">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="lsvc-h" className="wrap py-20 md:py-28">
        <SectionTitle id="lsvc-h" note={`The services ${l.city} clients ask us for most.`}>
          Services in {l.city}
        </SectionTitle>
        <ul className="mt-12 grid gap-3 md:grid-cols-2">
          {l.cityServices.map((cs) => {
            const sv = services.find((x) => x.slug === cs.service);
            return (
              <li key={cs.h}>
                <Card3D className="h-full rounded-xl" max={7}>
                <Link
                  href={`/services/${cs.service}`}
                  className="group flex h-full flex-col justify-between gap-8 rounded-xl bg-card p-6 transition-colors hover:bg-night hover:text-white md:p-8"
                >
                  <div>
                    <h3 className="display-soft text-2xl">{cs.h}</h3>
                    <p className="mt-3 leading-relaxed text-graphite transition-colors group-hover:text-white/75">{cs.body}</p>
                  </div>
                  <span className="text-sm font-semibold underline-offset-4 group-hover:underline">{sv?.name ?? "View service"}</span>
                </Link>
                </Card3D>
              </li>
            );
          })}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2">
          {svc
            .filter((s) => !l.cityServices.some((cs) => cs.service === s.slug))
            .map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="block rounded-full border border-rule bg-card px-4 py-2 text-sm font-semibold hover:border-night">
                  {s.name}
                </Link>
              </li>
            ))}
        </ul>
        <div className="mt-10">
          <h3 className="text-sm text-graphite">Industries we focus on here</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {l.industries.map((i) => (
              <li key={i} className="rounded-full border border-rule bg-card px-4 py-2 text-sm">
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Work */}
      {work.length > 0 && (
        <section aria-labelledby="lwork-h" className="wrap pb-20 md:pb-28">
          <SectionTitle id="lwork-h">Relevant work</SectionTitle>
          <div className="mt-12">
            <WorkGrid projects={work} />
          </div>
        </section>
      )}

      {/* FAQ */}
      <section aria-labelledby="lfaq-h" className="wrap pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 id="lfaq-h" className="display text-[clamp(2.2rem,5vw,4rem)] md:col-span-4">
            {l.city} questions
          </h2>
          <div className="md:col-span-8">
            <FaqList faqs={l.faqs} />
          </div>
        </div>
      </section>

      <section aria-label="Other locations" className="wrap pb-20 md:pb-28">
        <h2 className="text-sm text-graphite">Other locations</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/locations/${o.slug}`} className="block rounded-full border border-rule bg-card px-5 py-3 font-semibold hover:border-night">
                {o.city}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBox title={`Working with a team for ${l.city}.`} />
    </>
  );
}
