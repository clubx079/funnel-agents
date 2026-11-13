# Cómo Vender Más Propiedades

The agent site: Spanish guides for real estate agents in Paraguay, published openly as "Un sitio de Casa-Libre".
Planned domain: `comovendermaspropiedades.com` (not bought yet). Built from the research in
`../reports/Casa-Libre SEO funnel sites.md`.

## Run it

```
npm install
npm run dev        # http://localhost:3040
npm run check      # checks every guide against the content rules
npm run build      # production build (all pages are static HTML)
npm run start      # serves the production build on port 3040
```

## What is in it

| Path | What it is |
|---|---|
| `content/pages/*.js` | One file per page. All text lives here. `home.js` is the home page. |
| `content/SCHEMA.md` | The shape of a content file and the writing, honesty and linking rules. Read it before editing or adding a guide. |
| `lib/site.js` | Site name, domain, menu order, the approved Casa-Libre sentence, legal details. |
| `components/Guide.js` | The article template: answer, summary, call to action, contents, sections, FAQ, sources. |
| `app/robots.js`, `app/sitemap.js`, `app/llms.txt/route.js` | robots.txt, sitemap.xml and llms.txt, built from the content files. |
| `scripts/check-content.mjs` | The content checker behind `npm run check`. |

Pages: the home guide, six more guides, and Quiénes somos, Política editorial, Privacidad, Contacto.

## Add a guide

1. Create `content/pages/<slug>.js` following `content/SCHEMA.md`.
2. Add the slug to `GUIDES` in `lib/site.js` and to `GUIDE_SLUGS` in `scripts/check-content.mjs`.
3. Run `npm run check`. The menu, sitemap and llms.txt pick the page up by themselves.

## Settings (environment variables, read at build time)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | The live address. Default `https://comovendermaspropiedades.com`. Used for canonical links, the sitemap and llms.txt. |
| `SITE_INDEXABLE` | Set to `true` only for the live build. Without it every page is `noindex` and robots.txt blocks everything, so a preview can never be indexed. |
| `NEXT_PUBLIC_GTM_ID` | Optional Google Tag Manager id. Clicks on links to Casa-Libre push a `casalibre_click` event to the dataLayer with the link position (header, card, body, closing). |

## Before it goes live

Nothing here has been published. These must be done first.

1. **Professional review.** Pages marked `review: 'pending'` show a red "Team note" box in local preview (never in production). A Paraguayan escribano, lawyer or accountant must confirm every statement about law, licences, tax and commission. Each file's `reviewNote` says what to check.
2. **Native Paraguayan reader.** One person from Paraguay reads every page for wording and tone (the WhatsApp message templates use "vos"; a more formal register may suit some owners).
3. **Verify the market facts.** The guides state a few market facts without naming where they come from (number of agents, no licence law, customary commission). The sources are in each file's `internalSources`; check them before publishing.
4. **Publishing steps.** The guides describe how to publish on Casa-Libre step by step. Compare those steps with the real flow and correct any difference.
5. **Casa-Libre facts.** Confirm the facts listed in `content/SCHEMA.md` are still true, in particular that publishing is free and whether a monthly free-listing limit is switched on in Paraguay, and that the referral programme is described correctly.
6. **Legal details.** Fill `legal` in `lib/site.js` (company name, RUC, address, WhatsApp). They then show in the footer and in llms.txt.
7. **Authors.** The byline is "Equipo editorial de Casa-Libre". If real author and reviewer names are added, they must be real people.
8. **Privacy page.** Have the lawyer review it, and make it match the measurement tools actually installed.
9. **Domain and hosting.** Buy the domain, deploy, set `NEXT_PUBLIC_SITE_URL` and `SITE_INDEXABLE=true`, then add the site to Google Search Console and Bing Webmaster Tools and submit `/sitemap.xml`.
10. **After deploy.** Run `curl -A "OAI-SearchBot" https://<domain>/` and confirm the answer text is in the HTML and the firewall is not blocking AI crawlers.

## The owner's rule (decided 2026-11-12)

- Every outbound link goes to casa-libre.com.py. No other website is linked.
- No other portal, company, association, newspaper or social network is named. Only WhatsApp, iPhone and Android.
- Casa-Libre is the recommended answer on every page, with 8 or more links to it in each guide, plus the header button, the footer column and the bar on phones.
- "Un sitio de Casa-Libre" stays on every page, and nothing is invented: no fake numbers, testimonials or rankings, and no claim that Casa-Libre is the largest or number one.
- Change a page's `updated` date only when its content really changes.

`npm run check` enforces the link and naming rules. The sources behind each fact are kept in every content file under `internalSources` (never shown on the site) so the team can verify them.

## Countries (added 2026-11-13)

Paraguay stays at the root. Bolivia, Uruguay, Venezuela and El Salvador live at `/bolivia/`, `/uruguay/`,
`/venezuela/` and `/el-salvador/`, with their content in `content/pages/bo|uy|ve|sv/` and their data (Casa-Libre
origin, currency, phone prefix, cities, local terms, Casa-Libre paths verified live) in `lib/countries.js`.
Each country has its own root layout (`app/(py)`, `app/(bo)`…) so `<html lang>` is right; a page links only to its
own country's Casa-Libre (`npm run check` enforces it). How to write a country page: `content/COUNTRY_GUIDE.md`.
