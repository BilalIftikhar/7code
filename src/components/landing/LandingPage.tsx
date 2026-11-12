import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { meta } from "@/lib/meta";
import { ids } from "@/lib/schema";
import { site, whatsappLink } from "@/lib/site";
import { projects } from "@/lib/projects";
import { getLanding, isIndexable, landingsByPath } from "@/lib/landings";
import type { Landing, Section } from "@/lib/landings/types";
import { CtaBox, JsonLd, PageHeader } from "@/components/PageParts";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { WorkGrid } from "@/components/home/WorkGrid";
import { RevealText } from "@/components/motion/RevealText";
import { Card3D } from "@/components/motion/Card3D";

export function landingMetadata(path: string): Metadata {
  const l = getLanding(path);
  if (!l) return {};
  return meta({
    title: l.seoTitle,
    description: l.metaDescription,
    path: l.path,
    extra: isIndexable(l) ? undefined : { robots: { index: false, follow: true } },
  });
}

function schemaFor(l: Landing) {
  if (l.kind === "compare") {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: l.h1,
      description: l.metaDescription,
      url: `${site.url}${l.path}`,
      author: { "@id": ids.founder },
      publisher: { "@id": ids.org },
      ...(l.updated ? { dateModified: l.updated } : {}),
      inLanguage: "en",
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: l.serviceType ?? l.name,
    serviceType: l.serviceType ?? l.name,
    description: l.metaDescription,
    url: `${site.url}${l.path}`,
    provider: { "@type": "Organization", "@id": ids.org, name: site.name, url: site.url },
    areaServed: l.areaServed ?? ["United Arab Emirates", "Oman", "Pakistan", "Saudi Arabia", "United Kingdom", "United States"],
  };
}

