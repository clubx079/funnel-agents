export default {
  slug: 'autorizacion-de-venta-inmobiliaria',
  title: 'Autorización de venta inmobiliaria: modelo y qué incluir',
  h1: 'Autorización de venta inmobiliaria: modelo',
  description:
    'Qué autoriza una autorización de venta inmobiliaria, qué revisar del título antes de firmar, campos de un modelo orientativo, exclusiva o no y cómo se revoca.',
  navLabel: 'Autorización de venta',
  blurb: 'Qué autoriza, qué revisar del título, campos de un modelo orientativo, exclusiva o no, y cómo se revoca una autorización de venta.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',
  reviewNote:
    'A Paraguayan escribano must check the title checks (all titleholders sign, inheritances, attorneys with a valid power, spouse signature question), the statement that the agent cannot sign the sale and may receive a deposit only if expressly authorised, the revocation section and the field outline: all general orientation, not a legal template. No brokerage law is in force per the trade association (Aug 2026); commission figures are customary practice.',
  answer:
    'La autorización de venta inmobiliaria es el documento con el que el propietario autoriza a un agente o a una inmobiliaria a ofrecer su propiedad: publicarla, mostrarla y recibir ofertas, a un precio, por un plazo y con una comisión. No autoriza a firmar la venta. En Paraguay conviene firmarla antes de publicar, con todos los titulares. Firmada, la propiedad se publica gratis en Casa-Libre.',
  summary: [
    'Autoriza a publicar, mostrar y recibir ofertas; no autoriza a firmar la venta.',
    'Antes de firmar, revisá quién figura en el título: firman todos los titulares, o un apoderado con poder vigente.',
    'Campos mínimos: partes, inmueble, precio y margen, plazo, exclusividad, comisión y difusión.',
    'Firmada la autorización, publicá la propiedad gratis en Casa-Libre y mandale el enlace al propietario.',
  ],
  cta: {
    title: 'Autorización firmada, aviso publicado',
    text: 'Inmobiliarias y agentes publican gratis en Casa-Libre y reciben las consultas directo por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'que-autoriza',
      h2: '¿Qué es una autorización de venta inmobiliaria y qué autoriza?',
      blocks: [
        {
          t: 'p',
          html: 'Es la versión corta del contrato de corretaje: una o dos hojas en las que el propietario te autoriza a ofrecer su propiedad. Lo que no está escrito, no está autorizado.',
        },
        {
          t: 'table',
          caption: 'Qué cubre normalmente una autorización de venta',
          head: ['Acción', '¿Incluida?'],
          rows: [
            ['Publicar en portales, redes sociales y WhatsApp', 'Sí, si la autorización lo dice'],
            ['Colocar un cartel en la propiedad', 'Solo si lo dice'],
            ['Mostrar la propiedad a interesados', 'Sí, con el horario que se acuerde'],
            ['Recibir y presentar ofertas', 'Sí'],
            ['Recibir una seña en nombre del propietario', 'Solo si lo dice expresamente'],
            ['Firmar la venta', 'No: firma el propietario o su apoderado ante el escribano'],
          ],
          note: 'Práctica habitual, no una regla legal. El escribano define el alcance en cada caso.',
        },
        {
          t: 'p',
          html: 'Si la autorización incluye portales, anotá cuáles. Lo recomendable es <a href="https://casa-libre.com.py/publicar">publicar la propiedad gratis en Casa-Libre</a> el mismo día de la firma.',
        },
      ],
    },
    {
      id: 'revisar-el-titulo',
      h2: 'Antes de firmar: revisá el título del propietario',
      blocks: [
        {
          t: 'p',
          html: 'Una autorización firmada por quien no puede vender no te sirve. Pedí ver el título y confirmá estos puntos en la primera visita.',
        },
        {
          t: 'ul',
          items: [
            '¿Quiénes figuran en el título? Firman todos, o un apoderado con poder vigente.',
            '¿Hay una sucesión sin terminar? Entonces el caso lo ve un escribano antes de publicar.',
            '¿Está casado el titular? Consultá con el escribano si también tiene que firmar el cónyuge.',
            '¿El impuesto inmobiliario está al día?',
            '¿Hay embargos o hipotecas? Lo muestra la condición de dominio que pide el escribano.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Casos que necesitan escribano',
          html: 'Sucesiones, poderes, condominios y propiedades sin título se revisan antes de firmar nada. Información general. Consultá con un escribano o contador antes de tomar decisiones.',
        },
        {
          t: 'p',
          html: 'Para que el propietario junte los papeles, pasale la guía de Casa-Libre sobre documentos para vender un inmueble.',
        },
      ],
    },
    {
      id: 'campos-del-modelo',
      h2: 'Autorización de venta inmobiliaria modelo: campos a completar',
      blocks: [
        {
          t: 'p',
          html: 'Un modelo útil cabe en una hoja y se completa en la visita. Este esquema muestra los campos; el texto legal lo prepara un escribano.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: campos de una autorización de venta (orientación, no modelo legal)',
          html: 'Llevala impresa o en el celular y completala con el propietario.',
          rows: [
            ['Campo', 'Qué se completa'],
            ['Propietarios', 'Nombre y documento de cada titular, o del apoderado y su poder.'],
            ['Inmueble', 'Dirección, ciudad, datos del título y cuenta corriente catastral.'],
            ['Precio de publicación', 'Monto y moneda (guaraníes o dólares).'],
            ['Margen de negociación', 'Precio mínimo que el propietario acepta escuchar.'],
            ['Plazo', 'Desde y hasta.'],
            ['Exclusiva', 'Sí o no.'],
            ['Comisión', 'Porcentaje, IVA, quién paga y cuándo.'],
            ['Difusión', 'Portales, redes sociales, cartel, fotos.'],
            ['Seña', 'Si el agente puede recibirla o no.'],
            ['Firmas', 'Todos los titulares y el agente, con lugar y fecha.'],
          ],
        },
        {
          t: 'p',
          html: 'Si querés la versión completa del contrato, con cláusulas de fin anticipado y obligaciones, mirá <a href="/contrato-de-corretaje-inmobiliario/">contrato de corretaje inmobiliario</a>. Para dudas sobre la publicación en sí, están las preguntas frecuentes de Casa-Libre.',
        },
      ],
    },
    {
      id: 'precio-y-margen',
      h2: '¿Cómo escribir el precio y el margen de negociación?',
      blocks: [
        {
          t: 'p',
          html: 'Escribí el precio de publicación y, aparte, el mínimo que el propietario acepta escuchar. Así sabés qué ofertas presentar sin llamarlo por cada una.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: precio, margen y comisión',
          html: 'Supuestos hipotéticos: precio de publicación USD 120.000, margen del 5% y comisión del 5% más IVA del 10% sobre el precio final. Dólares a Gs. 7.300, aprox. Mínimo: 120.000 × 95% = USD 114.000. Comisión si se vende al mínimo: 114.000 × 5% = USD 5.700, más IVA 570 = USD 6.270.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio de publicación', 'USD 120.000 (Gs. 876.000.000)'],
            ['Precio mínimo (120.000 × 95%)', 'USD 114.000 (Gs. 832.200.000)'],
            ['Comisión más IVA al mínimo', 'USD 6.270 (Gs. 45.771.000)'],
          ],
        },
        {
          t: 'p',
          html: 'El precio sale de comparar con avisos parecidos, como las casas en venta en Asunción en <a href="https://casa-libre.com.py/venta/casas/asuncion">Casa-Libre</a>. La comisión habitual se explica en <a href="/comision-inmobiliaria-paraguay/">comisión inmobiliaria en Paraguay</a>.',
        },
      ],
    },
    {
      id: 'exclusiva-o-no',
      h2: 'Autorización de venta exclusiva o no exclusiva',
      blocks: [
        {
          t: 'p',
          html: 'En la exclusiva, durante el plazo solo vos podés vender; en la no exclusiva, el propietario puede trabajar con otros agentes. La exclusiva te obliga a un plan de difusión concreto.',
        },
        {
          t: 'p',
          html: 'Qué compromete cada parte en una exclusiva está en <a href="/contrato-de-exclusividad-inmobiliaria/">contrato de exclusividad inmobiliaria</a>.',
        },
        {
          t: 'casalibre',
          title: 'Mostrá dónde vas a publicar',
          html: 'Un plan de difusión con la propiedad publicada en Casa-Libre, gratis y con consultas por WhatsApp a tu agencia, es un argumento concreto para pedir la exclusiva.',
          button: 'Ver la cuenta para inmobiliarias en Casa-Libre',
          href: 'https://casa-libre.com.py/empresas',
        },
      ],
    },
    {
      id: 'revocar-la-autorizacion',
      h2: '¿Se puede revocar una autorización de venta inmobiliaria?',
      blocks: [
        {
          t: 'p',
          html: 'Depende de lo que diga la autorización. Si tiene un plazo y una cláusula de fin anticipado, se sigue esa cláusula; si no dice nada, la situación la evalúa un escribano o abogado.',
        },
        {
          t: 'ul',
          items: [
            'Pedí que la revocación se comunique por escrito, con fecha.',
            'Mandá al propietario la lista de interesados que presentaste hasta ese día.',
            'Retirá avisos y carteles apenas termina la autorización.',
          ],
        },
        {
          t: 'p',
          html: 'Si el propietario decide seguir solo, puede publicar por su cuenta: vender en Casa-Libre también es gratis para particulares. Terminar bien te deja la puerta abierta para la próxima.',
        },
      ],
    },
    {
      id: 'despues-de-firmar',
      h2: '¿Qué hacer después de firmar la autorización?',
      blocks: [
        {
          t: 'p',
          html: 'Publicar ese mismo día, mandarle al propietario el enlace y fijar la fecha del primer informe.',
        },
        {
          t: 'p',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
        },
        {
          t: 'p',
          html: 'Cargá el aviso desde la app de Casa-Libre para iPhone y Android y, si te falta algo, guardalo como borrador. Cómo pedir la firma sin presionar está en <a href="/que-decirle-a-un-propietario-para-captar/">qué decirle a un propietario para captar</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es una autorización de venta exclusiva?',
      a: 'Una autorización en la que el propietario se compromete a vender solo a través de un agente o inmobiliaria durante un plazo. A cambio, el agente se compromete a un plan de difusión e informes por escrito. Para explicar al propietario dónde va a estar publicada, mostrale cómo funciona Casa-Libre.',
    },
    {
      q: '¿Es lo mismo autorización de venta que contrato de corretaje?',
      a: 'En la práctica, la autorización es la versión corta del contrato de corretaje. El contrato completo suma cláusulas de obligaciones, fin anticipado y reparto con otras inmobiliarias.',
    },
    {
      q: '¿Puede firmar la autorización un solo heredero?',
      a: 'En general, una propiedad en sucesión necesita el acuerdo de todos los herederos y la intervención de un escribano. No publiques hasta que el escribano confirme quién puede firmar.',
    },
    {
      q: '¿Cuánto dura una autorización de venta?',
      a: 'Lo que acuerden las partes: no hay un plazo legal fijo. Poné fecha de inicio y de fin. Antes de renovarla, revisá el precio con los avisos nuevos del buscador de propiedades de <a href="https://casa-libre.com.py/propiedades">Casa-Libre</a>.',
    },
  ],
  internalSources: [
    {
      label: 'Infonegocios: Mercado del corretaje inmobiliario cambia de ritmo',
      url: 'https://infonegocios.com.py/infomicasa/mercado-del-corretaje-inmobiliario-cambia-de-ritmo-redes-sociales-ia-e-inversion-extranjera-reconfiguran-el-negocio',
      date: '2026-08-07',
      note: 'No hay ley de corretaje vigente según ACIP: el alcance de la autorización depende de lo firmado.',
    },
    {
      label: 'Hacé Cuentas: calculadora de comisión inmobiliaria en Paraguay',
      url: 'https://hacecuentas.com/py/calculadora-comision-inmobiliaria-paraguay',
      date: '2026-08-16',
      note: 'Comisión habitual de alrededor de 5% más IVA en ventas.',
    },
    {
      label: 'Google: sugerencias de búsqueda para "autorizacion de venta inmobiliaria" (Paraguay)',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=autorizacion%20de%20venta%20inmobiliaria',
      date: '2026-11-12',
      note: 'Variantes: modelo, exclusiva, contrato de autorización de venta, revocar autorización de venta. También "se puede vender una propiedad sin la firma de un heredero".',
    },
  ],
  closing: {
    title: 'Con la firma, publicá',
    text: 'Publicá gratis en Casa-Libre la propiedad que te autorizaron a vender y atendé las consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['contrato-de-corretaje-inmobiliario', 'contrato-de-exclusividad-inmobiliaria', 'como-captar-propiedades', 'como-negociar-el-precio-de-una-propiedad'],
};
