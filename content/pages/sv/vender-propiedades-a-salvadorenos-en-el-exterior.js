export default {
  slug: 'vender-propiedades-a-salvadorenos-en-el-exterior',
  group: 'Clientes y ventas',
  nav: 'Exterior',
  order: 5,
  title: 'Vender propiedades a salvadoreños en el exterior: guía',
  h1: 'Cómo vender propiedades a salvadoreños en el exterior',
  description:
    'Cómo atender a salvadoreños que viven afuera y quieren comprar o vender en El Salvador: videollamadas, poderes, apostilla, crédito del FSV y pagos.',
  navLabel: 'Clientes en el exterior',
  blurb: 'Cómo trabajar con salvadoreños en el exterior que compran o venden propiedades en El Salvador, de la videollamada a la escritura.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Salvadoran notario must confirm: poderes granted before a Salvadoran consul (consular notarial function) or before a foreign notary with apostille (El Salvador is a party to the Hague Apostille Convention), the need to have the poder protocolised or registered before use, and the requirements to sign an escritura from abroad. Check the FSV "Vivienda Cercana" programme description (eligibility including people with residence, citizenship or work permits abroad and remittance receivers; terms up to 25 years per press) against the FSV website, and the anti-money-laundering note about transfers.',
  answer:
    'Para vender propiedades a salvadoreños en el exterior, ofrezca lo que no pueden hacer a distancia: visitar, fotografiar, revisar papeles en el CNR y acompañar la firma. Trabaje con recorridos por videollamada, informes escritos y un poder otorgado ante un consulado salvadoreño o ante notario con apostilla. Muchos compran con ahorro propio o con el crédito del FSV para salvadoreños afuera. Para mostrarles su cartera con fotos y mapa, le recomendamos Casa-Libre.',
  summary: [
    'El cliente en el exterior necesita a alguien de confianza que vea, revise y firme por él, o que le prepare todo para firmar en su viaje.',
    'La firma a distancia se resuelve con un poder ante un consulado salvadoreño o ante notario extranjero con apostilla.',
    'El FSV tiene una línea de crédito para salvadoreños en el exterior; verifique requisitos actuales con el FSV.',
    'Un anuncio en Casa-Libre con fotos, precio en dólares y mapa es fácil de compartir con la familia.',
  ],
  cta: {
    title: 'Su cartera, visible desde cualquier país',
    text: 'En Casa-Libre El Salvador publica gratis y los interesados le escriben por WhatsApp desde donde estén.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'quienes-son',
      h2: '¿Quiénes son los clientes salvadoreños en el exterior?',
      blocks: [
        {
          t: 'p',
          html: 'Son familias que viven afuera, sobre todo en Estados Unidos, y que compran para volver, para sus padres o como inversión, o que venden una casa heredada o que ya no usan. Su necesidad común es confiar en alguien que esté aquí.',
        },
        {
          t: 'table',
          caption: 'Perfiles frecuentes y qué necesita cada uno',
          head: ['Perfil', 'Qué busca', 'Qué necesita de usted'],
          rows: [
            ['Compra para retiro o regreso', 'Casa en residencial con seguridad, o casa de playa', 'Recorridos por video y revisión de papeles'],
            ['Compra para sus padres', 'Casa cerca de la familia, fácil de mantener', 'Coordinar visitas con los familiares de aquí'],
            ['Inversión para alquilar', 'Apartamento o casa en zona de demanda', 'Estimación de alquiler y administración'],
            ['Venta de herencia o casa sin uso', 'Vender sin viajar', 'Poder, papeles en orden, informes frecuentes'],
          ],
          note: 'Perfiles de trabajo, no estadísticas.',
        },
      ],
    },
    {
      id: 'proceso-a-distancia',
      h2: 'Cómo es el proceso de compra a distancia',
      blocks: [
        {
          t: 'p',
          html: 'El proceso es el mismo que una compra local, pero cada paso se documenta y se envía. El cliente decide con información, no con promesas.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Búsqueda', html: 'Envíe enlaces con fotos, precio y mapa; filtre por zona y presupuesto.' },
            { title: 'Visita por videollamada', html: 'Recorrido completo, de día, incluyendo calle, acceso y vecinos.' },
            { title: 'Revisión de papeles', html: 'Comparta la certificación extractada del CNR y la solvencia municipal.' },
            { title: 'Oferta y promesa de venta', html: 'Firmada por el cliente en su viaje, o por su apoderado aquí.' },
            { title: 'Escritura ante notario', html: 'En persona o mediante apoderado, con el pago por transferencia bancaria.' },
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Consulte con un notario antes de que su cliente otorgue un poder o firme una promesa de venta.',
        },
      ],
    },
    {
      id: 'poder',
      h2: 'El poder: cómo firmar sin viajar',
      blocks: [
        {
          t: 'p',
          html: 'Si el cliente no puede viajar, otorga un poder a un familiar o persona de confianza. Puede hacerlo ante un consulado salvadoreño, o ante notario de su país con apostilla.',
        },
        {
          t: 'ul',
          items: [
            'El poder debe permitir expresamente vender, comprar o hipotecar, según el caso.',
            'Pida al notario salvadoreño que revise el texto antes de que se otorgue.',
            'Confirme si debe inscribirse o protocolizarse antes de usarlo.',
            'Revise que esté vigente el día de la firma.',
          ],
        },
      ],
    },
    {
      id: 'financiamiento',
      h2: 'Financiamiento: ahorro, bancos y el FSV',
      blocks: [
        {
          t: 'p',
          html: 'Muchos compran con ahorros enviados al país. Otros usan crédito: algunos bancos atienden a salvadoreños en el exterior y el FSV tiene una línea, conocida como Vivienda Cercana, para quienes viven afuera o reciben remesas.',
        },
        {
          t: 'p',
          html: 'Requisitos, plazos y tasas cambian: pida al cliente que consulte directo con el FSV o el banco. Vea el proceso en <a href="/el-salvador/comprar-casa-con-credito-del-fondo-social-para-la-vivienda/">comprar casa con crédito del FSV</a>.',
        },
      ],
    },
    {
      id: 'confianza',
      h2: 'Cómo ganarse la confianza de un cliente que no le conoce',
      blocks: [
        {
          t: 'p',
          html: 'A distancia, la confianza se construye con información frecuente y comprobable. Prometa poco y documente mucho.',
        },
        {
          t: 'ul',
          items: [
            'Informe semanal por WhatsApp: consultas, visitas, ofertas.',
            'Fotos y videos con fecha, sin filtros.',
            'Pagos siempre por transferencia a cuentas a nombre del vendedor o del notario, nunca a la cuenta del agente.',
            'Referencias de otros clientes en el exterior.',
          ],
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Origen de los fondos',
          html: 'En pagos grandes desde el exterior, el banco y el notario pueden pedir documentos sobre el origen del dinero. Avíselo al cliente desde el inicio.',
        },
      ],
    },
    {
      id: 'vender-por-ellos',
      h2: 'Cuando el cliente en el exterior es quien vende',
      blocks: [
        {
          t: 'p',
          html: 'El propietario que vive afuera necesita que usted haga todo lo que él no puede: mostrar, negociar y preparar la firma. Firme un contrato de corretaje claro antes de empezar.',
        },
        {
          t: 'p',
          html: 'Publique la propiedad en <a href="https://sv.casa-libre.com/publicar">Casa-Libre</a> y envíele el enlace: verá cómo se presenta su casa y podrá compartirlo con su familia. El modelo de contrato está en <a href="/el-salvador/contrato-de-corretaje-el-salvador/">contrato de corretaje en El Salvador</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Puede un salvadoreño en Estados Unidos comprar casa en El Salvador sin viajar?',
      a: 'Sí, mediante un apoderado en El Salvador con un poder otorgado ante el consulado o ante notario con apostilla. Un notario salvadoreño debe revisar el poder antes de usarlo.',
    },
    {
      q: '¿El FSV presta a salvadoreños en el exterior?',
      a: 'Sí, el FSV tiene una línea para salvadoreños que viven afuera o reciben remesas. Los requisitos cambian: consulte las condiciones vigentes directamente con el FSV.',
    },
    {
      q: '¿Cómo muestro una casa a un cliente que vive afuera?',
      a: 'Con un recorrido por videollamada, de día, incluyendo calle y acceso, y un enlace con fotos, precio y mapa que pueda compartir con su familia.',
    },
    {
      q: '¿Cómo se paga una compra desde el exterior?',
      a: 'Por transferencia bancaria a la cuenta del vendedor o según indique el notario, nunca en efectivo ni a la cuenta del agente. Guarde todos los comprobantes.',
    },
  ],
  internalSources: [
    { label: 'Press: FSV Vivienda Cercana for Salvadorans abroad', url: 'https://www.elsalvador.com/dinero-y-negocios/entorno-economico/vivienda-cercana-facilita-compra-de-casa-desde-el-exterior-/1269266/2026/', date: '2026-11-13', note: 'Eligibility and terms per press; verify with FSV.' },
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Path used: /publicar.' },
  ],
  closing: {
    title: 'Muestre su cartera a la diáspora',
    text: 'Publique gratis en Casa-Libre El Salvador y comparta cada anuncio por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['comprar-casa-con-credito-del-fondo-social-para-la-vivienda', 'como-captar-propiedades', 'casas-de-playa-la-libertad', 'contrato-de-corretaje-el-salvador'],
};
