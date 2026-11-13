export default {
  slug: 'comision-inmobiliaria-uruguay',
  equivalent: 'comision-inmobiliaria-paraguay',
  group: 'Precio y contratos',
  nav: 'Comisión',
  order: 10,
  title: 'Comisión inmobiliaria en Uruguay: venta y alquiler',
  h1: 'Comisión inmobiliaria en Uruguay: cuánto es y quién paga',
  description:
    'Cuánto es la comisión inmobiliaria en Uruguay en la venta y en el alquiler, quién la paga, cómo se suma el IVA y un ejemplo en dólares y en pesos paso a paso.',
  navLabel: 'Comisión inmobiliaria',
  blurb: 'Cuánto cobra una inmobiliaria en Uruguay por vender o alquilar, quién paga y cómo se calcula el IVA.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Uruguayan escribano, contador or inmobiliaria must confirm: 3% plus IVA charged to EACH party in a sale is customary (listing notices confirm 3% + IVA, but who pays was not confirmed by an official source); one month of rent plus IVA in a rental and WHO usually pays it (tenant, owner or both) is not confirmed; IVA 22% on the fee; that no law fixes the rate (Ley 20.380 lets operators collect "honorarios" without setting a rate, per our reading). Rental-management percentages are deliberately not stated.',
  answer:
    'En Uruguay la comisión inmobiliaria no la fija ninguna ley: se acuerda con el cliente. En la compraventa lo habitual es que la inmobiliaria cobre un 3% del precio más IVA a cada parte, al comprador y al vendedor. En el alquiler de vivienda, lo usual es un mes de alquiler más IVA. Dejalo por escrito antes de publicar. Publicar en Casa-Libre es gratis y no suma ninguna comisión.',
  summary: [
    'Venta: es habitual un 3% más IVA al vendedor y otro 3% más IVA al comprador.',
    'Alquiler: en general un mes de alquiler más IVA. Quién lo paga se acuerda en cada caso.',
    'El IVA sobre los honorarios es el 22% (tasa básica). Se suma, no está incluido en el 3%.',
    'Casa-Libre no cobra comisión sobre la venta ni el alquiler: los honorarios que acordás quedan para tu inmobiliaria.',
  ],
  cta: {
    title: 'Publicá sin sumar comisiones',
    text: 'En Casa-Libre Uruguay publicás tu cartera gratis y recibís las consultas por WhatsApp. No hay comisión sobre la operación.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'cuanto-es',
      h2: '¿Cuánto es la comisión inmobiliaria en Uruguay?',
      blocks: [
        {
          t: 'p',
          html: 'La práctica del mercado es un 3% más IVA a cada parte en una compraventa y un mes de alquiler más IVA en un alquiler. Son usos, no un arancel: cada inmobiliaria puede pactar otra cosa, siempre por escrito.',
        },
        {
          t: 'table',
          caption: 'Comisión habitual en Uruguay por tipo de operación',
          head: ['Operación', 'Comisión habitual', 'Quién suele pagar'],
          rows: [
            ['Compraventa', '3% del precio más IVA', 'Cada parte: el vendedor y el comprador'],
            ['Alquiler de vivienda', 'Un mes de alquiler más IVA', 'Se acuerda en cada caso; confirmalo antes de publicar'],
            ['Alquiler de temporada', 'Se pacta con el propietario', 'Depende del acuerdo'],
            ['Administración mensual', 'Un porcentaje del alquiler cobrado', 'El propietario'],
          ],
          note: 'Práctica habitual del mercado. No hay arancel oficial. Las cifras exactas las fija tu contrato.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de firmar',
          html: 'Información general. Consultá con un escribano o con tu contador antes de firmar.',
        },
      ],
    },
    {
      id: 'quien-paga',
      h2: '¿Quién paga la comisión en una compraventa?',
      blocks: [
        {
          t: 'p',
          html: 'A diferencia de otros países donde paga solo el vendedor, en Uruguay lo habitual es que paguen las dos partes. Por eso conviene explicarlo al comprador desde la primera visita, y no recién al momento del boleto de reserva.',
        },
        {
          t: 'ul',
          items: [
            'Al vendedor se lo explicás al captar, junto con la autorización de venta.',
            'Al comprador, en la primera conversación: muchos lo suman a los gastos de escribano e impuestos.',
            'Si dos inmobiliarias intervienen, cada una suele cobrar a su cliente o compartir lo acordado. Ponelo por escrito entre colegas.',
          ],
        },
        {
          t: 'p',
          html: 'Los pasos hasta la escritura están en <a href="/uruguay/como-cerrar-una-venta-inmobiliaria/">cómo cerrar una venta inmobiliaria en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'ejemplo-venta',
      h2: '¿Cómo se calcula con IVA?',
      blocks: [
        {
          t: 'p',
          html: 'Primero se calcula el porcentaje sobre el precio, y después se suma el IVA del 22% sobre esa comisión. El IVA no está incluido en el 3%.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: casa vendida en U$S 200.000',
          html: 'Números redondos e hipotéticos con 3% más IVA del 22% a cada parte.',
          rows: [
            ['Concepto', 'Monto'],
            ['Comisión del vendedor (200.000 × 3%)', 'U$S 6.000'],
            ['IVA del vendedor (6.000 × 22%)', 'U$S 1.320'],
            ['Total que paga el vendedor', 'U$S 7.320'],
            ['Total que paga el comprador (mismo cálculo)', 'U$S 7.320'],
            ['Honorarios de la inmobiliaria sin IVA (6.000 × 2)', 'U$S 12.000'],
          ],
        },
        {
          t: 'p',
          html: 'Si compartís la operación con otro colega, los U$S 12.000 se reparten según lo pactado. Mostrá este cálculo al propietario: evita discusiones al final.',
        },
      ],
    },
    {
      id: 'alquiler',
      h2: '¿Cuánto cobra una inmobiliaria por un alquiler en Uruguay?',
      blocks: [
        {
          t: 'p',
          html: 'Lo usual es un mes de alquiler más IVA por conseguir el inquilino. Quién lo paga y si se paga en cuotas se acuerda con el propietario y el inquilino antes de publicar.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: apartamento alquilado en $ 30.000 por mes',
          html: 'Números redondos e hipotéticos en pesos uruguayos.',
          rows: [
            ['Concepto', 'Monto'],
            ['Un mes de alquiler', '$ 30.000'],
            ['IVA (30.000 × 22%)', '$ 6.600'],
            ['Total de la comisión', '$ 36.600'],
          ],
        },
        {
          t: 'p',
          html: 'Si además administrás el alquiler (cobro, ajustes, reparaciones), cobrás un porcentaje mensual aparte. Lo desarrollamos en <a href="/uruguay/administracion-de-propiedades-en-alquiler/">administración de propiedades en alquiler</a>. Para publicar alquileres, en <a href="https://uy.casa-libre.com/alquilar">Casa-Libre</a> tenés la sección de propiedades en alquiler.',
        },
      ],
    },
    {
      id: 'ley',
      h2: '¿La comisión está regulada por ley?',
      blocks: [
        {
          t: 'p',
          html: 'No hay una tarifa legal. La Ley 20.380 del operador inmobiliario reconoce el derecho a cobrar honorarios y, si se pactó, el reintegro de gastos, pero no fija un porcentaje.',
        },
        {
          t: 'ul',
          items: [
            'Según esa ley, no podés reclamar honorarios por una operación que el cliente no te autorizó.',
            'La autorización no exige una forma especial, pero tiene que ser fehaciente: escrita o por un medio que sirva de prueba.',
            'El número de registro del operador deberá figurar en cada oferta, una vez que el registro funcione.',
          ],
        },
      ],
    },
    {
      id: 'como-justificarla',
      h2: '¿Cómo justificar tu comisión ante el propietario?',
      blocks: [
        {
          t: 'p',
          html: 'El propietario compara lo que paga con lo que recibe. Si le mostrás un plan concreto, la comisión deja de ser el tema principal.',
        },
        {
          t: 'ul',
          items: [
            'Tasación con comparables de su barrio.',
            'Fotos y descripción profesionales, publicadas el mismo día.',
            'Filtro de interesados: solo visitan los que pueden pagar o tienen garantía.',
            'Acompañamiento hasta la firma ante el escribano.',
          ],
        },
        {
          t: 'casalibre',
          title: 'Exposición sin costo extra',
          html: 'En Casa-Libre publicás gratis cada propiedad que captás, con búsqueda en el mapa y contacto por WhatsApp. No hay comisión sobre la operación, así que todo lo que acordaste con el cliente queda para tu inmobiliaria.',
          button: 'Ver cómo funciona',
          href: 'https://uy.casa-libre.com/como-funciona',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuál es la comisión inmobiliaria en una venta en Uruguay?',
      a: 'Lo habitual es un 3% del precio más IVA a cada parte. No lo fija ninguna ley, así que puede variar según el acuerdo.',
    },
    {
      q: '¿Cuánto cobra la inmobiliaria por alquilar en Uruguay?',
      a: 'En general, un mes de alquiler más IVA. Quién lo paga se acuerda antes de firmar el contrato.',
    },
    {
      q: '¿La comisión incluye el IVA?',
      a: 'No. Al porcentaje se le suma el IVA del 22%. En una comisión de U$S 3.000, el IVA es de U$S 660.',
    },
    {
      q: '¿El comprador también paga comisión en Uruguay?',
      a: 'Sí, es lo habitual: el comprador paga su propio 3% más IVA a la inmobiliaria que intervino. Conviene avisarle en la primera visita.',
    },
    {
      q: '¿Casa-Libre cobra comisión?',
      a: 'No. Publicar es gratis y Casa-Libre no cobra comisión sobre la venta ni el alquiler. Hay extras pagos opcionales, como el distintivo Verificado.',
    },
  ],
  internalSources: [
    { label: 'Ley 20.380 (IMPO), arts. 5, 6 y 7', url: 'https://www.impo.com.uy/bases/leyes-originales/20380-2024', date: '2026-11-13', note: 'Operators may collect honorarios and agreed expenses; no fees without client authorization; no rate set.' },
    { label: 'Listing notices of Uruguayan agencies (3% + IVA sale; 1 month + IVA rent)', url: 'about:blank', date: '2026-11-13', note: 'Seen in agency notices on portals (not named on the page). Who pays in a rental not confirmed.' },
  ],
  closing: {
    title: 'Tu comisión, sin descuentos de nadie',
    text: 'Publicá gratis en Casa-Libre Uruguay y recibí consultas por WhatsApp. Sin comisión sobre la operación.',
    button: 'Publicar gratis',
    href: 'https://uy.casa-libre.com/publicar',
  },
  related: ['autorizacion-de-venta-inmobiliaria', 'como-cerrar-una-venta-inmobiliaria', 'administracion-de-propiedades-en-alquiler', 'como-ser-agente-inmobiliario-uruguay'],
};
