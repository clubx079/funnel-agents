# Adding pages for Bolivia, Uruguay, Venezuela and El Salvador

Paraguay is the original site, at the root (`/como-captar-propiedades/`). Each other country has its own folder
on the site and in the content:

| Country | Code | Site path | Content folder | Its Casa-Libre (the ONLY one it may link to) | Voice |
|---|---|---|---|---|---|
| Bolivia | `bo` | `/bolivia/…` | `content/pages/bo/` | `https://casa-libre.com.bo` | tú |
| Uruguay | `uy` | `/uruguay/…` | `content/pages/uy/` | `https://uy.casa-libre.com` | voseo (vos) |
| Venezuela | `ve` | `/venezuela/…` | `content/pages/ve/` | `https://casa-libre.com.ve` | tú |
| El Salvador | `sv` | `/el-salvador/…` | `content/pages/sv/` | `https://sv.casa-libre.com` | usted |

To add a page you only create one file in the country's folder. Nothing else needs registering: the menu,
the country's `/guias/` index, the sitemap, `llms.txt`, hreflang and the lead form pick it up by themselves.
Country data (name, Casa-Libre origin, currency, phone prefix, cities, local terms, verified Casa-Libre paths)
is in `lib/countries.js`. Read `content/SCHEMA.md` first: every rule there applies here too, except where this
file says otherwise.

A finished example per country: `content/pages/<code>/como-captar-propiedades.js`.

## 1. The file

`content/pages/<code>/<slug>.js`, where `<slug>` is the URL (`/bolivia/<slug>/`). `home.js` is the country's home
page (until it exists the country gets a short generated home with the lead form and the list of guides).

Same shape as a Paraguay page (SCHEMA.md, "Shape"), plus:

```js
export default {
  slug: 'como-captar-propiedades',          // must equal the file name ('' in home.js)
  equivalent: 'como-captar-propiedades',    // OPTIONAL: the Paraguay slug of the SAME topic. Creates hreflang between them.
                                            // Only when the page really answers the same question. Never for city pages.
  group: 'Guías principales',               // REQUIRED: one of GROUPS in lib/site.js (orders the menu and the /guias/ index)
  nav: 'Captar',                            // OPTIONAL: 1 or 2 words; the page then appears in the header menu (keep it to 4 to 6 pages)
  order: 10,                                // OPTIONAL: order inside its group (default 50)
  city: 'santa-cruz-de-la-sierra',          // city pages only: a slug from lib/countries.js <code>.cities
  cityName: 'Santa Cruz de la Sierra',      // city pages only
  cityOp: 'venta', cityType: 'casa',        // city pages only, optional: the city button under the answer (venta|alquiler, casa|depto|terreno)
  // …then title, h1, description, navLabel, blurb, published, updated, review, reviewNote, answer, summary,
  // cta, sections, faq, internalSources, closing, related (slugs of THIS country's pages)
};
```

`review: 'pending'` and a `reviewNote` (English, for the team) on every page that states a legal, tax, fee,
commission, licence or registry fact. All sample pages are pending.

## 2. Casa-Libre links (hard)

- **Only the country's own Casa-Libre.** A Bolivia page links only to `https://casa-libre.com.bo/…`. `npm run check`
  fails on any link (inline, block button, `cta`, `closing`) to another country's Casa-Libre, including Paraguay's.
- **Only verified paths.** The paths that answered 200 on 2026-11-13 are listed per country in `lib/countries.js`
  (`verified`). Use only those, plus the filtered search, which works for any city:
  `<origin>/propiedades?op=venta|alquiler&type=casa|depto|terreno|…&q=<Ciudad con tildes, URL-encoded>`
  (in HTML strings write `&amp;`). To use a new path, check it live first (read-only GET, browser user agent, a
  pause between requests) and add it to `verified`.
- Paths available in every country: `/empresas` (the agency account, the main destination), `/publicar`,
  `/propiedades`, `/comprar`, `/alquilar`, `/administracion-de-propiedades`, `/descargar`, `/como-funciona`,
  `/preguntas-frecuentes`, `/vender`, `/guias` and the 8 owner guides `/guias/…`, and `/propiedades-en/<city>` for
  the 8 cities of each country. City + type pages (`/venta/casas/<city>` …) exist only where listed.
- **Ceilings, same as Paraguay:** at most 4 Casa-Libre links in the body (city pages 3), at most 1 `casalibre`
  block, plus `cta` and `closing`. Rental pages and rental sections keep rental destinations
  (`/administracion-de-propiedades`, `/alquilar`, `op=alquiler` searches).
- **Anchors:** mostly just the brand, `<a href="…">Casa-Libre</a>`, inside a sentence that says what is there; a
  descriptive anchor may be used once per country (the checker fails on a repeat within a country).
- Do not add UTM tags: the template adds them (`utm_campaign=seo-funnel-<code>`).
- Internal links: only to this country's pages (`/bolivia/…`, `/bolivia/guias/`) and the shared pages
  `/privacidad/`, `/quienes-somos/`, `/contacto/`. Never to Paraguay's guides.

