# 7CODE website

Agency site for 7CODE: Next.js 16 (App Router, Cache Components), React 19, Tailwind CSS 4, GSAP + Lenis, three.js hero. Content lives in `src/lib/*.ts` (services, projects, locations, company facts) and `content/insights/*.md` (articles). Build plan and pre-launch checklist: `PLAN.md`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Deploy (Vercel)

1. Push this repo to a **private** GitHub repository under your account.
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: Next.js (defaults are correct).
3. **Environment variables** (Production + Preview):
   - `NEXT_PUBLIC_SITE_URL`: the final domain, e.g. `https://7code.agency` (no trailing slash)
   - `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`: contact-form email (optional; without them the form hands off to WhatsApp)
4. Deploy, then **Settings → Domains**: add the domain and set the DNS records Vercel shows. Add both `7code.agency` and `www.7code.agency`, redirecting `www` to the apex.
5. After the domain is live:
   - Google Search Console: add the domain property, submit `https://<domain>/sitemap.xml`
   - Bing Webmaster Tools: import from Search Console (Bing also feeds ChatGPT search and Copilot)
   - Test a few pages in the Rich Results Test and a share preview (LinkedIn Post Inspector / WhatsApp)

## SEO and AI-search plumbing

| URL | What it is |
| --- | --- |
| `/sitemap.xml` | Every page, generated from the same data the pages use |
| `/robots.txt` | Open to search engines and AI assistants (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…) |
| `/llms.txt` | Plain-language site map for AI assistants |
| `/opengraph-image`, `/<section>/<slug>/opengraph-image` | Generated share images |
| `/manifest.webmanifest`, `/icon.svg`, `/apple-icon` | App icons |

Structured data: Organization + WebSite on every page (`src/lib/schema.ts`), plus Service, FAQPage, BreadcrumbList, CreativeWork, BlogPosting, Person and ProfessionalService where relevant. Page metadata goes through `src/lib/meta.ts` so titles, canonicals and share tags stay in sync.

## Adding content

- **Article**: add `content/insights/<slug>.md` (see `PLAN.md` → Publishing a new article).
- **Case study / service / location**: add an entry in `src/lib/projects.ts`, `services.ts` or `locations.ts`. The page, sitemap entry, share image and llms.txt line are created automatically.
