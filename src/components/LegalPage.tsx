import type { ReactNode } from "react";
import { PageHeader } from "@/components/PageParts";

/** Readable long-form layout for legal pages. */
export function LegalPage({ title, crumb, updated, children }: { title: string; crumb: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHeader crumbs={[{ name: "Home", href: "/" }, { name: crumb }]} title={title} />
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="text-sm text-graphite md:col-span-3">Last updated {updated}</p>
          <div className="max-w-[68ch] space-y-5 text-lg leading-relaxed md:col-span-8 [&_h2]:display-soft [&_h2]:pt-8 [&_h2]:text-2xl [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2 [&_a]:underline [&_a]:underline-offset-4">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
