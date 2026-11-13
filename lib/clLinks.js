import data from '../content/data/casalibre-links.json';

const CL = 'https://casa-libre.com.py';
const EXISTS = new Set((data.urls || []).map((u) => u.replace(/\/$/, '')));
const has = (u) => EXISTS.has(u);

// Casa-Libre's own guides, by topic of the page.
const CL_GUIDES = {
  vender: [CL + '/guias/como-vender-mi-casa', 'Cómo vender mi casa, la guía de Casa-Libre'],
  sinInmo: [CL + '/guias/vender-sin-inmobiliaria', 'Vender sin inmobiliaria, en Casa-Libre'],
  valor: [CL + '/guias/cuanto-vale-mi-propiedad', '¿Cuánto vale mi propiedad? Guía de Casa-Libre'],
  papeles: [CL + '/guias/documentos-para-vender-un-inmueble', 'Documentos para vender un inmueble, en Casa-Libre'],
  impuestos: [CL + '/guias/impuestos-y-gastos-al-vender', 'Impuestos y gastos al vender, en Casa-Libre'],
  gastosCompra: [CL + '/guias/gastos-al-comprar-una-casa', 'Gastos al comprar una casa, en Casa-Libre'],
  alquilar: [CL + '/guias/como-alquilar-mi-propiedad', 'Cómo alquilar mi propiedad, la guía de Casa-Libre'],
  primera: [CL + '/guias/comprar-primera-casa', 'Comprar la primera casa, guía de Casa-Libre'],
};
const BY_GROUP = {
  _default: ['valor', 'papeles', 'impuestos', 'vender', 'sinInmo', 'alquilar', 'primera'],
};
const BASE = [
  [CL + '/empresas', 'Casa-Libre para inmobiliarias y agentes'],
  [CL + '/publicar', 'Publicar propiedades gratis en Casa-Libre'],
  [CL + '/propiedades', 'Ver propiedades en el mapa de Casa-Libre'],
  [CL + '/comprar', 'Propiedades en venta en Casa-Libre'],
  [CL + '/alquilar', 'Propiedades en alquiler en Casa-Libre'],
  [CL + '/guias', 'Guías de Casa-Libre para compartir con propietarios'],
  [CL + '/como-funciona', 'Cómo funciona Casa-Libre'],
  [CL + '/descargar', 'App de Casa-Libre para iPhone y Android'],
];
const TOP_CITIES = [['asuncion', 'Asunción'], ['luque', 'Luque'], ['san-lorenzo', 'San Lorenzo'], ['lambare', 'Lambaré'], ['fernando-de-la-mora', 'Fernando de la Mora'], ['encarnacion', 'Encarnación'], ['ciudad-del-este', 'Ciudad del Este']];

function cityLinks(slug, name) {
  const fixed = [[`${CL}/propiedades-en/${slug}`, `Propiedades en ${name} en Casa-Libre`]].filter(([u]) => has(u));
  return [
    ...fixed,
    cityLink('venta', 'casas', slug, name), cityLink('venta', 'terrenos', slug, name), cityLink('venta', 'departamentos', slug, name),
    cityLink('alquiler', 'casas', slug, name), cityLink('alquiler', 'departamentos', slug, name),
  ];
}

// ---- Filtered Casa-Libre listing links for one city ----
// A path page (/venta/casas/luque) when Casa-Libre has it (it exists only with enough listings),
// otherwise the search with the filters applied: /propiedades?op=venta&type=terreno&q=Luque
// (q must keep the accents: "Ñemby", "Encarnación").
const TYPE_KEY = { casas: 'casa', departamentos: 'depto', terrenos: 'terreno', duplex: 'duplex' };
const TYPE_WORD = { casas: 'Casas', departamentos: 'Departamentos', terrenos: 'Terrenos', duplex: 'Dúplex' };
export function cityUrl(op, tipo, slug, name) {
  const path = `${CL}/${op}/${tipo}/${slug}`;
  if (has(path)) return path;
  return `${CL}/propiedades?op=${op}&type=${TYPE_KEY[tipo]}&q=${encodeURIComponent(name)}`;
}
export function cityLink(op, tipo, slug, name) {
  return [cityUrl(op, tipo, slug, name), `${TYPE_WORD[tipo]} en ${op === 'venta' ? 'venta' : 'alquiler'} en ${name}`];
}
/** The listing buttons at the top of a city page: [primary, ...others]. */
export function cityListings(page) {
  if (!page.city) return [];
  const s = page.city, n = page.cityName || page.city;
  const g = page.group || '';
  if (/^Terrenos/.test(g)) return [cityLink('venta', 'terrenos', s, n), cityLink('venta', 'casas', s, n)];
  if (/^Alquiler/.test(g)) return [cityLink('alquiler', 'casas', s, n), cityLink('alquiler', 'departamentos', s, n)];
  if (/^Mercado/.test(g)) return [cityLink('venta', 'casas', s, n), cityLink('venta', 'terrenos', s, n), cityLink('alquiler', 'departamentos', s, n)];
  return [cityLink('venta', 'casas', s, n), cityLink('venta', 'terrenos', s, n), cityLink('venta', 'departamentos', s, n)];
}

/** About 15 to 20 Casa-Libre links for one page: its city first, then Casa-Libre guides on its topic, then the main pages. */
export function linksFor(page) {
  const out = [];
  if (page.city) out.push(...cityLinks(page.city, page.cityName || page.city));
  for (const k of BY_GROUP[page.group] || BY_GROUP._default) out.push(CL_GUIDES[k]);
  out.push(...BASE);
  const cities = TOP_CITIES.filter(([s]) => s !== page.city);
  const start = (page.slug || '').length % cities.length;
  for (let i = 0; i < 4; i++) {
    const [s, n] = cities[(start + i) % cities.length];
    const u = has(`${CL}/venta/casas/${s}`) ? `${CL}/venta/casas/${s}` : `${CL}/propiedades-en/${s}`;
    out.push([u, u.includes('/venta/') ? `Casas en venta en ${n}` : `Propiedades en ${n}`]);
  }
  const seen = new Set();
  return out.filter(([u]) => (seen.has(u) ? false : seen.add(u)));
}
