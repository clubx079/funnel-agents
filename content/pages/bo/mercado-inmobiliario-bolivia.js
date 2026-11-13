import { marketFor, marketCities, cityMarket, snapshotDateEs, fmtUsd } from '../../../lib/market.js';

const M = marketFor('bo');
const D = snapshotDateEs('bo');
const usd = fmtUsd;
const pct = (x) => String(x).replace('.', ',');
const scz = cityMarket('bo', 'santa-cruz-de-la-sierra');
const cbba = cityMarket('bo', 'cochabamba');
const lp = cityMarket('bo', 'la-paz');
const cityTotal = (c) => c.for_sale.total + c.for_rent.total;
const share = Math.round((cityTotal(scz) / M.total_active) * 100);
const med = (p, suffix = '') => (p ? `${usd(p.median_usd)}${suffix}` : 'Pocos datos');

export default {
  slug: 'mercado-inmobiliario-bolivia',
  equivalent: 'mercado-inmobiliario-paraguay',
  group: 'Mercado e inversión',
  order: 10,
  title: 'Mercado inmobiliario en Bolivia: datos por ciudad en 2026',
  h1: 'Mercado inmobiliario en Bolivia: datos por ciudad',
  description:
    'Precios pedidos de casas, departamentos y alquileres en Santa Cruz, Cochabamba y La Paz, con medianas y cantidad de avisos, y cómo usarlos como agente.',
  navLabel: 'Mercado inmobiliario',
  blurb: 'Precios medianos de casas, departamentos y alquileres en Santa Cruz, Cochabamba y La Paz, y cómo usarlos en el trabajo de agente.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/bo-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026). No conversion to bolivianos on purpose (Casa-Libre rate 6.89 vs parallel market). Confirm the general statement that Bolivia has no public statistic of closing prices that agents can consult.',
  answer: `Según las propiedades publicadas en Casa-Libre al ${D} (precios pedidos, no precios de cierre), un departamento en venta pide en mediana ${usd(scz.departamentos_venta_price.median_usd)} en Santa Cruz de la Sierra, ${usd(lp.departamentos_venta_price.median_usd)} en La Paz y ${usd(cbba.departamentos_venta_price.median_usd)} en Cochabamba. Santa Cruz concentra el ${share}% de los ${M.total_active} avisos activos de Bolivia. Inmobiliarias y agentes publican gratis en Casa-Libre.`,
  summary: [
    `${M.total_active} propiedades activas en Casa-Libre Bolivia al ${D}; ${cityTotal(scz)} están en Santa Cruz de la Sierra.`,
    `Departamento en venta, mediana: ${usd(scz.departamentos_venta_price.median_usd)} en Santa Cruz, ${usd(lp.departamentos_venta_price.median_usd)} en La Paz y ${usd(cbba.departamentos_venta_price.median_usd)} en Cochabamba.`,
    `Departamento en alquiler, mediana: ${usd(scz.departamentos_alquiler_price_month.median_usd)} por mes en Santa Cruz y ${usd(lp.departamentos_alquiler_price_month.median_usd)} en La Paz; Cochabamba no tiene datos suficientes.`,
    'Todos son precios pedidos, en dólares, no precios de cierre.',
  ],
  cta: {
    title: 'Publica donde se mide el mercado',
    text: 'En Casa-Libre Bolivia, inmobiliarias y agentes publican gratis en el mismo buscador y el mismo mapa que los propietarios.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'datos-por-ciudad',
      h2: 'Mercado inmobiliario en Bolivia: los números por ciudad',
      blocks: [
        {
          t: 'p',
          html: `La tabla resume las tres ciudades con más avisos según las propiedades publicadas en Casa-Libre al ${D} (precios pedidos, no precios de cierre). Donde dice «Pocos datos», hay menos de cinco avisos con precio.`,
        },
        {
          t: 'table',
          caption: `Avisos y precios medianos por ciudad en Bolivia, ${D}`,
          head: ['Ciudad', 'En venta', 'En alquiler', 'Casa en venta', 'Departamento en venta', 'Departamento en alquiler, por mes'],
          rows: marketCities('bo').map((slug) => {
            const c = cityMarket('bo', slug);
            return [c.name, String(c.for_sale.total), String(c.for_rent.total), med(c.casas_venta_price), med(c.departamentos_venta_price), med(c.departamentos_alquiler_price_month)];
          }),
          note: `Propiedades activas publicadas en Casa-Libre al ${D}. Precios pedidos, no de cierre, en dólares. Solo ciudades con 15 avisos o más. Medianas con menos de 10 avisos detrás: casas en Cochabamba (${cbba.casas_venta_price.listings_with_price}) y en La Paz (${lp.casas_venta_price.listings_with_price}), alquiler de departamentos en La Paz (${lp.departamentos_alquiler_price_month.listings_with_price}).`,
        },
        {
          t: 'p',
          html: 'En Bolivia no hay una estadística pública de precios de cierre que un agente pueda consultar, así que los precios pedidos son la mejor referencia a mano. Úsalos para orientar, nunca como tasación.',
        },
      ],
    },
    {
      id: 'santa-cruz-concentra-la-oferta',
      h2: '¿Dónde está la oferta inmobiliaria en Bolivia?',
      blocks: [
        {
          t: 'p',
          html: `En Santa Cruz de la Sierra: ${cityTotal(scz)} de los ${M.total_active} avisos activos, el ${share}%. Cochabamba suma ${cityTotal(cbba)} y La Paz ${cityTotal(lp)}.`,
        },
        {
          t: 'p',
          html: `Para un agente de Santa Cruz, eso significa competencia: el propietario compara y el comprador también. En La Paz y Cochabamba significa lo contrario, poca oferta publicada y espacio para destacar con avisos completos. Lo que hay en cada ciudad está en las propiedades en Santa Cruz en <a href="https://casa-libre.com.bo/propiedades-en/santa-cruz-de-la-sierra">Casa-Libre</a>, en Cochabamba en <a href="https://casa-libre.com.bo/propiedades-en/cochabamba">Casa-Libre</a> y en La Paz en <a href="https://casa-libre.com.bo/propiedades-en/la-paz">Casa-Libre</a>.`,
        },
      ],
    },
    {
      id: 'precio-de-departamentos',
      h2: '¿Cuánto cuesta un departamento en Bolivia?',
      blocks: [
        {
          t: 'p',
          html: `Depende mucho de la ciudad. La mediana pedida es ${usd(scz.departamentos_venta_price.median_usd)} en Santa Cruz, ${usd(lp.departamentos_venta_price.median_usd)} en La Paz y ${usd(cbba.departamentos_venta_price.median_usd)} en Cochabamba.`,
        },
        {
          t: 'p',
          html: `El rango también cambia. En Santa Cruz la mitad central va de ${usd(scz.departamentos_venta_price.p25_usd)} a ${usd(scz.departamentos_venta_price.p75_usd).replace('USD ', '')}, bastante estrecho; en Cochabamba, de ${usd(cbba.departamentos_venta_price.p25_usd)} a ${usd(cbba.departamentos_venta_price.p75_usd).replace('USD ', '')}, muy abierto. Más detalle en <a href="/bolivia/mercado-inmobiliario-en-santa-cruz-de-la-sierra/">mercado inmobiliario en Santa Cruz de la Sierra</a> y <a href="/bolivia/mercado-inmobiliario-en-cochabamba/">mercado inmobiliario en Cochabamba</a>.`,
        },
      ],
    },
    {
      id: 'precio-de-casas',
      h2: '¿Cuánto cuesta una casa en Bolivia?',
      blocks: [
        {
          t: 'p',
          html: `La casa en venta pide en mediana ${usd(scz.casas_venta_price.median_usd)} en Santa Cruz, ${usd(cbba.casas_venta_price.median_usd)} en Cochabamba y ${usd(lp.casas_venta_price.median_usd)} en La Paz. En las tres ciudades la casa típica publicada tiene ${scz.casas_venta_median_bedrooms} dormitorios.`,
        },
        {
          t: 'p',
          html: `Solo Santa Cruz tiene una muestra amplia (${scz.casas_venta_price.listings_with_price} casas con precio). En Cochabamba y La Paz la mediana sale de ${cbba.casas_venta_price.listings_with_price} y ${lp.casas_venta_price.listings_with_price} avisos: dice más de qué casas se publicaron que del mercado. El detalle de la capital está en <a href="/bolivia/mercado-inmobiliario-en-la-paz/">mercado inmobiliario en La Paz</a>.`,
        },
      ],
    },
    {
      id: 'alquileres',
      h2: '¿Cuánto se pide de alquiler y cuánto rinde?',
      blocks: [
        {
          t: 'p',
          html: `Un departamento en alquiler pide en mediana ${usd(scz.departamentos_alquiler_price_month.median_usd)} por mes en Santa Cruz y ${usd(lp.departamentos_alquiler_price_month.median_usd)} en La Paz. Cochabamba tiene ${cbba.for_rent.total} alquileres publicados, muy pocos para una mediana.`,
        },
        {
          t: 'p',
          html: `La relación bruta entre alquiler y precio de venta de departamentos da ${pct(scz.departamento_gross_rent_yield_pct)}% por año en Santa Cruz y ${pct(lp.departamento_gross_rent_yield_pct)}% en La Paz. Es alquiler mediano por 12, dividido el precio mediano de venta: no descuenta impuestos, expensas ni meses vacíos, y no es un retorno.`,
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: relación bruta entre alquiler y precio',
          html: 'Datos redondos e hipotéticos: 600 x 12 = USD 7.200 por año; 7.200 ÷ 100.000 = 7,2% por año, antes de cualquier gasto.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio pedido del departamento', 'USD 100.000'],
            ['Alquiler pedido por mes', 'USD 600'],
            ['Relación bruta', '7,2% por año'],
          ],
        },
      ],
    },
    {
      id: 'como-usar-los-datos',
      h2: '¿Cómo usar estos datos en tu trabajo de agente?',
      blocks: [
        {
          t: 'p',
          html: 'Como punto de partida de la conversación con el propietario, no como precio. La mediana de una ciudad mezcla barrios, tamaños y estados distintos; el precio de una propiedad sale de comparables de su zona.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Ubica la propiedad', html: 'Mira si su tipo y su ciudad tienen dato o si la muestra es chica.' },
            { title: 'Arma comparables', html: 'Tres a cinco avisos de la misma zona, tamaño y estado, con su precio pedido.' },
            { title: 'Explica la diferencia', html: 'Precio pedido no es precio de cierre: muéstralo con números y deja margen para la negociación.' },
          ],
        },
        {
          t: 'p',
          html: 'El método paso a paso está en <a href="/bolivia/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuál es la ciudad con más propiedades en venta en Bolivia?',
      a: `En los datos de Casa-Libre, Santa Cruz de la Sierra, con ${scz.for_sale.total} propiedades en venta y ${scz.for_rent.total} en alquiler al ${D}.`,
    },
    {
      q: '¿Dónde son más caros los departamentos en Bolivia?',
      a: `Según los precios pedidos, en Cochabamba (${usd(cbba.departamentos_venta_price.median_usd)} de mediana) y La Paz (${usd(lp.departamentos_venta_price.median_usd)}). Santa Cruz pide ${usd(scz.departamentos_venta_price.median_usd)}. Cochabamba tiene un rango muy amplio, así que compara siempre por zona.`,
    },
    {
      q: '¿Por qué los precios están en dólares?',
      a: 'Porque Casa-Libre guarda el precio de cada aviso también en dólares y porque el tipo de cambio de referencia y el paralelo están muy lejos: cualquier conversión a bolivianos sería aproximada.',
    },
    {
      q: '¿Son precios de venta reales?',
      a: 'No: son precios pedidos en los avisos activos, no precios de cierre. Sirven para comparar y orientar al propietario, no para tasar una propiedad concreta.',
    },
    {
      q: '¿Dónde publicar propiedades en Bolivia?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias, agentes y propietarios, y las consultas llegan directo por WhatsApp, sin comisión sobre la venta.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/bo-market.json (read through lib/market.js)',
      url: 'https://casa-libre.com.bo/propiedades',
      date: '2026-11-13',
      note: 'total_active 388; cities santa-cruz-de-la-sierra (253), cochabamba (32), la-paz (30). Share = 253/388. Medians, quartiles, bedrooms and yields read from the file. Illustrative example uses round hypothetical inputs only.',
    },
  ],
  closing: {
    title: 'Tu cartera en el mapa de Bolivia',
    text: 'Publica gratis en Casa-Libre tus propiedades de Santa Cruz, La Paz, Cochabamba o cualquier ciudad, y atiende las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['mercado-inmobiliario-en-santa-cruz-de-la-sierra', 'mercado-inmobiliario-en-la-paz', 'mercado-inmobiliario-en-cochabamba', 'analisis-comparativo-de-mercado-inmobiliario'],
};
