import Link from 'next/link';
import { notFound } from 'next/navigation';
import Guide from '@/components/Guide';
import InfoPage from '@/components/InfoPage';
import LeadForm from '@/components/LeadForm';
import { getGuides, getInfoPages, getPage } from '@/lib/content';
import { graphFor } from '@/lib/schema';
import { metaFor, JsonLd } from '@/lib/meta';
import { hreflangFor, keyOf } from '@/lib/hreflang';
import { COUNTRIES } from '@/lib/countries';
import { GROUPS, SITE, pathIn, urlIn } from '@/lib/site';

// The page logic shared by every country. The route files under app/ only say which country they are.

/* ── Home ─────────────────────────────────────────────────────────────── */
// A country's home is content/pages/<code>/home.js when that file exists (Paraguay: content/pages/home.js).
// Until then the country gets a short generated home: headline, answer, the lead form and its guides by topic.

const autoHome = (cc) => {
  const C = COUNTRIES[cc];
  return {
    slug: '', country: cc, kind: 'auto-home',
    title: `Cómo vender más propiedades en ${C.name}: guías para agentes`,
    h1: `Cómo vender más propiedades en ${C.name}`,
    description: `Guías gratis para agentes inmobiliarios e inmobiliarias de ${C.name}: captar propiedades, conseguir clientes y publicar la cartera gratis en Casa-Libre.`,
    answer: C.homeAnswer,
  };
};

export async function homeMetadata(cc = 'py') {
  const page = (await getPage('', cc)) || autoHome(cc);
  return metaFor(page, await hreflangFor(''));
}

export async function HomePage({ cc = 'py' }) {
  const page = await getPage('', cc);
  const guides = await getGuides(cc);
  if (page) {
    return (
      <>
        <JsonLd data={graphFor(page)} />
        <Guide page={page} guides={guides} />
      </>
    );
  }
  if (cc === 'py') notFound();
  const home = autoHome(cc);
  const groups = GROUPS.map((g) => ({ name: g, list: guides.filter((x) => x.group === g) })).filter((g) => g.list.length);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: home.title,
    description: home.description,
    url: urlIn(cc, ''),
    inLanguage: COUNTRIES[cc].lang,
    about: { '@type': 'Country', name: COUNTRIES[cc].name, identifier: cc.toUpperCase() },
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url + '/' },
  };
  return (
    <main id="contenido">
      <JsonLd data={ld} />
      <article className="guide guide-home">
        <div className="hero-band">
          <header className="guide-head has-form">
            <div className="head-main">
              <h1>{home.h1}</h1>
              <p className="answer">{home.answer}</p>
            </div>
            <LeadForm location="hero" country={cc} />
            <div className="head-after" />
          </header>
        </div>
        <div className="related country-guides">
          {groups.map((g) => (
            <section key={g.name} aria-label={g.name}>
              <h2>{g.name}</h2>
              <ul>
                {g.list.map((x) => (
                  <li key={x.slug}>
                    <Link href={pathIn(cc, x.slug)}>{x.h1}</Link>
                    {x.blurb ? <p>{x.blurb}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="country-guides-all"><Link href={`${pathIn(cc, '')}guias/`}>Ver todas las guías</Link></p>
        </div>
      </article>
    </main>
  );
}

/* ── Guides (and Paraguay's info pages) ───────────────────────────────── */

export async function guideParams(cc = 'py') {
  const pages = cc === 'py' ? [...(await getGuides()), ...(await getInfoPages())] : await getGuides(cc);
  return pages.filter((p) => p.slug).map((p) => ({ slug: p.slug }));
}

export async function guideMetadata(cc, slug) {
  const page = await getPage(slug, cc);
  if (!page) return {};
  return metaFor(page, page.kind === 'guide' ? await hreflangFor(keyOf(page)) : null);
}

export async function GuidePage({ cc = 'py', slug }) {
  const page = await getPage(slug, cc);
  if (!page) notFound();
  const guides = await getGuides(cc);
  return (
    <>
      <JsonLd data={graphFor(page)} />
      {page.kind === 'guide' ? <Guide page={page} guides={guides} /> : <InfoPage page={page} />}
    </>
  );
}
