// Every link to Casa-Libre carries UTM tags, so the Casa-Libre admin ("Where visitors come from")
// shows the visits this site sends as their own row: utm_source = this site.
// utm_content = the page slug (links in the text) or the spot on the page (header, footer, sticky…).
import { countryOfClUrl } from './countries.js';

export const UTM_SOURCE = 'comovendermaspropiedades';
export const UTM_MEDIUM = 'funnel';
export const UTM_CAMPAIGN = 'seo-funnel';
// Other countries (2026-11-13): same scheme, with the country in the campaign (seo-funnel-bo, seo-funnel-uy…),
// so each country's Casa-Libre admin can tell these visits apart. Paraguay's links are unchanged.

const CL_RE = /^https:\/\/((www\.)?casa-libre\.com\.py|casa-libre\.com\.bo|uy\.casa-libre\.com|casa-libre\.com\.ve|sv\.casa-libre\.com)(\/|\?|#|$)/;

export function cl(href, content) {
  if (!href || !CL_RE.test(href) || href.includes('utm_source=')) return href;
  const cc = countryOfClUrl(href);
  const u = new URL(href);
  u.searchParams.set('utm_source', UTM_SOURCE);
  u.searchParams.set('utm_medium', UTM_MEDIUM);
  u.searchParams.set('utm_campaign', cc && cc !== 'py' ? `${UTM_CAMPAIGN}-${cc}` : UTM_CAMPAIGN);
  if (content) u.searchParams.set('utm_content', content);
  return u.toString();
}

/** Tags every Casa-Libre href inside an HTML string. */
export function clHtml(html, content) {
  return String(html).replace(/href="(https:\/\/(?:(?:www\.)?casa-libre\.com\.py|casa-libre\.com\.bo|uy\.casa-libre\.com|casa-libre\.com\.ve|sv\.casa-libre\.com)[^"]*)"/g,
    (m, url) => `href="${cl(url.replace(/&amp;/g, '&'), content).replace(/&/g, '&amp;')}"`);
}

// Until 2026-11-13 bare mentions of "Casa-Libre" were turned into links here, which put 40 to 60 Casa-Libre
// links on every page. That is gone: only the links written in the content files render.

/** Deep copy of a page with every Casa-Libre link tagged. */
export function tagPage(page) {
  const content = (page.country && page.country !== 'py' ? page.country + '-' : '') + (page.slug || 'home');
  const html = (s) => clHtml(s, content);
  const tagAny = (v) => {
    if (typeof v === 'string') {
      if (CL_RE.test(v) && !/\s/.test(v)) return cl(v, content);
      return v.includes('href="https://') ? clHtml(v, content) : v;
    }
    if (Array.isArray(v)) return v.map(tagAny);
    if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, tagAny(x)]));
    return v;
  };
  const out = tagAny(page);
  // the rendered HTML fields: paragraphs, list items, steps, callouts, summary, FAQ answers
  for (const sec of out.sections || []) {
    for (const b of sec.blocks || []) {
      if (b.t === 'p' || b.t === 'callout') b.html = html(b.html);
      if ((b.t === 'ul' || b.t === 'ol') && b.items) b.items = b.items.map(html);
      if (b.t === 'steps' && b.items) b.items = b.items.map((it) => ({ ...it, html: html(it.html) }));
    }
  }
  if (out.summary) out.summary = out.summary.map(html);
  if (out.faq) out.faq = out.faq.map((f) => ({ ...f, a: html(f.a) }));
  return out;
}
