# 7CODE website — build plan

Stack: Next.js 16 (App Router, TypeScript), Tailwind CSS 4, Archivo variable font (self-hosted). Deploy target: Vercel.

Rules: 10silicon is not named anywhere on the site. Portfolio = projects the founder built:
Seven Lift, Maxtgc, Ferry Global Logistics, Masood Lifts, MUHSEEQ. No invented stats, testimonials or contact details.

## Chunks

- [x] 1. Foundation + homepage: tokens, logo, header with mega menu, mobile menu, footer, homepage
- [x] 2. Work: /work index + 5 case-study pages (with CreativeWork schema)
- [x] Design direction: Locomotive (smooth scroll, line reveals, velocity marquee), Dogstudio (reactive 7, custom cursor), BASIC/DEPT + Clay (stacking case-study cards), Resn (magnetic buttons, hover preview). GSAP + Lenis; all motion off for reduced-motion users
- [x] Look: Awwwards-inspired gallery style — light grey page, white cards, near-black type and pill buttons, Inter Tight headlines, featured-project showcase, project card grid. Colours are role tokens in globals.css
- [x] 3. Services: /services overview + 9 service pages — unique copy, included, who it’s for, approach, related work, FAQs (FAQPage + Service + Breadcrumb schema)
- [x] 4. Company: About (founder from CV, Person schema), How we work, Industries, Contact (server-validated form, honeypot + timing spam check, Resend email or WhatsApp hand-off), FAQ, Privacy, Terms, 404
- [x] 5. Locations: /locations hub + Lahore (HQ, ProfessionalService schema), Dubai and Abu Dhabi (served remotely, Service schema — no office claimed)
- [x] 6. Insights: Markdown articles in content/insights, index with topic filters, article pages (TOC, reading time, author bio, share, related, FAQs, BlogPosting + FAQPage + Breadcrumb schema), homepage "Latest insights"; 3 articles
- [x] UAE competitor upgrade (vs Digital Gravity, Element8, Red Spider, AUN Digital):
  - Keywords: keyword-led H1 + titles ("Web Development Company in Dubai", "Web Design & Development Company in Abu Dhabi", "Software House … in Lahore", "SEO Services in Dubai & the UAE"…); service-in-city sections on each location page; bilingual/Arabic + AI Overviews wording
  - Trust & conversion: client-name strip, Upwork Top Rated Plus / 100% JSS badges, verbatim Upwork reviews, count-up stats, homepage quote form, floating WhatsApp, AED budgets
  - 3D: three.js extruded glossy "7" with particles + wireframe echo (mouse + scroll reactive, lazy-loaded after the intro, pauses off-screen, SVG fallback)
  - Motion graphics: pinned "Build → Launch → Grow" scroll story, code-scramble keyword line, CSS headline reveal
- [x] World-class agency layer (Awwwards/Lusion/Locomotive patterns): 3D tilt cards with glare + depth layers site-wide; pinned horizontal cover-flow 3D work gallery (swipe carousel on mobile); first-visit counter preloader (skipped for 12h, reduced motion, and if JS fails); curtain page transitions; scroll-velocity skew on the marquee
- [x] Speed pass (Lighthouse): 3D loads on first interaction + hardware GPU only; phones paint the hero instantly (no preloader/mask/scramble); next/font/local preloaded Latin font with size-matched fallback; GSAP/Lenis loaded on demand in idle time; CSS (compositor) marquee; lazy, re-render-free motion story and gallery; Suspense hydration boundaries; contrast fixes. Result: desktop 98–100 perf on all audited pages, a11y/BP/SEO 100; mobile LCP 1.8–2.3 s and CLS 0 under real throttling
- [x] 7. SEO/AEO/GEO + QA + deploy prep: sitemap.xml, robots.txt (open to AI crawlers), llms.txt, Organization + WebSite schema linked by @id from every page schema, generated share images per page (home, services, work, locations, insights), favicon/app icon/manifest in the "7_" mark, shared metadata helper (titles ≤65 chars, descriptions ≤160, canonical + og:url everywhere), security headers, domain via NEXT_PUBLIC_SITE_URL, README deploy guide. QA: 36 pages / 66 internal links clean, JSON-LD valid, 404 noindex; Lighthouse desktop 95–100, a11y/BP/SEO 100
- [ ] Go live: private GitHub repo → Vercel import → env vars → domain → Search Console + Bing sitemap submission (steps in README)

## Needed from the founder before launch

- 7CODE email inbox (`src/lib/site.ts` → `contact.email`)
- Confirm the UAE WhatsApp number carries over to 7CODE
- Real results per project (Search Console / leads), approved by each client
- Any client testimonials you have permission to publish
- Project screenshots (or permission to capture them from the live sites)
- Confirm the UI/UX archive clients (Lahore Qalandars, Mövenpick, Harris Security etc.) — the Branding & UI/UX page mentions sports, security, logistics, hospitality and tech clients based on them
- Services with no case study yet (mobile apps, social media, performance marketing, AI): add work as it ships
- Contact form email: set RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (see .env.example); until then it hands off to WhatsApp
- Confirm budget ranges on the contact form (now AED, with a USD hint on the first band)
- Have Privacy and Terms reviewed before launch
- Review the 3 launch articles — they're bylined to the founder

## Publishing a new article

1. Add `content/insights/your-article-slug.md` (the file name becomes the URL).
2. Frontmatter: `title`, `description` (meta, ~150 chars), `category` (one of the 15 in src/lib/insights.ts), `published: YYYY-MM-DD`; optional `seoTitle`, `updated`, `faqs` (list of `q`/`a`).
3. Open with a bolded **Short answer:** paragraph, use `##` headings (they build the table of contents), and link to relevant /services, /work and /locations pages.
4. Rebuild and deploy.
- Semrush API units: top up to pull real search volumes and difficulty for the UAE/Lahore keyword set before final targeting
