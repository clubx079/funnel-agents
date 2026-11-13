# Page plan: 59 new guides for agents (Nov 12, 2026)

Every page answers ONE search that real-estate agents in Paraguay really type. Evidence: Google autocomplete with `gl=py`, run 2026-11-12:
- `C:\Users\HP\Desktop\airosofts\research_notes\Casa Libre SEO funnel sites\agent_keywords_autocomplete_2026-11-12.json` (100 seeds and their suggestions)
- `C:\Users\HP\Desktop\airosofts\research_notes\Casa Libre SEO funnel sites\agent_keywords_and_content_gaps.md` (earlier sweep, the profession vocabulary, market facts in section 4, questions in section 5)

The H1 is that search, written the way agents type it (with correct accents). Cover the listed variants as H2s or FAQ questions.

Read `content/SCHEMA.md` first (file shape, Casa-Libre-only rule, links, honesty, wording) and one finished page as a model (`content/pages/como-captar-propiedades.js`). On top of SCHEMA, for these pages:

- **Length:** 1,000 to 1,500 words as `npm run check` counts them (city market pages 800 to 1,100).
- **Casa-Libre body links (changed 2026-11-13):** AT MOST 4 per page (city pages at most 3, because the template adds the city button), counting inline links and the button of a `casalibre` block; at most 1 `casalibre` block. With the header, footer, sticky bar, `cta` and `closing` buttons every rendered page stays at about 10 Casa-Libre links. Most anchors are just the brand ("Casa-Libre") or a plain phrase; a descriptive anchor may be used on one page only (`npm run check` fails on a repeat). Agents' main destination is `https://casa-libre.com.py/empresas`; rental pages keep rental destinations (`/administracion-de-propiedades`, `/alquilar`, `/propiedades?op=alquiler…`), city pages keep the city's listing pages.
- **What Casa-Libre offers agents** (from Casa-Libre's own llms.txt, use only this): inmobiliarias and agents publish free, alongside private owners, in the same search and on the same map; interested people write to the agency's agents directly by WhatsApp and the contacts belong to the agency; no commission on the sale or rental; business account at /empresas; apps for iPhone and Android; listings in guaraníes and dollars, on the map; drafts; Verificado badge and home-page highlight are optional paid extras (no prices); rental management for owners at /administracion-de-propiedades. Never "the largest", never numbers of users or listings.
- **Internal links:** 3 to 5 to other guides of this site (slugs in `lib/site.js` GUIDES; a planned slug may not exist yet, that is fine, link it anyway if it is in GUIDES). The template already lists the other guides of the same group, so prefer links to OTHER groups.
- **Different from its neighbours:** never repeat another page's main answer; summarise in one sentence and link to it.
- **No other websites, apps or brands named.** Searches like "como publicar propiedades en facebook", "instagram inmobiliario", "tiktok inmobiliario", "chatgpt para agentes inmobiliarios", "crm inmobiliario" must be answered WITHOUT naming any network, app or software: say "redes sociales", "la red de fotos", "videos cortos", "grupos de compra y venta", "herramientas de inteligencia artificial", "un CRM". Only WhatsApp, iPhone and Android may be named. The checker fails on Facebook, Marketplace, Instagram, TikTok, Google, YouTube and portal or franchise names; also do not name ChatGPT, Canva, Excel or any software.
- **Data:** `content/data/py-market.json` = Casa-Libre's own Paraguay listings snapshot (Nov 12 2026: 2,665 active listings, 14 cities). Always say what it is: "según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026 (precios pedidos, no precios de cierre)". USD as given; guaraníes = USD × 7.300, rounded, "aprox.". Null = too few listings: say so.
- **Never invent:** no salaries, conversion rates, percentages of buyers, market sizes, laws or fees beyond the notes; no neighbourhoods, landmarks or "zona en crecimiento" claims.
- `review: 'pending'` (with reviewNote and the warn callout) whenever a page states a legal, contract, tax, fee, licence, residency or commission fact.
- Every page: `published` and `updated` = '2026-11-12'; `cta.href` = 'https://casa-libre.com.py/empresas' unless the page is about rentals management (`/administracion-de-propiedades`) or a city (`/empresas`); `closing.href` = '/empresas' or '/publicar'.
- Templates and examples (scripts, messages, ads, prompts, plans) are welcome: they are what agents look for. Label invented examples "Ejemplo ilustrativo" and use Paraguayan voseo.

## Guías principales (1 new)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| donde-publicar-propiedades-gratis | Dónde publicar propiedades gratis en Paraguay | donde publicar propiedades gratis; donde publicar propiedades en venta gratis; donde publicar propiedades para alquilar; donde publicar propiedades para vender | what "gratis" can hide (generic, no names), checklist to judge a site, publishing the whole cartera free on Casa-Libre step by step, for sale and for rent, sharing the link on WhatsApp and redes sociales |

## Captar propiedades (8)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| como-captar-propiedades-en-exclusiva | Cómo captar propiedades en exclusiva | como captar propiedades en exclusiva; contrato de exclusividad; autorizacion de venta exclusiva | why owners refuse exclusivity, what to offer in return (plan, reports, exposure on Casa-Libre), the conversation step by step, length of the exclusivity (customary, no law), link to the contract pages |
| como-captar-propiedades-para-alquilar | Cómo captar propiedades para alquilar | como captar propiedades para alquilar; administracion de propiedades en renta | where rental owners are, what they worry about (tenant, guarantee, payments), offering management, rental data from py-market.json, Casa-Libre rental pages and /administracion-de-propiedades |
| como-captar-propiedades-asesor-principiante | Cómo captar propiedades si sos asesor principiante | como captar propiedades para un asesor principiante; como empezar a captar | first 90 days plan (table by week), zone choice, circle of contacts, owners who already publish, first listings on Casa-Libre free, mistakes of beginners |
| como-conseguir-propiedades-para-vender | Cómo conseguir propiedades para vender | como conseguir propiedades para vender; como conseguir contactos para vender propiedades; como conseguir captaciones inmobiliarias | sources of listings (table: source, effort, cost), owners who publish on Casa-Libre por su cuenta (respectful contact), signs, referrals, developers, inheritances, tracking |
| que-decirle-a-un-propietario-para-captar | Qué decirle a un propietario para captar su propiedad: guion | que decirle a un propietario para captar; guion para captar propiedades; mensaje para captar propiedades por whatsapp | a full call script and a WhatsApp script (Ejemplo ilustrativo), the 5 questions to ask, answers to "no quiero inmobiliaria", "ya lo publiqué yo", "cuánto cobrás", what not to promise |
| farming-inmobiliario | Farming inmobiliario: cómo trabajar una zona | farming inmobiliario; farming geografico inmobiliario; como hacer farming inmobiliario | what it is, choosing the zone with Casa-Libre data (city counts from py-market.json and the city pages), the monthly routine, what to give neighbours (zone price report), measuring it |
| prospeccion-inmobiliaria | Prospección inmobiliaria: técnicas para conseguir clientes | prospeccion inmobiliaria; tecnicas de prospeccion inmobiliaria; llamadas en frio inmobiliaria | active vs passive prospecting (table), cold calls and messages done respectfully (consent, hours), daily block, pipeline numbers to track (no invented rates), Casa-Libre as the passive channel |
| como-pedir-referidos-inmobiliarios | Cómo pedir referidos a tus clientes inmobiliarios | como pedir referidos a mis clientes; como pedir referidos por whatsapp; referidos inmobiliarios | when to ask (after closing, after a good visit), exact messages (Ejemplo ilustrativo), thanking, a referral list, sharing a Casa-Libre listing link that clients can forward |

## Clientes y ventas (10)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| como-conseguir-clientes-para-mi-inmobiliaria | Cómo conseguir clientes para mi inmobiliaria | como conseguir clientes para mi inmobiliaria; como captar clientes para agencia inmobiliaria | agency-level plan (owners and buyers), team routines, brand, publishing every listing on Casa-Libre with the agency account (/empresas), WhatsApp response times, measuring per channel |
| como-generar-leads-inmobiliarios | Cómo generar leads inmobiliarios | como generar leads inmobiliarios; conseguir leads inmobiliarios; comprar leads inmobiliarios | what a lead is, organic vs paid vs bought (risks of bought lists, consent), Casa-Libre contacts by WhatsApp that belong to the agency, qualifying, follow-up |
| como-vender-propiedades-por-internet | Cómo vender propiedades por internet | como vender propiedades por internet; como vender mas propiedades por internet | the online listing (photos, text, price in Gs. and USD, map), where to publish (Casa-Libre), sharing one link, answering fast, virtual visits by video call, closing offline with the escribano |
| como-vender-una-propiedad-rapido | Cómo vender una propiedad rápido | como vender una propiedad rapido; como vender terrenos rapido | honest: price vs similar listings on Casa-Libre, papers ready, listing quality, response time; a 30-day plan; when to adjust the price |
| como-cerrar-una-venta-inmobiliaria | Cómo cerrar una venta inmobiliaria | como cerrar una venta inmobiliaria; tecnicas de cierre inmobiliario | the steps from offer to escritura (seña, contrato privado, escribano: general, link out to nothing, review pending), closing questions, what to prepare, common breakdowns |
| manejo-de-objeciones-inmobiliarias | Manejo de objeciones inmobiliarias: respuestas | objeciones inmobiliarias; objeciones en ventas inmobiliarias; manejo de objeciones inmobiliarias | table of 12 objections from owners and buyers with a suggested answer each (Ejemplo ilustrativo), the method (listen, ask, answer, confirm) |
| como-negociar-el-precio-de-una-propiedad | Cómo negociar el precio de una propiedad | como negociar el precio de una propiedad | preparing with comparable listings on Casa-Libre, anchors, counter-offers, what besides price (plazos, cuotas, muebles), writing it down, Ejemplo ilustrativo with numbers |
| open-house-inmobiliario | Cómo hacer un open house inmobiliario | open house inmobiliario; como hacer un open house inmobiliario; como mostrar una propiedad | when it works, planning, invitation by WhatsApp and a Casa-Libre listing link, safety, the day's checklist, follow-up |
| whatsapp-para-inmobiliarias | WhatsApp para inmobiliarias: mensajes y seguimiento | whatsapp business inmobiliaria; mensajes para clientes inmobiliarios; como hacer seguimiento a clientes inmobiliarios; como responder a un cliente inmobiliario | WhatsApp Business setup (catalog, labels, quick replies), first-response templates, follow-up sequence (day 0, 2, 7), qualifying questions, how Casa-Libre enquiries arrive on WhatsApp |
| como-vender-propiedades-a-extranjeros | Cómo vender propiedades a extranjeros en Paraguay | como vender propiedades a extranjeros; como vender terrenos a extranjeros; como conseguir compradores en el extranjero | who buys from abroad (generic), remote process (video visits, power of attorney with the escribano: review pending), prices in USD, Casa-Libre listings readable in English (the site has an English view? NO: do not claim it), payments and the escribano, link to the extranjero guide |

## Terrenos y proyectos (4)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| como-vender-terrenos-rapido | Cómo vender terrenos rápido | como vender terrenos rapido; como vender terrenos; como vender terrenos en paraguay; como vender terrenos por internet | price per m² with py-market.json (terreno_usd_per_m2_median by city), papers of the land, plano and location, photos and drone-free tips, filtered Casa-Libre links to terrenos in several cities |
| venta-de-terrenos-en-cuotas-paraguay | Venta de terrenos en cuotas en Paraguay | venta de terrenos en cuotas; venta de terrenos en paraguay a cuotas; venta de terrenos pago en cuotas | how cuotas sales work (contract, title stays until paid: review pending), risks for both sides, how to advertise "en cuotas", Ejemplo ilustrativo of a plan, filtered Casa-Libre terrenos links |
| loteamientos-paraguay | Loteamientos en Paraguay: cómo vender lotes | loteamientos paraguay; ley de loteamientos paraguay; como vender lotes de terreno; loteamientos en luque | what a loteamiento is, permits in general terms (municipality: review pending, no law numbers unless in the notes), marketing a loteamiento, publishing each lot on Casa-Libre, filtered terrenos links for Luque, Areguá-free (no Areguá page exists: use Luque, Capiatá, Limpio via filtered search) |
| como-vender-departamentos-en-pozo | Cómo vender departamentos en pozo | como vender departamentos en pozo; preventa departamentos | what selling en pozo means, what buyers ask (plazos, entrega, garantías: general), materials to prepare, Asunción departamentos data from py-market.json, Casa-Libre (developers publish projects there: allowed fact "Property developers list new projects and pre-construction units") |

## Precio y contratos (7)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| como-tasar-una-propiedad | Cómo tasar una propiedad: guía para agentes | como tasar una propiedad; como tasar una propiedad gratis; como tasar una propiedad online | agent estimate vs professional appraisal (tasador: review pending), the comparison method with Casa-Libre listings, adjustments table, presenting it to the owner, city medians from py-market.json |
| analisis-comparativo-de-mercado-inmobiliario | Análisis comparativo de mercado inmobiliario (ACM) | acm inmobiliario; analisis comparativo de mercado inmobiliario; como hacer un analisis comparativo de mercado inmobiliario | what an ACM is, step by step with Casa-Libre searches (filtered links), a fill-in table template, Ejemplo ilustrativo with numbers, how to present it |
| contrato-de-corretaje-inmobiliario | Contrato de corretaje inmobiliario en Paraguay | contrato de corretaje inmobiliario; contrato de corretaje inmobiliario con exclusividad; modelo | what it is, clauses to include (list, general), commission clause (customary, link to comision page), no law in force (per notes; review pending), Ejemplo ilustrativo outline (not a legal template) |
| autorizacion-de-venta-inmobiliaria | Autorización de venta inmobiliaria: modelo | autorizacion de venta inmobiliaria; autorizacion de venta inmobiliaria modelo; autorizacion de venta exclusiva | what it authorises, fields of a model (outline), exclusive vs not, revoking (general, review pending), checking the owner's title first |
| contrato-de-exclusividad-inmobiliaria | Contrato de exclusividad inmobiliaria | contrato de exclusividad inmobiliaria; contrato de exclusividad inmobiliaria modelo | what exclusivity commits each side to, duration, what the agent promises (marketing plan incl. Casa-Libre), ending it, outline (review pending), link to captar en exclusiva |
| compartir-comision-inmobiliaria | Compartir comisión inmobiliaria con otra inmobiliaria | compartir comision inmobiliaria; carta para compartir comision inmobiliaria; como trabajar con otras inmobiliarias | how co-brokerage works (customary split, no official figure), writing it down, a message/letter template (Ejemplo ilustrativo), finding colleague listings on Casa-Libre (agencies publish side by side) |
| cuanto-cobra-una-inmobiliaria-por-alquilar | Cuánto cobra una inmobiliaria por alquilar | cuanto cobra una inmobiliaria por alquilar una casa / un departamento; comision inmobiliaria alquiler paraguay | customary one month + IVA (as in the comision page notes; review pending), who pays, management fees (no invented %), Ejemplo ilustrativo with Asunción rent medians from py-market.json |

## Marketing inmobiliario (8)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| marketing-inmobiliario-digital | Marketing inmobiliario digital: guía práctica | marketing inmobiliario; marketing inmobiliario digital; marketing digital inmobiliario gratis | the funnel for agents (table), listing on Casa-Libre as the base, WhatsApp, redes sociales, content, measuring; what is free |
| plan-de-marketing-inmobiliario | Plan de marketing inmobiliario: ejemplo | plan de marketing inmobiliario; plan de marketing inmobiliario ejemplo | a one-page plan template (table: objetivo, canal, acción, frecuencia, medición), Ejemplo ilustrativo for a small agency in Asunción, monthly calendar |
| como-publicar-propiedades-en-redes-sociales | Cómo publicar propiedades en redes sociales | como publicar propiedades en facebook; como publicar propiedades en instagram; facebook marketplace inmobiliaria; redes sociales para inmobiliarias | DO NOT NAME NETWORKS: generic "redes sociales", "grupos de compra y venta", "publicaciones de fotos", "videos cortos"; post formats, copy template, always linking the full Casa-Libre listing, answering by WhatsApp |
| ideas-de-contenido-para-inmobiliarias | Ideas de contenido para inmobiliarias | ideas de contenido para inmobiliaria; contenido para redes sociales inmobiliarias; ideas para publicaciones de inmobiliarias | 30 ideas (table by type: propiedad, zona, consejo, proceso, cliente), using Casa-Libre zone data and Casa-Libre guides as content, a weekly calendar |
| videos-inmobiliarios | Videos inmobiliarios: cómo grabarlos con el celular | video inmobiliario; video marketing inmobiliario; tiktok inmobiliario; tour virtual inmobiliario | shot list, vertical vs horizontal, script of 30 seconds (Ejemplo ilustrativo), virtual tour by video call, where to put the video (the Casa-Libre listing, WhatsApp), no network names |
| fotos-inmobiliarias | Fotos inmobiliarias con el celular: guía para agentes | fotos inmobiliarias; fotos inmobiliarias profesionales; fotos para inmobiliarias | equipment-free tips, room-by-room shot list table, light, order of photos, editing basics without naming apps, uploading to Casa-Libre from iPhone or Android |
| como-describir-una-propiedad-en-venta | Cómo describir una propiedad en venta: ejemplos | como describir una propiedad en venta; descripcion de propiedades ejemplos; titulos para anuncios inmobiliarios | formula for titles, description structure, 4 examples (casa, departamento, terreno, alquiler: Ejemplo ilustrativo), words to avoid, publishing it on Casa-Libre |
| publicidad-inmobiliaria-ejemplos | Publicidad inmobiliaria: ejemplos que funcionan | publicidad inmobiliaria; publicidad inmobiliaria ejemplos; publicidad inmobiliaria creativa | ad types (table), 8 example ads for Paraguay (Ejemplo ilustrativo), seasonal ideas, paid vs free, always pointing to the Casa-Libre listing |

## Herramientas (5)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| crm-inmobiliario-gratis | CRM inmobiliario gratis: qué necesita un agente | crm inmobiliario; crm inmobiliario gratis; crm inmobiliario gratis y facil para agentes independientes | what a CRM must do (table of features), starting free (a spreadsheet structure: columns), pipeline stages, how Casa-Libre WhatsApp enquiries feed it; NO software names |
| inteligencia-artificial-para-inmobiliarias | Inteligencia artificial para inmobiliarias | inteligencia artificial inmobiliaria; ia para agentes inmobiliarios; como usar la ia para captar clientes inmobiliarios; cual es la mejor ia para agentes inmobiliarios | tasks AI helps with (descriptions, replies, plans, translations), limits and checks (never invent data, privacy), examples, no tool names |
| prompts-de-ia-para-inmobiliarias | Prompts de IA para inmobiliarias: 25 ejemplos | prompts para inmobiliarias; prompts de chatgpt para inmobiliarias; chatgpt para agentes inmobiliarios | 25 ready prompts in Paraguayan Spanish grouped by task (table or lists), how to fill them with Casa-Libre listing data, review before publishing; never name the tools |
| como-hacer-una-pagina-web-inmobiliaria | Cómo hacer una página web inmobiliaria | como hacer una pagina web inmobiliaria | what the site needs (pages, contact by WhatsApp), why listings also belong on Casa-Libre (where people search), linking each property to its Casa-Libre listing, costs in general, no platform names |
| administracion-de-propiedades-en-alquiler | Administración de propiedades en alquiler | administracion de propiedades; como administrar alquileres; administracion de propiedades en renta | what managing a rental includes (table of tasks), fees customary (no invented %; review pending if stated), contract and guarantee basics, Casa-Libre rental management for owners (/administracion-de-propiedades) and rental listings |

## La profesión en Paraguay (2)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| como-abrir-una-inmobiliaria-en-paraguay | Cómo abrir una inmobiliaria en Paraguay | como abrir una inmobiliaria en paraguay | steps (business registration, RUC, municipal licence: general and review pending), no corretaje law in force (notes), costs in general, first listings, agency account on Casa-Libre (/empresas) |
| curso-agente-inmobiliario-paraguay | Curso de agente inmobiliario en Paraguay: qué aprender | curso agente inmobiliario paraguay; agente inmobiliario paraguay; asesor inmobiliario paraguay | no mandatory licence (notes), what a good course covers (table), learning by doing, free resources (this site's guides and Casa-Libre's guides), never name course providers |

## Mercado e inversión (4)

| slug | H1 | Searches | Must cover |
|---|---|---|---|
| mercado-inmobiliario-paraguay | Mercado inmobiliario en Paraguay: datos por ciudad | mercado inmobiliario paraguay | the py-market.json snapshot: listings per city, medians for casas, departamentos, terrenos, rent; a big table of the 14 cities; what agents can learn; filtered Casa-Libre links per city |
| precio-del-metro-cuadrado-en-asuncion | Precio del metro cuadrado en Asunción y Gran Asunción | precio del metro cuadrado en asuncion | land USD/m² medians by city from py-market.json (only where present), how to compute m² prices from listings, Ejemplo ilustrativo, filtered terrenos links |
| inversion-inmobiliaria-paraguay | Inversión inmobiliaria en Paraguay: rentabilidad por ciudad | inversion inmobiliaria paraguay; inversion inmobiliaria asuncion paraguay | gross rent yields from py-market.json (casa and departamento, with the caveats: asking prices, small samples, San Bernardino seasonal, CDE small sample), how agents present it to investors, costs not included, Casa-Libre rental and sale pages |
| comprar-propiedad-en-paraguay-siendo-extranjero | ¿Puedo comprar una propiedad en Paraguay siendo extranjero? | puedo comprar una propiedad en paraguay siendo extranjero; residencia paraguay | general answer as the notes give it (review pending: residency is a separate process, border-zone rules if in the notes only), the process with the escribano, how agents help foreign buyers, Casa-Libre listings |

## Mercado por ciudad (10 pages: `mercado-inmobiliario-en-<city>`)

Cities (keys in py-market.json): asuncion, luque, san-lorenzo, lambare, fernando-de-la-mora, capiata, mariano-roque-alonso, ciudad-del-este, encarnacion, san-bernardino.

- H1 `Mercado inmobiliario en <Ciudad>`; title like `Mercado inmobiliario en <Ciudad>: precios y oferta` (50 to 62 characters).
- Searches: mercado inmobiliario <ciudad>; inmobiliarias en <ciudad>; precio de casas en <ciudad>; vender propiedades en <ciudad>.
- Written FOR AGENTS working the city: the snapshot table (for sale and for rent counts, medians and ranges), what sells and rents there per the data, price per m² of land where present, how to work the zone (farming, captar), which Casa-Libre pages to use: the city's path pages from casalibre-links.json and filtered searches for the rest (terrenos always filtered).
- Each city page must read differently: its own numbers, its own comparisons with the other cities (compute from the JSON), vary section order and FAQ.
- Never invent neighbourhoods, landmarks, growth or "polo" claims. Population only if in the notes (keyword notes, "Population context").
- Added 2026-11-13: each city page has one short paragraph of well-known public geography (the river, lake, bridge, airport, university or route the city is known for) so the pages do not read as the same text with the city swapped. Only facts any Paraguayan reader would confirm; no numbers, no growth or price claims. The native reader checks these paragraphs.
