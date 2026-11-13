import Link from 'next/link';
import { Blocks } from './Blocks';
import CityCta from './CityCta';
import LeadForm from './LeadForm';
import { fechaLarga, pathIn, OWNER } from '@/lib/site';

const H = ({ as: Tag = 'span', html, ...rest }) => <Tag {...rest} dangerouslySetInnerHTML={{ __html: html || '' }} />;

/** The article template: answer first, then summary, call to action, contents, sections, FAQ, sources, editorial note. */
export default function Guide({ page, guides }) {
  const cc = page.country || 'py';
  const isHome = !page.slug;
  const toc = [
    ...(page.sections || []).map((s) => ({ id: s.id, label: s.h2 })),
    ...(page.faq?.length ? [{ id: 'preguntas-frecuentes', label: 'Preguntas frecuentes' }] : []),
  ];
  const related = (page.related || []).map((slug) => guides.find((g) => g.slug === slug)).filter(Boolean);
  // the other guides of the same topic (every page links to its whole group, so each page is two clicks from home)
  const siblings = guides.filter((g) => g.group === page.group && g.slug !== page.slug && !related.some((r) => r.slug === g.slug));

  const head = (
    <header className="guide-head has-form">
      <div className="head-main">
        {!isHome ? (
          <nav className="crumbs" aria-label="Migas de pan">
            <ol><li><Link href={pathIn(cc, '')}>Inicio</Link></li><li aria-current="page">{page.navLabel || page.h1}</li></ol>
          </nav>
        ) : null}
        <h1>{page.h1}</h1>
        <p className="answer">{page.answer}</p>
      </div>
      <LeadForm location="hero" country={cc} />
      <div className="head-after">
        <CityCta page={page} />
      </div>
    </header>
  );

  return (
    <main id="contenido">
      <article className={isHome ? 'guide guide-home' : 'guide'}>
        {isHome ? <div className="hero-band">{head}</div> : head}


        <div className="guide-grid">
          <nav className="toc" aria-label="Contenido">
            <p className="toc-h">En esta guía</p>
            <ol>{toc.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.label}</a></li>)}</ol>
          </nav>

          <div className="guide-body">
            {page.summary?.length ? (
              <section className="cartel" aria-labelledby="en-resumen">
                <h2 id="en-resumen">En resumen</h2>
                <ul>{page.summary.map((s, i) => <H as="li" key={i} html={s} />)}</ul>
              </section>
            ) : null}

            {page.cta ? (
              <aside className="cta" data-pos="card">
                <div>
                  <p className="cta-title">{page.cta.title}</p>
                  <p>{page.cta.text}</p>
                </div>
                <a className="btn" href={page.cta.href}>{page.cta.button}</a>
              </aside>
            ) : null}

            {(page.sections || []).map((s) => (
              <section key={s.id} id={s.id} data-pos="body">
                <h2>{s.h2}</h2>
                <Blocks blocks={s.blocks} />
              </section>
            ))}

            {page.faq?.length ? (
              <section id="preguntas-frecuentes" className="faq">
                <h2>Preguntas frecuentes</h2>
                {page.faq.map((f, i) => (
                  <div className="faq-item" key={i}><h3>{f.q}</h3><H as="p" html={f.a} /></div>
                ))}
              </section>
            ) : null}


            <LeadForm location="final" country={cc} />

            <footer className="editorial">
              <p>Información general, no asesoramiento legal ni contable. Publicado el {fechaLarga(page.published)}.</p>
            </footer>
          </div>
        </div>
      </article>

      {page.closing ? (
        <section className="closing" data-pos="closing" aria-label="Siguiente paso">
          <div className="closing-in">
            <div>
              <h2>{page.closing.title}</h2>
              <p>{page.closing.text}</p>
            </div>
            <a className="btn btn-tajy" href={page.closing.href}>{page.closing.button}</a>
          </div>
        </section>
      ) : null}

      {siblings.length ? (
        <nav className="siblings" aria-label={`Más guías: ${page.group}`}>
          <h2>Más guías: {page.group}</h2>
          <ul>{siblings.map((g) => <li key={g.slug}><Link href={pathIn(cc, g.slug)}>{g.h1}</Link></li>)}</ul>
          <p><Link href={`${pathIn(cc, '')}guias/`}>Ver todas las guías</Link></p>
        </nav>
      ) : null}

      {related.length ? (
        <section className="related" aria-labelledby="mas-guias">
          <h2 id="mas-guias">Seguí leyendo</h2>
          <ul>
            {related.map((g) => (
              <li key={g.slug}>
                <Link href={pathIn(cc, g.slug)}>{g.h1}</Link>
                {g.blurb ? <p>{g.blurb}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
