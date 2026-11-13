import Link from 'next/link';
import { Blocks } from './Blocks';
import { fechaLarga } from '@/lib/site';

/** Simple pages: who we are, editorial policy, privacy, contact. */
export default function InfoPage({ page }) {
  return (
    <main id="contenido">
      <article className="guide info">
        <header className="guide-head">
          <nav className="crumbs" aria-label="Migas de pan">
            <ol><li><Link href="/">Inicio</Link></li><li aria-current="page">{page.h1}</li></ol>
          </nav>
          <h1>{page.h1}</h1>
          {page.answer ? <p className="answer">{page.answer}</p> : null}
        </header>
        <div className="guide-body info-body">
          {(page.sections || []).map((s) => (
            <section key={s.id} id={s.id}>
              <h2>{s.h2}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
          <p className="info-date">Actualizado el {fechaLarga(page.updated)}.</p>
        </div>
      </article>
    </main>
  );
}
