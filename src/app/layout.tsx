import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Preloader, introScript } from "@/components/motion/Preloader";
import { site } from "@/lib/site";

// Self-hosted, preloaded, Latin-only variable font with a size-matched fallback (no layout shift on swap)
const interTight = localFont({
  src: "../fonts/inter-tight-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-inter-tight",
  adjustFontFallback: "Arial",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "7CODE | Web Development & SEO Agency in Dubai, Abu Dhabi & Lahore",
    template: "%s | 7CODE",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "7CODE | Web Development & SEO Agency in Dubai, Abu Dhabi & Lahore",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <Preloader />
        <a
          href="#main"
          className="sr-only z-[60] rounded bg-signal px-4 py-2 text-on-signal focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <SmoothScroll />
        <Cursor />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
