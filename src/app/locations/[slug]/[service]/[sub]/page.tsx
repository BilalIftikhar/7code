import type { Metadata } from "next";
import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { landings } from "@/lib/landings";

export function generateStaticParams() {
  return landings
    .filter((l) => l.kind === "area-service")
    .map((l) => {
      const [, , slug, service, sub] = l.path.split("/");
      return { slug, service, sub };
    });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; service: string; sub: string }> }): Promise<Metadata> {
  const { slug, service, sub } = await params;
  return landingMetadata(`/locations/${slug}/${service}/${sub}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string; service: string; sub: string }> }) {
  const { slug, service, sub } = await params;
  return <LandingPage path={`/locations/${slug}/${service}/${sub}`} />;
}
