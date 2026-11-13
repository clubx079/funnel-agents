import { SITE, OWNER, urlOf, urlIn } from './site.js';
import { COUNTRIES } from './countries.js';

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.url + '/',
  description: SITE.description,
  parentOrganization: { '@type': 'Organization', name: OWNER.name, url: OWNER.url },
});

const website = (cc = 'py') => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: SITE.name,
  url: SITE.url + '/',
  inLanguage: cc === 'py' ? SITE.lang : COUNTRIES[cc].lang,
  publisher: { '@id': ORG_ID },
});

const breadcrumb = (page, cc) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: urlIn(cc, '') },
    { '@type': 'ListItem', position: 2, name: page.h1, item: urlIn(cc, page.slug) },
  ],
});

// Other countries: the page says which country it is about, and that country's Casa-Libre.
const countryNode = (cc) => ({ '@type': 'Country', name: COUNTRIES[cc].name, identifier: cc.toUpperCase() });

const article = (page, cc) => ({
  '@type': 'Article',
  headline: page.h1,
  description: page.description,
  inLanguage: COUNTRIES[cc].lang,
  datePublished: page.published,
  dateModified: page.updated,
  mainEntityOfPage: urlIn(cc, page.slug),
  ...(cc === 'py' ? {} : {
    spatialCoverage: countryNode(cc),
    about: { '@type': 'Thing', name: `Mercado inmobiliario de ${COUNTRIES[cc].name} (precios en ${COUNTRIES[cc].currency.listings}, moneda local: ${COUNTRIES[cc].currency.code})` },
    mentions: { '@type': 'Organization', name: OWNER.name, url: COUNTRIES[cc].cl + '/', areaServed: countryNode(cc) },
  }),
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url + '/' },
  publisher: { '@id': ORG_ID },
  isPartOf: { '@id': SITE_ID },
});

// FAQ rich results ended in May 2026; the markup is harmless and mirrors text that is visible on the page.
const faq = (page) => ({
  '@type': 'FAQPage',
  mainEntity: page.faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '') },
  })),
});

export function graphFor(page) {
  const cc = page.country || 'py';
  const graph = [organization(), website(cc)];
  if (page.kind === 'guide') {
    graph.push(article(page, cc));
    if (page.slug) graph.push(breadcrumb(page, cc));
    if (page.faq?.length) graph.push(faq(page));
  } else if (page.slug) {
    graph.push(breadcrumb(page, cc));
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
