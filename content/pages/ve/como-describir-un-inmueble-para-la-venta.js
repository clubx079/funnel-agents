export default {
  slug: 'como-describir-un-inmueble-para-la-venta',
  equivalent: 'como-describir-una-propiedad-en-venta',
  group: 'Marketing inmobiliario',
  order: 30,
  title: 'Cómo describir un inmueble para la venta: ejemplos',
  h1: 'Cómo describir un inmueble para la venta',
  description:
    'Cómo describir un inmueble para la venta en Venezuela: fórmula para el título, estructura de la descripción, cuatro ejemplos y qué palabras evitar.',
  navLabel: 'Describir un inmueble',
  blurb: 'Títulos y descripciones de inmuebles en venta y alquiler, con una fórmula simple y ejemplos para Venezuela.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'none',
  answer:
    'Para describir un inmueble para la venta, empieza con un título que diga tipo, zona y el dato que más vende, y sigue con una descripción ordenada: lo principal en dos líneas, los ambientes, los servicios y el condominio, la ubicación y cómo agendar la visita. En Venezuela suma siempre agua, planta eléctrica y estacionamiento. Con la descripción lista, publícala gratis en Casa-Libre.',
  summary: [
    'Título: tipo de inmueble + zona + el dato que más vende. Sin mayúsculas sostenidas ni signos de sobra.',
    'Descripción en cinco bloques: resumen, ambientes, servicios y condominio, ubicación, visita.',
    'Datos que el comprador venezolano busca: agua, tanque, planta eléctrica, puestos, condominio en dólares.',
    'Una buena descripción en Casa-Libre evita preguntas repetidas por WhatsApp.',
  ],
  cta: {
    title: 'Publica tu descripción hoy',
    text: 'En Casa-Libre Venezuela publicas gratis y los interesados te escriben por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.ve/empresas',
  },
  sections: [
    {
      id: 'titulo',
      h2: '¿Cómo escribir el título de un anuncio inmobiliario?',
      blocks: [
        {
          t: 'p',
          html: 'Con tres piezas: tipo de inmueble, zona y el dato que más vende. Es lo primero que se lee en la búsqueda y decide si abren la ficha.',
        },
        {
          t: 'table',
          caption: 'Fórmula de títulos para anuncios inmobiliarios',
          head: ['Tipo', 'Zona', 'Dato que vende', 'Título resultante'],
          rows: [
            ['Apartamento 3 hab.', 'Los Palos Grandes', 'con planta y 2 puestos', 'Apartamento 3 hab. en Los Palos Grandes con planta y 2 puestos'],
            ['Casa', 'Valencia norte', 'con pozo y jardín', 'Casa con pozo y jardín en el norte de Valencia'],
            ['Terreno 500 m²', 'Margarita', 'documentado', 'Terreno de 500 m² documentado en Margarita'],
            ['Anexo amoblado', 'Barquisimeto este', 'servicios incluidos', 'Anexo amoblado en el este de Barquisimeto, servicios incluidos'],
          ],
          note: 'Ejemplos ilustrativos, no son inmuebles reales.',
        },
      ],
    },
    {
      id: 'estructura',
      h2: 'La estructura de una buena descripción',
      blocks: [
        {
          t: 'p',
          html: 'Cinco bloques cortos, en este orden. El comprador lee en el teléfono: frases cortas y un dato por línea.',
        },
        {
          t: 'ol',
          items: [
            '<strong>Resumen:</strong> qué es y por qué vale la pena, en dos líneas.',
            '<strong>Ambientes:</strong> metros, habitaciones, baños, cocina, balcón.',
            '<strong>Servicios y condominio:</strong> agua, tanque, planta, gas, internet, cuota mensual.',
            '<strong>Ubicación:</strong> qué hay cerca, sin exagerar.',
            '<strong>Visita:</strong> horarios y cómo agendar por WhatsApp.',
          ],
        },
      ],
    },
    {
      id: 'ejemplos',
      h2: 'Cuatro ejemplos de descripción',
      blocks: [
        {
          t: 'p',
          html: 'Úsalos como modelo y cambia cada dato por el real. Nunca describas algo que el inmueble no tiene.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: apartamento en venta en Caracas',
          html: 'Apartamento de 95 m² con vista al Ávila, remodelado. 3 habitaciones, 2 baños, cocina empotrada y balcón. Edificio con planta eléctrica, tanque y vigilancia; 2 puestos y maletero. Condominio de USD 60, solvente. Cerca de transporte, comercios y colegios. Visitas de lunes a sábado: escríbeme por WhatsApp. USD 98.000.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: casa en venta en Valencia',
          html: 'Casa de 220 m² de construcción en terreno de 400 m², con pozo de agua y jardín. 4 habitaciones, 3 baños, estudio y estacionamiento para 3 carros. Calle cerrada con vigilancia. Documentos al día. USD 120.000.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: terreno en venta en Margarita',
          html: 'Terreno de 500 m², plano, con documento registrado y ficha catastral. Acceso por calle asfaltada, servicios en la zona. Ideal para vivienda vacacional. USD 25.000.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: anexo en alquiler en Barquisimeto',
          html: 'Anexo amoblado de 1 habitación y 1 baño, entrada independiente. Agua por tanque, luz e internet incluidos en el canon. Para una persona o pareja. USD 200 al mes. Se piden referencias.',
        },
      ],
    },
    {
      id: 'que-evitar',
      h2: '¿Qué palabras y errores evitar?',
      blocks: [
        {
          t: 'p',
          html: 'Todo lo que suena a relleno o genera desconfianza. El comprador ha leído cientos de anuncios y reconoce las exageraciones.',
        },
        {
          t: 'ul',
          items: [
            '«Espectacular», «única oportunidad», «no te lo pierdas»: no informan nada.',
            'Precio a consultar: muchos compradores no escriben.',
            'Mayúsculas en todo el texto y muchos signos de exclamación.',
            'Datos que no coinciden con las fotos o con el documento.',
            'La dirección exacta, si el propietario prefiere reservarla para la visita.',
          ],
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Cómo publicar la descripción',
      blocks: [
        {
          t: 'p',
          html: 'Copia la descripción en la ficha, revisa que el precio sea el mismo que en los demás canales y súbela con las fotos ordenadas. Las fotos se explican en <a href="/venezuela/fotos-inmobiliarias/">fotos inmobiliarias con el celular</a>.',
        },
        {
          t: 'casalibre',
          title: 'Tu descripción en Casa-Libre',
          html: 'Publica gratis cada inmueble con su descripción, sus fotos y su ubicación en el mapa. Si no terminaste, guárdalo como borrador y complétalo después. Las consultas llegan por WhatsApp.',
          button: 'Ver la cuenta para inmobiliarias',
          href: 'https://casa-libre.com.ve/empresas',
        },
        {
          t: 'p',
          html: 'Si usas herramientas de inteligencia artificial para redactar, revisa cada dato antes de publicar. Más ideas en <a href="/venezuela/marketing-inmobiliario-digital/">marketing inmobiliario digital</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cómo describir un inmueble para la venta?',
      a: 'Con un título claro (tipo, zona, dato que vende) y una descripción en cinco bloques: resumen, ambientes, servicios y condominio, ubicación y visita. Siempre con el precio en dólares.',
    },
    {
      q: '¿Qué poner en el título de un anuncio inmobiliario?',
      a: 'Tipo de inmueble, zona y el dato que más vende, como «Apartamento 3 hab. en Altamira con planta y 2 puestos».',
    },
    {
      q: '¿Cuánto debe medir una descripción?',
      a: 'Lo suficiente para responder las preguntas frecuentes: entre 80 y 150 palabras suele bastar.',
    },
    {
      q: '¿Cómo describir un inmueble en un contrato?',
      a: 'En un contrato la descripción sigue el documento de propiedad: dirección, metros, linderos y datos de registro. Esa redacción la hace o revisa un abogado.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Path used: /empresas.' },
  ],
  closing: {
    title: 'Una buena ficha empieza con un buen texto',
    text: 'Publícala gratis en Casa-Libre Venezuela.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['fotos-inmobiliarias', 'marketing-inmobiliario-digital', 'portales-inmobiliarios-venezuela'],
};
