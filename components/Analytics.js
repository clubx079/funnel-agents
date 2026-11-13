'use client';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initAnalytics, setPage, capture, keepAttribution } from '@/lib/analytics';

// One $pageview per route (PostHog's own automatic pageview is off, like on Casa-Libre).
function Pageviews({ cc }) {
  const pathname = usePathname();
  const search = useSearchParams();
  useEffect(() => {
    setPage(cc, pathname);
    const qs = search?.toString();
    capture('$pageview', { $current_url: window.location.origin + pathname + (qs ? `?${qs}` : '') });
  }, [cc, pathname, search]);
  return null;
}

/** PostHog + first-touch attribution. cc: the country of the page. Renders nothing. */
export default function Analytics({ cc }) {
  useEffect(() => {
    keepAttribution();
    initAnalytics(cc, window.location.pathname);
  }, [cc]);
  return <Suspense fallback={null}><Pageviews cc={cc} /></Suspense>;
}
