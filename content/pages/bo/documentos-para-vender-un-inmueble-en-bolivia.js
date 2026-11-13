export default {
  slug: 'documentos-para-vender-un-inmueble-en-bolivia',
  group: 'Precio y contratos',
  order: 5,
  title: 'Documentos para vender un inmueble en Bolivia: lista',
  h1: 'Documentos para vender un inmueble en Bolivia',
  description:
    'Qué documentos pedir para vender una casa, un departamento o un terreno en Bolivia: testimonio, folio real, alodial, impuestos, plano y casos especiales.',
  navLabel: 'Documentos para vender',
  blurb: 'La lista de papeles que un agente pide antes de publicar un inmueble en Bolivia y qué muestra cada uno.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Bolivian notario de fe pública or lawyer must confirm the whole document list and how each item is named: testimonio de la escritura, folio real (Derechos Reales), certificado alodial (ownership history and liens) and that it is not the same as the folio real, impuesto a la propiedad receipts (how many past gestiones are usually asked), plano aprobado and municipal catastro papers, the need for the spouse signature on bienes gananciales, declaratoria de herederos for inheritances, and that a municipal transfer tax is paid before registration (no rate stated). Confirm also that a minuta must be signed by a lawyer.',
  answer:
    'Para vender un inmueble en Bolivia, el propietario necesita en general el testimonio de la escritura, el folio real actualizado de Derechos Reales, un certificado alodial que muestre gravámenes, el impuesto a la propiedad al día, el plano aprobado y su carnet de identidad. Si hay herencia, matrimonio o propiedad horizontal, se suman papeles. Pídelos antes de publicar. Para publicar el inmueble gratis, te recomendamos Casa-Libre.',
  summary: [
    'Básicos: testimonio de la escritura, folio real actualizado, certificado alodial, impuesto a la propiedad al día, plano aprobado y carnet de identidad.',
    'El folio real dice quién es el titular; el alodial resume la historia del inmueble y sus gravámenes. No son lo mismo.',
    'Casos especiales: cónyuge que debe firmar, declaratoria de herederos, poder notarial si el dueño vive afuera, expensas al día en edificios.',
    'Revisa los papeles en la primera reunión: un problema de títulos detectado tarde hace caer la venta.',
  ],
  cta: {
    title: 'Publica solo lo que puedes vender',
    text: 'Con papeles revisados, publica tu cartera en Casa-Libre Bolivia gratis y recibe consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'lista',
      h2: '¿Qué documentos se necesitan para vender una casa en Bolivia?',
      blocks: [
        {
          t: 'p',
          html: 'Estos son los papeles que un agente pide siempre, sea casa, departamento o terreno. El notario de fe pública y el abogado de la operación pueden pedir otros según el caso.',
        },
        {
          t: 'table',
          caption: 'Documentos para vender un inmueble en Bolivia y qué muestra cada uno',
          head: ['Documento', 'Dónde se obtiene', 'Qué te dice'],
          rows: [
            ['Testimonio de la escritura', 'Lo tiene el propietario; copia en la notaría donde se firmó', 'Cómo y de quién compró el actual dueño'],
            ['Folio real actualizado', 'Derechos Reales', 'Quién es el titular registrado y la matrícula del inmueble'],
            ['Certificado alodial', 'Derechos Reales', 'La historia de titulares y si hay hipotecas, embargos u otras anotaciones'],
            ['Impuesto a la propiedad', 'Municipio', 'Si las gestiones anteriores están pagadas'],
            ['Plano aprobado y papeles de catastro', 'Municipio', 'Superficie, límites y si lo construido coincide con lo aprobado'],
            ['Carnet de identidad', 'Del propietario', 'Que quien firma es el titular'],
          ],
          note: 'Lista general. Los nombres y requisitos exactos pueden variar según el municipio.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de firmar',
          html: 'Información general. Pide al abogado o al notario la lista exacta para cada operación. Consulta con un notario de fe pública o un abogado antes de firmar.',
        },
      ],
    },
    {
      id: 'folio-real-y-alodial',
      h2: '¿El folio real y el alodial son lo mismo?',
      blocks: [
        {
          t: 'p',
          html: 'No. El folio real es el registro del inmueble en Derechos Reales: identifica el inmueble y a su titular. El certificado alodial resume la historia de ese registro y muestra si hay gravámenes, como hipotecas o embargos.',
        },
        {
          t: 'p',
          html: 'Para el agente, el alodial es el papel que más problemas evita: un inmueble con una hipoteca vigente se puede vender, pero hay que cancelarla en la misma operación, y eso cambia los plazos y la forma de pago.',
        },
      ],
    },
    {
      id: 'casos-especiales',
      h2: '¿Qué papeles extra piden los casos especiales?',
      blocks: [
        {
          t: 'p',
          html: 'Cuatro situaciones agregan documentos y tiempo. Detéctalas en la primera reunión con una pregunta directa: "¿Quiénes figuran como dueños y dónde están hoy?".',
        },
        {
          t: 'ul',
          items: [
            '<strong>Propietario casado:</strong> si el inmueble es un bien ganancial, en general debe firmar también el cónyuge.',
            '<strong>Herencia:</strong> declaratoria de herederos inscrita en Derechos Reales antes de vender, y la firma de todos los herederos.',
            '<strong>Dueño en el exterior:</strong> un poder notarial suficiente para vender, otorgado ante el consulado o legalizado según el país.',
            '<strong>Departamento en edificio:</strong> reglamento de propiedad horizontal y constancia de expensas al día.',
          ],
        },
      ],
    },
    {
      id: 'terrenos',
      h2: '¿Qué revisar si es un terreno o un lote en una urbanización?',
      blocks: [
        {
          t: 'p',
          html: 'Además de la lista básica, revisa que el lote exista como tal en los planos aprobados por el municipio. Un lote de una urbanización sin aprobación puede no tener folio real propio.',
        },
        {
          t: 'ul',
          items: [
            'Plano de la urbanización aprobado y el número de manzano y lote.',
            'Folio real individual del lote, no solo del terreno grande del que salió.',
            'Que el lote esté libre de ocupantes y con límites claros en el lugar.',
          ],
        },
        {
          t: 'p',
          html: 'La guía de <a href="/bolivia/como-vender-terrenos-en-santa-cruz/">cómo vender terrenos en Santa Cruz</a> trata el caso de las urbanizaciones con más detalle.',
        },
      ],
    },
    {
      id: 'impuestos-y-gastos',
      h2: '¿Qué impuestos y gastos hay al vender?',
      blocks: [
        {
          t: 'p',
          html: 'En una venta hay un impuesto municipal a la transferencia que se paga antes de inscribir la operación, además de los honorarios del abogado, del notario de fe pública y el costo de la inscripción en Derechos Reales. Quién paga cada gasto se acuerda entre las partes. El orden de los pasos está en <a href="/bolivia/como-cerrar-una-venta-inmobiliaria/">cómo cerrar una venta inmobiliaria en Bolivia</a>.',
        },
        {
          t: 'p',
          html: 'Para que el propietario llegue informado, puedes enviarle la guía de impuestos y gastos al vender de <a href="https://casa-libre.com.bo/guias/impuestos-y-gastos-al-vender">Casa-Libre</a>. No des cifras de memoria: pide al contador o al notario el cálculo para ese inmueble.',
        },
      ],
    },
    {
      id: 'checklist',
      h2: 'Checklist para la primera reunión con el propietario',
      blocks: [
        {
          t: 'p',
          html: 'Lleva esta lista impresa o en el celular y repásala con el propietario. Lo que falte, anótalo con una fecha para conseguirlo.',
        },
        {
          t: 'ol',
          items: [
            'Copia del testimonio y del carnet de todos los titulares.',
            'Folio real y certificado alodial recientes (pide fecha de emisión).',
            'Comprobantes del impuesto a la propiedad de las últimas gestiones.',
            'Plano aprobado y, si hay construcción, que coincida con lo construido.',
            'Datos de hipotecas, anticréticos o alquileres vigentes.',
            'Si aplica: cónyuge, herederos, poder, reglamento y expensas.',
          ],
        },
        {
          t: 'casalibre',
          title: 'Una guía para enviarle al propietario',
          html: 'Casa-Libre Bolivia tiene una guía para propietarios sobre los documentos para vender un inmueble. Compártela por WhatsApp antes de la reunión y ganas tiempo.',
          button: 'Ver la guía de documentos',
          href: 'https://casa-libre.com.bo/guias/documentos-para-vender-un-inmueble',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Se puede vender una casa sin folio real?',
      a: 'En la práctica es muy difícil: sin folio real el comprador no puede inscribir su compra en Derechos Reales y no queda protegido. Primero hay que regularizar el derecho propietario con un abogado.',
    },
    {
      q: '¿Qué significa folio real actualizado?',
      a: 'Es una copia reciente del folio real emitida por Derechos Reales. Se pide reciente porque muestra la situación del inmueble a la fecha de emisión.',
    },
    {
      q: '¿Cuántas gestiones del impuesto a la propiedad hay que tener pagadas?',
      a: 'Lo normal es que el notario y el comprador pidan ver las gestiones pagadas hasta la última vencida. El número exacto que se revisa depende del municipio; confírmalo antes de firmar.',
    },
    {
      q: '¿Puede vender un propietario que vive en el exterior?',
      a: 'Sí, mediante un apoderado con un poder notarial suficiente para vender. El poder se otorga ante el consulado o se legaliza según el país donde vive el propietario.',
    },
    {
      q: '¿Quién paga los gastos de la venta?',
      a: 'Se acuerda entre comprador y vendedor. Déjalo escrito en el documento de reserva para que no haya sorpresas al firmar.',
    },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo: folio real, documentos para vender una casa en bolivia', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=folio+real', date: '2026-11-13', note: 'folio real actualizado, folio real y alodial es lo mismo, folio real de una casa bolivia.' },
    { label: 'Casa-Libre Bolivia owner guides (verified paths)', url: 'https://casa-libre.com.bo/guias/documentos-para-vender-un-inmueble', date: '2026-11-13', note: 'Both /guias/documentos-para-vender-un-inmueble and /guias/impuestos-y-gastos-al-vender answered 200.' },
    { label: 'Derechos Reales, certificado alodial, municipal transfer tax', url: 'about:blank', date: '2026-11-13', note: 'General knowledge; to be confirmed by a Bolivian notario or lawyer.' },
  ],
  closing: {
    title: 'Papeles listos, inmueble publicado',
    text: 'Publicar en Casa-Libre Bolivia es gratis y las consultas te llegan por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['como-cerrar-una-venta-inmobiliaria', 'anticretico-para-agentes-inmobiliarios', 'como-vender-terrenos-en-santa-cruz', 'autorizacion-de-venta-inmobiliaria'],
};
