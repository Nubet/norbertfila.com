# Cloudflare Pages Deploy

## Production target

- Platform: Cloudflare Pages
- Git provider: GitHub
- Production branch: `main`
- Build output directory: `out`
- Custom domains: `norbertfila.com`, `www.norbertfila.com`

## Build settings

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `bun run build`

If the Cloudflare preset has trouble with Bun in the dashboard, use `npx next build` as a fallback and keep the output directory as `out`.

## Required environment variables

- `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`

Add the same variable in:

- Production environment
- Preview environment

## How this repo is prepared

- `next.config.ts` uses `output: 'export'`
- `next/image` runs with `images.unoptimized = true`
- Cloudflare response headers live in `public/_headers`
- `robots.txt` and `sitemap.xml` are statically generated
- Public URLs stay extensionless, for example `/contact` instead of `/contact.html`

## First deploy checklist

1. Open Cloudflare dashboard.
2. Go to `Workers & Pages`.
3. Create a new `Pages` project from Git.
4. Connect the GitHub repository.
5. Set production branch to `main`.
6. Set build command to `bun run build`.
7. Set build output directory to `out`.
8. Add `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` to Production and Preview.
9. Deploy to the generated `*.pages.dev` URL.

## Verification checklist

Check these URLs on the `pages.dev` deployment:

- `/`
- `/about`
- `/contact`
- `/portfolio`
- `/portfolio/artorius`
- `/blog`
- one real blog post URL
- `/robots.txt`
- `/sitemap.xml`

Confirm:

- no public link contains `.html`
- canonical URLs still point to `https://norbertfila.com/...`
- images load correctly
- videos from `cdn.norbertfila.com` load correctly
- Google Analytics loads
- Microsoft Clarity loads
- CSP is present from `_headers`

## Domain cutover checklist

1. Add `norbertfila.com` to the Pages project.
2. Add `www.norbertfila.com` to the Pages project.
3. Update DNS to point both domains at Cloudflare Pages.
4. Wait for SSL provisioning.
5. Re-test production URLs, analytics, and form submission.

## After cutover

- Keep Oracle online briefly as rollback only.
- Remove Oracle secrets from GitHub after stable production verification.
- Remove legacy Oracle deploy workflow and scripts from the repo.
