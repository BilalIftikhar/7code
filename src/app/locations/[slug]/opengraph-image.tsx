import { ogImage, ogContentType, ogSize } from "@/lib/og";
import { getLocation, locations } from "@/lib/locations";
import { getLanding, slugsUnder } from "@/lib/landings";

export const alt = "7CODE location";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return [...locations.map((l) => ({ slug: l.slug })), ...slugsUnder("/locations").map((slug) => ({ slug }))];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const l = getLocation(slug);
  const g = l ? undefined : getLanding(`/locations/${slug}`);
  if (g) return ogImage({ label: g.name, title: g.h1, sub: g.line });
  return ogImage({ label: l ? `${l.city}, ${l.country}` : "Locations", title: l?.h1 ?? "Where we work" });
}
