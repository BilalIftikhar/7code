// Shared shape for every data-driven landing page (services, technologies, AI, social,
// industries, comparisons, countries, cities and city × service pages).
// Each page carries its own copy; the template only lays it out.

export type Item = { name: string; body: string };
export type Faq = { q: string; a: string };

export type Section =
  | { type: "cards"; h: string; note?: string; items: Item[] }
  | { type: "list"; h: string; note?: string; items: string[] }
  | { type: "text"; h: string; paras: string[] }
  | { type: "table"; h: string; note?: string; head: string[]; rows: string[][] }
  | { type: "steps"; h: string; items: Item[] };

export type LandingKind =
  | "service"
  | "technology"
  | "ai"
  | "social"
  | "industry"
  | "compare"
  | "country"
  | "city"
  | "city-service"
  | "area"
  | "area-service";

export type Landing = {
  /** Absolute site path, no trailing slash */
  path: string;
  kind: LandingKind;
  /** Short name used in links, cards and the last breadcrumb */
  name: string;
  /** One line for cards and hub lists */
  line: string;
  /** Parent crumbs between Home and this page */
  crumbs: { name: string; href: string }[];
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  /** A direct, quotable answer near the top (featured snippets, AI answers) */
  answer?: { q: string; a: string };
  sections: Section[];
  tools?: string[];
  /** Case-study slugs from src/lib/projects.ts */
  work?: string[];
  faqs: Faq[];
  /** Related internal paths */
  related: string[];
  serviceType?: string;
  areaServed?: string[];
  /** Shown for location pages: where the team is and how the market is served */
  presence?: string;
  /** Pre-filled contact service + WhatsApp topic */
  contact?: { service?: string; topic?: string };
  /** Pages that only exist to answer one question */
  updated?: string;
};

const text = (l: Landing) =>
  [
    ...l.intro,
    l.answer ? `${l.answer.q} ${l.answer.a}` : "",
    ...l.sections.flatMap((s) => {
      if (s.type === "text") return [s.h, ...s.paras];
      if (s.type === "list") return [s.h, s.note ?? "", ...s.items];
      if (s.type === "table") return [s.h, s.note ?? "", ...s.head, ...s.rows.flat()];
      return [s.h, ("note" in s && s.note) || "", ...s.items.map((i) => `${i.name} ${i.body}`)];
    }),
    ...l.faqs.map((f) => `${f.q} ${f.a}`),
  ].join(" ");

export const wordCount = (l: Landing) => text(l).split(/\s+/).filter(Boolean).length;

/**
 * Quality gate. A page that fails is still reachable (so nothing 404s while copy is
 * being written) but carries noindex and stays out of the sitemap.
 */
export function gate(l: Landing): { ok: boolean; reasons: string[] } {
  const reasons: string[] = [];
  const words = wordCount(l);
  if (words < 280) reasons.push(`only ${words} words`);
  if (l.sections.length < 3) reasons.push("fewer than 3 sections");
  if (l.faqs.length < 3) reasons.push("fewer than 3 FAQs");
  if (l.metaDescription.length < 100 || l.metaDescription.length > 200) reasons.push(`meta description ${l.metaDescription.length} chars`);
  if (l.seoTitle.length > 70) reasons.push(`title ${l.seoTitle.length} chars`);
  return { ok: reasons.length === 0, reasons };
}
