import { ids } from "@/lib/schema";
import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import Link from "next/link";
import { Breadcrumbs } from "@/components/PageParts";
import { notFound } from "next/navigation";
import { projects, type Project } from "@/lib/projects";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { site } from "@/lib/site";
import { ProjectVisual } from "@/components/ProjectVisual";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

/** Short place name for titles: "Abu Dhabi, UAE" → ", Abu Dhabi"; generic regions are left out. */
const place = (region: string) => {
  const first = region.split(",")[0].trim();
  if (/^(remote|international)/i.test(first)) return "";
  return `, ${first === "United Kingdom" ? "UK" : first}`;
};

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  // "Seven Lift: Website & SEO case study, Abu Dhabi" reads cleanly and stays short
  const title = `${p.name}: ${p.kind} case study${place(p.region)}`;
  return meta({
    title,
    image: `/work/${p.slug}/opengraph-image`,
    description: p.summary,
    path: `/work/${p.slug}`,
  });
}

/** Answer-first Q&As built only from the recorded project facts. */
function faqsFor(p: Project) {
  const list = (xs: string[]) => (xs.length > 1 ? `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}` : xs[0]);
  const qa: { q: string; a: string }[] = [
    { q: `What did 7CODE do for ${p.client}?`, a: `${p.role} The work covered ${list(p.scope).toLowerCase()}.` },
    { q: `What problem did the ${p.name} project solve?`, a: p.challenge },
  ];
  if (p.stack.length) qa.push({ q: `What technology was ${p.name} built with?`, a: `${list(p.stack)}.` });
  if (p.focusAreas?.length) qa.push({ q: `Which areas does the ${p.name} work target?`, a: `${list(p.focusAreas)}, each with its own content rather than one generic page.` });
  qa.push({
    q: `Can 7CODE do similar work for my business?`,
    a: `Yes. We work with businesses in Dubai, Abu Dhabi, across the UAE and worldwide. Tell us what you need on the contact page or WhatsApp ${site.contact.whatsappDisplay}, and you'll get a fixed, itemised quote after a short discovery call.`,
  });
  return qa;
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${p.name} — ${p.industry}`,
    description: p.summary,
    creator: { "@type": "Organization", "@id": ids.org, name: site.name, url: site.url },
    about: { "@type": "Organization", name: p.client, ...(p.url ? { url: p.url } : {}) },
    keywords: [...p.scope, ...p.stack].join(", "),
    url: `${site.url}/work/${p.slug}`,
    image: `${site.url}/work/${p.slug}/opengraph-image`,
    inLanguage: "en",
    abstract: p.about,
  };
  const faqs = faqsFor(p);
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const usedServices = services.filter((s) => p.services.includes(s.slug));
  const usedLocations = locations.filter((l) => p.locations?.includes(l.slug));

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header className="wrap pt-10 md:pt-14">
        <Breadcrumbs crumbs={[{ name: "Home", href: "/" }, { name: "Work", href: "/work" }, { name: p.name }]} />
        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-graphite">
              {p.industry}, {p.region}
            </p>
            <h1 className="display mt-4 text-[clamp(2.8rem,10vw,8.5rem)]">{p.name}</h1>
          </div>
          {p.url && (
            <div className="md:col-span-4 md:justify-self-end">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-signal px-6 py-3 font-semibold text-on-signal transition-colors hover:bg-signal-hover"
              >
                Visit {p.url.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            </div>
          )}
        </div>
        <p className="mt-8 max-w-[56ch] text-lg leading-relaxed text-graphite md:text-xl">{p.summary}</p>
        <div className="mt-12 overflow-hidden rounded-xl">
          <ProjectVisual project={p} index={i} size="lg" className="aspect-[4/3] md:aspect-[16/8]" />
        </div>
      </header>

      <div className="wrap py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4">
            <dl className="space-y-6 border-l-2 border-signal pl-5 md:sticky md:top-28">
              <div>
                <dt className="text-sm text-graphite">Client</dt>
                <dd className="mt-1 font-semibold">{p.client}</dd>
              </div>
              <div>
                <dt className="text-sm text-graphite">Our role</dt>
                <dd className="mt-1">{p.role}</dd>
              </div>
              <div>
                <dt className="text-sm text-graphite">What we did</dt>
                <dd className="mt-1">{p.scope.join(", ")}</dd>
              </div>
              {p.stack.length > 0 && (
              <div>
                <dt className="text-sm text-graphite">Built with</dt>
                <dd className="mt-1">{p.stack.join(", ")}</dd>
              </div>
              )}
              <div>
                <dt className="text-sm text-graphite">Services used</dt>
                <dd className="mt-1 flex flex-col gap-1">
                  {usedServices.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="underline decoration-rule underline-offset-4 hover:decoration-night">
                      {s.name}
                    </Link>
                  ))}
                </dd>
              </div>
              {usedLocations.length > 0 && (
                <div>
                  <dt className="text-sm text-graphite">Related locations</dt>
                  <dd className="mt-1 flex flex-col gap-1">
                    {usedLocations.map((l) => (
                      <Link key={l.slug} href={`/locations/${l.slug}`} className="underline decoration-rule underline-offset-4 hover:decoration-night">
                        Web development in {l.city}
                      </Link>
                    ))}
                  </dd>
                </div>
              )}
              {p.focusAreas && (
                <div>
                  <dt className="text-sm text-graphite">Areas targeted</dt>
                  <dd className="mt-1">{p.focusAreas.join(", ")}</dd>
                </div>
              )}
            </dl>
          </aside>

          <div className="md:col-span-7 md:col-start-6">
            <section aria-labelledby="about-client">
              <h2 id="about-client" className="display-soft text-3xl">About the client</h2>
              <p className="mt-5 text-lg leading-relaxed">{p.about}</p>
            </section>

            <section aria-labelledby="challenge" className="mt-16">
              <h2 id="challenge" className="display-soft text-3xl">The challenge</h2>
              <p className="mt-5 text-lg leading-relaxed">{p.challenge}</p>
            </section>

            <section aria-labelledby="approach" className="mt-16">
              <h2 id="approach" className="display-soft text-3xl">What we did</h2>
              <ol className="mt-6 space-y-6">
                {p.approach.map((step, n) => (
                  <li key={n} className="grid grid-cols-[2.5rem_1fr] gap-2 border-t border-rule pt-6">
                    <span className="tabular-nums text-signal-ink">{String(n + 1).padStart(2, "0")}</span>
                    <p className="text-lg leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="results" className="mt-16 rounded-xl bg-card p-7 md:p-9">
              <h2 id="results" className="display-soft text-2xl">Results</h2>
              {p.results ? (
                <>
                  <dl className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                    {p.results.map((r) => (
                      <div key={r.label}>
                        <dd className="display text-4xl md:text-5xl">{r.value}</dd>
                        <dt className="mt-2 text-sm text-graphite">{r.label}</dt>
                      </div>
                    ))}
                  </dl>
                  {p.resultsNote && <p className="mt-6 text-sm leading-relaxed text-graphite">{p.resultsNote}</p>}
                </>
              ) : (
                <p className="mt-3 leading-relaxed text-graphite">
                  We publish figures only once they&apos;re measured and the client has approved them, so this section will
                  be updated rather than filled with estimates.
                  {p.url && (
                    <>
                      {" "}You can see the live work at{" "}
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                        {p.url.replace(/^https?:\/\/(www\.)?/, "")}
                      </a>
                      .
                    </>
                  )}
                </p>
              )}
            </section>

            <section aria-labelledby="takeaway" className="mt-16">
              <h2 id="takeaway" className="display-soft text-3xl">What other businesses can take from this</h2>
              <p className="mt-5 text-lg leading-relaxed">{p.takeaway}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {usedServices.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-full border border-rule bg-card px-4 py-2 text-sm font-semibold transition-colors hover:border-night">
                    {s.name}
                  </Link>
                ))}
              </div>
            </section>

            <section aria-labelledby="faq" className="mt-16">
              <h2 id="faq" className="display-soft text-3xl">Questions about this project</h2>
              <dl className="mt-6 divide-y divide-rule border-y border-rule">
                {faqs.map((f) => (
                  <div key={f.q} className="py-6">
                    <dt className="text-lg font-semibold">{f.q}</dt>
                    <dd className="mt-2 leading-relaxed text-graphite">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </div>

      <Link href={`/work/${next.slug}`} className="group wrap mb-6 block">
        <div className="rounded-2xl bg-night px-6 text-white md:px-12 flex flex-col gap-3 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <div>
            <p className="text-mist">Next project</p>
            <p className="display mt-3 text-[clamp(2.4rem,7vw,5.5rem)] transition-colors group-hover:text-signal-soft">
              {next.name}
            </p>
          </div>
          <p className="max-w-[40ch] text-chalk/75">{next.summary}</p>
        </div>
      </Link>
    </article>
  );
}
