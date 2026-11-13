export default {
  slug: 'analisis-comparativo-de-mercado-inmobiliario',
  equivalent: 'analisis-comparativo-de-mercado-inmobiliario',
  group: 'Precio y contratos',
  order: 30,
  title: 'Análisis comparativo de mercado inmobiliario (ACM) en Bolivia',
  h1: 'Análisis comparativo de mercado inmobiliario (ACM)',
  description:
    'Cómo hacer un análisis comparativo de mercado (ACM) para una casa o departamento en Bolivia: búsqueda, plantilla de comparables, ajustes y cómo presentarlo.',
  navLabel: 'Análisis comparativo (ACM)',
  blurb: 'Un ACM paso a paso para Bolivia, con una plantilla para llenar y un ejemplo con números.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer:
    'Un análisis comparativo de mercado (ACM) es un informe que estima el precio de un inmueble comparándolo con otros parecidos de la misma zona. En Bolivia se hace buscando 4 a 6 comparables publicados, anotando superficie y precio, calculando el precio por metro cuadrado, ajustando por diferencias y presentando un rango al propietario. Para buscar comparables por ciudad y en el mapa, te recomendamos Casa-Libre.',
  summary: [
    'El ACM es la herramienta para captar: el propietario ve qué se ofrece cerca y acepta un precio con datos.',
    'Cinco pasos: definir el inmueble, buscar comparables, llenar la plantilla, ajustar y presentar un rango.',
    'Trabaja con precio por metro cuadrado y recuerda que los precios publicados son pedidos, no de cierre.',
    'Las búsquedas por ciudad, tipo y mapa de Casa-Libre sirven para encontrar comparables en minutos.',
  ],
  cta: {
    title: 'Tus ACM con comparables reales',
    text: 'Busca por ciudad, tipo y en el mapa en Casa-Libre Bolivia, y publica tu cartera gratis.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un ACM inmobiliario y para qué sirve?',
      blocks: [
        {
          t: 'p',
          html: 'Es un informe corto que compara el inmueble de tu cliente con otros parecidos que se ofrecen en la misma zona. Sirve para fijar un precio de publicación defendible y para ganar la captación con datos.',
        },
        {
          t: 'table',
          caption: 'Los cinco pasos de un ACM',
          head: ['Paso', 'Qué haces', 'Tiempo aproximado'],
          rows: [
            ['1. Definir el inmueble', 'Tipo, zona, superficie, dormitorios, estado, papeles', 'En la visita'],
            ['2. Buscar comparables', '4 a 6 inmuebles parecidos publicados en la zona', '30 minutos'],
            ['3. Llenar la plantilla', 'Precio, superficie y precio por m² de cada uno', '20 minutos'],
            ['4. Ajustar', 'Más o menos según diferencias', '20 minutos'],
            ['5. Presentar', 'Rango de precio y fecha de revisión', 'En la segunda reunión'],
          ],
        },
      ],
    },
    {
      id: 'buscar',
      h2: '¿Cómo buscar comparables para el ACM?',
      blocks: [
        {
          t: 'p',
          html: 'Filtra por ciudad, tipo y operación, y después mira el mapa para quedarte solo con los que están cerca. Un inmueble a diez cuadras puede estar en otra zona con otros precios.',
        },
        {
          t: 'p',
          html: 'Si tasas una casa en Santa Cruz, empieza por las casas en venta de la ciudad en <a href="https://casa-libre.com.bo/venta/casas/santa-cruz-de-la-sierra">Casa-Libre</a> y acota en el mapa a tu zona. Guarda el enlace de cada comparable: lo vas a mostrar en la reunión.',
        },
      ],
    },
    {
      id: 'plantilla',
      h2: 'Plantilla de ACM para llenar',
      blocks: [
        {
          t: 'p',
          html: 'Copia esta tabla en una planilla. Una fila por comparable y una al final para el inmueble de tu cliente.',
        },
        {
          t: 'table',
          caption: 'Plantilla de análisis comparativo de mercado',
          head: ['Columna', 'Qué anotar'],
          rows: [
            ['Dirección o zona', 'Barrio, condominio o anillo'],
            ['Tipo', 'Casa, departamento, terreno'],
            ['Superficie', 'Construida y de terreno, en m²'],
            ['Dormitorios y baños', 'Número'],
            ['Estado', 'A estrenar, bueno, para refaccionar'],
            ['Extras', 'Parqueo, piscina, patio, baulera'],
            ['Precio publicado', 'En dólares'],
            ['Precio por m²', 'Precio ÷ superficie construida'],
            ['Ajuste', 'Porcentaje y motivo'],
            ['Precio por m² ajustado', 'Resultado'],
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
          html: 'Un ejemplo con números redondos para ver la cuenta completa. Los precios son hipotéticos.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: casa de 180 m² construidos en Santa Cruz',
          html: 'Cuatro comparables de la misma zona. El primero está a estrenar (se ajusta -5%), el último no tiene parqueo cubierto (+3%).',
          rows: [
            ['Comparable', 'Precio por m²', 'Ajuste', 'Ajustado'],
            ['A', 'USD 900', '-5%', 'USD 855'],
            ['B', 'USD 820', '0%', 'USD 820'],
            ['C', 'USD 850', '0%', 'USD 850'],
            ['D', 'USD 780', '+3%', 'USD 803'],
            ['Promedio', '', '', 'USD 832'],
            ['Valor: 180 m² × 832', '', '', 'USD 149.760'],
            ['Rango a presentar', '', '', 'USD 143.000 a 155.000'],
          ],
        },
      ],
    },
    {
      id: 'presentar',
      h2: '¿Cómo presentar el ACM al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'En persona o por videollamada, con la planilla y las fotos de cada comparable. Empieza por los comparables y deja el número para el final: así el propietario llega solo a la conclusión.',
        },
        {
          t: 'ul',
          items: [
            'Muestra primero el comparable que más se parece a su inmueble.',
            'Explica cada ajuste en una frase.',
            'Propón un precio de publicación dentro del rango y una fecha para revisarlo.',
            'Deja una copia por WhatsApp para que la vea con su familia.',
          ],
        },
        {
          t: 'p',
          html: 'Si el propietario pide más de lo que dice el ACM, usa las respuestas de <a href="/bolivia/manejo-de-objeciones-inmobiliarias/">manejo de objeciones inmobiliarias</a>. Más detalles sobre ajustes en <a href="/bolivia/como-tasar-una-propiedad/">cómo tasar una propiedad</a>.',
        },
      ],
    },
    {
      id: 'actualizar',
      h2: '¿Cada cuánto actualizar el ACM?',
      blocks: [
        {
          t: 'p',
          html: 'Cada mes mientras el inmueble esté publicado. Si aparecen comparables nuevos más baratos o tu aviso no recibe consultas, el ACM actualizado es la mejor manera de hablar de precio con el propietario.',
        },
        {
          t: 'casalibre',
          title: 'Comparables actualizados, en el mapa',
          html: 'En Casa-Libre Bolivia ves lo que se publica hoy en cada ciudad, por tipo y en el mapa, y publicas tu cartera gratis junto a la de propietarios y otras inmobiliarias.',
          button: 'Ver la cuenta para inmobiliarias',
          href: 'https://casa-libre.com.bo/empresas',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué significa ACM en inmobiliaria?',
      a: 'Análisis comparativo de mercado: un informe que estima el precio de un inmueble comparándolo con otros parecidos de la misma zona.',
    },
    {
      q: '¿El ACM reemplaza al avalúo?',
      a: 'No. El ACM es una estimación de mercado para fijar el precio de venta. El avalúo formal que pide un banco lo hace un perito tasador.',
    },
    {
      q: '¿Puedo usar inmuebles en anticrético como comparables?',
      a: 'No para una venta: el anticrético es otra operación con otros montos. Compara ventas con ventas.',
    },
    {
      q: '¿Cuánto cobrar por un ACM?',
      a: 'Muchos agentes lo hacen sin costo como parte de la captación. Es la forma de mostrar tu trabajo antes de pedir la autorización de venta.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Bolivia /venta/casas/santa-cruz-de-la-sierra (verified)', url: 'https://casa-libre.com.bo/venta/casas/santa-cruz-de-la-sierra', date: '2026-11-13', note: 'Verified path in lib/countries.js.' },
  ],
  closing: {
    title: 'Con el precio claro, publica',
    text: 'Publicar en Casa-Libre Bolivia es gratis y las consultas te llegan por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['como-tasar-una-propiedad', 'como-captar-propiedades', 'manejo-de-objeciones-inmobiliarias', 'mercado-inmobiliario-bolivia'],
};
