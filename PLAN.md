# 7CODE website — build plan

Stack: Next.js 16 (App Router, TypeScript), Tailwind CSS 4, Archivo variable font (self-hosted). Deploy target: Vercel.

Rules: 10silicon is not named anywhere on the site. Portfolio = projects the founder built:
Seven Lift, Maxtgc, Ferry Global Logistics, Masood Lifts, MUHSEEQ. No invented stats, testimonials or contact details.

## Chunks

- [x] 1. Foundation + homepage: tokens, logo, header with mega menu, mobile menu, footer, homepage
- [x] 2. Work: /work index + 5 case-study pages (with CreativeWork schema)
- [x] Design direction: Locomotive (smooth scroll, line reveals, velocity marquee), Dogstudio (reactive 7, custom cursor), BASIC/DEPT + Clay (stacking case-study cards), Resn (magnetic buttons, hover preview). GSAP + Lenis; all motion off for reduced-motion users
- [x] Colour scheme: Magenta Night (night #160b26, signal #d6246e) — all colours are role tokens in globals.css
- [ ] 3. Services: /services overview + 9 category pages, unique copy and FAQs each
- [ ] 4. Company: About, Process, Contact (working form + WhatsApp), FAQ, Privacy, Terms, 404, Industries
- [ ] 5. Locations: Lahore, Dubai, Abu Dhabi (genuinely local, no fake offices)
- [ ] 6. Insights blog: MDX system + first articles
- [ ] 7. SEO/AEO/GEO + QA + deploy: sitemap, robots, Organization schema, OG images, Lighthouse, Vercel

## Needed from the founder before launch

- Final domain (`src/lib/site.ts` → `url`)
- 7CODE email inbox (`src/lib/site.ts` → `contact.email`)
- Confirm the UAE WhatsApp number carries over to 7CODE
- Real results per project (Search Console / leads), approved by each client
- Any client testimonials you have permission to publish
- Project screenshots (or permission to capture them from the live sites)
