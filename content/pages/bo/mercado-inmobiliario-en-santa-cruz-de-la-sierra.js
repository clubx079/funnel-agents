import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd, marketFor } from '../../../lib/market.js';

const m = cityMarket('bo', 'santa-cruz-de-la-sierra');
const D = snapshotDateEs('bo');
const usd = fmtUsd;
const n = (x) => usd(x).replace('USD ', '');
const pct = (x) => String(x).replace('.', ',');
const total = m.for_sale.total + m.for_rent.total;
const share = Math.round((total / marketFor('bo').total_active) * 100);

export default {
  slug: 'mercado-inmobiliario-en-santa-cruz-de-la-sierra',
  group: 'Mercado por ciudad',
  order: 10,
  city: 'santa-cruz-de-la-sierra',
  cityName: 'Santa Cruz de la Sierra',
  cityType: 'depto',
  title: 'Mercado inmobiliario en Santa Cruz de la Sierra: precios',
  h1: 'Mercado inmobiliario en Santa Cruz de la Sierra',
  description:
    'Mercado inmobiliario en Santa Cruz de la Sierra para agentes: cuánto piden casas, departamentos y alquileres en Casa-Libre, dónde está la oferta y cómo captar.',
  navLabel: 'Mercado en Santa Cruz',
  blurb: 'Oferta y precios pedidos de casas, departamentos y alquileres en Santa Cruz de la Sierra, y cómo trabajar la ciudad como agente.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/bo-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026; no conversion to bolivianos on purpose). A Santa Cruz reader should confirm the well-known local geography (anillos, Equipetrol, zona norte, the Urubó across the Piraí, condominios cerrados) and the general description of who buys and rents.',
  answer: `Santa Cruz de la Sierra concentra la mayor parte de la oferta de Bolivia en Casa-Libre: ${m.for_sale.total} propiedades en venta y ${m.for_rent.total} en alquiler. Según las propiedades publicadas al ${D} (precios pedidos, no precios de cierre), una casa pide en mediana ${usd(m.casas_venta_price.median_usd)} y un departamento ${usd(m.departamentos_venta_price.median_usd)}. Los agentes publican su cartera gratis en Casa-Libre.`,
  summary: [
    `${total} avisos activos en Santa Cruz de la Sierra, el ${share}% de todo lo publicado en Casa-Libre Bolivia al ${D}.`,
    `El departamento manda: ${m.for_sale.departamentos} en venta (mediana ${usd(m.departamentos_venta_price.median_usd)}) y ${m.for_rent.departamentos} en alquiler (mediana ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes).`,
    `Casas en venta: mediana de ${usd(m.casas_venta_price.median_usd)}, con una mitad central muy abierta, de ${usd(m.casas_venta_price.p25_usd)} a ${n(m.casas_venta_price.p75_usd)}.`,
    `Solo ${m.for_sale.terrenos} terrenos en venta publicados: poca competencia para quien capte lotes con papeles en orden.`,
  ],
  cta: {
    title: '¿Trabajas en Santa Cruz? Publica tu cartera',
    text: 'Departamentos, casas y lotes de Santa Cruz se publican gratis en Casa-Libre, y las consultas te llegan por WhatsApp.',
    button: 'Crear cuenta para inmobiliarias',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'santa-cruz-en-numeros',
      h2: '¿Cómo está el mercado inmobiliario en Santa Cruz de la Sierra?',
      blocks: [
        {
          t: 'p',
          html: `Es la ciudad con más oferta de los datos de Bolivia: ${m.for_sale.total} propiedades en venta y ${m.for_rent.total} en alquiler, según las propiedades publicadas en Casa-Libre al ${D} (precios pedidos, no precios de cierre). La tabla resume lo que hay por tipo.`,
        },
        cityMarketTable('bo', 'santa-cruz-de-la-sierra'),
        {
          t: 'p',
          html: `Los precios están en dólares, como en los avisos. Aquí no se pasan a bolivianos a propósito: el tipo de cambio de referencia y el del mercado paralelo están muy lejos, y una conversión daría una cifra engañosa.`,
        },
      ],
    },
    {
      id: 'departamentos-en-santa-cruz',
      h2: 'Departamentos en Santa Cruz: el producto con más avisos',
      blocks: [
        {
          t: 'p',
          html: `Hay ${m.for_sale.departamentos} departamentos en venta y ${m.for_rent.departamentos} en alquiler. La mediana en venta es ${usd(m.departamentos_venta_price.median_usd)} y la mitad central va de ${usd(m.departamentos_venta_price.p25_usd)} a ${n(m.departamentos_venta_price.p75_usd)}, un rango bastante estrecho.`,
        },
        {
          t: 'p',
          html: 'Un rango estrecho significa que el comprador compara mucho y rápido. Lo que separa un departamento de otro es la zona, el edificio y lo que incluye: parqueo, áreas comunes, expensas. En los edificios de Equipetrol y de la zona norte, el comprador suele preguntar por esos datos antes que por el precio, así que ponlos en el aviso.',
        },
        {
          t: 'p',
          html: 'Para el propietario que todavía duda entre vender y alquilar, abre con él los departamentos en alquiler en Santa Cruz en <a href="https://casa-libre.com.bo/alquiler/departamentos/santa-cruz-de-la-sierra">Casa-Libre</a>: ve en cinco minutos cuánto se pide por algo parecido al suyo.',
        },
      ],
    },
    {
      id: 'casas-en-santa-cruz',
      h2: '¿Cuánto cuesta una casa en Santa Cruz de la Sierra?',
      blocks: [
        {
          t: 'p',
          html: `La casa en venta pide en mediana ${usd(m.casas_venta_price.median_usd)}, con ${m.casas_venta_price.listings_with_price} avisos con precio. La casa típica publicada tiene ${m.casas_venta_median_bedrooms} dormitorios.`,
        },
        {
          t: 'p',
          html: `Lo importante es el rango: la mitad central va de ${usd(m.casas_venta_price.p25_usd)} a ${n(m.casas_venta_price.p75_usd)}. Entre una casa en un barrio consolidado dentro de los anillos y una en un condominio cerrado del Urubó, al otro lado del Piraí, el precio pedido puede cambiar mucho. La mediana de la ciudad no tasa una casa concreta.`,
        },
        {
          t: 'p',
          html: 'Para fijar precio, arma comparables de la misma zona, con el mismo número de dormitorios y un terreno parecido. El método completo está en <a href="/bolivia/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a> y en <a href="/bolivia/como-tasar-una-propiedad/">cómo tasar una propiedad</a>.',
        },
      ],
    },
    {
      id: 'alquileres-en-santa-cruz',
      h2: '¿Conviene alquilar o vender en Santa Cruz?',
      blocks: [
        {
          t: 'p',
          html: `Con los precios pedidos, un departamento en alquiler pide en mediana ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes y la relación bruta entre alquiler y precio de venta da ${pct(m.departamento_gross_rent_yield_pct)}% por año. En casas da ${pct(m.casa_gross_rent_yield_pct)}%, pero sale de solo ${m.casas_alquiler_price_month.listings_with_price} casas en alquiler con precio, así que tómalo como una señal débil.`,
        },
        {
          t: 'p',
          html: 'Es una comparación aproximada (alquiler mediano por 12, dividido el precio mediano de venta), no un retorno: no descuenta impuestos, expensas, meses vacíos ni mantenimiento.',
        },
        {
          t: 'p',
          html: 'En Santa Cruz muchos propietarios también piensan en el anticrético. Si te lo plantean, revisa <a href="/bolivia/anticretico-para-agentes-inmobiliarios/">anticrético para agentes inmobiliarios</a> antes de recomendar una opción.',
        },
      ],
    },
    {
      id: 'terrenos-en-santa-cruz',
      h2: 'Terrenos en Santa Cruz: poca oferta publicada',
      blocks: [
        {
          t: 'p',
          html: `Solo hay ${m.for_sale.terrenos} terrenos en venta publicados en la ciudad, muy pocos para calcular una mediana de precio. Eso no dice que no haya lotes: dice que casi nadie los está publicando bien.`,
        },
        {
          t: 'p',
          html: 'Santa Cruz crece hacia afuera, anillo por anillo y hacia los municipios vecinos, con muchas urbanizaciones nuevas. Si captas lotes con plano aprobado y folio real propio, tienes poca competencia en la búsqueda. Los papeles, el precio por metro cuadrado y el aviso están en <a href="/bolivia/como-vender-terrenos-en-santa-cruz/">cómo vender terrenos en Santa Cruz</a>.',
        },
      ],
    },
    {
      id: 'como-captar-en-santa-cruz',
      h2: 'Cómo captar y vender propiedades en Santa Cruz',
      blocks: [
        {
          t: 'p',
          html: 'Con tanta oferta publicada, el propietario compara agentes igual que el comprador compara avisos. Ganas la captación cuando llegas con datos de su zona y un plan concreto de publicación, no con una promesa de precio.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Elige un segmento', html: 'Departamentos en edificios de la zona norte o Equipetrol, casas familiares de 4 dormitorios o lotes en urbanizaciones: los tres tienen demanda.' },
            { title: 'Lleva comparables', html: 'Tres a cinco avisos parecidos del mismo barrio, con su precio pedido, para que el propietario vea dónde queda el suyo.' },
            { title: 'Publica el mismo día', html: 'Fotos propias, precio en dólares, ubicación exacta en el mapa y los datos que el comprador pregunta primero: parqueo, expensas, dormitorios.' },
          ],
        },
        {
          t: 'casalibre',
          title: 'Un enlace para el propietario que pregunta cuánto vale',
          html: 'Antes de la visita, envíale la guía de Casa-Libre sobre cuánto vale una propiedad: llega con una idea más realista y la conversación sobre precio es más corta.',
          button: 'Ver la guía sobre el valor',
          href: 'https://casa-libre.com.bo/guias/cuanto-vale-mi-propiedad',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta un departamento en Santa Cruz de la Sierra?',
      a: `Pide en mediana ${usd(m.departamentos_venta_price.median_usd)}, y la mitad de los departamentos está entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}. Son precios pedidos en los avisos de Casa-Libre al ${D}, no precios de cierre.`,
    },
    {
      q: '¿Cuánto se pide de alquiler en Santa Cruz?',
      a: `Un departamento pide en mediana ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes, con la mitad central entre ${usd(m.departamentos_alquiler_price_month.p25_usd)} y ${n(m.departamentos_alquiler_price_month.p75_usd)}. Para captar alquileres, mira <a href="/bolivia/como-captar-propiedades-para-alquilar/">cómo captar propiedades para alquilar</a>.`,
    },
    {
      q: '¿Qué se vende más en Santa Cruz, casas o departamentos?',
      a: `Departamentos: ${m.for_sale.departamentos} en venta frente a ${m.for_sale.casas} casas. En alquiler la diferencia es mayor, con ${m.for_rent.departamentos} departamentos y ${m.for_rent.casas} casas.`,
    },
    {
      q: '¿Dónde publicar propiedades en Santa Cruz de la Sierra?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias y agentes, los avisos aparecen en el mapa y por ciudad, y las consultas llegan directo por WhatsApp, sin comisión sobre la venta.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/bo-market.json, city "santa-cruz-de-la-sierra" (read through lib/market.js)',
      url: 'https://casa-libre.com.bo/propiedades-en/santa-cruz-de-la-sierra',
      date: '2026-11-13',
      note: 'All counts, medians, quartiles, bedrooms and yields are read from the file at build time. Share = (for_sale + for_rent) / total_active. Casa rent yield rests on 6 listings with price. terrenos_venta_price null (4 listings).',
    },
  ],
  closing: {
    title: 'Tu cartera de Santa Cruz, publicada hoy',
    text: 'Carga tus departamentos, casas y lotes sin costo y atiende cada consulta desde tu WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['mercado-inmobiliario-bolivia', 'como-vender-terrenos-en-santa-cruz', 'analisis-comparativo-de-mercado-inmobiliario', 'anticretico-para-agentes-inmobiliarios'],
};
