export default {
  slug: 'como-cerrar-una-venta-de-bienes-raices',
  equivalent: 'como-cerrar-una-venta-inmobiliaria',
  group: 'Clientes y ventas',
  order: 10,
  title: 'Cómo cerrar una venta de bienes raíces en El Salvador',
  h1: 'Cómo cerrar una venta de bienes raíces en El Salvador',
  description:
    'Pasos para cerrar una venta de bienes raíces en El Salvador: oferta, promesa de venta, crédito, escritura ante notario, impuesto e inscripción en el CNR.',
  navLabel: 'Cerrar una venta',
  blurb: 'El camino de la oferta a la escritura en El Salvador: promesa de venta, notario, impuesto de transferencia e inscripción en el CNR.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Salvadoran notario must confirm: the closing sequence (oferta, promesa de venta in escritura pública or documento autenticado, arras, escritura de compraventa, inscription at the CNR Registro de la Propiedad Raíz e Hipotecas), that the promesa de venta can be registered, the Impuesto sobre Transferencia de Bienes Raíces (3% on the value above US$ 28,571.43, paid by the buyer by custom, declared before inscription), who customarily pays notary fees and registry fees, and the solvencia municipal requirement after the 2024 municipal reorganisation.',
  answer:
    'Cerrar una venta de bienes raíces en El Salvador sigue un camino conocido: oferta por escrito, promesa de venta con arras ante notario, aprobación del crédito si lo hay, escritura de compraventa firmada ante notario, pago del impuesto de transferencia cuando corresponde e inscripción en el CNR. El agente prepara los papeles, coordina fechas y evita sorpresas. Para conseguir el cliente que llega a ese cierre, le recomendamos publicar en Casa-Libre.',
  summary: [
    'El cierre tiene seis pasos: oferta, promesa de venta, crédito, escritura, impuesto e inscripción en el CNR.',
    'La promesa de venta fija precio, plazo y arras; conviene hacerla ante notario.',
    'El Impuesto sobre Transferencia de Bienes Raíces es del 3% sobre el valor que excede US$ 28.571,43.',
    'Revise la certificación extractada del CNR antes de la promesa, no después.',
  ],
  cta: {
    title: 'Clientes listos para cerrar',
    text: 'En Casa-Libre El Salvador publica gratis y los interesados le escriben directo por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://sv.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'pasos',
      h2: '¿Cuáles son los pasos para cerrar una venta en El Salvador?',
      blocks: [
        {
          t: 'p',
          html: 'Son seis pasos, de la oferta a la inscripción. El agente no firma la escritura, pero coordina a vendedor, comprador, banco o FSV y notario.',
        },
        {
          t: 'table',
          caption: 'Del acuerdo a la inscripción',
          head: ['Paso', 'Qué se hace', 'Quién interviene'],
          rows: [
            ['1. Oferta', 'El comprador ofrece precio y condiciones por escrito', 'Comprador, vendedor, agente'],
            ['2. Promesa de venta', 'Se fija precio, plazo y arras', 'Notario, vendedor, comprador'],
            ['3. Crédito', 'Avalúo y aprobación, si el comprador financia', 'Banco o FSV'],
            ['4. Escritura de compraventa', 'Se firma la transferencia y, si hay crédito, la hipoteca', 'Notario, partes, banco o FSV'],
            ['5. Impuesto de transferencia', 'Se declara y paga cuando el valor supera el mínimo exento', 'Comprador, Ministerio de Hacienda'],
            ['6. Inscripción', 'La escritura se presenta al Registro de la Propiedad del CNR', 'Notario'],
          ],
          note: 'Información general a noviembre de 2026.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Consulte con un notario antes de firmar una promesa de venta o una escritura.',
        },
      ],
    },
    {
      id: 'promesa-de-venta',
      h2: '¿Qué es la promesa de venta y qué debe incluir?',
      blocks: [
        {
          t: 'p',
          html: 'La promesa de venta es el contrato en que vendedor y comprador se obligan a firmar la compraventa en un plazo y con condiciones fijadas. Es habitual que el comprador entregue arras, un anticipo que se pierde o se devuelve según lo pactado.',
        },
        {
          t: 'ul',
          items: [
            'Identificación de las partes (DUI o pasaporte) y de la propiedad según el CNR.',
            'Precio total, arras y forma de pago del saldo.',
            'Plazo para firmar la escritura y qué pasa si el crédito no se aprueba.',
            'Estado en que se entrega la propiedad y fecha de entrega.',
            'Quién paga gastos de notario, impuesto e inscripción.',
          ],
        },
        {
          t: 'p',
          html: 'Pedir que el notario la otorgue en escritura pública o como documento autenticado da más seguridad a ambas partes.',
        },
      ],
    },
    {
      id: 'impuesto-y-gastos',
      h2: '¿Qué impuestos y gastos hay al cerrar?',
      blocks: [
        {
          t: 'p',
          html: 'El principal es el Impuesto sobre Transferencia de Bienes Raíces: 3% sobre la parte del valor que supera US$ 28.571,43. Además hay honorarios del notario y derechos de inscripción en el CNR.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: impuesto de transferencia de una casa de US$ 100.000',
          html: 'Cálculo hipotético. Confirme con el notario el valor que se declara y quién paga.',
          rows: [
            ['Concepto', 'Monto'],
            ['Valor de la venta', 'US$ 100.000'],
            ['Parte exenta', 'US$ 28.571,43'],
            ['Parte gravada (100.000 − 28.571,43)', 'US$ 71.428,57'],
            ['Impuesto (71.428,57 × 3%)', 'US$ 2.142,86'],
          ],
        },
        {
          t: 'p',
          html: 'Por costumbre lo paga el comprador, pero se puede pactar otra cosa en la promesa. Si el vendedor obtiene ganancia, puede haber impuesto sobre la renta: que lo revise su contador.',
        },
      ],
    },
    {
      id: 'antes-de-la-promesa',
      h2: 'Qué revisar antes de firmar la promesa',
      blocks: [
        {
          t: 'p',
          html: 'Las ventas se caen por papeles, no por precio. Revise todo antes de que el comprador entregue arras.',
        },
        {
          t: 'ul',
          items: [
            'Certificación extractada reciente del CNR: titular correcto, sin embargos ni hipotecas inesperadas.',
            'Solvencia municipal de la alcaldía que corresponde.',
            'Si hay hipoteca, carta del banco con el saldo para cancelarla con el pago.',
            'Si vende un apoderado, poder vigente y suficiente para vender.',
            'Si es herencia, que la aceptación esté inscrita.',
          ],
        },
      ],
    },
    {
      id: 'tecnicas-de-cierre',
      h2: 'Técnicas para cerrar sin presionar',
      blocks: [
        {
          t: 'p',
          html: 'Cerrar es ayudar al cliente a decidir con la información completa. Las preguntas correctas hacen más que la presión.',
        },
        {
          t: 'ol',
          items: [
            '"¿Qué le falta para tomar una decisión?" saca a la luz la objeción real.',
            '"Si el banco aprueba este monto, ¿avanzamos con la promesa?" convierte una duda en un paso.',
            '"¿Prefiere firmar la promesa esta semana o la próxima?" da opciones, no presión.',
            'Resuma por escrito lo acordado el mismo día de la visita.',
          ],
        },
        {
          t: 'p',
          html: 'Para responder dudas de precio o de plazos, vea <a href="/el-salvador/objeciones-en-bienes-raices/">objeciones en bienes raíces</a>.',
        },
      ],
    },
    {
      id: 'credito',
      h2: 'Cuando el comprador usa crédito del banco o del FSV',
      blocks: [
        {
          t: 'p',
          html: 'Con crédito, el cierre depende del avalúo y de la aprobación. Pida al cliente una precalificación antes de ofertar y prevea en la promesa un plazo suficiente.',
        },
        {
          t: 'p',
          html: 'El proceso del Fondo Social para la Vivienda tiene sus propias reglas: vea <a href="/el-salvador/comprar-casa-con-credito-del-fondo-social-para-la-vivienda/">comprar casa con crédito del FSV</a>. Si el avalúo sale bajo, el <a href="/el-salvador/avaluo-de-casa-el-salvador/">avalúo de una casa</a> explica cómo leerlo.',
        },
      ],
    },
    {
      id: 'despues-del-cierre',
      h2: 'Después del cierre: el mejor momento para su próximo cliente',
      blocks: [
        {
          t: 'p',
          html: 'Un cliente que recibió sus llaves sin problemas es su mejor fuente de referidos. Agradezca, pida una recomendación y actualice su anuncio como vendido.',
        },
        {
          t: 'p',
          html: 'Mientras tanto, mantenga su cartera visible en <a href="https://sv.casa-libre.com/publicar">Casa-Libre</a> para que las nuevas consultas lleguen a su WhatsApp.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es una promesa de venta en El Salvador?',
      a: 'Es el contrato en que vendedor y comprador se comprometen a firmar la compraventa en un plazo y con condiciones fijadas, normalmente con arras. Conviene que la otorgue un notario.',
    },
    {
      q: '¿Quién paga el impuesto de transferencia?',
      a: 'Por costumbre, el comprador. Es el 3% sobre el valor que supera US$ 28.571,43, y las partes pueden pactar otra cosa en la promesa.',
    },
    {
      q: '¿Cuánto tarda la inscripción en el CNR?',
      a: 'Depende de la carga del registro y de que la escritura no tenga observaciones. Pregunte al notario el plazo actual y avise al cliente.',
    },
    {
      q: '¿Qué pasa si el banco no aprueba el crédito?',
      a: 'Depende de lo que diga la promesa de venta. Incluya una cláusula que diga qué ocurre con las arras si el crédito no se aprueba en el plazo.',
    },
  ],
  internalSources: [
    { label: 'Ley del Impuesto sobre Transferencia de Bienes Raíces (text)', url: 'https://el-salvador.justia.com/nacionales/leyes/ley-del-impuesto-sobre-transferencia-de-bienes-raices/gdoc', date: '2026-11-13', note: '3% on the excess over ¢250,000 = US$ 28,571.43.' },
    { label: 'Compraventa de bienes raíces procedure (eRegulations El Salvador)', url: 'https://elsalvador.eregulations.org/menu/49?l=es', date: '2026-11-13', note: 'Official procedure description; check steps and fees.' },
    { label: 'Casa-Libre El Salvador paths (verified live)', url: 'https://sv.casa-libre.com/sitemap.xml', date: '2026-11-13', note: 'Path used: /publicar.' },
  ],
  closing: {
    title: 'Más clientes en su embudo',
    text: 'Publique su cartera en Casa-Libre El Salvador y reciba consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://sv.casa-libre.com/publicar',
  },
  related: ['objeciones-en-bienes-raices', 'comprar-casa-con-credito-del-fondo-social-para-la-vivienda', 'avaluo-de-casa-el-salvador', 'comision-inmobiliaria-el-salvador'],
};
