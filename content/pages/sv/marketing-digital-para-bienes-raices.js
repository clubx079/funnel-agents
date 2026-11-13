export default {
  slug: 'marketing-digital-para-bienes-raices',
  equivalent: 'marketing-inmobiliario-digital',
  group: 'Marketing inmobiliario',
  order: 10,
  title: 'Marketing digital para bienes raíces: guía práctica',
  h1: 'Marketing digital para bienes raíces en El Salvador',
  description:
    'Marketing digital para agentes de bienes raíces en El Salvador: el embudo, anuncios, WhatsApp, redes sociales, contenido para la diáspora y qué medir.',
  navLabel: 'Marketing digital',
  blurb: 'Un embudo de marketing digital simple para agentes de bienes raíces en El Salvador, con lo que es gratis y lo que conviene medir.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'Practice page with no legal facts. A native Salvadoran reader should check tone and examples (zones, "colonia", "residencial") and that no network, app or tool is named. Confirm the paid-advertising paragraph makes no claim about costs or results.',
  answer:
    'El marketing digital para bienes raíces en El Salvador es lograr que más personas vean sus propiedades en internet y le escriban. Funciona como un embudo: anuncios completos que atraen, redes sociales que amplían el alcance, WhatsApp que convierte consultas en visitas y contenido que genera confianza, también con la diáspora. La base es gratuita: publicar cada propiedad con buenas fotos y precio en dólares, por ejemplo en Casa-Libre.',
  summary: [
    'El embudo tiene cuatro etapas: atraer, interesar, conversar y cerrar.',
    'La base es gratuita: anuncios completos, enlace compartible, WhatsApp y contenido útil.',
    'Una parte del público está en el exterior: piense en su horario y en lo que necesita ver.',
    'Publicar en Casa-Libre es gratis y las consultas llegan por WhatsApp.',
  ],
  cta: {
    title: 'La base de su marketing, gratis',
    text: 'Publique su cartera en Casa-Libre El Salvador y comparta cada anuncio con un enlace.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'embudo',
      h2: '¿Cómo es el embudo de marketing digital de un agente?',
      blocks: [
        {
          t: 'p',
          html: 'Es el camino del cliente desde que ve una propiedad hasta que firma. Cada etapa tiene un canal y una métrica.',
        },
        {
          t: 'table',
          caption: 'Embudo de marketing digital para bienes raíces',
          head: ['Etapa', 'Objetivo', 'Canal', 'Qué medir'],
          rows: [
            ['Atraer', 'Que vean la propiedad', 'Portales, redes sociales, rótulo', 'Vistas del anuncio'],
            ['Interesar', 'Que pidan información', 'Anuncio completo, video corto', 'Consultas'],
            ['Conversar', 'Que agenden visita', 'WhatsApp', 'Visitas'],
            ['Cerrar', 'Que hagan oferta', 'Visita, seguimiento', 'Ofertas y promesas firmadas'],
          ],
          note: 'Marco de trabajo, no una estadística.',
        },
      ],
    },
    {
      id: 'base-gratuita',
      h2: 'La base gratuita: anuncios completos y un enlace',
      blocks: [
        {
          t: 'p',
          html: 'Antes de pagar publicidad, asegúrese de que cada propiedad tiene un anuncio completo y un enlace que pueda compartir. Sin eso, la publicidad lleva gente a una ficha que no convence.',
        },
        {
          t: 'ul',
          items: [
            'Fotos con luz natural y la mejor primero.',
            'Precio en dólares y datos clave.',
            'Ubicación en el mapa.',
            'Un WhatsApp que responde en minutos.',
          ],
        },
        {
          t: 'p',
          html: 'Publique la cartera en <a href="https://sv.casa-libre.com/publicar">Casa-Libre</a>, gratis, y use ese enlace en todos sus canales. Para el texto, siga <a href="/el-salvador/como-describir-una-casa-en-venta/">cómo describir una casa en venta</a>.',
        },
      ],
    },
    {
      id: 'redes-sociales',
      h2: 'Redes sociales: qué publicar',
      blocks: [
        {
          t: 'p',
          html: 'En redes sociales funciona lo que es útil o se ve bien en el celular. Alterne propiedades con contenido que muestre que usted conoce el mercado.',
        },
        {
          t: 'table',
          caption: 'Ideas de publicación por tipo',
          head: ['Tipo', 'Ejemplo'],
          rows: [
            ['Propiedad', 'Video corto de recorrido de una casa en Santa Tecla'],
            ['Zona', 'Qué hay cerca de una colonia: colegios, supermercados, accesos'],
            ['Consejo', 'Qué papeles pedir antes de comprar'],
            ['Proceso', 'Cómo es comprar desde Estados Unidos, paso a paso'],
            ['Resultado', 'Casa entregada, con permiso del cliente'],
          ],
        },
      ],
    },
    {
      id: 'diaspora',
      h2: 'Marketing para salvadoreños en el exterior',
      blocks: [
        {
          t: 'p',
          html: 'Una parte de sus clientes ve sus publicaciones desde afuera. Necesitan más información y más confianza, porque no pueden visitar fácilmente.',
        },
        {
          t: 'ul',
          items: [
            'Publique en horarios en que ellos están despiertos.',
            'Muestre videos de recorridos completos, incluyendo la calle.',
            'Explique en publicaciones cómo funciona la compra a distancia.',
          ],
        },
        {
          t: 'p',
          html: 'Más en <a href="/el-salvador/vender-propiedades-a-salvadorenos-en-el-exterior/">vender propiedades a salvadoreños en el exterior</a>.',
        },
      ],
    },
    {
      id: 'publicidad-pagada',
      h2: '¿Conviene pagar publicidad?',
      blocks: [
        {
          t: 'p',
          html: 'Puede servir para propiedades concretas o para darse a conocer en una zona, pero solo cuando la base gratuita funciona. Empiece con montos pequeños y mida consultas y visitas, no solo vistas.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: cálculo del costo por visita',
          html: 'Números hipotéticos. No son costos de mercado.',
          rows: [
            ['Concepto', 'Monto'],
            ['Inversión en publicidad del mes', 'US$ 100'],
            ['Consultas recibidas', '25'],
            ['Visitas realizadas', '4'],
            ['Costo por visita (100 ÷ 4)', 'US$ 25'],
          ],
        },
      ],
    },
    {
      id: 'medir',
      h2: 'Qué medir cada mes',
      blocks: [
        {
          t: 'p',
          html: 'Cuatro números bastan para saber si su marketing funciona. Anótelos el último día de cada mes.',
        },
        {
          t: 'ol',
          items: [
            'Consultas por canal.',
            'Visitas.',
            'Ofertas.',
            'Captaciones nuevas.',
          ],
        },
        {
          t: 'p',
          html: 'Para responder bien cada consulta, vea <a href="/el-salvador/whatsapp-para-bienes-raices/">WhatsApp para bienes raíces</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es el marketing digital en bienes raíces?',
      a: 'Es el conjunto de acciones en internet para que más personas vean sus propiedades y le escriban: anuncios, redes sociales, WhatsApp y contenido útil.',
    },
    {
      q: '¿Se puede hacer marketing digital gratis?',
      a: 'Sí, la base es gratuita: anuncios completos, publicación en portales gratuitos, redes sociales y WhatsApp. La publicidad pagada es un complemento.',
    },
    {
      q: '¿Qué publicar en redes sociales como agente?',
      a: 'Propiedades con video corto, información útil de zonas, consejos sobre papeles y procesos, y entregas con permiso del cliente.',
    },
    {
      q: '¿Dónde publicar mis propiedades gratis?',
      a: 'En Casa-Libre puede publicar gratis toda su cartera, con consultas por WhatsApp y sin comisión sobre la venta.',
    },
  ],
  internalSources: [
    { label: 'Autocomplete (gl=sv) "marketing para bienes raices"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=sv&q=marketing+para+bienes+raices', date: '2026-11-13', note: 'Variants: marketing digital para bienes raices, estrategias de marketing.' },
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Path used: /publicar.' },
  ],
  closing: {
    title: 'Empiece por lo gratis',
    text: 'Publique su cartera en Casa-Libre El Salvador y reciba consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['fotos-para-bienes-raices', 'como-describir-una-casa-en-venta', 'whatsapp-para-bienes-raices', 'portales-inmobiliarios-el-salvador'],
};
