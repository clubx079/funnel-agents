import Link from 'next/link';
import { getGuides } from '@/lib/content';
import { pathIn } from '@/lib/site';

/** The 404 page of a country: the list of that country's guides. */
export default async function NotFoundPage({ cc = 'py' }) {
  const guides = await getGuides(cc);
  return (
    <main id="contenido">
      <article className="guide info">
        <header className="guide-head">
          <h1>Esta página no existe</h1>
          <p className="answer">Puede que el enlace esté mal escrito o que la guía haya cambiado de dirección. Estas son todas las guías del sitio.</p>
        </header>
        <div className="guide-body info-body">
          <ul>{guides.map((g) => <li key={g.slug}><Link href={pathIn(cc, g.slug)}>{g.h1}</Link></li>)}</ul>
          {guides.length ? null : <p><Link href={pathIn(cc, '')}>Ir al inicio</Link></p>}
        </div>
      </article>
    </main>
  );
}
