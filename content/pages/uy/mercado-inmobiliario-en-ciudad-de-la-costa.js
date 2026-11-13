import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

const m = cityMarket('uy', 'ciudad-de-la-costa');
const mvd = cityMarket('uy', 'montevideo');
const D = snapshotDateEs('uy');
const usd = fmtUsd;
const n = (x) => usd(x).replace('USD ', '');

export default {
  slug: 'mercado-inmobiliario-en-ciudad-de-la-costa',
  group: 'Mercado por ciudad',
  order: 40,
  city: 'ciudad-de-la-costa',
  cityName: 'Ciudad de la Costa',
  cityType: 'casa',
  title: 'Mercado inmobiliario en Ciudad de la Costa: precios',
  h1: 'Mercado inmobiliario en Ciudad de la Costa',
  description:
    'Mercado inmobiliario en Ciudad de la Costa para agentes: cuánto piden las casas y los apartamentos en Casa-Libre, cómo se compara con Montevideo y cómo captar.',
  navLabel: 'Mercado en Ciudad de la Costa',
  blurb: 'Precios pedidos de casas y apartamentos en Ciudad de la Costa, comparados con Montevideo, y cómo trabajar la ciudad como agente.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/uy-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026; small sample, said on the page). A Canelones reader should confirm the well-known geography (Canelones, next to Carrasco and the airport, Avenida Giannattasio, barrios Shangrilá, Lagomar, Solymar, El Pinar) and the general description of families moving from Montevideo.',
  answer: `Ciudad de la Costa es un mercado de casas: ${m.for_sale.casas} de las ${m.for_sale.total} propiedades en venta publicadas en Casa-Libre. Según las propiedades publicadas al ${D} (precios pedidos, no precios de cierre), una casa pide en mediana ${usd(m.casas_venta_price.median_usd)}, más que en Montevideo (${usd(mvd.casas_venta_price.median_usd)}). Las inmobiliarias publican gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} propiedades en venta y ${m.for_rent.total} en alquiler en Ciudad de la Costa, publicadas en Casa-Libre al ${D}.`,
    `Casa en venta: mediana de ${usd(m.casas_venta_price.median_usd)}, con la mitad central entre ${usd(m.casas_venta_price.p25_usd)} y ${n(m.casas_venta_price.p75_usd)}.`,
    `Apartamento en venta: mediana de ${usd(m.departamentos_venta_price.median_usd)}, sobre solo ${m.departamentos_venta_price.listings_with_price} avisos con precio.`,
    'Alquileres: casi no hay oferta publicada, y eso es espacio libre para captar.',
  ],
  cta: {
    title: '¿Trabajás en Ciudad de la Costa? Publicá tu cartera',
    text: 'Casas, apartamentos y alquileres de la Costa se publican gratis en Casa-Libre, con las consultas directo por WhatsApp.',
    button: 'Crear cuenta para inmobiliarias',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'ciudad-de-la-costa-en-numeros',
      h2: '¿Cómo está el mercado inmobiliario en Ciudad de la Costa?',
      blocks: [
        {
          t: 'p',
          html: `Es un mercado chico en avisos, dominado por casas y con precios pedidos altos. La tabla resume lo publicado en Casa-Libre al ${D} (precios pedidos, no precios de cierre).`,
        },
        cityMarketTable('uy', 'ciudad-de-la-costa'),
        {
          t: 'p',
          html: `La mediana de casas sale de ${m.casas_venta_price.listings_with_price} avisos y la de apartamentos de ${m.departamentos_venta_price.listings_with_price}: sirven para orientarte, no para tasar. No hay dato de alquileres ni de terrenos.`,
        },
      ],
    },
    {
      id: 'casas-en-ciudad-de-la-costa',
      h2: '¿Cuánto cuesta una casa en Ciudad de la Costa?',
      blocks: [
        {
          t: 'p',
          html: `La casa en venta pide en mediana ${usd(m.casas_venta_price.median_usd)}, con la mitad central entre ${usd(m.casas_venta_price.p25_usd)} y ${n(m.casas_venta_price.p75_usd)}. La casa típica publicada tiene ${m.casas_venta_median_bedrooms} dormitorios, igual que en Montevideo.`,
        },
        {
          t: 'p',
          html: `Que la mediana supere a la de Montevideo (${usd(mvd.casas_venta_price.median_usd)}) no quiere decir que la Costa sea más cara en general. Con ${m.casas_venta_price.listings_with_price} avisos, el dato refleja qué casas se publicaron, y en la Costa suelen ser casas con más terreno que las de la capital. Explicalo así cuando un propietario traiga el número.`,
        },
      ],
    },
    {
      id: 'quien-compra-en-la-costa',
      h2: '¿Quién compra en Ciudad de la Costa?',
      blocks: [
        {
          t: 'p',
          html: 'En buena parte, familias que buscan casa con espacio cerca de Montevideo. La ciudad está en Canelones, pegada a Carrasco y cerca del aeropuerto, y se recorre a lo largo de la Avenida Giannattasio, con barrios como Shangrilá, Lagomar, Solymar y El Pinar.',
        },
        {
          t: 'ul',
          items: [
            'Familia que se muda desde la capital: pregunta por el tiempo de viaje, colegios y servicios.',
            'Pareja que busca su primera casa: compara con un apartamento en Montevideo.',
          ],
        },
        {
          t: 'p',
          html: 'En el aviso, decí la distancia a la playa y a la Avenida Giannattasio, y cuánto se tarda hasta Montevideo en hora pico.',
        },
      ],
    },
    {
      id: 'apartamentos-en-la-costa',
      h2: 'Apartamentos en Ciudad de la Costa',
      blocks: [
        {
          t: 'p',
          html: `Hay ${m.for_sale.departamentos} apartamentos en venta, con una mediana pedida de ${usd(m.departamentos_venta_price.median_usd)}. Es muy poca oferta, así que la mediana es frágil.`,
        },
        {
          t: 'p',
          html: 'Para ver lo que hay hoy, buscá los apartamentos en venta en Ciudad de la Costa en <a href="https://uy.casa-libre.com/propiedades?op=venta&amp;type=depto&amp;q=Ciudad%20de%20la%20Costa">Casa-Libre</a>. Para fijar el precio, seguí <a href="/uruguay/como-tasar-una-propiedad/">cómo tasar una propiedad</a> con comparables del mismo barrio.',
        },
      ],
    },
    {
      id: 'alquileres-en-la-costa',
      h2: '¿Cuánto se pide de alquiler en Ciudad de la Costa?',
      blocks: [
        {
          t: 'p',
          html: `No hay dato: solo ${m.for_rent.total} propiedades en alquiler publicadas, muy pocas para una mediana. Tampoco se puede calcular la relación entre alquiler y precio de venta.`,
        },
        {
          t: 'p',
          html: 'Para el agente es espacio libre: una casa en alquiler bien publicada casi no tiene competencia en la búsqueda. Mostrale al propietario las casas en alquiler en Ciudad de la Costa en <a href="https://uy.casa-libre.com/alquiler/casas/ciudad-de-la-costa">Casa-Libre</a> y repasá con él <a href="/uruguay/como-captar-propiedades-para-alquilar/">cómo captar propiedades para alquilar</a>.',
        },
      ],
    },
    {
      id: 'como-trabajar-la-costa',
      h2: 'Cómo captar y vender propiedades en Ciudad de la Costa',
      blocks: [
        {
          t: 'p',
          html: 'Especializate en casas de una zona que puedas recorrer cada semana. Ganás la captación con comparables reales y un plan concreto de publicación, sin prometer precio ni plazo.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Elegí una zona', html: 'Uno o dos barrios de la Costa, al norte o al sur de la avenida.' },
            { title: 'Llevá comparables', html: 'Casas con terreno parecido, mismos dormitorios y estado similar, con su precio pedido.' },
            { title: 'Publicá completo', html: 'Fotos del jardín y del frente, metros de terreno y construidos, precio en dólares y ubicación en el mapa.' },
          ],
        },
        {
          t: 'casalibre',
          title: 'Un enlace para el propietario que pregunta cuánto vale',
          html: 'Antes de la visita, mandale la guía de Casa-Libre sobre cuánto vale una propiedad: llega con una idea más realista y la charla sobre precio es más corta.',
          button: 'Ver la guía sobre el valor',
          href: 'https://uy.casa-libre.com/guias/cuanto-vale-mi-propiedad',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta una casa en Ciudad de la Costa?',
      a: `Pide en mediana ${usd(m.casas_venta_price.median_usd)}, con la mitad central entre ${usd(m.casas_venta_price.p25_usd)} y ${n(m.casas_venta_price.p75_usd)}. Sale de ${m.casas_venta_price.listings_with_price} avisos de Casa-Libre al ${D}, con precio pedido, no de cierre.`,
    },
    {
      q: '¿Es más caro Ciudad de la Costa que Montevideo?',
      a: `En casas, la mediana pedida es más alta: ${usd(m.casas_venta_price.median_usd)} contra ${usd(mvd.casas_venta_price.median_usd)}. Pero son productos distintos, con más terreno en la Costa, y la muestra es chica.`,
    },
    {
      q: '¿Hay alquileres en Ciudad de la Costa?',
      a: `Publicados, muy pocos: ${m.for_rent.total} al ${D}, sin mediana posible. Compará caso por caso con casas parecidas.`,
    },
    {
      q: '¿Dónde publicar propiedades en Ciudad de la Costa?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias y agentes, hay apps para iPhone y Android, y las consultas llegan directo por WhatsApp.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/uy-market.json, city "ciudad-de-la-costa" (read through lib/market.js)',
      url: 'https://uy.casa-libre.com/propiedades-en/ciudad-de-la-costa',
      date: '2026-11-13',
      note: 'for_sale 20 (casas 13, aptos 5, terrenos 1), for_rent 3. Casa median from 13 listings, apto from 5. Montevideo casa median and bedrooms read from the same file. Only /alquiler/casas and /propiedades-en are live city pages; aptos use the filtered search.',
    },
  ],
  closing: {
    title: 'Tus casas de la Costa, publicadas hoy',
    text: 'Cargá casas, apartamentos y alquileres sin costo y atendé cada consulta desde tu WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['mercado-inmobiliario-uruguay', 'mercado-inmobiliario-en-montevideo', 'como-tasar-una-propiedad', 'como-captar-propiedades-para-alquilar'],
};
