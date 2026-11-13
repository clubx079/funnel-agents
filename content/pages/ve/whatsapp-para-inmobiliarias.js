export default {
  slug: 'whatsapp-para-inmobiliarias',
  equivalent: 'whatsapp-para-inmobiliarias',
  group: 'Clientes y ventas',
  order: 30,
  title: 'WhatsApp para inmobiliarias: mensajes y seguimiento',
  h1: 'WhatsApp para inmobiliarias: mensajes y seguimiento',
  description:
    'WhatsApp para inmobiliarias y asesores en Venezuela: cómo configurar WhatsApp Business, mensajes modelo para responder consultas y una secuencia de seguimiento.',
  navLabel: 'WhatsApp inmobiliario',
  blurb: 'Configuración de WhatsApp Business, respuestas modelo y seguimiento de clientes para asesores en Venezuela.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer:
    'WhatsApp es el canal donde se cierran casi todas las conversaciones inmobiliarias en Venezuela. Para usarlo bien, configura WhatsApp Business con catálogo, etiquetas y respuestas rápidas, contesta cada consulta en minutos con precio, condominio y horario de visita, y haz seguimiento el mismo día, a los dos días y a la semana. En Casa-Libre las consultas de cada inmueble llegan directo a tu WhatsApp.',
  summary: [
    'Configura WhatsApp Business: perfil, catálogo de inmuebles, etiquetas por etapa y respuestas rápidas.',
    'La primera respuesta trae precio en dólares, condominio, servicios y dos opciones de horario para visitar.',
    'Seguimiento: día 0, día 2 y día 7, siempre con algo nuevo. Si el cliente pide no recibir mensajes, se respeta.',
    'En Casa-Libre los interesados escriben directo al WhatsApp del asesor, sin intermediarios.',
  ],
  cta: {
    title: 'Consultas directo a tu WhatsApp',
    text: 'Publica tu cartera gratis en Casa-Libre Venezuela y recibe cada consulta por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.ve/empresas',
  },
  sections: [
    {
      id: 'configurar',
      h2: '¿Cómo configurar WhatsApp Business para una inmobiliaria?',
      blocks: [
        {
          t: 'p',
          html: 'Con cinco ajustes que se hacen en una tarde. Separa el número del negocio del personal: así los contactos quedan en la inmobiliaria aunque un asesor se vaya.',
        },
        {
          t: 'table',
          caption: 'Configuración básica de WhatsApp Business para asesores',
          head: ['Función', 'Para qué sirve', 'Cómo usarla'],
          rows: [
            ['Perfil de empresa', 'Da confianza', 'Nombre, zona de trabajo, horario y enlace a tu cartera'],
            ['Catálogo', 'Mostrar inmuebles sin enviar fotos sueltas', 'Un artículo por inmueble con precio en dólares y enlace a la ficha'],
            ['Etiquetas', 'Saber en qué etapa está cada cliente', 'Nuevo, visita agendada, oferta, cerrado, propietario'],
            ['Respuestas rápidas', 'Responder en segundos', 'Atajos para precio, requisitos y horarios'],
            ['Mensaje de ausencia', 'No dejar a nadie sin respuesta', 'Dice cuándo vas a contestar'],
          ],
        },
      ],
    },
    {
      id: 'primera-respuesta',
      h2: '¿Cómo responder a un cliente inmobiliario por WhatsApp?',
      blocks: [
        {
          t: 'p',
          html: 'Rápido, con datos y con una pregunta que mueva la conversación. Quien pregunta por un apartamento suele estar escribiendo a varios asesores al mismo tiempo.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: respuesta a una consulta de venta',
          html: '«Hola, María, gracias por escribir. El apartamento de El Viñedo está en USD 52.000: 3 habitaciones, 2 baños, 1 puesto, condominio de USD 40 al día, tanque y planta en el edificio. ¿Lo quieres ver el miércoles a las 5 p. m. o el sábado a las 10 a. m.?»',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: respuesta a una consulta de alquiler',
          html: '«Hola, José. El anexo está en USD 250 al mes, amoblado, con agua por tanque. Para alquilar pedimos referencias y los documentos que te enumero si te interesa. ¿Te gustaría verlo esta semana?»',
        },
      ],
    },
    {
      id: 'calificar',
      h2: 'Preguntas para saber si el cliente es serio',
      blocks: [
        {
          t: 'p',
          html: 'Pocas y amables, después de dar la información. Te ayudan a priorizar visitas sin incomodar.',
        },
        {
          t: 'ol',
          items: [
            '¿Para cuándo necesitas mudarte o cerrar?',
            '¿Compras de contado o dependes de vender otro inmueble?',
            '¿En qué zonas estás buscando?',
            '¿Quién más decide la compra contigo?',
            '¿Vives en Venezuela o compras desde afuera?',
          ],
        },
      ],
    },
    {
      id: 'seguimiento',
      h2: 'Secuencia de seguimiento: día 0, 2 y 7',
      blocks: [
        {
          t: 'p',
          html: 'El seguimiento se pierde cuando es solo «¿qué te pareció?». Cada mensaje debe traer algo nuevo: otra opción, un video, una baja de precio o una fecha.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Día 0', html: 'Respuesta con datos y propuesta de visita.' },
            { title: 'Día 2', html: 'Un video corto del inmueble o una opción parecida.' },
            { title: 'Día 7', html: 'Novedad concreta y una pregunta: «¿Sigues buscando en esa zona?»' },
            { title: 'Después', html: 'Si no responde, guarda el contacto con su etiqueta y escríbele solo cuando tengas algo que encaje.' },
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Respeta los horarios',
          html: 'Escribe en horario de trabajo y deja de enviar mensajes a quien te pida no recibirlos. Un contacto molesto no vuelve.',
        },
      ],
    },
    {
      id: 'listas-y-estados',
      h2: 'Estados y listas de difusión',
      blocks: [
        {
          t: 'p',
          html: 'Los estados muestran tu cartera a quien ya tiene tu número; las listas de difusión llevan los inmuebles nuevos a clientes que pidieron recibirlos. Usa los dos sin saturar.',
        },
        {
          t: 'ul',
          items: [
            'Un inmueble por estado, con precio y enlace a la ficha.',
            'Listas por tipo de cliente: compradores de apartamento, inversores, inquilinos.',
            'Un envío por semana a cada lista es suficiente.',
          ],
        },
        {
          t: 'p',
          html: 'Para conseguir más contactos a quienes escribir, mira <a href="/venezuela/como-conseguir-clientes-inmobiliarios/">cómo conseguir clientes inmobiliarios</a> y <a href="/venezuela/referidos-inmobiliarios/">cómo pedir referidos</a>.',
        },
      ],
    },
    {
      id: 'casa-libre-whatsapp',
      h2: 'Cómo llegan las consultas de Casa-Libre a WhatsApp',
      blocks: [
        {
          t: 'p',
          html: 'Quien ve un inmueble en Casa-Libre toca el botón de WhatsApp y te escribe directo, con la ficha como referencia. Así sabes de qué inmueble te habla y puedes responder con tus mensajes modelo.',
        },
        {
          t: 'casalibre',
          title: 'Cada inmueble con su botón de WhatsApp',
          html: 'Publica gratis tu cartera en Casa-Libre Venezuela. Las consultas llegan al WhatsApp del asesor de cada inmueble y los contactos quedan en la inmobiliaria. Casa-Libre no cobra comisión sobre la venta ni el alquiler.',
          button: 'Ver la cuenta para inmobiliarias',
          href: 'https://casa-libre.com.ve/empresas',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Conviene usar WhatsApp Business para vender inmuebles?',
      a: 'Sí. Es gratis y trae catálogo, etiquetas, respuestas rápidas y mensaje de ausencia, que ordenan el trabajo diario del asesor.',
    },
    {
      q: '¿Qué mensaje enviar a un cliente inmobiliario?',
      a: 'Uno con datos: precio en dólares, metros, condominio, servicios y dos opciones de horario para visitar. Evita respuestas como «escríbeme por privado» o «depende».',
    },
    {
      q: '¿Cómo hacer seguimiento sin molestar?',
      a: 'Escribe solo cuando tengas algo nuevo, en horario de trabajo, y para quien te pida no recibir mensajes. Una secuencia de día 0, 2 y 7 suele bastar.',
    },
    {
      q: '¿Cómo me llegan las consultas de Casa-Libre?',
      a: 'Por WhatsApp. El interesado toca el botón en la ficha del inmueble y te escribe directo.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Path used: /empresas.' },
  ],
  closing: {
    title: 'Más consultas para tu WhatsApp',
    text: 'Publica gratis en Casa-Libre Venezuela.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['como-conseguir-clientes-inmobiliarios', 'referidos-inmobiliarios', 'manejo-de-objeciones-inmobiliarias', ''],
};
