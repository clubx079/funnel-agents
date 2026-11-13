export default {
  slug: 'analisis-comparativo-de-mercado-inmobiliario',
  title: 'Análisis comparativo de mercado inmobiliario: guía ACM',
  h1: 'Análisis comparativo de mercado inmobiliario (ACM)',
  description:
    'Qué es un ACM inmobiliario y cómo hacerlo paso a paso en Paraguay con avisos reales: plantilla para completar, ejemplo con números y cómo presentarlo al propietario.',
  navLabel: 'ACM inmobiliario',
  blurb: 'Cómo hacer un análisis comparativo de mercado paso a paso, con plantilla, ejemplo con números y presentación al propietario.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'none',
  answer:
    'Un ACM inmobiliario (análisis comparativo de mercado) es el informe con el que un agente estima el precio de una propiedad comparándola con 4 a 8 propiedades parecidas de la misma zona, ajustando las diferencias y llegando a un rango de precio. En Paraguay se arma con avisos reales, en guaraníes y dólares, y se presenta al propietario antes de publicar. Los comparables se pueden buscar gratis en Casa-Libre por ciudad, tipo y mapa.',
  summary: [
    'Un ACM tiene cinco partes: la propiedad a valorar, los comparables, los ajustes, el rango y la recomendación de precio.',
    'Comparables: de 4 a 8, misma ciudad, mismo tipo, superficie parecida, con enlace al aviso.',
    'Se compara por precio por m², no por precio total, y se ajusta por estado, ubicación y extras.',
    'Mediana del precio pedido de departamentos en venta en Asunción: USD 135.000, según Casa-Libre al 12 de noviembre de 2026.',
  ],
  cta: {
    title: 'Buscá tus comparables en Casa-Libre',
    text: 'Filtrá por ciudad, tipo y operación, mirá el mapa y publicá gratis las propiedades que captás con tu cuenta de inmobiliaria.',
    button: 'Crear cuenta de inmobiliaria en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'que-es-un-acm',
      h2: '¿Qué es un ACM inmobiliario?',
      blocks: [
        {
          t: 'p',
          html: 'Es un análisis que estima el precio de publicación de una propiedad a partir de propiedades parecidas que están en venta, o que se vendieron, en la misma zona. No es una tasación formal: es el respaldo de tu recomendación de precio.',
        },
        {
          t: 'table',
          caption: 'Las cinco partes de un ACM',
          head: ['Parte', 'Qué contiene'],
          rows: [
            ['Propiedad a valorar', 'Ubicación, tipo, m² de terreno y construidos, dormitorios, baños, estado, extras.'],
            ['Comparables', 'De 4 a 8 propiedades parecidas, con precio, m², características y enlace al aviso.'],
            ['Ajustes', 'Las diferencias de cada comparable con la propiedad a valorar, hacia arriba o hacia abajo.'],
            ['Rango', 'Precio mínimo y máximo, por m² y total, en guaraníes y en dólares.'],
            ['Recomendación', 'Precio de publicación sugerido y cuándo revisarlo.'],
          ],
          note: 'Estructura de trabajo para agentes; no es un formato oficial.',
        },
        {
          t: 'p',
          html: 'La diferencia con una tasación profesional se explica en <a href="/como-tasar-una-propiedad/">cómo tasar una propiedad</a>. Los comparables los encontrás en el <a href="https://casa-libre.com.py/propiedades">buscador de propiedades de Casa-Libre</a>, con filtros y mapa.',
        },
      ],
    },
    {
      id: 'paso-a-paso',
      h2: 'Cómo hacer un análisis comparativo de mercado inmobiliario paso a paso',
      blocks: [
        {
          t: 'p',
          html: 'Siete pasos, de la visita a la recomendación. Con práctica, un ACM de una casa o un departamento lleva menos de una hora.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Ficha de la propiedad', html: 'En la visita, anotá m², dormitorios, baños, estado, cochera y extras, y sacá fotos.' },
            { title: 'Búsqueda de comparables', html: 'Misma ciudad, tipo y operación. Por ejemplo, las casas en venta en San Lorenzo en <a href="https://casa-libre.com.py/venta/casas/san-lorenzo">Casa-Libre</a>.' },
            { title: 'Depuración', html: 'Descartá avisos sin precio, sin superficie, muy distintos o repetidos (la misma propiedad publicada por dos inmobiliarias).' },
            { title: 'Precio por m²', html: 'Dividí el precio de cada comparable por su superficie construida; en terrenos, por la superficie del terreno.' },
            { title: 'Ajustes', html: 'Subí o bajá el m² de cada comparable según sus diferencias: estado, cochera, ubicación, extras.' },
            { title: 'Rango', html: 'El m² ajustado más bajo y el más alto, multiplicados por la superficie de la propiedad.' },
            { title: 'Recomendación', html: 'Un precio de publicación dentro del rango y una fecha para revisarlo con las consultas recibidas.' },
          ],
        },
        {
          t: 'p',
          html: 'Si valorás un terreno, usá la búsqueda filtrada: terrenos en venta en San Lorenzo en Casa-Libre.',
        },
      ],
    },
    {
      id: 'plantilla-acm',
      h2: 'Plantilla de ACM para completar',
      blocks: [
        {
          t: 'p',
          html: 'Copiá estas columnas en una planilla de cálculo y completá una fila por comparable. La última columna, el enlace al aviso, es la que más confianza da al propietario.',
        },
        {
          t: 'table',
          caption: 'Plantilla de comparables (una fila por propiedad)',
          head: ['Comparable', 'Barrio', 'Precio pedido', 'm²', 'Precio por m²', 'Diferencias', 'Ajuste', 'm² ajustado', 'Enlace'],
          rows: [
            ['1', '…', 'USD …', '…', 'USD …', '…', '+ / − …%', 'USD …', 'Aviso'],
            ['2', '…', 'USD …', '…', 'USD …', '…', '+ / − …%', 'USD …', 'Aviso'],
            ['3', '…', 'USD …', '…', 'USD …', '…', '+ / − …%', 'USD …', 'Aviso'],
            ['4', '…', 'USD …', '…', 'USD …', '…', '+ / − …%', 'USD …', 'Aviso'],
          ],
          note: 'Agregá al pie: promedio del m² ajustado, rango mínimo y máximo, y tipo de cambio usado.',
        },
        {
          t: 'p',
          html: 'Guardá los enlaces de los avisos en la planilla para mostrarlos desde el celular en la reunión. Desde la app de Casa-Libre para iPhone y Android los abrís en segundos. Para guardar también tus contactos, mirá <a href="/crm-inmobiliario-gratis/">CRM inmobiliario gratis</a>.',
        },
      ],
    },
    {
      id: 'ejemplo-acm',
      h2: 'Ejemplo de ACM con números',
      blocks: [
        {
          t: 'p',
          html: 'Un departamento de 70 m² y 2 dormitorios en Asunción, con cochera, comparado con cuatro avisos parecidos. Los ajustes del ejemplo son supuestos para mostrar la cuenta.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: departamento de 70 m² en Asunción',
          html: 'Datos hipotéticos. Promedio del m² ajustado: (1.553 + 1.597 + 1.455 + 1.565) ÷ 4 = USD 1.543. Valor central: 70 × 1.543 = USD 108.010, redondeado USD 108.000 (Gs. 788.400.000 aprox., a Gs. 7.300). Rango: 70 × 1.455 = USD 101.850 y 70 × 1.597 = USD 111.790, redondeado USD 102.000 a 112.000 (Gs. 744.600.000 a 817.600.000 aprox.).',
          rows: [
            ['Comparable', 'Cálculo'],
            ['A: 65 m², USD 98.000, sin cochera', '98.000 ÷ 65 = 1.508; +3% por cochera = USD 1.553/m²'],
            ['B: 72 m², USD 115.000, igual', '115.000 ÷ 72 = USD 1.597/m², sin ajuste'],
            ['C: 80 m², USD 120.000, recién refaccionado', '120.000 ÷ 80 = 1.500; −3% = USD 1.455/m²'],
            ['D: 68 m², USD 112.000, con piscina', '112.000 ÷ 68 = 1.647; −5% = USD 1.565/m²'],
          ],
        },
        {
          t: 'p',
          html: 'Como control, mirá dónde cae el resultado frente al mercado: la mediana del precio pedido de departamentos en venta en Asunción es USD 135.000 y la mitad central va de USD 96.000 a 218.000, según Casa-Libre al 12 de noviembre de 2026. Podés revisar los departamentos en venta en Asunción en Casa-Libre.',
        },
      ],
    },
    {
      id: 'donde-buscar-comparables',
      h2: '¿Dónde buscar comparables en Paraguay?',
      blocks: [
        {
          t: 'p',
          html: 'En los avisos publicados de tu zona, en tus propias operaciones cerradas y en lo que te cuentan colegas. Los avisos dan precios pedidos; las operaciones cerradas, precios reales.',
        },
        {
          t: 'ul',
          items: [
            'Avisos de un portal con filtros por ciudad, tipo y mapa, como los dúplex en venta en Luque en Casa-Libre.',
            'Tus cierres y los de tu inmobiliaria: precio final, plazo y descuento sobre el precio pedido.',
            'Colegas con los que compartís operaciones. Cómo trabajar con ellos está en <a href="/compartir-comision-inmobiliaria/">compartir comisión inmobiliaria</a>.',
          ],
        },
        {
          t: 'casalibre',
          title: 'Inmobiliarias, agentes y propietarios en el mismo mapa',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
          button: 'Ver la cuenta para inmobiliarias en Casa-Libre',
          href: 'https://casa-libre.com.py/empresas',
        },
      ],
    },
    {
      id: 'presentar-el-acm',
      h2: '¿Cómo presentar el ACM al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'En una o dos hojas: arriba el rango y tu recomendación, abajo los comparables con foto y enlace. Presentalo en persona y dejale una copia por WhatsApp.',
        },
        {
          t: 'ul',
          items: [
            'Empezá por los comparables, no por tu número.',
            'Explicá cada ajuste en una frase.',
            'Aclarale que son precios pedidos, no precios de cierre.',
            'Proponé una fecha para revisar el precio con las consultas de las primeras semanas.',
          ],
        },
        {
          t: 'p',
          html: 'Para que el propietario lo lea con calma, sumale la guía de Casa-Libre sobre cuánto vale una propiedad. Qué decirle en esa reunión está en <a href="/que-decirle-a-un-propietario-para-captar/">qué decirle a un propietario para captar</a>.',
        },
      ],
    },
    {
      id: 'errores-en-un-acm',
      h2: 'Errores comunes en un ACM',
      blocks: [
        {
          t: 'p',
          html: 'El más común es comparar con propiedades que no se parecen: otra ciudad, otro tipo u otra superficie. El segundo es tratar el precio pedido como si fuera el precio de cierre.',
        },
        {
          t: 'ul',
          items: [
            'Usar menos de cuatro comparables.',
            'Contar dos veces la misma propiedad publicada por dos inmobiliarias.',
            'No actualizar el ACM cuando pasan semanas sin consultas.',
          ],
        },
        {
          t: 'p',
          html: 'Con el precio acordado, el paso siguiente es publicar la propiedad gratis en <a href="https://casa-libre.com.py/publicar">Casa-Libre</a> y medir las consultas.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué significa ACM en el rubro inmobiliario?',
      a: 'Análisis comparativo de mercado: un informe que estima el precio de una propiedad comparándola con otras parecidas de la misma zona. Lo usan agentes e inmobiliarias para recomendar un precio de publicación.',
    },
    {
      q: '¿Cuántos comparables necesita un ACM?',
      a: 'De 4 a 8. Con menos, un aviso con precio fuera de lugar distorsiona el resultado; con muchos más, empezás a comparar propiedades que no se parecen.',
    },
    {
      q: '¿Hay una plantilla de análisis comparativo de mercado gratis?',
      a: 'Sí: las columnas de la plantilla de esta guía se copian en cualquier planilla de cálculo gratuita. Completá una fila por comparable y agregá al pie el promedio y el rango.',
    },
    {
      q: '¿El ACM es lo mismo que una tasación?',
      a: 'No. El ACM es una estimación del agente para fijar un precio de publicación; la tasación es un informe pago que firma un tasador profesional.',
    },
    {
      q: '¿Cada cuánto conviene actualizar un ACM?',
      a: 'Cada vez que cambian los comparables de la zona y siempre que la propiedad pase varias semanas con pocas consultas. Revisá los avisos nuevos de tu zona en el listado de propiedades en venta de Casa-Libre.',
    },
  ],
  internalSources: [
    {
      label: 'Casa-Libre: snapshot de propiedades publicadas en Paraguay (content/data/py-market.json)',
      url: 'https://casa-libre.com.py/venta/departamentos/asuncion',
      date: '2026-11-12',
      note: 'Mediana y rango del precio pedido de departamentos en venta en Asunción; Gs. 7.300 por dólar.',
    },
    {
      label: 'Google: sugerencias de búsqueda para "acm inmobiliario" y "analisis comparativo de mercado inmobiliario" (Paraguay)',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=acm%20inmobiliario',
      date: '2026-11-12',
      note: 'Variantes: acm agente inmobiliario, acm rubro inmobiliario, como hacer un analisis comparativo de mercado inmobiliario, plantilla en planilla gratis.',
    },
  ],
  closing: {
    title: 'Del ACM al aviso publicado',
    text: 'Publicá gratis en Casa-Libre la propiedad que valoraste y atendé las consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['como-tasar-una-propiedad', 'como-negociar-el-precio-de-una-propiedad', 'farming-inmobiliario', 'mercado-inmobiliario-paraguay'],
};