## 3. Voice and words

- **Uruguay:** voseo, like Paraguay (publicá, tenés, podés). Say *apartamento*, *escribano*, *gastos comunes*,
  *contribución inmobiliaria*, *U$S* for dollars. Rentals are usually in pesos, sales in dollars.
- **Bolivia:** tú (publica, tienes, puedes). Say *departamento*, *notario de fe pública*, *Derechos Reales*,
  *folio real*, *anticrético*. Prices usually in dollars; the currency is the boliviano (Bs.).
- **Venezuela:** tú. Say *apartamento*, *inmueble*, *asesor inmobiliario*, *honorarios*, *Registro*, *solvencia*.
  Prices in dollars; avoid statements about exchange rates.
- **El Salvador:** usted (publique, tiene, puede). Say *apartamento*, *bienes raíces*, *notario*, *CNR*,
  *colonia*, *residencial*. The currency is the US dollar.
- Wording the checker allows outside Paraguay: *apartamento* (UY, VE, SV), *notario/notaría* (BO, VE, SV),
  *martillero* (UY). Everything else in SCHEMA's "words to avoid" still applies (no em dashes, no "líder", no
  "el más grande", no "dueño directo"…).
- No other website, portal, franchise or company is named, in any country (the checker also knows each country's
  main portals). Public bodies may be named in plain text, never linked (Derechos Reales, BHU, CNR, SENIAT…).

## 4. Honesty

- Real local facts only, never a Paraguay page with the names swapped. Prices, medians, counts, m² values and
  yields come **only** from the country's market file (`content/data/<cc>-market.json`, section 5) and only for the
  cities it lists; anywhere else, worked examples use round, clearly hypothetical numbers labelled "Ejemplo
  ilustrativo", in the country's currency.
- Commission, contract, tax and registry facts: say "es habitual", "suele", give no law numbers unless
  verified, set `review: 'pending'` and include the `warn` callout ("Información general. Consultá/Consulta/
  Consulte con un … antes de firmar.").
- Casa-Libre facts: only those in SCHEMA.md ("What is true about Casa-Libre"). Do NOT use the approved
  Paraguay sentence ("de mayor crecimiento en Paraguay") on other countries' pages, and make no growth or size
  claim about Casa-Libre in any country.

## 5. City pages and market data

Each country has a Casa-Libre listings snapshot with the same shape as `py-market.json`: `bo-market.json`,
`uy-market.json`, `ve-market.json`, `sv-market.json` in `content/data/` (13 Nov 2026, built by
`scripts/build-market.mjs` in the vender-mi-casa site, which writes both sites; re-run it there to refresh). Per city:
`for_sale` / `for_rent` counts by type, USD price quartiles per type (`casas_venta_price`, `departamentos_venta_price`,
`terrenos_venta_price`, `casas_alquiler_price_month`, `departamentos_alquiler_price_month`),
`terreno_usd_per_m2_median`, `casas_venta_median_bedrooms`, gross rent yields and `casa_libre_pages` (Casa-Libre city
pages that answered 200; they are also in `verified`). `departamentos` in the file = departamentos and apartamentos
(write "apartamento" in UY/VE/SV). `null` = fewer than 5 listings with a price: say so, never fill the gap.

Cities with data on 13 Nov 2026 (15+ live listings, as in Paraguay):

| Country | Live listings | Cities (sale + rent listings) |
|---|---|---|
| Bolivia | 388 | `santa-cruz-de-la-sierra` (253), `cochabamba` (32), `la-paz` (30) |
| Uruguay | 514 | `montevideo` (337), `punta-del-este` (25), `maldonado` (24), `ciudad-de-la-costa` (23) |
| Venezuela | 19 | none |
| El Salvador | 98 | none |

City pages are allowed **only for the cities in the file** (Venezuela and El Salvador: none yet). They follow
PLAN.md's "Mercado por ciudad" rules: slug `mercado-inmobiliario-en-<city>`, `city` = the slug in the file (it is also
in `lib/countries.js` cities), `cityName` = its `name`, real local content (zones, who buys and rents, the
municipality), one paragraph of well-known local geography, no `equivalent`. The template adds one button with the
city's listings on that country's Casa-Libre. A country overview page (`mercado-inmobiliario-<pais>`) may compare the
cities of its own file.

The numbers come from the file through the loader, never typed by hand:

```js
import { cityMarket, cityMarketTable, snapshotDateEs } from '../../../lib/market.js';
const m = cityMarket('uy', 'montevideo');      // null when the city has no data -> no city page
export default {
  slug: 'mercado-inmobiliario-en-montevideo', city: 'montevideo', cityName: 'Montevideo', /* ... */
  sections: [{ h2: '...', blocks: [
    cityMarketTable('uy', 'montevideo'),         // ready { t: 'table' } block; rows with no data are left out
    { t: 'p', html: `... mediana de USD ${m.departamentos_venta_price.median_usd.toLocaleString('es')} ...` },
  ] }],
};
```

