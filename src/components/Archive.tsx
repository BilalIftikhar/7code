"use client";

import { useMemo, useState } from "react";
import type { ArchiveItem } from "@/lib/projects";

/** Filterable list of earlier projects that don't have full case studies. */
export function Archive({ items }: { items: ArchiveItem[] }) {
  const kinds = useMemo(() => ["All", ...Array.from(new Set(items.map((i) => i.kind)))], [items]);
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((i) => i.kind === filter);

  return (
    <div>
      <div role="group" aria-label="Filter archive" className="flex flex-wrap gap-2">
        {kinds.map((k) => (
          <button
            key={k}
            type="button"
            aria-pressed={filter === k}
            onClick={() => setFilter(k)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              filter === k ? "border-night bg-night text-white" : "border-rule bg-card text-graphite hover:border-night hover:text-night"
            }`}
          >
            {k}
            <span className="ml-1.5 tabular-nums opacity-60">
              {k === "All" ? items.length : items.filter((i) => i.kind === k).length}
            </span>
          </button>
        ))}
      </div>

      <table className="mt-8 w-full text-left">
        <caption className="sr-only">Archive of earlier projects</caption>
        <thead className="text-sm text-graphite">
          <tr className="border-b border-night">
            <th scope="col" className="py-3 pr-4 font-normal">Project</th>
            <th scope="col" className="hidden py-3 pr-4 font-normal md:table-cell">Type</th>
            <th scope="col" className="hidden py-3 font-normal sm:table-cell sm:text-right">Tools</th>
          </tr>
        </thead>
        <tbody>
          {shown.map((item) => (
            <tr key={item.name} className="border-b border-rule transition-colors hover:bg-card">
              <td className="py-5 pr-4">
                <span className="text-lg font-semibold md:text-xl">{item.name}</span>
                {item.note && <span className="ml-3 text-sm text-graphite">{item.note}</span>}
                <span className="mt-1 block text-sm text-graphite md:hidden">{item.kind}</span>
              </td>
              <td className="hidden py-5 pr-4 text-graphite md:table-cell">{item.kind}</td>
              <td className="hidden py-5 text-sm text-graphite sm:table-cell sm:text-right">{item.tools.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
