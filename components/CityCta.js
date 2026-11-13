import { cityListings } from '@/lib/clLinks';
import { countryCityUrl } from '@/lib/countries';
import { cl } from '@/lib/utm';

/** City pages: the Casa-Libre listings of that city, filtered, right under the answer. One button only. */
export default function CityCta({ page }) {
  const cc = page.country || 'py';
  if (cc !== 'py') {
    // Country pages: the city's houses for sale on that country's Casa-Libre (city page when verified, else the filtered search).
    if (!page.city) return null;
    const name = page.cityName || page.city;
    const u = countryCityUrl(cc, page.cityOp || 'venta', page.cityType || 'casa', page.city, name);
    const what = { casa: 'casas', depto: 'departamentos', terreno: 'terrenos' }[page.cityType || 'casa'];
    return (
      <div className="city-cta" data-pos="city-cta">
        <a className="btn" href={cl(u, `${cc}-${page.slug}-city-top`)}>Ver {what} en {(page.cityOp || 'venta') === 'venta' ? 'venta' : 'alquiler'} en {name} en Casa-Libre</a>
      </div>
    );
  }
  const links = cityListings(page);
  if (!links.length) return null;
  const content = page.slug || 'home';
  const [[u, label]] = links; // one button only (2026-11-13: fewer Casa-Libre links per page)
  return (
    <div className="city-cta" data-pos="city-cta">
      <a className="btn" href={cl(u, content + '-city-top')}>Ver {label.charAt(0).toLowerCase() + label.slice(1)} en Casa-Libre</a>
    </div>
  );
}
