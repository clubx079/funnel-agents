import Link from 'next/link';
import { getGuides } from '@/lib/content';
import { GROUPS, OWNER, SITE, pathIn, urlIn } from '@/lib/site';
import { COUNTRIES } from '@/lib/countries';
import { hreflangFor } from '@/lib/hreflang';
import { cl } from '@/lib/utm';
import { JsonLd } from '@/lib/meta';

const texts = (cc) => {
  const C = COUNTRIES[cc];
  return {
    title: `Todas las guías para agentes inmobiliarios en ${C.name}`,
    description: cc === 'py'
      ? 'Guías para agentes inmobiliarios e inmobiliarias de Paraguay: captar propiedades, conseguir clientes, marketing, contratos, precios y mercado por ciudad.'
      : `Guías para agentes inmobiliarios e inmobiliarias de ${C.name}: captar propiedades, conseguir clientes, marketing, contratos y precios.`,
    lead: { voseo: ['Para publicar tu cartera gratis y recibir consultas por WhatsApp, usá'], 'tú': ['Para publicar tu cartera gratis y recibir consultas por WhatsApp, usa'], usted: ['Para publicar su cartera gratis y recibir consultas por WhatsApp, use'] }[C.voice][0],
  };
};

/** Metadata of /guias/ (Paraguay) and /<país>/guias/: self canonical, hreflang between the five indexes. */
export async function guiasMetadata(cc = 'py') {
  const T = texts(cc);
  const languages = await hreflangFor('guias');
  return {
    title: T.title,
    description: T.description,
    alternates: { canonical: `${pathIn(cc, '')}guias/`, ...(languages ? { languages } : {}) },
    openGraph: { title: T.title, description: T.description, url: `${urlIn(cc, '')}guias/`, siteName: SITE.name, locale: COUNTRIES[cc].locale, type: 'website' },
  };
}

// The index of every guide, by topic: one link to each page (with what it answers).
export default async function GuiasIndex({ cc = 'py' }) {
  const T = texts(cc);
  const TITLE = T.title, DESCRIPTION = T.description;
  const guides = await getGuides(cc);
  const slugify = (name) => name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-');
  const groups = GROUPS.map((g) => ({ name: g, id: slugify(g), list: guides.filter((x) => x.group === g) })).filter((g) => g.list.length);
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: DESCRIPTION,
    url: `${urlIn(cc, '')}guias/`,
    inLanguage: COUNTRIES[cc].lang,
    hasPart: guides.map((g) => ({ '@type': 'Article', headline: g.h1, url: urlIn(cc, g.slug) })),
  };
  return (
    <main id="contenido">
      <JsonLd data={ld} />
      <article className="guide info">
        <header className="guide-head">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol><li><Link href={pathIn(cc, '')}>Inicio</Link></li><li aria-current="page">Todas las guías</li></ol>
          </nav>
          <h1>{TITLE}</h1>
          <p className="answer">
            {guides.length} {guides.length === 1 ? 'guía gratuita' : 'guías gratuitas'} para agentes, ordenadas por tema. {T.lead}{' '}
            <a href={cl(cc === 'py' ? OWNER.publishUrl : `${COUNTRIES[cc].cl}/empresas`, cc === 'py' ? 'guias' : `${cc}-guias`)}>Casa-Libre para inmobiliarias y agentes</a>.
          </p>
        </header>
        <div className="guias-index">
          <nav className="guias-jump" aria-label="Temas">
            <p className="guias-jump-h">Temas</p>
            <ol>
              {groups.map((g) => (
                <li key={g.id}><a href={`#${g.id}`}>{g.name}<span className="guias-count">{g.list.length}</span></a></li>
              ))}
            </ol>
          </nav>
          <div className="guias-groups">
            {groups.map((g) => (
              <section key={g.name} id={g.id} className="guias-group">
                <div className="guias-group-head">
                  <h2>{g.name}</h2>
                  <span className="guias-count">{g.list.length} {g.list.length === 1 ? 'guía' : 'guías'}</span>
                </div>
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
          </div>
        </div>
      </article>
    </main>
  );
}
