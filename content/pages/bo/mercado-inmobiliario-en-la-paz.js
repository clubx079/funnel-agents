import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

const m = cityMarket('bo', 'la-paz');
const scz = cityMarket('bo', 'santa-cruz-de-la-sierra');
const D = snapshotDateEs('bo');
const usd = fmtUsd;
const n = (x) => usd(x).replace('USD ', '');
const pct = (x) => String(x).replace('.', ',');

export default {
  slug: 'mercado-inmobiliario-en-la-paz',
  group: 'Mercado por ciudad',
  order: 30,
  city: 'la-paz',
  cityName: 'La Paz',
  cityType: 'depto',
  title: 'Mercado inmobiliario en La Paz: precios y oferta',
  h1: 'Mercado inmobiliario en La Paz',
  description:
    'Mercado inmobiliario en La Paz para agentes: cuánto piden departamentos, casas y alquileres en Casa-Libre, cómo se compara con Santa Cruz y cómo captar en la ciudad.',
  navLabel: 'Mercado en La Paz',
  blurb: 'Precios pedidos de departamentos, casas y alquileres en La Paz, comparados con Santa Cruz, y cómo trabajar la ciudad como agente.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/bo-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026; few listings, said on the page). A La Paz reader should confirm the well-known geography (Zona Sur with Calacoto, Achumani and San Miguel; Sopocachi and Miraflores; El Alto next to the city; the slopes) and the general description of buyers.',
  answer: `En La Paz la oferta publicada en Casa-Libre es sobre todo de departamentos: ${m.for_sale.departamentos} de las ${m.for_sale.total} propiedades en venta. Según las propiedades publicadas al ${D} (precios pedidos, no precios de cierre), un departamento pide en mediana ${usd(m.departamentos_venta_price.median_usd)} y se alquila por ${usd(m.departamentos_alquiler_price_month.median_usd)} al mes. Los agentes publican gratis en Casa-Libre.`,
  summary: [
    `${m.for_sale.total} propiedades en venta y ${m.for_rent.total} en alquiler en La Paz, publicadas en Casa-Libre al ${D}.`,
    `Departamento en venta: mediana de ${usd(m.departamentos_venta_price.median_usd)}, contra ${usd(scz.departamentos_venta_price.median_usd)} en Santa Cruz.`,
    `Departamento en alquiler: mediana de ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes, sobre ${m.departamentos_alquiler_price_month.listings_with_price} avisos con precio.`,
    `Casas: solo ${m.casas_venta_price.listings_with_price} en venta con precio, mediana de ${usd(m.casas_venta_price.median_usd)}; tómalo como orientación.`,
  ],
  cta: {
    title: '¿Trabajas en La Paz? Publica tu cartera',
    text: 'Departamentos y casas de La Paz se publican gratis en Casa-Libre, con las consultas directo por WhatsApp.',
    button: 'Crear cuenta para inmobiliarias',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'la-paz-en-numeros',
      h2: '¿Cómo está el mercado inmobiliario en La Paz?',
      blocks: [
        {
          t: 'p',
          html: `Es un mercado de departamentos, con poca oferta publicada y precios pedidos más altos que en Santa Cruz. La tabla resume lo publicado en Casa-Libre al ${D} (precios pedidos, no precios de cierre).`,
        },
        cityMarketTable('bo', 'la-paz'),
        {
          t: 'p',
          html: `Son pocos avisos: la mediana de casas sale de ${m.casas_venta_price.listings_with_price} y la de alquiler de departamentos de ${m.departamentos_alquiler_price_month.listings_with_price}. Úsalas para orientarte, no para tasar. Los precios van en dólares, como en los avisos, sin conversión a bolivianos, porque el tipo de cambio de referencia y el paralelo están muy lejos.`,
        },
      ],
    },
    {
      id: 'departamentos-en-la-paz',
      h2: '¿Cuánto cuesta un departamento en La Paz?',
      blocks: [
        {
          t: 'p',
          html: `La mediana pedida es ${usd(m.departamentos_venta_price.median_usd)}, con la mitad central entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}. Sale de ${m.departamentos_venta_price.listings_with_price} departamentos con precio.`,
        },
        {
          t: 'p',
          html: `En Santa Cruz la mediana es ${usd(scz.departamentos_venta_price.median_usd)}. Si atiendes a un cliente que se muda entre las dos ciudades, explícale la diferencia con estos datos antes de que la descubra solo en la primera visita.`,
        },
        {
          t: 'p',
          html: 'En La Paz la zona pesa tanto como los metros: la Zona Sur, con barrios como Calacoto, Achumani y San Miguel, Sopocachi o Miraflores tienen compradores distintos. Para ver qué se publica en la Zona Sur, abre los departamentos en venta de la zona en <a href="https://casa-libre.com.bo/venta/departamentos/la-paz/sur">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'alquileres-en-la-paz',
      h2: '¿Cuánto se pide de alquiler en La Paz?',
      blocks: [
        {
          t: 'p',
          html: `Un departamento en alquiler pide en mediana ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes, con la mitad central entre ${usd(m.departamentos_alquiler_price_month.p25_usd)} y ${n(m.departamentos_alquiler_price_month.p75_usd)}. Es más que en Santa Cruz (${usd(scz.departamentos_alquiler_price_month.median_usd)}).`,
        },
        {
          t: 'p',
          html: `La relación bruta entre alquiler y precio de venta da ${pct(m.departamento_gross_rent_yield_pct)}% por año en departamentos: alquiler mediano por 12, dividido el precio mediano de venta. No es un retorno: no descuenta impuestos, expensas ni meses vacíos, y con ${m.departamentos_alquiler_price_month.listings_with_price} avisos de alquiler es una señal débil.`,
        },
        {
          t: 'p',
          html: 'Muéstrale al propietario los departamentos en alquiler en La Paz en <a href="https://casa-libre.com.bo/alquiler/departamentos/la-paz">Casa-Libre</a> y, si piensa en anticrético, repasa con él <a href="/bolivia/anticretico-para-agentes-inmobiliarios/">anticrético para agentes inmobiliarios</a>.',
        },
      ],
    },
    {
      id: 'casas-en-la-paz',
      h2: 'Casas en La Paz: pocas y caras',
      blocks: [
        {
          t: 'p',
          html: `Hay ${m.for_sale.casas} casas en venta publicadas, con una mediana de ${usd(m.casas_venta_price.median_usd)} y ${m.casas_venta_median_bedrooms} dormitorios en la casa típica. Con tan pocos avisos, el número dice más de las casas que se publicaron que de la ciudad entera.`,
        },
        {
          t: 'p',
          html: 'La geografía limita el terreno disponible, y una casa con jardín en la ciudad es un producto escaso. Si captas una, el aviso tiene que explicar bien la ubicación, el acceso, la pendiente de la calle y el estado de la construcción. Para fijar el precio, sigue <a href="/bolivia/como-tasar-una-propiedad/">cómo tasar una propiedad</a>.',
        },
      ],
    },
    {
      id: 'donde-captar-en-la-paz',
      h2: '¿Qué conviene captar en La Paz?',
      blocks: [
        {
          t: 'p',
          html: 'Departamentos, primero para venta y después para alquiler: son la mayor parte de lo publicado. Las casas y los terrenos sirven para diferenciarte, porque casi no hay oferta publicada.',
        },
        {
          t: 'ul',
          items: [
            'Departamentos en la Zona Sur, Sopocachi y Miraflores: el centro del mercado publicado.',
            'Departamentos para alquilar: pocos avisos con precio, poca competencia.',
            `Casas: ${m.for_sale.casas} en venta publicadas, poca competencia.`,
            `Terrenos: ${m.for_sale.terrenos} en venta publicados; El Alto, junto a la ciudad, tiene su propio mercado y conviene estudiarlo aparte.`,
          ],
        },
      ],
    },
    {
      id: 'como-trabajar-la-paz',
      h2: 'Cómo captar y vender propiedades en La Paz',
      blocks: [
        {
          t: 'p',
          html: 'Con poca oferta publicada, cada aviso bien hecho destaca. Gana la captación mostrando al propietario cómo se verá su departamento y quién lo va a ver, sin prometer precio ni plazo.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Define la zona', html: 'Elige uno o dos barrios y conoce sus edificios, calles y precios pedidos.' },
            { title: 'Revisa los papeles', html: 'Folio real, planos y expensas al día antes de publicar: en un edificio con años, la documentación pesa.' },
            { title: 'Publica completo', html: 'Fotos con luz natural, vista, piso, ascensor, parqueo, precio en dólares y ubicación en el mapa.' },
          ],
        },
        {
          t: 'casalibre',
          title: 'Los papeles, explicados al propietario',
          html: 'Envíale al propietario la guía de Casa-Libre sobre los documentos para vender un inmueble: llega a la firma con todo listo.',
          button: 'Ver la guía de documentos',
          href: 'https://casa-libre.com.bo/guias/documentos-para-vender-un-inmueble',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta un departamento en La Paz?',
      a: `Pide en mediana ${usd(m.departamentos_venta_price.median_usd)}, con la mitad central entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}. Son precios pedidos en Casa-Libre al ${D}, no precios de cierre.`,
    },
    {
      q: '¿Cuánto cuesta alquilar un departamento en La Paz?',
      a: `La mediana pedida es ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes, sobre ${m.departamentos_alquiler_price_month.listings_with_price} avisos con precio. Para captar alquileres, mira <a href="/bolivia/como-captar-propiedades-para-alquilar/">cómo captar propiedades para alquilar</a>.`,
    },
    {
      q: '¿Es más caro La Paz que Santa Cruz?',
      a: `En departamentos, según los precios pedidos sí: ${usd(m.departamentos_venta_price.median_usd)} de mediana en La Paz contra ${usd(scz.departamentos_venta_price.median_usd)} en Santa Cruz, y ${usd(m.departamentos_alquiler_price_month.median_usd)} de alquiler contra ${usd(scz.departamentos_alquiler_price_month.median_usd)}. En casas, La Paz tiene muy pocos avisos para comparar.`,
    },
    {
      q: '¿Dónde publicar propiedades en La Paz?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias y agentes, los avisos aparecen en el mapa y por ciudad, y las consultas llegan por WhatsApp.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/bo-market.json, city "la-paz" (read through lib/market.js)',
      url: 'https://casa-libre.com.bo/propiedades-en/la-paz',
      date: '2026-11-13',
      note: 'for_sale 20 (casas 5, deptos 13), for_rent 10 (deptos 6). Casa median from 5 listings, depto rent from 5. Depto yield 7.8. Santa Cruz medians read from the same file for the comparisons.',
    },
  ],
  closing: {
    title: 'Tus departamentos de La Paz, publicados hoy',
    text: 'Carga tu cartera sin costo y atiende cada consulta desde tu WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['mercado-inmobiliario-bolivia', 'mercado-inmobiliario-en-santa-cruz-de-la-sierra', 'documentos-para-vender-un-inmueble-en-bolivia', 'como-tasar-una-propiedad'],
};
