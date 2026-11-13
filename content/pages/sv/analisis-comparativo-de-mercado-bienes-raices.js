export default {
  slug: 'analisis-comparativo-de-mercado-bienes-raices',
  equivalent: 'analisis-comparativo-de-mercado-inmobiliario',
  group: 'Precio y contratos',
  order: 30,
  title: 'Análisis comparativo de mercado en bienes raíces (ACM)',
  h1: 'Análisis comparativo de mercado en bienes raíces (ACM)',
  description:
    'Cómo hacer un análisis comparativo de mercado (ACM) en El Salvador: elegir comparables, una plantilla para llenar, un ejemplo con números y cómo presentarlo.',
  navLabel: 'Análisis comparativo',
  blurb: 'Plantilla y pasos para hacer un análisis comparativo de mercado de una propiedad en El Salvador.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'Method page with no legal facts. Check that the worked example is clearly hypothetical, that the vara/m² note is correct (1 vara cuadrada = 0.6987 m²), and that a native reader finds the colonia/residencial examples natural. No market prices are stated.',
  answer:
    'Un análisis comparativo de mercado (ACM) es un informe en que el agente compara la propiedad con otras parecidas de la misma zona para recomendar un precio. En El Salvador se hace con precios en dólares, de tres a seis comparables del mismo tipo, en la misma colonia o residencial, ajustados por diferencias. Es una opinión de mercado, no un avalúo. Para encontrar comparables, puede filtrar por ciudad, tipo y operación en Casa-Libre.',
  summary: [
    'El ACM compara la propiedad con tres a seis parecidas de la misma zona para recomendar un rango de precio.',
    'Use propiedades en venta, vendidas recientemente si las conoce, y retiradas sin vender.',
    'Presente un rango, no una cifra: mínimo, publicación y precio al que no conviene bajar.',
    'En Casa-Libre puede filtrar comparables por ciudad, tipo y operación.',
  ],
  cta: {
    title: 'Busque comparables por zona',
    text: 'En Casa-Libre El Salvador puede filtrar por ciudad, tipo y operación, y publicar su cartera gratis.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un análisis comparativo de mercado?',
      blocks: [
        {
          t: 'p',
          html: 'Es el informe con el que el agente sustenta un precio. Compara la propiedad con otras parecidas y explica por qué vale más o menos que cada una.',
        },
        {
          t: 'table',
          caption: 'Plantilla de ACM para llenar',
          head: ['Dato', 'Su propiedad', 'Comparable 1', 'Comparable 2', 'Comparable 3'],
          rows: [
            ['Zona (colonia o residencial)', '', '', '', ''],
            ['Tipo', '', '', '', ''],
            ['Terreno (m² o varas²)', '', '', '', ''],
            ['Construcción (m²)', '', '', '', ''],
            ['Habitaciones y baños', '', '', '', ''],
            ['Parqueos', '', '', '', ''],
            ['Estado', '', '', '', ''],
            ['Precio (US$)', '', '', '', ''],
            ['US$ por m² de construcción', '', '', '', ''],
            ['Ajuste', '', '', '', ''],
          ],
          note: 'Si el terreno está en varas cuadradas, conviértalo: 1 vara cuadrada equivale a unos 0,6987 m².',
        },
      ],
    },
    {
      id: 'elegir-comparables',
      h2: 'Cómo elegir buenos comparables',
      blocks: [
        {
          t: 'p',
          html: 'Un buen comparable se parece en zona, tipo y tamaño. Una casa en residencial cerrado no se compara con una sobre calle abierta, aunque estén cerca.',
        },
        {
          t: 'ul',
          items: [
            'Misma colonia o residencial, o la más parecida.',
            'Mismo tipo: casa con casa, apartamento con apartamento.',
            'Tamaño de construcción dentro de un 20% del de su propiedad.',
            'Publicados hace poco: un anuncio de hace un año ya no dice mucho.',
          ],
        },
        {
          t: 'p',
          html: 'Por ejemplo, para casas en venta en Santa Tecla, filtre en <a href="https://sv.casa-libre.com/propiedades?op=venta&amp;type=casa&amp;q=Santa%20Tecla">Casa-Libre</a>; para apartamentos, cambie el tipo en el filtro.',
        },
      ],
    },
    {
      id: 'paso-a-paso',
      h2: 'Cómo hacer un ACM paso a paso',
      blocks: [
        {
          t: 'p',
          html: 'Un ACM sencillo se arma en una hora si tiene los datos de la propiedad.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Datos de su propiedad', html: 'Medidas según la escritura, estado, parqueos y extras.' },
            { title: 'Busque comparables', html: 'De tres a seis, en la misma zona y del mismo tipo.' },
            { title: 'Llene la plantilla', html: 'Mismas columnas para todos, con precio por m².' },
            { title: 'Ajuste', html: 'Por estado, parqueos, terreno y seguridad.' },
            { title: 'Defina el rango', html: 'Mínimo, publicación y límite de negociación.' },
          ],
        },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo de ACM con números',
      blocks: [
        {
          t: 'p',
          html: 'Un apartamento de 90 m² en San Salvador, comparado con tres hipotéticos.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: ACM de un apartamento de 90 m²',
          html: 'Todos los precios y medidas son hipotéticos.',
          rows: [
            ['Comparable', 'Precio', 'm²', 'US$ por m²', 'Ajuste'],
            ['1: piso alto, 2 parqueos', 'US$ 135.000', '95', '1.421', '−5% (un parqueo más)'],
            ['2: similar, sin remodelar', 'US$ 112.000', '88', '1.273', '+5% (el suyo está remodelado)'],
            ['3: similar', 'US$ 120.000', '90', '1.333', '0%'],
            ['US$ por m² ajustado', '', '', '(1.350 + 1.337 + 1.333) ÷ 3 = 1.340', ''],
            ['Valor estimado (90 × 1.340)', 'US$ 120.600', '', '', ''],
          ],
        },
        {
          t: 'p',
          html: 'Rango sugerido: publicar cerca de US$ 124.000, aceptar ofertas desde US$ 117.000. Ajustes de ejemplo: 1.421 × 0,95 = 1.350 y 1.273 × 1,05 = 1.337.',
        },
      ],
    },
    {
      id: 'presentar',
      h2: 'Cómo presentar el ACM al propietario',
      blocks: [
        {
          t: 'p',
          html: 'Presente el ACM en la reunión de captación, en una página. El propietario tiene que ver los comparables y entender cada ajuste.',
        },
        {
          t: 'ol',
          items: [
            'Empiece por los comparables, no por su cifra.',
            'Explique los ajustes en una frase cada uno.',
            'Dé el rango y su recomendación.',
            'Acuerde revisar el precio a los 30 días según consultas y visitas.',
          ],
        },
        {
          t: 'p',
          html: 'Si el cliente necesita un avalúo formal para un crédito, vea <a href="/el-salvador/avaluo-de-casa-el-salvador/">avalúo de una casa en El Salvador</a>. Para la reunión con el propietario, siga <a href="/el-salvador/como-captar-propiedades/">cómo captar propiedades</a>.',
        },
      ],
    },
    {
      id: 'limites',
      h2: 'Límites del ACM',
      blocks: [
        {
          t: 'p',
          html: 'El ACM se basa en precios pedidos, que suelen ser mayores que los de cierre. Úselo como guía y dígalo con honestidad.',
        },
        {
          t: 'ul',
          items: [
            'No reemplaza un avalúo de perito para créditos o herencias.',
            'En zonas con pocos anuncios, el rango será más amplio.',
            'Propiedades únicas, como casas de playa con vista, se comparan peor.',
          ],
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es un ACM en bienes raíces?',
      a: 'Un análisis comparativo de mercado: el informe en que el agente compara la propiedad con otras parecidas de la zona para recomendar un precio.',
    },
    {
      q: '¿Cuántos comparables necesito?',
      a: 'Entre tres y seis, del mismo tipo y zona. Menos de tres da un precio poco confiable.',
    },
    {
      q: '¿El ACM es lo mismo que un avalúo?',
      a: 'No. El ACM es una opinión de mercado del agente; el avalúo es un informe técnico de un perito valuador.',
    },
    {
      q: '¿Dónde encuentro comparables en El Salvador?',
      a: 'En anuncios de la zona, en colegas que hayan vendido cerca y en Casa-Libre, filtrando por ciudad, tipo y operación.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Filtered search: op=venta, type=casa, q=Santa Tecla.' },
  ],
  closing: {
    title: 'Publique con el precio correcto',
    text: 'Publique su cartera gratis en Casa-Libre El Salvador y reciba consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['avaluo-de-casa-el-salvador', 'como-captar-propiedades', 'lotificaciones-el-salvador'],
};
