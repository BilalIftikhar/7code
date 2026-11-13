import type { Metadata } from "next";
import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { landings } from "@/lib/landings";

export function generateStaticParams() {
  return landings
    .filter((l) => l.kind === "city-service" || l.kind === "area")
    .map((l) => {
      const [, , slug, service] = l.path.split("/");
      return { slug, service };
    });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; service: string }> }): Promise<Metadata> {
  const { slug, service } = await params;
  return landingMetadata(`/locations/${slug}/${service}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string; service: string }> }) {
  const { slug, service } = await params;
  return <LandingPage path={`/locations/${slug}/${service}`} />;
}
