# Divinital

The web presence for **Divinital** — a parent company / product studio — and the entry points
for its ventures: **Intralocutor** (live reading app) and **PayShroud** (pre-launch, waitlist).

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org) (App Router, React Server Components), [React 19](https://react.dev) |
| Language | TypeScript, `strict` + `noUncheckedIndexedAccess` everywhere |
| Styling | [Tailwind CSS v4](https://tailwindcss.com), CSS-variable theming (OKLCH), [Geist](https://vercel.com/font) |
| UI primitives | Custom shadcn-style components in `packages/ui` (`class-variance-authority` for variants, Radix `Slot` for `asChild` composition, `tailwind-merge`/`clsx` for class merging) |
| Motion | [Motion](https://motion.dev) (Framer Motion's successor) — scroll-reveal animations, `prefers-reduced-motion`-aware via a single `MotionProvider` |
| Forms & validation | Native React state on the client; [Zod](https://zod.dev) schema validation on the server (API route) |
| Email / waitlist | [Resend](https://resend.com) — Audiences API stores waitlist contacts, transactional API sends the confirmation email (no separate DB) |
| Monorepo | [Turborepo](https://turborepo.com) task graph/caching + pnpm workspaces |
| Lint / format | ESLint 9 flat config (`typescript-eslint`, `eslint-config-next`), Prettier |
| Hosting (target) | [Vercel](https://vercel.com) — one project, multiple domains routed by middleware |
| Analytics | `@vercel/analytics` + `@vercel/speed-insights`, zero-config on Vercel |
| CI | GitHub Actions (`lint` → `typecheck` → `build` on every PR) |

## Architecture

A Turborepo monorepo with a single Next.js marketing app that serves every brand, plus a shared
design system. Ventures are data, not infrastructure: adding one is a registry entry, a route
folder, and a theme block — no structural changes.

```
.
├── apps/
│   └── web/                     # Next.js 15 (App Router) — serves all marketing surfaces
│       └── src/
│           ├── app/
│           │   ├── (company)/   # divinital.com: home, /about, /ventures
│           │   ├── intralocutor/# splash — CTA routes to the live app at intralocutor.com
│           │   ├── payshroud/   # splash — waitlist capture, pre-launch
│           │   └── api/waitlist/# POST endpoint → Resend Audience + confirmation email
│           ├── components/      # app-level composites (header, footer, cards, forms)
│           ├── config/          # site.ts + ventures.ts (single source of truth)
│           └── middleware.ts    # host-based rewrites for venture domains
└── packages/
    ├── ui/                      # shared design system (shadcn-style primitives + motion)
    ├── eslint-config/           # shared ESLint flat configs
    └── typescript-config/       # shared tsconfig presets
```

### Why one app (for now)

Splash pages are marketing surfaces, not applications. Serving them from one deployment keeps
builds, analytics, and SEO management in one place while `middleware.ts` maps venture domains
(e.g. `payshroud.com`) onto their splash routes — visitors see the venture's own domain, the
deployment stays singular. Intralocutor's domain hosts the actual product (built elsewhere), so
its splash lives at `divinital.com/intralocutor` and its CTA links out.

When a venture graduates into a full product built here, it becomes `apps/<venture>` in this
monorepo with its own Vercel project — the design system and configs are already shared.

### Branding without forking

`packages/ui` components read semantic CSS variables (`--background`, `--accent`, …). Each
venture overrides them under a `[data-theme="<venture>"]` scope in
`apps/web/src/app/globals.css`, applied by `VentureShell`. Same components, distinct brands:

- **Divinital** — dark, tech-forward "cyber" brand: electric violet + cyan, grid/aurora
  backdrop (`components/cyber/`), monospace technical accents
- **Intralocutor** — warm sepia paper tones, fixed to light, serif display type
- **PayShroud** — fixed dark, emerald accent

## Getting started

Requires Node ≥ 20 and pnpm 10. If `pnpm` isn't already on your machine:

```sh
corepack enable          # ships with most Node installs
# — or, if your Node build doesn't include corepack —
npm install -g pnpm@10
```

```sh
pnpm install
pnpm dev        # all apps via turbo (web on http://localhost:3000)
```

Copy `apps/web/.env.example` to `apps/web/.env.local` and fill in what you need:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata/sitemap (default `https://divinital.com`) |
| `NEXT_PUBLIC_INTRALOCUTOR_APP_URL` | Where Intralocutor's CTA sends readers |
| `RESEND_API_KEY` / `RESEND_AUDIENCE_ID` | PayShroud waitlist storage ([resend.com](https://resend.com)) |
| `RESEND_FROM_EMAIL` | Optional sender for the waitlist confirmation email |

Without Resend credentials the waitlist logs submissions in development and returns 503 in
production — it never fakes success in prod.

### Commands

```sh
pnpm dev          # run everything in dev
pnpm build        # production build (turbo-cached)
pnpm lint         # eslint across all workspaces
pnpm typecheck    # tsc --noEmit across all workspaces
pnpm format       # prettier --write
```

## Adding a venture

1. Add an entry to `apps/web/src/config/ventures.ts` (name, tagline, path, status,
   `splashDomains` if the venture's domain should serve the splash).
2. Create `apps/web/src/app/<slug>/layout.tsx` (wrap in `VentureShell`) and `page.tsx`.
3. Add a `[data-theme="<slug>"]` token block in `apps/web/src/app/globals.css`.

Navigation, the ventures pages, the sitemap, and domain routing pick it up automatically.

## Deployment (Vercel)

One Vercel project for `apps/web`:

- **Root directory:** `apps/web` (enable "Include files outside root directory")
- **Domains:** attach `divinital.com` (primary) and any venture splash domains
  (`payshroud.com`, `www.payshroud.com`) — the middleware routes them.
  `intralocutor.com` points at the Intralocutor product deployment, not here.
- **Env vars:** set the variables from `.env.example` for Production/Preview.
- **CI:** `.github/workflows/ci.yml` runs lint, typecheck, and build on every PR;
  Vercel provides preview deployments per branch.

Analytics: Vercel Analytics + Speed Insights are wired in `apps/web/src/app/layout.tsx` and
activate automatically on Vercel — no keys needed.
