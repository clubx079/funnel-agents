export default {
  slug: 'contrato-de-corretaje-inmobiliario',
  equivalent: 'contrato-de-corretaje-inmobiliario',
  group: 'Precio y contratos',
  order: 10,
  title: 'Contrato de corretaje inmobiliario en Bolivia: cláusulas',
  h1: 'Contrato de corretaje inmobiliario en Bolivia',
  description:
    'Qué es el contrato de corretaje inmobiliario en Bolivia, qué cláusulas incluir, cómo pactar la comisión y la exclusividad, y un esquema de ejemplo para revisar.',
  navLabel: 'Contrato de corretaje',
  blurb: 'Qué cláusulas debe tener un contrato de corretaje en Bolivia y cómo protege al agente y al propietario.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Bolivian lawyer must confirm: that the Código de Comercio deals with the corredor in general terms and that there is no specific law for real-estate brokerage contracts (no article numbers stated); that the contract can be a private document and when it is worth recognising signatures before a notario de fe pública; and the clause list. The outline is an illustration, not a legal template.',
  answer:
    'El contrato de corretaje inmobiliario es el acuerdo por el que un propietario encarga a un agente o inmobiliaria buscar comprador o inquilino para su inmueble, a cambio de una comisión. En Bolivia suele hacerse por documento privado y debe decir qué inmueble, a qué precio, por cuánto tiempo, con o sin exclusividad, y cuánto y cuándo se cobra. Lo ideal es que lo revise un abogado. Casa-Libre no cobra comisión al publicar.',
  summary: [
    'El corretaje es un encargo: el agente busca comprador o inquilino y cobra solo si la operación se concreta, salvo que el contrato diga otra cosa.',
    'Cláusulas básicas: partes, inmueble con su folio real, precio y moneda, plazo, exclusividad, comisión, obligaciones y terminación.',
    'No encontramos una ley específica para el corretaje inmobiliario: lo que vale es lo que se firma.',
    'En el plan de difusión puedes incluir la publicación en Casa-Libre, que es gratis y sin comisión.',
  ],
  cta: {
    title: 'Cumple lo que firmas',
    text: 'Publica el inmueble el día que firmas el contrato: en Casa-Libre Bolivia es gratis y las consultas llegan por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.bo/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es un contrato de corretaje inmobiliario?',
      blocks: [
        {
          t: 'p',
          html: 'Es el acuerdo escrito entre el propietario y el agente para vender o alquilar un inmueble. Dice qué hace cada uno y cuánto cobra el agente si la operación se concreta.',
        },
        {
          t: 'table',
          caption: 'Contratos que usa un agente inmobiliario en Bolivia',
          head: ['Documento', 'Para qué sirve', 'Guía'],
          rows: [
            ['Contrato de corretaje', 'El acuerdo completo de trabajo entre propietario y agente', 'Esta página'],
            ['Autorización de venta', 'Una versión corta: autoriza a ofrecer el inmueble a un precio', '<a href="/bolivia/autorizacion-de-venta-inmobiliaria/">Autorización de venta</a>'],
            ['Contrato de exclusividad', 'Solo ese agente puede vender durante un plazo', '<a href="/bolivia/contrato-de-exclusividad-inmobiliaria/">Contrato de exclusividad</a>'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de firmar',
          html: 'Información general. Este texto no reemplaza un contrato redactado para tu caso. Consulta con un abogado o un notario de fe pública antes de firmar.',
        },
      ],
    },
    {
      id: 'ley',
      h2: '¿Qué ley regula el corretaje inmobiliario en Bolivia?',
      blocks: [
        {
          t: 'p',
          html: 'No encontramos una ley específica para el corretaje inmobiliario. El Código de Comercio trata la figura del corredor en general, y el resto se rige por lo que las partes firman. Por eso un contrato claro vale más que cualquier costumbre.',
        },
        {
          t: 'p',
          html: 'El contrato puede hacerse por documento privado. Si quieres más respaldo, las firmas pueden reconocerse ante un notario de fe pública; consulta a tu abogado si conviene en tu caso.',
        },
      ],
    },
    {
      id: 'clausulas',
      h2: '¿Qué cláusulas debe tener el contrato?',
      blocks: [
        {
          t: 'p',
          html: 'Estas son las cláusulas que no deberían faltar. Cada una responde una pregunta que, si queda abierta, termina en discusión al momento de cobrar.',
        },
        {
          t: 'ol',
          items: [
            '<strong>Partes:</strong> nombre y carnet del propietario (y del cónyuge si corresponde) y del agente o inmobiliaria.',
            '<strong>Inmueble:</strong> dirección, superficie y número de folio real.',
            '<strong>Operación y precio:</strong> venta o alquiler, precio pedido, moneda y cómo se calcula el cambio.',
            '<strong>Plazo:</strong> fecha de inicio y de fin, y si se renueva.',
            '<strong>Exclusividad:</strong> si la hay, qué pasa si el propietario vende solo.',
            '<strong>Comisión:</strong> porcentaje o monto, sobre qué precio, quién paga y cuándo.',
            '<strong>Obligaciones del agente:</strong> difusión, visitas, informes, revisión de papeles.',
            '<strong>Obligaciones del propietario:</strong> entregar los papeles, permitir visitas, avisar si recibe ofertas directas.',
            '<strong>Terminación:</strong> cómo se termina antes del plazo y qué se paga en ese caso.',
          ],
        },
      ],
    },
    {
      id: 'comision',
      h2: '¿Cómo redactar la cláusula de comisión?',
      blocks: [
        {
          t: 'p',
          html: 'Escribe el porcentaje, sobre qué precio (el de la escritura, no el publicado), quién paga y en qué momento. Es habitual que en una venta ronde el 3% del precio, pagado por el vendedor, pero tu contrato puede fijar otra cifra.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: redacción de la comisión',
          html: 'El propietario pagará al agente una comisión del 3% sobre el precio de venta que figure en la escritura pública, en dólares estadounidenses, al momento de la firma de la escritura. Si la venta se hace en bolivianos, se calculará al tipo de cambio acordado en ese documento.',
        },
        {
          t: 'p',
          html: 'Cuánto se cobra en cada operación está en <a href="/bolivia/comision-inmobiliaria-bolivia/">comisión inmobiliaria en Bolivia</a>.',
        },
      ],
    },
    {
      id: 'esquema',
      h2: 'Esquema de un contrato de corretaje (para revisar con tu abogado)',
      blocks: [
        {
          t: 'p',
          html: 'Este esquema sirve para ordenar la conversación con el propietario y con tu abogado. No es un modelo legal para firmar tal como está.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Primera: partes', html: 'Datos del propietario y del agente, con carnet y domicilio.' },
            { title: 'Segunda: objeto', html: 'El inmueble, su folio real y la operación encargada.' },
            { title: 'Tercera: precio y plazo', html: 'Precio pedido, moneda, plazo y renovación.' },
            { title: 'Cuarta: exclusividad y comisión', html: 'Si es exclusivo, el porcentaje y el momento de pago.' },
            { title: 'Quinta: obligaciones', html: 'Lo que hace cada parte, incluido el plan de difusión.' },
            { title: 'Sexta: terminación y firmas', html: 'Cómo se termina, lugar, fecha y firmas.' },
          ],
        },
      ],
    },
    {
      id: 'plan-de-difusion',
      h2: '¿Qué poner en el plan de difusión?',
      blocks: [
        {
          t: 'p',
          html: 'Lo que realmente vas a hacer y puedes cumplir: fotos, portales, redes sociales, carteles y frecuencia de informes. Un plan escrito ayuda a que el propietario confíe y acepte la exclusividad.',
        },
        {
          t: 'casalibre',
          title: 'Una publicación que puedes prometer',
          html: 'Publicar en Casa-Libre Bolivia es gratis para inmobiliarias y agentes, y los interesados escriben directo por WhatsApp. Puedes incluirlo en tu plan sin costo para el propietario.',
          button: 'Ver la cuenta para inmobiliarias',
          href: 'https://casa-libre.com.bo/empresas',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿El contrato de corretaje tiene que ser ante notario?',
      a: 'No necesariamente: puede ser un documento privado. Reconocer las firmas ante un notario de fe pública le da más respaldo; consúltalo con tu abogado.',
    },
    {
      q: '¿Cuánto debe durar un contrato de corretaje?',
      a: 'Lo acuerdan las partes. Plazos de 60 a 90 días son una propuesta razonable para empezar, con opción de renovar si hay avance.',
    },
    {
      q: '¿Qué pasa si el propietario vende a alguien que yo le presenté después de que vence el contrato?',
      a: 'Depende del contrato. Muchos incluyen una cláusula que protege al agente si la venta se hace con un cliente suyo dentro de cierto tiempo después del vencimiento.',
    },
    {
      q: '¿Puedo usar un modelo de internet?',
      a: 'Como punto de partida, sí, pero adáptalo a Bolivia y hazlo revisar por un abogado. Muchos modelos son de otros países y no encajan con el sistema boliviano.',
    },
  ],
  internalSources: [
    { label: 'Google autocomplete gl=bo: contrato de corretaje', url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=bo&q=contrato+de+corretaje', date: '2026-11-13', note: 'contrato de corretaje inmobiliario, codigo de comercio, word, con exclusividad, modelo.' },
    { label: 'Corredor in the Bolivian Código de Comercio', url: 'about:blank', date: '2026-11-13', note: 'General knowledge; to be confirmed by a Bolivian lawyer.' },
  ],
  closing: {
    title: 'Firma y publica el mismo día',
    text: 'Publicar en Casa-Libre Bolivia es gratis y las consultas te llegan por WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.bo/publicar',
  },
  related: ['autorizacion-de-venta-inmobiliaria', 'contrato-de-exclusividad-inmobiliaria', 'comision-inmobiliaria-bolivia', 'documentos-para-vender-un-inmueble-en-bolivia'],
};
