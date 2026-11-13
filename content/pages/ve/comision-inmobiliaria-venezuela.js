export default {
  slug: 'comision-inmobiliaria-venezuela',
  equivalent: 'comision-inmobiliaria-paraguay',
  group: 'Precio y contratos',
  nav: 'Honorarios',
  order: 10,
  title: 'Comisión inmobiliaria en Venezuela: honorarios y quién paga',
  h1: 'Comisión inmobiliaria en Venezuela: cuánto cobra un asesor',
  description:
    'Cuánto cobra una inmobiliaria por vender una casa o un apartamento en Venezuela, quién paga los honorarios, cómo se cobran en alquiler y un ejemplo en dólares.',
  navLabel: 'Honorarios inmobiliarios',
  blurb: 'Cuánto se cobra de honorarios por venta y por alquiler en Venezuela, quién paga y cómo dejarlo por escrito.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Venezuelan lawyer or accountant must confirm: (1) sale honorarios customarily about 5% of the price, paid by the seller, with no official tariff in force; (2) rental placement customarily about one month of canon, and who pays it under the current housing rental law (the 2011 Ley para la Regularización y Control de los Arrendamientos de Vivienda may restrict charges to tenants: verify); (3) whether the asesor must invoice with IVA and how ISLR applies to honorarios; (4) whether honorarios may be agreed and paid in dollars. Figures in the examples are hypothetical.',
  answer:
    'En Venezuela ninguna ley fija hoy un arancel obligatorio para los honorarios del asesor inmobiliario: se negocian con el propietario. En una venta es habitual que ronden el 5% del precio y que los pague el vendedor. En alquiler suele cobrarse el equivalente a un mes de canon. Déjalo siempre por escrito antes de publicar. Publicar en Casa-Libre es gratis y no suma comisión.',
  summary: [
    'Venta: es habitual cobrar alrededor del 5% del precio, pagado por el vendedor. No es una tarifa legal.',
    'Alquiler: suele cobrarse el equivalente a un mes de canon; revisa con un abogado qué permite la ley de arrendamientos de vivienda.',
    'Si dos asesores intervienen, es común repartir los honorarios por mitades, siempre por escrito.',
    'Casa-Libre no cobra comisión sobre la venta ni el alquiler y publicar es gratis.',
  ],
  cta: {
    title: 'Que tus honorarios queden completos',
    text: 'En Casa-Libre Venezuela publicas gratis y no hay comisión sobre la venta: lo que acuerdas con el propietario queda para ti y tu inmobiliaria.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.ve/empresas',
  },
  sections: [
    {
      id: 'cuanto-se-cobra',
      h2: '¿Cuánto cobra una inmobiliaria por vender una casa en Venezuela?',
      blocks: [
        {
          t: 'p',
          html: 'Lo habitual es alrededor del 5% del precio de venta, pagado por el vendedor. Puede ser más o menos según el inmueble, la zona y el trabajo que asumas, porque es una costumbre del mercado y no un arancel.',
        },
        {
          t: 'table',
          caption: 'Honorarios habituales del asesor inmobiliario en Venezuela',
          head: ['Operación', 'Honorarios habituales', 'Quién suele pagar'],
          rows: [
            ['Venta de casa o apartamento', 'Alrededor del 5% del precio', 'El vendedor'],
            ['Venta de terreno', 'Se negocia; suele partir de la misma referencia', 'El vendedor'],
            ['Alquiler: conseguir inquilino', 'Alrededor de un mes de canon', 'Verificar con la ley de arrendamientos vigente'],
            ['Administración del alquiler', 'Un porcentaje mensual del canon, a negociar', 'El propietario'],
          ],
          note: 'Práctica habitual del mercado, sin cifra oficial. Información general, a confirmar con un abogado.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Antes de firmar',
          html: 'Información general. Consulta con un abogado o contador antes de firmar. Los honorarios de cada operación son los que acuerdes por escrito.',
        },
      ],
    },
    {
      id: 'quien-paga',
      h2: '¿Quién paga los honorarios inmobiliarios?',
      blocks: [
        {
          t: 'p',
          html: 'En una venta los paga normalmente el vendedor, que es quien contrata al asesor. Si el comprador contrata a su propio asesor para buscarle un inmueble, ese asesor cobra a su cliente lo que hayan acordado.',
        },
        {
          t: 'p',
          html: 'Acuerda también cuándo se pagan: lo habitual es al firmar el documento de venta en el Registro. Si se cobra una parte al firmar la opción de compraventa, escríbelo en el contrato.',
        },
      ],
    },
    {
      id: 'alquiler',
      h2: '¿Cuánto se cobra por alquilar un apartamento?',
      blocks: [
        {
          t: 'p',
          html: 'Para conseguir un inquilino suele cobrarse el equivalente a un mes de canon. La ley de arrendamientos de vivienda protege mucho al inquilino, así que confirma con un abogado qué cargos puedes pedirle y cuáles debe asumir el propietario.',
        },
        {
          t: 'p',
          html: 'Si además administras el alquiler (cobros, reparaciones, relación con el inquilino), se negocia un porcentaje mensual. Lo explicamos en <a href="/venezuela/administracion-de-inmuebles-en-alquiler/">administración de inmuebles en alquiler</a>.',
        },
      ],
    },
    {
      id: 'ejemplo',
      h2: 'Ejemplo: cómo calcular los honorarios en dólares',
      blocks: [
        {
          t: 'p',
          html: 'Multiplica el precio de venta por el porcentaje acordado. Si compartes la operación con otro asesor, divide según lo que hayan firmado.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: casa vendida en USD 80.000',
          html: 'Datos redondos e hipotéticos. Los impuestos sobre tus honorarios no se incluyen: consúltalos con tu contador.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio de venta', 'USD 80.000'],
            ['Honorarios del 5% (80.000 × 0,05)', 'USD 4.000'],
            ['Asesor del vendedor (50%)', 'USD 2.000'],
            ['Asesor del comprador (50%)', 'USD 2.000'],
            ['Comisión de Casa-Libre', 'USD 0'],
          ],
        },
      ],
    },
    {
      id: 'por-escrito',
      h2: 'Cómo dejar los honorarios por escrito',
      blocks: [
        {
          t: 'p',
          html: 'Con un contrato de corretaje o una autorización de venta firmada por todos los propietarios. Sin papel, cobrar es difícil si el propietario vende por su cuenta a un cliente que tú le llevaste.',
        },
        {
          t: 'ul',
          items: [
            'Porcentaje o monto fijo, y la moneda.',
            'Momento del pago: al registrar la venta o en partes.',
            'Qué pasa si el propietario vende a un cliente tuyo después de vencido el contrato.',
            'Si hay exclusividad y por cuánto tiempo.',
          ],
        },
        {
          t: 'p',
          html: 'Más detalle en <a href="/venezuela/contrato-de-corretaje-inmobiliario/">contrato de corretaje inmobiliario</a>.',
        },
      ],
    },
    {
      id: 'publicar-sin-comision',
      h2: '¿Publicar en un portal reduce tus honorarios?',
      blocks: [
        {
          t: 'p',
          html: 'Depende del portal. Algunos cobran por ficha, por contacto o sobre la operación. En Casa-Libre publicar es gratis y no hay comisión sobre la venta ni el alquiler.',
        },
        {
          t: 'p',
          html: 'Crea la cuenta de tu inmobiliaria en <a href="https://casa-libre.com.ve/empresas">Casa-Libre</a> y publica tu cartera: las consultas te llegan por WhatsApp.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cobra un asesor inmobiliario en Venezuela?',
      a: 'Es habitual alrededor del 5% del precio de venta, pagado por el vendedor. No hay una tarifa legal: se negocia y se firma antes de publicar.',
    },
    {
      q: '¿Cuánto cobra una inmobiliaria por vender un apartamento?',
      a: 'La misma referencia: alrededor del 5% del precio. En apartamentos de menor valor algunos asesores fijan un monto mínimo en dólares. Todo debe quedar en el contrato.',
    },
    {
      q: '¿Los honorarios inmobiliarios llevan IVA?',
      a: 'Depende de cómo factures y de tu situación fiscal. Consúltalo con un contador antes de cotizar, y aclara al propietario si el porcentaje incluye impuestos.',
    },
    {
      q: '¿Se pueden cobrar los honorarios en dólares?',
      a: 'En la práctica es común acordarlos en dólares porque el precio está en dólares. Confirma con un abogado o contador cómo documentar y facturar ese pago.',
    },
    {
      q: '¿Casa-Libre cobra comisión?',
      a: 'No. Publicar es gratis y Casa-Libre no cobra comisión sobre la venta ni el alquiler. Hay extras pagos opcionales, como el distintivo Verificado.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Path used: /empresas.' },
    { label: 'Venezuelan practice on honorarios and rental charges', url: 'about:blank', date: '2026-11-13', note: 'General knowledge, not from a verified document. Customary 5% and one month of canon must be confirmed by a Venezuelan professional.' },
  ],
  closing: {
    title: 'Publica sin comisión',
    text: 'Casa-Libre Venezuela: publicar es gratis y las consultas llegan por WhatsApp.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['contrato-de-corretaje-inmobiliario', 'como-ser-asesor-inmobiliario-en-venezuela', 'administracion-de-inmuebles-en-alquiler', ''],
};
