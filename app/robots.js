import { SITE } from '@/lib/site';

export const dynamic = 'force-static';

// Search crawlers and the assistants' search and user-triggered fetchers are all welcome.
// Until the build sets SITE_INDEXABLE=true the whole site is closed, so a preview is never indexed by accident.
const BOTS = [
  'Googlebot', 'Bingbot', 'Google-Extended', 'OAI-SearchBot', 'ChatGPT-User', 'GPTBot',
  'PerplexityBot', 'Perplexity-User', 'Claude-SearchBot', 'Claude-User', 'ClaudeBot',
  'Applebot', 'Applebot-Extended', 'meta-externalagent', 'CCBot', 'DuckAssistBot', 'MistralAI-User',
];

export default function robots() {
  if (!SITE.indexable) return { rules: [{ userAgent: '*', disallow: '/' }] };
  return {
    rules: [
      { userAgent: BOTS, allow: '/' },
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
