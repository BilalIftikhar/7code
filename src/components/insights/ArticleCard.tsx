import Link from "next/link";
import type { ArticleMeta } from "@/lib/insights";
import { formatDate } from "@/lib/insights";
import { ArticleCover } from "./ArticleCover";

export function ArticleCard({ a, index }: { a: ArticleMeta; index: number }) {
  return (
    <Link href={`/insights/${a.slug}`} data-cursor="Read" className="group block">
      <div className="overflow-hidden rounded-xl">
        <ArticleCover
          title={a.title}
          category={a.category}
          index={index}
          className="aspect-[4/3] transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-balance">{a.title}</h3>
      <p className="mt-2 text-sm text-graphite">
        <time dateTime={a.published}>{formatDate(a.published)}</time>, {a.readingMinutes} min read
      </p>
    </Link>
  );
}
