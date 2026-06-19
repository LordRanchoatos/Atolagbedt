# David T. Atolagbe — Portfolio

A personal portfolio site built with Next.js (App Router) and Tailwind CSS,
styled after [kumareth.com](https://www.kumareth.com/)'s minimalist,
text-first design language: monochrome palette, plain system typography,
a narrow single column, hairline dividers instead of cards, and dash-prefixed
credential lists instead of decorative UI.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx          root layout, theme provider, metadata
    page.tsx            home page (about, experience, projects, etc.)
    globals.css         design tokens (colors, type, hairlines)
    writings/
      page.tsx           writings index
      [slug]/page.tsx     individual essay page (stub until you publish)
  components/            all UI building blocks
  lib/data.ts            ALL site copy lives here — edit this file to update content
public/
  resume.pdf             downloadable résumé (Cowrywise/backend version)
  avatar-placeholder.svg placeholder profile photo
```

## Things to swap out before launch

Everything below is intentionally a placeholder, flagged in `src/lib/data.ts`:

1. **Profile photo** — replace `public/avatar-placeholder.svg` with a real
   photo (e.g. `profile.jpg`), then update `avatarSrc` in `lib/data.ts`.
2. **Project links** — `Yarnz`, `Bankless DAO Website`, `Madhatter`,
   `Deeltix`, `Helpers`, and the Sooseed/Jobgap AI company links are marked
   `href: "PLACEHOLDER"`. Replace each with a real URL and the "(link soon)"
   tag will automatically disappear (see `MaybeLink.tsx`).
3. **Writings** — the two essay titles in `writings` currently render a
   "coming soon" stub page. Either:
   - add a real URL and point the title link straight to where it's
     published (Medium, Substack, etc.), or
   - write the full essay directly into
     `src/app/writings/[slug]/page.tsx` (or move content into MDX if the
     list grows).
4. **Résumé numbers** — content uses the Cowrywise/backend résumé version
   (₦100M+ processed, 15,000+ users, etc.), per your instruction. If the
   Sooseed/Fullstack résumé numbers should win for any specific line, update
   `lib/data.ts` directly.

## Design tokens (`src/app/globals.css`)

- **Light**: background `#ffffff`, text `#18181b`, muted `#71717a`,
  hairline border `#e4e4e7`, link `#3a5f8a`.
- **Dark**: background `#0a0a0b`, text `#ededee`, muted `#8b8b92`,
  hairline border `#262629`, link `#8eb4dd`.
- **Type**: system UI sans-serif stack, 16px base, 1.7 line-height. Section
  labels ("EXPERIENCE", "PROJECTS"...) use a small, tracked, uppercase
  "eyebrow" style pulled straight from the résumé's own section headers.
- **Layout**: single column, 680px max width, hairline `border-top`
  dividers between sections — no cards, shadows, or rounded buttons.

Toggle dark/light from the nav (top right) — it respects system preference
by default and remembers your choice (`next-themes`).

## Deploying to Vercel

```bash
npm install -g vercel   # if you don't have it
vercel
```

Or connect the GitHub repo directly at vercel.com/new — zero config needed,
Next.js is auto-detected.
