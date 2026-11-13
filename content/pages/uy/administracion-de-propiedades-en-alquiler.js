export default {
  slug: 'administracion-de-propiedades-en-alquiler',
  equivalent: 'administracion-de-propiedades-en-alquiler',
  group: 'Captar propiedades',
  order: 30,
  title: 'Administración de propiedades en alquiler en Uruguay',
  h1: 'Administración de propiedades en alquiler en Uruguay',
  description:
    'Cómo ofrecer administración de alquileres en Uruguay: qué incluye el servicio, cómo cobrarlo, ajustes, garantías y cómo ordenar el trabajo de cada mes.',
  navLabel: 'Administrar alquileres',
  blurb: 'Qué incluye la administración de alquileres en Uruguay, cómo cobrarla y cómo organizar el trabajo de cada mes.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'Check with a Uruguayan escribano/contador: that the management fee is a monthly percentage of the rent agreed freely (no percentage stated on purpose), plus IVA; that rent adjustments are usually agreed in the contract and often linked to an index (we say "según lo pactado en el contrato", no index named); that residential rentals are customarily in pesos; the guarantee list; and the Ley 20.380 inclusion of administration among operator activities.',
  answer:
    'Administrar un alquiler en Uruguay es encargarte, por cuenta del propietario, de cobrar el alquiler, controlar que se paguen gastos comunes y servicios, aplicar los ajustes que dice el contrato, gestionar la garantía y resolver reparaciones. Se cobra un porcentaje mensual del alquiler más IVA, que se acuerda por escrito. Es la forma más estable de ingreso para una inmobiliaria. Para publicar los alquileres que administrás, te recomendamos Casa-Libre.',
  summary: [
    'El servicio incluye cobro, control de gastos comunes y servicios, ajustes, garantía, reparaciones e informes.',
    'Se cobra un porcentaje mensual del alquiler más IVA; no hay tarifa legal.',
    'Es ingreso recurrente: cada contrato administrado paga todos los meses.',
    'Para conseguir inquilinos, publicá gratis en Casa-Libre en la sección de alquileres.',
  ],
  cta: {
    title: 'Publicá los alquileres que administrás',
    text: 'En Casa-Libre Uruguay publicás alquileres gratis y recibís consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'que-incluye',
      h2: '¿Qué incluye la administración de un alquiler?',
      blocks: [
        {
          t: 'p',
          html: 'Todo lo que el propietario no quiere hacer: cobrar, controlar, renovar y resolver. Definilo por escrito para que no haya malentendidos.',
        },
        {
          t: 'table',
          caption: 'Tareas de la administración de alquileres',
          head: ['Tarea', 'Qué hacés', 'Frecuencia'],
          rows: [
            ['Cobro', 'Cobrás el alquiler y lo transferís al propietario', 'Mensual'],
            ['Gastos comunes y servicios', 'Controlás que el inquilino esté al día', 'Mensual'],
            ['Contribución e impuestos', 'Avisás vencimientos o los pagás si se acordó', 'Según vencimiento'],
            ['Ajustes', 'Aplicás el ajuste que dice el contrato', 'Según contrato'],
            ['Garantía', 'Controlás vigencia y actuás si hay atraso', 'Al firmar y al renovar'],
            ['Reparaciones', 'Coordinás arreglos y presupuestos', 'Cuando surgen'],
            ['Informe', 'Resumen de cobros y gastos al propietario', 'Mensual'],
          ],
        },
      ],
    },
    {
      id: 'cuanto-cobrar',
      h2: '¿Cuánto se cobra por administrar un alquiler?',
      blocks: [
        {
          t: 'p',
          html: 'Un porcentaje mensual del alquiler más IVA, que se acuerda con el propietario. No hay tarifa legal; depende de lo que incluya el servicio.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: administración de un apartamento de $ 30.000',
          html: 'El porcentaje es un supuesto redondo, no una tarifa de mercado. Ponelo en tu contrato.',
          rows: [
            ['Concepto', 'Monto mensual'],
            ['Alquiler', '$ 30.000'],
            ['Honorario supuesto (30.000 × 6%)', '$ 1.800'],
            ['IVA (1.800 × 22%)', '$ 396'],
            ['Lo que recibe el propietario (30.000 − 1.800 − 396)', '$ 27.804'],
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Contrato y facturación',
          html: 'Información general. Consultá con un escribano y con tu contador antes de firmar un contrato de administración.',
        },
      ],
    },
    {
      id: 'captar',
      h2: '¿Cómo conseguir propiedades para administrar?',
      blocks: [
        {
          t: 'p',
          html: 'Ofrecé la administración a cada propietario al que le conseguís un inquilino. También a quienes viven en el exterior o en el interior y alquilan en Montevideo o en la Costa.',
        },
        {
          t: 'ul',
          items: [
            'Propietarios que alquilan por primera vez.',
            'Inversores en vivienda promovida con varias unidades.',
            'Herederos que no quieren vender todavía.',
            'Propietarios que viven lejos de la propiedad.',
          ],
        },
        {
          t: 'p',
          html: 'Lo desarrollamos en <a href="/uruguay/como-captar-propiedades-para-alquilar/">cómo captar propiedades para alquilar</a> y en <a href="/uruguay/vivienda-promovida-uruguay/">vivienda promovida</a>.',
        },
      ],
    },
    {
      id: 'organizar',
      h2: '¿Cómo organizar el mes?',
      blocks: [
        {
          t: 'p',
          html: 'Con un calendario fijo. Si todos los contratos vencen el mismo día del mes, el trabajo se ordena solo.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Primera semana', html: 'Cobros y aviso a los que no pagaron.' },
            { title: 'Segunda semana', html: 'Transferencias a propietarios e informes.' },
            { title: 'Tercera semana', html: 'Control de gastos comunes, servicios y reparaciones pendientes.' },
            { title: 'Cuarta semana', html: 'Revisión de contratos por vencer y ajustes del mes siguiente.' },
          ],
        },
      ],
    },
    {
      id: 'atrasos',
      h2: '¿Qué hacer si el inquilino se atrasa?',
      blocks: [
        {
          t: 'p',
          html: 'Actuar rápido y por escrito. Un atraso de un mes es fácil de resolver; uno de tres, no.',
        },
        {
          t: 'ul',
          items: [
            'Recordatorio amable a los pocos días.',
            'Comunicación formal si no responde.',
            'Activar la garantía según sus condiciones.',
            'Si no hay solución, derivar al escribano o al abogado del propietario.',
          ],
        },
        {
          t: 'p',
          html: 'Cada garantía actúa distinto: repasalas en <a href="/uruguay/garantias-de-alquiler-uruguay/">garantías de alquiler en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'publicar-alquileres',
      h2: 'Publicá los alquileres que administrás',
      blocks: [
        {
          t: 'p',
          html: 'Cuando un contrato termina, necesitás un nuevo inquilino rápido. Publicá en la sección de <a href="https://uy.casa-libre.com/alquilar">alquileres de Casa-Libre</a> y en tus canales apenas sabés que la propiedad queda libre.',
        },
        {
          t: 'casalibre',
          title: 'Administración de propiedades en Casa-Libre',
          html: 'Casa-Libre tiene una sección para propietarios que quieren delegar la administración de su alquiler. Publicar es gratis y las consultas llegan por WhatsApp.',
          button: 'Ver la sección de administración',
          href: 'https://uy.casa-libre.com/administracion-de-propiedades',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cuánto cobra una inmobiliaria por administrar un alquiler en Uruguay?',
      a: 'Un porcentaje mensual del alquiler más IVA, que se acuerda en cada caso. No hay tarifa legal.',
    },
    {
      q: '¿La administración incluye conseguir el inquilino?',
      a: 'Normalmente se cobra aparte: la comisión por alquilar (en general un mes más IVA) y la administración mensual.',
    },
    {
      q: '¿Qué contrato firmo con el propietario?',
      a: 'Un contrato de administración que diga qué tareas hacés, cuánto cobrás y cómo rendís cuentas. Que lo revise un escribano.',
    },
    {
      q: '¿Los alquileres se cobran en pesos?',
      a: 'Los de vivienda, en general sí. Algunos contratos, como los de temporada, se pactan en dólares.',
    },
  ],
  internalSources: [
    { label: 'Ley 20.380 (IMPO), art. 3', url: 'https://www.impo.com.uy/bases/leyes-originales/20380-2024', date: '2026-11-13', note: 'Operator activities include administrar.' },
  ],
  closing: {
    title: 'Inquilinos para tus administraciones',
    text: 'Publicá alquileres gratis en Casa-Libre Uruguay.',
    button: 'Ver alquileres',
    href: 'https://uy.casa-libre.com/alquilar',
  },
  related: ['garantias-de-alquiler-uruguay', 'como-captar-propiedades-para-alquilar', 'comision-inmobiliaria-uruguay', 'vivienda-promovida-uruguay'],
};
