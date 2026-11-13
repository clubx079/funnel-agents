import { COUNTRIES, COUNTRY_CODES } from './countries.js';
import { getGuides } from './content.js';
import { urlIn, SITE } from './site.js';

// hreflang only between true equivalents (2026-11-13):
//  - the homes of every country (key ''), and the /guias/ indexes (key 'guias');
//  - a country page whose file says equivalent: '<Paraguay slug>' and that Paraguay page (and the other countries' pages
//    with the same equivalent). A page without an equivalent gets no hreflang.
// x-default is the Paraguay version.
export async function hreflangFor(key) {
  if (key === null || key === undefined) return null;
  const langs = {};
  for (const cc of COUNTRY_CODES) {
    const C = COUNTRIES[cc];
    if (key === 'guias') { langs[C.lang] = `${urlIn(cc, '')}guias/`; continue; }
    if (key === '') { langs[C.lang] = urlIn(cc, ''); continue; }
    const guides = await getGuides(cc);
    const hit = cc === 'py' ? guides.find((g) => g.slug === key) : guides.find((g) => g.equivalent === key);
    if (hit) langs[C.lang] = urlIn(cc, hit.slug);
  }
  if (Object.keys(langs).length < 2) return null;
  if (langs['es-PY']) langs['x-default'] = langs['es-PY'];
  return langs;
}

/** The hreflang key of a guide: its own slug in Paraguay, its `equivalent` elsewhere ('' for every home). */
export function keyOf(page) {
  if (!page.slug) return '';
  if (!page.country || page.country === 'py') return page.slug;
  return page.equivalent || null;
}

export const absolute = (p) => (p.startsWith('http') ? p : SITE.url + p);
