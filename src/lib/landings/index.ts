import type { Landing, LandingKind } from "./types";
import { gate } from "./types";
import { software } from "./software";
import { tech } from "./tech";
import { ai } from "./ai";
import { social } from "./social";
import { industries } from "./industries";
import { compare } from "./compare";
import { places } from "./places";
import { cityServices } from "./cityServices";

export const landings: Landing[] = [...software, ...tech, ...ai, ...social, ...industries, ...compare, ...places, ...cityServices];

export const landingsByPath = new Map(landings.map((l) => [l.path, l]));
export const getLanding = (path: string) => landingsByPath.get(path);
export const byKind = (kind: LandingKind) => landings.filter((l) => l.kind === kind);

// Titles and descriptions must be unique across the site, or the page is held back.
const titleCount = new Map<string, number>();
const descCount = new Map<string, number>();
for (const l of landings) {
  titleCount.set(l.seoTitle, (titleCount.get(l.seoTitle) ?? 0) + 1);
  descCount.set(l.metaDescription, (descCount.get(l.metaDescription) ?? 0) + 1);
}

export function quality(l: Landing) {
  const g = gate(l);
  if ((titleCount.get(l.seoTitle) ?? 0) > 1) g.reasons.push("duplicate title");
  if ((descCount.get(l.metaDescription) ?? 0) > 1) g.reasons.push("duplicate description");
  return { ok: g.reasons.length === 0, reasons: g.reasons };
}
export const isIndexable = (l: Landing) => quality(l).ok;

/** Slugs under a path prefix, for generateStaticParams. */
export const slugsUnder = (prefix: string) =>
  landings.filter((l) => l.path.startsWith(prefix + "/") && l.path.split("/").length === prefix.split("/").length + 1).map((l) => l.path.slice(prefix.length + 1));
