import { FORM, formCities } from '@/lib/site';
import { COUNTRIES, COUNTRY_CODES } from '@/lib/countries';
import { formCopy, consentText } from '@/lib/formCopy';
import { cleanEmail, normalizeWhatsapp } from '@/lib/lead';
import { saveLead, attributionOf } from '@/lib/leadStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Where leads go (same pattern as the owners site, vender-mi-casa):
//  1. The Casa-Libre database of the form's country (public.funnel_leads; lib/leadStore.js, env AIROBASE_URL_<CC> /
//     AIROBASE_SECRET_KEY_<CC>, read at request time). When that is not configured or fails, data/leads.jsonl on this
//     server (one JSON object per line; not public, not in git), so no lead is lost.
//  2. If LEADS_WEBHOOK_URL is set, the same row is also POSTed there (LEADS_WEBHOOK_SECRET is sent as x-lead-secret).
const hits = new Map(); // ip -> timestamps, for a simple limit of 5 leads per 10 minutes

const bad = (error, status = 400) => Response.json({ ok: false, error }, { status });

export async function POST(request) {
  let b;
  try { b = await request.json(); } catch { return bad('Datos inválidos.'); }

  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'local';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 5) return bad('Recibimos varios envíos seguidos. Probá de nuevo en unos minutos.', 429);

  // Bots: the hidden field is filled in, or the form was sent faster than a person can.
  if (b.website || !(Number(b.elapsed) >= 2500)) return Response.json({ ok: true }); // accepted silently, not saved

  // Each country validates its own cities and its own WhatsApp prefix (BO +591, UY +598, VE +58, SV +503, PY +595).
  const country = COUNTRY_CODES.includes(b.country) ? b.country : 'py';
  const T = formCopy(country);
  const name = String(b.name || '').trim().slice(0, 80);
  const whatsapp = normalizeWhatsapp(b.whatsapp, country);
  if (!FORM.operations.includes(b.operation)) return bad(T.errOperation);
  if (!formCities(country).includes(b.city)) return bad(T.errCity);
  if (!FORM.portfolios.includes(b.portfolio)) return bad(T.errPortfolio);
  if (!FORM.roles.includes(b.role)) return bad(T.errRole);
  if (name.length < 2) return bad(T.errName);
  if (!whatsapp) return bad(T.errWhatsapp(COUNTRIES[country].phone.hint));
  const email = cleanEmail(b.email);
  if (email === null) return bad(T.errEmail);

  const lead = {
    site: 'agents',
    country,
    page: String(b.page || '').slice(0, 200),
    form_location: String(b.location || '').slice(0, 20),
    operation: b.operation,
    city: b.city,
    property_type: null,
    has_title: null,
    portfolio: b.portfolio,
    role: b.role,
    agency: String(b.agency || '').trim().slice(0, 100) || null,
    name,
    whatsapp,
    email: email || null,
    // Proof of consent: sending the form is the consent. The line shown under the button, and when it was sent.
    consent: { contact: true, bySubmit: true, text: String(b.consentText || consentText(country)).slice(0, 400), at: new Date(now).toISOString() },
    ...attributionOf(b), // utm, referrer, posthog_distinct_id
    ip,
    user_agent: (request.headers.get('user-agent') || '').slice(0, 200),
  };

  try {
    await saveLead(lead);
  } catch (e) {
    console.error(`[lead] could not save the lead anywhere: ${e?.code || e?.message || e}`);
    return bad('No pudimos guardar tus datos. Probá de nuevo en un momento.', 500);
  }
  hits.set(ip, [...recent, now]);

  const hook = process.env.LEADS_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...(process.env.LEADS_WEBHOOK_SECRET ? { 'x-lead-secret': process.env.LEADS_WEBHOOK_SECRET } : {}) },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(8000),
      });
    } catch { /* the lead is already saved in the file; the webhook can be retried from there */ }
  }
  return Response.json({ ok: true });
}
