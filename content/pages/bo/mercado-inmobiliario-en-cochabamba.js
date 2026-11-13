import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

const m = cityMarket('bo', 'cochabamba');
const scz = cityMarket('bo', 'santa-cruz-de-la-sierra');
const D = snapshotDateEs('bo');
const usd = fmtUsd;
const n = (x) => usd(x).replace('USD ', '');

export default {
  slug: 'mercado-inmobiliario-en-cochabamba',
  group: 'Mercado por ciudad',
  order: 20,
  city: 'cochabamba',
  cityName: 'Cochabamba',
  cityType: 'depto',
  title: 'Mercado inmobiliario en Cochabamba: precios y oferta',
  h1: 'Mercado inmobiliario en Cochabamba',
  description:
    'Mercado inmobiliario en Cochabamba para agentes: cuánto piden casas y departamentos en Casa-Libre, por qué casi no hay alquileres publicados y cómo captar.',
  navLabel: 'Mercado en Cochabamba',
  blurb: 'Precios pedidos de casas y departamentos en Cochabamba, la falta de alquileres publicados y cómo trabajar la ciudad como agente.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/bo-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026; few listings, said on the page). A Cochabamba reader should confirm the well-known geography (valley, zona norte, neighbouring municipalities Quillacollo, Sacaba and Tiquipaya) and the general description of buyers.',
  answer: `En Cochabamba la oferta publicada en Casa-Libre es chica y casi toda en venta: ${m.for_sale.total} propiedades en venta y ${m.for_rent.total} en alquiler. Según las propiedades publicadas al ${D} (precios pedidos, no precios de cierre), una casa pide en mediana ${usd(m.casas_venta_price.median_usd)} y un departamento ${usd(m.departamentos_venta_price.median_usd)}. Los agentes publican gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} propiedades en venta y solo ${m.for_rent.total} en alquiler publicadas en Casa-Libre al ${D}.`,
    `Casas en venta: mediana de ${usd(m.casas_venta_price.median_usd)} sobre ${m.casas_venta_price.listings_with_price} avisos con precio, por encima de Santa Cruz (${usd(scz.casas_venta_price.median_usd)}).`,
    `Departamentos: mediana de ${usd(m.departamentos_venta_price.median_usd)}, con una mitad central muy abierta, de ${usd(m.departamentos_venta_price.p25_usd)} a ${n(m.departamentos_venta_price.p75_usd)}.`,
    'Con tan pocos alquileres publicados, quien capte alquileres en Cochabamba tiene el camino casi libre.',
  ],
  cta: {
    title: '¿Trabajas en Cochabamba? Publica tu cartera',
    text: 'Casas, departamentos y alquileres de Cochabamba se publican gratis en Casa-Libre, con las consultas directo por WhatsApp.',
    button: 'Crear cuenta para inmobiliarias',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'cochabamba-en-numeros',
      h2: '¿Cómo está el mercado inmobiliario en Cochabamba?',
      blocks: [
        {
          t: 'p',
          html: `Es un mercado con poca oferta publicada y precios pedidos altos para Bolivia. Estos son los números según las propiedades publicadas en Casa-Libre al ${D} (precios pedidos, no precios de cierre).`,
        },
        cityMarketTable('bo', 'cochabamba'),
        {
          t: 'p',
          html: `Ten en cuenta el tamaño de la muestra: la mediana de casas sale de ${m.casas_venta_price.listings_with_price} avisos y la de departamentos de ${m.departamentos_venta_price.listings_with_price}. Sirven como orientación, no como tasación. Los precios van en dólares, como en los avisos, sin pasarlos a bolivianos, porque el tipo de cambio de referencia y el paralelo están muy lejos.`,
        },
      ],
    },
    {
      id: 'casas-en-cochabamba',
      h2: '¿Cuánto cuesta una casa en Cochabamba?',
      blocks: [
        {
          t: 'p',
          html: `La casa en venta pide en mediana ${usd(m.casas_venta_price.median_usd)}, con la mitad central entre ${usd(m.casas_venta_price.p25_usd)} y ${n(m.casas_venta_price.p75_usd)}. La casa típica publicada tiene ${m.casas_venta_median_bedrooms} dormitorios.`,
        },
        {
          t: 'p',
          html: `Es más que la mediana de Santa Cruz (${usd(scz.casas_venta_price.median_usd)}), pero con ${m.casas_venta_price.listings_with_price} avisos la diferencia puede deberse a qué casas se publicaron, no al mercado entero. Cuando un propietario te muestre ese número, explícale que una casa se compara con casas de su zona, no con el promedio de otra ciudad.`,
        },
        {
          t: 'p',
          html: 'Antes de la visita, revisa las casas en venta en Cochabamba en <a href="https://casa-libre.com.bo/venta/casas/cochabamba">Casa-Libre</a> y separa las que se parecen a la del propietario por zona, terreno y dormitorios. El método está en <a href="/bolivia/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'departamentos-en-cochabamba',
      h2: 'Departamentos en Cochabamba: un rango muy amplio',
      blocks: [
        {
          t: 'p',
          html: `Hay ${m.for_sale.departamentos} departamentos en venta, con una mediana de ${usd(m.departamentos_venta_price.median_usd)} y una mitad central que va de ${usd(m.departamentos_venta_price.p25_usd)} a ${n(m.departamentos_venta_price.p75_usd)}. Un rango así suele reflejar productos distintos, como el departamento económico y el de edificio nuevo con áreas comunes.`,
        },
        {
          t: 'p',
          html: 'Para el agente, eso significa que la mediana de la ciudad engaña. Antes de fijar precio, define en cuál de los dos grupos está el departamento: antigüedad del edificio, parqueo, ascensor, expensas y zona. Un departamento nuevo en la zona norte no compite con uno antiguo lejos del centro.',
        },
      ],
    },
    {
      id: 'alquileres-en-cochabamba',
      h2: '¿Cuánto se pide de alquiler en Cochabamba?',
      blocks: [
        {
          t: 'p',
          html: `No hay dato: solo ${m.for_rent.total} propiedades en alquiler publicadas, muy pocas para calcular una mediana. Tampoco se puede calcular una relación entre alquiler y precio de venta en la ciudad.`,
        },
        {
          t: 'p',
          html: 'Que haya tan pocos alquileres publicados no significa que no se alquile. Significa que hoy se publican pocos, y que un agente que capte alquileres y los publique bien aparece casi solo en la búsqueda. Muestra al propietario las casas en alquiler en Cochabamba en <a href="https://casa-libre.com.bo/alquiler/casas/cochabamba">Casa-Libre</a>: verá que hay lugar.',
        },
        {
          t: 'p',
          html: 'Si el propietario prefiere el anticrético, el funcionamiento y lo que conviene revisar están en <a href="/bolivia/anticretico-para-agentes-inmobiliarios/">anticrético para agentes inmobiliarios</a>.',
        },
      ],
    },
    {
      id: 'donde-esta-la-oferta',
      h2: '¿Dónde buscar propiedades para captar en Cochabamba?',
      blocks: [
        {
          t: 'p',
          html: 'La ciudad está en un valle y crece hacia los municipios vecinos, como Quillacollo, Sacaba y Tiquipaya, donde aparecen casas con más terreno y urbanizaciones nuevas. La zona norte concentra buena parte de los edificios de departamentos.',
        },
        {
          t: 'ul',
          items: [
            'Casas familiares de 4 dormitorios: es el tamaño típico publicado y el que más se compara.',
            'Departamentos nuevos: el segmento alto del rango, donde el aviso tiene que mostrar las áreas comunes.',
            'Alquileres: casi sin competencia publicada.',
            `Terrenos: ${m.for_sale.terrenos} en venta publicado, sin dato de precio.`,
          ],
        },
      ],
    },
    {
      id: 'como-captar-en-cochabamba',
      h2: 'Cómo captar y vender propiedades en Cochabamba',
      blocks: [
        {
          t: 'p',
          html: 'En un mercado con poca oferta publicada, la ventaja es la visibilidad: cada aviso bien hecho se ve. Usa eso como argumento de captación, sin prometer precio ni plazo.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Elige zona y tipo', html: 'Por ejemplo, departamentos de la zona norte o casas en los municipios vecinos.' },
            { title: 'Llega con comparables', html: 'Pocos pero bien elegidos: misma zona, mismos dormitorios, precio pedido a la vista.' },
            { title: 'Publica completo', html: 'Fotos con luz natural, precio en dólares, ubicación en el mapa, superficie y expensas si las hay.' },
          ],
        },
        {
          t: 'casalibre',
          title: 'Para el propietario que quiere alquilar',
          html: 'Envíale la guía de Casa-Libre sobre cómo alquilar una propiedad: entiende los pasos antes de firmar contigo y la conversación avanza más rápido.',
          button: 'Ver la guía para alquilar',
          href: 'https://casa-libre.com.bo/guias/como-alquilar-mi-propiedad',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta una casa en Cochabamba?',
      a: `Pide en mediana ${usd(m.casas_venta_price.median_usd)}, con la mitad central entre ${usd(m.casas_venta_price.p25_usd)} y ${n(m.casas_venta_price.p75_usd)}. Sale de ${m.casas_venta_price.listings_with_price} avisos de Casa-Libre del ${D}, con precio pedido, no de cierre.`,
    },
    {
      q: '¿Cuánto cuesta un departamento en Cochabamba?',
      a: `La mediana pedida es ${usd(m.departamentos_venta_price.median_usd)}, pero el rango es muy amplio: de ${usd(m.departamentos_venta_price.p25_usd)} a ${n(m.departamentos_venta_price.p75_usd)} en la mitad central. Compara siempre con departamentos de la misma zona y antigüedad.`,
    },
    {
      q: '¿Hay datos de alquiler en Cochabamba?',
      a: `No: solo hay ${m.for_rent.total} alquileres publicados, muy pocos para una mediana. Para captarlos, mira <a href="/bolivia/como-captar-propiedades-para-alquilar/">cómo captar propiedades para alquilar</a>.`,
    },
    {
      q: '¿Dónde publicar propiedades en Cochabamba?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias y agentes, hay apps para iPhone y Android, y las consultas llegan directo por WhatsApp.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/bo-market.json, city "cochabamba" (read through lib/market.js)',
      url: 'https://casa-libre.com.bo/propiedades-en/cochabamba',
      date: '2026-11-13',
      note: 'for_sale 29 (casas 8, deptos 13, terrenos 1), for_rent 3. Casa median from 8 listings, depto from 13. Rents and yields null. Santa Cruz casa median read from the same file for the comparison.',
    },
  ],
  closing: {
    title: 'Tus propiedades de Cochabamba, publicadas hoy',
    text: 'Carga casas, departamentos y alquileres sin costo y atiende cada consulta desde tu WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['mercado-inmobiliario-bolivia', 'como-captar-propiedades-para-alquilar', 'analisis-comparativo-de-mercado-inmobiliario', 'como-tasar-una-propiedad'],
};
