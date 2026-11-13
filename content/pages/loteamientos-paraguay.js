export default {
  slug: 'loteamientos-paraguay',
  title: 'Loteamientos en Paraguay: cómo vender lotes de terreno',
  h1: 'Loteamientos en Paraguay: cómo vender lotes',
  description:
    'Qué es un loteamiento en Paraguay, qué aprobaciones revisar antes de venderlo, cómo armar la lista de precios y cómo publicar cada lote de terreno por internet.',
  navLabel: 'Loteamientos',
  blurb: 'Qué es un loteamiento, qué revisar antes de venderlo y cómo publicar y vender cada lote de terreno en Paraguay.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',
  reviewNote:
    'A Paraguayan escribano must check the section "ley-de-loteamientos": the research notes only show that a loteamientos law exists and that Catastro publishes it as Ley N° 1909; its current text, the municipal approval and the plan approval steps described here are general orientation and were not verified first-hand. Commission for developments has no published reference.',
  answer:
    'Un loteamiento es una fracción de tierra dividida en lotes de terreno con calles, aprobada por la municipalidad, que en Paraguay suele venderse en cuotas. Para venderlo, primero confirmá que el loteamiento y su plano estén aprobados, después armá un inventario con medidas y precio por lote, y publicá cada lote con su ubicación. Casa-Libre permite publicar gratis cada lote, con su punto en el mapa.',
  summary: [
    'Antes de vender, pedí la aprobación municipal del loteamiento y el plano aprobado; existe una ley específica de loteamientos.',
    'Un inventario por manzana y número de lote, con medidas, precio y estado, evita vender dos veces el mismo lote.',
    'Luque y Capiatá tienen 12 terrenos en venta cada una en Casa-Libre al 12 de noviembre de 2026, con medianas de USD 64 y USD 47 por m².',
    'Publicá cada lote como un aviso propio en Casa-Libre: el cliente busca por ciudad y en el mapa.',
  ],
  cta: {
    title: 'Publicá los lotes de tu loteamiento',
    text: 'Con la cuenta para inmobiliarias de Casa-Libre publicás cada lote gratis y las consultas llegan directo por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'que-es-un-loteamiento',
      h2: '¿Qué es un loteamiento en Paraguay?',
      blocks: [
        {
          t: 'p',
          html: 'Es una fracción grande dividida en lotes de terreno, con calles y manzanas, que se vende lote por lote. Es lo que la gente busca como "loteamientos en Luque" o "lotes a cuotas".',
        },
        {
          t: 'table',
          caption: 'Palabras que vas a usar al vender un loteamiento',
          head: ['Término', 'Qué significa en la práctica'],
          rows: [
            ['Fracción', 'El terreno grande original, con un solo título.'],
            ['Loteamiento', 'La división de la fracción en lotes, con calles y manzanas.'],
            ['Manzana y número de lote', 'Cómo se identifica cada lote en el plano.'],
            ['Plano aprobado', 'El plano del loteamiento aprobado por la municipalidad.'],
            ['Plan de cuotas', 'Entrega inicial y pagos mensuales; la escritura suele firmarse al terminar.'],
          ],
          note: 'Orientación general. El escribano confirma qué documento corresponde en cada caso.',
        },
        {
          t: 'p',
          html: 'Para ver cómo se ofrecen hoy, revisá los <a href="https://casa-libre.com.py/propiedades?op=venta&amp;type=terreno&amp;q=Luque">terrenos en venta en Luque en Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'ley-de-loteamientos',
      h2: 'Ley de loteamientos en Paraguay: qué revisar antes de vender',
      blocks: [
        {
          t: 'p',
          html: 'Paraguay tiene una ley específica de loteamientos, que Catastro publica como Ley N.º 1909. En la práctica, el loteamiento y su plano pasan por la aprobación de la municipalidad, y cada lote tiene que poder escriturarse a nombre de quien lo compra.',
        },
        {
          t: 'ul',
          items: [
            'Título de la fracción a nombre del loteador o de quien te encarga la venta.',
            'Resolución municipal de aprobación del loteamiento y plano aprobado.',
            'Que cada lote figure en el plano con su manzana, número y medidas.',
            'Si las calles, la luz y el agua ya existen o son una promesa con fecha.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Sin aprobaciones, no publiques',
          html: 'No ofrezcas lotes de un loteamiento que no puede mostrar sus aprobaciones: el problema lo hereda tu cliente. Información general. Consultá con un escribano o contador antes de tomar decisiones.',
        },
        {
          t: 'p',
          html: 'Para la lista de papeles del vendedor, usá la guía de Casa-Libre sobre documentos para vender un inmueble.',
        },
      ],
    },
    {
      id: 'como-vender-lotes',
      h2: 'Cómo vender lotes de terreno de un loteamiento',
      blocks: [
        {
          t: 'p',
          html: 'Un loteamiento se vende con orden: un inventario al día, una lista de precios clara y visitas al terreno. Sin inventario, dos agentes terminan ofreciendo el mismo lote.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Inventario', html: 'Una planilla con manzana, número, medidas, superficie, precio y estado (libre, reservado, vendido).' },
            { title: 'Lista de precios', html: 'Precio base por m² y ajustes: esquina, frente a la calle principal, cercanía a la ruta.' },
            { title: 'Plan de pagos', html: 'Contado y cuotas, con los números en el aviso. Los detalles están en la guía de <a href="/venta-de-terrenos-en-cuotas-paraguay/">venta de terrenos en cuotas</a>.' },
            { title: 'Terreno preparado', html: 'Pasto cortado, mojones visibles, cartel con número de lote y un WhatsApp que se atienda.' },
            { title: 'Visitas', html: 'Días y horarios fijos de visita, mejor de mañana y con el plano impreso.' },
          ],
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: lista de precios de tres lotes',
          html: 'Supuestos hipotéticos: lotes de 12 × 30 m (360 m²), precio base de Gs. 350.000 por m² y 10% más por esquina. Lote estándar: 360 × 350.000 = Gs. 126.000.000. Esquina: 126.000.000 × 1,10 = Gs. 138.600.000. Dólares a Gs. 7.300, aprox.',
          rows: [
            ['Lote', 'Precio de contado'],
            ['Manzana 1, lote 4 (estándar)', 'Gs. 126.000.000 (USD 17.260 aprox.)'],
            ['Manzana 1, lote 1 (esquina)', 'Gs. 138.600.000 (USD 18.986 aprox.)'],
            ['Manzana 2, lote 7 (estándar)', 'Gs. 126.000.000 (USD 17.260 aprox.)'],
          ],
        },
        {
          t: 'p',
          html: 'Cargá los lotes desde el terreno con la app de Casa-Libre para iPhone y Android, y dejá como borrador los que todavía no tienen fotos.',
        },
      ],
    },
    {
      id: 'marketing-de-loteamientos',
      h2: '¿Cómo hacer marketing de un loteamiento?',
      blocks: [
        {
          t: 'p',
          html: 'El cliente de un loteamiento quiere saber dónde queda, cuánto paga por mes y si va a poder escriturar. Todo tu marketing tiene que responder esas tres preguntas.',
        },
        {
          t: 'ul',
          items: [
            'Un mapa de acceso desde la ruta más cercana y el plano con los lotes libres marcados.',
            'Fotos de la calle de entrada, de los servicios y de los lotes con su cartel.',
            'Un video corto recorriendo el loteamiento, para compartir por WhatsApp.',
            'Avisos en redes sociales que lleven al aviso completo, no solo a un número.',
          ],
        },
        {
          t: 'casalibre',
          title: 'Una cuenta para todos los lotes',
          html: 'Con la cuenta para inmobiliarias de Casa-Libre cada lote es un aviso propio y las consultas llegan directo por WhatsApp a tu equipo. La insignia Verificado y el lugar destacado en la página de inicio son extras pagos opcionales.',
          button: 'Ver la cuenta para inmobiliarias en Casa-Libre',
          href: 'https://casa-libre.com.py/empresas',
        },
        {
          t: 'p',
          html: 'Ideas de piezas listas para usar en <a href="/publicidad-inmobiliaria-ejemplos/">publicidad inmobiliaria: ejemplos</a>.',
        },
      ],
    },
    {
      id: 'publicar-cada-lote',
      h2: '¿Conviene publicar cada lote por separado?',
      blocks: [
        {
          t: 'p',
          html: 'Sí. Un aviso por lote aparece cuando alguien filtra por ciudad, tamaño o precio, y muestra su ubicación exacta en el mapa de propiedades de Casa-Libre. Un aviso único con "varios lotes" esconde la información que el cliente necesita.',
        },
        {
          t: 'p',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
        },
        {
          t: 'p',
          html: 'Usá el mismo formato de título en todos: "Lote de 360 m² en Luque, manzana 1, en cuotas". Cuando se vende un lote, actualizá el inventario y retirá su aviso el mismo día. Para empezar, publicá el primer lote gratis en <a href="https://casa-libre.com.py/publicar">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'loteamientos-en-luque',
      h2: 'Loteamientos en Luque, Capiatá y Limpio',
      blocks: [
        {
          t: 'p',
          html: 'Luque es la primera ciudad que aparece en las búsquedas de terrenos y lotes a cuotas, seguida de otras del área metropolitana. En Casa-Libre, al 12 de noviembre de 2026, hay 12 terrenos en venta en Luque, 12 en Capiatá y 7 en Limpio (precios pedidos, no precios de cierre).',
        },
        {
          t: 'p',
          html: 'La mediana del m² pedido es de USD 64 en Luque (Gs. 467.200 aprox.) y USD 47 en Capiatá (Gs. 343.100 aprox.); en Limpio hay pocos avisos con superficie para calcularla. Compará tu lista de precios con los terrenos en venta en Capiatá en <a href="https://casa-libre.com.py/propiedades?op=venta&amp;type=terreno&amp;q=Capiat%C3%A1">Casa-Libre</a> y con los <a href="/mercado-inmobiliario-en-luque/">datos del mercado inmobiliario en Luque</a>.',
        },
        {
          t: 'p',
          html: 'Si trabajás la zona norte del área metropolitana, revisá también los terrenos en venta en Limpio en Casa-Libre.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Hay una ley de loteamientos en Paraguay?',
      a: 'Sí, existe una ley específica de loteamientos, que Catastro publica como Ley N.º 1909, y la municipalidad aprueba cada loteamiento y su plano. Para un caso concreto, consultá con un escribano: esta guía no reemplaza su revisión.',
    },
    {
      q: '¿Cómo saber si un loteamiento está aprobado?',
      a: 'Pedí al loteador la resolución municipal de aprobación y el plano aprobado, y que un escribano confirme que cada lote puede escriturarse. Si no te los muestra, no lo ofrezcas. Para dudas sobre cómo publicar, mirá las preguntas frecuentes de Casa-Libre.',
    },
    {
      q: '¿Cuánto cobra un agente por vender lotes de un loteamiento?',
      a: 'No hay una referencia publicada para loteamientos: se acuerda con el loteador, por ejemplo por lote vendido. Dejá por escrito el porcentaje, la base y cuándo se cobra si el lote se vende en cuotas.',
    },
    {
      q: '¿Cómo vender lotes rápido?',
      a: 'Con precios alineados a la zona, un plan de cuotas claro, cada lote publicado con fotos y mapa, y respuesta rápida por WhatsApp. Los consejos de <a href="/como-vender-terrenos-rapido/">cómo vender terrenos rápido</a> valen para cada lote.',
    },
  ],
  internalSources: [
    {
      label: 'Catastro: Ley 1909 de loteamientos (PDF), visto como resultado de búsqueda',
      url: 'https://www.catastro.gov.py/',
      date: '2026-11-12',
      note: 'URL exacta del PDF no registrada en las notas. Aparece en los resultados de "cómo vender un terreno en Paraguay" (paraguay_seller_buyer_keywords.md). Texto no leído: confirmar número, vigencia y requisitos.',
    },
    {
      label: 'Google: sugerencias de búsqueda para "loteamiento", "lotes a cuotas" y "loteamientos paraguay"',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=loteamiento',
      date: '2026-11-12',
      note: 'Variantes: paraguay, luque, limpio, ñemby, ciudad del este; "ley de loteamientos paraguay"; "como vender lotes de terreno".',
    },
    {
      label: 'Casa-Libre: snapshot de propiedades publicadas en Paraguay (content/data/py-market.json)',
      url: 'https://casa-libre.com.py/propiedades',
      date: '2026-11-12',
      note: 'Terrenos en venta por ciudad y mediana USD por m² en Luque y Capiatá; Gs. 7.300 por dólar.',
    },
  ],
  closing: {
    title: 'Cada lote, con su propio aviso',
    text: 'Publicá los lotes de tu loteamiento gratis en Casa-Libre y atendé las consultas por WhatsApp.',
    button: 'Abrir cuenta de inmobiliaria',
    href: 'https://casa-libre.com.py/empresas',
  },
  related: ['venta-de-terrenos-en-cuotas-paraguay', 'mercado-inmobiliario-en-capiata', 'publicidad-inmobiliaria-ejemplos', 'contrato-de-corretaje-inmobiliario'],
};
