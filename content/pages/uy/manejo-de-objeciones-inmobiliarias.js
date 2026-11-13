export default {
  slug: 'manejo-de-objeciones-inmobiliarias',
  equivalent: 'manejo-de-objeciones-inmobiliarias',
  group: 'Clientes y ventas',
  order: 20,
  title: 'Manejo de objeciones inmobiliarias: respuestas que funcionan',
  h1: 'Manejo de objeciones inmobiliarias en Uruguay',
  description:
    'Cómo responder las objeciones más comunes de propietarios y compradores en Uruguay: la comisión, el precio, la exclusividad, los gastos comunes y el "lo pienso".',
  navLabel: 'Objeciones',
  blurb: 'Respuestas para las objeciones de propietarios y compradores en Uruguay, del "tu comisión es cara" al "lo voy a pensar".',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'Check that the commission references (3% plus IVA each party in a sale) are presented as customary practice and that the mention of IVA at 22% is correct.',
  answer:
    'Manejar objeciones inmobiliarias es responder con datos, no con presión. Las más comunes en Uruguay son la comisión ("la vendo yo"), el precio ("vale más"), la exclusividad, los gastos comunes y el "lo voy a pensar". La técnica es escuchar, preguntar qué hay detrás, responder con un dato concreto y proponer un siguiente paso. Mostrar consultas reales ayuda mucho: publicar gratis en Casa-Libre te da esa evidencia.',
  summary: [
    'Método en cuatro pasos: escuchar, preguntar, responder con un dato y proponer el siguiente paso.',
    'La objeción de comisión se responde con el plan y el cálculo, no bajando el porcentaje de entrada.',
    'La de precio se responde con comparables del barrio.',
    'Un informe con consultas reales es tu mejor argumento ante el propietario.',
  ],
  cta: {
    title: 'Datos para tus argumentos',
    text: 'Publicá en Casa-Libre Uruguay gratis y mostrale al propietario las consultas que recibís por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'metodo',
      h2: '¿Cómo responder una objeción?',
      blocks: [
        {
          t: 'p',
          html: 'Con un método simple que podés repetir: escuchar sin interrumpir, preguntar qué preocupa de verdad, responder con un dato y proponer algo concreto.',
        },
        {
          t: 'table',
          caption: 'Objeciones frecuentes y cómo responderlas',
          head: ['Objeción', 'Qué hay detrás', 'Respuesta'],
          rows: [
            ['"La vendo yo, sin inmobiliaria"', 'No ve el valor de tu trabajo', 'Explicá filtro de interesados, tasación y acompañamiento con el escribano'],
            ['"Vale más"', 'Expectativa emocional', 'Mostrá comparables del barrio'],
            ['"No firmo exclusiva"', 'Miedo a quedarse atado', 'Plazo corto y plan con informes'],
            ['"Los gastos comunes son altos" (comprador)', 'Costo mensual', 'Mostrá qué incluyen y compará con edificios parecidos'],
            ['"Lo voy a pensar"', 'Duda no dicha', 'Preguntá qué le falta para decidir'],
          ],
        },
      ],
    },
    {
      id: 'comision',
      h2: '"Tu comisión es cara": ¿qué responder?',
      blocks: [
        {
          t: 'p',
          html: 'No empieces bajando el porcentaje. Mostrá qué incluye y hacé la cuenta con el IVA, para que el propietario vea un número claro y no una sorpresa.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: lo que paga el vendedor',
          html: 'Números redondos e hipotéticos, con el 3% más IVA del 22% habitual al vendedor.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio de venta', 'U$S 120.000'],
            ['Comisión (120.000 × 3%)', 'U$S 3.600'],
            ['IVA (3.600 × 22%)', 'U$S 792'],
            ['Total (3.600 + 792)', 'U$S 4.392'],
          ],
        },
        {
          t: 'p',
          html: 'Después preguntá: "¿Qué parte del trabajo no te parece necesaria?". Más en <a href="/uruguay/comision-inmobiliaria-uruguay/">comisión inmobiliaria en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'precio',
      h2: '"Mi casa vale más": ¿cómo responder?',
      blocks: [
        {
          t: 'p',
          html: 'Con comparables, no con tu opinión. Mostrale las propiedades parecidas del barrio y cuánto tiempo llevan publicadas.',
        },
        {
          t: 'ul',
          items: [
            '"Estas tres son parecidas y piden entre tanto y tanto. Esta lleva meses publicada."',
            '"Podemos salir a tu precio con una fecha de revisión: si en tres semanas no hay consultas, lo ajustamos."',
          ],
        },
        {
          t: 'p',
          html: 'El método está en <a href="/uruguay/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'exclusiva',
      h2: '"No quiero exclusiva": ¿qué ofrecer?',
      blocks: [
        {
          t: 'p',
          html: 'Un plazo corto y un compromiso concreto de trabajo. Si después no quiere renovar, se libera.',
        },
        {
          t: 'p',
          html: 'Tenés argumentos completos en <a href="/uruguay/contrato-de-exclusividad-inmobiliaria/">contrato de exclusividad inmobiliaria</a>.',
        },
      ],
    },
    {
      id: 'compradores',
      h2: 'Objeciones de compradores e inquilinos',
      blocks: [
        {
          t: 'p',
          html: 'El comprador objeta precio, gastos y estado; el inquilino, garantía y precio. Respondé con información, no con presión.',
        },
        {
          t: 'ul',
          items: [
            '<strong>"Está caro":</strong> mostrá qué incluye frente a otras opciones del barrio.',
            '<strong>"Hay que reciclar":</strong> ayudalo a estimar el costo con un profesional y a hacer una oferta razonable.',
            '<strong>"No tengo esa garantía":</strong> consultá al propietario si acepta otra.',
            '<strong>"La comisión del comprador":</strong> explicala desde el primer contacto, no al final.',
          ],
        },
      ],
    },
    {
      id: 'lo-pienso',
      h2: '"Lo voy a pensar": ¿cómo seguir?',
      blocks: [
        {
          t: 'p',
          html: 'Aceptalo y preguntá qué le falta para decidir. Acordá un día para volver a hablar y cumplilo.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Preguntá', html: '"¿Hay algo que te genere dudas: el precio, la zona, los gastos?"' },
            { title: 'Resolvé', html: 'Si es un dato, conseguilo. Si es el precio, preguntá cuánto ofrecería.' },
            { title: 'Agendá', html: '"¿Te escribo el jueves y lo vemos?"' },
          ],
        },
      ],
    },
    {
      id: 'evidencia',
      h2: 'La mejor respuesta: datos reales',
      blocks: [
        {
          t: 'p',
          html: 'Un informe con consultas y visitas convence más que cualquier argumento. Para tener esos datos, la propiedad tiene que estar bien publicada.',
        },
        {
          t: 'casalibre',
          title: 'Publicá y medí',
          html: 'En Casa-Libre publicás gratis y cada consulta llega a tu WhatsApp. Anotalas y armá tu informe semanal para el propietario.',
          button: 'Publicar gratis',
          href: 'https://uy.casa-libre.com/publicar',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué digo si el propietario quiere vender sin inmobiliaria?',
      a: 'Respetá la decisión y ofrecé lo que no puede hacer solo: tasación con comparables, filtro de interesados y acompañamiento hasta la escritura. Dejale tu contacto.',
    },
    {
      q: '¿Conviene bajar la comisión para captar?',
      a: 'Como regla, no de entrada. Primero mostrá tu plan; si ajustás, que sea a cambio de algo, como una exclusiva.',
    },
    {
      q: '¿Cómo respondo "vi algo más barato"?',
      a: 'Pedí verlo y comparalo en metros, estado y gastos. A veces es más barato porque ofrece menos.',
    },
    {
      q: '¿Qué hago con un cliente que nunca decide?',
      a: 'Preguntá qué necesita para decidir y fijá un plazo. Si no avanza, dejalo en seguimiento y priorizá otros.',
    },
  ],
  internalSources: [
    { label: 'Practice guide', url: 'about:blank', date: '2026-11-13', note: 'Commission example is customary practice, to confirm.' },
  ],
  closing: {
    title: 'Argumentos con consultas reales',
    text: 'Publicá gratis en Casa-Libre Uruguay.',
    button: 'Crear cuenta gratis',
    href: 'https://uy.casa-libre.com/empresas',
  },
  related: ['como-cerrar-una-venta-inmobiliaria', 'analisis-comparativo-de-mercado-inmobiliario', 'comision-inmobiliaria-uruguay', 'contrato-de-exclusividad-inmobiliaria'],
};