`marketFor(cc)` = the whole file, `marketCities(cc)` = its city slugs, `localPerUsd(cc)` = its rate, `fmtUsd(n)` =
"USD 155.000", `cityMarketTable(cc, slug, { rent: false })` = sale rows only.

- Always say what the numbers are: "según las propiedades publicadas en Casa-Libre al 13 de noviembre de 2026 (precios
  pedidos, no precios de cierre)". Mention how many listings are behind a median when they are few (under 10).
- Prices in US dollars as in the file. Uruguay: pesos only as "aprox." with `uyu_per_usd`. Bolivia: do not convert
  (Casa-Libre's `bob_per_usd` 6.89 and the parallel market rate differ a lot). Venezuela: no bolívar figures.
- Yields are rough asking-price ratios (`gross_rent_yield_pct`), never a return on investment.
- Casa-Libre links on a city page: only that city's `casa_libre_pages` (or the filtered search).

## 6. Which topics to write

Localise (write fresh for the country, with `equivalent` set to the Paraguay slug):

| Paraguay slug (equivalent) | Notes |
|---|---|
| `''` → `home.js` | The country's home: three levers, local market in general terms, how to work with Casa-Libre there. |
| `como-captar-propiedades` | Done for all four. |
| `como-conseguir-clientes-inmobiliarios` | Local channels, WhatsApp, referrals. |
| `donde-publicar-propiedades-gratis` / `portales-inmobiliarios-paraguay` | Generic ("otros portales"), never named. Use a country slug, e.g. `portales-inmobiliarios-bolivia`, with `equivalent: 'portales-inmobiliarios-paraguay'`. |
| `comision-inmobiliaria-paraguay` | Slug `comision-inmobiliaria-<pais>`. UY: 3% + IVA each party (verify); BO ~3%; VE ~5% honorarios; SV ~5%. Review pending. |
| `como-ser-agente-inmobiliario-paraguay` | Slug `como-ser-agente-inmobiliario-<pais>`. Licensing/registration rules differ: verify before writing. |
| `contrato-de-corretaje-inmobiliario`, `autorizacion-de-venta-inmobiliaria`, `contrato-de-exclusividad-inmobiliaria` | Local contract names and practice; review pending. |
| `como-cerrar-una-venta-inmobiliaria` | Local closing path: BO minuta + notario + Derechos Reales; UY compromiso de compraventa + escribano; VE opción de compraventa + Registro; SV promesa de venta + notario + CNR. |
| `como-tasar-una-propiedad`, `analisis-comparativo-de-mercado-inmobiliario` | Comparables from the country's Casa-Libre search. |
| `whatsapp-para-inmobiliarias`, `marketing-inmobiliario-digital`, `fotos-inmobiliarias`, `como-describir-una-propiedad-en-venta`, `manejo-de-objeciones-inmobiliarias`, `como-pedir-referidos-inmobiliarios` | Mostly practice: rewrite in the local voice, with local examples. |
| `administracion-de-propiedades-en-alquiler`, `como-captar-propiedades-para-alquilar` | Local rental rules and guarantees (UY: BHU/CGN/seguro; VE: housing rental law, careful; BO: anticrético). |

Country-only topics (no `equivalent`):

- **Bolivia:** `anticretico-para-agentes-inmobiliarios` (how to captar and publish anticréticos), `como-vender-terrenos-en-santa-cruz` (urbanizaciones), `documentos-para-vender-un-inmueble-en-bolivia` (folio real, Derechos Reales).
- **Uruguay:** `vivienda-promovida-uruguay` (selling and renting promoted units), `garantias-de-alquiler-uruguay`, `alquileres-de-temporada-punta-del-este`, `comprar-propiedad-en-uruguay-siendo-extranjero`.
- **Venezuela:** `vender-inmueble-desde-el-exterior` (poder, consulate, apostille), `documentos-para-vender-un-inmueble-en-venezuela` (solvencias, SENIAT, Registro), `como-fijar-el-precio-de-un-inmueble-en-dolares`.
- **El Salvador:** `vender-propiedades-a-salvadorenos-en-el-exterior`, `lotificaciones-el-salvador`, `comprar-casa-con-credito-del-fondo-social-para-la-vivienda` (public body, verify), `casas-de-playa-la-libertad`.

Skip (Paraguay-only): every `mercado-inmobiliario-en-<Paraguay city>`, `mercado-inmobiliario-paraguay`,
`precio-del-metro-cuadrado-en-asuncion`, `inversion-inmobiliaria-paraguay` (all built on py-market.json; a country's
own versions are allowed only from its own market file, section 5),
`loteamientos-paraguay`, `venta-de-terrenos-en-cuotas-paraguay`, `comprar-propiedad-en-paraguay-siendo-extranjero`.

## 7. Check before you finish

```
npm run check     # 0 errors: format, links to the right Casa-Libre only, ceilings, anchors, wording
npm run build     # or NEXT_DIST=.next-build npm run build next to the dev server
```

Then open `http://localhost:3040/<pais>/<slug>/` and confirm every `casa-libre` href goes to that country's domain.
