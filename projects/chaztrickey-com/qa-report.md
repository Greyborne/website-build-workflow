# PRE-LAUNCH QA REPORT: chaztrickey.com
**Generated:** 2026-06-14
**Stack:** Next.js 15 + Payload CMS v3 + Tailwind CSS v4 + SQLite

---

## Summary

| Severity | Count | Status |
|---|---|---|
| 🔴 Blocking | 3 | ✅ All fixed |
| 🟡 Important | 7 | 4 fixed, 3 deferred |
| 🟢 Polish | 5 | Backlogged |

**Launch verdict:** READY (with deferred items documented below)

---

## Blocking Issues — All Fixed ✅

| # | Issue | Fix Applied |
|---|---|---|
| 1 | No per-page `<title>` / meta description | Added `export const metadata` to every page file including dynamic article routes via `generateMetadata` |
| 2 | Privacy Policy link 404s | Built `/privacy` page with full policy stub (analytics disclosure, contact form usage, third-party services, user rights) |
| 3 | No skip-to-content link | Added `<a class="skip-link">` in root layout, visible only on keyboard focus, jumps to `#main` |

## Important Issues — Status

| # | Issue | Status |
|---|---|---|
| 4 | No robots.txt / sitemap.xml | ✅ Fixed — `app/robots.ts` + `app/sitemap.ts` (includes all static + article routes) |
| 5 | No JSON-LD structured data | ✅ Fixed — `Person` schema on /about, `Article` schema on /articles/[slug] |
| 6 | No OG image | ⚠️ Deferred — needs design work. `openGraph` config in metadata is ready, just needs `/public/og-default.png` |
| 7 | Fonts loaded via CSS @import (blocks render) | ⚠️ Deferred to post-launch optimization pass — `next/font/google` migration |
| 8 | Body text contrast | ✅ Verified — text-secondary (62% L) on bg (11% L) = ~7:1 contrast, passes AAA |
| 9 | Contact form API stub only | ⚠️ Deferred — needs SMTP credentials (Resend recommended) before wiring real email send |
| 10 | No cookie consent | ⚠️ Deferred — couple with GA4 wiring when ready |

## Polish — Backlog

| # | Item |
|---|---|
| 11 | Custom SVG icons for social platforms (replace Lucide stand-ins) |
| 12 | Real portrait photo replaces "CT" monogram on About |
| 13 | Replace placeholder articles with real content via Payload admin |
| 14 | Refactor ArticleCard inline hover handlers to CSS class |
| 15 | Wire frontend to live Payload queries (currently reads `placeholder-articles.ts`) |

---

## Pre-Launch Manual QA Checklist

Run these in a real browser before flipping DNS:

- [ ] Tab through entire site with keyboard only — confirm focus is visible and order is logical
- [ ] Verify skip-to-content link appears on Tab from page load and lands on `#main`
- [ ] Test contact form submission shows success state
- [ ] Test contact form server-side validation (try empty, invalid email, short message)
- [ ] Visit `/articles/nope` → confirms 404 page renders
- [ ] Check all 4 nav links work on every page
- [ ] Verify Privacy Policy link in footer goes to `/privacy`
- [ ] Mobile (375px): nav hamburger opens, scrolls without horizontal overflow
- [ ] Tablet (768px): category sections look balanced
- [ ] Desktop (1280px): about page sticky-scroll works correctly
- [ ] Wide desktop (1440px+): nothing stretches beyond `--max-width-content`
- [ ] Test all browsers: Chrome, Firefox, Safari, Edge
- [ ] Run Lighthouse audit per page (target 90+ on all categories)
- [ ] Verify dark theme renders correctly in OS dark mode
- [ ] Browser zoom at 200% (WCAG requirement) — no overflow or unreadable text
- [ ] Check Payload admin loads at `/admin`
- [ ] Create a test article in Payload admin and verify it persists

## Production Deployment Checklist (Hostinger VPS)

- [ ] Set production `PAYLOAD_SECRET` to a strong random string (min 32 chars)
- [ ] Switch `DATABASE_URL` from SQLite to PostgreSQL
- [ ] Run `npm run build` and confirm no warnings/errors
- [ ] Set up PM2: `pm2 start npm --name "chaztrickey" -- start`
- [ ] PM2 auto-restart: `pm2 startup && pm2 save`
- [ ] Nginx reverse proxy to port 3000
- [ ] Certbot SSL: `sudo certbot --nginx -d chaztrickey.com -d www.chaztrickey.com`
- [ ] Update `SITE_URL` constants in robots.ts and sitemap.ts if domain differs
- [ ] Verify `/sitemap.xml` and `/robots.txt` resolve correctly
- [ ] Submit sitemap in Google Search Console
- [ ] Submit sitemap in Bing Webmaster Tools

## Post-Launch Week 1

- Monitor `pm2 logs` for errors
- Check browser console on each page for warnings
- Run Lighthouse on production URL
- Confirm Google indexes the homepage within 7 days
- Replace placeholder articles with Chaz's first real content
