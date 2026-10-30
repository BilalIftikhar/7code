import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our work — websites and SEO for UAE, Oman and Pakistan businesses",
  description:
    "Case studies from 7CODE: Next.js websites and local SEO for crane hire, logistics, heavy equipment and apparel manufacturing companies in Abu Dhabi, Sohar and Faisalabad.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="seven-edge bg-night pb-32 text-white">
        <div className="wrap pt-20 md:pt-28">
          <h1 className="display max-w-[12ch] text-[clamp(2.6rem,8vw,7rem)]">Work that brings in the calls.</h1>
          <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-chalk/85">
            Five projects for companies that sell specialised services — cranes, freight, lifting, manufacturing — where
            a single enquiry can be worth a month of revenue.
          </p>
        </div>
      </section>

      <section className="wrap py-20 md:py-28">
        <ul className="divide-y divide-rule border-y border-rule">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-6 md:px-4 md:hover:bg-chalk"
              >
                <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] transition-colors group-hover:text-signal md:col-span-5">
                  {p.name}
                </h2>
                <div className="md:col-span-4">
                  <p className="text-sm text-graphite">
                    {p.industry}, {p.region}
                  </p>
                  <p className="mt-2 leading-relaxed">{p.summary}</p>
                </div>
                <p className="text-sm text-graphite md:col-span-3 md:text-right">{p.scope.join(", ")}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
