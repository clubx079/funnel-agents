export default {
  slug: 'como-tasar-un-inmueble',
  equivalent: 'como-tasar-una-propiedad',
  group: 'Precio y contratos',
  order: 60,
  title: 'Cómo tasar un inmueble en Venezuela: guía para asesores',
  h1: 'Cómo tasar un inmueble: guía para asesores',
  description:
    'Cómo tasar un inmueble en Venezuela como asesor: estimación por comparables, cuándo hace falta un avalúo de un perito, la inspección y cómo presentar el valor.',
  navLabel: 'Tasar un inmueble',
  blurb: 'La diferencia entre la estimación del asesor y el avalúo de un perito, y cómo tasar un inmueble paso a paso.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Venezuelan professional must confirm: that formal avalúos are done by peritos avaluadores (tasadores) and are requested by banks, courts and for some estate (sucesión) and tax procedures; that an asesor\'s estimate has no legal value; and the inspection checklist items. No figures for appraisal fees are given on purpose.',
  answer:
    'Tasar un inmueble como asesor en Venezuela es estimar su valor de mercado en dólares comparándolo con inmuebles parecidos de la misma zona y ajustando por metros, estado, condominio y servicios. Esa estimación sirve para fijar el precio de publicación, pero no es un avalúo formal: cuando lo pide un banco, un tribunal o un trámite, lo hace un perito avaluador. Busca comparables gratis en Casa-Libre.',
  summary: [
    'Estimación del asesor: rápida, gratis, por comparables. Sirve para publicar y negociar.',
    'Avalúo formal: lo hace un perito avaluador cuando lo piden un banco, un tribunal o un trámite.',
    'La visita de inspección cambia la estimación: filtraciones, servicios, condominio y papeles.',
    'Los comparables de tu zona están en Casa-Libre, filtrando por ciudad, tipo y operación.',
  ],
  cta: {
    title: 'Comparables a mano',
    text: 'Usa la búsqueda de Casa-Libre Venezuela para tus estimaciones y publica tu cartera gratis.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.ve/empresas',
  },
  sections: [
    {
      id: 'estimacion-o-avaluo',
      h2: '¿Estimación del asesor o avalúo de un perito?',
      blocks: [
        {
          t: 'p',
          html: 'Son cosas distintas. La estimación del asesor es una opinión de valor de mercado para publicar; el avalúo es un informe técnico firmado por un perito avaluador.',
        },
        {
          t: 'table',
          caption: 'Estimación del asesor frente a avalúo formal',
          head: ['', 'Estimación del asesor', 'Avalúo de un perito'],
          rows: [
            ['Para qué sirve', 'Fijar el precio de publicación y negociar', 'Créditos, tribunales, sucesiones y otros trámites'],
            ['Quién lo hace', 'El asesor inmobiliario', 'Un perito avaluador'],
            ['Método', 'Comparables de la zona', 'Métodos técnicos y normas profesionales'],
            ['Costo', 'Suele ser gratis como parte de la captación', 'Lo cobra el perito'],
            ['Valor legal', 'Ninguno', 'Lo que le reconozca quien lo pide'],
          ],
          note: 'Información general, a confirmar con un profesional en Venezuela.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Consulta con un perito avaluador o un abogado cuando necesites un valor con efectos legales.',
        },
      ],
    },
    {
      id: 'paso-a-paso',
      h2: 'Cómo tasar un inmueble paso a paso',
      blocks: [
        {
          t: 'p',
          html: 'Son cinco pasos. Hazlos siempre en el mismo orden para no olvidar nada.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Datos del documento', html: 'Metros, linderos y puestos según el documento de propiedad.' },
            { title: 'Visita de inspección', html: 'Estado, servicios, condominio y áreas comunes.' },
            { title: 'Comparables', html: 'Al menos cinco inmuebles parecidos publicados en la misma zona.' },
            { title: 'Ajustes', html: 'Suma o resta por las diferencias con cada comparable.' },
            { title: 'Rango y precio sugerido', html: 'Un rango en dólares y el precio que recomiendas publicar.' },
          ],
        },
      ],
    },
    {
      id: 'inspeccion',
      h2: '¿Qué revisar en la visita de inspección?',
      blocks: [
        {
          t: 'p',
          html: 'Lo que el comprador va a preguntar. En Venezuela, los servicios y el condominio pesan tanto como los acabados.',
        },
        {
          t: 'ul',
          items: [
            'Agua: horario de suministro, tanque propio o del edificio, bomba.',
            'Electricidad: planta eléctrica del edificio, estado del tablero.',
            'Filtraciones, humedad, estado de ventanas y puertas.',
            'Condominio: cuota, solvencia, ascensores, vigilancia.',
            'Estacionamiento y maletero.',
            'Ampliaciones o cambios que no estén en el documento.',
          ],
        },
      ],
    },
    {
      id: 'ajustes',
      h2: 'Cómo ajustar los comparables',
      blocks: [
        {
          t: 'p',
          html: 'Compara cada inmueble con el tuyo y ajusta en dólares lo que el tuyo tiene de más o de menos. Usa montos que puedas explicar al propietario.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: ajustes sobre un comparable',
          html: 'Datos redondos e hipotéticos para una casa en Barquisimeto.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio publicado del comparable', 'USD 70.000'],
            ['El comparable tiene un puesto más', 'menos USD 2.000'],
            ['Tu casa está remodelada, el comparable no', 'más USD 4.000'],
            ['El comparable lleva meses publicado sin visitas', 'menos USD 3.000'],
            ['Valor ajustado para tu casa', 'USD 69.000'],
          ],
        },
        {
          t: 'p',
          html: 'Busca comparables de casas en venta en Barquisimeto en <a href="https://casa-libre.com.ve/propiedades?op=venta&amp;type=casa&amp;q=Barquisimeto">Casa-Libre</a>. El método completo está en el <a href="/venezuela/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'presentar',
      h2: 'Cómo presentar la tasación al propietario',
      blocks: [
        {
          t: 'p',
          html: 'Con los comparables a la vista, no solo con una cifra. Un propietario que ve los inmuebles de su zona entiende mejor por qué le recomiendas un precio.',
        },
        {
          t: 'ul',
          items: [
            'Una página con los comparables, sus precios y sus fotos.',
            'Los ajustes que hiciste y por qué.',
            'Un rango y el precio que recomiendas publicar.',
            'Qué harás si en tres o cuatro semanas no hay visitas.',
          ],
        },
        {
          t: 'p',
          html: 'Para el paso siguiente, lee <a href="/venezuela/como-fijar-el-precio-de-un-inmueble-en-dolares/">cómo fijar el precio de un inmueble en dólares</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cómo tasar un inmueble gratis en Venezuela?',
      a: 'Comparando con inmuebles parecidos publicados en la misma zona y ajustando por las diferencias. Es una estimación de mercado, no un avalúo formal.',
    },
    {
      q: '¿Quién hace avalúos de inmuebles en Venezuela?',
      a: 'Los peritos avaluadores. Se piden cuando un banco, un tribunal o un trámite necesita un valor formal.',
    },
    {
      q: '¿Qué es un modelo de avalúo de inmueble?',
      a: 'Es el formato de informe que usa el perito: identificación del inmueble, inspección, método, comparables y conclusión de valor. El asesor no debe presentar su estimación como si fuera un avalúo.',
    },
    {
      q: '¿Cuánto cobra un asesor por tasar?',
      a: 'Muchos asesores dan la estimación sin costo como parte de la captación. Si la cobras aparte, acuérdalo antes por escrito.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Paths used: filtered search op=venta type=casa q=Barquisimeto, /empresas.' },
  ],
  closing: {
    title: 'Tasa, publica y mide',
    text: 'Publica gratis en Casa-Libre Venezuela y recibe las consultas por WhatsApp.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['como-fijar-el-precio-de-un-inmueble-en-dolares', 'analisis-comparativo-de-mercado-inmobiliario', 'como-captar-propiedades'],
};
