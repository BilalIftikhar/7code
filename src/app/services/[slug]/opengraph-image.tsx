import { ogImage, ogContentType, ogSize } from "@/lib/og";
import { getService, services } from "@/lib/services";
import { getLanding, slugsUnder } from "@/lib/landings";

export const alt = "7CODE service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return [...services.map((s) => ({ slug: s.slug })), ...slugsUnder("/services").map((slug) => ({ slug }))];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const s = getService(slug);
  const l = s ? undefined : getLanding(`/services/${slug}`);
  return ogImage({ label: "Service", title: s?.h1 ?? l?.h1 ?? "Services", sub: s?.line ?? l?.line });
}
