# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at localhost:3000
npm run build    # production build (required before deploy)
npm run lint     # ESLint check
```

No test suite exists yet.

## Architecture

**Stack:** Next.js 16 App Router · TypeScript · Tailwind CSS v4 · Vercel

**Content pipeline:** Blog posts are Markdown files in `content/posts/`. `src/lib/posts.ts` reads them from disk at build time using `gray-matter` (frontmatter) and `remark` + `remark-html` (Markdown → HTML). No CMS or database — purely file-based static generation.

**Routes:**
- `/` — minimal landing page with links to legal pages and blog
- `/blog` — sorted post listing (SSG via `getSortedPosts()`)
- `/blog/[slug]` — individual post (SSG via `generateStaticParams` + `getPost()`)
- `/privacy`, `/terms` — static legal pages
- `/sitemap.xml` — auto-generated from posts via `src/app/sitemap.ts`

**Adding a post:** create `content/posts/<slug>.md` with this frontmatter:
```md
---
title: "Post Title"
date: "2026-04-17"
excerpt: "One-sentence summary."
tags: ["adhd", "cleaning"]
---
```

**Deployment:** Vercel, auto-deploys from `main`. Config in `vercel.json`. Domain: `nudgeclean.app`.

## Brand Constraints

Primary color: `#87A878` (sage green). All copy must follow brand voice from `~/.paperclip/CLAUDE.md` — warm, ADHD-friendly, no guilt language (no: overdue, behind, failed, missed, should, lazy).
