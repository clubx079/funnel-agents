// The countries this site covers. Paraguay is the original site at the root (/); every other country lives
// under its own folder (/bolivia/, /uruguay/, /venezuela/, /el-salvador/) with its content in content/pages/<code>/.
// Each country links ONLY to its own Casa-Libre (npm run check fails on a link to another country's Casa-Libre).
//
// verified: Casa-Libre paths checked live on 2026-11-13 with a read-only GET (browser user agent, paced):
// each returned 200 (/publicar returns 307 to the publishing flow, as in Paraguay). Taken from each site's
// sitemap.xml plus the filtered searches. A path not in this list may not be linked (except a filtered
// search /propiedades?op=…&type=…&q=<ciudad>, which works for any city). Re-check before adding paths.

export const COUNTRY_CODES = ['py', 'bo', 'uy', 've', 'sv'];

export const COUNTRIES = {
  py: {
    code: 'py',
    name: 'Paraguay',
    prefix: '',                       // the original site, at the root
    lang: 'es-PY',
    locale: 'es_PY',
    cl: 'https://casa-libre.com.py',
    currency: { code: 'PYG', name: 'guaraníes', symbol: 'Gs.', listings: 'guaraníes y dólares' },
    phone: { cc: '595', example: '0981 123 456', hint: 'un celular de Paraguay, por ejemplo 0981 123 456' },
    voice: 'voseo',
    terms: { agent: 'agente inmobiliario', agentAlt: 'asesor inmobiliario', agency: 'inmobiliaria', commission: 'comisión', notary: 'escribano', registry: 'Registro Público', flat: 'departamento' },
    cities: [], // Paraguay's cities live in lib/site.js (GUIDES, FORM.cities)
    verified: null, // Paraguay uses content/data/casalibre-links.json and the list in scripts/check-content.mjs
  },
  bo: {
    code: 'bo',
    name: 'Bolivia',
    prefix: '/bolivia',
    lang: 'es-BO',
    locale: 'es_BO',
    cl: 'https://casa-libre.com.bo',
    currency: { code: 'BOB', name: 'bolivianos', symbol: 'Bs.', listings: 'dólares y bolivianos' },
    phone: { cc: '591', example: '71234567', hint: 'un celular de Bolivia, por ejemplo 71234567' },
    voice: 'tú',
    terms: { agent: 'agente inmobiliario', agentAlt: 'corredor inmobiliario', agency: 'inmobiliaria', commission: 'comisión', notary: 'notario de fe pública', registry: 'Derechos Reales', flat: 'departamento' },
    cities: [
      ['santa-cruz-de-la-sierra', 'Santa Cruz de la Sierra'], ['la-paz', 'La Paz'], ['cochabamba', 'Cochabamba'], ['el-alto', 'El Alto'],
      ['sucre', 'Sucre'], ['tarija', 'Tarija'], ['oruro', 'Oruro'], ['potosi', 'Potosí'],
    ],
    homeAnswer: 'Para vender más propiedades en Bolivia, un agente inmobiliario necesita tres cosas: captar más inmuebles, darles más exposición y responder rápido cada consulta. Estas guías explican cómo hacerlo en Santa Cruz, La Paz, Cochabamba y el resto del país. Para publicar tu cartera gratis y recibir consultas por WhatsApp, te recomendamos Casa-Libre.',
    verified: [
      '/propiedades', '/comprar', '/alquilar', '/vender',
      '/publicar', '/nuestra-historia', '/como-funciona', '/preguntas-frecuentes',
      '/guias', '/empresas', '/administracion-de-propiedades', '/descargar',
      '/propiedades-en/santa-cruz-de-la-sierra', '/propiedades-en/la-paz', '/propiedades-en/cochabamba', '/propiedades-en/el-alto',
      '/propiedades-en/sucre', '/propiedades-en/oruro', '/propiedades-en/tarija', '/propiedades-en/potosi',
      '/guias/como-vender-mi-casa', '/guias/impuestos-y-gastos-al-vender', '/guias/cuanto-vale-mi-propiedad', '/guias/vender-sin-inmobiliaria',
      '/guias/documentos-para-vender-un-inmueble', '/guias/como-alquilar-mi-propiedad', '/guias/gastos-al-comprar-una-casa', '/guias/comprar-primera-casa',
      '/venta/departamentos/la-paz', '/venta/casas/santa-cruz-de-la-sierra', '/venta/casas/cochabamba', '/venta/departamentos/santa-cruz-de-la-sierra',
      '/venta/departamentos/cochabamba', '/venta/departamentos/la-paz/sur', '/venta/departamentos/santa-cruz-de-la-sierra/equipetrol-noroeste', '/venta/casas/santa-cruz-de-la-sierra/norte',
      '/alquiler/departamentos/santa-cruz-de-la-sierra',
      // + found live by scripts/build-market.mjs (2026-11-13; casa_libre_pages in content/data/bo-market.json)
      '/alquiler/casas/santa-cruz-de-la-sierra', '/alquiler/oficinas/santa-cruz-de-la-sierra', '/venta/depositos/santa-cruz-de-la-sierra', '/venta/locales/santa-cruz-de-la-sierra',
      '/venta/terrenos/santa-cruz-de-la-sierra', '/alquiler/casas/cochabamba', '/alquiler/oficinas/cochabamba', '/venta/oficinas/cochabamba',
      '/venta/terrenos/cochabamba', '/alquiler/departamentos/la-paz', '/alquiler/oficinas/la-paz', '/venta/casas/la-paz',
    ],
  },
  uy: {
    code: 'uy',
    name: 'Uruguay',
    prefix: '/uruguay',
    lang: 'es-UY',
    locale: 'es_UY',
    cl: 'https://uy.casa-libre.com',
    currency: { code: 'UYU', name: 'pesos uruguayos', symbol: '$', listings: 'dólares (U$S) para la venta y pesos para el alquiler' },
    phone: { cc: '598', example: '094 123 456', hint: 'un celular de Uruguay, por ejemplo 094 123 456' },
    voice: 'voseo',
    terms: { agent: 'agente inmobiliario', agentAlt: 'operador inmobiliario', agency: 'inmobiliaria', commission: 'comisión', notary: 'escribano', registry: 'Registro de la Propiedad', flat: 'apartamento' },
    cities: [
      ['montevideo', 'Montevideo'], ['punta-del-este', 'Punta del Este'], ['maldonado', 'Maldonado'], ['canelones', 'Canelones'],
      ['ciudad-de-la-costa', 'Ciudad de la Costa'], ['colonia-del-sacramento', 'Colonia del Sacramento'], ['salto', 'Salto'], ['paysandu', 'Paysandú'],
    ],
    homeAnswer: 'Para vender más propiedades en Uruguay, una inmobiliaria o un agente tiene que captar más, darle más exposición a cada propiedad y contestar rápido cada consulta. Estas guías explican cómo hacerlo en Montevideo, Canelones, Maldonado y el interior. Para publicar tu cartera gratis y recibir las consultas por WhatsApp, te recomendamos Casa-Libre.',
    verified: [
      '/propiedades', '/comprar', '/alquilar', '/vender',
      '/publicar', '/nuestra-historia', '/como-funciona', '/preguntas-frecuentes',
      '/guias', '/empresas', '/administracion-de-propiedades', '/descargar',
      '/propiedades-en/montevideo', '/propiedades-en/punta-del-este', '/propiedades-en/maldonado', '/propiedades-en/canelones',
      '/propiedades-en/ciudad-de-la-costa', '/propiedades-en/salto', '/propiedades-en/colonia-del-sacramento', '/propiedades-en/paysandu',
      '/guias/como-vender-mi-casa', '/guias/impuestos-y-gastos-al-vender', '/guias/cuanto-vale-mi-propiedad', '/guias/vender-sin-inmobiliaria',
      '/guias/documentos-para-vender-un-inmueble', '/guias/como-alquilar-mi-propiedad', '/guias/gastos-al-comprar-una-casa', '/guias/comprar-primera-casa',
      '/venta/departamentos/canelones', '/venta/departamentos/punta-del-este', '/alquiler/casas/montevideo', '/venta/departamentos/maldonado',
      '/venta/departamentos/montevideo', '/venta/casas/montevideo', '/alquiler/departamentos/punta-del-este', '/alquiler/casas/canelones',
      '/alquiler/oficinas/montevideo', '/alquiler/departamentos/montevideo', '/venta/casas/canelones', '/venta/locales/montevideo',
      '/venta/terrenos/canelones', '/venta/departamentos/montevideo/centro', '/venta/departamentos/montevideo/pocitos', '/venta/departamentos/montevideo/tres-cruces',
      '/alquiler/departamentos/montevideo/cordon', '/venta/departamentos/montevideo/cordon', '/alquiler/departamentos/montevideo/punta-carretas', '/alquiler/oficinas/montevideo/centro',
      // + found live by scripts/build-market.mjs (2026-11-13; casa_libre_pages in content/data/uy-market.json)
      '/alquiler/depositos/montevideo', '/alquiler/locales/montevideo', '/venta/depositos/montevideo', '/venta/duplex/montevideo',
      '/venta/terrenos/montevideo', '/alquiler/duplex/punta-del-este', '/alquiler/locales/punta-del-este', '/alquiler/oficinas/punta-del-este',
      '/venta/casas/punta-del-este', '/venta/oficinas/punta-del-este', '/alquiler/casas/maldonado', '/alquiler/departamentos/maldonado',
      '/alquiler/locales/maldonado', '/venta/casas/maldonado', '/venta/terrenos/maldonado', '/alquiler/casas/ciudad-de-la-costa',
    ],
  },
  ve: {
    code: 've',
    name: 'Venezuela',
    prefix: '/venezuela',
    lang: 'es-VE',
    locale: 'es_VE',
    cl: 'https://casa-libre.com.ve',
    currency: { code: 'VES', name: 'bolívares', symbol: 'Bs.', listings: 'dólares' },
    phone: { cc: '58', example: '0412 123 4567', hint: 'un celular de Venezuela, por ejemplo 0412 123 4567' },
    voice: 'tú',
    terms: { agent: 'asesor inmobiliario', agentAlt: 'agente inmobiliario', agency: 'inmobiliaria', commission: 'honorarios', notary: 'notario', registry: 'Registro Inmobiliario', flat: 'apartamento' },
    cities: [
      ['caracas', 'Caracas'], ['valencia', 'Valencia'], ['maracaibo', 'Maracaibo'], ['barquisimeto', 'Barquisimeto'],
      ['maracay', 'Maracay'], ['isla-de-margarita', 'Isla de Margarita'], ['san-cristobal', 'San Cristóbal'], ['puerto-ordaz', 'Puerto Ordaz'],
    ],
    homeAnswer: 'Para vender más inmuebles en Venezuela, un asesor inmobiliario necesita captar más, darle más exposición a cada propiedad y responder rápido cada consulta. Estas guías explican cómo hacerlo en Caracas, Valencia, Maracaibo y el resto del país. Para publicar tu cartera gratis y recibir las consultas por WhatsApp, te recomendamos Casa-Libre.',
    verified: [
      '/propiedades', '/comprar', '/alquilar', '/vender',
      '/publicar', '/nuestra-historia', '/como-funciona', '/preguntas-frecuentes',
      '/guias', '/empresas', '/administracion-de-propiedades', '/descargar',
      '/propiedades-en/caracas', '/propiedades-en/valencia', '/propiedades-en/maracaibo', '/propiedades-en/barquisimeto',
      '/propiedades-en/maracay', '/propiedades-en/isla-de-margarita', '/propiedades-en/san-cristobal', '/propiedades-en/puerto-ordaz',
      '/guias/como-vender-mi-casa', '/guias/impuestos-y-gastos-al-vender', '/guias/cuanto-vale-mi-propiedad', '/guias/vender-sin-inmobiliaria',
      '/guias/documentos-para-vender-un-inmueble', '/guias/como-alquilar-mi-propiedad', '/guias/gastos-al-comprar-una-casa', '/guias/comprar-primera-casa',
      '/venta/departamentos/caracas',
    ],
  },
  sv: {
    code: 'sv',
    name: 'El Salvador',
    prefix: '/el-salvador',
    lang: 'es-SV',
    locale: 'es_SV',
    cl: 'https://sv.casa-libre.com',
    currency: { code: 'USD', name: 'dólares', symbol: 'US$', listings: 'dólares' },
    phone: { cc: '503', example: '7123 4567', hint: 'un celular de El Salvador, por ejemplo 7123 4567' },
    voice: 'usted',
    terms: { agent: 'agente de bienes raíces', agentAlt: 'corredor de bienes raíces', agency: 'inmobiliaria', commission: 'comisión', notary: 'notario', registry: 'CNR (Centro Nacional de Registros)', flat: 'apartamento' },
    cities: [
      ['san-salvador', 'San Salvador'], ['santa-tecla', 'Santa Tecla'], ['antiguo-cuscatlan', 'Antiguo Cuscatlán'], ['nuevo-cuscatlan', 'Nuevo Cuscatlán'],
      ['la-libertad', 'La Libertad'], ['santa-ana', 'Santa Ana'], ['san-miguel', 'San Miguel'], ['soyapango', 'Soyapango'],
    ],
    homeAnswer: 'Para vender más propiedades en El Salvador, un agente de bienes raíces necesita captar más, darle más exposición a cada propiedad y responder rápido cada consulta. Estas guías explican cómo hacerlo en San Salvador, Santa Tecla, La Libertad y el resto del país. Para publicar su cartera gratis y recibir las consultas por WhatsApp, le recomendamos Casa-Libre.',
    verified: [
      '/propiedades', '/comprar', '/alquilar', '/vender',
      '/publicar', '/nuestra-historia', '/como-funciona', '/preguntas-frecuentes',
      '/guias', '/empresas', '/administracion-de-propiedades', '/descargar',
      '/propiedades-en/san-salvador', '/propiedades-en/santa-tecla', '/propiedades-en/antiguo-cuscatlan', '/propiedades-en/nuevo-cuscatlan',
      '/propiedades-en/la-libertad', '/propiedades-en/santa-ana', '/propiedades-en/san-miguel', '/propiedades-en/soyapango',
      '/guias/como-vender-mi-casa', '/guias/impuestos-y-gastos-al-vender', '/guias/cuanto-vale-mi-propiedad', '/guias/vender-sin-inmobiliaria',
      '/guias/documentos-para-vender-un-inmueble', '/guias/como-alquilar-mi-propiedad', '/guias/gastos-al-comprar-una-casa', '/guias/comprar-primera-casa',
      '/venta/casas/san-salvador',
    ],
  },
};

