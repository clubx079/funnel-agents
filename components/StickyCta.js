'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { COUNTRIES, countryOfPath } from '@/lib/countries';
import { formCopy } from '@/lib/formCopy';

// Pages without the form: the guide indexes and the info pages. Their button opens the country home's form.
const noForm = (path, prefix) => path === `${prefix}/guias/` || ['/quienes-somos/', '/privacidad/', '/contacto/'].includes(path);

/** Phones and tablets: the bar's button goes to the lead form at the top of the page (#formulario).
 *  On pages without the form it opens the home page form. Hidden while a form is on screen. */
export default function StickyCta() {
  const path = usePathname();
  const cc = countryOfPath(path);
  const home = `${COUNTRIES[cc].prefix}/#formulario`;
  const href = noForm(path, COUNTRIES[cc].prefix) ? home : '#formulario';
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const forms = ['formulario', 'formulario-final'].map((i) => document.getElementById(i)).filter(Boolean);
    if (!forms.length || !('IntersectionObserver' in window)) return undefined;
    const seen = new Map();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) seen.set(e.target, e.isIntersecting);
      setHidden([...seen.values()].some(Boolean));
    }, { threshold: 0.15 });
    forms.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);
  const go = (e) => {
    const form = document.getElementById('formulario');
    e.preventDefault();
    if (!form) { window.location.href = home; return; }
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    form.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    const first = form.querySelector('input, button');
    if (first) first.focus({ preventScroll: true });
  };
  return (
    <div className={hidden ? 'sticky-cta is-hidden' : 'sticky-cta'} data-pos="sticky">
      <span>{formCopy(cc).sticky}</span>
      <a className="btn btn-tajy" href={href} onClick={go}>Dejar mis datos</a>
    </div>
  );
}
