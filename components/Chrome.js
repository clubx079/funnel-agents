import Link from 'next/link';
import { SITE, OWNER, pathIn } from '@/lib/site';
import { COUNTRIES, COUNTRY_CODES } from '@/lib/countries';
import { cl } from '@/lib/utm';
import NavLink from './NavLink';
import StickyCta from './StickyCta';

/** The ownership line. It is text, on every page, above the header: readers and crawlers see who publishes the site. */
export function OwnerLine() {
  return (
    <p className="owner" data-pos="header">
      <img src="/casa-libre-cuate-reversed.svg" alt="" width="20" height="19" />
      <span>Un sitio de <a href={cl(OWNER.url, 'owner-line')}>Casa-Libre</a></span>
    </p>
  );
}

/** The country switcher: a small disclosure in the header, one link per country home. Works without JavaScript. */
function CountrySwitch({ cc }) {
  return (
    <details className="country-switch">
      <summary aria-label={`País: ${COUNTRIES[cc].name}. Cambiar de país`}>{COUNTRIES[cc].name}</summary>
      <ul>
        {COUNTRY_CODES.map((c) => (
          <li key={c}><a href={pathIn(c, '')} hrefLang={COUNTRIES[c].lang} aria-current={c === cc ? 'true' : undefined}>{COUNTRIES[c].name}</a></li>
        ))}
      </ul>
    </details>
  );
}

const publishUrl = (cc) => (cc === 'py' ? OWNER.publishUrl : `${COUNTRIES[cc].cl}/empresas`);
const pos = (cc, p) => (cc === 'py' ? p : `${cc}-${p}`);

export function Header({ guides, cc = 'py' }) {
  return (
    <header className="site-head">
      <div className="head-row">
        <Link href={pathIn(cc, '')} className="brand" aria-label={`${SITE.name}, inicio`}>
          <svg viewBox="0 0 40 40" width="34" height="34" aria-hidden="true">
            <rect x="0" y="0" width="40" height="40" rx="5" fill="var(--navy)" />
            <rect x="8" y="22" width="6" height="10" fill="#ffffff" />
            <rect x="17" y="16" width="6" height="16" fill="#ffffff" />
            <rect x="26" y="8" width="6" height="24" fill="var(--amber)" />
          </svg>
          <span>Cómo Vender<br />Más Propiedades</span>
        </Link>
        <nav className="main-nav" aria-label="Guías">
          <ul>
            {guides.filter((g) => g.nav).map((g) => (
              <li key={g.slug}>
                <NavLink href={pathIn(cc, g.slug)} title={g.h1}>{g.nav || g.navLabel || g.h1}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <CountrySwitch cc={cc} />
        <a className="btn head-cta" href={cl(publishUrl(cc), pos(cc, 'header'))} data-pos="header-button">{OWNER.publishLabel}</a>
      </div>
    </header>
  );
}

export function Footer({ guides, cc = 'py' }) {
  const C = COUNTRIES[cc];
  const write = { voseo: 'Escribinos', 'tú': 'Escríbenos', usted: 'Escríbanos' }[C.voice];
  const { company, ruc, address, whatsapp } = SITE.legal;
  const legal = [company, ruc && `RUC ${ruc}`, address, whatsapp && `WhatsApp ${whatsapp}`].filter(Boolean).join(', ');
  return (
    <footer className="site-foot">
      <div className="foot-grid">
        <div className="foot-about">
          <p className="foot-name">{SITE.name}</p>
          <p>
            Para publicar y buscar casas, {C.terms.flat}s y terrenos en {C.name}: Casa-Libre, gratis y con contacto directo por WhatsApp.
          </p>
          {legal ? <p>{legal}.</p> : null}
          <p>{write} a <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.</p>
        </div>
        <nav aria-label="Todas las guías">
          <p className="foot-h">Guías</p>
          <ul>
            {guides.filter((g) => g.nav).map((g) => <li key={g.slug}><Link href={pathIn(cc, g.slug)}>{g.h1}</Link></li>)}
            <li><Link href={`${pathIn(cc, '')}guias/`}><strong>Todas las guías ({guides.length})</strong></Link></li>
          </ul>
        </nav>
        <nav aria-label="Casa-Libre" data-pos="footer">
          <p className="foot-h">Casa-Libre</p>
          <ul>
            {cc === 'py'
              ? OWNER.links.slice(0, 1).map((l) => <li key={l.href}><a href={cl(l.href, 'footer')}>{l.label}</a></li>)
              : <li><a href={cl(`${C.cl}/empresas`, pos(cc, 'footer'))}>Casa-Libre para inmobiliarias y agentes</a></li>}
          </ul>
        </nav>
        <nav aria-label="Sobre el sitio">
          <p className="foot-h">Sobre el sitio</p>
          <ul>
            <li><Link href="/quienes-somos/">Sobre este sitio</Link></li>
            <li><Link href="/privacidad/">Política de privacidad</Link></li>
            <li><Link href="/contacto/">Contacto</Link></li>
          </ul>
        </nav>
      </div>
      <p className="foot-note">
        Las guías ofrecen información general y no reemplazan el asesoramiento de un {cc === 'py' ? 'escribano' : C.terms.notary}, abogado o contador.
      </p>
      <StickyCta />
    </footer>
  );
}
