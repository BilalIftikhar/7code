import { ogImage, ogContentType, ogSize } from "@/lib/og";
import { getService, services } from "@/lib/services";

export const alt = "7CODE service";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  return ogImage({ label: "Service", title: s?.h1 ?? "Services", sub: s?.line });
}
