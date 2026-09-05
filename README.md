# Aradhya Pratap Singh — Class 10 IT Portfolio

A premium, minimal, academic IT portfolio website for **Aradhya Pratap Singh**,
Class 10, **The Scholar Valley Sr. Sec. School** — built with **React,
TypeScript, Vite, Tailwind CSS, Motion and Lucide**.

Frontend-only. No backend, no database, no authentication.

---

## Getting started

```bash
npm install
npm run dev        # local development server
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run typecheck  # TypeScript check only
```

## Structure

```
src/
  components/
    layout/    Navbar, MobileDrawer (animated), Footer
    ui/        Button, Badge, Card, Container, Reveal, Section, SkillChip, …
    cards/     ProjectCard, SkillCard, GitHubCard, InterestCard, ContactCard
    sections/  Hero, About, Journey, Portfolio, ItPortfolio, Interests, Contact
    it/        UnitTabs, SessionNav, LessonCard, PrintCurriculum
  data/        Typed content: projects, skills, interests, journey, links,
               profile and the full Class 10 Employability Skills curriculum
  hooks/       useActiveSection, useScrollProgress, useLockBodyScroll
  lib/         cn helper
  types/       Shared TypeScript types
```

## Content model

All content lives in `src/data/*` as typed, static modules:

- `projects.ts` — exactly three projects (Clocke, Habiter, Kycelius).
  Habiter's repository URL is the only verified one; Clocke deliberately has
  no repository link and Kycelius has no invented one.
- `itCurriculum.ts` — the five Employability Skills units and all 22
  sessions with exact official titles, summarised in original wording.
- `skills.ts`, `interests.ts`, `journey.ts`, `links.ts`, `profile.ts`,
  `navigation.ts` — remaining structured content.

## Deploy

The build output is fully static and uses relative asset paths, so the
`dist/` folder can be hosted on **Netlify** (see `netlify.toml`),
**Vercel** or **GitHub Pages** without extra configuration.

```bash
npm run build
```

## Notes

- Print / "Save as PDF" is supported: navigation and interactive controls
  are hidden, and a full curriculum listing is printed for the Class 10 IT
  section.
- Respects `prefers-reduced-motion`; keyboard navigation, focus states and
  accessible semantics are included.
- No environment variables, API tokens or secrets are required.