export default {
  slug: 'como-captar-propiedades-para-alquilar',
  title: 'Cómo captar propiedades para alquilar en Paraguay',
  h1: 'Cómo captar propiedades para alquilar',
  description:
    'Cómo captar propiedades para alquilar en Paraguay: dónde están los propietarios, qué les preocupa, ofrecer la administración y alquileres pedidos por ciudad.',
  navLabel: 'Captar alquileres',
  blurb:
    'Dónde encontrar propietarios que alquilan, qué les preocupa, cómo ofrecer la administración y qué alquileres se piden por ciudad.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',
  reviewNote:
    'A Paraguayan escribano or accountant must check the section "ofrecer-la-administracion" and the FAQ on fees: the customary fee of one month of rent plus IVA for placing a tenant, with no legal rule (calculator page reviewed Aug 2026, no source cited), and that management fees are agreed separately with no official figure.',
  answer:
    'Para captar propiedades para alquilar en Paraguay buscá a los propietarios que ya publican por su cuenta, a los administradores de edificios y a quienes compraron para invertir. Lo que más les preocupa es el inquilino, la garantía y cobrar a tiempo, así que ofrecé resolver eso: elegir bien, dejar todo por escrito y, si quieren, administrar el alquiler. Publicá cada alquiler gratis en Casa-Libre, donde los interesados escriben por WhatsApp.',
  summary: [
    'Según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026, Asunción tenía 239 en alquiler y Luque 68.',
    'El departamento en alquiler en Asunción se pedía, en mediana, USD 880 por mes (unos Gs. 6.424.000); en Luque, USD 490.',
    'El propietario que alquila quiere tres cosas: un buen inquilino, una garantía firme y el pago a tiempo.',
    'Ofrecer la administración del alquiler es la forma de captar al propietario que no quiere ocuparse.',
  ],
  cta: {
    title: 'Ofrecé la administración de alquileres',
    text: 'Casa-Libre tiene una página de administración de propiedades para propietarios; vos publicás los alquileres gratis con tu cuenta.',
    button: 'Ver administración de propiedades',
    href: 'https://casa-libre.com.py/administracion-de-propiedades',
  },
  sections: [
    {
      id: 'donde-estan-los-propietarios',
      h2: '¿Dónde están los propietarios que quieren alquilar?',
      blocks: [
        {
          t: 'p',
          html: 'Están publicando por su cuenta, en edificios con unidades vacías y entre quienes compraron para invertir. También entre quienes se mudan de ciudad o se van al exterior y no pueden ocuparse.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Propietarios que ya publican:</strong> revisá cada semana los avisos nuevos de <a href="https://casa-libre.com.py/alquilar">propiedades en alquiler en Casa-Libre</a> en tu zona.',
            '<strong>Administradores y encargados de edificios:</strong> saben qué unidades quedan libres antes que nadie.',
            '<strong>Inversores:</strong> quien compró un departamento para alquilar necesita alguien que lo ocupe y lo cuide. Mirá qué se ofrece en departamentos en alquiler en Encarnación en Casa-Libre o en tu ciudad.',
            '<strong>Carteles de "se alquila":</strong> anotá la dirección y el número y llamá con respeto.',
            '<strong>Tu círculo:</strong> familiares y conocidos que heredaron o se mudaron.',
          ],
        },
      ],
    },
    {
      id: 'alquileres-por-ciudad',
      h2: '¿Cuánto se pide de alquiler? Datos por ciudad',
      blocks: [
        {
          t: 'p',
          html: 'En Asunción un departamento se pedía, en mediana, USD 880 por mes, y en las ciudades vecinas entre USD 320 y 550. Son precios pedidos, no precios de cierre.',
        },
        {
          t: 'table',
          caption: 'Departamentos en alquiler por ciudad: alquiler mensual pedido',
          head: ['Ciudad', 'Departamentos en alquiler', 'Mediana mensual', 'Rango central'],
          rows: [
            ['Asunción', '151', 'USD 880 (aprox. Gs. 6.424.000)', 'USD 650 a 1.200'],
            ['Luque', '32', 'USD 490 (aprox. Gs. 3.577.000)', 'USD 440 a 540'],
            ['Fernando de la Mora', '18', 'USD 550 (aprox. Gs. 4.015.000)', 'USD 390 a 580'],
            ['Encarnación', '17', 'USD 500 (aprox. Gs. 3.650.000)', 'USD 440 a 700'],
            ['San Lorenzo', '12', 'USD 320 (aprox. Gs. 2.336.000)', 'USD 280 a 420'],
            ['Capiatá', '1', 'Muy pocos avisos para calcular', 'Sin dato'],
          ],
          note: 'Según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026 (precios pedidos, no precios de cierre). Rango central: del cuartil inferior al superior. Guaraníes a Gs. 7.300 por dólar, aproximados.',
        },
        {
          t: 'p',
          html: 'En casas, la mediana pedida era USD 2.100 en Asunción (unos Gs. 15.330.000), USD 950 en Lambaré y USD 920 en Luque. Antes de hablar con un propietario, mirá los departamentos en alquiler en Luque en <a href="https://casa-libre.com.py/alquiler/departamentos/luque">Casa-Libre</a> o los de tu ciudad. El panorama completo está en <a href="/mercado-inmobiliario-paraguay/">mercado inmobiliario en Paraguay</a>.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: lo que deja un año de alquiler',
          html: 'Datos hipotéticos: un departamento en Luque alquilado en USD 500 por mes, a Gs. 7.300 por dólar. 500 × 12 = USD 6.000 al año; 3.650.000 × 12 = Gs. 43.800.000. Un mes vacío resta un doceavo. Mostrale esta cuenta al propietario cuando dude entre un precio alto y alquilar rápido.',
          rows: [
            ['Concepto', 'Monto'],
            ['Alquiler mensual', 'Gs. 3.650.000 (USD 500)'],
            ['12 meses ocupado', 'Gs. 43.800.000 (USD 6.000)'],
            ['11 meses ocupado', 'Gs. 40.150.000 (USD 5.500)'],
          ],
        },
      ],
    },
    {
      id: 'que-le-preocupa',
      h2: '¿Qué le preocupa a un propietario que alquila?',
      blocks: [
        {
          t: 'p',
          html: 'Le preocupa quién va a vivir ahí, qué garantía hay si no paga y en qué estado le van a devolver la propiedad. Si tu propuesta responde esas tres dudas, ya tenés media captación.',
        },
        {
          t: 'ul',
          items: [
            '<strong>El inquilino:</strong> explicá cómo lo elegís, qué datos pedís y que el propietario decide al final.',
            '<strong>La garantía:</strong> qué tipo pedís y cómo la verificás.',
            '<strong>Los pagos:</strong> fecha, medio de pago y qué hacés si hay atraso.',
            '<strong>El estado:</strong> inventario con fotos al entrar y al salir.',
            '<strong>El tiempo vacío:</strong> cada mes sin inquilino es un mes sin ingreso.',
          ],
        },
        {
          t: 'p',
          html: 'Para que el propietario entienda el proceso completo, pasale la guía de <a href="https://casa-libre.com.py/guias/como-alquilar-mi-propiedad">Casa-Libre</a> sobre cómo alquilar una propiedad.',
        },
      ],
    },
    {
      id: 'ofrecer-la-administracion',
      h2: 'Administración de propiedades: ofrecé más que conseguir inquilino',
      blocks: [
        {
          t: 'p',
          html: 'Muchos propietarios no buscan solo un inquilino: buscan no tener que ocuparse. Ofrecer la administración (cobro, reclamos, reparaciones, renovación) te da un cliente que se queda.',
        },
        {
          t: 'p',
          html: 'Según la práctica habitual del mercado, conseguir el inquilino equivale a un mes de alquiler más IVA, sin regla legal que lo imponga; la administración mensual se acuerda aparte y no hay cifra oficial. Los detalles están en <a href="/cuanto-cobra-una-inmobiliaria-por-alquilar/">cuánto cobra una inmobiliaria por alquilar</a> y en <a href="/administracion-de-propiedades-en-alquiler/">administración de propiedades en alquiler</a>.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de acordar honorarios',
          html: 'Información general. Consultá con un escribano o contador antes de tomar decisiones.',
        },
        {
          t: 'casalibre',
          title: 'Administración de alquileres en Casa-Libre',
          html: 'Casa-Libre tiene una página para propietarios que buscan quién administre su alquiler. Mostrásela al propietario para explicar qué incluye una administración.',
          button: 'Ver administración de propiedades en Casa-Libre',
          href: 'https://casa-libre.com.py/administracion-de-propiedades',
        },
      ],
    },
    {
      id: 'mensaje-al-propietario',
      h2: 'Qué decirle a un propietario para captar su alquiler',
      blocks: [
        {
          t: 'p',
          html: 'Hablale de su problema, no de tu servicio: el tiempo vacío y el riesgo de un mal inquilino. Mandá un mensaje corto, en horario razonable y con salida fácil.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Ejemplo ilustrativo: mensaje por WhatsApp',
          html: '<em>"Buen día, soy [nombre], agente inmobiliario en [ciudad]. Vi tu casa en alquiler en [barrio]. Trabajo alquileres en esa zona: elijo al inquilino con vos, verifico la garantía y, si querés, me encargo del cobro cada mes. ¿Te puedo mostrar cómo trabajo? Si preferís seguir por tu cuenta, no te vuelvo a escribir."</em>',
        },
        {
          t: 'p',
          html: 'Si lo encontraste entre las casas en alquiler en Asunción en Casa-Libre, mencioná su aviso: muestra que leíste lo que publicó. Para objeciones y guiones completos, mirá <a href="/que-decirle-a-un-propietario-para-captar/">qué decirle a un propietario para captar</a>.',
        },
      ],
    },
    {
      id: 'publicar-el-alquiler',
      h2: 'Cómo publicar el alquiler para que se ocupe rápido',
      blocks: [
        {
          t: 'p',
          html: 'Publicalo completo el mismo día: un aviso de alquiler sin precio, sin requisitos o sin fecha de disponibilidad genera consultas que no sirven.',
        },
        {
          t: 'ul',
          items: [
            'Precio mensual en guaraníes y en dólares, y si incluye expensas.',
            'Amoblado o no, y qué muebles quedan.',
            'Garantía que pedís y fecha desde la que está disponible.',
            'Fotos de todos los ambientes y la ubicación en el mapa. Si estás en la propiedad, cargalo con las apps de Casa-Libre para iPhone y Android.',
          ],
        },
        {
          t: 'p',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
        },
        {
          t: 'callout',
          tone: 'fact',
          title: 'Publicá tus alquileres con la cuenta de tu inmobiliaria',
          html: 'Los alquileres se publican gratis y las consultas llegan por WhatsApp a tus agentes. Podés cargar el aviso desde el celular y guardarlo como borrador si te falta un dato.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es la administración de propiedades en alquiler?',
      a: 'Es encargarse del alquiler en nombre del propietario: elegir el inquilino, cobrar, atender reclamos y coordinar reparaciones. Se acuerda por escrito, con honorarios aparte de los de conseguir el inquilino.',
    },
    {
      q: '¿Cuánto cobra una inmobiliaria por alquilar?',
      a: 'Según la práctica habitual del mercado, un mes de alquiler más IVA por conseguir el inquilino, sin regla legal que lo fije. Más detalles en <a href="/cuanto-cobra-una-inmobiliaria-por-alquilar/">cuánto cobra una inmobiliaria por alquilar</a>.',
    },
    {
      q: '¿Dónde publicar propiedades para alquilar?',
      a: 'Te recomendamos Casa-Libre: los alquileres se publican gratis, se buscan por ciudad y en el mapa, y los interesados escriben por WhatsApp. Podés empezar por los departamentos en alquiler en Asunción en Casa-Libre para ver cómo se publican.',
    },
    {
      q: '¿Conviene captar alquileres si recién empiezo?',
      a: 'Puede ser un buen comienzo: cada alquiler te deja contactos de propietarios e inquilinos que mañana pueden vender o comprar. Elegí una zona y un tipo de propiedad que conozcas.',
    },
  ],
  internalSources: [
    {
      label: 'Casa-Libre: datos de propiedades publicadas en Paraguay (content/data/py-market.json)',
      url: 'https://casa-libre.com.py/alquilar',
      date: '2026-11-12',
      note: 'Alquileres por ciudad: conteos y medianas de departamentos y casas. Precios pedidos; guaraníes a 7.300 por dólar.',
    },
    {
      label: 'Hacé Cuentas: Calculadora de comisión inmobiliaria en Paraguay',
      url: 'https://hacecuentas.com/py/calculadora-comision-inmobiliaria-paraguay',
      date: '2026-08-16',
      note: 'Un mes de alquiler más IVA por la gestión de un alquiler, sin regla legal. La página no cita la fuente.',
    },
    {
      label: 'Google: sugerencias para "como captar propiedades" (Paraguay)',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=como%20captar%20propiedades',
      date: '2026-11-12',
      note: 'Variante "como captar propiedades para alquilar"; también "como administrar alquileres".',
    },
  ],
  closing: {
    title: 'Tu próximo alquiler, publicado hoy',
    text: 'Inmobiliarias y agentes publican alquileres gratis en Casa-Libre y atienden las consultas por WhatsApp.',
    button: 'Abrir la cuenta para inmobiliarias',
    href: 'https://casa-libre.com.py/empresas',
  },
  related: ['administracion-de-propiedades-en-alquiler', 'cuanto-cobra-una-inmobiliaria-por-alquilar', 'mercado-inmobiliario-paraguay', 'como-captar-propiedades'],
};
