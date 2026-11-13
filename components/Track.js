'use client';
import { useEffect } from 'react';
import { capture } from '@/lib/analytics';

/** Pushes one dataLayer event (and a PostHog cl_click) per click on a link to Casa-Libre, with where on the page the link sits.
 *  No personal data. Works with or without Google Tag Manager. */
export default function Track() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a || !/^https?:\/\/([a-z0-9-]+\.)?casa-libre\./i.test(a.href)) return;
      const pos = a.closest('[data-pos]');
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'casalibre_click',
        link_position: pos ? pos.getAttribute('data-pos') : 'other',
        link_url: a.href,
        page_path: window.location.pathname,
      });
      let utmContent = '';
      try { utmContent = new URL(a.href).searchParams.get('utm_content') || ''; } catch { /* ignore */ }
      capture('cl_click', { href: a.href, utm_content: utmContent, position: pos ? pos.getAttribute('data-pos') : 'other' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}
