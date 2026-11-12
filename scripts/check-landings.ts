// Quality report for data-driven landing pages: word counts, gate failures,
// broken internal links and orphan pages. Run: npx tsx scripts/check-landings.ts
import { landings, quality } from "../src/lib/landings";
import { wordCount } from "../src/lib/landings/types";
import { services } from "../src/lib/services";
import { projects } from "../src/lib/projects";
import { locations } from "../src/lib/locations";

const known = new Set<string>([
  "/", "/services", "/work", "/locations", "/insights", "/about", "/process", "/industries", "/faq", "/contact", "/technologies", "/compare", "/social-media-management",
  ...services.map((s) => `/services/${s.slug}`),
  ...projects.map((p) => `/work/${p.slug}`),
  ...locations.map((l) => `/locations/${l.slug}`),
  "/insights/hire-remote-development-team-uae", "/insights/seo-vs-aeo-vs-geo", "/insights/wordpress-vs-nextjs-business-website",
  ...landings.map((l) => l.path),
]);
let fail = 0;
const inbound = new Map<string, number>();
for (const l of landings) {
  const q = quality(l);
  for (const r of [...l.related, ...l.crumbs.map((c) => c.href)]) {
    inbound.set(r, (inbound.get(r) ?? 0) + 1);
    if (!known.has(r)) { console.log(`BROKEN LINK ${l.path} -> ${r}`); fail++; }
  }
  for (const w of l.work ?? []) if (!projects.find((p) => p.slug === w)) { console.log(`BAD WORK ${l.path} -> ${w}`); fail++; }
  if (!q.ok) { console.log(`GATE ${l.path}: ${q.reasons.join(", ")}`); fail++; }
}
const words = landings.map(wordCount);
console.log(`${landings.length} landing pages, ${words.reduce((a, b) => a + b, 0)} words, min ${Math.min(...words)}, median ${words.sort((a, b) => a - b)[Math.floor(words.length / 2)]}`);
console.log(`issues: ${fail}`);
process.exit(fail ? 1 : 0);
