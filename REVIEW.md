# 🔍 aparilli.dev — Code Review & DevOps Report

> **Date:** 2026-06-13  
> **Reviewer:** Senior Frontend Dev + DevOps Engineer (subagent)  
> **Model:** opencode-go/kimi-k2.6  
> **Scope:** `/root/aparilli-dev/` source + Coolify deployment

---

## 1. Executive Summary

| Metric | Value |
|--------|-------|
| **Code Quality Score** | **6.5 / 10** |
| **Completeness** | **35%** (Home only; 4 pages missing) |
| **Deployment Status** | ❌ **Container EXITED** — not running |
| **Auto-deploy** | ✅ Enabled but **never triggered** |
| **Domain** | Not configured in Coolify (no FQDN) |

**Verdict:** The codebase is a solid foundation with excellent architectural decisions, but the project is incomplete (missing 4 pages) and the deployment is broken. The Coolify app is in `exited` status with zero deployment history. The repo is properly linked to GitHub, but the container needs to be started (and likely a build triggered) before it will serve traffic.

---

## 2. Code Quality Analysis

### 2.1 Architecture & File Structure

```
✅ app/           — App Router (Next.js 15)
✅ components/    — layout/ + sections/ split (clean)
✅ data/          — Type-safe data layer (profile.ts, projects.ts, skills.ts)
❌ lib/           — Missing (utils.ts, seo.ts planned but not created)
❌ public/        — Missing (favicon.ico, og-image.png, robots.txt)
```

**Strengths:**
- **App Router** with `layout.tsx` properly wrapping Nav + Footer
- **CSS Modules** co-located per component (Hero.module.css, etc.) — clean
- **Design system in globals.css** — CSS variables, utilities, reset, animations all in one place. This is pragmatic for a solo project.
- **Data-driven components** — `profile.ts`, `projects.ts`, `skills.ts` are typed and centralized
- **SEO component** — `generateSEO()` helper with OpenGraph, Twitter cards, canonical

**Weaknesses:**
- **No `public/` assets** — missing favicon.ico, OG image, robots.txt
- **No `lib/` utilities** — `cn()` helper, formatters, etc. missing
- **No loading.tsx or error.tsx** — App Router fallback pages missing
- **No `not-found.tsx`** — 404 page not defined

### 2.2 TypeScript Quality

| Check | Status |
|-------|--------|
| Strict mode | ✅ `strict: true` in tsconfig |
| Path aliases | ✅ `@/*` → `./src/*` |
| Types for data | ✅ `Project`, `Skill`, `SkillCategory` interfaces |
| Component types | ✅ Props typed (e.g., `{ project: Project }`) |
| No `any` usage | ✅ None detected |

**Issues:**
- `Readonly<{ children: React.ReactNode }>` in `layout.tsx` is slightly over-typed for a portfolio; `React.ReactNode` alone is fine.
- `metadataBase` is typed as `string | undefined` but cast from `const` object — minor type gymnastics.

### 2.3 CSS Modules Assessment

| Aspect | Rating |
|--------|--------|
| Design system | ⭐⭐⭐⭐⭐ Excellent — variables for colors, spacing, radius, fonts |
| Responsive | ⭐⭐⭐⭐☆ Good — mobile breakpoints at 640px, 768px |
| Animation | ⭐⭐⭐⭐⭐ Nice — fadeInUp, pulse-glow, scrollPulse |
| Accessibility | ⭐⭐⭐☆☆ Fair — `aria-hidden` on decorative elements, but missing `prefers-reduced-motion` |
| BEM-ish | N/A (uses flat classes, which is fine for CSS Modules) |

**Notable CSS patterns:**
- `mask-image` + `radial-gradient` for background grid fade — sophisticated
- `clamp()` for fluid typography — modern
- `backdrop-filter: blur(12px)` on nav — polished
- `:focus-visible` for keyboard navigation — good

**Missing:**
- `prefers-reduced-motion` media query for animations
- CSS custom properties for animation durations (hardcoded in keyframes)

### 2.4 Component Review

