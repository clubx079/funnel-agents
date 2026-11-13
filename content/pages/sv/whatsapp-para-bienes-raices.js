export default {
  slug: 'whatsapp-para-bienes-raices',
  equivalent: 'whatsapp-para-inmobiliarias',
  group: 'Clientes y ventas',
  order: 30,
  title: 'WhatsApp para bienes raíces: mensajes y seguimiento',
  h1: 'WhatsApp para bienes raíces: mensajes y seguimiento',
  description:
    'Cómo usar WhatsApp en bienes raíces en El Salvador: configurar WhatsApp Business, mensajes modelo para responder y una secuencia de seguimiento de siete días.',
  navLabel: 'WhatsApp',
  blurb: 'Configuración de WhatsApp Business, mensajes modelo y una secuencia de seguimiento para agentes de bienes raíces en El Salvador.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'Practice page. A native Salvadoran reader should check the sample messages (usted register, greetings, time references) and that WhatsApp Business features named (catalog, labels, quick replies, away message) still exist as described.',
  answer:
    'WhatsApp es el canal donde un agente de bienes raíces en El Salvador responde, califica y da seguimiento a sus clientes, aquí y en el exterior. Configure WhatsApp Business con catálogo, etiquetas y respuestas rápidas, conteste en minutos con precio, zona y propuesta de visita, y escriba de nuevo a los dos y a los siete días. Las consultas de los anuncios publicados en Casa-Libre llegan directo a su WhatsApp.',
  summary: [
    'Configure WhatsApp Business: perfil completo, horario, etiquetas y respuestas rápidas.',
    'Primera respuesta en minutos, con precio, zona y una pregunta para calificar.',
    'Seguimiento: día 0, día 2 y día 7, siempre con algo nuevo que decir.',
    'Las consultas de Casa-Libre llegan directo a su WhatsApp, sin intermediarios.',
  ],
  cta: {
    title: 'Consultas directo a su WhatsApp',
    text: 'En Casa-Libre El Salvador los interesados escriben directo al WhatsApp de su inmobiliaria.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'configurar',
      h2: '¿Cómo configurar WhatsApp Business para bienes raíces?',
      blocks: [
        {
          t: 'p',
          html: 'Use WhatsApp Business, no su número personal, y complete el perfil antes de publicar anuncios. Cinco ajustes bastan.',
        },
        {
          t: 'table',
          caption: 'Configuración básica de WhatsApp Business',
          head: ['Ajuste', 'Qué poner'],
          rows: [
            ['Perfil', 'Nombre de su inmobiliaria, foto clara, zona de trabajo'],
            ['Horario', 'Horas reales de atención; fuera de horario, mensaje automático'],
            ['Mensaje de bienvenida', 'Saludo corto y una pregunta para saber qué busca'],
            ['Etiquetas', 'Nuevo, calificado, visita, oferta, propietario, exterior'],
            ['Respuestas rápidas', 'Precio, ubicación, requisitos de crédito, agenda de visita'],
          ],
        },
      ],
    },
    {
      id: 'primera-respuesta',
      h2: 'Cómo responder la primera consulta',
      blocks: [
        {
          t: 'p',
          html: 'La primera respuesta debe dar lo que el cliente pidió y abrir la siguiente conversación. Si tarda horas, el cliente ya habló con otro agente.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: primera respuesta a una consulta',
          html: '"Buenas tardes, gracias por escribir. La casa en el residencial de Santa Tecla está disponible: 3 habitaciones, 2 baños, parqueo para 2 vehículos, US$ 135.000. ¿La compra sería con banco, con el FSV o de contado? Si le parece, coordinamos una visita esta semana."',
        },
        {
          t: 'p',
          html: 'Las consultas de los anuncios publicados en <a href="https://sv.casa-libre.com/publicar">Casa-Libre</a> llegan a su WhatsApp con el anuncio de referencia, así sabe de qué propiedad le hablan.',
        },
      ],
    },
    {
      id: 'mensajes-modelo',
      h2: 'Mensajes modelo para cada situación',
      blocks: [
        {
          t: 'p',
          html: 'Guárdelos como respuestas rápidas y ajústelos a cada cliente. Todos son ejemplos ilustrativos.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Confirmar visita:</strong> "Le confirmo la visita mañana a las 10:00. Le comparto la ubicación. Si se atrasa, avíseme por aquí."',
            '<strong>Cliente en el exterior:</strong> "Con gusto le muestro la casa por videollamada. ¿Le queda bien el sábado a las 9:00, hora de El Salvador?"',
            '<strong>Pedir documentos al propietario:</strong> "Para publicar necesito una copia de la escritura y una certificación extractada reciente del CNR."',
            '<strong>Después de la visita:</strong> "¿Qué le pareció la casa? Si quiere, le preparo una comparación con dos opciones parecidas."',
            '<strong>Precio bajó:</strong> "Le aviso que el propietario ajustó el precio de la casa que vio: ahora está en US$ 128.000."',
          ],
        },
      ],
    },
    {
      id: 'seguimiento',
      h2: 'Secuencia de seguimiento de siete días',
      blocks: [
        {
          t: 'p',
          html: 'La mayoría de clientes no decide en la primera conversación. Un seguimiento ordenado, con algo nuevo en cada mensaje, mantiene la conversación sin molestar.',
        },
        {
          t: 'table',
          caption: 'Secuencia sugerida de seguimiento',
          head: ['Día', 'Mensaje', 'Objetivo'],
          rows: [
            ['0', 'Respuesta con datos y pregunta de calificación', 'Saber forma de pago y plazo'],
            ['2', 'Dos opciones parecidas con su enlace', 'Ampliar opciones'],
            ['7', 'Novedad: precio, nueva propiedad o fecha de visita', 'Reabrir la conversación'],
            ['30', 'Mensaje breve preguntando si sigue buscando', 'Dejar la puerta abierta'],
          ],
          note: 'Secuencia de trabajo, no una estadística.',
        },
      ],
    },
    {
      id: 'calificar',
      h2: 'Preguntas para calificar por WhatsApp',
      blocks: [
        {
          t: 'p',
          html: 'Calificar por chat ahorra visitas. Haga una pregunta por mensaje, no un cuestionario.',
        },
        {
          t: 'ol',
          items: [
            '¿La compra sería con banco, con el FSV o de contado?',
            '¿Qué zonas le sirven?',
            '¿Cuántas habitaciones necesita?',
            '¿Para cuándo piensa mudarse?',
            '¿Alguien más participa en la decisión?',
          ],
        },
        {
          t: 'p',
          html: 'Más sobre calificación y canales en <a href="/el-salvador/como-conseguir-clientes-en-bienes-raices/">cómo conseguir clientes en bienes raíces</a>.',
        },
      ],
    },
    {
      id: 'buenas-practicas',
      h2: 'Buenas prácticas y errores frecuentes',
      blocks: [
        {
          t: 'p',
          html: 'WhatsApp es cercano, y por eso un mal uso molesta más que en otros canales.',
        },
        {
          t: 'ul',
          items: [
            'Escriba en horario razonable; al cliente en el exterior, en su hora.',
            'No agregue clientes a listas de difusión sin su permiso.',
            'Envíe un enlace con todas las fotos en vez de veinte imágenes sueltas.',
            'No mande audios largos: muchos clientes leen en el trabajo.',
            'Guarde cada contacto con nombre y zona de interés.',
          ],
        },
        {
          t: 'p',
          html: 'Para responder dudas difíciles, vea <a href="/el-salvador/objeciones-en-bienes-raices/">objeciones en bienes raíces</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Conviene usar WhatsApp Business o el personal?',
      a: 'WhatsApp Business: separa clientes de familia y le da etiquetas, catálogo, horario y respuestas rápidas.',
    },
    {
      q: '¿Cada cuánto dar seguimiento a un cliente?',
      a: 'Una secuencia razonable es el mismo día, a los dos días y a la semana, siempre con algo nuevo. Después, un mensaje al mes.',
    },
    {
      q: '¿Cómo atender a clientes en Estados Unidos por WhatsApp?',
      a: 'Escriba en su horario, ofrezca recorridos por videollamada y envíe un informe con fotos y papeles después de cada visita.',
    },
    {
      q: '¿Las consultas de Casa-Libre llegan a WhatsApp?',
      a: 'Sí. Los interesados escriben directo al WhatsApp de quien publica, y Casa-Libre no cobra comisión sobre la operación.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Path used: /publicar.' },
  ],
  closing: {
    title: 'Que cada anuncio llegue a su WhatsApp',
    text: 'Publique gratis en Casa-Libre El Salvador y reciba las consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['como-conseguir-clientes-en-bienes-raices', 'objeciones-en-bienes-raices', 'referidos-en-bienes-raices', 'marketing-digital-para-bienes-raices'],
};
