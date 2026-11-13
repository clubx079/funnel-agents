export default {
  slug: 'autorizacion-de-venta-inmobiliaria',
  equivalent: 'autorizacion-de-venta-inmobiliaria',
  group: 'Precio y contratos',
  order: 30,
  title: 'Autorización de venta inmobiliaria en Venezuela: modelo',
  h1: 'Autorización de venta inmobiliaria: qué incluir',
  description:
    'Qué es una autorización de venta inmobiliaria en Venezuela, qué datos lleva, exclusiva o no exclusiva, y qué revisar antes de que firme el propietario.',
  navLabel: 'Autorización de venta',
  blurb: 'Qué permite una autorización de venta en Venezuela, qué campos lleva y qué revisar antes de firmarla.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Venezuelan lawyer must confirm: that an autorización de venta does not let the asesor sign the sale (only a poder does), that all co-owners and the spouse (bienes de la comunidad conyugal) should sign, the outline of fields, and how an autorización is revoked. Not a legal template.',
  answer:
    'La autorización de venta es el documento en que el propietario te permite ofrecer, publicar y mostrar su inmueble a cambio de honorarios. No te permite firmar la venta: para eso hace falta un poder. En Venezuela debe llevar los datos de todos los propietarios, del inmueble según su documento registrado, el precio en dólares, los honorarios y el plazo. Con ella firmada, publica el inmueble en Casa-Libre.',
  summary: [
    'Autoriza a ofrecer, publicar y mostrar el inmueble; no a firmar la venta.',
    'La firman todos los propietarios y, si el inmueble es de la comunidad conyugal, también el cónyuge.',
    'Puede ser exclusiva o no exclusiva; la exclusiva debe tener plazo y un plan de trabajo.',
    'Revisa el documento de propiedad y las solvencias antes de firmar y de publicar en Casa-Libre.',
  ],
  cta: {
    title: 'Autorización firmada, inmueble publicado',
    text: 'En Casa-Libre Venezuela publicas gratis y recibes las consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.ve/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es una autorización de venta inmobiliaria?',
      blocks: [
        {
          t: 'p',
          html: 'Es el permiso escrito del propietario para que ofrezcas su inmueble. Es más simple que un contrato de corretaje completo y a veces va como anexo de él.',
        },
        {
          t: 'table',
          caption: 'Qué permite y qué no permite una autorización de venta',
          head: ['Permite', 'No permite'],
          rows: [
            ['Publicar el inmueble con fotos y precio', 'Firmar la opción de compraventa en nombre del propietario'],
            ['Mostrarlo a interesados', 'Firmar el documento de venta en el Registro'],
            ['Recibir y transmitir ofertas', 'Recibir el pago del precio, salvo que se acuerde por escrito'],
            ['Cobrar honorarios si se vende', 'Bajar el precio sin consultar'],
          ],
          note: 'Información general. Para firmar en nombre del propietario hace falta un poder.',
        },
      ],
    },
    {
      id: 'campos',
      h2: '¿Qué datos lleva una autorización de venta?',
      blocks: [
        {
          t: 'p',
          html: 'Los suficientes para que nadie dude de qué inmueble se trata, quién autoriza, en qué condiciones y hasta cuándo.',
        },
        {
          t: 'ul',
          items: [
            'Nombre, cédula y RIF de cada propietario, y del cónyuge si corresponde.',
            'Nombre de la inmobiliaria o del asesor.',
            'Dirección del inmueble y datos del documento de propiedad registrado.',
            'Precio de oferta en dólares.',
            'Honorarios y momento del pago.',
            'Si es exclusiva o no, y el plazo.',
            'Fecha y firma de todos.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Consulta con un abogado antes de firmar. Este esquema no reemplaza un modelo revisado por un profesional.',
        },
      ],
    },
    {
      id: 'exclusiva-o-no',
      h2: '¿Autorización exclusiva o no exclusiva?',
      blocks: [
        {
          t: 'p',
          html: 'En la exclusiva solo tú ofreces el inmueble durante el plazo; en la no exclusiva el propietario puede trabajar con otros asesores. La exclusiva te permite invertir en fotos, video y publicación sin miedo a perder el trabajo.',
        },
        {
          t: 'p',
          html: 'Si pides exclusividad, ofrece algo a cambio: un plan escrito e informes semanales. Más en <a href="/venezuela/contrato-de-exclusividad-inmobiliaria/">contrato de exclusividad inmobiliaria</a>.',
        },
      ],
    },
    {
      id: 'antes-de-firmar',
      h2: 'Qué revisar antes de que firme el propietario',
      blocks: [
        {
          t: 'p',
          html: 'Que quien firma pueda vender. Muchas ventas se caen porque falta un heredero, un cónyuge o una solvencia.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Documento de propiedad', html: 'Que esté registrado y a nombre de quien firma.' },
            { title: 'Estado civil', html: 'Si el inmueble se compró durante el matrimonio, firma también el cónyuge.' },
            { title: 'Herencias', html: 'Si viene de una herencia, revisa la declaración sucesoral y que firmen todos los herederos.' },
            { title: 'Hipotecas o medidas', html: 'Pide a un abogado que revise si hay gravámenes en el Registro.' },
          ],
        },
        {
          t: 'p',
          html: 'La lista completa está en <a href="/venezuela/documentos-para-vender-un-inmueble-en-venezuela/">documentos para vender un inmueble en Venezuela</a>.',
        },
      ],
    },
    {
      id: 'revocar',
      h2: '¿Se puede revocar una autorización de venta?',
      blocks: [
        {
          t: 'p',
          html: 'En general el propietario puede retirarla, pero lo que pase con los honorarios depende de lo que firmaron. Por eso conviene escribir qué ocurre si se revoca antes del plazo o si vende luego a un cliente que tú presentaste.',
        },
        {
          t: 'p',
          html: 'Si la autorización termina, retira la ficha de todos los canales donde la publicaste.',
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Con la autorización firmada, publica',
      blocks: [
        {
          t: 'p',
          html: 'Publica el mismo día: cada semana sin publicar es una semana sin consultas. Mantén el precio igual en todos los canales.',
        },
        {
          t: 'casalibre',
          title: 'Tu cartera autorizada, en Casa-Libre',
          html: 'Publica gratis cada inmueble, con precio en dólares y ubicación en el mapa. Los interesados te escriben por WhatsApp y la ficha se comparte con un enlace.',
          button: 'Ver la cuenta para inmobiliarias',
          href: 'https://casa-libre.com.ve/empresas',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿La autorización de venta tiene que ser notariada?',
      a: 'No siempre. Muchos asesores la firman como documento privado y la autentican cuando es exclusiva o el inmueble es de alto valor. Consulta con tu abogado.',
    },
    {
      q: '¿Con una autorización de venta puedo firmar la opción de compraventa?',
      a: 'No. La autorización te permite ofrecer el inmueble. Para firmar en nombre del propietario necesitas un poder otorgado para eso.',
    },
    {
      q: '¿Cuánto dura una autorización de venta?',
      a: 'Lo que acuerden. Muchos asesores proponen entre 60 y 120 días, renovables. Escribe la fecha de fin.',
    },
    {
      q: '¿Qué pasa si el propietario vende por su cuenta?',
      a: 'Depende de la autorización. Si es exclusiva, suele corresponder igual el pago de honorarios; si no lo es, normalmente no. Por eso la cláusula debe estar escrita.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Path used: /empresas.' },
    { label: 'Venezuelan practice on autorizaciones de venta', url: 'about:blank', date: '2026-11-13', note: 'General knowledge, not from a verified document. Confirm with a Venezuelan lawyer.' },
  ],
  closing: {
    title: 'Publica lo que te autorizaron',
    text: 'Casa-Libre Venezuela: publicar es gratis y las consultas llegan por WhatsApp.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['contrato-de-corretaje-inmobiliario', 'contrato-de-exclusividad-inmobiliaria', 'documentos-para-vender-un-inmueble-en-venezuela'],
};
