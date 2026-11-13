// Shared by the lead form (components/LeadForm.js) and its API (app/api/lead/route.js).

// The consent line shown under the submit button is in lib/formCopy.js (consentText), in each country's register.

/** Trimmed email, '' when empty, or null when it is filled in but does not look like an email. */
export function cleanEmail(raw) {
  const e = String(raw || '').trim();
  if (!e) return '';
  return e.length <= 120 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) ? e : null;
}

// Mobile numbers by country: what is left after the country code (and the leading 0 people type locally).
const MOBILE = {
  py: ['595', /^9\d{8}$/],     // 0981 123 456
  bo: ['591', /^[67]\d{7}$/],  // 71234567
  uy: ['598', /^9\d{7}$/],     // 094 123 456
  ve: ['58', /^4\d{9}$/],      // 0412 123 4567
  sv: ['503', /^[67]\d{7}$/],  // 7123 4567
};

/** '+<country code><number>', or '' when it is not a mobile of that country (local or international format). */
export function normalizeWhatsapp(raw, cc = 'py') {
  const [code, re] = MOBILE[cc] || MOBILE.py;
  let d = String(raw || '').replace(/\D/g, '');
  if (d.startsWith('00')) d = d.slice(2);
  if (d.startsWith(code) && d.length > code.length + 6) d = d.slice(code.length);
  if (d.startsWith('0')) d = d.slice(1);
  return re.test(d) ? `+${code}${d}` : '';
}
