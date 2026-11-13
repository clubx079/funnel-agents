// Checks every page in content/pages (Paraguay) and content/pages/<country>/ against the rules in content/SCHEMA.md.
// Errors fail the run (exit 1). Warnings are advice. Run: npm run check
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'content', 'pages');
const { GUIDES, INFO_PAGES } = await import(pathToFileURL(path.join(root, 'lib', 'site.js')).href);
const INFO = new Set(INFO_PAGES);
const GUIDE_SLUGS = GUIDES.map((g) => g.slug);
const FILE_OF = new Map(GUIDES.map((g) => [g.file || g.slug, g.slug]));
const KNOWN_PATHS = new Set([...[...GUIDE_SLUGS, ...INFO_PAGES].map((s) => (s ? `/${s}/` : '/')), '/guias/']);

// The only outbound destinations allowed (all on Casa-Libre, all checked live).
const CL = 'https://casa-libre.com.py';
const CL_ALLOWED = new Set(['/', '/publicar', '/vender', '/empresas', '/descargar', '/propiedades', '/comprar', '/alquilar',
  '/venta/casas/asuncion', '/venta/departamentos/asuncion', '/alquiler/departamentos/asuncion', '/alquiler/casas/asuncion',
  '/propiedades-en/asuncion', '/como-funciona', '/preguntas-frecuentes', '/guias', '/guias/como-vender-mi-casa', '/nuestra-historia',
].map((p) => CL + p));
CL_ALLOWED.add(CL + '/administracion-de-propiedades');

