// One helper for every page's metadata, so title, description, canonical URL
// and the social-share (Open Graph / X) tags always agree with each other.
import type { Metadata } from "next";
import { site } from "@/lib/site";

type Opts = {
  title: string;
  description: string;
  path: string;
  /** Use the title exactly as given (it already carries the brand). */
  absolute?: boolean;
  /** Share image path; defaults to the site-wide image. */
  image?: string;
  openGraph?: Metadata["openGraph"];
  extra?: Omit<Metadata, "title" | "description" | "alternates" | "openGraph" | "twitter">;
};

export function meta({ title, description, path, absolute, image = "/opengraph-image", openGraph, extra }: Opts): Metadata {
  // Keep titles inside Google's ~65-character display: long, keyword-led titles skip the brand suffix.
  const branded = `${title} | ${site.name}`;
  const bare = absolute || branded.length > 65;
  const full = bare ? title : branded;
  return {
    title: bare ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en",
      url: path,
      title: full,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...openGraph,
    } as Metadata["openGraph"],
    twitter: { card: "summary_large_image", title: full, description },
    ...extra,
  };
}