function SectionBlock({ s, i }: { s: Section; i: number }) {
  const id = `s${i}`;
  if (s.type === "steps") {
    return (
      <section aria-labelledby={id} className="bg-night py-20 text-white md:py-28">
        <div className="wrap">
          <RevealText id={id} className="display text-[clamp(2.2rem,5vw,4rem)]">
            {s.h}
          </RevealText>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {s.items.map((a, n) => (
              <li key={a.name} className="bg-night p-6 md:p-8">
                <span className="text-sm tabular-nums text-mist">{String(n + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-xl font-semibold">{a.name}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
  return (
    <section aria-labelledby={id} className="wrap py-16 md:py-24">
      <div className="grid gap-6 border-t border-night pt-10 md:grid-cols-12">
        <h2 id={id} className="display text-[clamp(2rem,4.4vw,3.5rem)] md:col-span-7">
          {s.h}
        </h2>
        {"note" in s && s.note && (
          <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">{s.note}</p>
        )}
      </div>
      {s.type === "cards" && (
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((d) => (
            <li key={d.name}>
              <Card3D className="h-full rounded-xl bg-card p-6 md:p-8" max={6}>
                <h3 data-depth style={{ ["--depth" as string]: 24 }} className="text-xl font-semibold">
                  {d.name}
                </h3>
                <p className="mt-3 leading-relaxed text-graphite">{d.body}</p>
              </Card3D>
            </li>
          ))}
        </ul>
      )}
      {s.type === "list" && (
        <ul className="mt-10 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {s.items.map((w) => (
            <li key={w} className="flex gap-3 text-lg leading-relaxed">
              <span className="mt-[0.8em] h-[3px] w-3 shrink-0 rounded-sm bg-cursor" aria-hidden="true" />
              {w}
            </li>
          ))}
        </ul>
      )}
      {s.type === "text" && (
        <div className="mt-10 max-w-[68ch] space-y-5 text-lg leading-relaxed text-graphite">
          {s.paras.map((p, n) => (
            <p key={n}>{p}</p>
          ))}
        </div>
      )}
      {s.type === "table" && (
        <div className="table-wrap mt-10 overflow-x-auto rounded-xl border border-rule bg-card">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                {s.head.map((h) => (
                  <th key={h} scope="col" className="border-b border-rule px-5 py-4 text-sm font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.rows.map((r) => (
                <tr key={r[0]} className="align-top">
                  {r.map((c, n) =>
                    n === 0 ? (
                      <th key={n} scope="row" className="border-b border-rule px-5 py-4 font-semibold">
                        {c}
                      </th>
                    ) : (
                      <td key={n} className="border-b border-rule px-5 py-4 leading-relaxed text-graphite">
                        {c}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export function LandingPage({ path }: { path: string }) {
  const l = getLanding(path);
  if (!l) notFound();
  const work = (l.work ?? []).map((w) => projects.find((p) => p.slug === w)).filter((p) => p !== undefined);
  const related = l.related.map((r) => ({ href: r, name: landingsByPath.get(r)?.name ?? fallbackName(r) }));
  const contactHref = `/contact${l.contact?.service ? `?service=${l.contact.service}` : ""}`;
  const topic = l.contact?.topic ?? l.name.toLowerCase();

  return (
    <article>
      <JsonLd data={[schemaFor(l), faqJsonLd(l.faqs)]} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, ...l.crumbs, { name: l.name }]}
        title={l.h1}
        wide
        intro={l.intro.map((p, i) => (
          <p key={i} className={i === 0 ? "text-xl leading-relaxed md:text-2xl" : "text-lg leading-relaxed text-graphite"}>
            {p}
          </p>
        ))}
        aside={
          <div className="flex flex-wrap content-start gap-3 md:justify-end">
            <Link href={contactHref} className="block rounded-full bg-signal px-7 py-4 font-semibold text-on-signal transition-colors hover:bg-signal-hover">
              Get a free quote
            </Link>
            <a
              href={whatsappLink(`Hi 7CODE, I'd like to talk about ${topic}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border border-night/20 bg-card px-7 py-4 font-semibold transition-colors hover:border-night"
            >
              WhatsApp us
            </a>
            {l.presence && <p className="w-full text-sm leading-relaxed text-graphite md:text-right">{l.presence}</p>}
          </div>
        }
      />

      {l.answer && (
        <section aria-label="Quick answer" className="wrap pt-14 md:pt-20">
          <div className="rounded-2xl border border-rule bg-card p-6 md:p-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-graphite">{l.answer.q}</h2>
            <p className="mt-4 max-w-[70ch] text-xl leading-relaxed md:text-2xl">{l.answer.a}</p>
          </div>
        </section>
      )}

      {l.sections.map((s, i) => (
        <SectionBlock key={s.h} s={s} i={i} />
      ))}

      {l.tools && l.tools.length > 0 && (
        <section aria-labelledby="tools-h" className="wrap pb-16 md:pb-24">
          <h2 id="tools-h" className="display-soft text-3xl">
            Technologies we use
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {l.tools.map((t) => (
              <li key={t} className="rounded-full border border-rule bg-card px-4 py-2 text-sm font-semibold">
                {t}
              </li>
            ))}
          </ul>
        </section>
      )}

      {work.length > 0 && (
        <section aria-labelledby="work-h" className="wrap pb-20 md:pb-28">
          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-night pt-10">
            <h2 id="work-h" className="display text-[clamp(2rem,4.4vw,3.5rem)]">
              Related work
            </h2>
            <Link href="/work" className="font-semibold underline-offset-4 hover:underline">
              All case studies
            </Link>
          </div>
          <div className="mt-10">
            <WorkGrid projects={work} offset={1} />
          </div>
        </section>
      )}

      <section aria-labelledby="faq-h" className="wrap pb-20 md:pb-28">
        <div className="grid gap-10 border-t border-night pt-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 id="faq-h" className="display text-[clamp(2rem,4.4vw,3.5rem)]">
              Questions
            </h2>
            <p className="mt-5 max-w-[34ch] leading-relaxed text-graphite">
              Something else? Ask us on{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-night underline underline-offset-4">
                WhatsApp
              </a>
              .
            </p>
          </div>
          <div className="md:col-span-8">
            <FaqList faqs={l.faqs} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="rel-h" className="wrap pb-20 md:pb-28">
          <h2 id="rel-h" className="text-sm text-graphite">
            Related
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="block rounded-full border border-rule bg-card px-5 py-3 font-semibold transition-colors hover:border-night">
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <CtaBox
        title="Tell us what you need built."
        body="Share a few details and we'll reply with a plan, a timeline and a fixed, itemised quote."
        href={contactHref}
        label="Get a free quote"
      />
    </article>
  );
}

/** Hub grid: cards linking to child landing pages. */
export function LandingGrid({ items }: { items: Landing[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((l) => (
        <li key={l.path}>
          <Link
            href={l.path}
            className="group flex h-full flex-col justify-between gap-10 rounded-xl bg-card p-6 transition-colors hover:bg-night hover:text-white md:p-8"
          >
            <h3 className="text-2xl font-semibold">{l.name}</h3>
            <p className="leading-relaxed text-graphite group-hover:text-white/70">{l.line}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const STATIC_NAMES: Record<string, string> = {
  "/services/web-development": "Web & software development",
  "/services/mobile-apps": "Mobile apps",
  "/services/ecommerce": "eCommerce",
  "/services/wordpress": "WordPress",
  "/services/seo-aeo-geo": "SEO, AEO & GEO",
  "/services/social-media": "Social media management",
  "/social-media-management": "Social media management",
  "/services/branding-ui-ux": "Branding & UI/UX",
  "/services/performance-marketing": "Performance marketing",
  "/services/ai-automation": "AI & automation",
  "/locations/lahore": "Lahore",
  "/locations/dubai": "Dubai",
  "/locations/abu-dhabi": "Abu Dhabi",
  "/work": "Case studies",
  "/contact": "Contact",
  "/insights": "Insights",
};
function fallbackName(path: string) {
  return STATIC_NAMES[path] ?? path.split("/").pop()!.replace(/-/g, " ");
}
