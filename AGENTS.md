<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Quinn Welton — Portfolio

## Project Map

Personal portfolio for Quinn Welton, Front-End Developer, Vancouver BC.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Motion · next-themes · pnpm

**Deploy target:** Vercel

## Entry Points

| Route | File |
|-------|------|
| `/` | `src/app/page.tsx` |
| `/work/[slug]` | `src/app/work/[slug]/page.tsx` |
| `/resume` | `src/app/resume/page.tsx` |
| Root layout | `src/app/layout.tsx` |
| Global styles | `src/app/globals.css` |

## Content Source

**Single source of truth:** `src/content/profile.ts`

All displayed copy (name, bio, projects, experience, education, contact, SEO) lives here. Never hardcode strings in components — import from profile.

## Feature Structure

```
src/features/
├── hero/         Hero section with staggered Motion animation
├── about/        Bio + skills section
├── work/         ProjectCard, WorkGrid, ProjectDetail
├── experience/   Timeline (work history + education)
├── contact/      Contact links + CTA
└── nav/          Sticky nav + ThemeToggle
```

## Shared

```
src/components/   Rule (hairline divider), Marginalia (metadata label)
src/lib/          profile.ts (selectors), seo.ts (metadata builder), motion.ts (variants)
src/styles/       fonts.ts (Fraunces · Geist · JetBrains Mono)
```

## Design Tokens (OKLCH, in globals.css)

| Token | Usage |
|-------|-------|
| `--paper` | Background |
| `--ink` | Primary text |
| `--accent` | Terracotta — CTAs, hover, active states |
| `--muted` | Secondary text, labels |
| `--rule` | Hairline borders, dividers |
| `--surface` | Card/image placeholder backgrounds |

Use Tailwind v4 canonical syntax: `text-(--ink)` not `text-[var(--ink)]`.

## Conventions

- RSC by default; `"use client"` only for interactivity (motion, theme toggle)
- Atomic Conventional Commits on feature branches — never push directly to `main`
- Biome for lint/format — run `pnpm biome check` before committing
- `noUncheckedIndexedAccess` is on — array index access returns `T | undefined`
