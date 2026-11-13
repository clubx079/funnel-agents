export default {
  slug: 'autorizacion-de-venta-de-inmueble',
  equivalent: 'autorizacion-de-venta-inmobiliaria',
  group: 'Precio y contratos',
  order: 50,
  title: 'Autorización de venta de inmueble: qué debe tener',
  h1: 'Autorización de venta de un inmueble en El Salvador',
  description:
    'Qué es una carta de autorización de venta de un inmueble en El Salvador, en qué se diferencia del contrato y del poder, y qué datos debe incluir.',
  navLabel: 'Autorización de venta',
  blurb: 'Qué es la autorización de venta de un inmueble en El Salvador, qué datos lleva y en qué se diferencia de un poder.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Salvadoran notario must confirm: the difference stated between an autorización de venta (permission to promote and present clients), a contrato de corretaje (with commission terms) and a poder (power to sign the sale, which needs formalities), that co-owners and spouses under certain marital property regimes must all sign, and that a simple letter does not allow the agent to sign a promesa or escritura. The field list is an outline, not a legal template.',
  answer:
    'La autorización de venta es el documento en que el propietario de un inmueble permite a un agente de bienes raíces ofrecerlo, publicarlo y presentar clientes. En El Salvador no reemplaza un poder: el agente no puede firmar la promesa ni la escritura con ella. Debe identificar a todos los propietarios, la propiedad según el CNR, el precio, el plazo y si es exclusiva. Con ella firmada, ya puede publicar la propiedad, por ejemplo en Casa-Libre.',
  summary: [
    'La autorización permite ofrecer y publicar la propiedad; no permite firmar la venta.',
    'Deben firmarla todos los propietarios que aparecen en el CNR.',
    'Puede ser una carta breve o parte del contrato de corretaje, donde va la comisión.',
    'Con la autorización firmada, publique la propiedad en Casa-Libre y envíe el enlace al propietario.',
  ],
  cta: {
    title: 'Autorizada hoy, publicada hoy',
    text: 'En Casa-Libre El Salvador publica gratis cada propiedad que capta.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-es',
      h2: '¿Qué es una autorización de venta de inmueble?',
      blocks: [
        {
          t: 'p',
          html: 'Es el permiso escrito del propietario para que usted ofrezca su propiedad. Le protege frente a un reclamo de "nadie le dio permiso de publicar" y le da al cliente la seguridad de que trata con alguien autorizado.',
        },
        {
          t: 'table',
          caption: 'Autorización, contrato de corretaje y poder',
          head: ['Documento', 'Qué permite', 'Formalidad'],
          rows: [
            ['Autorización de venta', 'Ofrecer, publicar, mostrar y presentar clientes', 'Carta firmada por los propietarios'],
            ['Contrato de corretaje', 'Lo anterior más comisión, plazo y obligaciones', 'Contrato escrito; conviene autenticar firmas'],
            ['Poder para vender', 'Firmar la promesa y la escritura en nombre del propietario', 'Ante notario o consulado, con requisitos'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Consulte con un notario antes de firmar o de pedir a un propietario que firme.',
        },
      ],
    },
    {
      id: 'datos',
      h2: '¿Qué datos debe incluir la autorización?',
      blocks: [
        {
          t: 'p',
          html: 'Aunque sea una carta breve, debe identificar sin dudas a quién autoriza, qué propiedad y en qué condiciones.',
        },
        {
          t: 'ol',
          items: [
            'Nombre y DUI de cada propietario.',
            'Nombre del agente o de la inmobiliaria autorizada.',
            'Ubicación de la propiedad y datos de inscripción en el CNR.',
            'Precio de publicación.',
            'Plazo de la autorización.',
            'Si es exclusiva o no.',
            'Si autoriza colocar rótulo y publicar fotos.',
            'Lugar, fecha y firmas.',
          ],
        },
      ],
    },
    {
      id: 'quien-firma',
      h2: '¿Quién debe firmar?',
      blocks: [
        {
          t: 'p',
          html: 'Todos los propietarios que aparecen en la certificación del CNR. Si la propiedad es de un matrimonio, de varios herederos o de una sociedad, pida la firma de todos o de quien tenga facultades.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Herencia:</strong> confirme que la aceptación de herencia esté inscrita y que firmen todos los herederos.',
            '<strong>Sociedad:</strong> firma el representante legal, con su credencial vigente.',
            '<strong>Propietario en el exterior:</strong> puede firmar a distancia; para vender necesitará un poder.',
          ],
        },
      ],
    },
    {
      id: 'exclusiva',
      h2: 'Autorización exclusiva o no exclusiva',
      blocks: [
        {
          t: 'p',
          html: 'Con autorización exclusiva solo usted ofrece la propiedad durante el plazo. Sin exclusividad, el propietario puede autorizar a otros agentes, y cobra quien traiga al comprador.',
        },
        {
          t: 'p',
          html: 'Si pide exclusividad, ofrezca un plan escrito a cambio. Vea <a href="/el-salvador/contrato-de-exclusividad-bienes-raices/">contrato de exclusividad en bienes raíces</a>.',
        },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo de carta de autorización',
      blocks: [
        {
          t: 'p',
          html: 'Un texto base para revisar con su notario. Los datos son inventados.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: carta de autorización de venta',
          html: '"San Salvador, 13 de noviembre de 2026. Yo, [nombre], con DUI [número], propietario del inmueble ubicado en [colonia, municipio], inscrito en el CNR bajo matrícula [número], autorizo a [agente o inmobiliaria] a ofrecer en venta dicho inmueble por US$ 95.000, publicarlo con fotos, colocar rótulo y mostrarlo a clientes, durante 90 días a partir de esta fecha, de forma no exclusiva. La comisión y demás condiciones constan en contrato aparte. Firma: ____."',
        },
      ],
    },
    {
      id: 'revocar',
      h2: '¿Se puede revocar una autorización?',
      blocks: [
        {
          t: 'p',
          html: 'En general, el propietario puede retirar la autorización, pero si hay contrato de corretaje con plazo o exclusividad, se aplica lo que diga ese contrato. Pida que la revocación sea por escrito.',
        },
        {
          t: 'p',
          html: 'Si la retira, quite el anuncio el mismo día de <a href="https://sv.casa-libre.com/publicar">Casa-Libre</a> y de sus otros canales, y guarde la lista de clientes que presentó. El contrato completo está en <a href="/el-salvador/contrato-de-corretaje-el-salvador/">contrato de corretaje en El Salvador</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Con una autorización de venta puedo firmar la escritura?',
      a: 'No. Para firmar en nombre del propietario se necesita un poder con las formalidades que exige la ley. La autorización solo permite ofrecer la propiedad.',
    },
    {
      q: '¿La autorización tiene que ir ante notario?',
      a: 'No encontramos una obligación general para una carta de autorización, pero autenticar las firmas le da más seguridad.',
    },
    {
      q: '¿Qué pasa si solo firma uno de los propietarios?',
      a: 'La autorización queda incompleta y la venta puede bloquearse más adelante. Pida la firma de todos los que aparecen en el CNR.',
    },
    {
      q: '¿Puedo publicar una propiedad sin autorización?',
      a: 'No se lo recomendamos: el propietario puede reclamar y pierde confianza. Pida la autorización antes de publicar fotos o precio.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Path used: /publicar.' },
  ],
  closing: {
    title: 'Publique lo que le autorizaron',
    text: 'En Casa-Libre El Salvador es gratis y las consultas le llegan por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['contrato-de-corretaje-el-salvador', 'contrato-de-exclusividad-bienes-raices', 'como-captar-propiedades'],
};
