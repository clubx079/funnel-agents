export default {
  slug: 'lotificaciones-el-salvador',
  group: 'Terrenos y proyectos',
  order: 10,
  title: 'Lotificaciones en El Salvador: cómo vender lotes',
  h1: 'Lotificaciones en El Salvador: cómo vender lotes',
  description:
    'Qué debe revisar un agente antes de vender lotes de una lotificación en El Salvador, cómo funciona la venta al crédito y cómo anunciar terrenos.',
  navLabel: 'Lotificaciones',
  blurb: 'Cómo revisar, anunciar y vender lotes de lotificaciones en El Salvador, con la venta al crédito y los papeles del CNR.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Salvadoran notario must confirm: that lotificaciones para uso habitacional are governed by a special law (2012) and a later Ley Especial para la Regularización de Lotificaciones y Parcelaciones para Uso Habitacional (approved July 2023, reformed later), that the Ministerio de Vivienda and, in the San Salvador metropolitan area, OPAMSS take part in permits and regularisation, that the Defensoría del Consumidor receives complaints about lotificaciones, and that installment sales are usually documented by a promesa de venta that can be registered, with the escritura de compraventa signed when paid. Also check the vara cuadrada conversion (0.6987 m², from 1 vara = 0.8359 m). No law numbers or article numbers are given.',
  answer:
    'Una lotificación es un terreno dividido en lotes que se venden por separado, muchas veces al crédito en cuotas mensuales. En El Salvador, antes de vender un lote revise que la lotificación tenga sus permisos y esté inscrita en el CNR, que el lote tenga matrícula propia o se pueda segregar, y qué contrato firmará el cliente. Las ventas al crédito suelen documentarse con una promesa de venta. Para publicar cada lote, le recomendamos Casa-Libre.',
  summary: [
    'Las lotificaciones para vivienda tienen una ley especial y un régimen de regularización para las antiguas.',
    'Antes de vender, confirme permisos, inscripción en el CNR y si cada lote tiene matrícula individual.',
    'La venta al crédito suele hacerse con una promesa de venta; la escritura se firma al terminar de pagar.',
    'Publique cada lote por separado en Casa-Libre, con su precio, medida y ubicación.',
  ],
  cta: {
    title: 'Publique cada lote por separado',
    text: 'En Casa-Libre El Salvador publica terrenos gratis, en la búsqueda por ciudad y en el mapa.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es una lotificación en El Salvador?',
      blocks: [
        {
          t: 'p',
          html: 'Es un inmueble dividido en lotes para vender por separado, con calles y servicios comunes. Las hay para vivienda, de recreo y en zonas rurales, y muchas se venden al crédito.',
        },
        {
          t: 'table',
          caption: 'Qué revisar en una lotificación antes de venderla',
          head: ['Punto', 'Qué pedir', 'Por qué importa'],
          rows: [
            ['Inscripción del inmueble', 'Certificación extractada del CNR del inmueble general', 'Saber quién es el titular y si hay gravámenes'],
            ['Permisos', 'Permisos de parcelación y, si aplica, ambientales', 'Una lotificación sin permisos no se puede escriturar con normalidad'],
            ['Lote individual', 'Si cada lote tiene matrícula propia o cómo se segregará', 'El cliente quiere su escritura al terminar de pagar'],
            ['Servicios', 'Agua, energía eléctrica, calles, drenajes', 'Define el precio y la posibilidad de construir'],
            ['Contrato', 'Modelo de promesa de venta y plan de pagos', 'Es lo que firmará el cliente'],
          ],
          note: 'Información general. Confirme cada punto con un notario.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Consulte con un notario antes de vender o comprar un lote en una lotificación.',
        },
      ],
    },
    {
      id: 'ley',
      h2: '¿Qué dice la ley sobre lotificaciones?',
      blocks: [
        {
          t: 'p',
          html: 'Las lotificaciones para uso habitacional tienen una ley especial, y en 2023 se aprobó una ley para regularizar las que se vendieron sin cumplir todos los requisitos. Si la lotificación es antigua, pregunte si está regularizada o en trámite.',
        },
        {
          t: 'ul',
          items: [
            'El Ministerio de Vivienda interviene en la regularización.',
            'En el área metropolitana de San Salvador, la OPAMSS tramita permisos y regularización.',
            'Los compradores de lotes pueden presentar reclamos ante la Defensoría del Consumidor.',
          ],
        },
      ],
    },
    {
      id: 'venta-al-credito',
      h2: 'Cómo funciona la venta de lotes al crédito',
      blocks: [
        {
          t: 'p',
          html: 'Es habitual que el cliente pague una prima y luego cuotas mensuales. Mientras paga, firma una promesa de venta; al cancelar el saldo, se otorga la escritura de compraventa ante notario y se inscribe en el CNR.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: plan de pago de un lote',
          html: 'Números hipotéticos, sin intereses, solo para mostrar el cálculo. El plan real lo fija el lotificador.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio del lote', 'US$ 12.000'],
            ['Prima (10%)', 'US$ 1.200'],
            ['Saldo (12.000 − 1.200)', 'US$ 10.800'],
            ['Cuota mensual a 60 meses (10.800 ÷ 60)', 'US$ 180'],
          ],
        },
        {
          t: 'p',
          html: 'Explique al cliente qué pasa si deja de pagar: lo dice la promesa de venta, y conviene leerla antes de firmar.',
        },
      ],
    },
    {
      id: 'papel-del-agente',
      h2: 'El papel del agente en la venta de lotes',
      blocks: [
        {
          t: 'p',
          html: 'El agente puede trabajar para el lotificador, que le paga comisión por lote vendido, o para un cliente que vende su lote ya pagado. En ambos casos su valor está en revisar papeles y en explicar el contrato con claridad.',
        },
        {
          t: 'ul',
          items: [
            'Acuerde por escrito con el lotificador su comisión y cuándo se paga, si al firmar la promesa o al cobrar cuotas.',
            'No prometa fechas de escritura que dependen de trámites del lotificador.',
            'Lleve al cliente a ver el lote, sus mojones y el acceso.',
          ],
        },
        {
          t: 'p',
          html: 'Más sobre el acuerdo con el propietario en <a href="/el-salvador/contrato-de-corretaje-el-salvador/">contrato de corretaje en El Salvador</a>.',
        },
      ],
    },
    {
      id: 'anunciar',
      h2: 'Cómo anunciar lotes para que generen consultas',
      blocks: [
        {
          t: 'p',
          html: 'Un lote se vende con datos claros: medida en metros cuadrados o varas cuadradas, precio de contado y al crédito, servicios y ubicación exacta.',
        },
        {
          t: 'ol',
          items: [
            'Medida del lote y equivalencia: 1 vara cuadrada equivale a 0,6987 metros cuadrados.',
            'Precio de contado y plan de cuotas, si lo hay.',
            'Servicios disponibles hoy, no los prometidos.',
            'Fotos del lote, del acceso y de la vista.',
            'Ubicación en el mapa.',
          ],
        },
        {
          t: 'p',
          html: 'Busque terrenos en venta en su departamento en <a href="https://sv.casa-libre.com/propiedades?op=venta&amp;type=terreno&amp;q=Santa%20Ana">Casa-Libre</a> para comparar precios antes de fijar el suyo, y publique cada lote por separado.',
        },
      ],
    },
    {
      id: 'riesgos',
      h2: 'Riesgos frecuentes y cómo evitarlos',
      blocks: [
        {
          t: 'p',
          html: 'Los problemas en lotificaciones aparecen años después, cuando el cliente quiere su escritura. Evítelos antes de la primera venta.',
        },
        {
          t: 'ul',
          items: [
            'Lotificación sin inscripción o con el inmueble general hipotecado.',
            'Lotes vendidos dos veces.',
            'Servicios prometidos que nunca llegan.',
            'Terrenos en zonas de riesgo o de protección ambiental.',
          ],
        },
        {
          t: 'p',
          html: 'Para fijar el precio con comparables, vea <a href="/el-salvador/analisis-comparativo-de-mercado-bienes-raices/">análisis comparativo de mercado</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es una lotificación?',
      a: 'Es un terreno dividido en lotes que se venden por separado, con calles y servicios comunes. En El Salvador muchas se venden al crédito.',
    },
    {
      q: '¿Cuándo recibe el cliente la escritura de su lote?',
      a: 'En la venta al crédito, normalmente al terminar de pagar, según lo pactado en la promesa de venta. Confirme con el notario que el lote puede segregarse e inscribirse.',
    },
    {
      q: '¿Cómo saber si una lotificación está legalizada?',
      a: 'Pida la certificación extractada del CNR del inmueble y los permisos de la lotificación. Si es antigua, pregunte si está regularizada.',
    },
    {
      q: '¿Cuánto es una vara cuadrada en metros?',
      a: 'Una vara cuadrada equivale a unos 0,6987 metros cuadrados. Indique las dos medidas en el anuncio.',
    },
  ],
  internalSources: [
    { label: 'Ley Especial de Lotificaciones y Parcelaciones para Uso Habitacional (2012, Defensoría copy)', url: 'https://enlinea.defensoria.gob.sv/Areas/Viajero/Content/documentos/LELPUH2017.pdf', date: '2026-11-13', note: 'Found in search; not read in full.' },
    { label: 'Ley para la Regularización de Lotificaciones (2023), legal commentary', url: 'https://www.ecija.com/actualidad-insights/la-nueva-ley-para-la-regularizacion-de-lotificaciones/', date: '2026-11-13', note: 'Approved 26 July 2023; later reforms reported.' },
    { label: 'Autocomplete (gl=sv) "lotificaciones el salvador"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=sv&q=lotificaciones+el+salvador', date: '2026-11-13', note: 'Variants by department (Santa Ana, San Miguel, Usulután, Sonsonate, La Paz).' },
  ],
  closing: {
    title: 'Sus lotes, en el mapa',
    text: 'Publique cada lote gratis en Casa-Libre El Salvador y reciba las consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['casas-de-playa-la-libertad', 'analisis-comparativo-de-mercado-bienes-raices', 'contrato-de-corretaje-el-salvador', 'comprar-casa-con-credito-del-fondo-social-para-la-vivienda'],
};
