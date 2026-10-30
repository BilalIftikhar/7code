import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} case study — ${p.industry}, ${p.region}`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
  };
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
    creator: { "@type": "Organization", name: site.name, url: site.url },
    about: { "@type": "Organization", name: p.client, ...(p.url ? { url: p.url } : {}) },
    keywords: [...p.scope, ...p.stack].join(", "),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="seven-edge relative overflow-hidden bg-night pb-36 text-white">
        <svg
          viewBox="0 0 100 120"
          className="pointer-events-none absolute -bottom-6 -right-10 h-[80%] w-auto text-signal/30 md:right-[4%]"
          aria-hidden="true"
        >
          <path d="M8 14 H90 L38 116" fill="none" stroke="currentColor" strokeWidth="13" />
        </svg>
        <div className="wrap relative pt-10 md:pt-14">
          <nav aria-label="Breadcrumb" className="text-sm text-mist">
            <ol className="flex gap-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/work" className="hover:text-white">Work</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-chalk">{p.name}</li>
            </ol>
          </nav>
          <p className="mt-16 text-mist">
            {p.industry}, {p.region}
          </p>
          <h1 className="display mt-4 text-[clamp(2.8rem,10vw,8.5rem)]">{p.name}</h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-chalk/85 md:text-xl">{p.summary}</p>
          {p.url && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block rounded-full border border-white/25 px-6 py-3 font-semibold transition-colors hover:border-white/60"
            >
              Visit {p.url.replace(/^https?:\/\/(www\.)?/, "")}
            </a>
          )}
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
                <dt className="text-sm text-graphite">What we did</dt>
                <dd className="mt-1">{p.scope.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-sm text-graphite">Built with</dt>
                <dd className="mt-1">{p.stack.join(", ")}</dd>
              </div>
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
                    <span className="tabular-nums text-signal">{String(n + 1).padStart(2, "0")}</span>
                    <p className="text-lg leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="results" className="mt-16 rounded-2xl bg-chalk p-7 md:p-9">
              <h2 id="results" className="display-soft text-2xl">Results</h2>
              <p className="mt-3 leading-relaxed text-graphite">
                We publish results only once they&apos;re measured and the client has approved them. Figures for this
                project will be added here.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Link href={`/work/${next.slug}`} className="group block bg-night text-white">
        <div className="wrap flex flex-col gap-3 py-16 md:flex-row md:items-end md:justify-between md:py-20">
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
