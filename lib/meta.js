import { SITE, urlIn, pathIn } from './site.js';
import { COUNTRIES } from './countries.js';

/** Static metadata for one page: title, description, canonical (self), hreflang and Open Graph, all in the first HTML response. */
export function metaFor(page, languages = null) {
  const cc = page.country || 'py';
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: pathIn(cc, page.slug), ...(languages ? { languages } : {}) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: urlIn(cc, page.slug),
      siteName: SITE.name,
      locale: COUNTRIES[cc].locale,
      type: page.kind === 'guide' ? 'article' : 'website',
      ...(page.kind === 'guide' ? { publishedTime: page.published, modifiedTime: page.updated } : {}),
    },
  };
}

export const JsonLd = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\u003c') }} />
);
