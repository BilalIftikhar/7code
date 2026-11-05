import { projects } from "@/lib/projects";
import type { RibbonItem } from "@/components/work/WorkRibbon";

// Ribbon order: every card sweeps past, then all nine land in a 3×3 grid.
const ORDER = ["seven-lift", "ferry-global", "muhseeq", "masood-lifts", "av-leads", "logistivo", "maxtgc", "igivu", "poolstore"];

export const ribbonItems: RibbonItem[] = ORDER.map((slug) => {
  const p = projects.find((x) => x.slug === slug)!;
  return { slug, name: p.name, img: `/work/ribbon/${slug}.jpg?v=2` };
});
