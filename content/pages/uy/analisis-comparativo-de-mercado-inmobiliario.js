export default {
  slug: 'analisis-comparativo-de-mercado-inmobiliario',
  equivalent: 'analisis-comparativo-de-mercado-inmobiliario',
  group: 'Precio y contratos',
  order: 60,
  title: 'Análisis comparativo de mercado inmobiliario en Uruguay',
  h1: 'Análisis comparativo de mercado inmobiliario (ACM)',
  description:
    'Cómo hacer un análisis comparativo de mercado inmobiliario en Uruguay: elegir comparables, armar la planilla, ajustar y presentarle el informe al propietario.',
  navLabel: 'Análisis comparativo',
  blurb: 'Cómo armar un ACM en Uruguay con comparables del barrio y convertirlo en un informe que convenza al propietario.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer:
    'Un análisis comparativo de mercado (ACM) es el informe en el que un agente compara una propiedad con otras parecidas del mismo barrio para proponer un precio. En Uruguay se arma con propiedades publicadas y, cuando se consiguen, ventas recientes, se ajusta por metros, estado, piso, garaje y gastos comunes, y se presenta en dólares. Para encontrar comparables por barrio, tipo y en el mapa, te recomendamos Casa-Libre.',
  summary: [
    'Un ACM compara tu propiedad con tres a seis similares del mismo barrio y propone un rango de precio.',
    'Separá las propiedades publicadas de las vendidas: el precio publicado no es el precio de cierre.',
    'Una planilla simple alcanza: dirección, metros, precio, precio por m², diferencias y ajuste.',
    'Presentalo al propietario como informe, con fotos y la recomendación de precio de salida.',
  ],
  cta: {
    title: 'Buscá comparables por barrio',
    text: 'En Casa-Libre Uruguay buscás por ciudad, tipo y operación y en el mapa. Publicar tu cartera es gratis.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un análisis comparativo de mercado?',
      blocks: [
        {
          t: 'p',
          html: 'Es la herramienta con la que justificás un precio. En vez de dar una cifra de memoria, mostrás con qué compite la propiedad y por qué vale lo que proponés.',
        },
        {
          t: 'table',
          caption: 'Planilla base de un ACM',
          head: ['Columna', 'Qué anotar', 'De dónde sale'],
          rows: [
            ['Dirección o referencia', 'Calle y barrio, sin número si no lo tenés', 'La publicación'],
            ['Tipo', 'Casa, apartamento, PH, terreno', 'La publicación'],
            ['Metros', 'Propios y de terraza', 'La ficha o el plano'],
            ['Precio', 'En U$S', 'La publicación o el cierre'],
            ['Precio por m²', 'Precio ÷ metros', 'Tu cálculo'],
            ['Diferencias', 'Piso, garaje, estado, gastos comunes', 'Fotos y visita'],
            ['Estado', 'Publicada, reservada o vendida', 'Tu seguimiento'],
          ],
        },
      ],
    },
    {
      id: 'elegir-comparables',
      h2: '¿Cómo elegir buenos comparables?',
      blocks: [
        {
          t: 'p',
          html: 'Mismo barrio, mismo tipo y tamaño parecido. Un apartamento en Cordón no compara bien con uno en Punta Carretas, aunque tengan los mismos metros.',
        },
        {
          t: 'ul',
          items: [
            'Preferí propiedades publicadas en los últimos meses.',
            'Sumá las que se vendieron o reservaron si las conocés: son la mejor referencia.',
            'Marcá las que llevan mucho tiempo publicadas: suelen estar caras.',
            'Si es vivienda promovida, compará con otras promovidas, porque tienen otras condiciones.',
          ],
        },
        {
          t: 'p',
          html: 'Para buscar por barrio, por ejemplo apartamentos en venta en el Centro de Montevideo, usá <a href="https://uy.casa-libre.com/venta/departamentos/montevideo/centro">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'ajustes',
      h2: '¿Cómo se ajustan los comparables?',
      blocks: [
        {
          t: 'p',
          html: 'Ajustás cada comparable hacia tu propiedad: si el comparable tiene garaje y la tuya no, su valor baja en tu planilla. Los porcentajes son criterio profesional, así que explicá siempre por qué los usás.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: ajuste de un comparable',
          html: 'Números redondos e hipotéticos, para mostrar la mecánica.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio del comparable', 'U$S 160.000'],
            ['Tiene garaje y tu propiedad no (−4%)', '− U$S 6.400'],
            ['Está a reciclar y la tuya reciclada (+5%)', '+ U$S 8.000'],
            ['Comparable ajustado (160.000 − 6.400 + 8.000)', 'U$S 161.600'],
          ],
        },
      ],
    },
    {
      id: 'informe',
      h2: '¿Cómo presentar el informe al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'En pocas páginas: la propiedad, los comparables con foto, el rango y tu recomendación. El propietario tiene que poder entenderlo en cinco minutos.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Portada', html: 'La propiedad, la fecha y tu nombre.' },
            { title: 'Comparables', html: 'Una línea por cada uno, con foto, metros y precio.' },
            { title: 'Rango', html: 'Valor mínimo y máximo razonables en U$S.' },
            { title: 'Recomendación', html: 'Precio de salida y cuándo revisarlo.' },
          ],
        },
        {
          t: 'p',
          html: 'Si el propietario pide más, tenés argumentos en <a href="/uruguay/manejo-de-objeciones-inmobiliarias/">manejo de objeciones inmobiliarias</a>. El método básico está en <a href="/uruguay/como-tasar-una-propiedad/">cómo tasar una propiedad en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'alquiler',
      h2: '¿Se hace un ACM para alquileres?',
      blocks: [
        {
          t: 'p',
          html: 'Sí, con la misma lógica pero en pesos y con más peso de los gastos comunes, porque el inquilino suma alquiler y gastos para decidir.',
        },
        {
          t: 'p',
          html: 'Para comparar alquileres, filtrá en Casa-Libre por operación alquiler en tu barrio y anotá alquiler y gastos comunes por separado.',
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Del ACM a la publicación',
      blocks: [
        {
          t: 'p',
          html: 'Un ACM convincente termina en una autorización firmada. Publicá ese mismo día.',
        },
        {
          t: 'casalibre',
          title: 'Publicá gratis en Casa-Libre',
          html: 'Tu propiedad aparece en la búsqueda por barrio y en el mapa, y los interesados te escriben por WhatsApp. Sin comisión sobre la venta.',
          button: 'Publicar mi propiedad',
          href: 'https://uy.casa-libre.com/publicar',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué diferencia hay entre una tasación y un ACM?',
      a: 'En la práctica, el ACM es la forma en que un agente hace una tasación comercial: con comparables. Una tasación formal para un banco la hace un tasador con otro método.',
    },
    {
      q: '¿Cuántas propiedades incluir?',
      a: 'Entre tres y seis. Más no siempre es mejor: importan que sean realmente parecidas.',
    },
    {
      q: '¿Cada cuánto actualizar el ACM?',
      a: 'Cuando la propiedad lleva semanas sin consultas o cuando aparecen nuevas propiedades parecidas en el barrio.',
    },
    {
      q: '¿Dónde busco comparables?',
      a: 'En las publicaciones de tu barrio, en tus propias operaciones y en las de colegas. En Casa-Libre podés filtrar por barrio y verlas en el mapa.',
    },
  ],
  internalSources: [
    { label: 'Practice guide', url: 'about:blank', date: '2026-11-13', note: 'No market prices; examples hypothetical.' },
  ],
  closing: {
    title: 'Comparables y publicación, en un mismo lugar',
    text: 'Buscá y publicá en Casa-Libre Uruguay, gratis y con consultas por WhatsApp.',
    button: 'Crear cuenta gratis',
    href: 'https://uy.casa-libre.com/empresas',
  },
  related: ['como-tasar-una-propiedad', 'manejo-de-objeciones-inmobiliarias', 'autorizacion-de-venta-inmobiliaria', 'mercado-inmobiliario-uruguay'],
};
