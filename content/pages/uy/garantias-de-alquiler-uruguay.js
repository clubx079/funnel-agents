export default {
  slug: 'garantias-de-alquiler-uruguay',
  group: 'Captar propiedades',
  order: 40,
  title: 'Garantías de alquiler en Uruguay: guía para inmobiliarias',
  h1: 'Garantías de alquiler en Uruguay: cuáles hay y cómo explicarlas',
  description:
    'Garantías de alquiler en Uruguay para agentes: depósito en el BHU, Contaduría, Fondo de Garantía del MVOT, seguros y el alquiler sin garantía de la LUC.',
  navLabel: 'Garantías de alquiler',
  blurb: 'Las garantías de alquiler que se usan en Uruguay, qué le conviene a cada propietario y cómo explicarlas al inquilino.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Uruguayan escribano or inmobiliaria must confirm each guarantee as described: depósito de garantía in the BHU (in UR, amount customary, not stated); Servicio de Garantía de Alquileres of the Contaduría General de la Nación (who can use it); Fondo de Garantía de Alquileres of the MVOT with the ANV/CGN (types: común, jóvenes 18 to 29, retornados y extranjeros; caps and fees deliberately not stated); seguros de alquiler offered by insurers including the state insurer BSE (confirm the BSE product exists today); fianza/garantía real; and the LUC (Ley 19.889, 2020) "arrendamiento sin garantía" regime with shorter eviction periods (arts. ~421-459 per one source). Confirm nothing changed in 2025-2026.',
  answer:
    'En Uruguay las garantías de alquiler más usadas son el depósito en el BHU, la garantía de la Contaduría General de la Nación, el Fondo de Garantía de Alquileres del Ministerio de Vivienda, los seguros de alquiler y la fianza con una propiedad. Desde 2020 la LUC también permite alquilar sin garantía, con plazos de desalojo más cortos. Explicar bien cada una te ayuda a captar y a alquilar más rápido. Para publicar alquileres gratis, te recomendamos Casa-Libre.',
  summary: [
    'Garantías habituales: depósito en el BHU, Contaduría General de la Nación, Fondo de Garantía del MVOT, seguros de alquiler y fianza con propiedad.',
    'La LUC (Ley 19.889, 2020) creó el alquiler sin garantía, con plazos de desalojo más cortos si el inquilino no paga.',
    'Preguntá la garantía en el primer mensaje: te ahorra visitas que no terminan en contrato.',
    'Indicá en la publicación qué garantías acepta el propietario.',
  ],
  cta: {
    title: 'Publicá alquileres con la garantía clara',
    text: 'En Casa-Libre Uruguay publicás alquileres gratis y los interesados te escriben por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'cuales-hay',
      h2: '¿Qué garantías de alquiler hay en Uruguay?',
      blocks: [
        {
          t: 'p',
          html: 'Hay garantías públicas, privadas y la opción de alquilar sin garantía. Cada una protege distinto al propietario y tiene requisitos distintos para el inquilino.',
        },
        {
          t: 'table',
          caption: 'Garantías de alquiler en Uruguay',
          head: ['Garantía', 'Cómo funciona', 'A tener en cuenta'],
          rows: [
            ['Depósito en el BHU', 'El inquilino deposita un monto en el Banco Hipotecario, que queda como garantía', 'El inquilino necesita tener el dinero; se recupera al terminar'],
            ['Contaduría General de la Nación', 'El Estado garantiza el pago y lo descuenta del sueldo o la pasividad', 'Pensada para quienes cobran del Estado o por convenios'],
            ['Fondo de Garantía de Alquileres', 'Certificado con respaldo del Estado, del Ministerio de Vivienda con la ANV y la Contaduría', 'Tiene topes de alquiler y modalidades para jóvenes, retornados y extranjeros'],
            ['Seguro de alquiler', 'Una aseguradora garantiza el pago', 'Tiene un costo para el inquilino; el propietario debe aceptarla'],
            ['Fianza con propiedad', 'Un tercero responde con un inmueble', 'Cada vez menos usada; requiere estudio de títulos'],
            ['Sin garantía (LUC)', 'Contrato bajo el régimen de la Ley 19.889', 'Plazos de desalojo más cortos; requiere contrato con ese régimen'],
          ],
          note: 'Descripción general. Requisitos, topes y costos cambian: confirmalos en cada organismo antes de informarlos.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Confirmá las condiciones vigentes',
          html: 'Información general. Consultá con un escribano antes de firmar un contrato de alquiler o recomendar una garantía.',
        },
      ],
    },
    {
      id: 'propietario',
      h2: '¿Qué garantía le conviene al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'La que le asegura cobrar y recuperar la propiedad sin problemas. Muchos propietarios aceptan varias para no achicar la cantidad de interesados.',
        },
        {
          t: 'ul',
          items: [
            'Las garantías con respaldo del Estado dan tranquilidad, pero tienen topes y trámites.',
            'Los seguros son rápidos de tramitar, pero el propietario tiene que confiar en la aseguradora.',
            'El depósito es simple, aunque menos inquilinos tienen el dinero disponible.',
            'El alquiler sin garantía agranda el público, pero el propietario asume más riesgo inicial.',
          ],
        },
        {
          t: 'p',
          html: 'Ayudalo a decidir antes de publicar: es parte de <a href="/uruguay/como-captar-propiedades-para-alquilar/">cómo captar propiedades para alquilar</a>.',
        },
      ],
    },
    {
      id: 'sin-garantia',
      h2: '¿Cómo funciona el alquiler sin garantía de la LUC?',
      blocks: [
        {
          t: 'p',
          html: 'La Ley de Urgente Consideración de 2020 permite firmar un alquiler sin garantía, siempre que las partes lo pacten por escrito bajo ese régimen. A cambio, si el inquilino no paga o no se va al terminar el contrato, los plazos para el desalojo son más cortos que en el régimen común.',
        },
        {
          t: 'p',
          html: 'No reemplaza a la ley de alquileres anterior: es una alternativa. El contrato tiene que redactarse para ese régimen, así que dejalo en manos de un escribano.',
        },
      ],
    },
    {
      id: 'inquilino',
      h2: '¿Cómo explicarle las garantías al inquilino?',
      blocks: [
        {
          t: 'p',
          html: 'Con una lista clara de las que acepta el propietario y qué necesita para cada una. Es la primera pregunta que tenés que hacer en el chat.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Preguntá', html: '"¿Con qué garantía contás?"' },
            { title: 'Informá', html: '"El propietario acepta depósito, garantía estatal o seguro."' },
            { title: 'Orientá', html: 'Si no tiene ninguna, explicale dónde tramitarla y cuánto suele demorar.' },
          ],
        },
      ],
    },
    {
      id: 'ejemplo',
      h2: '¿Cuánto cuesta la garantía para el inquilino?',
      blocks: [
        {
          t: 'p',
          html: 'Depende de cada garantía y de cada organismo o aseguradora. Al inquilino le sirve ver el costo total de entrar, no solo el alquiler.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: costo de entrada de un alquiler de $ 25.000',
          html: 'Números redondos e hipotéticos. El costo de la garantía es un supuesto, no la tarifa de ningún organismo o aseguradora.',
          rows: [
            ['Concepto', 'Monto'],
            ['Primer mes de alquiler', '$ 25.000'],
            ['Comisión de la inmobiliaria: un mes más IVA (25.000 × 1,22)', '$ 30.500'],
            ['Costo de la garantía (supuesto)', '$ 10.000'],
            ['Total para entrar', '$ 65.500'],
          ],
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Publicá el alquiler con las garantías claras',
      blocks: [
        {
          t: 'p',
          html: 'Si la publicación dice qué garantías acepta el propietario, recibís consultas que pueden avanzar. Buscá alquileres parecidos en <a href="https://uy.casa-libre.com/alquilar">Casa-Libre</a> para ver cómo se presentan.',
        },
        {
          t: 'casalibre',
          title: 'Alquileres en Casa-Libre',
          html: 'Publicás alquileres gratis, en pesos o en dólares, y los interesados te escriben por WhatsApp. Si el propietario prefiere delegar, Casa-Libre también tiene una sección de administración de propiedades.',
          button: 'Ver administración de propiedades',
          href: 'https://uy.casa-libre.com/administracion-de-propiedades',
        },
        {
          t: 'p',
          html: 'Si además vas a administrar el alquiler, mirá <a href="/uruguay/administracion-de-propiedades-en-alquiler/">administración de propiedades en alquiler</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuál es la garantía de alquiler más usada en Uruguay?',
      a: 'No hay un dato oficial. Las más conocidas son el depósito en el BHU, la garantía de la Contaduría General de la Nación, el Fondo de Garantía de Alquileres y los seguros de alquiler.',
    },
    {
      q: '¿Se puede alquilar sin garantía en Uruguay?',
      a: 'Sí, bajo el régimen de la LUC de 2020, si las partes lo pactan por escrito. A cambio, los plazos de desalojo son más cortos.',
    },
    {
      q: '¿Hay garantía de alquiler para jóvenes?',
      a: 'El Fondo de Garantía de Alquileres del Ministerio de Vivienda tiene una modalidad para jóvenes. Confirmá requisitos y topes vigentes antes de informarlos.',
    },
    {
      q: '¿Puede un extranjero alquilar en Uruguay?',
      a: 'Sí. Hay garantías pensadas para extranjeros y uruguayos que regresan, además del depósito y los seguros.',
    },
    {
      q: '¿Quién elige la garantía?',
      a: 'El propietario decide cuáles acepta; el inquilino elige entre esas la que puede conseguir.',
    },
  ],
  internalSources: [
    { label: 'MVOT: Garantía de alquiler', url: 'https://www.gub.uy/ministerio-vivienda-ordenamiento-territorial/politicas-y-gestion/garantia-alquiler', date: '2026-11-13', note: 'Three types: común, jóvenes (18-29), retornados y extranjeros.' },
    { label: 'Trámite: Solicitud Fondo de Garantía de Alquiler', url: 'https://www.gub.uy/tramites/solicitud-fondo-garantia-alquiler', date: '2026-11-13', note: 'ANV with MVOT and CGN; caps in UR.' },
    { label: 'Trámite: Alquiler por Contaduría General de la Nación', url: 'https://www.gub.uy/tramites/alquiler-contaduria-general-nacion', date: '2026-11-13', note: 'CGN rental guarantee service.' },
    { label: 'LUC no-guarantee rentals (press, 2022)', url: 'https://www.elobservador.com.uy/nota/alquileres-luc-el-mecanismo-que-aun-no-mueve-la-aguja-y-es-una-vedette-de-la-campana-202231816210/amp', date: '2026-11-13', note: 'Ley 19.889 alternative regime with shorter eviction periods.' },
  ],
  closing: {
    title: 'Tu próximo alquiler, publicado hoy',
    text: 'Publicá alquileres gratis en Casa-Libre Uruguay y recibí consultas por WhatsApp.',
    button: 'Ver alquileres en Casa-Libre',
    href: 'https://uy.casa-libre.com/alquilar',
  },
  related: ['como-captar-propiedades-para-alquilar', 'administracion-de-propiedades-en-alquiler', 'comision-inmobiliaria-uruguay', 'mercado-inmobiliario-en-montevideo'],
};
