export default {
  slug: 'como-fijar-el-precio-de-un-inmueble-en-dolares',
  group: 'Precio y contratos',
  order: 50,
  title: 'Cómo fijar el precio de un inmueble en dólares en Venezuela',
  h1: 'Cómo fijar el precio de un inmueble en dólares',
  description:
    'Cómo fijar el precio de un inmueble en dólares en Venezuela: comparables, ajustes por condominio y servicios, precio pedido y de cierre, y cuándo revisarlo.',
  navLabel: 'Precio en dólares',
  blurb: 'Cómo poner un precio en dólares que reciba consultas: comparables, ajustes locales y revisión del precio.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer:
    'Para fijar el precio de un inmueble en dólares en Venezuela, compara con inmuebles parecidos publicados en la misma zona, ajusta por metros, estado, condominio, servicios y estacionamiento, y recuerda que los precios publicados son precios pedidos, no de cierre. Fija un precio que reciba consultas y revísalo si en pocas semanas no hay visitas. Te recomendamos buscar los comparables en Casa-Libre.',
  summary: [
    'El precio sale de comparables: inmuebles parecidos, en la misma zona, publicados hoy.',
    'Los precios publicados son pedidos; el cierre suele quedar por debajo después de negociar.',
    'En Venezuela pesan mucho el condominio, el agua, la planta eléctrica y el estacionamiento.',
    'Busca comparables por ciudad, tipo y operación en Casa-Libre y revisa el precio si no hay visitas.',
  ],
  cta: {
    title: 'Busca comparables gratis',
    text: 'En Casa-Libre Venezuela encuentras inmuebles por ciudad, tipo y operación, y publicas tu cartera sin costo.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.ve/empresas',
  },
  sections: [
    {
      id: 'metodo',
      h2: '¿Cómo se fija el precio de un inmueble en dólares?',
      blocks: [
        {
          t: 'p',
          html: 'Con el método de comparables: buscas inmuebles parecidos publicados en la misma zona, calculas su precio por metro cuadrado y ajustas por las diferencias. No hay un índice oficial público de precios, así que tus comparables son tu mejor dato.',
        },
        {
          t: 'table',
          caption: 'Factores que mueven el precio de un inmueble en Venezuela',
          head: ['Factor', 'Qué revisar', 'Efecto habitual'],
          rows: [
            ['Ubicación', 'Urbanización, calle, seguridad, acceso', 'El factor que más pesa'],
            ['Metros y distribución', 'Metros del documento, habitaciones, baños', 'Base del precio por m²'],
            ['Condominio', 'Cuota mensual, solvencia, estado de áreas comunes', 'Cuota alta o deuda restan interés'],
            ['Servicios', 'Agua, tanque, planta eléctrica, gas, internet', 'Un edificio con planta y tanque suele venderse mejor'],
            ['Estacionamiento', 'Puestos y maletero', 'Muy valorado en las ciudades grandes'],
            ['Estado', 'Remodelación, filtraciones, ascensor', 'Ajuste hacia arriba o hacia abajo'],
            ['Documentos', 'Papeles al día o por regularizar', 'Problemas de papeles restan compradores'],
          ],
          note: 'Factores generales, sin porcentajes: cada zona es distinta.',
        },
      ],
    },
    {
      id: 'comparables',
      h2: '¿Dónde encontrar comparables?',
      blocks: [
        {
          t: 'p',
          html: 'En los inmuebles publicados de tu zona y en lo que sabes de ventas recientes por tu red. Busca al menos cinco parecidos en tipo, metros y urbanización.',
        },
        {
          t: 'p',
          html: 'Por ejemplo, para casas en venta en Maracaibo puedes filtrar en <a href="https://casa-libre.com.ve/propiedades?op=venta&amp;type=casa&amp;q=Maracaibo">Casa-Libre</a> por ciudad, tipo y operación. La guía de <a href="/venezuela/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a> trae la plantilla completa.',
        },
      ],
    },
    {
      id: 'pedido-y-cierre',
      h2: 'Precio pedido y precio de cierre',
      blocks: [
        {
          t: 'p',
          html: 'Lo que ves publicado es lo que pide cada propietario, no lo que se pagó. En la negociación el precio suele bajar, y algunos inmuebles llevan meses publicados porque están caros.',
        },
        {
          t: 'ul',
          items: [
            'Descarta comparables publicados hace mucho tiempo sin cambios: probablemente están por encima del mercado.',
            'Pregunta a colegas por cierres recientes en la zona.',
            'Deja un margen razonable de negociación, sin inflar el precio.',
          ],
        },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo: del precio por metro al precio publicado',
      blocks: [
        {
          t: 'p',
          html: 'Calcula el precio por metro cuadrado de cada comparable, toma un valor central y ajústalo por las diferencias del inmueble que vas a publicar.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: apartamento de 80 m² en Valencia',
          html: 'Datos redondos e hipotéticos, no son precios reales de la zona.',
          rows: [
            ['Concepto', 'Monto'],
            ['Comparable A: USD 48.000 ÷ 80 m²', 'USD 600 por m²'],
            ['Comparable B: USD 45.000 ÷ 75 m²', 'USD 600 por m²'],
            ['Comparable C: USD 56.000 ÷ 80 m²', 'USD 700 por m²'],
            ['Valor central elegido', 'USD 620 por m²'],
            ['Base: 80 m² × USD 620', 'USD 49.600'],
            ['Ajuste: sin puesto de estacionamiento', 'menos USD 3.000'],
            ['Precio sugerido', 'Alrededor de USD 46.500'],
          ],
        },
      ],
    },
    {
      id: 'tipo-de-cambio',
      h2: '¿Y el tipo de cambio?',
      blocks: [
        {
          t: 'p',
          html: 'Publica y negocia en dólares, como hace el mercado, y no fijes el precio con supuestos sobre el tipo de cambio. Si el comprador pagará de otra forma, acuerda con un abogado o contador cómo se calcula y se documenta.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Consejo',
          html: 'Pon un solo precio en dólares y el mismo en todos los canales. Precios distintos para el mismo inmueble restan confianza.',
        },
      ],
    },
    {
      id: 'revisar-precio',
      h2: '¿Cuándo bajar el precio?',
      blocks: [
        {
          t: 'p',
          html: 'Cuando la ficha tiene buenas fotos y buena descripción, pero en tres o cuatro semanas no hay visitas. Pocas consultas casi siempre significan precio alto.',
        },
        {
          t: 'p',
          html: 'Muestra al propietario los comparables actualizados y los números de su ficha. Si se resiste, la guía de <a href="/venezuela/manejo-de-objeciones-inmobiliarias/">manejo de objeciones</a> tiene respuestas. Y si quiere entender el valor por su cuenta, compártele la guía para propietarios de <a href="https://casa-libre.com.ve/guias/cuanto-vale-mi-propiedad">Casa-Libre</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cómo saber cuánto vale un apartamento en Venezuela?',
      a: 'Compara con al menos cinco apartamentos parecidos publicados en la misma urbanización, calcula el precio por metro y ajusta por condominio, servicios, estacionamiento y estado. Si necesitas un valor formal, pide un avalúo a un perito.',
    },
    {
      q: '¿Por qué los inmuebles en Venezuela se venden en dólares?',
      a: 'Es la práctica del mercado y así lo esperan compradores y vendedores. Publica en dólares y consulta con un abogado o contador cómo documentar el pago.',
    },
    {
      q: '¿Cuánto margen de negociación dejar?',
      a: 'No hay una cifra fija. Deja un margen razonable según tus comparables, sin inflar: un precio muy alto se queda sin visitas y luego cuesta más bajarlo.',
    },
    {
      q: '¿Cada cuánto revisar el precio?',
      a: 'Mira las consultas y visitas cada semana. Si en tres o cuatro semanas no hay visitas con una ficha bien hecha, propón una revisión con datos.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Paths used: filtered search op=venta type=casa q=Maracaibo, /guias/cuanto-vale-mi-propiedad, /empresas.' },
  ],
  closing: {
    title: 'Un buen precio, bien publicado',
    text: 'Publica gratis en Casa-Libre Venezuela y mide las consultas de cada ficha.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['analisis-comparativo-de-mercado-inmobiliario', 'como-tasar-un-inmueble', 'manejo-de-objeciones-inmobiliarias'],
};
