export default {
  slug: 'vivienda-promovida-uruguay',
  group: 'Terrenos y proyectos',
  order: 10,
  title: 'Vivienda promovida en Uruguay: guía para inmobiliarias',
  h1: 'Vivienda promovida en Uruguay: cómo venderla y alquilarla',
  description:
    'Qué es la vivienda promovida (Ley 18.795), qué preguntar antes de venderla o alquilarla y cómo captar inversores. Guía para inmobiliarias de Uruguay.',
  navLabel: 'Vivienda promovida',
  blurb: 'Qué tiene que saber una inmobiliaria para vender y alquilar unidades de vivienda promovida en Uruguay.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Uruguayan escribano or contador must confirm: Ley 18.795 (2011) regime of vivienda de interés social / vivienda promovida with tax benefits for investors; the ANV as adviser to the commission granting exemptions; that conditions (price caps on some sales, rental conditions, benefits for buyers who rent, Decreto 129/020) depend on the project and date of promotion; that the Fondo de Garantía de Alquileres has a higher rent cap for vivienda promovida (21 UR vs 18 UR per one gub.uy page; not stated on the page). Also confirm the barrios named as having many promoted projects (Cordón, Centro, Tres Cruces, La Blanqueada) or soften. We list the benefits only generically ("exoneraciones de impuestos") on purpose.',
  answer:
    'La vivienda promovida en Uruguay son unidades construidas bajo la Ley 18.795 de 2011, que da beneficios fiscales a quienes invierten en vivienda. Muchos inversores compraron apartamentos para alquilar y hoy necesitan una inmobiliaria que los alquile, los administre o los revenda. Antes de publicar, pedí la resolución de promoción del proyecto: de ella dependen las condiciones de venta y alquiler. Para publicar estas unidades gratis, te recomendamos Casa-Libre.',
  summary: [
    'La Ley 18.795 (2011) promueve la construcción de vivienda con beneficios fiscales para los inversores.',
    'Las condiciones de venta y alquiler dependen del proyecto: pedí siempre la resolución de promoción.',
    'Los inversores con varias unidades son clientes ideales para alquiler y administración.',
    'Publicá cada unidad en Casa-Libre gratis, aclarando que es vivienda promovida.',
  ],
  cta: {
    title: 'Publicá unidades promovidas',
    text: 'En Casa-Libre Uruguay publicás apartamentos para venta y alquiler gratis y recibís consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es la vivienda promovida?',
      blocks: [
        {
          t: 'p',
          html: 'Es la vivienda construida o reciclada dentro del régimen de la Ley 18.795, que declaró de interés nacional el acceso a la vivienda de interés social y otorga exoneraciones de impuestos a los proyectos aprobados. La Agencia Nacional de Vivienda asesora a la comisión que aprueba esos beneficios.',
        },
        {
          t: 'table',
          caption: 'Qué preguntar antes de trabajar una unidad promovida',
          head: ['Pregunta', 'Por qué importa', 'Dónde se ve'],
          rows: [
            ['¿Cuál es la resolución de promoción del proyecto?', 'Define beneficios y condiciones', 'Documentación del promotor o del propietario'],
            ['¿Se vendió con precio tope?', 'Puede limitar la reventa', 'Resolución y título'],
            ['¿Tiene condiciones para alquilar?', 'Puede haber requisitos para mantener beneficios', 'Resolución y asesor del propietario'],
            ['¿El propietario es persona física o empresa?', 'Cambia los impuestos de la renta', 'Contador del propietario'],
            ['¿Qué beneficios mantiene si se vende?', 'El comprador lo va a preguntar', 'Escribano'],
          ],
          note: 'Las condiciones cambiaron con el tiempo por decretos posteriores. Cada proyecto tiene las suyas.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Cada proyecto es distinto',
          html: 'Información general. Consultá con un escribano o contador antes de prometer un beneficio fiscal a un comprador o inquilino.',
        },
      ],
    },
    {
      id: 'inversores',
      h2: '¿Por qué los inversores en vivienda promovida son buenos clientes?',
      blocks: [
        {
          t: 'p',
          html: 'Porque suelen tener varias unidades, no viven en ellas y necesitan alquilarlas o revenderlas. Una captación puede traerte varias propiedades a la vez.',
        },
        {
          t: 'ul',
          items: [
            'Ofreceles alquiler y administración de todas sus unidades.',
            'Preparales un informe de alquileres parecidos en el barrio.',
            'Cuando quieran vender, ya sos su inmobiliaria de confianza.',
          ],
        },
        {
          t: 'p',
          html: 'Cómo ofrecer la administración, en <a href="/uruguay/administracion-de-propiedades-en-alquiler/">administración de propiedades en alquiler</a>.',
        },
      ],
    },
    {
      id: 'alquilar',
      h2: '¿Cómo alquilar una unidad promovida?',
      blocks: [
        {
          t: 'p',
          html: 'Como cualquier alquiler, pero verificando primero si la resolución del proyecto impone condiciones al alquiler y qué garantías aceptan el propietario y su asesor.',
        },
        {
          t: 'p',
          html: 'Algunas garantías con respaldo estatal tienen condiciones especiales para vivienda promovida. Repasalas en <a href="/uruguay/garantias-de-alquiler-uruguay/">garantías de alquiler en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'vender',
      h2: '¿Cómo vender una unidad promovida?',
      blocks: [
        {
          t: 'p',
          html: 'Con la documentación del régimen a mano. El comprador va a preguntar si conserva beneficios y si hay límites de precio o de uso.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Pedí la resolución', html: 'Y cualquier documento del promotor sobre las condiciones de la unidad.' },
            { title: 'Consultá al escribano', html: 'Sobre condiciones de reventa y beneficios que se trasladan.' },
            { title: 'Tasá con comparables', html: 'Preferentemente otras unidades promovidas del barrio.' },
            { title: 'Aclaralo en la publicación', html: 'Que es vivienda promovida y qué implica, sin prometer beneficios no confirmados.' },
          ],
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: honorarios por la reventa de una unidad de U$S 110.000',
          html: 'Números redondos e hipotéticos con el 3% más IVA habitual a cada parte.',
          rows: [
            ['Concepto', 'Monto'],
            ['Comisión del vendedor (110.000 × 3%)', 'U$S 3.300'],
            ['Comisión del comprador (110.000 × 3%)', 'U$S 3.300'],
            ['Honorarios totales sin IVA', 'U$S 6.600'],
          ],
        },
      ],
    },
    {
      id: 'zonas',
      h2: '¿Dónde hay más vivienda promovida?',
      blocks: [
        {
          t: 'p',
          html: 'Buena parte de los proyectos se concentró en barrios de Montevideo con buena conexión y precios intermedios, como Cordón, Centro, Tres Cruces o La Blanqueada, y también hay proyectos en Canelones y Maldonado. Revisá qué edificios promovidos hay en tu zona.',
        },
        {
          t: 'p',
          html: 'Para ver apartamentos publicados en una de esas zonas, mirá los de Tres Cruces en <a href="https://uy.casa-libre.com/venta/departamentos/montevideo/tres-cruces">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publicá las unidades promovidas',
      blocks: [
        {
          t: 'p',
          html: 'Decí en el título o en el primer párrafo que es vivienda promovida: muchos interesados la buscan así.',
        },
        {
          t: 'casalibre',
          title: 'Unidades promovidas en Casa-Libre',
          html: 'Publicás gratis cada unidad, para venta o alquiler, con ubicación en el mapa y consultas por WhatsApp. Sin comisión sobre la operación.',
          button: 'Publicar gratis',
          href: 'https://uy.casa-libre.com/publicar',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es una vivienda promovida en Uruguay?',
      a: 'Una vivienda construida o reciclada bajo la Ley 18.795, que da beneficios fiscales a los proyectos aprobados para promover la inversión en vivienda.',
    },
    {
      q: '¿Se puede alquilar una vivienda promovida?',
      a: 'Sí, muchos inversores las compraron para alquilar. Revisá la resolución del proyecto por si impone condiciones.',
    },
    {
      q: '¿Se puede revender una vivienda promovida?',
      a: 'Sí, pero puede haber condiciones según el proyecto. Consultá con un escribano antes de publicarla.',
    },
    {
      q: '¿Qué organismo se ocupa de la vivienda promovida?',
      a: 'La Agencia Nacional de Vivienda asesora a la comisión que otorga los beneficios del régimen.',
    },
  ],
  internalSources: [
    { label: 'Ley 18.795 (IMPO)', url: 'https://impo.com.uy/bases/leyes/18795-2011', date: '2026-11-13', note: 'Regime of vivienda de interés social.' },
    { label: 'Ferrere: decreto flexibiliza vivienda de interés social', url: 'https://www.ferrere.com/en/news/decreto-flexibiliza-el-mercado-y-facilita-el-acceso-a-la-vivienda-de-interes-social/', date: '2026-11-13', note: 'Decreto 129/020 changes (benefits for buyers who rent).' },
    { label: 'ANV: compra de vivienda promovida', url: 'https://anv.gub.uy/sites/default/files/2019-10/PPT_MVOTMA_COMPRA_DE_VIVIENDA_PROMOVIDA.pdf', date: '2026-11-13', note: 'Price-capped sales channelled through MVOT programme.' },
  ],
  closing: {
    title: 'Unidades promovidas, bien publicadas',
    text: 'Publicá gratis en Casa-Libre Uruguay y recibí consultas por WhatsApp.',
    button: 'Crear cuenta gratis',
    href: 'https://uy.casa-libre.com/empresas',
  },
  related: ['administracion-de-propiedades-en-alquiler', 'garantias-de-alquiler-uruguay', 'como-captar-propiedades-para-alquilar', 'mercado-inmobiliario-en-montevideo'],
};
