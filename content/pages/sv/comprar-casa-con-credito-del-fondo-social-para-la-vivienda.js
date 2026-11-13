export default {
  slug: 'comprar-casa-con-credito-del-fondo-social-para-la-vivienda',
  group: 'Clientes y ventas',
  order: 40,
  title: 'Comprar casa con crédito del FSV: guía para agentes',
  h1: 'Comprar casa con crédito del Fondo Social para la Vivienda',
  description:
    'Cómo acompañar a un cliente que compra casa con crédito del Fondo Social para la Vivienda en El Salvador: líneas de crédito, pasos, avalúo y qué preparar.',
  navLabel: 'Crédito del FSV',
  blurb: 'Qué debe saber un agente de bienes raíces en El Salvador para vender una casa a un cliente que compra con crédito del FSV.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'Every FSV fact must be checked against the FSV website before publishing: that the FSV is a public institution that grants housing credit to workers; the names of the current lines (Casa Joven, Casa Mujer and Vivienda Cercana appear in press and search suggestions in 2026); that the FSV performs its own valuation of the property; the general step order (precalificación or simulador, solicitud, documentos, avalúo, aprobación, escritura de compraventa y mutuo hipotecario, inscripción); and that the FSV sets maximum prices or amounts by line (not stated here). No rates, amounts or terms are given on purpose.',
  answer:
    'Comprar casa con crédito del Fondo Social para la Vivienda (FSV) es una de las formas más comunes de financiar vivienda en El Salvador. El cliente se precalifica, presenta su solicitud y documentos, el FSV evalúa la propiedad con su propio avalúo y, si aprueba, se firma la escritura de compraventa con hipoteca ante notario. El agente ayuda eligiendo propiedades que cumplan y preparando los papeles. Para encontrar esas propiedades, puede buscar en Casa-Libre.',
  summary: [
    'El FSV es una institución pública que financia vivienda; tiene líneas para jóvenes, mujeres y salvadoreños en el exterior.',
    'Pasos: precalificación, solicitud, documentos, avalúo del FSV, aprobación, escritura e inscripción en el CNR.',
    'La propiedad debe tener papeles en regla y pasar el avalúo; revise la certificación del CNR antes de ofertar.',
    'Requisitos, montos y tasas cambian: el cliente debe confirmarlos directo con el FSV.',
  ],
  cta: {
    title: 'Propiedades para clientes con crédito',
    text: 'Publique su cartera gratis en Casa-Libre El Salvador e indique en cada anuncio si acepta crédito del FSV.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es el Fondo Social para la Vivienda?',
      blocks: [
        {
          t: 'p',
          html: 'El FSV es una institución pública salvadoreña que otorga créditos para comprar, construir o mejorar vivienda. Para muchos clientes de ingresos medios es la vía principal para comprar casa.',
        },
        {
          t: 'table',
          caption: 'Líneas del FSV mencionadas con frecuencia en 2026',
          head: ['Línea', 'Para quién', 'Qué verificar'],
          rows: [
            ['Crédito para vivienda', 'Trabajadores que cumplen los requisitos del FSV', 'Ingresos, monto máximo y plazo'],
            ['Casa Joven', 'Personas jóvenes', 'Edad y condiciones vigentes'],
            ['Casa Mujer', 'Mujeres', 'Condiciones vigentes'],
            ['Vivienda Cercana', 'Salvadoreños en el exterior y quienes reciben remesas', 'Documentos de residencia o ingresos'],
          ],
          note: 'Nombres de líneas según la prensa y las búsquedas de 2026. Condiciones sin cifras a propósito: cambian y deben confirmarse con el FSV.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. El cliente debe confirmar requisitos, montos y tasas con el FSV, y consultar con un notario antes de firmar.',
        },
      ],
    },
    {
      id: 'pasos',
      h2: '¿Cuáles son los pasos para comprar casa con el FSV?',
      blocks: [
        {
          t: 'p',
          html: 'El orden general es el siguiente. Los tiempos dependen del FSV y de que los papeles de la propiedad estén completos.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Precalificación', html: 'El cliente calcula cuánto le podrían prestar, por ejemplo con el simulador del FSV.' },
            { title: 'Elegir la propiedad', html: 'Una casa con papeles en regla, dentro del monto que el cliente puede financiar.' },
            { title: 'Solicitud y documentos', html: 'El cliente presenta su solicitud con los documentos personales y de ingresos que le pidan.' },
            { title: 'Avalúo del FSV', html: 'El FSV evalúa la propiedad para fijar cuánto puede prestar sobre ella.' },
            { title: 'Aprobación', html: 'Si se aprueba, el FSV indica el monto, plazo y condiciones.' },
            { title: 'Escritura e inscripción', html: 'Se firma la compraventa con el mutuo hipotecario ante notario y se inscribe en el CNR.' },
          ],
        },
      ],
    },
    {
      id: 'papel-del-agente',
      h2: 'Qué hace el agente en una venta con crédito del FSV',
      blocks: [
        {
          t: 'p',
          html: 'El agente evita que el cliente se enamore de una casa que no puede financiar. Su trabajo es filtrar, preparar papeles y coordinar plazos.',
        },
        {
          t: 'ul',
          items: [
            'Pregunte si el cliente ya está precalificado antes de mostrar propiedades.',
            'Muestre solo casas dentro del monto posible, más la prima que pueda aportar.',
            'Pida al vendedor la escritura, la certificación extractada del CNR y la solvencia municipal desde el inicio.',
            'Incluya en la promesa de venta un plazo realista y qué pasa si el crédito no se aprueba.',
          ],
        },
        {
          t: 'p',
          html: 'Más sobre la promesa y la escritura en <a href="/el-salvador/como-cerrar-una-venta-de-bienes-raices/">cómo cerrar una venta de bienes raíces</a>.',
        },
      ],
    },
    {
      id: 'prima',
      h2: 'La prima y la diferencia con el avalúo',
      blocks: [
        {
          t: 'p',
          html: 'Si el avalúo o el monto aprobado son menores que el precio, el cliente paga la diferencia como prima. Calcúlelo antes de la oferta para evitar sorpresas.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: diferencia que paga el cliente',
          html: 'Números hipotéticos y redondos, no condiciones del FSV.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio acordado', 'US$ 60.000'],
            ['Monto que se aprueba (supuesto)', 'US$ 54.000'],
            ['Prima que aporta el cliente (60.000 − 54.000)', 'US$ 6.000'],
            ['Más gastos de escritura e inscripción', 'Según el notario y el CNR'],
          ],
        },
      ],
    },
    {
      id: 'propiedades-que-cumplen',
      h2: '¿Qué casas suelen ser aptas para crédito?',
      blocks: [
        {
          t: 'p',
          html: 'Una casa apta tiene título inscrito, sin gravámenes que impidan la hipoteca, servicios básicos y un estado que pase el avalúo. Las casas en lotificaciones sin escritura individual o con problemas registrales suelen quedar fuera.',
        },
        {
          t: 'ul',
          items: [
            'Escritura inscrita a nombre del vendedor.',
            'Sin embargos; si tiene hipoteca, carta del banco con el saldo para cancelarla.',
            'Agua, energía eléctrica y acceso.',
            'Construcción coherente con lo inscrito.',
          ],
        },
        {
          t: 'p',
          html: 'Si trabaja lotes, lea <a href="/el-salvador/lotificaciones-el-salvador/">lotificaciones en El Salvador</a>.',
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Cómo anunciar casas para clientes con crédito',
      blocks: [
        {
          t: 'p',
          html: 'Diga en el anuncio si el vendedor acepta crédito bancario o del FSV: es una de las primeras preguntas de los clientes y ahorra conversaciones inútiles.',
        },
        {
          t: 'p',
          html: 'Para ver casas en venta por ciudad, busque en <a href="https://sv.casa-libre.com/comprar">Casa-Libre</a>. Para publicar las suyas, indique "acepta crédito del FSV" en la descripción.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Quién puede pedir un crédito del FSV?',
      a: 'Trabajadores que cumplan los requisitos del FSV, y hay líneas para jóvenes, mujeres y salvadoreños en el exterior. Las condiciones cambian: confírmelas directo con el FSV.',
    },
    {
      q: '¿El FSV hace su propio avalúo?',
      a: 'Sí, el FSV evalúa la propiedad antes de aprobar el crédito. Si el monto aprobado es menor que el precio, el cliente paga la diferencia.',
    },
    {
      q: '¿Se puede comprar una casa usada con el FSV?',
      a: 'Sí, siempre que la propiedad cumpla las condiciones legales y físicas que pide el FSV. Revise la certificación del CNR antes de ofertar.',
    },
    {
      q: '¿Cuánto tarda un crédito del FSV?',
      a: 'Depende del FSV, de los documentos del cliente y de los papeles de la propiedad. Prevea un plazo amplio en la promesa de venta.',
    },
  ],
  internalSources: [
    { label: 'Press: FSV credit programmes 2026', url: 'https://www.elsalvador.com/dinero-y-negocios/finanzas-personales/programas-credito-vivienda-fsv/1287679/2026/', date: '2026-11-13', note: 'Line names; verify with FSV.' },
    { label: 'Autocomplete (gl=sv) for "credito fondo social para la vivienda"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=sv&q=credito+fondo+social+para+la+vivienda', date: '2026-11-13', note: 'Casa Joven, Casa Mujer, simulador, requisitos.' },
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Path used: /comprar.' },
  ],
  closing: {
    title: 'Anuncie casas que aceptan crédito',
    text: 'Publique gratis en Casa-Libre El Salvador y reciba consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['como-cerrar-una-venta-de-bienes-raices', 'avaluo-de-casa-el-salvador', 'vender-propiedades-a-salvadorenos-en-el-exterior'],
};
