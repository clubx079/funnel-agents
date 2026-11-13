export default {
  slug: 'comision-inmobiliaria-el-salvador',
  equivalent: 'comision-inmobiliaria-paraguay',
  group: 'Precio y contratos',
  nav: 'Comisión',
  order: 10,
  title: 'Comisión inmobiliaria en El Salvador: cuánto es y quién paga',
  h1: 'Comisión inmobiliaria en El Salvador: cuánto es y quién paga',
  description:
    'Cuánto cobra un agente de bienes raíces en El Salvador por vender o alquilar, quién paga la comisión, cómo se suma el IVA y un ejemplo con números en dólares.',
  navLabel: 'Comisión inmobiliaria',
  blurb: 'Cuánto se cobra de comisión por venta y por alquiler en El Salvador, quién la paga y cómo calcularla con IVA.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Salvadoran accountant or notario must confirm: the customary sale commission (about 5%, seller pays; no official tariff found), the customary rental fee (stated only as "one month of rent or a negotiated amount"), the 13% IVA on the agent fee when the agent is an IVA contributor (and the registration threshold, not stated), income-tax treatment of commissions, and that no law sets the commission. Also check whether a 2026 reform touched brokerage or rentals.',
  answer:
    'En El Salvador ninguna ley fija la comisión de un agente de bienes raíces: se acuerda por escrito en cada operación. En una venta es habitual que ronde el 5% del precio y que la pague el vendedor. En un alquiler suele cobrarse el equivalente a un mes o un monto negociado. Si el agente es contribuyente de IVA, suma 13%. Casa-Libre no cobra comisión sobre la venta: lo acordado queda para usted.',
  summary: [
    'Venta: alrededor del 5% del precio, pagado normalmente por el vendedor. Es costumbre del mercado, no una tarifa legal.',
    'Alquiler: suele cobrarse el equivalente a un mes de alquiler o un monto acordado; no hay cifra oficial.',
    'Si usted está inscrito como contribuyente de IVA, la factura de su comisión lleva 13% de IVA.',
    'Casa-Libre no cobra comisión sobre la venta ni el alquiler, y publicar es gratis.',
  ],
  cta: {
    title: 'Publique sin ceder parte de su comisión',
    text: 'En Casa-Libre El Salvador publica gratis y las consultas le llegan por WhatsApp. No hay comisión sobre la operación.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'cuanto-es',
      h2: '¿Cuánto es la comisión inmobiliaria en El Salvador?',
      blocks: [
        {
          t: 'p',
          html: 'Es habitual que la comisión por una venta ronde el 5% del precio, y que la de un alquiler sea el equivalente a un mes o un monto negociado. Son costumbres del mercado: no encontramos un arancel oficial.',
        },
        {
          t: 'table',
          caption: 'Comisión habitual en El Salvador según la operación',
          head: ['Operación', 'Comisión habitual', 'Quién suele pagar'],
          rows: [
            ['Venta de casa, apartamento o terreno', 'Alrededor del 5% del precio', 'El vendedor'],
            ['Alquiler: conseguir inquilino', 'Equivalente a un mes de alquiler, o un monto negociado', 'Se acuerda; con frecuencia el propietario'],
            ['Administración mensual del alquiler', 'Un porcentaje del alquiler cobrado, negociado', 'El propietario'],
            ['Venta compartida entre dos agentes', 'La comisión total se reparte según acuerdo escrito', 'Sale de la comisión pagada por el vendedor'],
          ],
          note: 'Costumbre del mercado, a noviembre de 2026. No encontramos una cifra oficial: confirme lo que se usa en su zona.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de firmar',
          html: 'Estos porcentajes son costumbres, no una tarifa legal. Información general. Consulte con un notario o contador antes de firmar.',
        },
      ],
    },
    {
      id: 'ley',
      h2: '¿La comisión de bienes raíces está regulada por ley?',
      blocks: [
        {
          t: 'p',
          html: 'No encontramos una ley que fije porcentajes para el corretaje de bienes raíces en El Salvador. La comisión vale lo que diga el contrato que firmen usted y el propietario.',
        },
        {
          t: 'p',
          html: 'Por eso el contrato escrito es su principal protección: porcentaje, base de cálculo, momento de pago y qué pasa si el propietario vende a un cliente que usted presentó. Vea el <a href="/el-salvador/contrato-de-corretaje-el-salvador/">contrato de corretaje en El Salvador</a>.',
        },
      ],
    },
    {
      id: 'iva',
      h2: '¿La comisión lleva IVA?',
      blocks: [
        {
          t: 'p',
          html: 'Si usted o su inmobiliaria están inscritos como contribuyentes de IVA ante el Ministerio de Hacienda, la comisión es un servicio gravado y la factura lleva el 13% de IVA. Acuerde con el propietario si el 5% es "más IVA" o "IVA incluido".',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: comisión con IVA sobre una casa de US$ 140.000',
          html: 'Datos redondos e hipotéticos, para un agente inscrito en IVA que acordó 5% más IVA.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio de venta', 'US$ 140.000'],
            ['Comisión (140.000 × 5%)', 'US$ 7.000'],
            ['IVA (7.000 × 13%)', 'US$ 910'],
            ['Total que paga el vendedor', 'US$ 7.910'],
            ['Si es "5% IVA incluido": comisión neta (7.000 ÷ 1,13)', 'US$ 6.194,69'],
          ],
        },
      ],
    },
    {
      id: 'quien-paga',
      h2: '¿Quién paga la comisión: el vendedor o el comprador?',
      blocks: [
        {
          t: 'p',
          html: 'En una venta lo habitual es que pague el vendedor, que es quien contrata al agente. Si un comprador le pide buscarle una propiedad, puede cobrarle a él, pero debe quedar escrito y el vendedor debe saberlo.',
        },
        {
          t: 'ul',
          items: [
            'La comisión se paga normalmente al firmar la escritura de compraventa ante notario.',
            'Algunos agentes acuerdan un anticipo al firmar la promesa de venta.',
            'Si el comprador usa crédito, el desembolso del banco o del FSV puede tardar: fije en el contrato la fecha de pago.',
          ],
        },
      ],
    },
    {
      id: 'compartir',
      h2: '¿Cómo se comparte la comisión con otro agente?',
      blocks: [
        {
          t: 'p',
          html: 'Cuando un agente tiene la propiedad y otro trae al cliente, es común repartir la comisión. La proporción se acuerda caso por caso y debe quedar por escrito antes de la visita.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: venta compartida de un apartamento de US$ 100.000',
          html: 'Reparto hipotético de 50% y 50%.',
          rows: [
            ['Concepto', 'Monto'],
            ['Comisión total (100.000 × 5%)', 'US$ 5.000'],
            ['Agente que captó', 'US$ 2.500'],
            ['Agente que trajo al cliente', 'US$ 2.500'],
          ],
        },
        {
          t: 'p',
          html: 'Muchas inmobiliarias publican su cartera en <a href="https://sv.casa-libre.com/propiedades">Casa-Libre</a>, en la misma búsqueda: es una forma de encontrar propiedades de colegas para un cliente suyo.',
        },
      ],
    },
    {
      id: 'defender-la-comision',
      h2: 'Cómo defender su comisión frente al propietario',
      blocks: [
        {
          t: 'p',
          html: 'El propietario acepta pagar cuando ve el trabajo. Explique qué hace usted por ese porcentaje, con un plan concreto.',
        },
        {
          t: 'ol',
          items: [
            'Revisión de papeles en el CNR antes de publicar.',
            'Precio basado en comparables de la zona.',
            'Fotos, anuncio y publicación en varios canales.',
            'Filtro de clientes: solo visitas con forma de pago clara.',
            'Acompañamiento hasta la escritura con el notario.',
          ],
        },
        {
          t: 'p',
          html: 'Para responder a "es mucho cobrar", vea <a href="/el-salvador/objeciones-en-bienes-raices/">objeciones en bienes raíces</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cobra un agente de bienes raíces en El Salvador?',
      a: 'Es habitual que cobre alrededor del 5% del precio de venta, pagado por el vendedor. No lo fija una ley: se acuerda por escrito.',
    },
    {
      q: '¿Cuánto se cobra por alquilar una casa?',
      a: 'Suele cobrarse el equivalente a un mes de alquiler o un monto negociado, y la administración mensual es aparte. No hay cifra oficial.',
    },
    {
      q: '¿La comisión incluye IVA?',
      a: 'Depende de lo que diga el contrato. Si el agente es contribuyente de IVA, la comisión lleva 13%: acuerde si el porcentaje es "más IVA" o "IVA incluido".',
    },
    {
      q: '¿Casa-Libre cobra una parte de mi comisión?',
      a: 'No. Casa-Libre no cobra comisión sobre la venta ni el alquiler, y publicar es gratis.',
    },
    {
      q: '¿Cuándo se paga la comisión?',
      a: 'Normalmente al firmar la escritura de compraventa. Fije en el contrato la fecha y la forma de pago, sobre todo si hay crédito bancario o del FSV.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Path used: /propiedades.' },
    { label: 'IVA rate 13% (PwC tax summaries, El Salvador)', url: 'https://taxsummaries.pwc.com/el-salvador/corporate/other-taxes', date: '2026-11-13', note: 'Confirm IVA treatment of brokerage services.' },
  ],
  closing: {
    title: 'Su comisión, completa',
    text: 'Publique en Casa-Libre El Salvador gratis y sin comisión sobre la venta.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['contrato-de-corretaje-el-salvador', 'como-ser-agente-de-bienes-raices-en-el-salvador', 'como-cerrar-una-venta-de-bienes-raices', 'objeciones-en-bienes-raices'],
};
