@AGENTS.md

# Portfolio — Claude Instructions

## Commands

```bash
pnpm dev          # dev server (Turbopack)
pnpm build        # production build
pnpm start        # serve production build
pnpm typecheck    # tsc --noEmit
pnpm biome check  # lint + format check
pnpm biome check --write  # auto-fix
```

## Content

Edit `src/content/profile.ts` to update any portfolio content — it is the single source of truth. Never hardcode strings in components.

## Design System

- Fonts: Fraunces (display), Geist (body), JetBrains Mono (metadata/code)
- Tokens: `--paper`, `--ink`, `--accent` (terracotta), `--muted`, `--rule`, `--surface`
- **Tailwind v4 syntax:** `text-(--ink)` not `text-[var(--ink)]`
- Dark mode: class-based via `next-themes`, toggle in Nav

## Architecture

- Feature-based: all UI in `src/features/<feature>/`
- Shared primitives in `src/components/` (Rule, Marginalia)
- Lib utilities in `src/lib/` (profile selectors, seo helpers, motion variants)
- RSC by default; `"use client"` only for Motion animations and ThemeToggle

## Git Rules

- Branch from `main` before any change: `git checkout -b feature/name`
- Atomic Conventional Commits after each logical unit — never batch unrelated changes
- Never push directly to `main`
