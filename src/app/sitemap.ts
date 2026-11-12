import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { locations } from "@/lib/locations";
import { getArticles } from "@/lib/insights";
import { isIndexable, landings } from "@/lib/landings";

// Every indexable URL. Dynamic pages come from the same data the pages render,
// so a new service, project, location or article is listed automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => `${site.url}${path}`;
  const articles = getArticles();
  const latest = articles[0] ? new Date(articles[0].updated ?? articles[0].published) : undefined;

  const core: MetadataRoute.Sitemap = [
    { url: u("/"), changeFrequency: "weekly", priority: 1 },
    { url: u("/services"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/work"), changeFrequency: "monthly", priority: 0.8 },
    { url: u("/locations"), changeFrequency: "monthly", priority: 0.8 },
    { url: u("/insights"), lastModified: latest, changeFrequency: "weekly", priority: 0.7 },
    { url: u("/about"), changeFrequency: "yearly", priority: 0.6 },
    { url: u("/process"), changeFrequency: "yearly", priority: 0.5 },
    { url: u("/industries"), changeFrequency: "yearly", priority: 0.5 },
    { url: u("/faq"), changeFrequency: "monthly", priority: 0.5 },
    { url: u("/contact"), changeFrequency: "yearly", priority: 0.7 },
    { url: u("/technologies"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/compare"), changeFrequency: "monthly", priority: 0.6 },
    { url: u("/privacy"), changeFrequency: "yearly", priority: 0.1 },
    { url: u("/terms"), changeFrequency: "yearly", priority: 0.1 },
  ];

  return [
    ...core,
    ...services.map((s) => ({ url: u(`/services/${s.slug}`), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...locations.map((l) => ({ url: u(`/locations/${l.slug}`), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...landings
      .filter(isIndexable)
      .map((l) => ({
        url: u(l.path),
        changeFrequency: "monthly" as const,
        priority: l.kind === "compare" ? 0.6 : l.kind === "city-service" ? 0.7 : 0.8,
      })),
    ...projects.map((p) => ({ url: u(`/work/${p.slug}`), changeFrequency: "yearly" as const, priority: 0.6 })),
    ...articles.map((a) => ({
      url: u(`/insights/${a.slug}`),
      lastModified: new Date(a.updated ?? a.published),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
