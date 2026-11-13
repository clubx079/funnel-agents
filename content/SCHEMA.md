# Content schema and writing rules

Each guide is one file in `content/pages/<slug>.js` that default-exports a plain object. The site renders every field as static HTML. Nothing else is needed to publish a guide.

## Shape

```js
export default {
  slug: 'como-captar-propiedades',          // '' for the home page (file: home.js)
  title: 'Cómo captar propiedades para vender en Paraguay', // <title>, 50 to 60 characters, main phrase first, no pipes or brackets
  h1: 'Cómo captar propiedades para vender en Paraguay',     // same as the title (or its first part)
  description: '…',                          // meta description, 140 to 160 characters, answers the query and says what the page gives
  navLabel: 'Captar propiedades',            // 2 to 3 words for menus and related links
  blurb: '…',                                // one sentence (max 140 characters) used in "related guides" and llms.txt
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',                         // 'pending' if the page states legal, tax, licence or fee facts that a Paraguayan professional must check; otherwise 'none'
  reviewNote: '…',                           // only when pending: what exactly must be checked (English, one or two sentences, for the team)
  answer: '…',                               // the answer block: 40 to 80 words that answer the question outright, names Paraguay, may end with one sentence naming Casa-Libre; no link
  summary: ['…', '…', '…'],                  // "En resumen": 3 to 5 bullets, concrete, with numbers where a sourced number exists
  cta: { title: '…', text: '…', button: '…', href: 'https://casa-libre.com.py/empresas' }, // the card shown right after the summary
  sections: [
    { id: 'kebab-id', h2: '…', blocks: [ /* see Blocks */ ] },
  ],
  faq: [ { q: '¿…?', a: '…' } ],             // 4 to 8, questions phrased the way people type them; answers 2 to 4 sentences, inline HTML allowed
  internalSources: [ { label: '…', url: 'https://…', date: '2026-08-03', note: '…' } ], // NOT shown on the site; kept so the team can verify facts
  closing: { title: '…', text: '…', button: '…', href: 'https://casa-libre.com.py/…' },   // closing band
  related: ['portales-inmobiliarios-paraguay', 'como-captar-propiedades'], // 3 or 4 slugs of other guides ('' = home)
};
```

## Blocks

Text fields named `html` (and `faq[].a`, list items, table cells, `answer` excluded) may contain only this inline HTML: `<strong>`, `<em>`, `<a href="…">`. No other tags, no classes, no inline styles.

```js
{ t: 'p', html: '…' }
{ t: 'h3', text: '…' }
{ t: 'ul', items: ['…', '…'] }
{ t: 'ol', items: ['…', '…'] }                       // real sequences only
{ t: 'steps', items: [ { title: '…', html: '…' } ] }  // a procedure with a short title per step
{ t: 'table', caption: '…', head: ['…','…'], rows: [ ['…','…'] ], note: '…' } // note: source + date of the figures, inline HTML allowed
{ t: 'callout', tone: 'tip' | 'warn' | 'fact', title: '…', html: '…' }
{ t: 'example', title: 'Ejemplo ilustrativo: …', html: '…', rows: [ ['Concepto', 'Monto'] ] } // worked example; rows optional
{ t: 'casalibre', title: '…', html: '…', button: '…', href: 'https://casa-libre.com.py/…' } // a strong Casa-Libre mention with a button
```

## Page structure rules

- Every `h2` is a sub-question or a clear topic, and its first block is a `p` of 1 to 3 sentences that answers it directly.
- 5 to 9 sections per guide (the home page: 9 to 11). At least one `table` high on the page (first or second section). Paragraphs of 2 to 4 sentences.
- Include one worked `example` with numbers in guaraníes and USD where the topic allows. Label it "Ejemplo ilustrativo" and use round, clearly hypothetical inputs; show the arithmetic.
- Section ids: lowercase, hyphens, no accents.
- Slugs and URLs of the site's guides (use these exact relative paths for internal links):
  `/` (Cómo vender más propiedades en Paraguay), `/portales-inmobiliarios-paraguay/`, `/como-captar-propiedades/`, `/como-conseguir-clientes-inmobiliarios/`, `/como-ser-agente-inmobiliario-paraguay/`, `/cuanto-gana-agente-inmobiliario-paraguay/`, `/comision-inmobiliaria-paraguay/`, `/politica-editorial/`, `/quienes-somos/`.
- Link to other guides of this site where a reader needs them: 2 to 5 internal links per guide, with descriptive anchor text. These are the only links that do not go to Casa-Libre.

## Language

