import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

// Articles live as Markdown in /content/insights. Each file's name is its slug.

export const categories = [
  "Web Development",
  "Software Engineering",
  "Mobile Applications",
  "Shopify",
  "WordPress",
  "eCommerce",
  "UI/UX",
  "SEO",
  "AEO",
  "GEO",
  "Digital Marketing",
  "Social Media",
  "AI and Automation",
  "Business Growth",
  "Technology Trends",
] as const;
export type Category = (typeof categories)[number];

export type Faq = { q: string; a: string };

export type ArticleMeta = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  category: Category;
  published: string;
  updated?: string;
  readingMinutes: number;
  faqs: Faq[];
};

export type Article = ArticleMeta & {
  html: string;
  toc: { id: string; text: string }[];
};

const DIR = path.join(process.cwd(), "content", "insights");

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

function parse(file: string): Article {
  const raw = fs.readFileSync(path.join(DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = file.replace(/\.md$/, "");

  if (!categories.includes(data.category)) {
    throw new Error(`Article "${slug}" has unknown category "${data.category}"`);
  }

  const toc: Article["toc"] = [];
  const used = new Set<string>();
  const md = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        let id = slugify(text);
        while (used.has(id)) id += "-x";
        used.add(id);
        if (depth === 2) toc.push({ id, text: text.replace(/<[^>]+>/g, "") });
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href);
        const t = title ? ` title="${title}"` : "";
        return external
          ? `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`
          : `<a href="${href}"${t}>${text}</a>`;
      },
    },
  });
  // Tables scroll sideways on phones instead of widening the page
  const html = (md.parse(content) as string).replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, "</table></div>");
  const words = content.split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: data.title,
    seoTitle: data.seoTitle,
    description: data.description,
    category: data.category,
    published: String(data.published instanceof Date ? data.published.toISOString().slice(0, 10) : data.published),
    updated: data.updated
      ? String(data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : data.updated)
      : undefined,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    faqs: Array.isArray(data.faqs) ? data.faqs : [],
    html,
    toc,
  };
}

let cache: Article[] | null = null;

export function getArticles(): Article[] {
  if (!cache) {
    cache = fs
      .readdirSync(DIR)
      .filter((f) => f.endsWith(".md"))
      .map(parse)
      .sort((a, b) => b.published.localeCompare(a.published));
  }
  return cache;
}

export const getArticle = (slug: string) => getArticles().find((a) => a.slug === slug);

export function getRelated(a: ArticleMeta, n = 3): ArticleMeta[] {
  const rest = getArticles().filter((x) => x.slug !== a.slug);
  return [...rest.filter((x) => x.category === a.category), ...rest.filter((x) => x.category !== a.category)].slice(0, n);
}

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