#### `Nav.tsx`
- ✅ Sticky with blur backdrop
- ✅ Active link styling via `usePathname()`
- ✅ External Telegram CTA
- ❌ **No mobile hamburger menu** — links hidden at <640px with no toggle
- ❌ `use client` directive needed for `usePathname`, but Next.js 15 can use `Link` without it if active state is handled differently

#### `Footer.tsx`
- ✅ Clean 3-column layout (logo, nav, social)
- ✅ Astro badge in footer (subtle, on-brand)
- ✅ Dynamic year

#### `Hero.tsx`
- ✅ Astro badge as first visual element (unique, on-brand)
- ✅ Gradient text on name
- ✅ Decorative orb with pulse animation
- ✅ Scroll indicator
- ❌ CTA "Descargar CV" links to `/cv` but page doesn't exist yet

#### `ProjectsGrid.tsx`
- ✅ Status dots (active/maintained/archived)
- ✅ Hover gradient overlay
- ✅ "Ver todos →" links to `/projects` (missing page)
- ❌ `projects.map` without `featured` filter on home — shows all 6 projects on homepage
- ❌ No `key` prop issue (using `project.name` which is unique, fine)

#### `SEO.tsx`
- ✅ Full OpenGraph + Twitter metadata
- ❌ `metadataBase` is cast as `const` — could be cleaner with `new URL()`
- ❌ No JSON-LD structured data (Person schema)

### 2.5 Data Layer

#### `profile.ts`
- ✅ Rich structured data (astrology, roles, bio)
- ❌ `bio` text contains "solve" instead of "solucionan" (mixed English/Spanish)

#### `projects.ts`
- ✅ 6 projects with full metadata
- ✅ `featured` boolean filterable
- ✅ Status enum (`active`, `maintained`, `archived`)
- ❌ `longDescription` not used anywhere (only `description` shown)

#### `skills.ts`
- ✅ Typed skill levels (1-3)
- ✅ Categorized
- ❌ **Not used anywhere** — no Skills section rendered on any page

---

## 3. What's Missing (Completeness Gap)

### Pages (0% complete for 4 of 5)

| Page | File | Status | Notes |
|------|------|--------|-------|
| `/` (Home) | `page.tsx` | ✅ **Built** | Hero + Projects grid + bio strip |
| `/about` | `app/about/page.tsx` | ❌ **Missing** | Bio, timeline, education, values |
| `/projects` | `app/projects/page.tsx` | ❌ **Missing** | Full project grid with filtering |
| `/cv` | `app/cv/page.tsx` | ❌ **Missing** | CV visual + PDF download |
| `/contact` | `app/contact/page.tsx` | ❌ **Missing** | Form + contact links |

### Components (missing from plan)

| Component | Status | Needed For |
|-----------|--------|-----------|
| `Timeline.tsx` | ❌ Missing | `/about` |
| `SkillsCloud.tsx` | ❌ Missing | `/about` or `/cv` |
| `Button.tsx` | ❌ Missing | Reusable CTA (currently only CSS classes) |
| `Card.tsx` | ❌ Missing | Reusable project card |
| `SectionLabel.tsx` | ⚠️ Partial | Only CSS class exists, no component |

### Static Assets

| Asset | Status | Notes |
|-------|--------|-------|
| `public/favicon.ico` | ❌ Missing | Only SVG favicon in `<head>` |
| `public/og-image.png` | ❌ Missing | Referenced in SEO metadata |
| `public/robots.txt` | ❌ Missing | Needed for SEO |
| `public/sitemap.xml` | ❌ Missing | Can be auto-generated |
| `public/andres-parilli-cv.pdf` | ❌ Missing | "Descargar CV" button needs this |

### Configuration

| Config | Status | Issue |
|--------|--------|-------|
| `next.config.ts` | ⚠️ Incomplete | Missing `output: 'export'` or proper build output for static deploy |
| Coolify webhook | ✅ Configured | Secret is set, but never triggered |
| `coolify.json` | ✅ Present | Matches DB config |

---

## 4. Coolify Deployment Review

### 4.1 Current State (from DB)

