import { ogImage, ogContentType, ogSize } from "@/lib/og";
import { getLocation, locations } from "@/lib/locations";

export const alt = "7CODE location";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const l = getLocation((await params).slug);
  return ogImage({ label: l ? `${l.city}, ${l.country}` : "Locations", title: l?.h1 ?? "Where we work" });
}
