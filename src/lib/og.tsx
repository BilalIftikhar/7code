// Shared renderer for Open Graph / social share images (1200×630).
// Light gallery look to match the site: paper background, near-black type,
// the "7_" code mark with its green cursor.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const fontDir = join(process.cwd(), "src/fonts/og");
const fonts = async () => [
  { name: "Inter Tight", data: await readFile(join(fontDir, "inter-tight-latin-500-normal.woff")), weight: 500 as const },
  { name: "Inter Tight", data: await readFile(join(fontDir, "inter-tight-latin-700-normal.woff")), weight: 700 as const },
];

const NIGHT = "#222222";
const PAPER = "#f5f5f5";
const GREEN = "#16a34a";
// Content only changes on deploy, and Vercel purges its CDN on every deploy.
const headers = { "Cache-Control": "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400" };
const domain = site.url.replace(/^https?:\/\//, "");

function CodeMark({ h, color = NIGHT }: { h: number; color?: string }) {
  const w = (h * 114) / 120;
  return (
    <svg width={w} height={h} viewBox="0 0 114 120">
      <path d="M0 0H100V17L51 120H29L76 19H0Z" fill={color} />
      <rect x="74" y="108" width="40" height="12" rx="2" fill={GREEN} />
    </svg>
  );
}

export async function ogImage({ label, title, sub }: { label: string; title: string; sub?: string }) {
  const size = title.length > 60 ? 62 : title.length > 38 ? 74 : 92;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          color: NIGHT,
          fontFamily: "Inter Tight",
          padding: "64px 72px",
          position: "relative",
        }}
      >
        {/* Big mark, bleeding off the right edge */}
        <div style={{ position: "absolute", right: -40, bottom: -30, display: "flex", opacity: 0.07 }}>
          <CodeMark h={640} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "#ffffff",
                border: "1px solid #dcdcdc",
                borderRadius: 999,
                padding: "10px 20px",
                fontSize: 24,
                fontWeight: 500,
                color: "#5c5c5c",
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: 999, background: GREEN }} />
              {label}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
            <div style={{ fontSize: size, fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.98 }}>{title}</div>
            {sub ? (
              <div style={{ marginTop: 26, fontSize: 28, fontWeight: 500, color: "#5c5c5c", lineHeight: 1.3, maxWidth: 880 }}>
                {sub}
              </div>
            ) : null}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 14,
                  background: NIGHT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CodeMark h={36} color="#ffffff" />
              </div>
              <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.04em" }}>7CODE</div>
            </div>
            <div style={{ fontSize: 24, fontWeight: 500, color: "#5c5c5c" }}>{domain}</div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await fonts(), headers },
  );
}

/** Square app icon (apple-touch-icon and PWA). */
export function iconImage(px: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: NIGHT,
        }}
      >
        <CodeMark h={Math.round(px * 0.56)} color="#ffffff" />
      </div>
    ),
    { width: px, height: px, headers },
  );
}