```sql
-- Query result:
name        | aparilli-dev
status      | exited          ← ❌ NOT RUNNING
git_repo    | andresparilli/aparilli-dev  ← ✅ Correct
branch      | main            ← ✅ Correct
build_pack  | nixpacks        ← ✅ Correct
port        | 3000            ← ✅ Correct
auto_deploy | true            ← ✅ Enabled
health_check| true            ← ✅ Enabled
fqdn        | (empty)         ← ❌ No domain assigned
webhook_secret| bb3613...     ← ✅ Set
build_cmd   | (empty)         ← ⚠️ Nixpacks will auto-detect
dockerfile  | (empty)         ← ⚠️ Nixpacks will auto-detect
updated_at  | 2026-06-13 05:33:44
```

### 4.2 Deployment History

```sql
-- application_deployment_queues for aparilli-dev:
status | commit | created_at | finished_at | is_webhook | logs
-------+--------+------------+-------------+------------+------
(0 rows)
```

**Zero deployments ever.** The app was likely created in Coolify but never actually built/started.

### 4.3 Environment Variables

```sql
-- environment_variables for aparilli-dev:
key | value | is_literal | is_buildtime | is_runtime
----+-------+------------+--------------+------------
(0 rows)
```

**No env vars set.** At minimum, `NODE_ENV=production` should be set. Not critical for nixpacks but good practice.

### 4.4 Is the GitHub Repo Properly Linked?

✅ **Yes.** The repo `andresparilli/aparilli-dev` is correctly linked with branch `main`.

### 4.5 What is Needed for Auto-deploy to Work?

Auto-deploy is **enabled** (`is_auto_deploy_enabled = true`) and the webhook secret is configured. However, for the webhook to actually trigger:

1. **GitHub webhook must be configured** — the `manual_webhook_secret_github` is set in Coolify, but GitHub needs a webhook URL pointing to Coolify's webhook endpoint.
2. **The app must be started once** — currently status is `exited`. Coolify needs to do an initial build + deploy.
3. **The container needs to be running** — status `exited` means it failed or was never started.

### 4.6 Why is it `exited`?

Most likely causes:
1. **Initial build never ran** — zero deployment queue entries confirm this
2. **No destination server** — `destination_id = 0` is suspicious; it might mean no server is assigned
3. **Nixpacks detection might fail** — no `build_command` or `start_command` set, relying on auto-detection
4. **Missing `package.json` scripts** — actually `build` and `start` exist, so this should work

### 4.7 Next Steps for Coolify

1. **Trigger manual build** from Coolify UI or CLI
2. **Verify the app starts** and health check passes
3. **Check logs** for any build errors
4. **Assign FQDN** — `fqdn` is empty; needs `aparilli.dev` or `aparilli-dev.178.104.54.230.sslip.io`
5. **Configure GitHub webhook** — add webhook in GitHub repo settings pointing to Coolify's webhook URL

---

## 5. Prioritized Action Items

### 🔴 P0 — Critical (Deployment Broken)

| # | Action | Effort | Details |
|---|--------|--------|---------|
| 1 | **Start Coolify deployment** | 30 min | Trigger manual build in Coolify UI; check logs; fix any build errors |
| 2 | **Fix next.config.ts** | 15 min | Add `output: 'export'` or proper static config; remove hardcoded `turbopack.root` |
| 3 | **Add public assets** | 30 min | Create `public/favicon.ico`, `public/og-image.png`, `public/robots.txt` |
| 4 | **Verify GitHub webhook** | 15 min | Check GitHub repo → Settings → Webhooks; ensure Coolify webhook is active |

### 🟡 P1 — High (Complete the Site)

| # | Action | Effort | Details |
|---|--------|--------|---------|
| 5 | **Build `/about` page** | 2-3 hrs | Bio, timeline, education, values, personal interests |
| 6 | **Build `/projects` page** | 2-3 hrs | Full project grid, filtering by status, featured vs all |
| 7 | **Build `/cv` page** | 2-3 hrs | Visual timeline, skills section, downloadable PDF link |
| 8 | **Build `/contact` page** | 1-2 hrs | Form (name, email, message) + contact links |
| 9 | **Add mobile nav hamburger** | 1 hr | Currently links hidden at <640px with no alternative |
| 10 | **Add `not-found.tsx`** | 30 min | Custom 404 page |

