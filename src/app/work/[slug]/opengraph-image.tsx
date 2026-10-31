import { ogImage, ogContentType, ogSize } from "@/lib/og";
import { projects } from "@/lib/projects";

export const alt = "7CODE case study";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return ogImage({ label: p ? `Case study · ${p.region}` : "Case study", title: p?.name ?? "Our work", sub: p?.kind });
}
