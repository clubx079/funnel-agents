export default {
  slug: 'contrato-de-exclusividad-inmobiliaria',
  equivalent: 'contrato-de-exclusividad-inmobiliaria',
  group: 'Precio y contratos',
  order: 30,
  title: 'Contrato de exclusividad inmobiliaria en Uruguay',
  h1: 'Contrato de exclusividad inmobiliaria en Uruguay',
  description:
    'Cómo pedir y redactar una exclusividad inmobiliaria en Uruguay: qué cláusulas incluir, qué ofrecer a cambio, plazos habituales y cómo cumplirle al propietario.',
  navLabel: 'Exclusividad',
  blurb: 'Cómo conseguir una autorización exclusiva en Uruguay, qué debe decir y qué plan ofrecerle al propietario a cambio.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Uruguayan escribano must confirm: that exclusivity is a contractual clause (no specific law), that it is common practice in Uruguay for properties to be offered by several agencies at once, that clauses such as fees owed if the owner sells directly during an exclusive term are customary and enforceable, and that the Ley 20.380 documentation requirement is correctly described.',
  answer:
    'Un contrato de exclusividad inmobiliaria en Uruguay es una autorización de venta o alquiler en la que el propietario se compromete a trabajar solo con tu inmobiliaria durante un plazo. No lo regula una ley específica: se acuerda por escrito. Para conseguirlo, ofrecé un plan concreto, informes de consultas y un plazo razonable. Cumplí publicando bien la propiedad desde el primer día; te recomendamos hacerlo gratis en Casa-Libre.',
  summary: [
    'La exclusividad es una cláusula de la autorización: solo vos ofrecés la propiedad durante un plazo.',
    'En Uruguay es común que una propiedad esté en varias inmobiliarias, así que la exclusividad se gana con un plan.',
    'Incluí plazo, honorarios, qué pasa si el propietario vende directo y cómo vas a informar.',
    'Cumplí lo prometido: publicá en el día en Casa-Libre y en tus canales, y mandá un informe semanal.',
  ],
  cta: {
    title: 'Cumplí tu plan de exclusividad',
    text: 'Publicá tus exclusivas gratis en Casa-Libre Uruguay y recibí las consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es una exclusividad inmobiliaria?',
      blocks: [
        {
          t: 'p',
          html: 'Es el compromiso del propietario de no encargar la venta o el alquiler a otra inmobiliaria durante un plazo. A cambio, vos te comprometés a invertir tiempo y dinero en mostrar la propiedad.',
        },
        {
          t: 'table',
          caption: 'Autorización exclusiva y compartida',
          head: ['Aspecto', 'Exclusiva', 'Compartida'],
          rows: [
            ['Quién ofrece', 'Solo tu inmobiliaria', 'Varias inmobiliarias a la vez'],
            ['Inversión en la propiedad', 'Te conviene invertir en fotos y publicidad', 'Arriesgás invertir y que venda otro'],
            ['Precio publicado', 'Un solo precio en todos los canales', 'A veces aparecen precios distintos'],
            ['Para el propietario', 'Un interlocutor y un plan', 'Más carteles, menos control'],
          ],
          note: 'Comparación de trabajo, sin datos estadísticos.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Revisá el texto',
          html: 'Información general. Consultá con un escribano antes de firmar un contrato de exclusividad.',
        },
      ],
    },
    {
      id: 'clausulas',
      h2: '¿Qué cláusulas tiene que tener?',
      blocks: [
        {
          t: 'p',
          html: 'Las mismas de una autorización de venta, más las que definen la exclusividad. Escribí todo lo que pueda generar un conflicto al final.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Plazo:</strong> fecha de inicio y de fin, y si se renueva.',
            '<strong>Alcance:</strong> si el propietario puede vender por su cuenta y, en ese caso, si se deben honorarios.',
            '<strong>Honorarios:</strong> porcentaje más IVA y cuándo se cobra.',
            '<strong>Compromisos de la inmobiliaria:</strong> fotos, canales, visitas e informes.',
            '<strong>Clientes presentados:</strong> qué pasa si al vencer el plazo compra alguien que vos presentaste.',
          ],
        },
        {
          t: 'p',
          html: 'La base está en <a href="/uruguay/autorizacion-de-venta-inmobiliaria/">autorización de venta inmobiliaria en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'como-pedirla',
      h2: '¿Cómo pedir la exclusividad sin perder la captación?',
      blocks: [
        {
          t: 'p',
          html: 'Pedila después de mostrar la tasación y el plan, nunca como primera condición. El propietario acepta cuando ve qué gana a cambio.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Mostrá el problema', html: 'Una propiedad en muchas inmobiliarias con precios distintos confunde al comprador.' },
            { title: 'Presentá tu plan', html: 'Fotos profesionales, publicación en el día, cartel y lista de clientes.' },
            { title: 'Ofrecé un plazo razonable', html: 'Uno corto con opción de renovar es más fácil de aceptar.' },
            { title: 'Comprometete a informar', html: 'Un resumen semanal de consultas y visitas.' },
          ],
        },
      ],
    },
    {
      id: 'cumplir',
      h2: '¿Cómo cumplirle al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'La exclusividad se renueva cuando el propietario ve trabajo. Medí y mostrá lo que hacés.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: informe semanal de una exclusiva',
          html: 'Formato sugerido con números hipotéticos, solo para mostrar qué informar.',
          rows: [
            ['Dato', 'Semana 1'],
            ['Consultas recibidas', '8'],
            ['Visitas realizadas', '3'],
            ['Comentarios repetidos', 'Precio alto frente a otro apartamento del edificio'],
            ['Próximo paso', 'Revisar precio en 15 días si no hay ofertas'],
          ],
        },
        {
          t: 'p',
          html: 'Si aparece una objeción de precio, tenés argumentos en <a href="/uruguay/manejo-de-objeciones-inmobiliarias/">manejo de objeciones inmobiliarias</a>.',
        },
      ],
    },
    {
      id: 'alquileres',
      h2: '¿Se usa exclusividad en alquileres?',
      blocks: [
        {
          t: 'p',
          html: 'Sí, sobre todo cuando además administrás el alquiler. El propietario prefiere un solo responsable que cobre, controle y resuelva.',
        },
        {
          t: 'p',
          html: 'Lo vemos en <a href="/uruguay/administracion-de-propiedades-en-alquiler/">administración de propiedades en alquiler</a>.',
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publicá tus exclusivas el mismo día',
      blocks: [
        {
          t: 'p',
          html: 'Lo primero que mira el propietario es si su propiedad aparece publicada y bien mostrada.',
        },
        {
          t: 'casalibre',
          title: 'Tus exclusivas en Casa-Libre',
          html: 'Publicás gratis, con búsqueda por barrio y en el mapa, y los interesados te escriben por WhatsApp. Si querés más visibilidad, el lugar destacado en la página principal es un extra opcional.',
          button: 'Publicar mis exclusivas',
          href: 'https://uy.casa-libre.com/empresas',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Es obligatoria la exclusividad en Uruguay?',
      a: 'No. Es una opción que se pacta con el propietario. Muchas propiedades se trabajan con varias inmobiliarias a la vez.',
    },
    {
      q: '¿Cuánto dura una exclusividad?',
      a: 'Lo que se acuerde por escrito. Un plazo corto con renovación suele ser más fácil de conseguir.',
    },
    {
      q: '¿Qué pasa si el propietario vende solo durante la exclusiva?',
      a: 'Depende del contrato. Es habitual pactar que igual se deben los honorarios; escribilo con claridad.',
    },
    {
      q: '¿Puedo compartir una exclusiva con colegas?',
      a: 'Sí, si el contrato lo permite. Acordá por escrito con el colega cómo se reparten los honorarios.',
    },
  ],
  internalSources: [
    { label: 'Ley 20.380 (IMPO), art. 6', url: 'https://www.impo.com.uy/bases/leyes-originales/20380-2024', date: '2026-11-13', note: 'Documented agreement with the client.' },
  ],
  closing: {
    title: 'Mostrá resultados desde el primer día',
    text: 'Publicá gratis en Casa-Libre Uruguay y recibí consultas por WhatsApp.',
    button: 'Publicar gratis',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['autorizacion-de-venta-inmobiliaria', 'como-captar-propiedades', 'manejo-de-objeciones-inmobiliarias', 'comision-inmobiliaria-uruguay'],
};
