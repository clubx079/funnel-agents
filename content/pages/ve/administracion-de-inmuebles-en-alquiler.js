export default {
  slug: 'administracion-de-inmuebles-en-alquiler',
  equivalent: 'administracion-de-propiedades-en-alquiler',
  group: 'Herramientas',
  order: 10,
  title: 'Administración de inmuebles en alquiler en Venezuela',
  h1: 'Administración de inmuebles en alquiler en Venezuela',
  description:
    'Qué incluye administrar un inmueble en alquiler en Venezuela, cómo se cobra, qué revisar de la ley de arrendamientos y cómo trabajar con propietarios en el exterior.',
  navLabel: 'Administrar alquileres',
  blurb: 'Las tareas de administrar un alquiler en Venezuela, cómo cobrarlas y qué revisar de la ley de arrendamientos.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Venezuelan lawyer must review every rental statement: the housing rental law (Ley para la Regularización y Control de los Arrendamientos de Vivienda, 2011) and its rules on canon, deposit, currency, contract registration and eviction, the role of SUNAVI, the separate regime for commercial premises, and whether a reform is in force in 2026 (search suggestions show "nueva ley de arrendamiento venezuela" and "ley de arrendamiento venezuela 2026": verify). Management fees are left unquantified on purpose.',
  answer:
    'Administrar un inmueble en alquiler en Venezuela es encargarse, por cuenta del propietario, de conseguir y evaluar al inquilino, firmar el contrato, cobrar el canon, atender reparaciones y rendir cuentas. Se cobra un porcentaje mensual del canon que se negocia. La ley de arrendamientos de vivienda es muy protectora del inquilino, así que cada contrato lo revisa un abogado. Para publicar el alquiler, te recomendamos Casa-Libre.',
  summary: [
    'Tareas: publicar, evaluar inquilinos, contrato, cobro, reparaciones, condominio e informes al propietario.',
    'Honorarios: un porcentaje mensual del canon que se negocia; no hay una tarifa oficial.',
    'La ley de arrendamientos de vivienda tiene reglas estrictas: un abogado revisa cada contrato.',
    'Muchos propietarios viven afuera y buscan quien administre; los alquileres se publican gratis en Casa-Libre.',
  ],
  cta: {
    title: 'Administración de alquileres',
    text: 'Casa-Libre Venezuela tiene una sección de administración de propiedades para propietarios, y los alquileres se publican gratis.',
    button: 'Ver administración de propiedades',
    href: 'https://casa-libre.com.ve/administracion-de-propiedades',
  },
  sections: [
    {
      id: 'tareas',
      h2: '¿Qué incluye la administración de un inmueble en alquiler?',
      blocks: [
        {
          t: 'p',
          html: 'Todo lo que el propietario no quiere o no puede hacer. Acuerda por escrito qué tareas incluye tu servicio y cuáles se cobran aparte.',
        },
        {
          t: 'table',
          caption: 'Tareas de la administración de un alquiler',
          head: ['Tarea', 'Qué implica', 'Frecuencia'],
          rows: [
            ['Publicar y mostrar', 'Fotos, ficha, visitas', 'Al quedar vacío'],
            ['Evaluar al inquilino', 'Referencias, ingresos, documentos', 'Antes de firmar'],
            ['Contrato', 'Redacción y firma con un abogado', 'Al inicio y en cada renovación'],
            ['Inventario', 'Estado del inmueble y muebles con fotos', 'Al entrar y al salir'],
            ['Cobro del canon', 'Recibir, registrar y transferir al propietario', 'Mensual'],
            ['Condominio y servicios', 'Que estén al día', 'Mensual'],
            ['Reparaciones', 'Presupuestos y supervisión', 'Cuando hace falta'],
            ['Informe al propietario', 'Cobros, gastos y novedades', 'Mensual'],
          ],
          note: 'Esquema general. Cada contrato de administración define su alcance.',
        },
      ],
    },
    {
      id: 'cuanto-cobrar',
      h2: '¿Cuánto cobra una inmobiliaria por administrar un alquiler?',
      blocks: [
        {
          t: 'p',
          html: 'Lo habitual es un porcentaje mensual del canon cobrado, más un monto por conseguir inquilino. No hay tarifa oficial: depende de cuántas tareas asumes y del valor del alquiler.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: cómo se calcula',
          html: 'Datos redondos e hipotéticos. El porcentaje es solo para mostrar el cálculo, no una referencia del mercado.',
          rows: [
            ['Concepto', 'Monto'],
            ['Canon mensual', 'USD 400'],
            ['Porcentaje de administración acordado (ejemplo: 10%)', 'USD 40 al mes'],
            ['Lo que recibe el propietario antes de gastos', 'USD 360 al mes'],
          ],
        },
        {
          t: 'p',
          html: 'Más sobre honorarios en <a href="/venezuela/comision-inmobiliaria-venezuela/">comisión inmobiliaria en Venezuela</a>.',
        },
      ],
    },
    {
      id: 'ley',
      h2: '¿Qué hay que saber de la ley de arrendamientos de vivienda?',
      blocks: [
        {
          t: 'p',
          html: 'Que es muy protectora del inquilino y que tiene reglas sobre el canon, el depósito, la duración, la moneda y el desalojo, con una superintendencia propia. En la práctica el mercado no siempre funciona como dice la norma, y ahí está el riesgo para el propietario.',
        },
        {
          t: 'ul',
          items: [
            'Los alquileres de vivienda y los de locales comerciales tienen reglas distintas.',
            'El contrato debe redactarlo o revisarlo un abogado, con un inventario firmado.',
            'Antes de iniciar cualquier reclamo o desalojo, consulta a un abogado: hay procedimientos previos obligatorios.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Consulta con un abogado antes de firmar un contrato de alquiler o de administración. Verifica si hubo cambios recientes en la ley.',
        },
      ],
    },
    {
      id: 'propietarios-afuera',
      h2: 'Administrar para propietarios que viven afuera',
      blocks: [
        {
          t: 'p',
          html: 'Es uno de los servicios más pedidos. El propietario necesita a alguien de confianza que cobre, pague el condominio, resuelva reparaciones y le informe con regularidad.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Poder o autorización', html: 'Que te faculte para firmar contratos y cobrar, revisado por un abogado.' },
            { title: 'Cuenta clara', html: 'Acuerda dónde se recibe el canon y cómo se transfiere al propietario.' },
            { title: 'Informe mensual', html: 'Cobros, gastos con comprobantes, estado del inmueble y fotos.' },
            { title: 'Reglas para gastos', html: 'Hasta qué monto puedes aprobar reparaciones sin consultar.' },
          ],
        },
      ],
    },
    {
      id: 'publicar-alquiler',
      h2: 'Cómo conseguir inquilinos para los inmuebles que administras',
      blocks: [
        {
          t: 'p',
          html: 'Publicando cada inmueble con canon en dólares, fotos, condiciones claras y requisitos. Un inquilino bien elegido evita problemas durante todo el contrato.',
        },
        {
          t: 'p',
          html: 'Publica los alquileres en <a href="https://casa-libre.com.ve/alquilar">Casa-Libre</a>, donde la gente busca inmuebles en alquiler por ciudad y en el mapa. Para conseguir más inmuebles que administrar, lee <a href="/venezuela/como-captar-inmuebles-para-alquilar/">cómo captar inmuebles para alquilar</a>.',
        },
        {
          t: 'casalibre',
          title: 'Administración de propiedades en Casa-Libre',
          html: 'Casa-Libre Venezuela tiene una sección para propietarios que buscan administrar su alquiler. Los inmuebles en alquiler se publican gratis y las consultas llegan por WhatsApp, sin comisión sobre el alquiler.',
          button: 'Ver administración de propiedades',
          href: 'https://casa-libre.com.ve/administracion-de-propiedades',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué hace un administrador de inmuebles en alquiler?',
      a: 'Busca y evalúa inquilinos, gestiona el contrato, cobra el canon, paga condominio y servicios, coordina reparaciones e informa al propietario.',
    },
    {
      q: '¿Cuánto cobra una inmobiliaria por administrar un alquiler en Venezuela?',
      a: 'Un porcentaje mensual del canon que se negocia, a veces más un monto por conseguir inquilino. No hay tarifa oficial.',
    },
    {
      q: '¿Se puede alquilar en dólares en Venezuela?',
      a: 'En la práctica muchos alquileres se pactan en dólares, pero la ley de arrendamientos de vivienda tiene reglas sobre la moneda y el canon. Consulta con un abogado antes de redactar el contrato.',
    },
    {
      q: '¿Qué pasa si el inquilino no paga?',
      a: 'Hay procedimientos legales previos que deben seguirse antes de cualquier desalojo. No actúes por tu cuenta: consulta a un abogado.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Paths used: /alquilar, /administracion-de-propiedades.' },
    { label: 'Google autocomplete gl=ve, "ley de arrendamiento venezuela"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=ve&q=ley%20de%20arrendamiento%20venezuela', date: '2026-11-13', note: 'Suggestions include "nueva ley de arrendamiento venezuela" and "2026": check whether a reform is in force.' },
  ],
  closing: {
    title: 'Publica tus alquileres gratis',
    text: 'En Casa-Libre Venezuela los inquilinos te escriben por WhatsApp.',
    button: 'Ver alquileres en Casa-Libre',
    href: 'https://casa-libre.com.ve/alquilar',
  },
  related: ['como-captar-inmuebles-para-alquilar', 'comision-inmobiliaria-venezuela', 'vender-inmueble-desde-el-exterior'],
};
