import { ids } from "@/lib/schema";
import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import Link from "next/link";
import { Breadcrumbs } from "@/components/PageParts";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
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
  const long = `${p.name} case study — ${p.industry}${place(p.region)}`;
  return meta({
    title: long.length <= 65 ? long : `${p.name} — ${p.industry}${place(p.region)}`,
    image: `/work/${p.slug}/opengraph-image`,
    description: p.summary,
    path: `/work/${p.slug}`,
  });
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
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
              {p.focusAreas && (
                <div>
                  <dt className="text-sm text-graphite">Areas targeted</dt>
                  <dd className="mt-1">{p.focusAreas.join(", ")}</dd>
                </div>
              )}
            </dl>
          </aside>

          <div className="md:col-span-7 md:col-start-6">
            <section aria-labelledby="challenge">
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
              <p className="mt-3 leading-relaxed text-graphite">
                We publish results only once they&apos;re measured and the client has approved them. Figures for this
                project will be added here.
              </p>
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
