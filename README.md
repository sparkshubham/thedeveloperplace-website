# The Developer Place

Premium Next.js marketing site for **The Developer Place** — intelligent software, SaaS platforms, and industry ERPs (ColdFlow, OMNIRETAIL).

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber (lazy-loaded hero)
- Lucide React
- React Hook Form + Zod
- Manrope + Space Grotesk via `@fontsource` (self-hosted; no Google Fonts network call at build time)

## Setup

```bash
npm install
# If install fails with UNABLE_TO_VERIFY_LEAF_SIGNATURE (corporate SSL inspection):
# npm install --strict-ssl=false

cp .env.example .env.local   # optional overrides
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Edit contact and brand details in one place:

- `data/settings.ts` — company name, email, phone, WhatsApp, social links, site URL
- `data/*.ts` — services, products, process, tech, industries, testimonials, AI demo copy

Update Open Graph / SEO base URL via `siteConfig.url` in `data/settings.ts`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | ESLint |

## Deployment

Deploy on Vercel (recommended) or any Node host:

```bash
npm run build
npm start
```

Set the production domain in `data/settings.ts` (`url`) so sitemap, robots, and metadata stay correct.

## Project structure

```
app/                  # routes, layout, SEO, API
components/
  ui/                 # design system primitives
  animations/         # motion, particles, 3D
  sections/           # homepage sections
  layout/             # navbar, footer
data/                 # structured content
hooks/ lib/ types/
public/               # static assets (logo, demos)
```

## Notes

- Heavy 3D (`HeroScene`) loads client-side only and respects `prefers-reduced-motion`.
- Contact form posts to `/api/contact` (validates with Zod). Wire this route to your email/CRM provider for production.
- Testimonials in `data/testimonials.ts` are placeholders — replace before public marketing claims.
