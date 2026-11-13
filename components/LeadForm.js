'use client';
import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FORM, OWNER, formCities } from '@/lib/site';
import { COUNTRIES } from '@/lib/countries';
import { formCopy, consentText } from '@/lib/formCopy';
import { cl } from '@/lib/utm';
import { cleanEmail, normalizeWhatsapp } from '@/lib/lead';

const push = (event, data) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data }); // never names or phone numbers
};

/** Two steps on the same page: first operation, city, portfolio and role (dropdowns, nothing personal), then name, WhatsApp and email. */
export default function LeadForm({ location = 'hero', heading, country = 'py' }) {
  const T = formCopy(country);
  const C = COUNTRIES[country] || COUNTRIES.py;
  const title = heading || (location === 'final' ? T.finalHeading : T.heading);
  const STEP1_ERRORS = { operation: T.errOperation, city: T.errCity, portfolio: T.errPortfolio, role: T.errRole };
  const path = usePathname();
  const startedAt = useRef(0);
  const [step, setStep] = useState(1);
  const [v, setV] = useState({ operation: '', city: '', portfolio: '', role: '', name: '', agency: '', whatsapp: '', email: '', website: '' });
  const [error, setError] = useState({ field: '', text: '' });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => { const val = e.target.value; setV((s) => ({ ...s, [k]: val })); };
  const id = (k) => `lf-${location}-${k}`;
  const meta = { form_location: location, page_path: path };
  const fail = (field, text) => setError({ field, text });

  const start = () => {
    if (!startedAt.current) { startedAt.current = Date.now(); push('form_start', meta); }
  };
  const next = (e) => {
    e.preventDefault();
    start();
    for (const k of ['operation', 'city', 'portfolio', 'role']) if (!v[k]) return fail(k, STEP1_ERRORS[k]);
    fail('', '');
    setStep(2);
    push('form_step_complete', { ...meta, operation: v.operation, city: v.city, portfolio: v.portfolio, role: v.role });
  };
  const submit = async (e) => {
    e.preventDefault();
    if (v.name.trim().length < 2) return fail('name', T.errName);
    if (!normalizeWhatsapp(v.whatsapp, country)) return fail('whatsapp', T.errWhatsapp(C.phone.hint));
    if (cleanEmail(v.email) === null) return fail('email', T.errEmail);
    fail('', '');
    setSending(true);
    try {
      const res = await fetch('/api/lead/', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...v, page: path, location, elapsed: Date.now() - startedAt.current, country, consentText: consentText(country) }),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || !out.ok) throw new Error(out.error || 'error');
      push('generate_lead', { ...meta, country, operation: v.operation, city: v.city, portfolio: v.portfolio, role: v.role, lead_source: 'form' });
      setDone(true);
    } catch (err) {
      setSending(false);
      fail('', err.message && err.message !== 'error' ? err.message : T.errSend);
    }
  };

  const errId = id('err');
  const invalid = (k) => (error.field === k ? { 'aria-invalid': true, 'aria-describedby': errId } : {});
  const Err = () => (error.text ? <p className="lead-err" id={errId} role="alert">{error.text}</p> : null);

  const Select = ({ name, options, label, placeholder = T.placeholder }) => (
    <div className="lf-field">
      <label htmlFor={id(name)}>{label}</label>
      <select id={id(name)} required value={v[name]} onChange={set(name)} onFocus={start} {...invalid(name)}>
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );

  const formId = location === 'hero' ? 'formulario' : `formulario-${location}`;
  if (done) {
    return (
      <div className={`lead lead-${location} lead-done`} id={formId} data-pos={`form-${location}`} role="status">
        <p className="lead-h">{T.doneTitle(v.name.trim().split(/\s+/)[0])}</p>
        <p className="lead-sub">{T.doneText(normalizeWhatsapp(v.whatsapp, country))}</p>
        <p className="lead-sub">{T.meanwhile} <a href={cl(country === 'py' ? OWNER.agentsUrl : `${C.cl}/empresas`, `${country === 'py' ? '' : country + '-'}form-${location}-gracias`)}>Casa-Libre para inmobiliarias y agentes</a>.</p>
      </div>
    );
  }

  return (
    <form className={`lead lead-${location}`} id={formId} onSubmit={step === 1 ? next : submit} noValidate data-pos={`form-${location}`} data-step={step} aria-labelledby={id('h')}>
      <p className="lead-h" id={id('h')}>{title}</p>
      <p className="lead-sub">{T.sub}</p>
      <p className="lead-step" aria-live="polite">Paso {step} de 2</p>

      {step === 1 ? (
        <>
          {Select({ name: 'operation', options: FORM.operations, label: T.operation })}
          {Select({ name: 'city', options: formCities(country), label: T.city, placeholder: T.cityPlaceholder })}
          {Select({ name: 'portfolio', options: FORM.portfolios, label: T.portfolio })}
          {Select({ name: 'role', options: FORM.roles, label: T.role })}
          <Err />
          <button className="btn lead-btn" type="submit">Continuar</button>
        </>
      ) : (
        <>
          <div className="lf-field">
            <label htmlFor={id('name')}>{T.name}</label>
            <input id={id('name')} type="text" autoComplete="name" value={v.name} onChange={set('name')} maxLength={80} {...invalid('name')} />
          </div>
          <div className="lf-field">
            <label htmlFor={id('agency')}>Nombre de la inmobiliaria <span className="lf-opt">(opcional)</span></label>
            <input id={id('agency')} type="text" autoComplete="organization" value={v.agency} onChange={set('agency')} maxLength={100} />
          </div>
          <div className="lf-field">
            <label htmlFor={id('wa')}>{T.whatsapp}</label>
            <input id={id('wa')} type="tel" inputMode="tel" autoComplete="tel" placeholder={C.phone.example} value={v.whatsapp} onChange={set('whatsapp')} maxLength={20} {...invalid('whatsapp')} />
          </div>
          <div className="lf-field">
            <label htmlFor={id('email')}>Email (opcional)</label>
            <input id={id('email')} type="email" inputMode="email" autoComplete="email" value={v.email} onChange={set('email')} maxLength={120} {...invalid('email')} />
          </div>
          {/* Hidden from people; bots fill it in. */}
          <div className="lf-hp" aria-hidden="true">
            <label htmlFor={id('web')}>No completes este campo</label>
            <input id={id('web')} type="text" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} />
          </div>
          <Err />
          <button className="btn lead-btn" type="submit" disabled={sending}>{sending ? 'Enviando…' : 'Enviar'}</button>
          <p className="lead-consent">{T.consentLead} <a href="/privacidad/">Política de privacidad</a>.</p>
          <button className="lead-back" type="button" onClick={() => { setStep(1); fail('', ''); }}>Volver al paso 1</button>
        </>
      )}
    </form>
  );
}
