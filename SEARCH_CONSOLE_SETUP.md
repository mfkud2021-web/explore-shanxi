# Google Search Console Setup — Explore Shanxi

This guide explains how to add `https://explore-shanxi.vercel.app` to Google
Search Console, verify ownership, submit the sitemap and check index status.

You need a Google account and to be the person who manages this project.

## 1. Add the property

1. Go to https://search.google.com/search-console
2. Click **Add property**.
3. Choose **URL prefix** (not "Domain") and enter:

   ```
   https://explore-shanxi.vercel.app
   ```

   Use URL-prefix, because the site lives on a `vercel.app` subdomain and you
   do not control the parent `vercel.app` DNS.

## 2. Verify ownership

Choose **one** method below. The project is prepared for the first two.

### Option A — HTML file (recommended)

1. Google provides a file named `google<random>.html` (for example
   `googlea1b2c3d4e5f6.html`).
2. Copy that file into this project's `public/` directory, next to
   `public/images/`. Next.js serves everything in `public/` from the site root,
   so it becomes `https://explore-shanxi.vercel.app/googlea1b2c3d4e5f6.html`.
3. Commit and push. After Vercel redeploys, click **Verify**.

### Option B — Meta tag

1. Google shows a meta tag like:
   `<meta name="google-site-verification" content="..." />`.
2. Add the `content` value to `src/app/layout.tsx` in the `metadata` export:

   ```ts
   export const metadata: Metadata = {
     // ...existing fields
     verification: {
       google: "PASTE_THE_CONTENT_VALUE_HERE",
     },
   };
   ```

3. Redeploy and click **Verify**.

> Do not commit a guessed or placeholder verification code. Wait for the real
> code from Search Console.

### Option C — DNS TXT (not recommended here)

Requires adding a TXT record to the `vercel.app` domain, which you cannot do for
a subdomain you don't own. Skip this option.

## 3. Submit the sitemap

After verification, go to **Sitemaps** in the left menu and submit:

```
sitemap.xml
```

The full URL is `https://explore-shanxi.vercel.app/sitemap.xml`. The sitemap is
generated automatically from the data files, so new attractions, destinations
and transport routes appear without further changes.

## 4. Check index status

- **URL inspection** (top search bar): paste a URL such as
  `https://explore-shanxi.vercel.app/attractions/yungang-grottoes` to see
  whether it is indexed, and to request indexing after content changes.
- **Pages** report: see how many pages are indexed and any that are excluded or
  have errors.
- **Performance** report: search impressions and clicks by query and page. This
  becomes the primary measurement source (see `SEO_MEASUREMENT_PLAN.md`).

## 5. What to expect

- Verification and indexing are not instant. A small new site may take days to
  weeks to be fully indexed. This document cannot promise a timeframe or ranking.
- Search performance data only appears after verification and after Google has
  started showing the site in results.

## Notes

- The site has no `noindex` directives and `robots.txt` allows crawling.
- All public pages have self-referencing canonical tags based on
  `NEXT_PUBLIC_SITE_URL` (or Vercel's automatic production URL).
- The `/api/inquiries` endpoint and the 404 page are correctly excluded from the
  sitemap.
