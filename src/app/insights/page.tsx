import { ids } from "@/lib/schema";
import type { Metadata } from "next";
import { meta } from "@/lib/meta";
import { getArticles } from "@/lib/insights";
import { site } from "@/lib/site";
import { CtaBox, JsonLd, PageHeader } from "@/components/PageParts";
import { InsightsIndex } from "@/components/insights/InsightsIndex";

export const metadata: Metadata = meta({
  title: "Insights — guides on web development, SEO, AEO, GEO and growth",
  description:
    "Practical guides from 7CODE on web development, SEO, answer and generative engine optimisation, eCommerce and hiring remote teams, written from real client work.",
  path: "/insights",
});

export default function InsightsPage() {
  // Pass metadata only — not the article bodies — to the client component
  const articles = getArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    category: a.category,
    published: a.published,
    updated: a.updated,
    readingMinutes: a.readingMinutes,
    faqs: [],
  }));
  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "7CODE Insights",
    url: `${site.url}/insights`,
    publisher: { "@type": "Organization", "@id": ids.org, name: site.name, url: site.url },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${site.url}/insights/${a.slug}`,
      datePublished: a.published,
    })),
  };

  return (
    <>
      <JsonLd data={ld} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Insights" }]}
        title="Insights from the work."
        intro={
          <p className="text-xl leading-relaxed md:text-2xl">
            Practical guides on building websites, ranking in search and AI assistants, and running digital projects —
            written from what we&apos;ve learned on real client work.
          </p>
        }
      />
      <section aria-label="Articles" className="wrap py-16 md:py-24">
        <InsightsIndex articles={articles} />
      </section>
      <CtaBox title="Have a question we haven't covered?" body="Ask us directly. Good questions often become our next article." />
    </>
  );
}
