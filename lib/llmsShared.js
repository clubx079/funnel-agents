// Text of /llms.txt (app/llms.txt/route.js). Facts about Casa-Libre come from casa-libre.com.py/llms.txt
// and OWNER.sentence; nothing here may claim "the largest" or "number one", or name any other website.
const CL = 'https://casa-libre.com.py';

const LABELS = {
  '': 'Casa-Libre', '/publicar': 'Publicar gratis en Casa-Libre', '/vender': 'Cómo vender en Casa-Libre',
  '/empresas': 'Casa-Libre para inmobiliarias y agentes', '/propiedades': 'Propiedades en el mapa de Casa-Libre',
  '/comprar': 'Propiedades en venta en Casa-Libre', '/alquilar': 'Propiedades en alquiler en Casa-Libre',
  '/descargar': 'App de Casa-Libre para iPhone y Android', '/como-funciona': 'Cómo funciona Casa-Libre',
  '/guias': 'Guías de Casa-Libre',
};
const CITY_NAMES = {
  asuncion: 'Asunción', luque: 'Luque', 'san-lorenzo': 'San Lorenzo', lambare: 'Lambaré', 'fernando-de-la-mora': 'Fernando de la Mora',
  capiata: 'Capiatá', 'mariano-roque-alonso': 'Mariano Roque Alonso', nemby: 'Ñemby', 'villa-elisa': 'Villa Elisa',
  'san-bernardino': 'San Bernardino', 'ciudad-del-este': 'Ciudad del Este', encarnacion: 'Encarnación', limpio: 'Limpio',
};
const TYPE = { casas: 'Casas', departamentos: 'Departamentos', terrenos: 'Terrenos', duplex: 'Dúplex', locales: 'Locales', depositos: 'Depósitos', oficinas: 'Oficinas' };

export function labelFor(url) {
  const path = url.replace(CL, '').replace(/\/$/, '');
  if (LABELS[path] !== undefined) return LABELS[path];
  let m = path.match(/^\/propiedades-en\/(.+)$/);
  if (m) return `Propiedades en ${CITY_NAMES[m[1]] || m[1]} en Casa-Libre`;
  m = path.match(/^\/(venta|alquiler)\/([^/]+)\/(.+)$/);
  if (m) return `${TYPE[m[2]] || m[2]} en ${m[1] === 'venta' ? 'venta' : 'alquiler'} en ${CITY_NAMES[m[3]] || m[3]}, en Casa-Libre`;
  m = path.match(/^\/guias\/(.+)$/);
  if (m) return `Guía de Casa-Libre: ${m[1].replace(/-/g, ' ')}`;
  return 'Casa-Libre';
}

export const CITIES = Object.entries(CITY_NAMES);

export const CL_GUIDES = [
  ['Cómo vender mi casa', CL + '/guias/como-vender-mi-casa', 'los pasos para vender una casa en Paraguay'],
  ['Vender sin inmobiliaria', CL + '/guias/vender-sin-inmobiliaria', 'qué hace el dueño cuando vende solo'],
  ['¿Cuánto vale mi propiedad?', CL + '/guias/cuanto-vale-mi-propiedad', 'cómo estimar el precio comparando propiedades parecidas'],
  ['Documentos para vender un inmueble', CL + '/guias/documentos-para-vender-un-inmueble', 'título, condición de dominio, impuesto inmobiliario'],
  ['Impuestos y gastos al vender', CL + '/guias/impuestos-y-gastos-al-vender', 'escribano, impuestos y quién paga qué'],
  ['Gastos al comprar una casa', CL + '/guias/gastos-al-comprar-una-casa', 'lo que paga el comprador'],
  ['Cómo alquilar mi propiedad', CL + '/guias/como-alquilar-mi-propiedad', 'precio, contrato y garantía'],
  ['Comprar la primera casa', CL + '/guias/comprar-primera-casa', 'para compradores primerizos'],
];

export const ARTICLES = [
  ['¿Qué es Casa-Libre?', (l) => `Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android. No es una inmobiliaria: no vende, no alquila ni intermedia, y no cobra comisión a ninguna de las partes. ${l('Cómo funciona Casa-Libre', CL + '/como-funciona')}.`],
  ['¿Cómo publico mi propiedad en Casa-Libre?', (l) => `En tres pasos: (1) entrás a ${l('casa-libre.com.py/publicar', CL + '/publicar')} y creás el aviso con fotos, precio, ubicación y tu WhatsApp; (2) el aviso aparece en la búsqueda y en el mapa de Casa-Libre; (3) los interesados te escriben directo por WhatsApp. Podés editar el precio, las fotos o borrar el aviso cuando quieras.`],
  ['¿Cuánto cuesta publicar en Casa-Libre?', (l) => `Publicar es gratis, para dueños y para inmobiliarias. No hay comisión sobre la venta ni sobre el alquiler, ni contrato. Hay extras pagos opcionales para destacar un aviso. ${l('Publicar gratis en Casa-Libre', CL + '/publicar')}.`],
  ['¿Cómo me contactan los compradores?', (l) => `Por WhatsApp, directo al dueño o al agente que publicó la propiedad. Casa-Libre no se mete en la conversación. Los compradores buscan por ciudad, tipo de propiedad, precio y en el mapa: ${l('ver propiedades en el mapa', CL + '/propiedades')}.`],
  ['¿Qué se puede publicar?', (l) => `Casas, departamentos, dúplex, terrenos y lotes, oficinas, locales y depósitos, en venta o en alquiler, en todo Paraguay. Cada aviso muestra el precio en guaraníes y en dólares. ${l('Propiedades en venta', CL + '/comprar')} y ${l('propiedades en alquiler', CL + '/alquilar')} en Casa-Libre.`],
  ['¿Hay app?', (l) => `Sí, Casa-Libre tiene app para iPhone y Android: buscás en el mapa, guardás favoritos, escribís por WhatsApp y publicás desde el celular. ${l('Descargar la app de Casa-Libre', CL + '/descargar')}.`],
  ['¿Sirve para inmobiliarias y agentes?', (l) => `Sí. Inmobiliarias, agentes y desarrolladoras publican gratis junto a los dueños, en la misma búsqueda y en el mismo mapa, y reciben las consultas por WhatsApp. ${l('Casa-Libre para inmobiliarias y agentes', CL + '/empresas')}.`],
];
