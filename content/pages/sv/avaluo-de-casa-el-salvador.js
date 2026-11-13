export default {
  slug: 'avaluo-de-casa-el-salvador',
  equivalent: 'como-tasar-una-propiedad',
  group: 'Precio y contratos',
  order: 20,
  title: 'Avalúo de casa en El Salvador: guía para agentes',
  h1: 'Avalúo de una casa en El Salvador: cómo estimar el precio',
  description:
    'Diferencia entre el avalúo de un perito y la estimación de un agente en El Salvador, cómo calcular un precio con comparables y cómo presentarlo al propietario.',
  navLabel: 'Avalúo de casa',
  blurb: 'Cómo estimar el precio de una casa en El Salvador con comparables y cuándo hace falta el avalúo de un perito valuador.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Salvadoran valuer or banker must confirm: that banks use peritos valuadores registered with the Superintendencia del Sistema Financiero (SSF register, norma NRP-27 in force since April 2021), that the FSV does its own valuation, and that a bank avalúo is usually paid by the borrower. No avalúo prices are stated (a common search is "cuánto cuesta un avalúo": left unanswered on purpose). Adjustment percentages in the table are illustrative, not standards.',
  answer:
    'En El Salvador, el avalúo formal de una casa lo hace un perito valuador; los bancos trabajan con peritos inscritos en la Superintendencia del Sistema Financiero, y el FSV hace su propia valuación. El agente no hace avalúos, pero sí estima un precio de publicación comparando casas parecidas de la misma zona y ajustando por diferencias. Para encontrar esos comparables, puede buscar en Casa-Libre por ciudad, tipo y operación.',
  summary: [
    'Avalúo formal: lo hace un perito valuador; los bancos usan peritos inscritos en la SSF y el FSV tiene su propia valuación.',
    'Estimación del agente: precio de publicación basado en tres a seis comparables de la misma zona.',
    'Ajuste por metros, estado, parqueos, seguridad y acceso; nunca por el "cariño" del propietario.',
    'Puede encontrar comparables en Casa-Libre filtrando por ciudad, tipo y operación.',
  ],
  cta: {
    title: 'Comparables a un clic',
    text: 'En Casa-Libre El Salvador busque por ciudad, tipo y operación, y publique su cartera gratis.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'avaluo-vs-estimacion',
      h2: '¿Qué diferencia hay entre un avalúo y la estimación de un agente?',
      blocks: [
        {
          t: 'p',
          html: 'El avalúo es un informe técnico de un perito, que usan bancos y el FSV para decidir cuánto prestan. La estimación del agente es una opinión de precio de mercado para publicar y negociar.',
        },
        {
          t: 'table',
          caption: 'Avalúo de perito y estimación de agente',
          head: ['', 'Avalúo de perito', 'Estimación del agente'],
          rows: [
            ['Quién lo hace', 'Perito valuador; para bancos, inscrito en la SSF', 'El agente de bienes raíces'],
            ['Para qué sirve', 'Crédito, herencias, garantías', 'Fijar precio de publicación y negociar'],
            ['Base', 'Inspección técnica, terreno, construcción, mercado', 'Comparables de la zona'],
            ['Costo', 'Lo cobra el perito; en un crédito suele pagarlo quien lo pide', 'Parte del servicio del agente'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Para un crédito o un trámite legal, el avalúo debe hacerlo un perito. Consulte con su banco o con el FSV.',
        },
      ],
    },
    {
      id: 'metodo',
      h2: 'Cómo estimar el precio de una casa con comparables',
      blocks: [
        {
          t: 'p',
          html: 'Compare la casa con otras parecidas, en la misma colonia o residencial, y ajuste por las diferencias. Es el mismo razonamiento que hará el cliente cuando compare anuncios.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Busque comparables', html: 'Tres a seis casas del mismo tipo, zona y tamaño parecido, en venta o vendidas hace poco.' },
            { title: 'Calcule precio por m²', html: 'Precio dividido entre metros de construcción, para cada comparable.' },
            { title: 'Ajuste', html: 'Suba o baje según estado, parqueos, terreno, seguridad y acceso.' },
            { title: 'Defina un rango', html: 'Un precio mínimo, uno de publicación y uno al que no conviene bajar.' },
          ],
        },
        {
          t: 'p',
          html: 'Para buscar comparables, use las casas en venta de San Salvador en <a href="https://sv.casa-libre.com/venta/casas/san-salvador">Casa-Libre</a> o filtre su ciudad. Recuerde que son precios pedidos, no de cierre.',
        },
      ],
    },
    {
      id: 'ajustes',
      h2: 'Qué ajustar entre una casa y otra',
      blocks: [
        {
          t: 'p',
          html: 'Los ajustes reflejan lo que un cliente pagaría de más o de menos. Estos rangos son ilustrativos: ajústelos a su zona.',
        },
        {
          t: 'table',
          caption: 'Ejemplo ilustrativo de ajustes',
          head: ['Diferencia', 'Ajuste de ejemplo'],
          rows: [
            ['Remodelada vs. original', '+5% a +10%'],
            ['Parqueo adicional', '+2% a +4%'],
            ['Residencial con vigilancia vs. calle abierta', '+5% a +10%'],
            ['Necesita techo o instalaciones nuevas', '−5% a −15%'],
            ['Acceso difícil en invierno', '−3% a −8%'],
          ],
          note: 'Porcentajes hipotéticos para mostrar el método, no estándares del mercado.',
        },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo de estimación paso a paso',
      blocks: [
        {
          t: 'p',
          html: 'Un ejemplo con números redondos para una casa de 120 m² de construcción.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: estimación con tres comparables',
          html: 'Precios y medidas hipotéticos.',
          rows: [
            ['Comparable', 'Precio', 'm²', 'US$ por m²'],
            ['A', 'US$ 110.000', '110', '1.000'],
            ['B', 'US$ 130.000', '125', '1.040'],
            ['C', 'US$ 120.000', '120', '1.000'],
            ['Promedio', '', '', '(1.000 + 1.040 + 1.000) ÷ 3 = 1.013'],
            ['Casa a estimar (120 m² × 1.013)', 'US$ 121.560', '', ''],
            ['Ajuste por necesitar techo (−5%)', 'US$ 115.482', '', ''],
          ],
        },
        {
          t: 'p',
          html: 'Con ese cálculo, una publicación cercana a US$ 118.000 deja margen de negociación razonable. El método completo está en <a href="/el-salvador/analisis-comparativo-de-mercado-bienes-raices/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'presentar',
      h2: 'Cómo presentar el precio al propietario',
      blocks: [
        {
          t: 'p',
          html: 'Muestre los comparables, no solo la cifra. Un propietario acepta mejor un precio que puede ver en anuncios reales.',
        },
        {
          t: 'ul',
          items: [
            'Lleve los comparables en el celular o impresos.',
            'Explique cada ajuste con una frase.',
            'Proponga revisar el precio a los 30 días según consultas y visitas.',
            'Si el propietario insiste en un precio alto, deje por escrito el riesgo.',
          ],
        },
      ],
    },
    {
      id: 'credito',
      h2: 'Cuando el avalúo del banco sale bajo',
      blocks: [
        {
          t: 'p',
          html: 'Si el avalúo del banco o del FSV es menor que el precio acordado, el banco presta sobre el valor menor y el comprador debe cubrir la diferencia. Prepare a ambas partes desde la oferta.',
        },
        {
          t: 'p',
          html: 'Opciones habituales: el comprador aumenta la prima, el vendedor ajusta el precio o se renegocia el plazo. Vea <a href="/el-salvador/comprar-casa-con-credito-del-fondo-social-para-la-vivienda/">comprar casa con crédito del FSV</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Quién hace avalúos de casas en El Salvador?',
      a: 'Peritos valuadores. Para créditos bancarios se usan peritos inscritos en la Superintendencia del Sistema Financiero, y el FSV hace su propia valuación.',
    },
    {
      q: '¿Puedo saber cuánto vale mi casa sin pagar un avalúo?',
      a: 'Puede tener una estimación de mercado comparando casas parecidas de la zona. No reemplaza un avalúo formal para un crédito o trámite legal.',
    },
    {
      q: '¿Cuánto cuesta un avalúo de casa?',
      a: 'Depende del perito, del tamaño y del tipo de propiedad. Pida cotización a peritos inscritos o a su banco.',
    },
    {
      q: '¿Los precios de los anuncios son precios reales?',
      a: 'Son precios pedidos, no de cierre. Úselos como referencia y ajuste a la baja si la propiedad lleva mucho tiempo publicada.',
    },
  ],
  internalSources: [
    { label: 'SSF norma NRP-27, registro de peritos valuadores', url: 'https://ssf.gob.sv/wp-content/uploads/2024/07/NRP-27.pdf', date: '2026-11-13', note: 'Approved 29/03/2021, in force 19/04/2021.' },
    { label: 'Autocomplete (gl=sv) "avaluo de casa el salvador"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=sv&q=avaluo+de+casa+el+salvador', date: '2026-11-13', note: 'Variants: simulador, cuánto cuesta.' },
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Path used: /venta/casas/san-salvador.' },
  ],
  closing: {
    title: 'Publique con un precio bien sustentado',
    text: 'Publique su cartera gratis en Casa-Libre El Salvador y reciba consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['analisis-comparativo-de-mercado-bienes-raices', 'comprar-casa-con-credito-del-fondo-social-para-la-vivienda', 'como-captar-propiedades'],
};
