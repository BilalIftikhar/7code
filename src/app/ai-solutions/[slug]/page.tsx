import type { Metadata } from "next";
import { LandingPage, landingMetadata } from "@/components/landing/LandingPage";
import { slugsUnder } from "@/lib/landings";

export function generateStaticParams() {
  return slugsUnder("/ai-solutions").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return landingMetadata(`/ai-solutions/${slug}`);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LandingPage path={`/ai-solutions/${slug}`} />;
}
