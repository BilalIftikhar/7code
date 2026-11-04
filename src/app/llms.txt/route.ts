// /llms.txt — a plain-language map of the site for AI assistants (llmstxt.org).
// Built from the same data as the pages, so it never drifts out of date.
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { locations } from "@/lib/locations";
import { getArticles } from "@/lib/insights";

export function GET() {
  const u = (p: string) => `${site.url}${p}`;
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} is headquartered in Lahore, Pakistan, and serves clients in the UAE (Dubai, Abu Dhabi), Oman, the UK and worldwide. Founded and led by ${site.founder.name} (${site.founder.yearsExperience} years building web platforms), with co-founder ${site.cofounder.name}. Contact: WhatsApp ${site.contact.whatsappDisplay}${site.contact.email ? `, ${site.contact.email}` : ""}.`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${u(`/services/${s.slug}`)}): ${s.line}`),
    "",
    "## Locations",
    ...locations.map((l) => `- [${l.city}, ${l.country}](${u(`/locations/${l.slug}`)}): ${l.metaDescription}`),
    "",
    "## Case studies",
    ...projects.map((p) => `- [${p.name}](${u(`/work/${p.slug}`)}): ${p.summary}`),
    "",
    "## Insights",
    ...getArticles().map((a) => `- [${a.title}](${u(`/insights/${a.slug}`)}): ${a.description}`),
    "",
    "## Company",
    `- [About](${u("/about")}): founder, experience and how the agency works`,
    `- [Process](${u("/process")}): discovery to launch and growth`,
    `- [FAQ](${u("/faq")}): pricing, timelines, ownership and support`,
    `- [Contact](${u("/contact")}): request a quote`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
