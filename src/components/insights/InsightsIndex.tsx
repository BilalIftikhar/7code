"use client";

import Link from "next/link";
import { useState } from "react";
import type { ArticleMeta } from "@/lib/insights";
import { ArticleCover } from "./ArticleCover";

const fmt = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Filterable article grid. Only categories that have articles are offered. */
export function InsightsIndex({ articles }: { articles: ArticleMeta[] }) {
  const cats = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? articles : articles.filter((a) => a.category === filter);

  return (
    <div>
      <div role="group" aria-label="Filter by topic" className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              filter === c ? "border-night bg-night text-white" : "border-rule bg-card text-graphite hover:border-night hover:text-night"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((a, i) => (
          <li key={a.slug}>
            <Link href={`/insights/${a.slug}`} data-cursor="Read" className="group block">
              <div className="overflow-hidden rounded-xl">
                <ArticleCover
                  title={a.title}
                  category={a.category}
                  index={i}
                  className="aspect-[4/3] transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-balance">{a.title}</h2>
              <p className="mt-2 line-clamp-2 leading-relaxed text-graphite">{a.description}</p>
              <p className="mt-3 text-sm text-graphite">
                <time dateTime={a.published}>{fmt(a.published)}</time>, {a.readingMinutes} min read
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