export const OTHER_COUNTRIES = COUNTRY_CODES.filter((c) => c !== 'py');

/** 'py' for '/', '/guias/', '/como-captar-propiedades/'; 'bo' for '/bolivia/…' and so on. */
export function countryOfPath(path) {
  const p = String(path || '/');
  for (const c of OTHER_COUNTRIES) {
    const pre = COUNTRIES[c].prefix;
    if (p === pre || p.startsWith(pre + '/')) return c;
  }
  return 'py';
}

/** The country whose Casa-Libre an absolute URL points to, or '' for any other URL. */
export function countryOfClUrl(url) {
  const s = String(url || '');
  for (const c of COUNTRY_CODES) {
    const o = COUNTRIES[c].cl;
    if (s === o || s.startsWith(o + '/') || s.startsWith(o + '?') || s.startsWith(o + '#')) return c;
  }
  if (/^https:\/\/www\.casa-libre\.com\.py(\/|\?|#|$)/.test(s)) return 'py';
  return '';
}

/** Is this Casa-Libre URL (no UTM tags) a verified page of its country? Filtered searches count for any city. */
export function isVerifiedClUrl(url, cc) {
  const C = COUNTRIES[cc];
  if (!C || !C.verified) return false;
  const s = String(url).replace(/&amp;/g, '&');
  if (!s.startsWith(C.cl)) return false;
  const path = s.slice(C.cl.length).replace(/\/$/, '') || '/';
  if (/^\/propiedades\?op=(venta|alquiler)&type=(casa|depto|terreno|duplex|comercial|oficina|deposito|local)(&q=[^&"\s]+)?$/.test(path)) return true;
  return path === '/' || C.verified.includes(path);
}

/** A city's listings on its country's Casa-Libre: the city page when verified, else the filtered search. */
export function countryCityUrl(cc, op, type, slug, name) {
  const C = COUNTRIES[cc];
  const word = { casa: 'casas', depto: 'departamentos', terreno: 'terrenos' }[type];
  const path = `/${op}/${word}/${slug}`;
  if (word && C.verified.includes(path)) return C.cl + path;
  return `${C.cl}/propiedades?op=${op}&type=${type}&q=${encodeURIComponent(name)}`;
}
