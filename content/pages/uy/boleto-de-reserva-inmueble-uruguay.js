export default {
  slug: 'boleto-de-reserva-inmueble-uruguay',
  group: 'Precio y contratos',
  order: 40,
  title: 'Boleto de reserva de inmueble en Uruguay: qué incluir',
  h1: 'Boleto de reserva de inmueble en Uruguay',
  description:
    'Qué es el boleto de reserva de un inmueble en Uruguay, qué datos lleva, cómo se maneja la seña y qué pasa si alguien se arrepiente. Guía para agentes.',
  navLabel: 'Boleto de reserva',
  blurb: 'Qué tiene que decir un boleto de reserva en Uruguay, cómo se maneja la seña y errores que hacen caer la venta.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Uruguayan escribano must confirm: how a boleto de reserva is customarily used (seña to hold the property while títulos are studied), who usually holds the seña (inmobiliaria or escribano), and the general consequences of withdrawal (comprador loses the seña; vendedor returns it, often doubled) which depend on what was agreed. We give no percentage for the seña on purpose. Also confirm the "reserva de prioridad" mention.',
  answer:
    'El boleto de reserva es el documento con el que, en Uruguay, el interesado aparta una propiedad entregando una seña mientras el escribano estudia los títulos. Debe identificar a las partes y el padrón, fijar el precio en dólares, el monto de la seña, quién la guarda, el plazo para firmar el compromiso o la escritura y qué pasa si alguien se arrepiente. Para conseguir más interesados que lleguen a reservar, te recomendamos publicar en Casa-Libre.',
  summary: [
    'El boleto de reserva aparta la propiedad a cambio de una seña y da tiempo para estudiar los títulos.',
    'Tiene que decir: partes, padrón, precio, seña, quién la guarda, plazos y qué pasa si alguien se arrepiente.',
    'El monto de la seña no lo fija la ley: se acuerda. Dejá claro si se descuenta del precio.',
    'Antes de firmar, que lo revise un escribano: un boleto mal escrito hace caer más ventas que el precio.',
  ],
  cta: {
    title: 'Más interesados, más reservas',
    text: 'Publicá tu cartera gratis en Casa-Libre Uruguay y recibí consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un boleto de reserva de inmueble?',
      blocks: [
        {
          t: 'p',
          html: 'Es un acuerdo previo a la compraventa: el interesado entrega una seña y el vendedor se compromete a no vender a otro durante un plazo. Sirve para que el escribano estudie los títulos con tranquilidad.',
        },
        {
          t: 'table',
          caption: 'Boleto de reserva, compromiso y escritura',
          head: ['Documento', 'Para qué sirve', 'Cuándo se firma'],
          rows: [
            ['Boleto de reserva', 'Apartar la propiedad con una seña', 'Cuando se acepta la oferta'],
            ['Compromiso de compraventa', 'Fijar condiciones si hay plazo, pagos o crédito', 'Después del estudio de títulos, si hace falta'],
            ['Escritura de compraventa', 'Transferir la propiedad', 'Al pagar el saldo, ante escribano'],
          ],
          note: 'Secuencia habitual en Uruguay. El escribano decide qué documentos usa cada operación.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Revisión profesional',
          html: 'Información general. Consultá con un escribano antes de firmar un boleto de reserva.',
        },
      ],
    },
    {
      id: 'que-incluir',
      h2: '¿Qué tiene que decir el boleto de reserva?',
      blocks: [
        {
          t: 'p',
          html: 'Todo lo que después pueda generar una discusión. Si algo no está escrito, cada parte lo va a recordar a su manera.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Partes', html: 'Nombre, cédula y estado civil de compradores y vendedores. Si hay cónyuge, puede necesitar firmar.' },
            { title: 'Propiedad', html: 'Dirección, padrón, unidad y si incluye garaje o depósito.' },
            { title: 'Precio y forma de pago', html: 'En dólares, con la parte al contado y la parte con crédito, si la hay.' },
            { title: 'Seña', html: 'Monto, quién la guarda y si se descuenta del precio.' },
            { title: 'Plazos', html: 'Para el estudio de títulos y para firmar el compromiso o la escritura.' },
            { title: 'Arrepentimiento', html: 'Qué pasa con la seña si el comprador o el vendedor se echan atrás.' },
            { title: 'Honorarios', html: 'Comisión de la inmobiliaria y quién la paga.' },
          ],
        },
      ],
    },
    {
      id: 'sena',
      h2: '¿Cuánto se deja de seña y quién la guarda?',
      blocks: [
        {
          t: 'p',
          html: 'No hay un monto legal: se acuerda entre las partes. Lo importante es que sea suficiente para que el comprador esté comprometido y que quede claro quién la custodia.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: seña en un apartamento de U$S 140.000',
          html: 'Números redondos e hipotéticos. La seña y su porcentaje los fija el acuerdo, no una ley.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio', 'U$S 140.000'],
            ['Seña acordada (hipotética)', 'U$S 7.000'],
            ['Saldo a pagar en la escritura (140.000 − 7.000)', 'U$S 133.000'],
          ],
        },
        {
          t: 'p',
          html: 'Si la inmobiliaria guarda la seña, dale un recibo y no la mezcles con tus fondos.',
        },
      ],
    },
    {
      id: 'arrepentimiento',
      h2: '¿Qué pasa si alguien se arrepiente?',
      blocks: [
        {
          t: 'p',
          html: 'Depende de lo que diga el boleto. Es común pactar que si se arrepiente el comprador pierde la seña, y que si se arrepiente el vendedor la devuelve con una compensación. Escribilo con claridad.',
        },
        {
          t: 'ul',
          items: [
            'Si el estudio de títulos encuentra un problema que no se puede resolver, lo usual es devolver la seña.',
            'Si la compra depende de un crédito, aclará qué pasa si el banco no lo aprueba.',
            'Fijá fechas concretas, no "a la brevedad".',
          ],
        },
      ],
    },
    {
      id: 'errores',
      h2: 'Errores frecuentes en el boleto de reserva',
      blocks: [
        {
          t: 'p',
          html: 'La mayoría de los problemas vienen de datos incompletos o de condiciones que nadie habló.',
        },
        {
          t: 'ul',
          items: [
            'No identificar a todos los titulares, o no prever la firma del cónyuge.',
            'Precio sin moneda o forma de pago sin detalle.',
            'Seña sin recibo ni custodio.',
            'No aclarar quién paga la comisión.',
            'Firmar sin que el escribano haya visto la documentación básica.',
          ],
        },
        {
          t: 'p',
          html: 'El proceso completo hasta la escritura está en <a href="/uruguay/como-cerrar-una-venta-inmobiliaria/">cómo cerrar una venta inmobiliaria en Uruguay</a>, y los honorarios en <a href="/uruguay/comision-inmobiliaria-uruguay/">comisión inmobiliaria en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'conseguir-reservas',
      h2: '¿Cómo llegar a más reservas?',
      blocks: [
        {
          t: 'p',
          html: 'Con más interesados calificados por propiedad. Si tenés dos o tres clientes interesados, la reserva llega antes y en mejores condiciones.',
        },
        {
          t: 'casalibre',
          title: 'Publicá en Casa-Libre',
          html: 'Publicar es gratis, los interesados te escriben directo por WhatsApp y no hay comisión sobre la venta. Está en la web y en apps para iPhone y Android.',
          button: 'Publicar gratis',
          href: 'https://uy.casa-libre.com/publicar',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿El boleto de reserva es lo mismo que el compromiso de compraventa?',
      a: 'No. El boleto aparta la propiedad con una seña; el compromiso fija las condiciones de la compra cuando hay plazo, pagos parciales o crédito, y puede inscribirse en el Registro de la Propiedad.',
    },
    {
      q: '¿Hay un modelo de boleto de reserva?',
      a: 'Cada inmobiliaria o escribano usa el suyo. Más que copiar un modelo, asegurate de que incluya partes, padrón, precio, seña, plazos y arrepentimiento.',
    },
    {
      q: '¿Se puede reservar un alquiler?',
      a: 'Sí, algunas inmobiliarias piden una reserva mientras se tramita la garantía. Aclará qué pasa con ese dinero si la garantía no se aprueba.',
    },
    {
      q: '¿Quién redacta el boleto de reserva?',
      a: 'Suele prepararlo la inmobiliaria o el escribano. En cualquier caso, que lo revise un escribano antes de firmar.',
    },
  ],
  internalSources: [
    { label: 'Uruguay autocomplete (gl=uy): "boleto de reserva uruguay", "boleto de reserva inmueble uruguay"', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=uy&q=boleto+de+reserva', date: '2026-11-13', note: 'Demand evidence for the topic.' },
    { label: 'General notarial practice', url: 'about:blank', date: '2026-11-13', note: 'To be confirmed by a Uruguayan escribano.' },
  ],
  closing: {
    title: 'Que tus propiedades lleguen a reserva',
    text: 'Publicá gratis en Casa-Libre Uruguay y atendé cada consulta por WhatsApp.',
    button: 'Crear cuenta gratis',
    href: 'https://uy.casa-libre.com/empresas',
  },
  related: ['como-cerrar-una-venta-inmobiliaria', 'autorizacion-de-venta-inmobiliaria', 'comision-inmobiliaria-uruguay'],
};
