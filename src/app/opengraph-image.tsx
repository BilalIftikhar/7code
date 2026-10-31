import { ogImage, ogContentType, ogSize } from "@/lib/og";

export const alt = "7CODE — web development, SEO and digital marketing agency for Dubai, Abu Dhabi and Lahore";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    label: "Dubai · Abu Dhabi · Lahore",
    title: "Digital experiences, engineered for growth.",
    sub: "Websites, web apps, Shopify stores, mobile apps and AI-search SEO.",
  });
}
