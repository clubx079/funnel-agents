export default {
  slug: 'comision-inmobiliaria-bolivia',
  equivalent: 'comision-inmobiliaria-paraguay',
  group: 'Precio y contratos',
  nav: 'Comisión',
  order: 1,
  title: 'Comisión inmobiliaria en Bolivia: cuánto es y quién paga',
  h1: 'Comisión inmobiliaria en Bolivia: cuánto es y quién paga',
  description:
    'Cuánto cobra un agente inmobiliario en Bolivia por vender o alquilar, quién paga la comisión, cómo dejarla por escrito y ejemplos con números en dólares.',
  navLabel: 'Comisión inmobiliaria',
  blurb: 'La comisión habitual por venta, alquiler y anticrético en Bolivia, quién la paga y cómo calcularla.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Bolivian accountant and real-estate lawyer must confirm: that no law sets real-estate commissions; the customary figures stated (about 3% of the sale price, usually paid by the seller; one month of rent for a rental, usually paid by the owner); that there is no single custom for anticrético fees; and the general tax statement (an invoiced amount in Bolivia already includes IVA, and the agent also owes other taxes; no rates given). All figures in examples are hypothetical.',
  answer:
    'En Bolivia ninguna ley fija la comisión inmobiliaria: se acuerda con el propietario en cada contrato. En una venta es habitual que ronde el 3% del precio, pagado por el vendedor. En un alquiler suele equivaler a un mes de alquiler. En el anticrético no hay una costumbre única. Lo importante es dejarla por escrito antes de publicar. Publicar en Casa-Libre es gratis y no suma comisión.',
  summary: [
    'Venta: es habitual que ronde el 3% del precio, pagado por el vendedor. No hay arancel oficial.',
    'Alquiler: suele cobrarse el equivalente a un mes de alquiler, normalmente al propietario.',
    'Anticrético: no hay una costumbre única; se acuerda un porcentaje del monto o una suma fija.',
    'Casa-Libre no cobra comisión sobre la venta ni el alquiler: lo acordado queda para el agente y la inmobiliaria.',
  ],
  cta: {
    title: 'Publica sin que nadie se lleve parte de tu comisión',
    text: 'En Casa-Libre Bolivia publicas gratis y recibes las consultas por WhatsApp. El distintivo Verificado y el lugar destacado son extras pagos opcionales.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'cuanto-es',
      h2: '¿Cuánto es la comisión inmobiliaria en Bolivia?',
      blocks: [
        {
          t: 'p',
          html: 'Es habitual que ronde el 3% del precio en una venta y un mes de alquiler cuando el agente consigue inquilino. Son costumbres del mercado, no una tarifa legal, y cada agente puede negociar otra cifra.',
        },
        {
          t: 'table',
          caption: 'Comisión habitual en Bolivia según la operación',
          head: ['Operación', 'Comisión habitual', 'Quién suele pagar'],
          rows: [
            ['Venta', 'Alrededor del 3% del precio de venta', 'El vendedor'],
            ['Alquiler', 'El equivalente a un mes de alquiler', 'Normalmente el propietario; se acuerda'],
            ['Anticrético', 'Sin costumbre única: porcentaje del monto o suma fija', 'Se acuerda en cada caso'],
            ['Administración del alquiler', 'Un porcentaje mensual del alquiler', 'El propietario'],
          ],
          note: 'Práctica habitual del mercado, sin cifra oficial. Verifica con colegas de tu ciudad: puede variar entre Santa Cruz, La Paz y Cochabamba.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de firmar',
          html: 'Información general. La comisión y su forma de pago las fija tu contrato. Consulta con un abogado o un contador antes de firmar.',
        },
      ],
    },
    {
      id: 'quien-paga',
      h2: '¿Quién paga la comisión, el comprador o el vendedor?',
      blocks: [
        {
          t: 'p',
          html: 'En una venta, lo habitual es que pague el vendedor, que es quien contrata al agente. Cuando el comprador también contrata a un agente para buscarle un inmueble, ese agente puede cobrarle a él por su trabajo; lo que no corresponde es cobrar dos veces sin decirlo.',
        },
        {
          t: 'p',
          html: 'Deja escrito en la autorización de venta quién paga, cuánto y cuándo. El modelo y los campos están en <a href="/bolivia/autorizacion-de-venta-inmobiliaria/">la autorización de venta inmobiliaria</a>.',
        },
      ],
    },
    {
      id: 'ejemplo-venta',
      h2: '¿Cómo se calcula la comisión de una venta?',
      blocks: [
        {
          t: 'p',
          html: 'Se multiplica el precio final de venta, no el precio publicado, por el porcentaje acordado. Si compartes la operación con otro agente, se divide según lo que hayan pactado.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: venta de una casa en Cochabamba',
          html: 'Datos redondos e hipotéticos. La casa se publicó en USD 160.000 y se vendió en USD 150.000.',
          rows: [
            ['Concepto', 'Cálculo', 'Monto'],
            ['Comisión acordada', '150.000 × 3%', 'USD 4.500'],
            ['Compartida con el agente del comprador al 50%', '4.500 ÷ 2', 'USD 2.250 cada uno'],
            ['Si trabajas en una inmobiliaria que se queda la mitad (hipotético)', '2.250 ÷ 2', 'USD 1.125 para ti'],
          ],
        },
      ],
    },
    {
      id: 'alquiler',
      h2: '¿Cuánto cobra una inmobiliaria por alquilar?',
      blocks: [
        {
          t: 'p',
          html: 'Por conseguir el inquilino, suele cobrar un mes de alquiler. Si además administra el inmueble (cobros, reparaciones, renovaciones), cobra aparte un porcentaje mensual que se acuerda con el propietario.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: alquiler de un departamento',
          html: 'Datos hipotéticos. Alquiler de Bs. 3.500 por mes, contrato de un año.',
          rows: [
            ['Concepto', 'Monto'],
            ['Comisión por conseguir inquilino (un mes)', 'Bs. 3.500'],
            ['Administración, si se acuerda un 8% mensual (hipotético)', 'Bs. 280 por mes'],
          ],
        },
        {
          t: 'p',
          html: 'Qué incluye la administración y cómo ofrecerla está en <a href="/bolivia/administracion-de-propiedades-en-alquiler/">administración de propiedades en alquiler</a>.',
        },
      ],
    },
    {
      id: 'impuestos',
      h2: '¿La comisión lleva impuestos?',
      blocks: [
        {
          t: 'p',
          html: 'Si trabajas de forma formal y emites factura, el monto facturado ya incluye el IVA, y además tienes otras obligaciones tributarias. Por eso lo que te queda neto es menos que la comisión cobrada.',
        },
        {
          t: 'p',
          html: 'Antes de fijar tu porcentaje, pide a un contador que te calcule cuánto te queda neto por cada USD 1.000 de comisión. Con ese número negocias sin sorpresas.',
        },
      ],
    },
    {
      id: 'negociar',
      h2: '¿Cómo defender tu comisión ante el propietario?',
      blocks: [
        {
          t: 'p',
          html: 'Mostrando qué hace tu trabajo que el propietario no hace solo: precio basado en comparables, revisión de papeles, fotos, publicación, filtro de interesados y acompañamiento hasta Derechos Reales. Si solo hablas de porcentajes, pierdes.',
        },
        {
          t: 'ul',
          items: [
            'Lleva un plan escrito de cómo vas a mostrar el inmueble.',
            'Ofrece informes de consultas y visitas cada semana.',
            'Explica que publicar en Casa-Libre no le cuesta nada al propietario ni descuenta comisión.',
          ],
        },
        {
          t: 'casalibre',
          title: 'Más exposición sin costo para tu cliente',
          html: 'Con la cuenta para inmobiliarias de Casa-Libre publicas toda tu cartera gratis, con fotos y ubicación en el mapa, y las consultas te llegan por WhatsApp. Funciona en la web y en apps para iPhone y Android.',
          button: 'Ver la cuenta para inmobiliarias',
          href: 'https://casa-libre.com.bo/empresas',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Hay una ley que fije la comisión inmobiliaria en Bolivia?',
      a: 'No encontramos una ley ni un arancel oficial que la fije. Es una práctica del mercado que se acuerda por escrito entre el agente y su cliente.',
    },
    {
      q: '¿Cuándo se cobra la comisión de una venta?',
      a: 'Lo habitual es cobrarla al firmar la escritura o al recibir el vendedor el pago. Acuerda el momento exacto en la autorización de venta.',
    },
    {
      q: '¿Se cobra comisión si el propietario vende solo durante la exclusividad?',
      a: 'Depende de lo que diga el contrato de exclusividad. Muchos contratos lo prevén; si el tuyo no lo dice, es difícil reclamarla.',
    },
    {
      q: '¿Casa-Libre cobra comisión por las ventas?',
      a: 'No. Casa-Libre no cobra comisión sobre la venta ni el alquiler. Publicar es gratis y hay extras pagos opcionales.',
    },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo: comision inmobiliaria bolivia', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=comision+inmobiliaria+bolivia', date: '2026-11-13', note: 'Query exists; low volume variants.' },
    { label: 'Commission custom in Bolivia (about 3%)', url: 'about:blank', date: '2026-11-13', note: 'From COUNTRY_GUIDE.md (BO ~3%); to be verified with Bolivian agents and an accountant.' },
  ],
  closing: {
    title: 'Tu comisión, completa',
    text: 'Publicar en Casa-Libre Bolivia es gratis y no hay comisión sobre la venta ni el alquiler.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['contrato-de-corretaje-inmobiliario', 'autorizacion-de-venta-inmobiliaria', 'como-ser-agente-inmobiliario-en-bolivia', 'administracion-de-propiedades-en-alquiler'],
};
