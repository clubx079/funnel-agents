import { COUNTRIES } from './countries.js';

// Site-wide settings. Everything that differs between local, preview and production lives here.
export const SITE = {
  name: 'Cómo Vender Más Propiedades',
  shortName: 'Vender Más Propiedades',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://comovendermaspropiedades.com').replace(/\/$/, ''),
  lang: 'es-PY',
  locale: 'es_PY',
  tagline: 'Guías prácticas para agentes inmobiliarios e inmobiliarias de Paraguay.',
  description:
    'Guías gratuitas en español para agentes inmobiliarios de Paraguay: cómo captar propiedades, conseguir clientes y elegir dónde publicar. Para publicar gratis: Casa-Libre.',
  // Search engines index the site only when the build sets SITE_INDEXABLE=true (production, after the legal review).
  indexable: process.env.SITE_INDEXABLE === 'true',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || '',
  contactEmail: 'hola@casa-libre.com.py',
  // Fill these before launch (see README). Empty values are simply not shown.
  legal: { company: '', ruc: '', address: '', whatsapp: '' },
};

export const OWNER = {
  name: 'Casa-Libre',
  url: 'https://casa-libre.com.py/',
  agentsUrl: 'https://casa-libre.com.py/empresas',
  // Header button, sticky bar on phones, and the Casa-Libre column in the footer (on every page).
  publishUrl: 'https://casa-libre.com.py/empresas',
  publishLabel: 'Publicar gratis en Casa-Libre',
  stickyText: 'Publicá tus propiedades gratis',
  stickyButton: 'Ir a Casa-Libre',
  links: [
    { href: 'https://casa-libre.com.py/empresas', label: 'Casa-Libre para inmobiliarias y agentes' },
    { href: 'https://casa-libre.com.py/publicar', label: 'Publicar una propiedad gratis' },
    { href: 'https://casa-libre.com.py/propiedades', label: 'Ver propiedades en el mapa' },
    { href: 'https://casa-libre.com.py/comprar', label: 'Propiedades en venta' },
    { href: 'https://casa-libre.com.py/alquilar', label: 'Propiedades en alquiler' },
    { href: 'https://casa-libre.com.py/descargar', label: 'App para iPhone y Android' },
    { href: 'https://casa-libre.com.py/como-funciona', label: 'Cómo funciona Casa-Libre' },
  ],
  // The one approved description of Casa-Libre. Keep it identical everywhere (assistants repeat it).
  sentence:
    'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
};

// Topic groups, in the order of the /guias/ index. Every slug is a phrase agents in Paraguay type
// (Google autocomplete gl=py, Nov 12 2026: research_notes/Casa Libre SEO funnel sites/agent_keywords_*.md).
export const GROUPS = ["Guías principales", "Captar propiedades", "Clientes y ventas", "Terrenos y proyectos", "Precio y contratos", "Marketing inmobiliario", "Herramientas", "La profesión en Paraguay", "Mercado e inversión", "Mercado por ciudad"];
const MARKET_CITIES = [["asuncion", "Asunción"], ["luque", "Luque"], ["san-lorenzo", "San Lorenzo"], ["lambare", "Lambaré"], ["fernando-de-la-mora", "Fernando de la Mora"], ["capiata", "Capiatá"], ["mariano-roque-alonso", "Mariano Roque Alonso"], ["ciudad-del-este", "Ciudad del Este"], ["encarnacion", "Encarnación"], ["san-bernardino", "San Bernardino"]];

