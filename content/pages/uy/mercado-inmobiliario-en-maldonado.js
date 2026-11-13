import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

const m = cityMarket('uy', 'maldonado');
const pde = cityMarket('uy', 'punta-del-este');
const mvd = cityMarket('uy', 'montevideo');
const D = snapshotDateEs('uy');
const usd = fmtUsd;
const n = (x) => usd(x).replace('USD ', '');

export default {
  slug: 'mercado-inmobiliario-en-maldonado',
  group: 'Mercado por ciudad',
  order: 30,
  city: 'maldonado',
  cityName: 'Maldonado',
  cityType: 'depto',
  title: 'Mercado inmobiliario en Maldonado: precios y oferta',
  h1: 'Mercado inmobiliario en Maldonado',
  description:
    'Mercado inmobiliario en Maldonado para agentes: cuánto piden los apartamentos en Casa-Libre, cómo se compara con Punta del Este y qué conviene captar en la ciudad.',
  navLabel: 'Mercado en Maldonado',
  blurb: 'Precios pedidos de apartamentos en Maldonado frente a Punta del Este y Montevideo, y cómo trabajar la ciudad como agente.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/uy-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026; small sample, said on the page). A Maldonado reader should confirm the well-known geography (capital of the departamento, next to Punta del Este, permanent residents rather than a seasonal market) and the general description of buyers.',
  answer: `En Maldonado la oferta publicada en Casa-Libre es casi toda de apartamentos en venta: ${m.for_sale.departamentos} de las ${m.for_sale.total} propiedades en venta, y solo ${m.for_rent.total} en alquiler. Según las propiedades publicadas al ${D} (precios pedidos, no precios de cierre), un apartamento pide en mediana ${usd(m.departamentos_venta_price.median_usd)}. Las inmobiliarias publican gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} propiedades en venta y ${m.for_rent.total} en alquiler en Maldonado, publicadas en Casa-Libre al ${D}.`,
    `Apartamento en venta: mediana de ${usd(m.departamentos_venta_price.median_usd)}, frente a ${usd(pde.departamentos_venta_price.median_usd)} en Punta del Este y ${usd(mvd.departamentos_venta_price.median_usd)} en Montevideo.`,
    'Casas, terrenos y alquileres: muy pocos avisos con precio, sin mediana posible.',
    'Con tan pocos alquileres publicados, quien capte alquileres anuales en Maldonado casi no tiene competencia en la búsqueda.',
  ],
  cta: {
    title: '¿Trabajás en Maldonado? Publicá tu cartera',
    text: 'Apartamentos, casas y alquileres de Maldonado se publican gratis en Casa-Libre, con las consultas directo por WhatsApp.',
    button: 'Crear cuenta para inmobiliarias',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'maldonado-en-numeros',
      h2: '¿Cómo está el mercado inmobiliario en Maldonado?',
      blocks: [
        {
          t: 'p',
          html: `Es un mercado chico en avisos y concentrado en apartamentos en venta. La tabla resume lo publicado en Casa-Libre al ${D} (precios pedidos, no precios de cierre).`,
        },
        cityMarketTable('uy', 'maldonado'),
        {
          t: 'p',
          html: `Solo los apartamentos en venta tienen dato de precio, sobre ${m.departamentos_venta_price.listings_with_price} avisos. Casas, terrenos y alquileres tienen menos de cinco avisos con precio: no hay mediana y conviene no inventarla.`,
        },
      ],
    },
    {
      id: 'apartamentos-en-maldonado',
      h2: '¿Cuánto cuesta un apartamento en Maldonado?',
      blocks: [
        {
          t: 'p',
          html: `La mediana pedida es ${usd(m.departamentos_venta_price.median_usd)}, con la mitad central entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}.`,
        },
        {
          t: 'p',
          html: `Es bastante menos que en Punta del Este (${usd(pde.departamentos_venta_price.median_usd)}) y cerca de Montevideo (${usd(mvd.departamentos_venta_price.median_usd)}). Para un cliente que quiere vivir cerca del balneario sin pagar precios de primera línea, Maldonado es la comparación natural: mostrale las dos medianas antes de salir a visitar.`,
        },
        {
          t: 'p',
          html: 'Para fijar el precio de un apartamento concreto, armá comparables del mismo barrio, antigüedad y gastos comunes. El método está en <a href="/uruguay/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'maldonado-y-punta-del-este',
      h2: 'Maldonado y Punta del Este: dos mercados vecinos',
      blocks: [
        {
          t: 'p',
          html: 'Son ciudades pegadas, pero con compradores distintos. Maldonado es la capital del departamento y una ciudad donde se vive todo el año; Punta del Este es el balneario, con mucho propietario que no reside y un mercado que gira alrededor del verano.',
        },
        {
          t: 'p',
          html: 'Para el agente, eso significa dos discursos. En Maldonado el comprador suele mirar escuelas, servicios, distancia al trabajo y gastos fijos. En Punta del Este pesa la vista y la distancia al mar. El detalle del balneario está en <a href="/uruguay/mercado-inmobiliario-en-punta-del-este/">mercado inmobiliario en Punta del Este</a>.',
        },
      ],
    },
    {
      id: 'alquileres-en-maldonado',
      h2: '¿Cuánto se pide de alquiler en Maldonado?',
      blocks: [
        {
          t: 'p',
          html: `No hay dato: hay ${m.for_rent.total} propiedades en alquiler publicadas, muy pocas para una mediana. Tampoco se puede calcular una relación entre alquiler y precio de venta.`,
        },
        {
          t: 'p',
          html: 'Eso es una oportunidad. Quien trabaja en la zona todo el año necesita alquiler anual, y hoy casi no hay avisos que compitan. Mostrale al propietario los apartamentos en alquiler en Maldonado en <a href="https://uy.casa-libre.com/alquiler/departamentos/maldonado">Casa-Libre</a> y definí con él las garantías antes de publicar: están en <a href="/uruguay/garantias-de-alquiler-uruguay/">garantías de alquiler en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'que-captar-en-maldonado',
      h2: '¿Qué conviene captar en Maldonado?',
      blocks: [
        {
          t: 'p',
          html: 'Apartamentos en venta para el volumen, y alquileres anuales y casas para diferenciarte, porque casi no hay oferta publicada.',
        },
        {
          t: 'ul',
          items: [
            `Apartamentos en venta: ${m.for_sale.departamentos} publicados, el único tipo con dato de precio.`,
            `Casas: ${m.for_sale.casas} en venta publicadas; una casa familiar bien presentada destaca. Mirá las casas en venta en Maldonado en <a href="https://uy.casa-libre.com/venta/casas/maldonado">Casa-Libre</a>.`,
            'Alquileres anuales: poca competencia publicada.',
            `Terrenos: ${m.for_sale.terrenos} en venta publicado, sin dato de precio.`,
          ],
        },
      ],
    },
    {
      id: 'como-trabajar-maldonado',
      h2: 'Cómo captar y vender propiedades en Maldonado',
      blocks: [
        {
          t: 'p',
          html: 'Con poca oferta publicada, cada aviso completo se ve. Ganás la captación mostrando al propietario cómo va a aparecer su propiedad y a quién le llega, sin prometer precio ni plazo.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Elegí un segmento', html: 'Apartamentos para residentes, casas familiares o alquileres anuales.' },
            { title: 'Llevá comparables', html: 'Avisos del mismo barrio y tipo, y la mediana de Punta del Este para mostrar la diferencia.' },
            { title: 'Publicá completo', html: 'Fotos con luz natural, gastos comunes, precio en dólares y ubicación exacta en el mapa.' },
          ],
        },
        {
          t: 'casalibre',
          title: 'Para el propietario que duda en alquilar',
          html: 'Mandale la guía de Casa-Libre sobre cómo alquilar una propiedad: entiende los pasos antes de firmar con vos.',
          button: 'Ver la guía para alquilar',
          href: 'https://uy.casa-libre.com/guias/como-alquilar-mi-propiedad',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta un apartamento en Maldonado?',
      a: `Pide en mediana ${usd(m.departamentos_venta_price.median_usd)}, con la mitad central entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}. Sale de ${m.departamentos_venta_price.listings_with_price} avisos de Casa-Libre al ${D}, con precio pedido, no de cierre.`,
    },
    {
      q: '¿Es más barato Maldonado que Punta del Este?',
      a: `En apartamentos, según los precios pedidos sí: ${usd(m.departamentos_venta_price.median_usd)} de mediana contra ${usd(pde.departamentos_venta_price.median_usd)} en Punta del Este.`,
    },
    {
      q: '¿Cuánto se pide de alquiler en Maldonado?',
      a: `No hay dato suficiente: solo ${m.for_rent.total} alquileres publicados al ${D}. Compará caso por caso con avisos parecidos del mismo barrio.`,
    },
    {
      q: '¿Dónde publicar propiedades en Maldonado?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias y agentes, hay apps para iPhone y Android, y las consultas llegan directo por WhatsApp.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/uy-market.json, city "maldonado" (read through lib/market.js)',
      url: 'https://uy.casa-libre.com/propiedades-en/maldonado',
      date: '2026-11-13',
      note: 'for_sale 20 (casas 3, aptos 15, terrenos 1), for_rent 4. Only departamentos_venta_price has data (15 listings). Punta del Este and Montevideo medians read from the same file.',
    },
  ],
  closing: {
    title: 'Tus propiedades de Maldonado, publicadas hoy',
    text: 'Cargá apartamentos, casas y alquileres sin costo y atendé cada consulta desde tu WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['mercado-inmobiliario-uruguay', 'mercado-inmobiliario-en-punta-del-este', 'garantias-de-alquiler-uruguay', 'como-captar-propiedades-para-alquilar'],
};
