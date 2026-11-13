'use client';
// PostHog for this funnel site, in the SAME PostHog project as the Casa-Libre sites
// (same init as the buyer portal: manual $pageview, $pageleave, autocapture, identified-only persons).
//
// Every event carries funnel_site / funnel_country / funnel_page (registered super properties).
// We never register site_country: the Casa-Libre admin counts its own country sites by
// $host + site_country, and funnel traffic must not be counted as a Casa-Libre site.
//
// Also keeps the visit's first-touch attribution (utm_* + referrer) in sessionStorage so the
// lead form can send it with the lead. That part works with or without PostHog.
import posthog from 'posthog-js';

export const FUNNEL_SITE = 'agents'; // 'owners' (vender-mi-casa) or 'agents' (como-vender-mas-propiedades)

// The project's public client key (already shipped in casa-libre.com.py's HTML). Fallback because the
// hosting platform's build often doesn't pass NEXT_PUBLIC_* vars, and these pages are static.
const PUBLIC_KEY = 'phc_zq43Nbyp5PNGF6xjedrhqAnzHrZAQaXsNn6iqrT5cvyy';
export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY || PUBLIC_KEY;
export const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

// Country folders of the non-root countries (Paraguay is at the root).
const PREFIXES = ['bolivia', 'uruguay', 'venezuela', 'el-salvador'];

/** '/bolivia/x/' -> 'x', '/' -> 'home', '/guias/' -> 'guias'. */
export function slugOf(pathname) {
  const parts = String(pathname || '/').split('/').filter(Boolean);
  if (PREFIXES.includes(parts[0])) parts.shift();
  return parts.join('/') || 'home';
}

const queued = [];
const on = () => typeof window !== 'undefined' && !!POSTHOG_KEY;

/** Send to PostHog now, or right after init when it hasn't started yet. Never throws. */
export function capture(event, props = {}) {
  if (!on()) return;
  if (!posthog.__loaded) { if (queued.length < 50) queued.push([event, props]); return; }
  try { posthog.capture(event, props); } catch { /* analytics must never break the page */ }
}

/** Starts PostHog once and stamps the funnel super properties. */
export function initAnalytics(cc, pathname) {
  if (!on()) return;
  if (!posthog.__loaded) {
    try {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        capture_pageview: false,  // sent by hand on each route change
        capture_pageleave: true,
        persistence: 'localStorage+cookie',
        person_profiles: 'identified_only',
      });
    } catch { return; }
  }
  setPage(cc, pathname);
  for (const [e, p] of queued.splice(0)) { try { posthog.capture(e, p); } catch { /* ignore */ } }
}

/** Updates funnel_page (and country) when the visitor moves to another page. */
export function setPage(cc, pathname) {
  if (!on() || !posthog.__loaded) return;
  try { posthog.register({ funnel_site: FUNNEL_SITE, funnel_country: cc, funnel_page: slugOf(pathname) }); } catch { /* ignore */ }
}

/** PostHog's anonymous id of this visitor, or ''. */
export function distinctId() {
  try { return on() && posthog.__loaded ? String(posthog.get_distinct_id() || '') : ''; } catch { return ''; }
}

// ---- first-touch attribution (utm_* + referrer), kept for the browser session ----
const ATTR_KEY = 'funnel_attr';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

/** Saves the landing page's utm_* and document.referrer the first time in this session. */
export function keepAttribution() {
  try {
    if (sessionStorage.getItem(ATTR_KEY)) return;
    const q = new URLSearchParams(window.location.search);
    const utm = {};
    for (const k of UTM_KEYS) { const v = q.get(k); if (v) utm[k] = v.slice(0, 200); }
    sessionStorage.setItem(ATTR_KEY, JSON.stringify({ utm, referrer: String(document.referrer || '').slice(0, 500) }));
  } catch { /* storage blocked: the lead is sent without attribution */ }
}

/** { utm, referrer } saved by keepAttribution, or empty values. */
export function getAttribution() {
  try {
    keepAttribution();
    const a = JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}');
    return { utm: a.utm || {}, referrer: a.referrer || '' };
  } catch { return { utm: {}, referrer: '' }; }
}
