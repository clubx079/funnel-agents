export default {
  slug: 'prompts-de-ia-para-inmobiliarias',
  title: 'Prompts de IA para inmobiliarias: 25 ejemplos para copiar',
  h1: 'Prompts de IA para inmobiliarias: 25 ejemplos',
  description:
    '25 prompts de IA para inmobiliarias en español de Paraguay: descripciones, respuestas por WhatsApp, captación, contenido y mercado, y cómo revisarlos.',
  navLabel: 'Prompts de IA',
  blurb: '25 prompts listos para copiar, agrupados por tarea, para que un agente inmobiliario escriba más rápido sin inventar datos.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'none',
  answer:
    'Un prompt es la instrucción que le escribís a una herramienta de inteligencia artificial. Para una inmobiliaria en Paraguay, un buen prompt tiene cuatro partes: el rol, la tarea, los datos verificados de la propiedad y el formato de salida. Abajo tenés 25 prompts en español de Paraguay, agrupados por tarea, con espacios entre corchetes para completar. Los datos los sacás de tu ficha o de tu anuncio en Casa-Libre.',
  summary: [
    '25 prompts en cinco grupos: descripciones, respuestas por WhatsApp, captación, contenido y mercado.',
    'Cada prompt tiene corchetes: [ciudad], [precio en USD], [dormitorios]. Completalos con datos verificados.',
    'Pedí siempre «no agregues datos que no te di»: es la línea que más errores evita.',
    'Los datos para completarlos salen de tu ficha o de tu anuncio gratis en Casa-Libre.',
  ],
  cta: {
    title: 'Tus anuncios, con los datos correctos',
    text: 'Publicá gratis en Casa-Libre con precio, fotos y mapa. Los interesados te escriben directo por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'como-armar-un-prompt',
      h2: 'Cómo armar un buen prompt para inmobiliarias',
      blocks: [
        {
          t: 'p',
          html: 'Un buen prompt dice quién escribe, qué tarea hace, con qué datos y en qué formato. Si falta una parte, el texto sale genérico o inventado.',
        },
        {
          t: 'table',
          caption: 'Las cuatro partes de un prompt inmobiliario',
          head: ['Parte', 'Qué poner', 'Ejemplo'],
          rows: [
            ['Rol', 'Quién escribe.', 'Sos un agente inmobiliario de Paraguay que escribe con voseo.'],
            ['Tarea', 'Qué texto necesitás.', 'Escribí la descripción de una casa en venta.'],
            ['Datos', 'Solo datos verificados.', 'Luque, 3 dormitorios, 300 m² de terreno, USD 89.000.'],
            ['Formato y límites', 'Largo, tono y prohibiciones.', 'Máximo 120 palabras, sin exagerar, no agregues datos que no te di.'],
          ],
          note: 'Los datos del ejemplo son hipotéticos.',
        },
        {
          t: 'p',
          html: 'Los datos los copiás de tu ficha o del anuncio ya cargado. Si todavía no lo publicaste, empezá a cargar la propiedad en Casa-Libre y guardala como borrador.',
        },
      ],
    },
    {
      id: 'prompts-descripciones',
      h2: 'Prompts para describir propiedades (1 a 5)',
      blocks: [
        {
          t: 'p',
          html: 'Estos cinco cubren los anuncios más comunes. En todos, reemplazá lo que está entre corchetes y borrá lo que no aplique.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Prompt 1.</strong> «Sos agente inmobiliario en Paraguay. Escribí la descripción de una casa en venta en [ciudad] con estos datos: [lista]. Máximo 120 palabras, voseo, precio en guaraníes y dólares. No agregues datos que no te di.»',
            '<strong>Prompt 2.</strong> «Escribí un título de máximo 60 caracteres para este departamento: [tipo], [dormitorios], [ciudad], [dato distintivo]. Dame cinco opciones.»',
            '<strong>Prompt 3.</strong> «Escribí la descripción de un terreno en [ciudad]: [medidas], [m²], [servicios], [estado del título según el propietario], [precio]. Ordená primero ubicación y medidas.»',
            '<strong>Prompt 4.</strong> «Escribí el anuncio de un departamento en alquiler en [ciudad]: [dormitorios], [amoblado o no], [expensas], [requisitos]. Terminá invitando a escribir por WhatsApp.»',
            '<strong>Prompt 5.</strong> «Revisá esta descripción y marcá frases exageradas o vagas, sin reescribirla: [texto].»',
          ],
        },
        {
          t: 'p',
          html: 'Para ver cómo quedan anuncios parecidos al tuyo, mirá las casas en venta en Luque en <a href="https://casa-libre.com.py/venta/casas/luque">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'prompts-whatsapp',
      h2: 'Prompts para responder consultas por WhatsApp (6 a 10)',
      blocks: [
        {
          t: 'p',
          html: 'Sirven para armar respuestas base que después personalizás. Nunca pegues el nombre ni el número del cliente.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Prompt 6.</strong> «Escribí una primera respuesta corta a alguien que preguntó por [propiedad] en [ciudad]. Agradecé, confirmá que está disponible y hacé dos preguntas: operación y presupuesto.»',
            '<strong>Prompt 7.</strong> «Escribí tres preguntas amables para saber si un cliente puede comprar: plazo, forma de pago y si necesita vender otra propiedad antes.»',
            '<strong>Prompt 8.</strong> «Escribí un mensaje para proponer dos horarios de visita a [propiedad], con voseo y sin presionar.»',
            '<strong>Prompt 9.</strong> «Escribí un seguimiento para un cliente que visitó [propiedad] hace [días] y no respondió. Breve, con una pregunta abierta.»',
            '<strong>Prompt 10.</strong> «El cliente dice que [objeción]. Dame tres respuestas posibles, honestas, sin prometer precios ni plazos.»',
          ],
        },
        {
          t: 'p',
          html: 'Las consultas de tus anuncios llegan directo a tu WhatsApp con la cuenta para inmobiliarias de <a href="https://casa-libre.com.py/empresas">Casa-Libre</a>, y esos contactos son de tu inmobiliaria. La secuencia completa de seguimiento está en <a href="/whatsapp-para-inmobiliarias/">WhatsApp para inmobiliarias</a>.',
        },
      ],
    },
    {
      id: 'prompts-captacion',
      h2: 'Prompts para captar propietarios (11 a 15)',
      blocks: [
        {
          t: 'p',
          html: 'Con estos preparás el contacto con propietarios; la conversación la hacés vos. Antes, mirá qué publican por su cuenta en <a href="https://casa-libre.com.py/propiedades-en/luque">propiedades en Luque en Casa-Libre</a> o en tu ciudad.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Prompt 11.</strong> «Escribí un mensaje de presentación para un propietario que publica su casa por su cuenta en [ciudad]. Respetuoso, sin criticar su anuncio, ofreciendo [servicio concreto].»',
            '<strong>Prompt 12.</strong> «Armá una lista de diez preguntas para la primera reunión con un propietario que quiere vender.»',
            '<strong>Prompt 13.</strong> «Con estos precios publicados de propiedades parecidas: [lista], armá una tabla con tipo, m², precio y precio por m². No agregues propiedades.»',
            '<strong>Prompt 14.</strong> «Escribí un plan de difusión de una página para presentarle a un propietario: dónde publico, cada cuánto le informo y qué le pido.»',
            '<strong>Prompt 15.</strong> «Escribí un mensaje para retomar contacto con un propietario que me dijo hace [meses] que pensaba vender.»',
          ],
        },
        {
          t: 'p',
          html: 'Al propietario le podés mandar también la guía de Casa-Libre sobre cómo vender mi casa. El guion completo para esa charla está en <a href="/que-decirle-a-un-propietario-para-captar/">qué decirle a un propietario para captar</a>.',
        },
      ],
    },
    {
      id: 'prompts-contenido',
      h2: 'Prompts para redes sociales y contenido (16 a 20)',
      blocks: [
        {
          t: 'p',
          html: 'Sirven para redes sociales, estados de WhatsApp y videos cortos. Cada publicación lleva al anuncio completo.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Prompt 16.</strong> «Dame 12 ideas de publicaciones para un agente inmobiliario de [ciudad] durante un mes: propiedades, zona, consejos y proceso.»',
            '<strong>Prompt 17.</strong> «Escribí un guion de 30 segundos para un video vertical de [propiedad], con lo que muestro en cada toma.»',
            '<strong>Prompt 18.</strong> «Escribí un texto corto para redes sociales sobre [propiedad] que termine invitando a ver el anuncio completo.»',
            '<strong>Prompt 19.</strong> «Explicá en cinco pasos simples qué papeles suele pedir el escribano al vender una casa. Aclará que es información general.»',
            '<strong>Prompt 20.</strong> «Convertí esta descripción en tres versiones: una larga, una para un estado de WhatsApp y una para una imagen.»',
          ],
        },
        {
          t: 'p',
          html: 'El enlace que pegás en cada publicación es el de tu anuncio o, si mostrás varias opciones, el de las casas en venta en Asunción en Casa-Libre. Más ideas en <a href="/ideas-de-contenido-para-inmobiliarias/">ideas de contenido para inmobiliarias</a>.',
        },
      ],
    },
    {
      id: 'prompts-mercado-y-gestion',
      h2: 'Prompts para análisis de mercado y gestión (21 a 25)',
      blocks: [
        {
          t: 'p',
          html: 'Acá la herramienta solo ordena tus datos. Sin datos, inventa.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Prompt 21.</strong> «Con esta lista de terrenos publicados en [ciudad]: [superficie y precio de cada uno], calculá el precio por m² de cada uno y la mediana. Mostrá la cuenta.»',
            '<strong>Prompt 22.</strong> «Escribí un informe de una página para un propietario con estos comparables: [tabla]. Tono claro, sin prometer un precio de venta.»',
            '<strong>Prompt 23.</strong> «Ordená esta lista de clientes por etapa y decime a quién tengo que escribir hoy: [lista sin nombres ni teléfonos].»',
            '<strong>Prompt 24.</strong> «Armá mi semana de trabajo con estos bloques: [captación, visitas, seguimiento, publicaciones], en horario de [horas].»',
            '<strong>Prompt 25.</strong> «Traducí esta descripción al [inglés o portugués]. Mantené los números y la moneda exactamente iguales.»',
          ],
        },
        {
          t: 'p',
          html: 'Para el prompt 21, juntá los terrenos desde la búsqueda de terrenos en venta en Capiatá en Casa-Libre o la de tu ciudad. El método completo está en el <a href="/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'completar-con-datos',
      h2: 'Cómo completar los prompts con los datos de tu anuncio',
      blocks: [
        {
          t: 'p',
          html: 'Completá los corchetes solo con datos que verificaste, copiándolos de la ficha de cada propiedad.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: el prompt 1 completo',
          html: 'Datos hipotéticos. Conversión con Gs. 7.300 por dólar, aprox. «Sos agente inmobiliario en Paraguay. Escribí la descripción de una casa en venta en Luque con estos datos: 3 dormitorios, 2 baños, 300 m² de terreno, 140 m² construidos, patio, precio USD 89.000 (Gs. 649.700.000 aprox.). Máximo 120 palabras, voseo. No agregues datos que no te di.»',
          rows: [
            ['Precio en dólares', 'USD 89.000'],
            ['Precio en guaraníes (89.000 × 7.300)', 'Gs. 649.700.000 aprox.'],
            ['Precio por m² construido (89.000 ÷ 140)', 'USD 636 aprox.'],
          ],
        },
        {
          t: 'casalibre',
          title: 'Publicá el texto revisado',
          html: 'En Casa-Libre cargás el texto, el precio en guaraníes o dólares, las fotos y la ubicación en el mapa. Publicar es gratis y no hay comisión sobre la venta ni el alquiler.',
          button: 'Publicar una propiedad en Casa-Libre',
          href: 'https://casa-libre.com.py/publicar',
        },
      ],
    },
    {
      id: 'revisar-antes-de-publicar',
      h2: 'Revisá antes de publicar',
      blocks: [
        {
          t: 'p',
          html: 'Cada texto pasa por una revisión de un minuto antes de salir. Es la diferencia entre ahorrar tiempo y perder credibilidad.',
        },
        {
          t: 'ul',
          items: [
            '¿Los números coinciden con tu ficha?',
            '¿Promete papeles, impuestos o plazos que no podés garantizar?',
            '¿Suena a vos, con voseo?',
          ],
        },
        {
          t: 'p',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android. Para usar los prompts desde el teléfono, descargá la app de Casa-Libre.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es un prompt para inmobiliarias?',
      a: 'Es la instrucción que le escribís a una herramienta de inteligencia artificial para que redacte un texto: una descripción, una respuesta o un plan. Cuanto más concretos los datos, mejor el resultado.',
    },
    {
      q: '¿Estos prompts sirven para cualquier herramienta de inteligencia artificial?',
      a: 'Sí. Están escritos en lenguaje común y funcionan con cualquier herramienta que escriba en español. Si el resultado sale en otro registro, agregá «usá voseo, como se habla en Paraguay».',
    },
    {
      q: '¿Cómo evito que la IA invente datos?',
      a: 'Dale solo datos verificados, escribí «no agregues datos que no te di» y compará el resultado con tu ficha.',
    },
    {
      q: '¿Dónde publico el anuncio que escribí con la IA?',
      a: 'Te recomendamos publicarlo gratis en Casa-Libre, con fotos, precio y ubicación en el mapa. Mirá cómo funciona Casa-Libre antes de empezar.',
    },
  ],
  internalSources: [
    {
      label: 'Casa-Libre: página para empresas y cómo funciona',
      url: 'https://casa-libre.com.py/empresas',
      date: '2026-11-12',
      note: 'Hechos sobre Casa-Libre usados en la página. Los prompts y ejemplos son propios e ilustrativos.',
    },
  ],
  closing: {
    title: 'Copiá, completá, revisá y publicá',
    text: 'Creá tu cuenta de inmobiliaria y publicá tu cartera gratis. Las consultas llegan directo a tu WhatsApp.',
    button: 'Crear cuenta en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  related: ['inteligencia-artificial-para-inmobiliarias', 'como-describir-una-propiedad-en-venta', 'whatsapp-para-inmobiliarias', 'ideas-de-contenido-para-inmobiliarias'],
};