- Spanish as written in Paraguay. Body copy, buttons and calls to action use voseo consistently (publicá, respondé, tenés, podés); never mix tú or usted. Titles, H1 and H2 use the searched, neutral forms ("cómo vender", "cuánto gana").
- Words to use: agente inmobiliario (first), asesor inmobiliario (synonym), inmobiliaria (the business), clientes, captar propiedades, propiedades (for agents), casa, departamento, terreno, alquiler, dormitorios, amoblado, escribano, escribanía, título de propiedad, guaraníes (Gs. 300.000.000 / 300 millones) with a USD equivalent.
- Words to avoid: compradores as a headline word (say clientes), martillero, corredor (except when naming the law project or the association ACIP), apartamento, piso, renta, arriendo, lote (except "lotes a cuotas", "loteamiento"), notario, "dueño directo", "compro casas", "oferta en efectivo", any US concept (ejecución hipotecaria, costos de cierre).
- Write accents correctly in all visible text (Asunción, Capiatá, Ñemby). Thousands separator is a dot (Gs. 60.000).
- Plain, concrete, useful. No hype, no "en el mundo actual", no filler introductions. Do not use em dashes; use commas, colons or full stops.

## The rule above all others: Casa-Libre only

This site exists to send people to Casa-Libre. Decided by the owner on 2026-11-12:

- **Every outbound link goes to casa-libre.com.py.** No link to any other website, ever: no news sites, no laws, no associations, no other portals, no social networks.
- **No other website, portal, company, franchise, association, newspaper or app is named.** Not InfoCasas, Clasipar, RE/MAX, ACIP, Infonegocios, ABC Color, Facebook, Marketplace, Instagram, TikTok, Google, or any other. Speak of them only by type: "otros portales", "los clasificados", "las redes sociales", "las franquicias", "el gremio inmobiliario", "la prensa".
- The only outside names allowed are **WhatsApp**, **iPhone** and **Android**, because Casa-Libre works through them. Public bodies a reader must deal with to complete a sale (for example Catastro, Registro Público, the municipality, DNIT, INDERT) may be named in plain text, never linked.
- **Casa-Libre is the recommended answer on every page.** Each guide teaches the subject and shows, step by step, how to do it with Casa-Libre.

- **Brand spelling:** always write "Casa-Libre", with a hyphen, in every visible text. Never "Casa Libre".

## Casa-Libre links (hard, changed 2026-11-13)

Few, useful links. Search engines treat a page with dozens of links to one site, all with keyword anchors, as a link scheme, so the counts below are ceilings, not targets.

