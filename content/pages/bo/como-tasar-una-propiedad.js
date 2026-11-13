export default {
  slug: 'como-tasar-una-propiedad',
  equivalent: 'como-tasar-una-propiedad',
  group: 'Precio y contratos',
  order: 25,
  title: 'Cómo tasar una propiedad en Bolivia: guía para agentes',
  h1: 'Cómo tasar una propiedad en Bolivia',
  description:
    'Cómo estimar el precio de una casa, un departamento o un terreno en Bolivia con comparables, qué ajustes hacer y cuándo hace falta un perito tasador.',
  navLabel: 'Tasar una propiedad',
  blurb: 'El método de comparables para estimar el precio de un inmueble en Bolivia y cómo presentarlo al propietario.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Bolivian real-estate professional should confirm the statements about formal appraisals (banks and courts use a perito tasador / avalúo by a registered professional; an agent estimate is not a formal appraisal) and that the impuesto a la propiedad base value is usually not a market price. All figures in the examples are hypothetical.',
  answer:
    'Para tasar una propiedad en Bolivia como agente, compara el inmueble con otros parecidos que se ofrecen hoy en la misma zona: calcula el precio por metro cuadrado, ajusta por estado, ubicación, piso, parqueo y papeles, y presenta un rango, no un número exacto. Para un crédito o un juicio hace falta el avalúo de un perito tasador. Para encontrar comparables por ciudad y en el mapa, te recomendamos Casa-Libre.',
  summary: [
    'La estimación de un agente sirve para fijar el precio de venta; un avalúo formal lo hace un perito tasador, por ejemplo para un banco.',
    'Usa entre 4 y 6 comparables de la misma zona y tipo, y calcula el precio por metro cuadrado.',
    'Ajusta por estado, ubicación exacta, piso y vista, parqueo, antigüedad y papeles.',
    'Recuerda que los precios publicados son precios pedidos, no de cierre: ajusta hacia abajo con criterio.',
  ],
  cta: {
    title: 'Encuentra comparables en tu ciudad',
    text: 'En Casa-Libre Bolivia buscas casas, departamentos y terrenos por ciudad, tipo y en el mapa, y publicas tu cartera gratis.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'agente-o-perito',
      h2: '¿Tasación del agente o avalúo de un perito?',
      blocks: [
        {
          t: 'p',
          html: 'Son cosas distintas. El agente estima el precio al que el inmueble puede venderse hoy; el perito tasador emite un avalúo formal, que piden los bancos para un crédito o los juzgados en una sucesión.',
        },
        {
          t: 'table',
          caption: 'Estimación del agente y avalúo formal en Bolivia',
          head: ['', 'Estimación del agente', 'Avalúo de perito'],
          rows: [
            ['Para qué sirve', 'Fijar el precio de publicación y negociar', 'Créditos, garantías, juicios, sucesiones'],
            ['Cómo se hace', 'Comparables de mercado', 'Inspección técnica y método formal'],
            ['Costo', 'Parte del servicio del agente', 'Honorario del perito'],
            ['Resultado', 'Un rango de precio', 'Un informe firmado'],
          ],
        },
        {
          t: 'p',
          html: 'El valor que figura en el impuesto a la propiedad no suele coincidir con el precio de mercado: no lo uses como referencia de venta.',
        },
      ],
    },
    {
      id: 'comparables',
      h2: '¿Cómo encontrar comparables?',
      blocks: [
        {
          t: 'p',
          html: 'Busca inmuebles del mismo tipo, en la misma zona y de tamaño parecido. Entre 4 y 6 comparables bastan; más de 10 suelen mezclar inmuebles que no se parecen.',
        },
        {
          t: 'ul',
          items: [
            'Mismo tipo: casa con casa, departamento con departamento, lote con lote.',
            'Misma zona: el mismo barrio o condominio, o el mismo anillo en Santa Cruz.',
            'Tamaño parecido: más o menos 20% de superficie.',
            'Anota superficie, precio, dormitorios, estado y fecha de publicación.',
          ],
        },
        {
          t: 'p',
          html: 'Para departamentos en La Paz, por ejemplo, empieza por los que están en venta en <a href="https://casa-libre.com.bo/venta/departamentos/la-paz">Casa-Libre</a> y filtra por zona en el mapa. El paso a paso completo está en <a href="/bolivia/analisis-comparativo-de-mercado-inmobiliario/">el análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'ajustes',
      h2: '¿Qué ajustes hacer a cada comparable?',
      blocks: [
        {
          t: 'p',
          html: 'Cada comparable se ajusta hacia arriba o hacia abajo según en qué es mejor o peor que el inmueble que tasas. Usa porcentajes moderados y escribe por qué aplicaste cada uno.',
        },
        {
          t: 'table',
          caption: 'Ajustes frecuentes al comparar inmuebles',
          head: ['Factor', 'Si el comparable es mejor', 'Si el comparable es peor'],
          rows: [
            ['Estado y terminaciones', 'Baja su precio para comparar', 'Sube su precio para comparar'],
            ['Ubicación exacta', 'Baja', 'Sube'],
            ['Piso y vista (departamentos)', 'Baja', 'Sube'],
            ['Parqueo o baulera', 'Baja si el que tasas no tiene', 'Sube si el que tasas tiene y el comparable no'],
            ['Papeles', 'Un inmueble con papeles incompletos vale menos', 'No se ajusta hacia arriba por papeles completos'],
          ],
        },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo: tasar un departamento con comparables',
      blocks: [
        {
          t: 'p',
          html: 'Este ejemplo muestra la cuenta completa con números redondos. Los precios son inventados para ilustrar el método.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: departamento de 90 m² en Cochabamba',
          html: 'Cuatro comparables en la misma zona, ya ajustados, salen a USD 1.050, 1.100, 1.150 y 1.200 por m². Promedio: (1.050 + 1.100 + 1.150 + 1.200) ÷ 4 = USD 1.125 por m². Como son precios pedidos, se descuenta un 5% para acercarse a un precio de cierre.',
          rows: [
            ['Concepto', 'Cálculo', 'Resultado'],
            ['Precio por m² de referencia', '1.125 × 0,95', 'USD 1.069 por m²'],
            ['Valor estimado', '90 m² × USD 1.069', 'USD 96.210'],
            ['Rango a presentar', 'Más o menos 4%', 'USD 92.000 a 100.000'],
          ],
        },
      ],
    },
    {
      id: 'presentar',
      h2: '¿Cómo presentar la tasación al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'Muéstrale los comparables, no solo el número. Un propietario acepta un precio cuando ve con sus ojos qué se ofrece cerca y a cuánto.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Los comparables', html: 'Una hoja con fotos, superficie y precio de cada uno.' },
            { title: 'Los ajustes', html: 'Por qué su inmueble vale más o menos que cada comparable.' },
            { title: 'El rango', html: 'Un precio de publicación y un mínimo razonable.' },
            { title: 'La revisión', html: 'Una fecha para revisar el precio según las consultas.' },
          ],
        },
        {
          t: 'casalibre',
          title: 'Comparables por ciudad y en el mapa',
          html: 'En Casa-Libre Bolivia buscas casas, departamentos y terrenos por ciudad, tipo y operación, y los ves en el mapa. Los propietarios también tienen una guía de cuánto vale su propiedad que puedes compartirles.',
          button: 'Ver la guía para propietarios',
          href: 'https://casa-libre.com.bo/guias/cuanto-vale-mi-propiedad',
        },
      ],
    },
    {
      id: 'errores',
      h2: '¿Qué errores evitar al tasar?',
      blocks: [
        {
          t: 'p',
          html: 'El más común es aceptar el precio que quiere el propietario para ganar la captación. Un inmueble caro no recibe consultas y el propietario termina culpando al agente.',
        },
        {
          t: 'ul',
          items: [
            'Comparar con inmuebles de otra zona o de otro tipo.',
            'Tomar el precio publicado como si fuera precio de venta.',
            'Olvidar los papeles: un inmueble con problemas de títulos no vale lo mismo.',
            'No revisar el precio después de un mes sin consultas.',
          ],
        },
        {
          t: 'p',
          html: 'Si el inmueble es un terreno, mira el ejemplo por metro cuadrado en <a href="/bolivia/como-vender-terrenos-en-santa-cruz/">cómo vender terrenos en Santa Cruz</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Puede un agente inmobiliario hacer un avalúo?',
      a: 'Un agente puede estimar el precio de mercado. El avalúo formal que piden los bancos o los juzgados lo hace un perito tasador.',
    },
    {
      q: '¿Cómo tasar una propiedad gratis?',
      a: 'Con el método de comparables: busca inmuebles parecidos publicados en tu zona, calcula el precio por metro cuadrado y ajusta. No reemplaza un avalúo formal.',
    },
    {
      q: '¿Cuántos comparables necesito?',
      a: 'Entre 4 y 6 bien elegidos. Más comparables no ayudan si no se parecen al inmueble.',
    },
    {
      q: '¿Se tasa en dólares o en bolivianos?',
      a: 'Lo habitual es expresar el precio de venta en dólares. Si el propietario prefiere bolivianos, aclara el tipo de cambio que usas.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Bolivia /venta/departamentos/la-paz and /guias/cuanto-vale-mi-propiedad (verified)', url: 'https://casa-libre.com.bo/venta/departamentos/la-paz', date: '2026-11-13', note: 'Paths in lib/countries.js verified list.' },
    { label: 'Perito tasador / avalúo practice in Bolivia', url: 'about:blank', date: '2026-11-13', note: 'General knowledge; to be confirmed.' },
  ],
  closing: {
    title: 'Precio claro, aviso publicado',
    text: 'Publicar en Casa-Libre Bolivia es gratis y las consultas te llegan por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['analisis-comparativo-de-mercado-inmobiliario', 'como-vender-terrenos-en-santa-cruz', 'manejo-de-objeciones-inmobiliarias', 'mercado-inmobiliario-bolivia'],
};
