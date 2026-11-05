import Link from "next/link";
import type { ReactNode } from "react";
import { RevealText } from "@/components/motion/RevealText";
import { site } from "@/lib/site";

type Crumb = { name: string; href?: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${site.url}${c.href === "/" ? "" : c.href}` } : {}),
    })),
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Visible breadcrumb trail plus matching BreadcrumbList schema. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <nav aria-label="Breadcrumb" className="text-sm text-graphite">
        <ol className="flex flex-wrap gap-2">
          {crumbs.map((c, i) => (
            <li key={c.name} className="flex gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href && i < crumbs.length - 1 ? (
                <Link href={c.href} className="hover:text-night">
                  {c.name}
                </Link>
              ) : (
                <span
                  aria-current={i === crumbs.length - 1 ? "page" : undefined}
                  className={i === crumbs.length - 1 ? "text-night" : ""}
                >
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

/** Breadcrumb + large headline + intro, shared by inner pages. */
export function PageHeader({
  crumbs,
  title,
  intro,
  aside,
  wide = false,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: ReactNode;
  aside?: ReactNode;
  wide?: boolean;
}) {
  return (
    <header className="wrap pt-10 md:pt-14">
      <Breadcrumbs crumbs={crumbs} />
      <RevealText
        as="h1"
        onLoad
        className={`display invisible mt-12 text-[clamp(2.8rem,9vw,8rem)] md:mt-16 ${wide ? "max-w-[18ch]" : "max-w-[14ch]"}`}
      >
        {title}
      </RevealText>
      {(intro || aside) && (
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          {intro && <div className="space-y-5 md:col-span-7">{intro}</div>}
          {aside && <div className="md:col-span-4 md:col-start-9">{aside}</div>}
        </div>
      )}
    </header>
  );
}

export function SectionTitle({
  id,
  children,
  note,
}: {
  id: string;
  children: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-night pt-10 md:grid-cols-12">
      <RevealText
        id={id}
        className="display text-[clamp(2.2rem,5vw,4rem)] md:col-span-7"
      >
        {children}
      </RevealText>
      {note && (
        <p className="max-w-[44ch] text-lg leading-relaxed text-graphite md:col-span-4 md:col-start-9 md:self-end">
          {note}
        </p>
      )}
    </div>
  );
}

/** Dark call-to-action box used at the foot of inner pages. */
export function CtaBox({
  title = "Tell us what you need built.",
  body = "Share a few details and we'll reply with a plan, a timeline and a fixed quote.",
  href = "/contact",
  label = "Start a project",
}: {
  title?: string;
  body?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section aria-label="Start a project" className="wrap pb-6">
      <div className="grid gap-8 rounded-2xl bg-night px-6 py-14 text-white md:grid-cols-12 md:px-12 md:py-20">
        <p className="display text-[clamp(2.2rem,5vw,4.25rem)] md:col-span-8">
          {title}
        </p>
        <div className="md:col-span-4 md:self-end">
          <p className="leading-relaxed text-white/75">{body}</p>
          <Link
            href={href}
            className="mt-6 inline-block rounded-full bg-white px-7 py-4 font-semibold text-night transition-colors hover:bg-chalk"
          >
            {label}
          </Link>
        </div>
      </div>
    </section>
  );
}