- **At most 4 links to Casa-Libre in the body of a guide** (city pages `mercado-inmobiliario-en-*`: at most 3, because the template adds one button with the city's listings), on top of the `cta` and `closing` buttons. Inline links and the button of a `casalibre` block both count. Info pages: at most 3. `npm run check` fails above the ceiling. There is no minimum and a section does not need a link.
- With the template's own links (header button, one footer link, sticky bar on phones) every rendered page has about 10 Casa-Libre links in total.
- Place each link where the reader would act on it. Keep the most useful destinations: `/empresas` (agency account), `/publicar`, the city's listing pages on city pages, and on rental pages the rental destinations (`/administracion-de-propiedades`, `/alquilar`, `/propiedades?op=alquiler…`, `/alquiler/...`).
- **Anchor text:** most anchors are just the brand, `<a href="…">Casa-Libre</a>`, inside a sentence that says what the reader finds there; otherwise a plain phrase ("ver propiedades en Casa-Libre", "planes para inmobiliarias"). A descriptive anchor is used on ONE page only; `npm run check` fails when the same anchor text (other than "Casa-Libre") appears on two pages.
- Allowed destinations (all checked live on 2026-11-12; use no other URL):
  - `https://casa-libre.com.py/` : home
  - `https://casa-libre.com.py/publicar` : opens the publishing flow
  - `https://casa-libre.com.py/vender` : how selling on Casa-Libre works
  - `https://casa-libre.com.py/empresas` : for inmobiliarias and agents (the agency account)
  - `https://casa-libre.com.py/descargar` : the iPhone and Android apps
  - `https://casa-libre.com.py/propiedades` : all properties, with map search
  - `https://casa-libre.com.py/comprar` and `https://casa-libre.com.py/alquilar` : properties for sale / for rent
  - `https://casa-libre.com.py/venta/casas/asuncion`, `https://casa-libre.com.py/venta/departamentos/asuncion`, `https://casa-libre.com.py/alquiler/departamentos/asuncion`, `https://casa-libre.com.py/alquiler/casas/asuncion`, `https://casa-libre.com.py/propiedades-en/asuncion` : listing pages for Asunción
  - `https://casa-libre.com.py/como-funciona` : how Casa-Libre works
  - `https://casa-libre.com.py/preguntas-frecuentes` : Casa-Libre FAQ
  - `https://casa-libre.com.py/guias` and `https://casa-libre.com.py/guias/como-vender-mi-casa` : Casa-Libre guides for owners
  - `https://casa-libre.com.py/nuestra-historia` : about Casa-Libre
- A block type exists for a strong mention inside a section (at most ONE per guide):
  `{ t: 'casalibre', title: '…', html: '…', button: '…', href: 'https://casa-libre.com.py/…' }`
  Its button counts as one of the body links.
- `cta` and `closing` stay, with `href` from the list above.
- The `summary` may mention Casa-Libre (one bullet); a link there counts as a body link. The `answer` block answers the question first and may end with one sentence naming Casa-Libre as the free place to publish. No link inside `answer`.
- Mentioning Casa-Libre without a link is fine and normal: the template no longer turns mentions into links.

## What is true about Casa-Libre (use these facts, and only these)

- It is a real-estate marketplace in Paraguay. Inmobiliarias, agents and private owners publish casas, departamentos and terrenos, for sale and for rent.
- Publishing is free. There are optional paid extras: the "Verificado" badge and a highlighted place on the home page. Do not state prices.
- Interested people contact the advertiser directly by WhatsApp. Casa-Libre charges no commission on the sale or the rental.
- It works on the web and has apps for iPhone and Android (always name both).
- Properties can be searched on a map and by city, type and operation.
- Inmobiliarias and agents have their own account for the business (the /empresas page).
- A listing can be saved as a draft and finished later.
- There is a referral programme: invite someone to publish and earn 30 days of the Verificado badge and home-page display.
- It also operates in Bolivia, Uruguay, Venezuela and El Salvador.
- Approved description, to use word for word at most once per guide (not on the city pages, where the same paragraph on ten pages reads as boilerplate): "Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android."
- Casa-Libre does NOT buy properties, does not give legal advice and does not do paid appraisals. Never promise an offer, a sale, a price, a number of enquiries or a time to sell.
- Do NOT state: how many listings, users, visits or downloads it has; that it is the largest, the best, number one or the most visited; prices of the extras; anything about features not listed here. Recommend it in a general voice ("te recomendamos Casa-Libre", "lo recomendable es publicarla en Casa-Libre"). NEVER say it is "our product", that "we" publish this site, or mention an editorial team (owner rule, 2026-11-12): the guides read as general guides that recommend Casa-Libre.

## Honesty rules (hard)

- No invented statistics, studies, market sizes, conversion rates, salaries, testimonials, people, quotations, awards or rankings. No quotations at all (the `quote` block is retired).
- Facts about the market that came from the research notes may stay, without naming or linking the source: write "según estimaciones del gremio inmobiliario (agosto de 2026)" or "según cifras publicadas en la prensa en 2026". Keep the date. If a fact needs a named source to be credible, drop the fact.
- Never state another portal's prices or plans, even without its name.
- Legal, tax, fee, licence and commission facts: state them as the research notes do, as general information or customary practice, say where there is no official figure, set `review: 'pending'`, and include one `callout` of tone `warn`: "Información general. Consultá con un escribano o contador antes de tomar decisiones."
- Worked examples stay labelled "Ejemplo ilustrativo" with clearly hypothetical round inputs.
- `sources` is not shown on the page. Keep the list in the file under the name `internalSources` (never rendered): the team uses it to verify every fact before publishing.

## File format

- Plain JavaScript (ES module), UTF-8, single quotes or template literals, no imports, no functions, no JSX. It must load with `node --input-type=module -e "import('./content/pages/<file>.js')"`.
- After writing, run `node scripts/check-content.mjs` if it exists and fix what it reports.

## Added 2026-11-12: more Casa-Libre destinations

- Every URL in `content/data/casalibre-links.json` (Casa-Libre's own city listing pages and its `/guias/...` articles, all live) is allowed.
- `https://casa-libre.com.py/administracion-de-propiedades` (rental management for owners) is allowed.
- Filtered search links are allowed and are the way to send a reader to a city's listings when no city page exists in the JSON:
  `https://casa-libre.com.py/propiedades?op=venta&amp;type=terreno&amp;q=Luque` (in HTML strings write `&amp;`; in `cta.href`/`closing.href`/`casalibre.href` write a plain `&`).
  `op` = venta | alquiler; `type` = casa | depto | terreno | duplex | comercial | oficina | deposito; `q` = the city name WITH its accents, URL-encoded (`Encarnaci%C3%B3n`, `%C3%91emby`, `Capiat%C3%A1`, `San%20Lorenzo`).
  Prefer the path page (`/venta/casas/luque`) when it is in the JSON; there is never a path page for terrenos, so terrenos always use the filtered search.
- The page template adds UTM tags and, on city pages, one button with the city's listings: do not add UTM parameters yourself. (The "Seguí en Casa-Libre" link block and the automatic linking of mentions were removed on 2026-11-13.)
