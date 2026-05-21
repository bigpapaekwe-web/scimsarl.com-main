# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build to /dist
npm run preview    # Preview production build
npm run lint       # TypeScript type-check (no emit)
```

Set `GEMINI_API_KEY` environment variable before running if you need the Studio AI page to work.

## Architecture

React 19 SPA with HashRouter (`/#/route`). All routes defined in `App.tsx`. Pages wrap their content in `<PageTransition>` (Framer Motion) and `<SEO>` (react-helmet-async). `Header` and `Footer` render on every route.

**Routes:**
- `/` → `Home.tsx`
- `/a-propos` → `About.tsx`
- `/services` → `Services.tsx`
- `/realisations` → `Projects.tsx`
- `/certifications` → `Certifications.tsx`
- `/contact` → `Contact.tsx`
- `/studio` → `Studio.tsx` (Google Gemini API — requires `GEMINI_API_KEY`)

**Data layer:** All static content (services, projects, certifications, contact info) lives in `constants.tsx`. TypeScript interfaces are in `types.ts`. Pages import and render this data directly — no API calls for content.

**Design system:** Orange (`#f97316` / `orange-500`) as primary accent on `#0f172a` (slate-900) dark backgrounds. Inter font. Custom animations (`shimmer`, `fade-in-up`, `gentle-pulse`) defined in `index.css`.

**Path alias:** `@/*` resolves to project root (configured in `tsconfig.json` and `vite.config.ts`).
