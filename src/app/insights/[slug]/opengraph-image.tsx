import { ogImage, ogContentType, ogSize } from "@/lib/og";
import { getArticle, getArticles } from "@/lib/insights";

export const alt = "7CODE insight";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug);
  return ogImage({ label: a ? `Insights · ${a.category}` : "Insights", title: a?.title ?? "Insights" });
}
