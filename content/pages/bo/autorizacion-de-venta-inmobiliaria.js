export default {
  slug: 'autorizacion-de-venta-inmobiliaria',
  equivalent: 'autorizacion-de-venta-inmobiliaria',
  group: 'Precio y contratos',
  order: 15,
  title: 'Autorización de venta inmobiliaria en Bolivia: modelo',
  h1: 'Autorización de venta inmobiliaria en Bolivia',
  description:
    'Qué es una autorización de venta inmobiliaria en Bolivia, qué datos debe tener, diferencia entre exclusiva y abierta, cómo revocarla y un esquema para tu abogado.',
  navLabel: 'Autorización de venta',
  blurb: 'Los campos de una autorización de venta en Bolivia, qué revisar antes de firmarla y cómo usarla con el propietario.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Bolivian lawyer must confirm: that an autorización de venta is commonly a private document between owner and agent; that it does not give the agent power to sign the sale (that needs a poder notarial); the spouse signature on bienes gananciales; and the general statements on revoking it before the end date. The field list is an illustration, not a legal template.',
  answer:
    'La autorización de venta es el documento con el que el propietario permite a un agente ofrecer su inmueble a un precio, por un plazo y a cambio de una comisión. En Bolivia suele ser un documento privado y no da poder para firmar la venta: para eso hace falta un poder notarial. Antes de firmarla, revisa el folio real y quiénes son los titulares. Para publicar el inmueble gratis, te recomendamos Casa-Libre.',
  summary: [
    'La autorización permite ofrecer el inmueble; no permite firmar la venta en nombre del propietario.',
    'Debe incluir titulares, inmueble con folio real, precio y moneda, plazo, exclusividad, comisión y firmas.',
    'Si el inmueble es ganancial, conviene que firme también el cónyuge.',
    'Con la autorización firmada, publica el mismo día en Casa-Libre, gratis y con consultas por WhatsApp.',
  ],
  cta: {
    title: 'Autorización firmada, aviso publicado',
    text: 'En Casa-Libre Bolivia publicas cada inmueble que te autorizan, gratis, con consultas directo por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es una autorización de venta?',
      blocks: [
        {
          t: 'p',
          html: 'Es un documento corto en el que el propietario autoriza al agente a ofrecer su inmueble. Es la base para publicar, mostrar el inmueble y cobrar la comisión si se vende.',
        },
        {
          t: 'table',
          caption: 'Autorización de venta, contrato de corretaje y poder notarial',
          head: ['Documento', 'Qué permite', 'Forma habitual'],
          rows: [
            ['Autorización de venta', 'Ofrecer y mostrar el inmueble a un precio', 'Documento privado'],
            ['Contrato de corretaje', 'Lo mismo, con todas las obligaciones de cada parte', 'Documento privado, con firmas que pueden reconocerse'],
            ['Poder notarial para vender', 'Firmar la venta en nombre del propietario', 'Ante notario de fe pública'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de firmar',
          html: 'Información general. Una autorización mal redactada puede dejarte sin comisión. Consulta con un abogado o un notario de fe pública antes de firmar.',
        },
      ],
    },
    {
      id: 'campos',
      h2: '¿Qué datos debe tener una autorización de venta?',
      blocks: [
        {
          t: 'p',
          html: 'Los datos mínimos son quién autoriza, qué inmueble, a qué precio, por cuánto tiempo y cuánto cobras. Sin cualquiera de ellos, la autorización sirve poco.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Titulares', html: 'Nombre, carnet de identidad y domicilio de todos los propietarios que figuran en el folio real.' },
            { title: 'Inmueble', html: 'Dirección, zona, superficie y número de folio real.' },
            { title: 'Precio', html: 'Precio pedido, moneda y si se acepta negociar.' },
            { title: 'Plazo', html: 'Fecha de inicio y de vencimiento.' },
            { title: 'Exclusividad', html: 'Si es exclusiva o abierta.' },
            { title: 'Comisión', html: 'Porcentaje, sobre qué precio, quién paga y cuándo.' },
            { title: 'Firmas', html: 'De todos los titulares, del cónyuge si corresponde, y del agente.' },
          ],
        },
      ],
    },
    {
      id: 'exclusiva-o-abierta',
      h2: '¿Autorización exclusiva o abierta?',
      blocks: [
        {
          t: 'p',
          html: 'En la exclusiva, solo tú puedes vender durante el plazo; en la abierta, el propietario puede trabajar con otros agentes y vender por su cuenta. La exclusiva te permite invertir más en el inmueble; la abierta es más fácil de conseguir.',
        },
        {
          t: 'p',
          html: 'Cómo proponer y justificar la exclusividad está en <a href="/bolivia/contrato-de-exclusividad-inmobiliaria/">contrato de exclusividad inmobiliaria</a>.',
        },
      ],
    },
    {
      id: 'antes-de-firmar',
      h2: '¿Qué revisar antes de que el propietario firme?',
      blocks: [
        {
          t: 'p',
          html: 'Que quien firma pueda vender. Revisa el folio real y el certificado alodial: si figuran dos titulares, firman los dos; si hay herencia sin declaratoria, todavía no se puede vender.',
        },
        {
          t: 'ul',
          items: [
            'Carnet de cada titular, comparado con el folio real.',
            'Estado civil: si el inmueble es ganancial, firma del cónyuge.',
            'Gravámenes: hipotecas, embargos o anticréticos vigentes.',
            'Impuesto a la propiedad al día.',
          ],
        },
        {
          t: 'p',
          html: 'La lista completa está en <a href="/bolivia/documentos-para-vender-un-inmueble-en-bolivia/">documentos para vender un inmueble en Bolivia</a>.',
        },
      ],
    },
    {
      id: 'revocar',
      h2: '¿Se puede revocar una autorización de venta?',
      blocks: [
        {
          t: 'p',
          html: 'En general sí, pero las consecuencias dependen de lo que diga la autorización. Si es exclusiva y tiene plazo, puede preverse una compensación si el propietario la termina antes o vende por su cuenta.',
        },
        {
          t: 'p',
          html: 'Escribe en la autorización cómo se avisa la revocación (por escrito, con cuántos días) y qué pasa con los clientes que ya presentaste. Así nadie discute después.',
        },
      ],
    },
    {
      id: 'despues-de-firmar',
      h2: '¿Qué hacer el día que firmas la autorización?',
      blocks: [
        {
          t: 'p',
          html: 'Publicar. El propietario mide tu trabajo por lo que ve en los primeros días: fotos tomadas, aviso en línea y primeras consultas.',
        },
        {
          t: 'casalibre',
          title: 'Publica el inmueble el mismo día',
          html: 'Con la app de Casa-Libre para iPhone o Android cargas el inmueble desde la propiedad, con las fotos recién tomadas y la ubicación en el mapa. Publicar es gratis y las consultas te llegan por WhatsApp.',
          button: 'Ver la cuenta para inmobiliarias',
          href: 'https://casa-libre.com.bo/empresas',
        },
        {
          t: 'p',
          html: 'Envía al propietario el enlace del aviso por WhatsApp. Es la primera prueba de que cumples lo que prometiste.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿La autorización de venta tiene que estar firmada ante notario?',
      a: 'No necesariamente. Suele hacerse como documento privado. Si quieres más respaldo, las firmas pueden reconocerse ante un notario de fe pública.',
    },
    {
      q: '¿Con una autorización de venta puedo firmar la venta?',
      a: 'No. Para firmar la venta en nombre del propietario hace falta un poder notarial que lo diga expresamente.',
    },
    {
      q: '¿Cuánto tiempo debe durar la autorización?',
      a: 'Lo acuerdan las partes. Plazos de 60 a 90 días son habituales para empezar; si el inmueble es difícil, conviene pedir más.',
    },
    {
      q: '¿Puede firmar la autorización un hijo o un familiar del propietario?',
      a: 'Solo si tiene un poder notarial que lo permita. Si no, la autorización la firma el titular que figura en el folio real; de lo contrario, puedes quedarte sin comisión aunque consigas comprador.',
    },
    {
      q: '¿Sirve la autorización para un inmueble en anticrético?',
      a: 'Sí, pero escribe en la autorización que el inmueble está en anticrético, hasta cuándo y cómo se devolverá el dinero al anticresista con la venta. El comprador tiene que saberlo desde el principio.',
    },
    {
      q: '¿Qué pasa si el propietario baja el precio durante la autorización?',
      a: 'Deja constancia por escrito del nuevo precio, firmada por el propietario, y actualiza el aviso el mismo día.',
    },
  ],
  internalSources: [
    { label: 'Autorización de venta practice in Bolivia', url: 'about:blank', date: '2026-11-13', note: 'General knowledge; to be confirmed by a Bolivian lawyer.' },
  ],
  closing: {
    title: 'Tu próxima autorización, en línea hoy',
    text: 'Publicar en Casa-Libre Bolivia es gratis y las consultas te llegan por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['contrato-de-corretaje-inmobiliario', 'contrato-de-exclusividad-inmobiliaria', 'documentos-para-vender-un-inmueble-en-bolivia', 'comision-inmobiliaria-bolivia'],
};
