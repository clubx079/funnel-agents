import { marketFor, marketCities, cityMarket, snapshotDateEs, fmtUsd, localPerUsd } from '../../../lib/market.js';

const M = marketFor('uy');
const D = snapshotDateEs('uy');
const usd = fmtUsd;
const pct = (x) => String(x).replace('.', ',');
const rate = localPerUsd('uy');
const pesos = (x) => `$ ${(Math.round((x * rate) / 1000) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} aprox.`;
const mvd = cityMarket('uy', 'montevideo');
const pde = cityMarket('uy', 'punta-del-este');
const mal = cityMarket('uy', 'maldonado');
const cdlc = cityMarket('uy', 'ciudad-de-la-costa');
const cityTotal = (c) => c.for_sale.total + c.for_rent.total;
const share = Math.round((cityTotal(mvd) / M.total_active) * 100);
const med = (p) => (p ? usd(p.median_usd) : 'Pocos datos');

export default {
  slug: 'mercado-inmobiliario-uruguay',
  equivalent: 'mercado-inmobiliario-paraguay',
  group: 'Mercado e inversión',
  order: 10,
  title: 'Mercado inmobiliario en Uruguay: datos por ciudad en 2026',
  h1: 'Mercado inmobiliario en Uruguay: datos por ciudad',
  description:
    'Precios pedidos de apartamentos, casas y alquileres en Montevideo, Punta del Este, Maldonado y Ciudad de la Costa, con medianas, y cómo usarlos como agente.',
  navLabel: 'Mercado inmobiliario',
  blurb: 'Precios medianos de apartamentos, casas y alquileres en cuatro ciudades de Uruguay, y cómo usarlos en el trabajo de agente.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  reviewNote:
    'Every number comes from content/data/uy-market.json through lib/market.js (Casa-Libre asking prices, 13 Nov 2026); pesos are approximate at the file rate uyu_per_usd 40.3. Confirm the general statement that sale prices are customarily published in dollars and rents often in pesos.',
  answer: `Según las propiedades publicadas en Casa-Libre al ${D} (precios pedidos, no precios de cierre), un apartamento en venta pide en mediana ${usd(mvd.departamentos_venta_price.median_usd)} en Montevideo, ${usd(mal.departamentos_venta_price.median_usd)} en Maldonado y ${usd(pde.departamentos_venta_price.median_usd)} en Punta del Este. Montevideo concentra el ${share}% de los ${M.total_active} avisos activos de Uruguay. Inmobiliarias y agentes publican gratis en Casa-Libre.`,
  summary: [
    `${M.total_active} propiedades activas en Casa-Libre Uruguay al ${D}; ${cityTotal(mvd)} están en Montevideo.`,
    `Apartamento en venta, mediana: ${usd(mvd.departamentos_venta_price.median_usd)} en Montevideo, ${usd(mal.departamentos_venta_price.median_usd)} en Maldonado, ${usd(cdlc.departamentos_venta_price.median_usd)} en Ciudad de la Costa y ${usd(pde.departamentos_venta_price.median_usd)} en Punta del Este.`,
    `Alquiler de apartamentos, mediana: ${usd(mvd.departamentos_alquiler_price_month.median_usd)} por mes en Montevideo (${pesos(mvd.departamentos_alquiler_price_month.median_usd)}) y ${usd(pde.departamentos_alquiler_price_month.median_usd)} en Punta del Este.`,
    'Todos son precios pedidos, en dólares, no precios de cierre.',
  ],
  cta: {
    title: 'Publicá donde se mide el mercado',
    text: 'En Casa-Libre Uruguay, inmobiliarias y agentes publican gratis en el mismo buscador y el mismo mapa que los propietarios.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'datos-por-ciudad',
      h2: 'Mercado inmobiliario en Uruguay: los números por ciudad',
      blocks: [
        {
          t: 'p',
          html: `La tabla resume las cuatro ciudades con más avisos según las propiedades publicadas en Casa-Libre al ${D} (precios pedidos, no precios de cierre). Donde dice «Pocos datos», hay menos de cinco avisos con precio.`,
        },
        {
          t: 'table',
          caption: `Avisos y precios medianos por ciudad en Uruguay, ${D}`,
          head: ['Ciudad', 'En venta', 'En alquiler', 'Casa en venta', 'Apartamento en venta', 'Apartamento en alquiler, por mes'],
          rows: marketCities('uy').map((slug) => {
            const c = cityMarket('uy', slug);
            return [c.name, String(c.for_sale.total), String(c.for_rent.total), med(c.casas_venta_price), med(c.departamentos_venta_price), med(c.departamentos_alquiler_price_month)];
          }),
          note: `Propiedades activas publicadas en Casa-Libre al ${D}. Precios pedidos, no de cierre, en dólares. Solo ciudades con 15 avisos o más. Medianas con menos de 10 avisos detrás: apartamentos en alquiler en Punta del Este (${pde.departamentos_alquiler_price_month.listings_with_price}) y apartamentos en venta en Ciudad de la Costa (${cdlc.departamentos_venta_price.listings_with_price}).`,
        },
        {
          t: 'p',
          html: 'Usalos para orientar la conversación con un propietario, nunca como tasación: la mediana de una ciudad mezcla barrios, tamaños y estados distintos.',
        },
      ],
    },
    {
      id: 'donde-esta-la-oferta',
      h2: '¿Dónde está la oferta inmobiliaria en Uruguay?',
      blocks: [
        {
          t: 'p',
          html: `En Montevideo: ${cityTotal(mvd)} de los ${M.total_active} avisos activos, el ${share}%. Le siguen Punta del Este (${cityTotal(pde)}), Maldonado (${cityTotal(mal)}) y Ciudad de la Costa (${cityTotal(cdlc)}).`,
        },
        {
          t: 'p',
          html: `En la capital hay competencia y el propietario compara; en las otras tres ciudades hay poca oferta publicada y espacio para destacar. Lo que hay en cada una está en Montevideo en <a href="https://uy.casa-libre.com/propiedades-en/montevideo">Casa-Libre</a>, en Punta del Este en <a href="https://uy.casa-libre.com/propiedades-en/punta-del-este">Casa-Libre</a>, en Maldonado en <a href="https://uy.casa-libre.com/propiedades-en/maldonado">Casa-Libre</a> y en Ciudad de la Costa en <a href="https://uy.casa-libre.com/propiedades-en/ciudad-de-la-costa">Casa-Libre</a>.`,
        },
      ],
    },
    {
      id: 'precio-de-apartamentos',
      h2: '¿Cuánto cuesta un apartamento en Uruguay?',
      blocks: [
        {
          t: 'p',
          html: `Depende mucho de la ciudad. La mediana pedida va de ${usd(mal.departamentos_venta_price.median_usd)} en Maldonado y ${usd(mvd.departamentos_venta_price.median_usd)} en Montevideo a ${usd(pde.departamentos_venta_price.median_usd)} en Punta del Este.`,
        },
        {
          t: 'p',
          html: `Maldonado y Punta del Este son vecinas, pero sus medianas están lejos: la ubicación frente al mar y el comprador del balneario pesan. Montevideo tiene la muestra más amplia (${mvd.departamentos_venta_price.listings_with_price} apartamentos con precio). Más detalle en <a href="/uruguay/mercado-inmobiliario-en-montevideo/">mercado inmobiliario en Montevideo</a> y <a href="/uruguay/mercado-inmobiliario-en-punta-del-este/">mercado inmobiliario en Punta del Este</a>.`,
        },
      ],
    },
    {
      id: 'precio-de-casas',
      h2: '¿Cuánto cuesta una casa en Uruguay?',
      blocks: [
        {
          t: 'p',
          html: `Solo dos ciudades tienen dato: Montevideo, con una mediana de ${usd(mvd.casas_venta_price.median_usd)}, y Ciudad de la Costa, con ${usd(cdlc.casas_venta_price.median_usd)}. En las dos la casa típica publicada tiene ${mvd.casas_venta_median_bedrooms} dormitorios.`,
        },
        {
          t: 'p',
          html: `Que la Costa pida más no la hace más cara en general: con ${cdlc.casas_venta_price.listings_with_price} avisos, el número refleja qué casas se publicaron, que suelen tener más terreno. El detalle está en <a href="/uruguay/mercado-inmobiliario-en-ciudad-de-la-costa/">mercado inmobiliario en Ciudad de la Costa</a>.`,
        },
      ],
    },
    {
      id: 'alquileres',
      h2: '¿Cuánto se pide de alquiler y cuánto rinde?',
      blocks: [
        {
          t: 'p',
          html: `Un apartamento en alquiler pide en mediana ${usd(mvd.departamentos_alquiler_price_month.median_usd)} por mes en Montevideo (${pesos(mvd.departamentos_alquiler_price_month.median_usd)}) y ${usd(pde.departamentos_alquiler_price_month.median_usd)} en Punta del Este (${pesos(pde.departamentos_alquiler_price_month.median_usd)}). Maldonado y Ciudad de la Costa tienen muy pocos alquileres publicados.`,
        },
        {
          t: 'p',
          html: `La relación bruta entre alquiler y precio de venta de apartamentos da ${pct(mvd.departamento_gross_rent_yield_pct)}% por año en Montevideo y ${pct(pde.departamento_gross_rent_yield_pct)}% en Punta del Este; en casas de Montevideo, ${pct(mvd.casa_gross_rent_yield_pct)}%. Es alquiler mediano por 12, dividido el precio mediano de venta: no descuenta gastos comunes, impuestos ni meses vacíos, y no es un retorno.`,
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: relación bruta entre alquiler y precio',
          html: 'Datos redondos e hipotéticos: 700 x 12 = USD 8.400 por año; 8.400 ÷ 150.000 = 5,6% por año, antes de cualquier gasto.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio pedido del apartamento', 'USD 150.000'],
            ['Alquiler pedido por mes', `USD 700 (${pesos(700)})`],
            ['Relación bruta', '5,6% por año'],
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
          html: 'Como punto de partida de la charla con el propietario, no como precio. El precio de una propiedad sale de comparables de su barrio, con su tamaño y su estado.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Ubicá la propiedad', html: 'Fijate si su tipo y su ciudad tienen dato o si la muestra es chica.' },
            { title: 'Armá comparables', html: 'Tres a cinco avisos del mismo barrio, tamaño y estado, con su precio pedido.' },
            { title: 'Explicá la diferencia', html: 'Precio pedido no es precio de cierre: mostralo con números y dejá margen para la negociación.' },
          ],
        },
        {
          t: 'p',
          html: 'El método paso a paso está en <a href="/uruguay/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuál es la ciudad con más propiedades en venta en Uruguay?',
      a: `En los datos de Casa-Libre, Montevideo, con ${mvd.for_sale.total} propiedades en venta y ${mvd.for_rent.total} en alquiler al ${D}.`,
    },
    {
      q: '¿Dónde son más caros los apartamentos en Uruguay?',
      a: `Según los precios pedidos, en Punta del Este: ${usd(pde.departamentos_venta_price.median_usd)} de mediana, contra ${usd(mvd.departamentos_venta_price.median_usd)} en Montevideo y ${usd(mal.departamentos_venta_price.median_usd)} en Maldonado.`,
    },
    {
      q: '¿Los alquileres se piden en pesos o en dólares?',
      a: `Muchas veces en pesos. Acá van en dólares para comparar, con la referencia en pesos aproximada a ${String(rate).replace('.', ',')} por dólar.`,
    },
    {
      q: '¿Son precios de venta reales?',
      a: 'No: son precios pedidos en los avisos activos, no precios de cierre. Sirven para comparar y orientar al propietario, no para tasar una propiedad concreta.',
    },
    {
      q: '¿Dónde publicar propiedades en Uruguay?',
      a: 'Te recomendamos Casa-Libre: publicar es gratis para inmobiliarias, agentes y propietarios, y las consultas llegan directo por WhatsApp, sin comisión sobre la venta.',
    },
  ],
  internalSources: [
    {
      label: 'content/data/uy-market.json (read through lib/market.js)',
      url: 'https://uy.casa-libre.com/propiedades',
      date: '2026-11-13',
      note: 'total_active 514; cities montevideo (337), punta-del-este (25), maldonado (24), ciudad-de-la-costa (23). Share = 337/514. Medians, quartiles, bedrooms and yields read from the file. Pesos = USD x 40.3, rounded to 1.000. Example uses round hypothetical inputs only.',
    },
  ],
  closing: {
    title: 'Tu cartera en el mapa de Uruguay',
    text: 'Publicá gratis en Casa-Libre tus propiedades de Montevideo, la Costa, Maldonado o cualquier ciudad, y atendé las consultas por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['mercado-inmobiliario-en-montevideo', 'mercado-inmobiliario-en-punta-del-este', 'mercado-inmobiliario-en-maldonado', 'mercado-inmobiliario-en-ciudad-de-la-costa'],
};