// …plus Casa-Libre's search with filters applied (city pages link straight to the filtered listings):
// /propiedades?op=venta|alquiler&type=casa|depto|terreno|duplex&q=<city>
const CL_SEARCH = /^https:\/\/casa-libre\.com\.py\/propiedades\?op=(venta|alquiler)&type=(casa|depto|terreno|duplex|comercial|oficina|deposito)(&q=[^&"\s]+)?$/;
const clOk = (h) => CL_ALLOWED.has(String(h)) || CL_ALLOWED.has(String(h).replace(/&amp;/g, '&').replace(/\/$/, '')) || CL_SEARCH.test(String(h).replace(/&amp;/g, '&'));

try {
  const extra = JSON.parse(readFileSync(path.join(root, 'content', 'data', 'casalibre-links.json'), 'utf8')).urls || [];
  for (const u of extra) CL_ALLOWED.add(u.replace(/\/$/, ''));
} catch { /* no data file: the fixed list only */ }

// Other websites, portals, companies and media must not be named.
const NAMES = [/infocasas?/i, /clasipar/i, /nderoga/i, /viviaza/i, /buscocasita/i, /casa ?clic/i, /agentiz/i, /re\/?max/i, /century ?21/i,
  /\bacip\b/i, /capadei/i, /infonegocios/i, /abc color/i, /[uú]ltima hora/i, /facebook/i, /marketplace(?! inmobiliario)/i,
  /instagram/i, /tik ?tok/i, /\bgoogle\b/i, /youtube/i, /mercado ?libre/i, /nexio/i, /ubicaprop/i, /yumblin/i, /zonaprop/i, /inmuebles24/i,
  /homelight/i, /properati/i, /hendyla/i, /buscaescriban[ií]a/i, /holacasa/i, /linkedin/i, /\btwitter\b/i];
const WORDING = [/\bapartamentos?\b/i, /\bnotari[oa]s?\b/i, /\bnotar[ií]as?\b/i, /\bmartilleros?\b/i, /\barriendos?\b/i, /dueño directo/i,
  /compro casas/i, /oferta en efectivo/i, /agregador/i, /—/, /el m[aá]s grande/i, /n[uú]mero uno/i, /\bl[ií]der\b/i];
const BLOCKS = new Set(['p', 'h3', 'ul', 'ol', 'steps', 'table', 'callout', 'example', 'casalibre']);

const strip = (s) => String(s ?? '').replace(/<[^>]+>/g, ' ');
const words = (s) => strip(s).split(/\s+/).filter(Boolean).length;
const hrefs = (s) => [...String(s ?? '').matchAll(/<a\s+href="([^"]+)"/g)].map((m) => m[1]);
const badTags = (s) => [...String(s ?? '').matchAll(/<\/?([a-z0-9]+)[^>]*>/gi)].filter((m) => !['strong', 'em', 'a'].includes(m[1].toLowerCase())).map((m) => m[0]);

let errors = 0, warnings = 0;
// Casa-Libre links in the body of a page (inline links + casalibre block buttons): a ceiling.
const MAX_BODY = 4, MAX_BODY_CITY = 3;
// Descriptive anchor texts used for Casa-Libre links, to keep each one on a single page.
const ANCHORS = new Map();
// ── Countries (2026-11-13) ──────────────────────────────────────────────────────────────────────────────
// Paraguay: content/pages/*.js. Other countries: content/pages/<code>/*.js (bo, uy, ve, sv), see content/COUNTRY_GUIDE.md.
// A page may link ONLY to its own country's Casa-Libre, and only to paths verified in lib/countries.js.
const { COUNTRIES, OTHER_COUNTRIES, countryOfClUrl, isVerifiedClUrl } = await import(pathToFileURL(path.join(root, 'lib', 'countries.js')).href);
const CL_ANY = /https:\/\/((www\.)?casa-libre\.com\.py|casa-libre\.com\.bo|uy\.casa-libre\.com|casa-libre\.com\.ve|sv\.casa-libre\.com)/;
// Words that are wrong in Paraguay but are the normal word elsewhere (Uruguay and Venezuela say "apartamento",
// Bolivia, Venezuela and El Salvador "notario"; Uruguay has "rematadores" and "martilleros").
const W_APTO = /\bapartamentos?\b/i.source, W_NOT1 = /\bnotari[oa]s?\b/i.source, W_NOT2 = /\bnotar[ií]as?\b/i.source, W_MART = /\bmartilleros?\b/i.source;
const WORDING_OK = {
  bo: [W_NOT1, W_NOT2],
  uy: [W_APTO, W_MART],
  ve: [W_APTO, W_NOT1, W_NOT2],
  sv: [W_APTO, W_NOT1, W_NOT2],
};
// Portals and companies of the other countries (never named, like Paraguay's).
const NAMES_MORE = [/ultracasas/i, /gallito/i, /tu ?inmueble/i, /conlallave/i, /encuentra ?24/i, /\bolx\b/i, /corotos/i, /clasificados ?online/i, /chilecasas/i];

const pageFiles = [
  ...readdirSync(dir).filter((f) => f.endsWith('.js')).sort().map((f) => ({ f, full: path.join(dir, f), cc: 'py' })),
  ...OTHER_COUNTRIES.flatMap((cc) => {
    try {
      return readdirSync(path.join(dir, cc)).filter((f) => f.endsWith('.js')).sort().map((f) => ({ f: `${cc}/${f}`, full: path.join(dir, cc, f), cc }));
    } catch { return []; }
  }),
];
const countrySlugs = {};
for (const cc of OTHER_COUNTRIES) countrySlugs[cc] = pageFiles.filter((x) => x.cc === cc).map((x) => (x.f.endsWith('/home.js') ? '' : x.f.slice(3, -3)));
const files = pageFiles;
const seen = new Set();

for (const { f, full, cc } of pageFiles) {
  const name = path.basename(f).replace(/\.js$/, '');
  const C = COUNTRIES[cc];
  const E = [], W = [];
  let p;
  try { p = (await import(pathToFileURL(full).href)).default; } catch (e) { console.log(`\n✗ ${f}\n   ERROR  does not load: ${e.message}`); errors++; continue; }
  const isInfo = cc === 'py' && (INFO.has(name) || p.kind === 'plain');
  const slug = cc !== 'py' ? (name === 'home' ? '' : name) : FILE_OF.has(name) ? FILE_OF.get(name) : name;
  if (p.slug !== slug) E.push(`slug is "${p.slug}", expected "${slug}"`);
  if (cc === 'py') seen.add(slug);
  // the country's own Casa-Libre, its verified paths, its own pages
  const CLc = C.cl;
  const clOkHere = cc === 'py' ? clOk : (h) => isVerifiedClUrl(String(h).replace(/&amp;/g, '&'), cc);
  const known = cc === 'py' ? KNOWN_PATHS
    : new Set([...countrySlugs[cc].map((s) => `${C.prefix}/${s ? s + '/' : ''}`), `${C.prefix}/`, `${C.prefix}/guias/`, ...INFO_PAGES.map((s) => `/${s}/`)]);
  const wordingHere = cc === 'py' ? WORDING : WORDING.filter((re) => !(WORDING_OK[cc] || []).includes(re.source));
  if (cc !== 'py') {
    if (!p.group) E.push('group is required (one of the topic groups in lib/site.js GROUPS)');
    if (p.equivalent !== undefined && !GUIDE_SLUGS.includes(p.equivalent)) E.push(`equivalent "${p.equivalent}" is not a Paraguay guide slug`);
    if (p.city && !C.cities.some(([s]) => s === p.city)) W.push(`city "${p.city}" is not in lib/countries.js ${cc}.cities`);
  }

  const body = [], blockHrefs = [];
  for (const s of p.sections || []) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.id || '')) E.push(`section id "${s.id}" must be lowercase words joined by hyphens`);
    let secLinks = 0;
    for (const b of s.blocks || []) {
      if (!BLOCKS.has(b.t)) E.push(`block type "${b.t}" is not allowed (section ${s.id})`);
      const parts = [b.html, b.text, b.title, b.caption, b.note, b.button];
      for (const it of b.items || []) parts.push(typeof it === 'string' ? it : `${it.title} ${it.html}`);
      for (const r of b.rows || []) parts.push(...r);
      for (const h of b.head || []) parts.push(h);
      if (b.t === 'casalibre') { blockHrefs.push(b.href); secLinks++; if (!clOkHere(b.href)) E.push(`casalibre block href not allowed: ${b.href}`); }
      secLinks += hrefs(parts.join(' ')).filter((h) => h.startsWith(CLc)).length;
      body.push(...parts);
    }
    if (!isInfo && s.blocks?.[0]?.t !== 'p') W.push(`section "${s.id}" should open with a paragraph that answers its heading`);
  }
  for (const q of p.faq || []) body.push(q.q, q.a);
  body.push(...(p.summary || []));
  const bodyText = body.filter(Boolean).join('\n');
  const all = [p.title, p.h1, p.description, p.answer, ...(p.summary || []), p.cta?.title, p.cta?.text, p.cta?.button,
    p.closing?.title, p.closing?.text, p.closing?.button, p.navLabel, p.blurb, ...(p.sections || []).map((s) => s.h2), bodyText].filter(Boolean).join('\n');

  for (const t of badTags(all)) E.push(`HTML tag not allowed: ${t}`);
  const plain = strip(all);
  for (const re of [...NAMES, ...NAMES_MORE]) { if (!re) continue; const m = plain.match(re); if (m) E.push(`names another website or company: "${m[0]}"`); }
  if (/Casa\sLibre/.test(plain)) E.push('write the brand as "Casa-Libre" (with a hyphen) everywhere');
  for (const re of wordingHere) { const m = plain.match(re); if (m) E.push(`wording to avoid: "${m[0]}"`); }
  // every Casa-Libre URL anywhere in the file (links, block buttons, cta, closing) must be this country's
  for (const u of JSON.stringify(p).match(new RegExp(CL_ANY.source + '[^"\\\\\\s<]*', 'g')) || []) {
    const other = countryOfClUrl(u);
    if (other && other !== cc) E.push(`links to another country's Casa-Libre (${COUNTRIES[other].name}): ${u}`);
  }
  for (const h of hrefs(all)) {
    if (h.startsWith('/')) { if (!known.has(h.split('#')[0])) E.push(`internal link to unknown page: ${h}`); }
    else if (h.startsWith('mailto:')) continue;
    else if (countryOfClUrl(h) && countryOfClUrl(h) !== cc) continue; // reported above
    else if (!clOkHere(h)) E.push(`outbound link not allowed (only the ${cc === 'py' ? 'listed' : `verified ${C.name}`} Casa-Libre pages): ${h}`);
  }
  if (p.sources) E.push('rename "sources" to "internalSources" (sources are not shown on the site)');
  if (!p.title || !p.h1 || !p.description) E.push('title, h1 and description are required');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.updated || '') || !/^\d{4}-\d{2}-\d{2}$/.test(p.published || '')) E.push('published and updated must be YYYY-MM-DD');

  let clBody = 0;
  const isCity = cc === 'py' ? Boolean(GUIDES.find((g) => g.slug === slug)?.city) : Boolean(p.city);
  for (const m of all.matchAll(/<a\s+href="(https:\/\/[^"]*casa-libre[^"]+)">(.*?)<\/a>/g)) {
    const t = strip(m[2]).trim();
    const key = `${cc}:${t}`; // anchors must be unique within a country
    if (t !== 'Casa-Libre') (ANCHORS.get(key) || ANCHORS.set(key, []).get(key)).push(f);
  }
  if (isInfo) {
    const n = hrefs(bodyText).filter((h) => h.startsWith(CLc)).length;
    if (n > MAX_BODY_CITY) E.push(`${n} Casa-Libre links in the body (at most ${MAX_BODY_CITY})`);
  }
  if (!isInfo) {
    const tl = [...(p.title || '')].length, dl = [...(p.description || '')].length;
    if (tl < 45 || tl > 62) W.push(`title is ${tl} characters (aim for 50 to 60)`);
    if (dl < 130 || dl > 165) W.push(`description is ${dl} characters (aim for 140 to 160)`);
    const aw = words(p.answer);
    if (aw < 40 || aw > 80) E.push(`answer block is ${aw} words (must be 40 to 80)`);
    if (/<a\s/.test(p.answer || '')) E.push('answer block must not contain links');
    if (!(p.summary?.length >= 3 && p.summary.length <= 5)) E.push('summary needs 3 to 5 bullets');
    if (!(p.sections?.length >= 5)) E.push('at least 5 sections');
    if (!(p.sections || []).some((s) => s.blocks?.some((b) => b.t === 'table'))) E.push('at least one table');
    if (!(p.faq?.length >= 4 && p.faq.length <= 8)) E.push('FAQ needs 4 to 8 questions');
    for (const k of ['cta', 'closing']) if (!p[k]?.href || !clOkHere(p[k].href)) E.push(`${k}.href must be an allowed Casa-Libre URL${cc === 'py' ? '' : ` of ${C.name} (${CLc})`}`);
    // A MAXIMUM, not a minimum (2026-11-13): with the header, footer, sticky bar, cta and closing buttons
    // (and the city button on city pages) every rendered page stays at about 10 Casa-Libre links.
    clBody = hrefs(bodyText).filter((h) => h.startsWith(CLc)).length + blockHrefs.length;
    const max = isCity ? MAX_BODY_CITY : MAX_BODY;
    if (clBody > max) E.push(`${clBody} Casa-Libre links in the body (at most ${max})`);
    if (blockHrefs.length > 1) E.push(`${blockHrefs.length} casalibre blocks (at most 1)`);
    if (!/casa[- ]libre/i.test(strip(bodyText))) E.push('the body never names Casa-Libre');
    const internal = hrefs(bodyText).filter((h) => h.startsWith('/')).length;
    if (internal < 2) W.push(`only ${internal} links to other guides (aim for 2 to 5)`);
    for (const r of p.related || []) if (!(cc === 'py' ? GUIDE_SLUGS : countrySlugs[cc]).includes(r)) E.push(`related: unknown guide "${r}"`);
    if (!(p.related?.length >= 3) && (cc === 'py' || countrySlugs[cc].length > 3)) W.push('related should list 3 or 4 guides');
    if (p.review === 'pending' && !p.reviewNote) W.push('review is pending but reviewNote is empty');
    if (!['pending', 'none'].includes(p.review)) E.push("review must be 'pending' or 'none'");
    if (!p.navLabel || !p.blurb) E.push('navLabel and blurb are required');
  }
  errors += E.length; warnings += W.length;
  const total = words([p.answer, ...(p.summary || []), bodyText, ...(p.sections || []).map((s) => s.h2)].join(' '));
  console.log(`\n${E.length ? '✗' : '✓'} ${f}  (${total} words, ${p.sections?.length || 0} sections${isInfo ? '' : `, ${clBody} Casa-Libre links`}${p.review === 'pending' ? ', review pending' : ''})`);
  for (const e of [...new Set(E)]) console.log(`   ERROR  ${e}`);
  for (const w of W) console.log(`   warn   ${w}`);
}
for (const [t, list] of ANCHORS) {
  if (list.length > 1) { console.log(`
ERROR  the Casa-Libre anchor "${t.slice(t.indexOf(':') + 1)}" is used on ${list.length} pages (${list.join(', ')}): use "Casa-Libre" or a different phrase`); errors++; }
}
const missing = GUIDE_SLUGS.filter((s) => !seen.has(s)).map((s) => s || 'home');
if (missing.length) console.log(`\nNot written yet: ${missing.join(', ')}`);
console.log(`\n${files.length} files, ${errors} errors, ${warnings} warnings`);
process.exit(errors ? 1 : 0);
