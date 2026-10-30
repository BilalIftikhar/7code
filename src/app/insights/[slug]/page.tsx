import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getArticle, getArticles, getRelated } from "@/lib/insights";
import { site } from "@/lib/site";
import { CtaBox, JsonLd, breadcrumbLd } from "@/components/PageParts";
import { FaqList, faqJsonLd } from "@/components/FaqList";
import { ArticleCover } from "@/components/insights/ArticleCover";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { ShareButtons } from "@/components/insights/ShareButtons";
import { Toc } from "@/components/insights/Toc";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.seoTitle ?? a.title,
    description: a.description,
    alternates: { canonical: `/insights/${a.slug}` },
    authors: [{ name: site.founder.name, url: `${site.url}/about` }],
    openGraph: {
      type: "article",
      title: a.seoTitle ?? a.title,
      description: a.description,
      publishedTime: a.published,
      modifiedTime: a.updated ?? a.published,
      authors: [site.founder.name],
      section: a.category,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const all = getArticles();
  const index = all.findIndex((x) => x.slug === a.slug);
  const related = getRelated(a);
  const url = `${site.url}/insights/${a.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    articleSection: a.category,
    mainEntityOfPage: url,
    url,
    author: {
      "@type": "Person",
      name: site.founder.name,
      url: `${site.url}/about`,
      jobTitle: "Founder & Senior Full-Stack Software Engineer",
      sameAs: [site.founder.linkedin],
    },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Insights", href: "/insights" },
    { name: a.title },
  ];

  return (
    <article>
      <JsonLd data={[articleLd, breadcrumbLd(crumbs), ...(a.faqs.length ? [faqJsonLd(a.faqs)] : [])]} />

      <header className="wrap pt-10 md:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-graphite">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="hover:text-night">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/insights" className="hover:text-night">Insights</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-night">{a.category}</li>
          </ol>
        </nav>
        <div className="mt-12 max-w-[60rem] md:mt-16">
          <span className="rounded-full bg-night px-3 py-1 text-xs font-semibold text-white">{a.category}</span>
          <h1 className="display mt-6 text-[clamp(2.3rem,6vw,5.25rem)] text-balance">{a.title}</h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-graphite md:text-xl">{a.description}</p>
          <p className="mt-8 text-sm text-graphite">
            By{" "}
            <Link href="/about" rel="author" className="font-semibold text-night underline-offset-4 hover:underline">
              {site.founder.name}
            </Link>
            , <time dateTime={a.published}>{formatDate(a.published)}</time>
            {a.updated && a.updated !== a.published && (
              <>
                , updated <time dateTime={a.updated}>{formatDate(a.updated)}</time>
              </>
            )}
            , {a.readingMinutes} min read
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl">
          <ArticleCover title={a.title} category={a.category} index={index} size="lg" className="aspect-[16/9] md:aspect-[16/7]" />
        </div>
      </header>

      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="space-y-10 lg:sticky lg:top-28">
              <Toc items={a.toc} />
              <div className="hidden lg:block">
                <ShareButtons url={url} title={a.title} />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="prose-7" dangerouslySetInnerHTML={{ __html: a.html }} />

            {a.faqs.length > 0 && (
              <section aria-labelledby="afaq-h" className="mt-16">
                <h2 id="afaq-h" className="display-soft mb-6 text-3xl">
                  Frequently asked questions
                </h2>
                <FaqList faqs={a.faqs} />
              </section>
            )}

            <div className="mt-12 lg:hidden">
              <ShareButtons url={url} title={a.title} />
            </div>

            {/* Author */}
            <section aria-label="About the author" className="mt-16 rounded-xl bg-card p-6 md:p-8">
              <p className="text-sm text-graphite">Written by</p>
              <p className="mt-2 text-xl font-semibold">{site.founder.name}</p>
              <p className="mt-3 leading-relaxed text-graphite">
                Founder of 7CODE and a senior full-stack software engineer with {site.founder.yearsExperience} years of
                building production web applications in Laravel, React and Next.js, for clients from Abu Dhabi to the UK.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <Link href="/about" className="underline underline-offset-4">More about Bilal</Link>
                <a href={site.founder.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  LinkedIn
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="rel-h" className="wrap pb-20 md:pb-28">
          <div className="flex items-end justify-between gap-6 border-t border-night pt-10">
            <h2 id="rel-h" className="display text-[clamp(2rem,4.5vw,3.5rem)]">Keep reading</h2>
            <Link href="/insights" className="font-semibold underline-offset-4 hover:underline">
              All insights
            </Link>
          </div>
          <ul className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <ArticleCard a={r} index={all.findIndex((x) => x.slug === r.slug)} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <CtaBox />
    </article>
  );
}
