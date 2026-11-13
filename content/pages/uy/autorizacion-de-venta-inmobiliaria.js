export default {
  slug: 'autorizacion-de-venta-inmobiliaria',
  equivalent: 'autorizacion-de-venta-inmobiliaria',
  group: 'Precio y contratos',
  order: 20,
  title: 'Autorización de venta inmobiliaria en Uruguay',
  h1: 'Autorización de venta inmobiliaria en Uruguay: qué incluir',
  description:
    'Qué es la autorización de venta inmobiliaria en Uruguay, qué exige la ley del operador, qué cláusulas incluir y cómo presentarla al propietario.',
  navLabel: 'Autorización de venta',
  blurb: 'Qué tiene que decir una autorización de venta en Uruguay y cómo encaja con la Ley 20.380 del operador inmobiliario.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Uruguayan escribano must confirm: our reading of Ley 20.380 (art. 5: client authorisation must be reliable/fehaciente without formal requirements; art. 6: agreement documented in writing or another suitable medium such as e-mail, inspection before contracting, registration number in every offer; art. 7: no fees without authorisation). Also confirm that the clauses suggested are customary and that the commission (3% plus IVA each party) is stated as practice, not law.',
  answer:
    'La autorización de venta es el documento con el que el propietario te encarga vender su inmueble en Uruguay. Fija precio, plazo, honorarios y si es exclusiva o compartida. La Ley 20.380 pide que el acuerdo con el cliente quede documentado por escrito o por otro medio que sirva de prueba, y no permite reclamar honorarios sin autorización. Con la autorización firmada, publicá la propiedad el mismo día: te recomendamos hacerlo gratis en Casa-Libre.',
  summary: [
    'La autorización de venta te da el respaldo para publicar, mostrar y cobrar honorarios.',
    'La Ley 20.380 exige documentar el acuerdo con el cliente, por escrito o por un medio que sirva de prueba, como un correo electrónico.',
    'Incluí: titulares, padrón, precio en U$S, plazo, honorarios, exclusividad y qué pasa al vencer.',
    'Con la autorización firmada, publicá en Casa-Libre gratis y mostrale al propietario las consultas que llegan.',
  ],
  cta: {
    title: 'Firmaste la autorización: publicá hoy',
    text: 'En Casa-Libre Uruguay publicás gratis y las consultas te llegan por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es una autorización de venta inmobiliaria?',
      blocks: [
        {
          t: 'p',
          html: 'Es el acuerdo por el que el propietario autoriza a una inmobiliaria o a un agente a ofrecer su propiedad, en ciertas condiciones de precio, plazo y honorarios. Sin ella, no tenés cómo demostrar que te encargaron la venta.',
        },
        {
          t: 'table',
          caption: 'Cláusulas de una autorización de venta en Uruguay',
          head: ['Cláusula', 'Qué dice', 'Por qué importa'],
          rows: [
            ['Titulares', 'Nombre, cédula y estado civil de todos los propietarios', 'Todos deben autorizar'],
            ['Inmueble', 'Dirección, padrón y unidad', 'Evita confusiones con otras unidades'],
            ['Precio', 'Precio de oferta en U$S y margen de negociación', 'Fija desde dónde negociás'],
            ['Plazo', 'Duración y si se renueva', 'Sin plazo, la autorización queda en el aire'],
            ['Honorarios', 'Porcentaje más IVA y cuándo se cobra', 'Base para reclamar tu comisión'],
            ['Exclusividad', 'Exclusiva o compartida con otras inmobiliarias', 'Define quién puede vender'],
            ['Publicación', 'Canales, cartel, fotos y visitas', 'El propietario sabe qué esperar'],
          ],
          note: 'Cláusulas habituales. Adaptalas con tu escribano.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de usar un modelo',
          html: 'Información general. Consultá con un escribano antes de firmar o de usar un modelo de autorización.',
        },
      ],
    },
    {
      id: 'que-dice-la-ley',
      h2: '¿Qué dice la Ley 20.380 sobre la autorización?',
      blocks: [
        {
          t: 'p',
          html: 'La ley del operador inmobiliario pide que tengas la autorización del cliente de forma fehaciente, aunque sin formalidades especiales, y que el acuerdo quede documentado por escrito o por otro medio idóneo como prueba.',
        },
        {
          t: 'ul',
          items: [
            'No podés reclamar honorarios por una operación que el cliente no autorizó.',
            'Tenés que revisar la propiedad antes de contratar y podés pedir al propietario la documentación que acredite que es suyo.',
            'Tu número de registro deberá figurar en cada oferta, cuando el registro esté funcionando.',
          ],
        },
        {
          t: 'p',
          html: 'Lo explicamos con más detalle en <a href="/uruguay/como-ser-agente-inmobiliario-uruguay/">cómo ser agente inmobiliario en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'exclusiva-o-compartida',
      h2: '¿Autorización exclusiva o compartida?',
      blocks: [
        {
          t: 'p',
          html: 'En Uruguay es común que una misma propiedad esté en varias inmobiliarias. La exclusiva te da tiempo para invertir en fotos y publicidad; la compartida es más fácil de conseguir pero te obliga a moverte rápido.',
        },
        {
          t: 'p',
          html: 'Si querés pedir exclusividad, ofrecé algo a cambio: un plan concreto y un informe de consultas. Tenés los argumentos en <a href="/uruguay/contrato-de-exclusividad-inmobiliaria/">contrato de exclusividad inmobiliaria</a>.',
        },
      ],
    },
    {
      id: 'como-presentarla',
      h2: '¿Cómo presentar la autorización al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'Presentala como parte de tu plan, no como un trámite. El propietario firma más fácil cuando entiende qué vas a hacer con su propiedad.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Mostrá la tasación', html: 'Con comparables del barrio y el precio sugerido.' },
            { title: 'Explicá el plan', html: 'Fotos, canales donde vas a publicar y cómo vas a filtrar a los interesados.' },
            { title: 'Hacé la cuenta de honorarios', html: 'Con el IVA incluido, para que no haya sorpresas.' },
            { title: 'Firmá y publicá', html: 'El mismo día, para que el propietario vea movimiento.' },
          ],
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: honorarios en una autorización por U$S 95.000',
          html: 'Números redondos e hipotéticos con 3% más IVA del 22% al vendedor.',
          rows: [
            ['Concepto', 'Monto'],
            ['Comisión (95.000 × 3%)', 'U$S 2.850'],
            ['IVA (2.850 × 22%)', 'U$S 627'],
            ['Total a cargo del vendedor', 'U$S 3.477'],
          ],
        },
      ],
    },
    {
      id: 'vencimiento',
      h2: '¿Qué pasa cuando vence la autorización?',
      blocks: [
        {
          t: 'p',
          html: 'Al vencer, el propietario puede renovarla o irse con otra inmobiliaria. Prevé qué pasa si después vende a un cliente que vos le presentaste durante el plazo.',
        },
        {
          t: 'ul',
          items: [
            'Llevá registro de cada visita: fecha, nombre y propiedad.',
            'Antes del vencimiento, mandá un informe con consultas y visitas y proponé un ajuste de precio si hace falta.',
            'Si no se renueva, dá de baja las publicaciones enseguida.',
          ],
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Con la autorización firmada, publicá',
      blocks: [
        {
          t: 'p',
          html: 'La mejor forma de cumplir lo que prometiste es publicar en el día, con buenas fotos y la ubicación en el mapa.',
        },
        {
          t: 'casalibre',
          title: 'Casa-Libre para inmobiliarias',
          html: 'Publicás gratis, los interesados te escriben por WhatsApp y Casa-Libre no cobra comisión sobre la venta. Funciona en la web y en apps para iPhone y Android.',
          button: 'Crear mi cuenta',
          href: 'https://uy.casa-libre.com/empresas',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿La autorización de venta tiene que ser por escrito en Uruguay?',
      a: 'La Ley 20.380 pide que el acuerdo quede documentado por escrito o por otro medio que sirva de prueba, como un correo electrónico. Lo más seguro es un documento firmado.',
    },
    {
      q: '¿Cuánto dura una autorización de venta?',
      a: 'Lo que se acuerde. Muchas inmobiliarias usan plazos de algunos meses con renovación. Escribí la fecha de vencimiento.',
    },
    {
      q: '¿Puedo publicar una propiedad sin autorización?',
      a: 'No conviene: sin autorización no podés reclamar honorarios y, según la ley, el operador no puede actuar sin la autorización del cliente.',
    },
    {
      q: '¿Qué pasa si el propietario vende por su cuenta?',
      a: 'Depende de lo que diga la autorización. En una exclusiva suele pactarse que igual se deben honorarios; en una compartida, normalmente no.',
    },
  ],
  internalSources: [
    { label: 'Ley 20.380 (IMPO), arts. 5, 6 y 7', url: 'https://www.impo.com.uy/bases/leyes-originales/20380-2024', date: '2026-11-13', note: 'Client authorisation, written record, no fees without authorisation.' },
  ],
  closing: {
    title: 'Tu captación, publicada en el día',
    text: 'Publicá gratis en Casa-Libre Uruguay y mostrale al propietario las consultas que llegan.',
    button: 'Publicar gratis',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['contrato-de-exclusividad-inmobiliaria', 'comision-inmobiliaria-uruguay', 'como-captar-propiedades', 'boleto-de-reserva-inmueble-uruguay'],
};
