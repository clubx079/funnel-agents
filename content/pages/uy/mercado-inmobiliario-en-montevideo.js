import { cityMarket, cityMarketTable, snapshotDateEs, fmtUsd, marketFor, localPerUsd } from '../../../lib/market.js';

const m = cityMarket('uy', 'montevideo');
const D = snapshotDateEs('uy');
const usd = fmtUsd;
const n = (x) => usd(x).replace('USD ', '');
const pct = (x) => String(x).replace('.', ',');
const rate = localPerUsd('uy');
const pesos = (x) => `$ ${(Math.round((x * rate) / 1000) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} aprox.`;
const total = m.for_sale.total + m.for_rent.total;
const share = Math.round((total / marketFor('uy').total_active) * 100);

export default {
  slug: 'mercado-inmobiliario-en-montevideo',
  group: 'Mercado por ciudad',
  order: 10,
  city: 'montevideo',
  cityName: 'Montevideo',
  cityType: 'depto',
  title: 'Mercado inmobiliario en Montevideo: precios y oferta',
  h1: 'Mercado inmobiliario en Montevideo',
  description:
    'Mercado inmobiliario en Montevideo para agentes: cuánto piden apartamentos, casas y alquileres en Casa-Libre, en qué barrios mirar y cómo captar y fijar precio.',
  navLabel: 'Mercado en Montevideo',
  blurb: 'Precios pedidos de apartamentos, casas y alquileres en Montevideo, y cómo trabajar la capital como agente inmobiliario.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/uy-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026); pesos are approximate at the file rate uyu_per_usd 40.3. A Montevideo reader should confirm the well-known barrios named (Pocitos, Punta Carretas, Cordón, Centro, Tres Cruces, Carrasco, Malvín, Buceo) and the general description of who buys and rents.',
  answer: `Montevideo es el mercado más activo de Uruguay en Casa-Libre: ${m.for_sale.total} propiedades en venta y ${m.for_rent.total} en alquiler. Según las propiedades publicadas al ${D} (precios pedidos, no precios de cierre), un apartamento pide en mediana ${usd(m.departamentos_venta_price.median_usd)} y se alquila por ${usd(m.departamentos_alquiler_price_month.median_usd)} al mes. Las inmobiliarias publican gratis en Casa-Libre.`,
  summary: [
    `${total} avisos activos en Montevideo, el ${share}% de lo publicado en Casa-Libre Uruguay al ${D}.`,
    `El apartamento manda: ${m.for_sale.departamentos} en venta, con mediana de ${usd(m.departamentos_venta_price.median_usd)}, y ${m.for_rent.departamentos} en alquiler.`,
    `Alquiler de apartamentos: mediana de ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes (${pesos(m.departamentos_alquiler_price_month.median_usd)}).`,
    `Relación bruta entre alquiler y precio: ${pct(m.departamento_gross_rent_yield_pct)}% en apartamentos y ${pct(m.casa_gross_rent_yield_pct)}% en casas, con precios pedidos.`,
  ],
  cta: {
    title: '¿Trabajás en Montevideo? Publicá tu cartera',
    text: 'Apartamentos, casas y alquileres de cualquier barrio se publican gratis en Casa-Libre, con las consultas directo por WhatsApp.',
    button: 'Crear cuenta para inmobiliarias',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'montevideo-en-numeros',
      h2: '¿Cómo está el mercado inmobiliario en Montevideo?',
      blocks: [
        {
          t: 'p',
          html: `Es el mercado con más oferta de los datos de Uruguay y el único con una muestra amplia en casi todos los tipos. La tabla resume lo publicado en Casa-Libre al ${D} (precios pedidos, no precios de cierre).`,
        },
        cityMarketTable('uy', 'montevideo'),
        {
          t: 'p',
          html: `Los precios están en dólares, como se publican las ventas. Para los alquileres, que muchas veces se piden en pesos, la referencia es aproximada a ${String(rate).replace('.', ',')} pesos por dólar.`,
        },
      ],
    },
    {
      id: 'apartamentos-en-montevideo',
      h2: '¿Cuánto cuesta un apartamento en Montevideo?',
      blocks: [
        {
          t: 'p',
          html: `La mediana pedida es ${usd(m.departamentos_venta_price.median_usd)}, con la mitad central entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}. Sale de ${m.departamentos_venta_price.listings_with_price} apartamentos con precio, la muestra más grande del país.`,
        },
        {
          t: 'p',
          html: 'Detrás de esa mediana hay barrios muy distintos. Un apartamento con vista a la rambla en Pocitos o Punta Carretas no compite con uno interno en Cordón o el Centro, aunque tengan los mismos metros. Para ver qué se publica en un barrio concreto, abrí los apartamentos en venta en Pocitos en <a href="https://uy.casa-libre.com/venta/departamentos/montevideo/pocitos">Casa-Libre</a>.',
        },
        {
          t: 'p',
          html: 'Si el apartamento es de vivienda promovida, el comprador y el inquilino tienen reglas propias: repasalas en <a href="/uruguay/vivienda-promovida-uruguay/">vivienda promovida en Uruguay</a> antes de publicarlo.',
        },
      ],
    },
    {
      id: 'casas-en-montevideo',
      h2: 'Casas en Montevideo: menos oferta, rango amplio',
      blocks: [
        {
          t: 'p',
          html: `Hay ${m.for_sale.casas} casas en venta, con una mediana de ${usd(m.casas_venta_price.median_usd)} y una mitad central de ${usd(m.casas_venta_price.p25_usd)} a ${n(m.casas_venta_price.p75_usd)}. La casa típica publicada tiene ${m.casas_venta_median_bedrooms} dormitorios. También hay ${m.for_sale.duplex} dúplex en venta.`,
        },
        {
          t: 'p',
          html: 'Con un rango así, la zona decide. Una casa en Carrasco, Malvín o el Buceo tiene otro comprador que una casa en un barrio más alejado de la costa. Para fijar el precio, armá comparables del mismo barrio y tamaño, como explica <a href="/uruguay/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'alquileres-en-montevideo',
      h2: '¿Conviene alquilar o vender en Montevideo?',
      blocks: [
        {
          t: 'p',
          html: `Depende del propietario, pero los números ayudan: un apartamento pide en mediana ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes (${pesos(m.departamentos_alquiler_price_month.median_usd)}) y la relación bruta entre alquiler y precio de venta da ${pct(m.departamento_gross_rent_yield_pct)}% por año. En casas da ${pct(m.casa_gross_rent_yield_pct)}%, con solo ${m.casas_alquiler_price_month.listings_with_price} casas en alquiler con precio.`,
        },
        {
          t: 'p',
          html: 'Es una comparación aproximada (alquiler mediano por 12, dividido el precio mediano de venta), no un retorno: no descuenta gastos comunes, impuestos ni meses vacíos. Sirve para la conversación con un propietario indeciso.',
        },
        {
          t: 'p',
          html: `Para mostrarle la competencia, abrí con él los apartamentos en alquiler en Montevideo en <a href="https://uy.casa-libre.com/alquiler/departamentos/montevideo">Casa-Libre</a>. Y antes de publicar, definí qué garantías acepta: está en <a href="/uruguay/garantias-de-alquiler-uruguay/">garantías de alquiler en Uruguay</a>.`,
        },
      ],
    },
    {
      id: 'que-captar-en-montevideo',
      h2: '¿Qué conviene captar en Montevideo?',
      blocks: [
        {
          t: 'p',
          html: 'Apartamentos, en venta y en alquiler: son la mayor parte de lo publicado y donde más se compara. Elegí uno o dos barrios y conocé sus edificios, calles y precios pedidos mejor que nadie.',
        },
        {
          t: 'ul',
          items: [
            `Apartamentos: ${m.for_sale.departamentos} en venta y ${m.for_rent.departamentos} en alquiler, el grueso de la oferta.`,
            `Casas de ${m.casas_venta_median_bedrooms} dormitorios: menos oferta publicada, comprador familiar.`,
            `Terrenos: ${m.for_sale.terrenos} en venta publicados, sin dato de precio; poca competencia.`,
            'Locales y oficinas: la capital tiene oferta comercial propia en venta y en alquiler.',
          ],
        },
      ],
    },
    {
      id: 'como-trabajar-montevideo',
      h2: 'Cómo captar y vender propiedades en Montevideo',
      blocks: [
        {
          t: 'p',
          html: 'Con tanta oferta, el propietario compara inmobiliarias igual que el comprador compara avisos. Ganás la captación con datos de su barrio y un plan concreto de publicación, sin prometer precio ni plazo.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Llevá comparables', html: 'Tres a cinco apartamentos del mismo barrio, piso y estado, con su precio pedido.' },
            { title: 'Publicá completo', html: 'Fotos con luz natural, gastos comunes, orientación, garaje, precio en dólares y ubicación en el mapa.' },
            { title: 'Respondé rápido', html: 'Las consultas llegan por WhatsApp: contestá el mismo día, con fotos extra y horarios de visita.' },
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta un apartamento en Montevideo?',
      a: `Pide en mediana ${usd(m.departamentos_venta_price.median_usd)}, y la mitad de los apartamentos está entre ${usd(m.departamentos_venta_price.p25_usd)} y ${n(m.departamentos_venta_price.p75_usd)}. Son precios pedidos en Casa-Libre al ${D}, no precios de cierre.`,
    },
    {
      q: '¿Cuánto se pide de alquiler en Montevideo?',
      a: `Un apartamento pide en mediana ${usd(m.departamentos_alquiler_price_month.median_usd)} por mes (${pesos(m.departamentos_alquiler_price_month.median_usd)}), con la mitad central entre ${usd(m.departamentos_alquiler_price_month.p25_usd)} y ${n(m.departamentos_alquiler_price_month.p75_usd)}. Una casa pide ${usd(m.casas_alquiler_price_month.median_usd)}, sobre ${m.casas_alquiler_price_month.listings_with_price} avisos.`,
    },
    {
      q: '¿Cuánto cuesta una casa en Montevideo?',
      a: `La mediana pedida es ${usd(m.casas_venta_price.median_usd)}, con la mitad central entre ${usd(m.casas_venta_price.p25_usd)} y ${n(m.casas_venta_price.p75_usd)}. Compará siempre con casas del mismo barrio.`,
    },
    {
      q: '¿Dónde publicar propiedades en Montevideo?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias y agentes, hay apps para iPhone y Android, y las consultas llegan directo por WhatsApp, sin comisión sobre la venta.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/uy-market.json, city "montevideo" (read through lib/market.js)',
      url: 'https://uy.casa-libre.com/propiedades-en/montevideo',
      date: '2026-11-13',
      note: 'All counts, medians, quartiles, bedrooms and yields read from the file. Share = 337/514. Pesos = USD x uyu_per_usd (40.3), rounded to the nearest 1.000. Casa rent from 11 listings.',
    },
  ],
  closing: {
    title: 'Tu cartera de Montevideo, publicada hoy',
    text: 'Cargá tus apartamentos, casas y alquileres sin costo y atendé cada consulta desde tu WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['mercado-inmobiliario-uruguay', 'vivienda-promovida-uruguay', 'garantias-de-alquiler-uruguay', 'analisis-comparativo-de-mercado-inmobiliario'],
};
