export default {
  slug: 'analisis-comparativo-de-mercado-inmobiliario',
  equivalent: 'analisis-comparativo-de-mercado-inmobiliario',
  group: 'Precio y contratos',
  order: 70,
  title: 'Análisis comparativo de mercado inmobiliario: plantilla ACM',
  h1: 'Análisis comparativo de mercado inmobiliario (ACM)',
  description:
    'Cómo hacer un análisis comparativo de mercado inmobiliario en Venezuela: buscar comparables, llenar la plantilla y calcular el precio por metro en dólares.',
  navLabel: 'ACM inmobiliario',
  blurb: 'Un ACM paso a paso para asesores en Venezuela, con plantilla, búsquedas de comparables y un ejemplo en dólares.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer:
    'Un análisis comparativo de mercado (ACM) es el informe con el que un asesor estima el precio de un inmueble a partir de otros parecidos en la misma zona. En Venezuela se hace en dólares: eliges de cinco a ocho comparables, calculas su precio por metro, ajustas por diferencias y propones un rango. Sirve para captar y para fijar el precio. Te recomendamos buscar los comparables en Casa-Libre.',
  summary: [
    'El ACM compara el inmueble con cinco a ocho parecidos de la misma zona y propone un rango en dólares.',
    'Usa la misma plantilla siempre: dirección, tipo, metros, habitaciones, puestos, condominio, precio y días publicado.',
    'Los precios publicados son pedidos; ajústalos con lo que sepas de cierres reales.',
    'En Casa-Libre filtras por ciudad, tipo y operación para encontrar comparables.',
  ],
  cta: {
    title: 'Tus comparables, en un solo lugar',
    text: 'Busca por ciudad, tipo y operación en Casa-Libre Venezuela y publica tu cartera gratis.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.ve/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un ACM inmobiliario?',
      blocks: [
        {
          t: 'p',
          html: 'Es un informe corto que muestra a qué precio se ofrecen inmuebles parecidos al que quieres vender. Le da al propietario una base objetiva y a ti un argumento para el precio que propones.',
        },
        {
          t: 'table',
          caption: 'Plantilla de ACM para un inmueble en Venezuela',
          head: ['Campo', 'Inmueble a vender', 'Comparable 1', 'Comparable 2', 'Comparable 3'],
          rows: [
            ['Urbanización', '', '', '', ''],
            ['Tipo', 'Apartamento', '', '', ''],
            ['Metros (documento)', '', '', '', ''],
            ['Habitaciones / baños', '', '', '', ''],
            ['Puestos de estacionamiento', '', '', '', ''],
            ['Condominio mensual (USD)', '', '', '', ''],
            ['Planta eléctrica / tanque', '', '', '', ''],
            ['Precio publicado (USD)', '', '', '', ''],
            ['Precio por m² (USD)', '', '', '', ''],
            ['Tiempo publicado', '', '', '', ''],
          ],
          note: 'Plantilla para copiar. Agrega columnas hasta tener cinco a ocho comparables.',
        },
      ],
    },
    {
      id: 'paso-a-paso',
      h2: 'Cómo hacer un análisis comparativo de mercado paso a paso',
      blocks: [
        {
          t: 'p',
          html: 'Sigue estos pasos con cada captación. Con práctica, un ACM se arma en menos de una hora.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Define el inmueble', html: 'Datos del documento y de la visita: metros, estado, servicios.' },
            { title: 'Busca comparables', html: 'Mismo tipo, misma zona, metros parecidos.' },
            { title: 'Llena la plantilla', html: 'Un comparable por columna, con su precio por m².' },
            { title: 'Descarta los extremos', html: 'Quita los que están muy por encima o muy por debajo sin explicación.' },
            { title: 'Ajusta', html: 'Suma o resta por puestos, estado, servicios y condominio.' },
            { title: 'Propón un rango', html: 'Un mínimo, un máximo y el precio que recomiendas publicar.' },
          ],
        },
      ],
    },
    {
      id: 'buscar-comparables',
      h2: '¿Dónde buscar comparables en Venezuela?',
      blocks: [
        {
          t: 'p',
          html: 'En los inmuebles publicados de tu zona y en los cierres que conozcas por colegas. Filtra siempre por ciudad, tipo y operación para no mezclar casas con apartamentos.',
        },
        {
          t: 'ul',
          items: [
            'Apartamentos en venta en Caracas: <a href="https://casa-libre.com.ve/venta/departamentos/caracas">Casa-Libre</a>.',
            'Apartamentos en venta en Valencia: <a href="https://casa-libre.com.ve/propiedades?op=venta&amp;type=depto&amp;q=Valencia">Casa-Libre</a>.',
            'Terrenos en venta en Isla de Margarita: <a href="https://casa-libre.com.ve/propiedades?op=venta&amp;type=terreno&amp;q=Isla%20de%20Margarita">Casa-Libre</a>.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Consejo',
          html: 'Guarda cada ACM. En unos meses tendrás tu propia base de precios por urbanización, más útil que cualquier promedio general.',
        },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo de ACM con números',
      blocks: [
        {
          t: 'p',
          html: 'Un ejemplo simple, con tres comparables para que se vea el cálculo. En la práctica usa cinco o más.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: apartamento de 100 m² en Caracas',
          html: 'Datos redondos e hipotéticos, no son precios reales de ninguna urbanización.',
          rows: [
            ['Comparable', 'Precio y metros', 'USD por m²'],
            ['A', 'USD 90.000, 100 m²', '900'],
            ['B', 'USD 84.000, 105 m²', '800'],
            ['C', 'USD 95.000, 95 m²', '1.000'],
            ['Promedio (900 + 800 + 1.000) ÷ 3', '', '900'],
            ['Base: 100 m² × 900', 'USD 90.000', ''],
            ['Ajuste: sin planta eléctrica en el edificio', 'menos USD 4.000', ''],
            ['Rango propuesto', 'USD 84.000 a 88.000', ''],
          ],
        },
      ],
    },
    {
      id: 'presentarlo',
      h2: 'Cómo presentar el ACM al propietario',
      blocks: [
        {
          t: 'p',
          html: 'En persona o por videollamada, con las fichas de los comparables a la vista. Explica los ajustes y deja que el propietario haga preguntas.',
        },
        {
          t: 'p',
          html: 'Si el propietario insiste en un precio alto, acuerda una revisión con fecha. Las respuestas están en <a href="/venezuela/manejo-de-objeciones-inmobiliarias/">manejo de objeciones</a>, y la diferencia con un avalúo formal en <a href="/venezuela/como-tasar-un-inmueble/">cómo tasar un inmueble</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es un ACM inmobiliario?',
      a: 'Es el análisis comparativo de mercado: un informe que estima el precio de un inmueble a partir de otros parecidos publicados o vendidos en la misma zona.',
    },
    {
      q: '¿Cuántos comparables usar en un ACM?',
      a: 'Entre cinco y ocho. Menos es poco confiable; más suele mezclar inmuebles que no se parecen.',
    },
    {
      q: '¿El ACM reemplaza un avalúo?',
      a: 'No. El ACM es una herramienta comercial del asesor. Cuando un banco, un tribunal o un trámite pide un valor formal, lo hace un perito avaluador.',
    },
    {
      q: '¿Cada cuánto actualizar un ACM?',
      a: 'Cuando el inmueble lleva varias semanas sin visitas o cuando aparecen nuevos comparables en la zona. Con precios en dólares, revisa al menos una vez al mes.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Paths used: /venta/departamentos/caracas, filtered searches depto Valencia and terreno Isla de Margarita, /empresas.' },
  ],
  closing: {
    title: 'Del ACM a la ficha publicada',
    text: 'Publica gratis en Casa-Libre Venezuela con el precio que acordaste.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['como-tasar-un-inmueble', 'como-fijar-el-precio-de-un-inmueble-en-dolares', 'como-captar-propiedades'],
};
