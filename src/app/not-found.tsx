import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[70svh] flex-col justify-center py-24">
      <p className="text-sm text-graphite">Error 404</p>
      <h1 className="display mt-6 max-w-[14ch] text-[clamp(2.8rem,9vw,8rem)]">This page doesn&apos;t exist.</h1>
      <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-graphite">
        The link may be old or mistyped. Try one of these instead.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-signal px-7 py-4 font-semibold text-on-signal hover:bg-signal-hover">
          Go to the homepage
        </Link>
        <Link href="/services" className="rounded-full border border-night/20 bg-card px-7 py-4 font-semibold hover:border-night">
          Services
        </Link>
        <Link href="/work" className="rounded-full border border-night/20 bg-card px-7 py-4 font-semibold hover:border-night">
          Work
        </Link>
        <Link href="/contact" className="rounded-full border border-night/20 bg-card px-7 py-4 font-semibold hover:border-night">
          Contact
        </Link>
      </div>
    </section>
  );
}