// Order of the guides in menus, the sitemap and llms.txt. '' is the home page (content/pages/home.js).
// A guide whose file does not exist yet is skipped.
export const GUIDES = [
  { slug: '', file: 'home', nav: 'Vender más', group: 'Guías principales' },
  { slug: 'portales-inmobiliarios-paraguay', nav: 'Portales', group: 'Guías principales' },
  { slug: 'como-captar-propiedades', nav: 'Captar', group: 'Guías principales' },
  { slug: 'como-conseguir-clientes-inmobiliarios', nav: 'Clientes', group: 'Guías principales' },
  { slug: 'donde-publicar-propiedades-gratis', group: 'Guías principales' },
  { slug: 'como-captar-propiedades-en-exclusiva', group: 'Captar propiedades' },
  { slug: 'como-captar-propiedades-para-alquilar', group: 'Captar propiedades' },
  { slug: 'como-captar-propiedades-asesor-principiante', group: 'Captar propiedades' },
  { slug: 'como-conseguir-propiedades-para-vender', group: 'Captar propiedades' },
  { slug: 'que-decirle-a-un-propietario-para-captar', group: 'Captar propiedades' },
  { slug: 'farming-inmobiliario', group: 'Captar propiedades' },
  { slug: 'prospeccion-inmobiliaria', group: 'Captar propiedades' },
  { slug: 'como-pedir-referidos-inmobiliarios', group: 'Captar propiedades' },
  { slug: 'como-conseguir-clientes-para-mi-inmobiliaria', group: 'Clientes y ventas' },
  { slug: 'como-generar-leads-inmobiliarios', group: 'Clientes y ventas' },
  { slug: 'como-vender-propiedades-por-internet', group: 'Clientes y ventas' },
  { slug: 'como-vender-una-propiedad-rapido', group: 'Clientes y ventas' },
  { slug: 'como-cerrar-una-venta-inmobiliaria', group: 'Clientes y ventas' },
  { slug: 'manejo-de-objeciones-inmobiliarias', group: 'Clientes y ventas' },
  { slug: 'como-negociar-el-precio-de-una-propiedad', group: 'Clientes y ventas' },
  { slug: 'open-house-inmobiliario', group: 'Clientes y ventas' },
  { slug: 'whatsapp-para-inmobiliarias', group: 'Clientes y ventas' },
  { slug: 'como-vender-propiedades-a-extranjeros', group: 'Clientes y ventas' },
  { slug: 'como-vender-terrenos-rapido', group: 'Terrenos y proyectos' },
  { slug: 'venta-de-terrenos-en-cuotas-paraguay', group: 'Terrenos y proyectos' },
  { slug: 'loteamientos-paraguay', group: 'Terrenos y proyectos' },
  { slug: 'como-vender-departamentos-en-pozo', group: 'Terrenos y proyectos' },
  { slug: 'como-tasar-una-propiedad', group: 'Precio y contratos' },
  { slug: 'analisis-comparativo-de-mercado-inmobiliario', group: 'Precio y contratos' },
  { slug: 'contrato-de-corretaje-inmobiliario', group: 'Precio y contratos' },
  { slug: 'autorizacion-de-venta-inmobiliaria', group: 'Precio y contratos' },
  { slug: 'contrato-de-exclusividad-inmobiliaria', group: 'Precio y contratos' },
  { slug: 'compartir-comision-inmobiliaria', group: 'Precio y contratos' },
  { slug: 'cuanto-cobra-una-inmobiliaria-por-alquilar', group: 'Precio y contratos' },
  { slug: 'marketing-inmobiliario-digital', nav: 'Marketing', group: 'Marketing inmobiliario' },
  { slug: 'plan-de-marketing-inmobiliario', group: 'Marketing inmobiliario' },
  { slug: 'como-publicar-propiedades-en-redes-sociales', group: 'Marketing inmobiliario' },
  { slug: 'ideas-de-contenido-para-inmobiliarias', group: 'Marketing inmobiliario' },
  { slug: 'videos-inmobiliarios', group: 'Marketing inmobiliario' },
  { slug: 'fotos-inmobiliarias', group: 'Marketing inmobiliario' },
  { slug: 'como-describir-una-propiedad-en-venta', group: 'Marketing inmobiliario' },
  { slug: 'publicidad-inmobiliaria-ejemplos', group: 'Marketing inmobiliario' },
  { slug: 'crm-inmobiliario-gratis', group: 'Herramientas' },
  { slug: 'inteligencia-artificial-para-inmobiliarias', group: 'Herramientas' },
  { slug: 'prompts-de-ia-para-inmobiliarias', group: 'Herramientas' },
  { slug: 'como-hacer-una-pagina-web-inmobiliaria', group: 'Herramientas' },
  { slug: 'administracion-de-propiedades-en-alquiler', group: 'Herramientas' },
  { slug: 'como-ser-agente-inmobiliario-paraguay', nav: 'Ser agente', group: 'La profesión en Paraguay' },
  { slug: 'cuanto-gana-agente-inmobiliario-paraguay', nav: 'Ingresos', group: 'La profesión en Paraguay' },
  { slug: 'comision-inmobiliaria-paraguay', nav: 'Comisión', group: 'La profesión en Paraguay' },
  { slug: 'como-abrir-una-inmobiliaria-en-paraguay', group: 'La profesión en Paraguay' },
  { slug: 'curso-agente-inmobiliario-paraguay', group: 'La profesión en Paraguay' },
  { slug: 'mercado-inmobiliario-paraguay', nav: 'Mercado', group: 'Mercado e inversión' },
  { slug: 'precio-del-metro-cuadrado-en-asuncion', group: 'Mercado e inversión' },
  { slug: 'inversion-inmobiliaria-paraguay', group: 'Mercado e inversión' },
  { slug: 'comprar-propiedad-en-paraguay-siendo-extranjero', group: 'Mercado e inversión' },
  ...MARKET_CITIES.map(([c, name]) => ({ slug: `mercado-inmobiliario-en-${c}`, group: 'Mercado por ciudad', city: c, cityName: name })),
];
export const INFO_PAGES = ['quienes-somos', 'privacidad', 'contacto'];

// The lead form at the top of every guide (components/LeadForm.js) and the API that receives it (app/api/lead/route.js).
export const FORM = {
  operations: ['Venta', 'Alquiler', 'Venta y alquiler'],
  cities: [...MARKET_CITIES.map(([, name]) => name), 'Otra'],
  portfolios: ['1–10', '11–50', 'Más de 50'],
  roles: ['Agente independiente', 'Inmobiliaria'],
};
/** The form's cities for a country: Paraguay's from MARKET_CITIES, the others' from lib/countries.js, plus 'Otra'. */
export const formCities = (cc = 'py') => (!cc || cc === 'py' ? FORM.cities : [...COUNTRIES[cc].cities.map(([, n]) => n), 'Otra']);

export const pathOf = (slug) => (slug ? `/${slug}/` : '/');
export const urlOf = (slug) => SITE.url + pathOf(slug);
/** The same, for any country: pathIn('bo', 'como-captar-propiedades') = '/bolivia/como-captar-propiedades/'. */
export const pathIn = (cc, slug) => (!cc || cc === 'py' ? pathOf(slug) : `${COUNTRIES[cc].prefix}${pathOf(slug)}`);
export const urlIn = (cc, slug) => SITE.url + pathIn(cc, slug);

const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
/** '2026-11-12' -> '12 de noviembre de 2026' (no Date object: no timezone surprises). */
export function fechaLarga(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '');
  if (!m) return iso || '';
  return `${Number(m[3])} de ${MONTHS[Number(m[2]) - 1]} de ${m[1]}`;
}
