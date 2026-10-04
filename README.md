# S & S Muffler & Brake Shop (demo site)

One-page demo website for **S & S Muffler & Brake Shop**, a muffler, exhaust and brake repair shop at
2880 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318.

**Live:** https://androidkrayze.github.io/ss-muffler-atlanta/

> This is an unsolicited demo, not the shop's official website. It is marked `noindex` so search engines
> don't list it.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- `next/font` (Oswald + Inter), `lucide-react` + inline SVG icons
- Static export (`output: "export"`) deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm ci
npm run dev     # http://localhost:3000/ss-muffler-atlanta/
npm run build   # static site in ./out
npm run lint
```

The site is served from the `/ss-muffler-atlanta` sub-path, set as `basePath`/`assetPrefix` in
`next.config.ts`. Change both if the repo is renamed or a custom domain is used.

## Structure

```
src/app/layout.tsx       metadata (title, description, Open Graph, robots), fonts
src/app/page.tsx         page composition
src/components/          Header, Hero, Services, WhyUs, Location, CallToAction, Footer, MobileCallBar (client)
src/lib/site.ts          business details (name, phone, address, rating), edit here
```

## Deployment

Currently deployed from the `gh-pages` branch (Pages source: *Deploy from a branch*, `gh-pages` / root):

```bash
npm run deploy   # next build + push ./out to the gh-pages branch
```

### Switching to GitHub Actions (recommended)

A ready-to-use workflow is in `.github/deploy-pages.workflow.yml` (official `actions/configure-pages`,
`actions/upload-pages-artifact` with `./out`, `actions/deploy-pages`). It isn't active yet because the
token used to push lacked the `workflow` scope. To enable it:

1. Move it to `.github/workflows/deploy.yml` (via the GitHub web UI, or after `gh auth refresh -s workflow`).
2. Settings → Pages → Source: **GitHub Actions** (or
   `gh api -X PUT repos/AndroidKrayze/ss-muffler-atlanta/pages -f build_type=workflow`).

After that, every push to `main` builds and deploys automatically.

## Placeholders to confirm with the shop

- Opening hours (currently "Call for hours")
- Facebook page URL (currently plain text, no link)
- Rating (4.6 stars, 210 reviews) is a Google Maps snapshot from October 2026
