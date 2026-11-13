export default {
  slug: 'whatsapp-para-inmobiliarias',
  title: 'WhatsApp para inmobiliarias: mensajes y seguimiento',
  h1: 'WhatsApp para inmobiliarias: mensajes y seguimiento',
  description:
    'WhatsApp Business para inmobiliarias en Paraguay: configuración, mensajes para responder a un cliente, preguntas para calificar y seguimiento de los días 0, 2 y 7.',
  navLabel: 'WhatsApp',
  blurb: 'Configuración de WhatsApp Business, plantillas de respuesta y una secuencia de seguimiento para agentes inmobiliarios.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'none',
  answer:
    'Para una inmobiliaria en Paraguay, WhatsApp es el canal donde se responde, se califica y se sigue a cada cliente. Usá WhatsApp Business con perfil de empresa, catálogo, etiquetas y respuestas rápidas; respondé cada consulta en el día con disponibilidad y dos horarios de visita, y seguí con mensajes los días 2 y 7. En Casa-Libre las consultas de cada aviso llegan directo al WhatsApp del agente.',
  summary: [
    'WhatsApp Business permite perfil de empresa, catálogo, etiquetas, respuestas rápidas y mensajes de bienvenida y ausencia.',
    'La primera respuesta confirma disponibilidad, hace una pregunta y propone dos horarios.',
    'La secuencia de seguimiento sugerida es día 0, día 2 y día 7, cada mensaje con algo nuevo.',
    'Las consultas de Casa-Libre llegan por WhatsApp a tus agentes y los contactos son de la inmobiliaria.',
  ],
  cta: {
    title: 'Consultas directo a tu WhatsApp',
    text: 'Publicá tu cartera gratis en Casa-Libre y recibí cada consulta en el WhatsApp de tus agentes.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'configurar-whatsapp-business',
      h2: '¿Cómo configurar WhatsApp Business para una inmobiliaria?',
      blocks: [
        {
          t: 'p',
          html: 'Usá una cuenta de WhatsApp Business por agente o por línea de la inmobiliaria, con el nombre del negocio, y completá estas funciones antes de recibir la primera consulta.',
        },
        {
          t: 'table',
          caption: 'Funciones de WhatsApp Business útiles para inmobiliarias',
          head: ['Función', 'Para qué sirve', 'Ejemplo'],
          rows: [
            ['Perfil de empresa', 'Que el cliente sepa con quién habla', 'Nombre, dirección de la oficina, horario y enlace a tus avisos'],
            ['Catálogo', 'Mostrar propiedades dentro del chat', 'Una ficha por propiedad con foto, precio y enlace al aviso'],
            ['Etiquetas', 'Ordenar conversaciones por etapa', 'Nuevo, visita agendada, ofertó, cerrado'],
            ['Respuestas rápidas', 'Responder rápido sin reescribir', '/horarios, /papeles, /ubicacion'],
            ['Mensaje de bienvenida', 'Responder al primer contacto', 'Saludo y aviso de que respondés en breve'],
            ['Mensaje de ausencia', 'Fuera de horario', 'Cuándo vas a responder'],
            ['Listas de difusión', 'Novedades a quien las pidió', 'Ingresos nuevos en su zona'],
          ],
          note: 'Funciones disponibles en WhatsApp Business; los nombres pueden variar según la versión de la app.',
        },
        {
          t: 'p',
          html: 'En el perfil y en el catálogo, poné el enlace de tus avisos. Si tu inmobiliaria todavía no publica en línea, abrí la cuenta para inmobiliarias de <a href="https://casa-libre.com.py/empresas">Casa-Libre</a> y usá esos enlaces.',
        },
      ],
    },
    {
      id: 'como-llegan-las-consultas',
      h2: '¿Cómo llegan las consultas de Casa-Libre a WhatsApp?',
      blocks: [
        {
          t: 'p',
          html: 'Quien ve tu aviso toca el botón de contacto y se abre una conversación de WhatsApp con el agente. No hay formularios intermedios ni comisión: la consulta es tuya desde el primer mensaje.',
        },
        {
          t: 'p',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
        },
        {
          t: 'casalibre',
          title: 'Cada aviso, un acceso a tu WhatsApp',
          html: 'Con la cuenta para inmobiliarias, las consultas llegan al WhatsApp de tus agentes y los contactos son de la inmobiliaria. Publicás gratis, junto a los propietarios particulares, en la misma búsqueda y el mismo mapa.',
          button: 'Ver cómo funciona Casa-Libre',
          href: 'https://casa-libre.com.py/como-funciona',
        },
      ],
    },
    {
      id: 'como-responder-a-un-cliente',
      h2: '¿Cómo responder a un cliente inmobiliario por WhatsApp?',
      blocks: [
        {
          t: 'p',
          html: 'En el día, con un saludo, la confirmación de que la propiedad sigue disponible, una sola pregunta y dos horarios de visita. Estos tres mensajes son ejemplos ilustrativos para guardar como respuestas rápidas.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Venta:</strong> <em>"Hola, [nombre]. Soy [tu nombre], de [inmobiliaria]. El departamento de 2 dormitorios en Luque sigue disponible. ¿Lo buscás para vivir o para invertir? Te lo muestro el martes a las 17 o el sábado a las 10."</em>',
            '<strong>Alquiler:</strong> <em>"Hola, [nombre]. La casa en Lambaré sigue disponible. ¿Para cuántas personas sería y desde qué fecha? Puedo mostrártela mañana a las 18 o el jueves a las 9."</em>',
            '<strong>Ya no está disponible:</strong> <em>"Hola, [nombre]. Esa propiedad ya se vendió, pero tengo dos parecidas en la misma zona. ¿Te las mando?"</em>',
          ],
        },
        {
          t: 'p',
          html: 'Si alguien busca alquilar y no tenés nada en su zona, ofrecele opciones de los departamentos en alquiler en Asunción en Casa-Libre o de su ciudad, y anotalo para avisarle cuando entre algo tuyo.',
        },
      ],
    },
    {
      id: 'preguntas-para-calificar',
      h2: '¿Qué preguntas hacer para calificar al cliente por WhatsApp?',
      blocks: [
        {
          t: 'p',
          html: 'Cuatro o cinco, de a una por mensaje, a lo largo de la conversación. El detalle de cómo calificar y puntuar cada contacto está en <a href="/como-generar-leads-inmobiliarios/">cómo generar leads inmobiliarios</a>; acá van como respuestas rápidas.',
        },
        {
          t: 'ul',
          items: [
            '/para: "¿Lo buscás para vivir, para invertir o para alquilar a otros?"',
            '/zona: "¿Qué zonas te quedan mejor?"',
            '/presupuesto: "¿Qué presupuesto manejás, en guaraníes o en dólares?"',
            '/pago: "¿Sería al contado, con crédito o vendiendo otra propiedad?"',
            '/cuando: "¿Para cuándo lo necesitás?"',
          ],
        },
        {
          t: 'p',
          html: 'Si quien escribe es un propietario que quiere alquilar lo suyo, mandale la guía de Casa-Libre para alquilar una propiedad y ofrecé una reunión.',
        },
      ],
    },
    {
      id: 'secuencia-de-seguimiento',
      h2: '¿Cómo hacer seguimiento a clientes inmobiliarios?',
      blocks: [
        {
          t: 'p',
          html: 'Con pocos mensajes, cada uno con algo nuevo, y una despedida clara si no hay respuesta. Esta secuencia es una sugerencia, no una regla medida.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Día 0', html: '<em>"Te dejo el enlace del aviso con fotos y ubicación. ¿Te queda bien el sábado a las 10 para verla?"</em>' },
            { title: 'Día 2', html: '<em>"Hola, [nombre]. ¿Pudiste ver la información? Esta semana tengo libre el miércoles a la tarde y el viernes a la mañana."</em>' },
            { title: 'Día 7', html: '<em>"Hola, [nombre]. Te paso dos propiedades parecidas que entraron en tu zona. Si ya no estás buscando, avisame y no te escribo más."</em>' },
          ],
        },
        {
          t: 'p',
          html: 'Para el mensaje del día 7, buscá alternativas en el mapa de propiedades de <a href="https://casa-libre.com.py/propiedades">Casa-Libre</a> filtrando por la zona y el presupuesto del cliente.',
        },
      ],
    },
    {
      id: 'etiquetas-y-orden',
      h2: '¿Cómo ordenar las conversaciones con etiquetas?',
      blocks: [
        {
          t: 'p',
          html: 'Con una etiqueta por etapa y una revisión diaria. Así ves de un vistazo quién espera respuesta y a quién le toca seguimiento.',
        },
        {
          t: 'ul',
          items: [
            'Nuevo: consultó y todavía no calificaste.',
            'Calificado: sabés qué busca y su presupuesto.',
            'Visita agendada: con día y hora.',
            'Ofertó: hay una propuesta en curso.',
            'Cerrado o descartado: fin del seguimiento.',
          ],
        },
        {
          t: 'p',
          html: 'Cuando las conversaciones superan lo que podés seguir con etiquetas, pasalas a una planilla: la estructura está en <a href="/crm-inmobiliario-gratis/">CRM inmobiliario gratis</a>. Con la app de Casa-Libre para iPhone y Android tenés tus avisos en el mismo teléfono para copiar enlaces mientras chateás.',
        },
      ],
    },
    {
      id: 'buenas-practicas',
      h2: '¿Qué buenas prácticas seguir con WhatsApp?',
      blocks: [
        {
          t: 'p',
          html: 'Las que cuidan al cliente y a tu número: permiso, horarios razonables y mensajes útiles. Un número reportado muchas veces como no deseado puede quedar limitado.',
        },
        {
          t: 'ul',
          items: [
            'No agregues a nadie a grupos ni listas sin su permiso.',
            'Escribí en horario razonable, salvo que el cliente pida otra cosa.',
            'Preferí texto a audios largos para datos como precio y dirección.',
            'Si alguien pide que no le escribas, anotalo y cumplilo.',
          ],
        },
        {
          t: 'p',
          html: 'Para tener siempre algo nuevo que mandar, <a href="https://casa-libre.com.py/publicar">publicá cada propiedad nueva gratis en Casa-Libre</a> el mismo día que la captás. Para llevar esos avisos a otros canales, seguí con <a href="/como-publicar-propiedades-en-redes-sociales/">cómo publicar propiedades en redes sociales</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cómo usar WhatsApp Business en una inmobiliaria?',
      a: 'Completá el perfil de empresa, cargá el catálogo con tus propiedades, usá etiquetas por etapa y prepará respuestas rápidas. Configurá mensajes de bienvenida y de ausencia para que nadie quede sin respuesta.',
    },
    {
      q: '¿Qué mensajes mandar a clientes inmobiliarios?',
      a: 'Una primera respuesta con disponibilidad, una pregunta y dos horarios; un recordatorio a los 2 días y alternativas a los 7. Cada mensaje tiene que aportar algo nuevo.',
    },
    {
      q: '¿Cómo responder a un cliente inmobiliario?',
      a: 'En el día, con su nombre, confirmando si la propiedad sigue disponible y proponiendo una visita concreta. Si ya no está, ofrecé una parecida.',
    },
    {
      q: '¿Las consultas de Casa-Libre llegan por WhatsApp?',
      a: 'Sí. Quien ve el aviso escribe directo al WhatsApp del agente, sin comisión. Con la cuenta para inmobiliarias, los contactos son de la inmobiliaria.',
    },
  ],
  internalSources: [
    {
      label: 'Google suggest gl=py, "whatsapp business inmobiliaria"',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=whatsapp%20business%20inmobiliaria',
      date: '2026-11-12',
      note: 'Sugerencia exacta; "mensajes para clientes inmobiliarios", "como hacer seguimiento a clientes inmobiliarios" y "como responder a un cliente inmobiliario" sin sugerencias.',
    },
  ],
  closing: {
    title: 'Que cada aviso te escriba al WhatsApp',
    text: 'Publicá gratis en Casa-Libre y recibí las consultas directo, sin comisión.',
    button: 'Ir a Casa-Libre para inmobiliarias',
    href: 'https://casa-libre.com.py/empresas',
  },
  related: ['como-generar-leads-inmobiliarios', 'crm-inmobiliario-gratis', 'como-publicar-propiedades-en-redes-sociales', 'como-conseguir-clientes-inmobiliarios'],
};
