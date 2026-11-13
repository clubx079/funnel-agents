import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd, localPerUsd } from '../../../lib/market.js';

const m = cityMarket('uy', 'punta-del-este');
const mvd = cityMarket('uy', 'montevideo');
const D = snapshotDateEs('uy');
const usd = fmtUsd;
const n = (x) => usd(x).replace('USD ', '');
const pct = (x) => String(x).replace('.', ',');
const rate = localPerUsd('uy');
const pesos = (x) => `$ ${(Math.round((x * rate) / 1000) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} aprox.`;

export default {
  slug: 'mercado-inmobiliario-en-punta-del-este',
  group: 'Mercado por ciudad',
  order: 20,
  city: 'punta-del-este',
  cityName: 'Punta del Este',
  cityType: 'depto',
  title: 'Mercado inmobiliario en Punta del Este: precios y oferta',
  h1: 'Mercado inmobiliario en Punta del Este',
  description:
    'Mercado inmobiliario en Punta del Este para agentes: cuánto piden apartamentos en venta y en alquiler en Casa-Libre, cómo se compara con Montevideo y cómo captar.',
  navLabel: 'Mercado en Punta del Este',
  blurb: 'Precios pedidos de apartamentos en venta y alquiler en Punta del Este, comparados con Montevideo, y cómo trabajar el balneario.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/uy-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026; small sample, said on the page); pesos approximate at 40.3. A Maldonado reader should confirm the well-known geography (península, Playa Mansa and Playa Brava, summer season, many non-resident owners and buyers from the region).',
  answer: `En Punta del Este casi todo lo publicado en Casa-Libre son apartamentos: ${m.for_sale.departamentos} de las ${m.for_sale.total} propiedades en venta. Según las propiedades publicadas al ${D} (precios pedidos, no precios de cierre), un apartamento pide en mediana ${usd(m.departamentos_venta_price.median_usd)} y se alquila por ${usd(m.departamentos_alquiler_price_month.median_usd)} al mes. Las inmobiliarias publican gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} propiedades en venta y ${m.for_rent.total} en alquiler en Punta del Este, publicadas en Casa-Libre al ${D}.`,
    `Apartamento en venta: mediana de ${usd(m.departamentos_venta_price.median_usd)}, contra ${usd(mvd.departamentos_venta_price.median_usd)} en Montevideo.`,
    `Apartamento en alquiler: mediana de ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes, sobre ${m.departamentos_alquiler_price_month.listings_with_price} avisos con precio.`,
    `Relación bruta entre alquiler y precio: ${pct(m.departamento_gross_rent_yield_pct)}% por año, la más baja de las ciudades con dato.`,
  ],
  cta: {
    title: '¿Trabajás en Punta del Este? Publicá tu cartera',
    text: 'Apartamentos en venta y en alquiler del balneario se publican gratis en Casa-Libre, con las consultas directo por WhatsApp.',
    button: 'Crear cuenta para inmobiliarias',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'punta-del-este-en-numeros',
      h2: '¿Cómo está el mercado inmobiliario en Punta del Este?',
      blocks: [
        {
          t: 'p',
          html: `Es un mercado de apartamentos con precios pedidos altos y poca oferta publicada. La tabla resume lo que había en Casa-Libre al ${D} (precios pedidos, no precios de cierre).`,
        },
        cityMarketTable('uy', 'punta-del-este'),
        {
          t: 'p',
          html: `Es una muestra chica: la mediana de venta sale de ${m.departamentos_venta_price.listings_with_price} apartamentos y la de alquiler de ${m.departamentos_alquiler_price_month.listings_with_price}. No hay dato de casas ni de terrenos. Tomalo como orientación, nunca como tasación.`,
        },
      ],
    },
    {
      id: 'apartamentos-en-punta-del-este',
      h2: '¿Cuánto cuesta un apartamento en Punta del Este?',
      blocks: [
        {
          t: 'p',
          html: `La mediana pedida es ${usd(m.departamentos_venta_price.median_usd)}, con la mitad central entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}. En Montevideo la mediana es ${usd(mvd.departamentos_venta_price.median_usd)}.`,
        },
        {
          t: 'p',
          html: 'Parte de la diferencia suele estar en la ubicación frente al mar, la vista y los servicios del edificio. Un apartamento sobre la Playa Brava, otro en la península y otro a varias cuadras de la costa son productos distintos, aunque tengan los mismos metros. Poné en el aviso la distancia al mar, la vista y los servicios del edificio.',
        },
      ],
    },
    {
      id: 'alquileres-en-punta-del-este',
      h2: '¿Cuánto se pide de alquiler en Punta del Este?',
      blocks: [
        {
          t: 'p',
          html: `Un apartamento pide en mediana ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes (${pesos(m.departamentos_alquiler_price_month.median_usd)}), con la mitad central entre ${usd(m.departamentos_alquiler_price_month.p25_usd)} y ${n(m.departamentos_alquiler_price_month.p75_usd)}. Son precios mensuales pedidos en los avisos.`,
        },
        {
          t: 'p',
          html: `La relación bruta entre alquiler y precio de venta da ${pct(m.departamento_gross_rent_yield_pct)}% por año, menos que en Montevideo (${pct(mvd.departamento_gross_rent_yield_pct)}%). Es alquiler mediano por 12, dividido el precio mediano de venta: no descuenta gastos comunes, impuestos ni meses vacíos, y no es un retorno.`,
        },
        {
          t: 'p',
          html: 'El alquiler de temporada funciona con otra lógica, por semana o quincena en verano. Si el propietario piensa en eso, seguí <a href="/uruguay/alquileres-de-temporada-punta-del-este/">alquileres de temporada en Punta del Este</a>. Para el alquiler anual, mostrale los apartamentos en alquiler en Punta del Este en <a href="https://uy.casa-libre.com/alquiler/departamentos/punta-del-este">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'quien-compra-en-punta-del-este',
      h2: '¿Quién compra y quién vende en Punta del Este?',
      blocks: [
        {
          t: 'p',
          html: 'Muchos propietarios no viven en la ciudad todo el año, y una parte de los compradores viene del exterior, sobre todo de la región. Eso cambia el trabajo del agente: buena parte de la relación se lleva a distancia.',
        },
        {
          t: 'ul',
          items: [
            'Propietario no residente: necesita fotos, informes y respuestas por WhatsApp sin tener que viajar.',
            'Comprador extranjero: pregunta por los pasos de la compra, el escribano y los impuestos antes que por el precio.',
            'Inversor: compara la relación entre alquiler y precio con otras ciudades.',
          ],
        },
        {
          t: 'p',
          html: 'Lo que pregunta un comprador de afuera está ordenado en <a href="/uruguay/comprar-propiedad-en-uruguay-siendo-extranjero/">comprar una propiedad en Uruguay siendo extranjero</a>.',
        },
      ],
    },
    {
      id: 'que-captar-en-punta-del-este',
      h2: '¿Qué conviene captar en Punta del Este?',
      blocks: [
        {
          t: 'p',
          html: `Apartamentos, para venta y para alquiler anual: son ${m.for_sale.departamentos} de las ${m.for_sale.total} propiedades en venta. Las casas casi no aparecen (${m.for_sale.casas} en venta publicada), así que una casa bien captada tiene poca competencia en la búsqueda.`,
        },
        {
          t: 'p',
          html: 'Para el propietario que vive afuera y no quiere ocuparse del inquilino, ofrecé la administración como parte de la captación: es un argumento fuerte para quedarte con la propiedad.',
        },
        {
          t: 'casalibre',
          title: 'Propietarios que no quieren administrar',
          html: 'Para el propietario que alquila pero no quiere ocuparse, Casa-Libre ofrece administración de propiedades en Uruguay.',
          button: 'Ver administración de propiedades',
          href: 'https://uy.casa-libre.com/administracion-de-propiedades',
        },
      ],
    },
    {
      id: 'como-trabajar-punta-del-este',
      h2: 'Cómo captar y vender propiedades en Punta del Este',
      blocks: [
        {
          t: 'p',
          html: 'Con compradores y propietarios a distancia, el aviso hace la primera visita. Ganás la captación mostrando cómo se va a ver la propiedad en línea, sin prometer precio ni plazo.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Fotos y video completos', html: 'Vista, terraza, áreas comunes del edificio y la playa más cercana, con luz natural.' },
            { title: 'Datos claros', html: 'Precio en dólares, gastos comunes, metros, garaje y ubicación exacta en el mapa.' },
            { title: 'Atención a distancia', html: 'Respondé por WhatsApp el mismo día y ofrecé videollamada para la primera visita.' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta un apartamento en Punta del Este?',
      a: `Pide en mediana ${usd(m.departamentos_venta_price.median_usd)}, con la mitad central entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}. Sale de ${m.departamentos_venta_price.listings_with_price} avisos de Casa-Libre al ${D}, con precio pedido, no de cierre.`,
    },
    {
      q: '¿Cuánto se pide de alquiler anual en Punta del Este?',
      a: `Un apartamento pide en mediana ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes (${pesos(m.departamentos_alquiler_price_month.median_usd)}), sobre ${m.departamentos_alquiler_price_month.listings_with_price} avisos. La temporada se cotiza aparte.`,
    },
    {
      q: '¿Es más caro Punta del Este que Montevideo?',
      a: `En apartamentos, según los precios pedidos sí: ${usd(m.departamentos_venta_price.median_usd)} de mediana contra ${usd(mvd.departamentos_venta_price.median_usd)} en Montevideo. El alquiler también es más alto (${usd(m.departamentos_alquiler_price_month.median_usd)} contra ${usd(mvd.departamentos_alquiler_price_month.median_usd)} por mes).`,
    },
    {
      q: '¿Dónde publicar propiedades en Punta del Este?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias y agentes, hay apps para iPhone y Android, y las consultas llegan directo por WhatsApp.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/uy-market.json, city "punta-del-este" (read through lib/market.js)',
      url: 'https://uy.casa-libre.com/propiedades-en/punta-del-este',
      date: '2026-11-13',
      note: 'for_sale 13 (casas 1, aptos 11), for_rent 12 (aptos 8). Apto sale median from 11 listings, rent from 8. Yield 4.5 vs Montevideo 5.8 (lowest of the cities with a yield in the file). Casas, terrenos null. Montevideo values read from the same file.',
    },
  ],
  closing: {
    title: 'Tus apartamentos de Punta del Este, publicados hoy',
    text: 'Cargá tu cartera del balneario sin costo y atendé cada consulta desde tu WhatsApp, estés donde estés.',
    button: 'Publicar en Casa-Libre',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['mercado-inmobiliario-uruguay', 'alquileres-de-temporada-punta-del-este', 'comprar-propiedad-en-uruguay-siendo-extranjero', 'mercado-inmobiliario-en-maldonado'],
};
