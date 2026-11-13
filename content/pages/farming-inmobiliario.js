export default {
  slug: 'farming-inmobiliario',
  title: 'Farming inmobiliario: cómo trabajar una zona en Paraguay',
  h1: 'Farming inmobiliario: cómo trabajar una zona',
  description:
    'Qué es el farming inmobiliario y cómo hacerlo en Paraguay: elegir la zona con datos por ciudad, rutina mensual, informe de precios para vecinos y qué medir.',
  navLabel: 'Farming inmobiliario',
  blurb:
    'Elegir una zona con datos, trabajarla cada mes con una rutina fija y darle a los vecinos un informe de precios útil.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'none',
  answer:
    'El farming inmobiliario, o farming geográfico, es elegir una zona y trabajarla todos los meses hasta que los propietarios te reconozcan como el agente de ese barrio. En Paraguay se hace con recorridos, contacto con comercios y edificios, un informe de precios para los vecinos y presencia en línea. Para elegir la zona y armar el informe, usá las propiedades publicadas en Casa-Libre por ciudad y en el mapa.',
  summary: [
    'Farming es constancia en una zona: los mismos barrios, cada mes, durante al menos un año.',
    'Según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026, Asunción tenía 234 en venta y Luque 177.',
    'Lo que más valoran los vecinos es un informe de precios pedidos de su zona, simple y honesto.',
    'Medí actividad y resultados por mes: contactos nuevos, estimaciones entregadas y autorizaciones firmadas.',
  ],
  cta: {
    title: 'Sé el agente de tu zona',
    text: 'Publicá gratis en Casa-Libre cada propiedad de tu zona y recibí las consultas por WhatsApp.',
    button: 'Crear cuenta gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'que-es-el-farming',
      h2: '¿Qué es el farming inmobiliario?',
      blocks: [
        {
          t: 'p',
          html: 'Es trabajar siempre la misma zona, de forma planificada, para que cuando alguien piense vender o alquilar ahí, piense en vos. El nombre viene de "cultivar": se siembra todos los meses y se cosecha más adelante.',
        },
        {
          t: 'p',
          html: 'Farming geográfico es lo mismo con el foco en un territorio (unas manzanas, un barrio, un edificio). Empieza por saber qué hay en venta y en alquiler en esa zona: buscala en el mapa de propiedades de <a href="https://casa-libre.com.py/propiedades">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'elegir-la-zona',
      h2: 'Cómo elegir tu zona de farming con datos',
      blocks: [
        {
          t: 'p',
          html: 'Elegí una zona con oferta suficiente para tener comparables, que puedas recorrer cada semana y cuyos precios conozcas. La tabla muestra cuánta oferta había por ciudad.',
        },
        {
          t: 'table',
          caption: 'Propiedades publicadas por ciudad y mediana de casas en venta',
          head: ['Ciudad', 'En venta', 'En alquiler', 'Mediana casa en venta'],
          rows: [
            ['Asunción', '234', '239', 'USD 275.000 (aprox. Gs. 2.007.500.000)'],
            ['Luque', '177', '68', 'USD 89.000 (aprox. Gs. 649.700.000)'],
            ['Ciudad del Este', '104', '24', 'USD 93.000 (aprox. Gs. 678.900.000)'],
            ['Encarnación', '83', '26', 'USD 169.000 (aprox. Gs. 1.233.700.000)'],
            ['San Lorenzo', '82', '26', 'USD 79.000 (aprox. Gs. 576.700.000)'],
            ['San Bernardino', '60', '13', 'USD 250.000 (aprox. Gs. 1.825.000.000)'],
            ['Capiatá', '52', '2', 'USD 56.000 (aprox. Gs. 408.800.000)'],
            ['Lambaré', '47', '20', 'USD 184.000 (aprox. Gs. 1.343.200.000)'],
            ['Fernando de la Mora', '47', '37', 'USD 149.000 (aprox. Gs. 1.087.700.000)'],
          ],
          note: 'Según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026 (precios pedidos, no precios de cierre). Guaraníes a Gs. 7.300 por dólar, aproximados.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Muchas propiedades en venta:</strong> más comparables, pero también más agentes trabajando ahí.',
            '<strong>Poca oferta en alquiler:</strong> en Capiatá había solo 2 avisos de alquiler; una zona así se trabaja con foco en ventas. Mirá las <a href="https://casa-libre.com.py/propiedades-en/capiata">propiedades publicadas en Capiatá en Casa-Libre</a>.',
            '<strong>Precio medio:</strong> elegí un rango de precios que entiendas y en el que tengas clientes.',
          ],
        },
        {
          t: 'p',
          html: 'Dentro de la ciudad, achicá a unas pocas manzanas o barrios. Revisá las propiedades publicadas en Lambaré en Casa-Libre o las de tu ciudad, y leé el análisis de <a href="/mercado-inmobiliario-en-luque/">mercado inmobiliario en Luque</a> como ejemplo de lectura de datos.',
        },
      ],
    },
    {
      id: 'rutina-mensual',
      h2: 'Cómo hacer farming inmobiliario: la rutina mensual',
      blocks: [
        {
          t: 'p',
          html: 'Una rutina de cuatro semanas que se repite todos los meses. Lo importante no es la intensidad, es no cortar.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Semana 1: datos', html: 'Revisá los avisos nuevos de tu zona, anotá precios y armá el informe del mes. Una búsqueda filtrada te ahorra tiempo: casas en venta en Lambaré en Casa-Libre.' },
            { title: 'Semana 2: recorrido', html: 'Caminá la zona, anotá carteles nuevos y saludá a comerciantes, encargados de edificios y porteros.' },
            { title: 'Semana 3: entrega', html: 'Repartí o mandá el informe de precios a tu lista de vecinos y propietarios.' },
            { title: 'Semana 4: seguimiento', html: 'Llamá a quienes respondieron, agendá visitas y entregá estimaciones de precio.' },
          ],
        },
        {
          t: 'p',
          html: 'El método general de captación, más allá de la zona, está en <a href="/como-captar-propiedades/">cómo captar propiedades</a>.',
        },
      ],
    },
    {
      id: 'informe-de-precios',
      h2: 'Qué darle a los vecinos: el informe de precios de la zona',
      blocks: [
        {
          t: 'p',
          html: 'Un informe de una página con los precios pedidos de la zona, explicados con honestidad. Es útil para el vecino, no te compromete y te pone como el agente que sabe de ese barrio.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: informe de casas en venta en Luque',
          html: 'Con datos reales de las casas en venta en Luque publicadas en Casa-Libre al 12 de noviembre de 2026 (67 con precio; precios pedidos, no de cierre). La mitad de los avisos estaba entre USD 59.000 y 151.000. Guaraníes a Gs. 7.300 por dólar: 89.000 × 7.300 = Gs. 649.700.000.',
          rows: [
            ['Dato', 'Monto'],
            ['Cuartil inferior', 'USD 59.000 (aprox. Gs. 430.700.000)'],
            ['Mediana', 'USD 89.000 (aprox. Gs. 649.700.000)'],
            ['Cuartil superior', 'USD 151.000 (aprox. Gs. 1.102.300.000)'],
            ['Dormitorios (mediana)', '2'],
          ],
        },
        {
          t: 'p',
          html: 'Agregá dos o tres avisos de ejemplo de las casas en venta en Luque en Casa-Libre y una frase clara: "son precios pedidos, el valor final se define en la negociación". Para quien quiera saber más, sumá la guía de Casa-Libre sobre cuánto vale una propiedad.',
        },
      ],
    },
    {
      id: 'presencia-en-la-zona',
      h2: 'Cómo estar presente en la zona, en persona y en línea',
      blocks: [
        {
          t: 'p',
          html: 'En persona, con recorridos y una cara conocida en comercios y edificios. En línea, con cada propiedad de la zona publicada y compartida, y con contenido sobre el barrio en tus redes sociales.',
        },
        {
          t: 'ul',
          items: [
            'Cartel con tu WhatsApp en cada propiedad que captás en la zona.',
            'Publicaciones sobre el barrio en redes sociales y en grupos de vecinos, con permiso del administrador.',
            'Cada aviso de la zona compartido por WhatsApp con tu lista, también los alquileres, como los departamentos en alquiler en Fernando de la Mora en Casa-Libre.',
          ],
        },
        {
          t: 'p',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
        },
        {
          t: 'casalibre',
          title: 'Publicá desde la zona',
          html: 'Con las apps para iPhone y Android cargás el aviso en la misma visita y lo compartís por WhatsApp antes de volver a la oficina.',
          button: 'Descargar la app de Casa-Libre',
          href: 'https://casa-libre.com.py/descargar',
        },
        {
          t: 'p',
          html: 'Ideas para publicar sobre tu zona en <a href="/ideas-de-contenido-para-inmobiliarias/">ideas de contenido para inmobiliarias</a>.',
        },
      ],
    },
    {
      id: 'medir-el-farming',
      h2: 'Cómo medir si el farming funciona',
      blocks: [
        {
          t: 'p',
          html: 'Medí cada mes cinco números y compará trimestre contra trimestre. El farming tarda en dar resultados; si después de varios meses los números de actividad suben pero no hay captaciones, revisá la zona o el mensaje.',
        },
        {
          t: 'ul',
          items: [
            'Contactos nuevos de la zona.',
            'Conversaciones con propietarios.',
            'Estimaciones de precio entregadas.',
            'Autorizaciones firmadas.',
            'Avisos activos de la zona publicados por vos.',
          ],
        },
        {
          t: 'p',
          html: 'Anotalos en una planilla o en un CRM; la guía de <a href="/crm-inmobiliario-gratis/">CRM inmobiliario gratis</a> propone las columnas. Para tus avisos, usá la cuenta para inmobiliarias de <a href="https://casa-libre.com.py/empresas">Casa-Libre</a>: las consultas llegan por WhatsApp y los contactos quedan en tu inmobiliaria.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es el farming geográfico inmobiliario?',
      a: 'Es elegir un territorio concreto (unas manzanas, un barrio o un edificio) y trabajarlo de forma constante para ser el agente de referencia ahí.',
    },
    {
      q: '¿Cuánto tarda el farming inmobiliario en dar resultados?',
      a: 'No hay datos publicados en Paraguay que lo midan. Es un trabajo de largo plazo: pensalo en trimestres, no en semanas, y medí la actividad desde el primer mes.',
    },
    {
      q: '¿Qué tamaño debe tener mi zona?',
      a: 'La que puedas recorrer completa en una o dos jornadas por mes. Si no llegás a todos los propietarios con tu informe, la zona es demasiado grande.',
    },
    {
      q: '¿De dónde saco los precios para el informe de la zona?',
      a: 'De los avisos publicados en tu zona, por ejemplo en Casa-Libre, filtrando por ciudad y tipo de propiedad. Aclará siempre que son precios pedidos, no de cierre.',
    },
  ],
  internalSources: [
    {
      label: 'Casa-Libre: datos de propiedades publicadas en Paraguay (content/data/py-market.json)',
      url: 'https://casa-libre.com.py/propiedades',
      date: '2026-11-12',
      note: 'Conteos en venta y en alquiler por ciudad; medianas de casas en venta; cuartiles de Luque (59.000 / 89.000 / 151.000, 67 con precio, mediana 2 dormitorios).',
    },
    {
      label: 'Google: sugerencias para "farming inmobiliario" (Paraguay)',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=farming%20inmobiliario',
      date: '2026-11-12',
      note: 'Variantes: farming geografico inmobiliario; como hacer farming inmobiliario.',
    },
  ],
  closing: {
    title: 'Cada propiedad de tu zona, publicada',
    text: 'Publicá gratis en Casa-Libre y compartí el aviso con tus vecinos por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['mercado-inmobiliario-paraguay', 'ideas-de-contenido-para-inmobiliarias', 'crm-inmobiliario-gratis', 'prospeccion-inmobiliaria'],
};
