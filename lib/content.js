import { readdirSync } from 'node:fs';
import path from 'node:path';
import { GUIDES, GROUPS, INFO_PAGES } from './site.js';
import { COUNTRIES } from './countries.js';
import { tagPage } from './utm.js';

// Paraguay: each page is one file in content/pages, listed in lib/site.js GUIDES (that order is the menu order).
// Other countries: each page is one file in content/pages/<code>/ (bo, uy, ve, sv). Nothing else to register:
// a file dropped in the folder is a page (home.js = the country's home). Its group, nav label and city are in the file.
async function load(file) {
  try {
    const mod = await import(`../content/pages/${file}.js`);
    return mod.default || null;
  } catch {
    return null;
  }
}

async function loadCountry(cc, file) {
  try {
    const mod = await import(`../content/pages/${cc}/${file}.js`);
    return mod.default || null;
  } catch {
    return null;
  }
}

/** File names (without .js) in content/pages/<cc>/, or [] when the folder does not exist yet. */
export function countryFiles(cc) {
  try {
    return readdirSync(path.join(process.cwd(), 'content', 'pages', cc)).filter((f) => f.endsWith('.js')).map((f) => f.slice(0, -3)).sort();
  } catch {
    return [];
  }
}

const groupIndex = (g) => { const i = GROUPS.indexOf(g); return i === -1 ? GROUPS.length : i; };

export async function getGuides(cc = 'py') {
  if (cc === 'py') {
    const pages = await Promise.all(GUIDES.map(async (g) => {
      const page = await load(g.file || g.slug);
      return page ? tagPage({ ...page, slug: g.slug, group: g.group, nav: g.nav, city: g.city, cityName: g.cityName, kind: 'guide', country: 'py' }) : null;
    }));
    return pages.filter(Boolean);
  }
  if (!COUNTRIES[cc]) return [];
  const pages = await Promise.all(countryFiles(cc).map(async (file) => {
    const page = await loadCountry(cc, file);
    const slug = file === 'home' ? '' : file;
    return page ? tagPage({ ...page, slug, group: page.group || 'Guías principales', kind: 'guide', country: cc }) : null;
  }));
  return pages.filter(Boolean).sort((a, b) => (a.slug === '' ? -1 : b.slug === '' ? 1 : 0)
    || groupIndex(a.group) - groupIndex(b.group) || (a.order ?? 50) - (b.order ?? 50) || a.h1.localeCompare(b.h1, 'es'));
}

/** Info pages (who we are, privacy, contact) exist once, for every country, at the root. */
export async function getInfoPages() {
  const pages = await Promise.all(INFO_PAGES.map(async (slug) => {
    const page = await load(slug);
    return page ? tagPage({ ...page, slug, kind: 'info', country: 'py' }) : null;
  }));
  return pages.filter(Boolean);
}

export async function getPage(slug, cc = 'py') {
  const all = cc === 'py' ? [...(await getGuides()), ...(await getInfoPages())] : await getGuides(cc);
  return all.find((p) => p.slug === slug) || null;
}

/** Words of body text, for the reading-time line. */
export function wordCount(page) {
  const strip = (s) => String(s || '').replace(/<[^>]+>/g, ' ');
  const parts = [page.answer, ...(page.summary || [])];
  for (const s of page.sections || []) {
    parts.push(s.h2);
    for (const b of s.blocks || []) {
      parts.push(b.html, b.text, b.title, b.caption, b.note, ...(b.items || []).map((i) => (typeof i === 'string' ? i : `${i.title} ${i.html}`)));
      for (const r of b.rows || []) parts.push(r.join(' '));
    }
  }
  for (const f of page.faq || []) parts.push(f.q, f.a);
  return strip(parts.filter(Boolean).join(' ')).split(/\s+/).filter(Boolean).length;
}