### 🟢 P2 — Medium (Polish & SEO)

| # | Action | Effort | Details |
|---|--------|--------|---------|
| 11 | **Add JSON-LD structured data** | 1 hr | Person schema for SEO |
| 12 | **Add `prefers-reduced-motion`** | 30 min | Respect user preference for animations |
| 13 | **Add `loading.tsx` + `error.tsx`** | 1 hr | App Router fallback states |
| 14 | **Generate sitemap** | 30 min | `next-sitemap` or manual `sitemap.ts` in App Router |
| 15 | **Add Google Fonts via `next/font`** | 30 min | Currently using `@import` in CSS — switch to `next/font` for better performance |
| 16 | **Create `lib/utils.ts`** | 30 min | `cn()` helper, date formatters, etc. |

### 🔵 P3 — Low (Nice to Have)

| # | Action | Effort | Details |
|---|--------|--------|---------|
| 17 | **Add analytics (Plausible or self-hosted)** | 1 hr | Privacy-friendly analytics |
| 18 | **Add `longDescription` rendering** | 30 min | Project detail modal or expanded card |
| 19 | **Add testimonials section** | 2 hrs | From colleagues/clients |
| 20 | **Add `aria-label` to icon-only links** | 15 min | Accessibility improvement |

---

## 6. Cloudflare Domain Setup

### Current State
- Domain `aparilli.dev` is registered but **not configured in Coolify** (FQDN empty)
- Cloudflare DNS needs an A record or CNAME pointing to the VPS

### Steps

1. **In Coolify:** Set FQDN to `aparilli.dev` for the app
2. **In Cloudflare DNS:** Add A record:
   - `aparilli.dev` → `178.104.54.230` (VPS IP)
   - `www` → `178.104.54.230` (or CNAME to `aparilli.dev`)
3. **In Cloudflare:** Set SSL mode to **Full (strict)** if using origin cert, or **Flexible** if not
4. **Verify:** `curl -I https://aparilli.dev` should return 200 after propagation

---

## 7. Quick Fixes (Can Apply Now)

### Fix `next.config.ts` for static export:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### Fix `profile.ts` typo:
```typescript
// Change "solve" to "solucionan"
"Llevo 7 años construyendo tecnología que solucionan problemas reales..."
```

### Add `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://aparilli.dev/sitemap.xml
```

---

## 8. Scoring Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Architecture | 8/10 | 20% | 1.6 |
| TypeScript | 8/10 | 15% | 1.2 |
| CSS Modules | 8/10 | 15% | 1.2 |
| Completeness | 3/10 | 20% | 0.6 |
| Accessibility | 5/10 | 10% | 0.5 |
| Performance | 6/10 | 10% | 0.6 |
| DevOps/Deploy | 2/10 | 10% | 0.2 |
| **Total** | | | **6.5 / 10** |

---

## 9. Conclusion

The `aparilli.dev` project has a **strong foundation** with excellent design decisions (CSS Modules, dark aesthetic, type-safe data), but it is currently:

1. **Incomplete** — only the homepage exists; 4 critical pages are missing
2. **Undeployed** — the Coolify container is in `exited` status with zero deployment history
3. **Unlinked** — domain `aparilli.dev` has no FQDN assigned in Coolify

**Recommended order of work:**
1. Fix Coolify deployment (P0) — get the site live first
2. Build `/about` and `/contact` (P1) — minimum viable portfolio
3. Build `/projects` and `/cv` (P1) — complete the content
4. Polish with P2/P3 items — SEO, performance, accessibility

**Estimated total effort to complete:** 15-20 hours of focused development.

---

*Report generated by subagent for Alf (main agent).*  
*Source: `opencode-go/kimi-k2.6` | Files reviewed: 17 source files + Coolify DB*
