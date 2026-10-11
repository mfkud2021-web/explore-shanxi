# SEO Measurement Plan — Explore Shanxi (V4.0)

Date: 2026-10-11

## Purpose

Measure whether the SEO and content work in this release actually brings
overseas independent travellers to the site, and turn that into the next round
of content decisions. The approach is deliberately low-cost and
privacy-friendly: it starts with Google's own free tools and only considers
third-party analytics as an optional, opt-in later step.

No traffic figures are invented here. All numbers come from real tools only
after the site is live and indexed.

## Measurement sources

### 1. Google Search Console (primary, free)

This is the single most important source and requires no additional code on the
site. Setup steps are in `SEARCH_CONSOLE_SETUP.md`.

What to read, monthly:

- **Performance → Queries** — which search terms generate impressions and
  clicks, and at what average position. Map these back to the keyword clusters
  in `SEO_KEYWORD_PLAN.md` to see which themes are working.
- **Performance → Pages** — which landing pages receive impressions/clicks. This
  shows whether the enhanced pages (`/trip-planner`, `/transport/*`,
  `/black-myth-wukong`, `/destinations/datong`) are actually being found.
- **Pages (index coverage)** — how many pages are indexed, and any that are
  excluded or have errors. This validates the sitemap and robots work done in
  Phase 1.
- **URL inspection** — spot-check a page after a content change and request
  re-indexing.

Suggested cadence: check once a week for the first month (indexing of a new
site is slow and uneven), then monthly once a stable baseline exists.

### 2. Optional on-site analytics (not yet integrated)

Google Search Console tells you about *search* traffic, but not about on-site
behaviour such as Trip Planner usage or Private Driver clicks. To measure those,
an on-site analytics tool would be needed. This is **not** being integrated in
this round — it is listed here as a decision for later, with a privacy-first
recommendation:

| Option | Cost | Privacy posture | Fit |
|---|---|---|---|
| **Vercel Web Analytics** (recommended) | Free tier | Cookie-less, no personal data, EU-compliant by design | Native fit; the site is on Vercel |
| Self-hosted Plausible / Umami | Hosting cost | Cookie-less, no personal data | More control, more upkeep |
| Google Analytics 4 | Free | Cookie + consent management required | Least aligned with the site's privacy posture |

Recommendation: if on-site behaviour is wanted, enable **Vercel Web Analytics**
first. It is cookie-less and collects no personal data, so it fits the site's
current "no tracking" stance. Before enabling any option, update the privacy
notice to name the tool and what it records.

### 3. Inquiry conversion (reserved, not yet measurable)

The `/api/inquiries` endpoint and the inquiry form are **not configured for
production** yet (see the honest status note shown on the form). Conversion
measurement — how many visitors submit an inquiry, and how many become real
transport arrangements — is therefore reserved until the email service is
configured. When that happens, measure:

- Inquiry form submissions (successful 201 responses).
- Completion rate of the form vs. page views.
- (Operational) response rate and outcome, tracked outside the site.

No fake orders, reviews or conversion numbers will be reported before the
service is real.

## What to measure (KPIs)

Directional indicators only — no target numbers are promised because ranking and
indexation time cannot be predicted:

1. **Indexation** — number of pages indexed in Search Console, compared against
   the sitemap total. Expect it to be partial at first and grow over weeks.
2. **First impressions & clicks** — from which target queries, and on which
   pages (mapped to `SEO_KEYWORD_PLAN.md`).
3. **Click-through rate** — which high-impression queries have low CTR; these
   are candidates for title/description improvement.
4. **Engagement (if analytics added later)** — Trip Planner visits and route
   generations, Private Driver page visits and inquiry attempts.

## How to act on the data

- **High impressions, low clicks** → rewrite the page title/description (the
  page is being seen but not chosen).
- **Low impressions for a target keyword** → the page exists but isn't ranking;
  revisit the content and internal links, or confirm the page is indexed.
- **High clicks, no inquiries** → the content works but the conversion path
  (private driver / inquiry) needs attention once the service is live.

## Privacy notes

- The site currently ships no analytics or tracking scripts. The privacy notice
  already states that the inquiry form implies no analytics or tracking consent.
- Do not add any analytics tool, cookie banner, or third-party script without
  first updating the privacy notice and, where a tool is not cookie-less,
  adding consent.
- No personal or sensitive data is collected for measurement. Search Console
  reports aggregate, anonymised search performance; it does not expose
  individual visitors.

## Out of scope (do not do)

- Do not scrape Google SERPs to estimate rankings or volume.
- Do not report invented traffic, ranking or conversion figures.
- Do not self-integrate third-party analytics or connect external accounts
  without explicit sign-off — provide this plan for review instead.

## Related documents

- `SEARCH_CONSOLE_SETUP.md` — how to verify and submit the sitemap.
- `SEO_KEYWORD_PLAN.md` — the keyword clusters this plan measures against.
