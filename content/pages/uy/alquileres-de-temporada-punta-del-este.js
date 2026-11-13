export default {
  slug: 'alquileres-de-temporada-punta-del-este',
  group: 'Captar propiedades',
  order: 50,
  title: 'Alquileres de temporada en Punta del Este: guía para agentes',
  h1: 'Alquileres de temporada en Punta del Este',
  description:
    'Cómo captar y gestionar alquileres de temporada en Punta del Este: calendario, inventario, reserva, cobro en dólares y qué dice la ley del operador.',
  navLabel: 'Alquiler de temporada',
  blurb: 'Cómo captar, publicar y gestionar alquileres de verano en Punta del Este y la Costa uruguaya.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'Verify: Ley 20.380 art. 13 (operators offering seasonal/temporary rentals to tourists are considered tourist real-estate service providers under Ley 19.253 and must meet Ministerio de Turismo requirements); status of the related Mintur regulation/registry; that seasonal rentals are customarily priced in dollars; that seasonal leases fall outside the general urban lease regime (not stated as fact on the page, only "tiene reglas propias", confirm). No prices, occupancy or season dates stated beyond "verano".',
  answer:
    'Los alquileres de temporada en Punta del Este se captan antes del verano, se publican con fotos, capacidad, distancia a la playa y precio por período en dólares, y se gestionan con reserva, inventario y depósito. La Ley 20.380 considera a los operadores que alquilan a turistas prestadores de servicios turísticos inmobiliarios, sujetos a requisitos del Ministerio de Turismo. Para publicar alquileres de temporada gratis, te recomendamos Casa-Libre.',
  summary: [
    'Captá antes de la temporada: los propietarios definen el verano con meses de anticipación.',
    'Publicá por período (quincena, mes, temporada) y en dólares, con capacidad y distancia a la playa.',
    'Gestioná con reserva escrita, inventario firmado y depósito por roturas.',
    'Si alquilás a turistas, revisá los requisitos del Ministerio de Turismo según la Ley 20.380.',
  ],
  cta: {
    title: 'Tus alquileres de verano, publicados',
    text: 'En Casa-Libre Uruguay publicás alquileres gratis y recibís consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'como-funciona',
      h2: '¿Cómo funciona el alquiler de temporada en Punta del Este?',
      blocks: [
        {
          t: 'p',
          html: 'Se alquila por períodos cortos durante el verano, con precio cerrado por el período y pago anticipado. El propietario suele ser alguien que usa la casa parte del año o que vive en el exterior.',
        },
        {
          t: 'table',
          caption: 'Alquiler de temporada y alquiler anual',
          head: ['Aspecto', 'Temporada', 'Anual'],
          rows: [
            ['Plazo', 'Quincena, mes o temporada', 'Contrato de más largo plazo'],
            ['Moneda habitual', 'Dólares', 'Pesos'],
            ['Pago', 'Reserva y saldo antes de entrar', 'Mensual'],
            ['Garantía', 'Depósito por roturas', 'Garantía de alquiler'],
            ['Amueblado', 'Siempre, con vajilla y ropa de cama según acuerdo', 'Generalmente sin amueblar'],
          ],
          note: 'Práctica habitual. Cada contrato fija sus condiciones.',
        },
      ],
    },
    {
      id: 'ley',
      h2: '¿Qué dice la ley sobre el alquiler a turistas?',
      blocks: [
        {
          t: 'p',
          html: 'La Ley 20.380 del operador inmobiliario establece que quien ofrece alquileres de temporada o transitorios a turistas se considera prestador de servicios turísticos inmobiliarios, y tiene que cumplir los requisitos que fije el Ministerio de Turismo.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Requisitos en cambio',
          html: 'Información general. La reglamentación de estos registros estaba en discusión al cierre de esta guía. Consultá con un escribano y en el Ministerio de Turismo antes de la temporada.',
        },
      ],
    },
    {
      id: 'captar',
      h2: '¿Cómo captar alquileres de temporada?',
      blocks: [
        {
          t: 'p',
          html: 'Empezá meses antes del verano. Los propietarios que no alquilaron el año anterior o que tuvieron problemas con inquilinos son tu mejor oportunidad.',
        },
        {
          t: 'ul',
          items: [
            'Recorré tu zona: Punta del Este, La Barra, Manantiales, Maldonado o los balnearios de Canelones.',
            'Contactá a los propietarios que viven en el exterior: necesitan alguien de confianza en el lugar.',
            'Ofrecé gestión completa: publicación, check-in, inventario, limpieza y cobro.',
            'Mantené contacto con los inquilinos del verano anterior: muchos repiten.',
          ],
        },
      ],
    },
    {
      id: 'publicar',
      h2: '¿Qué tiene que tener la publicación?',
      blocks: [
        {
          t: 'p',
          html: 'Lo que el turista pregunta antes de reservar: cuántos entran, qué tan lejos está la playa, qué incluye y cuánto cuesta cada período.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Capacidad', html: 'Dormitorios, camas y cuántas personas.' },
            { title: 'Ubicación', html: 'Distancia a la playa y a los servicios, con punto en el mapa.' },
            { title: 'Equipamiento', html: 'Parrillero, piscina, aire acondicionado, wifi, ropa de cama.' },
            { title: 'Precio por período', html: 'En dólares, por quincena, mes o temporada.' },
            { title: 'Condiciones', html: 'Reserva, depósito, horario de entrada y salida, mascotas.' },
          ],
        },
        {
          t: 'p',
          html: 'Para ver cómo se presentan, mirá los apartamentos en alquiler en Punta del Este publicados en <a href="https://uy.casa-libre.com/alquiler/departamentos/punta-del-este">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'gestion',
      h2: '¿Cómo gestionar la reserva y la entrega?',
      blocks: [
        {
          t: 'p',
          html: 'Con todo por escrito: reserva, inventario y estado de la casa. Así evitás discusiones sobre roturas al final.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: una quincena de U$S 3.000',
          html: 'Números redondos e hipotéticos. La seña, el depósito y tu honorario se acuerdan en cada caso.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio de la quincena', 'U$S 3.000'],
            ['Reserva al confirmar (supuesto 50%)', 'U$S 1.500'],
            ['Saldo antes de entrar', 'U$S 1.500'],
            ['Depósito por roturas (supuesto, se devuelve)', 'U$S 500'],
            ['Tu honorario si cobrás un 10% al propietario (supuesto)', 'U$S 300 más IVA'],
          ],
        },
      ],
    },
    {
      id: 'fuera-de-temporada',
      h2: '¿Qué hacer fuera de temporada?',
      blocks: [
        {
          t: 'p',
          html: 'Ofrecé al propietario alquileres de invierno más largos o la venta. Muchas captaciones de venta en la Costa empiezan como alquileres de temporada.',
        },
        {
          t: 'p',
          html: 'Tenés más ideas en <a href="/uruguay/como-captar-propiedades-para-alquilar/">cómo captar propiedades para alquilar</a> y en <a href="/uruguay/comprar-propiedad-en-uruguay-siendo-extranjero/">compradores extranjeros en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'casa-libre',
      h2: 'Publicá tus alquileres de temporada',
      blocks: [
        {
          t: 'p',
          html: 'Cuanto antes publiques, más opciones tenés de cerrar las mejores fechas.',
        },
        {
          t: 'casalibre',
          title: 'Alquileres en Punta del Este en Casa-Libre',
          html: 'Publicás gratis, en dólares o en pesos, con ubicación en el mapa. Los interesados te escriben por WhatsApp, también desde las apps para iPhone y Android.',
          button: 'Ver alquileres en Casa-Libre',
          href: 'https://uy.casa-libre.com/alquilar',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuándo empezar a publicar alquileres de temporada?',
      a: 'Con meses de anticipación al verano. Muchos turistas reservan temprano, sobre todo las fechas de fin de año y enero.',
    },
    {
      q: '¿En qué moneda se cobra el alquiler de temporada?',
      a: 'Lo habitual es en dólares, con reserva al confirmar y saldo antes de entrar.',
    },
    {
      q: '¿Hace falta registrarse en el Ministerio de Turismo?',
      a: 'La Ley 20.380 dice que quien alquila a turistas debe cumplir los requisitos del Ministerio de Turismo. Confirmá los vigentes antes de la temporada.',
    },
    {
      q: '¿Qué incluye el inventario?',
      a: 'Una lista firmada de muebles, electrodomésticos, vajilla y su estado, con fotos. Se revisa a la salida.',
    },
  ],
  internalSources: [
    { label: 'Ley 20.380 (IMPO), art. 13', url: 'https://www.impo.com.uy/bases/leyes/20380-2024/13', date: '2026-11-13', note: 'Seasonal tourist rentals: tourist real-estate service providers under Ley 19.253; Mintur requirements.' },
    { label: 'Ámbito: reglamentación de alquileres turísticos demorada', url: 'https://www.ambito.com/uruguay/la-reglamentacion-la-ley-alquileres-turisticos-se-demora-y-el-sector-reclama-mayor-celeridad-n6295417', date: '2026-11-13', note: 'Regulation pending per press.' },
  ],
  closing: {
    title: 'El verano se capta antes',
    text: 'Publicá tus alquileres de temporada gratis en Casa-Libre Uruguay.',
    button: 'Ver administración de propiedades',
    href: 'https://uy.casa-libre.com/administracion-de-propiedades',
  },
  related: ['como-captar-propiedades-para-alquilar', 'administracion-de-propiedades-en-alquiler', 'comprar-propiedad-en-uruguay-siendo-extranjero', 'mercado-inmobiliario-en-punta-del-este'],
};
