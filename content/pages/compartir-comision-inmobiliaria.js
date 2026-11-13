export default {
  slug: 'compartir-comision-inmobiliaria',
  title: 'Compartir comisión inmobiliaria con otra inmobiliaria',
  h1: 'Compartir comisión inmobiliaria con otra inmobiliaria',
  description:
    'Cómo compartir comisión con otra inmobiliaria en Paraguay: cómo se reparte, qué dejar por escrito, carta modelo y cómo encontrar propiedades de colegas.',
  navLabel: 'Compartir comisión',
  blurb: 'Cómo se reparte una comisión entre inmobiliarias, qué dejar por escrito y una carta modelo para compartir una operación.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',
  reviewNote:
    'A Paraguayan accountant or escribano must check: that there is no official or published split between agencies (none found in the research), how each party invoices its share and the IVA (the page only says the accountant decides), the customary sale commission (about 5% plus IVA), and the mention of consent before passing client data under Ley 7593/2025 (personal data protection, promulgated Nov 2025).',
  answer:
    'Compartir comisión inmobiliaria es repartir la comisión de una operación entre la inmobiliaria que captó la propiedad y la que trajo al cliente. En Paraguay no hay un porcentaje oficial: el reparto se acuerda caso por caso, idealmente por escrito antes de la primera visita. Hay que dejar claro quién cobra al propietario, cuándo se transfiere la otra parte y quién factura. En Casa-Libre las inmobiliarias publican lado a lado, así que es fácil encontrar propiedades de colegas.',
  summary: [
    'Dos roles: la inmobiliaria que captó la propiedad y la que trajo al cliente. Cada una aporta una parte del trabajo.',
    'No hay porcentaje oficial ni referencia publicada para Paraguay: el reparto se acuerda en cada operación.',
    'Por escrito, antes de la visita: porcentaje, quién cobra, cuándo transfiere, quién factura y qué pasa si se cae.',
    'Las inmobiliarias publican en Casa-Libre en la misma búsqueda y el mismo mapa: ahí encontrás la propiedad que busca tu cliente.',
  ],
  cta: {
    title: 'Encontrá la propiedad que busca tu cliente',
    text: 'En Casa-Libre inmobiliarias, agentes y propietarios publican en el mismo mapa. Abrí tu cuenta de inmobiliaria gratis.',
    button: 'Crear cuenta de inmobiliaria en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'como-funciona',
      h2: '¿Cómo funciona compartir comisión entre inmobiliarias?',
      blocks: [
        {
          t: 'p',
          html: 'Una inmobiliaria tiene la propiedad captada y otra tiene al cliente que la quiere. Venden juntas y se reparten la comisión que paga el propietario, según lo que acordaron.',
        },
        {
          t: 'table',
          caption: 'Quién hace qué en una operación compartida',
          head: ['Rol', 'Qué aporta', 'Qué espera'],
          rows: [
            ['Inmobiliaria que captó', 'La propiedad, la autorización firmada, el contacto con el propietario', 'Que respeten su relación con el propietario'],
            ['Inmobiliaria que trae al cliente', 'Un cliente calificado, las visitas, la negociación del lado comprador', 'Información clara y su parte a tiempo'],
            ['Las dos', 'Acompañar hasta la escritura', 'Que lo acordado se cumpla'],
          ],
          note: 'Práctica habitual de trabajo, no una regla legal.',
        },
        {
          t: 'p',
          html: 'La comisión que se reparte es la que firmó el propietario en su autorización. Para ver qué propiedades tienen tus colegas en una zona, recorré el mapa de propiedades de <a href="https://casa-libre.com.py/propiedades">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'cuanto-se-reparte',
      h2: '¿Cuánto se reparte de la comisión?',
      blocks: [
        {
          t: 'p',
          html: 'No hay un porcentaje oficial ni una referencia publicada para Paraguay. Lo que vale es lo que las dos inmobiliarias acuerdan antes de mostrar la propiedad.',
        },
        {
          t: 'ul',
          items: [
            '<strong>En mitades</strong>: la forma más simple de acordar, fácil de explicar y de controlar.',
            '<strong>Según el trabajo</strong>: más para quien hace más visitas, negociación o trámites.',
            '<strong>Monto fijo</strong>: una suma cerrada para quien trae al cliente, útil en alquileres.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Sin cifra oficial',
          html: 'No hay arancel ni reparto oficial: todo depende de lo firmado. Información general. Consultá con un escribano o contador antes de tomar decisiones.',
        },
        {
          t: 'p',
          html: 'La comisión total habitual en una venta ronda el 5% más IVA, como explica <a href="/comision-inmobiliaria-paraguay/">comisión inmobiliaria en Paraguay</a>. Lo que no se reparte con nadie es el costo de publicar: en Casa-Libre es gratis y sin comisión sobre la venta.',
        },
      ],
    },
    {
      id: 'ejemplo-reparto',
      h2: 'Ejemplo de reparto de comisión con números',
      blocks: [
        {
          t: 'p',
          html: 'Primero se calcula la comisión total y después se reparte. Cada inmobiliaria reparte luego su parte con su agente, según su propio acuerdo interno.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: venta compartida en mitades',
          html: 'Supuestos hipotéticos: casa vendida en Gs. 900.000.000 (USD 123.288 aprox., a Gs. 7.300), comisión del 5% más IVA y reparto en mitades. Comisión: 900.000.000 × 5% = Gs. 45.000.000. Mitad: 45.000.000 ÷ 2 = Gs. 22.500.000. Cómo factura cada parte y cómo se suma el IVA lo define tu contador.',
          rows: [
            ['Concepto', 'Monto'],
            ['Comisión total, sin IVA', 'Gs. 45.000.000 (USD 6.164 aprox.)'],
            ['Inmobiliaria que captó (50%)', 'Gs. 22.500.000 (USD 3.082 aprox.)'],
            ['Inmobiliaria que trajo al cliente (50%)', 'Gs. 22.500.000 (USD 3.082 aprox.)'],
          ],
        },
        {
          t: 'p',
          html: 'Cómo se divide después entre la inmobiliaria y su agente está en <a href="/cuanto-gana-agente-inmobiliario-paraguay/">cuánto gana un agente inmobiliario en Paraguay</a>. Para estimar el precio de venta del ejemplo con datos reales, mirá las <a href="https://casa-libre.com.py/venta/casas/lambare">casas en venta en Lambaré en Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'que-dejar-por-escrito',
      h2: '¿Qué dejar por escrito al compartir una operación?',
      blocks: [
        {
          t: 'p',
          html: 'Un acuerdo corto, firmado o al menos confirmado por escrito por las dos inmobiliarias antes de la primera visita. Un mensaje de WhatsApp con la respuesta "de acuerdo" es mejor que nada; un documento firmado, mejor todavía.',
        },
        {
          t: 'ul',
          items: [
            'Propiedad, cliente presentado y fecha.',
            'Porcentaje o monto de cada parte.',
            'Quién cobra al propietario y en cuántos días transfiere la otra parte.',
            'Quién factura qué.',
            'Qué pasa si la operación se cae o si el cliente compra otra propiedad de la misma cartera.',
            'Que nadie contacta al propietario o al cliente del otro sin avisar.',
            'Consentimiento del cliente para compartir sus datos: la ley de protección de datos personales de 2025 (Ley N.º 7593/2025) pide un consentimiento expreso.',
          ],
        },
        {
          t: 'p',
          html: 'Si el propietario quiere entender cómo se reparten los costos de su venta, pasale la guía de Casa-Libre sobre impuestos y gastos al vender.',
        },
      ],
    },
    {
      id: 'carta-modelo',
      h2: 'Carta para compartir comisión inmobiliaria: modelo',
      blocks: [
        {
          t: 'p',
          html: 'Una carta corta alcanza: propone el reparto, nombra la propiedad y al cliente, y pide confirmación. Adaptala y que la revise tu contador o escribano si la operación es grande.',
        },
        {
          t: 'callout',
          tone: 'tip',
          title: 'Ejemplo ilustrativo: carta para compartir una operación',
          html: '<em>"Asunción, [fecha]. A [inmobiliaria]: Les proponemos compartir la operación de [tipo de propiedad] en [ciudad], publicada por ustedes en [enlace del aviso]. Presentamos a [cliente], con su consentimiento para compartir sus datos, interesado en visitarla. Proponemos repartir la comisión que paga el propietario en [porcentaje] para cada parte. La inmobiliaria captadora cobra al propietario y transfiere nuestra parte dentro de [días] de la firma de la escritura. Ninguna parte contacta al propietario o al cliente de la otra sin avisar. Les pedimos confirmar por esta vía. Saludos, [nombre, inmobiliaria, teléfono]."</em>',
        },
        {
          t: 'p',
          html: 'Para el primer contacto basta un WhatsApp: <em>"Hola, soy [nombre] de [inmobiliaria]. Tengo un cliente para tu casa de [barrio] que vi publicada. ¿Compartís la operación? Te paso la propuesta por escrito."</em> El enlace del aviso lo copiás desde la app de Casa-Libre para iPhone y Android.',
        },
      ],
    },
    {
      id: 'propiedades-de-colegas',
      h2: 'Cómo trabajar con otras inmobiliarias usando Casa-Libre',
      blocks: [
        {
          t: 'p',
          html: 'Cuando tu cliente busca algo que no tenés, buscalo en la cartera de tus colegas. En Casa-Libre las inmobiliarias publican lado a lado, en la misma búsqueda y en el mismo mapa que los propietarios.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Filtrá', html: 'Ciudad, tipo y operación, por ejemplo dúplex en venta en Fernando de la Mora en Casa-Libre.' },
            { title: 'Escribí a la inmobiliaria', html: 'Desde el aviso, por WhatsApp, presentándote como colega.' },
            { title: 'Proponé el reparto', html: 'Antes de llevar a tu cliente, con la carta de arriba.' },
            { title: 'Mostrá y negociá', html: 'Con información de las dos partes y sin saltear a nadie.' },
          ],
        },
        {
          t: 'casalibre',
          title: 'Tu cartera también la ven tus colegas',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
          button: 'Ver la cuenta para inmobiliarias en Casa-Libre',
          href: 'https://casa-libre.com.py/empresas',
        },
      ],
    },
    {
      id: 'reglas-de-convivencia',
      h2: 'Reglas de convivencia entre inmobiliarias',
      blocks: [
        {
          t: 'p',
          html: 'Las operaciones compartidas funcionan cuando las dos partes pueden confiar en la otra. Tres reglas lo resumen: no saltear, informar y pagar a tiempo.',
        },
        {
          t: 'ul',
          items: [
            'No contactar al propietario del colega por tu cuenta.',
            'Avisar el resultado de cada visita el mismo día.',
            'Transferir la parte acordada en el plazo prometido.',
          ],
        },
        {
          t: 'p',
          html: 'Anotá cada operación compartida en tu planilla de clientes: la guía <a href="/crm-inmobiliario-gratis/">CRM inmobiliario gratis</a> muestra cómo. Y si querés que te escriban colegas con clientes, publicá tu cartera gratis en <a href="https://casa-libre.com.py/publicar">Casa-Libre</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto se comparte de comisión entre inmobiliarias en Paraguay?',
      a: 'No hay un porcentaje oficial ni una referencia publicada. Se acuerda en cada operación: en mitades, según el trabajo o con un monto fijo. Lo importante es dejarlo por escrito antes de la visita.',
    },
    {
      q: '¿Quién cobra la comisión al propietario?',
      a: 'Normalmente la inmobiliaria que tiene la autorización firmada, que después transfiere la parte acordada a la otra. Escribí en cuántos días se hace esa transferencia.',
    },
    {
      q: '¿Se puede compartir comisión con un agente independiente?',
      a: 'Sí, con las mismas reglas: reparto, quién cobra, quién factura y plazos por escrito. Que tu contador confirme cómo se factura cada parte.',
    },
    {
      q: '¿Qué hago si un colega contacta directo a mi propietario?',
      a: 'Mostrale el acuerdo firmado y recordale lo pactado. Si no hubo acuerdo escrito, la próxima vez firmalo antes de dar la dirección de la propiedad.',
    },
  ],
  internalSources: [
    {
      label: 'BACN: Ley N° 7593/2025 de protección de datos personales',
      url: 'https://www.bacn.gov.py/leyes-paraguayas/12924/ley-n-75932025--de-proteccin-de-datos-personales-en-la-repblica-del-paraguay',
      date: '2025-11-27',
      note: 'Art. 3(3): consentimiento libre, expreso, específico, informado e inequívoco. Usado para el consejo de pedir consentimiento antes de compartir datos del cliente.',
    },
    {
      label: 'Hacé Cuentas: calculadora de comisión inmobiliaria en Paraguay',
      url: 'https://hacecuentas.com/py/calculadora-comision-inmobiliaria-paraguay',
      date: '2026-08-16',
      note: 'Comisión habitual de alrededor de 5% más IVA en ventas. No se encontró referencia publicada sobre el reparto entre inmobiliarias.',
    },
    {
      label: 'Google: sugerencias de búsqueda para "compartir comision inmobiliaria" (Paraguay)',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=compartir%20comision%20inmobiliaria',
      date: '2026-11-12',
      note: 'Variantes: compartir comisión inmobiliaria, carta para compartir comisión inmobiliaria.',
    },
  ],
  closing: {
    title: 'Que tus colegas encuentren tu cartera',
    text: 'Publicá tus propiedades gratis en Casa-Libre, junto a las de otras inmobiliarias, y recibí consultas por WhatsApp.',
    button: 'Abrir cuenta de inmobiliaria',
    href: 'https://casa-libre.com.py/empresas',
  },
  related: ['comision-inmobiliaria-paraguay', 'cuanto-gana-agente-inmobiliario-paraguay', 'como-conseguir-clientes-para-mi-inmobiliaria', 'crm-inmobiliario-gratis'],
};
