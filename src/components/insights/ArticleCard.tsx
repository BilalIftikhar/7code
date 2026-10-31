import Link from "next/link";
import { Card3D } from "@/components/motion/Card3D";
import type { ArticleMeta } from "@/lib/insights";
import { formatDate } from "@/lib/insights";
import { ArticleCover } from "./ArticleCover";

export function ArticleCard({ a, index }: { a: ArticleMeta; index: number }) {
  return (
    <Card3D className="rounded-2xl" max={7}>
    <Link href={`/insights/${a.slug}`} data-cursor="Read" className="group block rounded-2xl border border-rule bg-card p-2">
      <div data-depth style={{ ["--depth" as string]: 24 }} className="overflow-hidden rounded-xl">
        <ArticleCover
          title={a.title}
          category={a.category}
          index={index}
          className="aspect-[4/3] transition-transform duration-1000 ease-[var(--ease-out-quart)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="px-3 pb-3">
        <h3 className="mt-4 text-lg font-semibold leading-snug text-balance">{a.title}</h3>
        <p className="mt-2 text-sm text-graphite">
          <time dateTime={a.published}>{formatDate(a.published)}</time>, {a.readingMinutes} min read
        </p>
      </div>
    </Link>
    </Card3D>
  );
}
