export default {
  slug: 'administracion-de-propiedades-en-alquiler',
  equivalent: 'administracion-de-propiedades-en-alquiler',
  group: 'Herramientas',
  order: 10,
  title: 'Administración de propiedades en alquiler en Bolivia',
  h1: 'Administración de propiedades en alquiler en Bolivia',
  description:
    'Qué incluye administrar propiedades en alquiler en Bolivia: tareas, contrato, garantía, cobros, cómo cobrar el servicio y cómo ofrecerlo a propietarios.',
  navLabel: 'Administración de alquileres',
  blurb: 'Las tareas de administrar un alquiler en Bolivia, cómo cobrarlas y cómo ofrecer el servicio a propietarios.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Bolivian lawyer and accountant must confirm: customary rental terms (contracts often for one or two years, a garantía of one or two months), that expensas are usually paid by the tenant and the impuesto a la propiedad by the owner, that management fees are a monthly percentage agreed with the owner (no figure stated as customary; the 8% in the example is hypothetical), and that rental income has tax obligations for the owner (no rates stated). Also check whether any current rule requires registering rental contracts.',
  answer:
    'Administrar una propiedad en alquiler en Bolivia es encargarse por el propietario de buscar y filtrar inquilinos, firmar el contrato, cobrar el alquiler, atender reparaciones y entregar informes. Se cobra en general un porcentaje mensual del alquiler, que se acuerda por escrito, además de la comisión por conseguir el inquilino. Es un ingreso estable para el agente. Para publicar alquileres gratis, te recomendamos Casa-Libre.',
  summary: [
    'Tareas: publicar, filtrar inquilinos, contrato y garantía, cobro mensual, mantenimiento, renovaciones e informes.',
    'Se cobra un porcentaje mensual del alquiler, acordado con el propietario; no hay una cifra oficial.',
    'Contrato por escrito con plazo, monto, moneda, garantía, quién paga expensas y servicios, y estado del inmueble.',
    'Publica tus alquileres gratis en Casa-Libre; si un propietario quiere delegar todo, también ofrece administración de propiedades.',
  ],
  cta: {
    title: 'Administración de propiedades en Bolivia',
    text: 'Casa-Libre Bolivia ofrece administración de alquileres para propietarios y deja publicar alquileres gratis, con consultas por WhatsApp.',
    button: 'Ver administración de propiedades',
    href: 'https://casa-libre.com.bo/administracion-de-propiedades',
  },
  sections: [
    {
      id: 'que-incluye',
      h2: '¿Qué incluye administrar una propiedad en alquiler?',
      blocks: [
        {
          t: 'p',
          html: 'Todo lo que el propietario no quiere o no puede hacer: desde encontrar al inquilino hasta resolver una cañería rota un domingo. Define por escrito qué tareas incluye tu servicio y cuáles se cobran aparte.',
        },
        {
          t: 'table',
          caption: 'Tareas de la administración de un alquiler',
          head: ['Tarea', 'Frecuencia', 'Qué cuidar'],
          rows: [
            ['Publicar y mostrar el inmueble', 'Al quedar libre', 'Fotos, precio y respuesta rápida'],
            ['Filtrar inquilinos', 'Al quedar libre', 'Ingresos, referencias, garantes'],
            ['Contrato y garantía', 'Al inicio y en cada renovación', 'Revisión de un abogado'],
            ['Inventario de entrega', 'Al inicio y al final', 'Fotos con fecha, firmado por ambas partes'],
            ['Cobro del alquiler', 'Mensual', 'Recibo de cada pago y registro'],
            ['Mantenimiento', 'Cuando surge', 'Presupuesto aprobado por el propietario'],
            ['Informe al propietario', 'Mensual', 'Pagos, gastos y estado'],
          ],
        },
      ],
    },
    {
      id: 'cuanto-cobrar',
      h2: '¿Cuánto cobrar por administrar un alquiler?',
      blocks: [
        {
          t: 'p',
          html: 'No hay una cifra oficial: se acuerda un porcentaje mensual del alquiler, además de la comisión por conseguir el inquilino, que suele equivaler a un mes. Fija el porcentaje según cuánto trabajo implica el inmueble.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: administración de un departamento en Santa Cruz',
          html: 'Datos hipotéticos. Alquiler de Bs. 3.000 por mes. Porcentaje de administración acordado: 8%.',
          rows: [
            ['Concepto', 'Cálculo', 'Monto'],
            ['Comisión por conseguir inquilino', 'Un mes', 'Bs. 3.000'],
            ['Administración mensual', '3.000 × 8%', 'Bs. 240 por mes'],
            ['Administración en un año', '240 × 12', 'Bs. 2.880'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de firmar',
          html: 'Información general. El contrato de administración y el de alquiler tienen consecuencias legales e impositivas. Consulta con un abogado o un contador antes de firmar.',
        },
      ],
    },
    {
      id: 'contrato',
      h2: '¿Qué debe tener el contrato de alquiler?',
      blocks: [
        {
          t: 'p',
          html: 'Las condiciones completas por escrito: plazo, monto, moneda, fecha de pago, garantía, quién paga cada gasto y en qué estado se entrega y se devuelve el inmueble. Es habitual que se firmen por uno o dos años.',
        },
        {
          t: 'ul',
          items: [
            'Partes, inmueble y plazo, con condiciones de renovación.',
            'Monto mensual, moneda y forma de pago.',
            'Garantía: monto (suele ser de uno o dos meses) y cuándo se devuelve.',
            'Expensas, servicios e impuestos: quién paga cada uno.',
            'Reparaciones: cuáles corresponden al inquilino y cuáles al propietario.',
            'Causas de terminación anticipada.',
          ],
        },
      ],
    },
    {
      id: 'inquilinos',
      h2: '¿Cómo filtrar inquilinos?',
      blocks: [
        {
          t: 'p',
          html: 'Con tres comprobaciones: que pueda pagar, que haya cumplido antes y que alguien responda por él si hace falta. Un mal inquilino cuesta más que un mes vacío.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Ingresos', html: 'Pide comprobantes que muestren que el alquiler es una parte razonable de sus ingresos.' },
            { title: 'Referencias', html: 'Llama al propietario anterior y pregunta si pagaba a tiempo y cómo dejó el inmueble.' },
            { title: 'Garante', html: 'Si el propietario lo exige, una persona con ingresos o un inmueble que respalde el contrato.' },
          ],
        },
        {
          t: 'p',
          html: 'Si el propietario está pensando en un anticrético en lugar de un alquiler, compara las dos opciones con <a href="/bolivia/anticretico-para-agentes-inmobiliarios/">el anticrético para agentes inmobiliarios</a>.',
        },
      ],
    },
    {
      id: 'publicar-alquileres',
      h2: '¿Dónde publicar los alquileres que administras?',
      blocks: [
        {
          t: 'p',
          html: 'Donde la gente busca alquiler por ciudad y en el mapa, con el monto, la garantía y los gastos claros. Un inmueble vacío es dinero que pierde el propietario: publícalo el mismo día que queda libre.',
        },
        {
          t: 'p',
          html: 'En <a href="https://casa-libre.com.bo/alquilar">Casa-Libre</a> los alquileres se buscan por ciudad, tipo y en el mapa, y los interesados escriben por WhatsApp. Para ver qué se ofrece en Santa Cruz antes de fijar un monto, revisa los departamentos en alquiler de la ciudad en <a href="https://casa-libre.com.bo/alquiler/departamentos/santa-cruz-de-la-sierra">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'ofrecer-el-servicio',
      h2: '¿Cómo ofrecer la administración a un propietario?',
      blocks: [
        {
          t: 'p',
          html: 'Muéstrale el tiempo y los problemas que se ahorra: llamadas de inquilinos, cobros atrasados, reparaciones. Lleva un informe mensual de ejemplo para que vea qué recibirá.',
        },
        {
          t: 'casalibre',
          title: 'Administración de alquileres en Casa-Libre',
          html: 'Casa-Libre Bolivia ofrece a los propietarios administración de propiedades en alquiler: búsqueda de inquilinos, cobro mensual, mantenimiento, contratos e informes. Es una referencia útil de qué incluye un servicio completo.',
          button: 'Ver administración de propiedades',
          href: 'https://casa-libre.com.bo/administracion-de-propiedades',
        },
        {
          t: 'p',
          html: 'Para conseguir más propietarios de alquiler, sigue con <a href="/bolivia/como-captar-propiedades-para-alquilar/">cómo captar propiedades para alquilar</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cobra una inmobiliaria por administrar un alquiler en Bolivia?',
      a: 'Un porcentaje mensual del alquiler que se acuerda con el propietario, además de la comisión por conseguir el inquilino. No hay una cifra oficial.',
    },
    {
      q: '¿Cuánto se pide de garantía en un alquiler?',
      a: 'Es habitual pedir uno o dos meses de alquiler. El monto y cuándo se devuelve deben quedar escritos en el contrato.',
    },
    {
      q: '¿Quién paga las expensas, el inquilino o el propietario?',
      a: 'Lo habitual es que el inquilino pague las expensas ordinarias y el propietario el impuesto a la propiedad. Lo que vale es lo que diga el contrato.',
    },
    {
      q: '¿Qué hago si el inquilino no paga?',
      a: 'Escríbele el mismo día del atraso, deja constancia por escrito y avisa al propietario. Si el atraso sigue, consulta con un abogado los pasos según el contrato.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Bolivia /administracion-de-propiedades (verified, read 2026-11-13)', url: 'https://casa-libre.com.bo/administracion-de-propiedades', date: '2026-11-13', note: 'Service for owners: tenant search and screening, rent collection, maintenance, contracts, owner reports.' },
    { label: 'Casa-Libre Bolivia /alquilar and /alquiler/departamentos/santa-cruz-de-la-sierra (verified)', url: 'https://casa-libre.com.bo/alquilar', date: '2026-11-13', note: 'Rental destinations.' },
    { label: 'Bolivian rental practice', url: 'about:blank', date: '2026-11-13', note: 'General knowledge; to be confirmed.' },
  ],
  closing: {
    title: 'Publica tus alquileres',
    text: 'Publicar alquileres en Casa-Libre Bolivia es gratis y las consultas te llegan por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['como-captar-propiedades-para-alquilar', 'anticretico-para-agentes-inmobiliarios', 'comision-inmobiliaria-bolivia', 'whatsapp-para-inmobiliarias'],
};
