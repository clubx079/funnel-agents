export default {
  slug: 'como-tasar-una-propiedad',
  title: 'Cómo tasar una propiedad: guía para agentes en Paraguay',
  h1: 'Cómo tasar una propiedad: guía para agentes',
  description:
    'Cómo tasar una propiedad en Paraguay: diferencia entre estimación y tasación, método de comparación con avisos reales, tabla de ajustes y precios por ciudad.',
  navLabel: 'Tasar una propiedad',
  blurb: 'Estimación del agente o tasación profesional, método de comparación, ajustes y cómo presentar el valor al propietario.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',
  reviewNote:
    'A Paraguayan appraiser or escribano must check the section "estimacion-o-tasacion": that a formal tasación is a paid report signed by a professional appraiser and which situations usually require one (bank credit, court cases, inheritances) are general orientation. The statement that fiscal (cadastral) values are far below market values comes from press reports of March 2026. No appraiser fee figure was found.',
  answer:
    'Un agente inmobiliario tasa una propiedad comparándola con propiedades parecidas en venta en la misma zona, ajustando por tamaño, estado y ubicación, y entregando un rango de precio. Eso es una estimación; la tasación formal es un informe pago que firma un tasador profesional. En Paraguay los avisos de Casa-Libre sirven para hacer la comparación gratis y online, con precios en guaraníes y dólares.',
  summary: [
    'Estimación del agente: gratis, en un rango, con comparables. Tasación formal: informe pago firmado por un tasador.',
    'El método de comparación es el más útil para un agente: de 5 a 8 propiedades parecidas, misma zona, mismo tipo.',
    'Mediana del precio pedido de casas en venta: USD 275.000 en Asunción y USD 89.000 en Luque, según Casa-Libre al 12 de noviembre de 2026.',
    'El valor fiscal no sirve para tasar: según la prensa (marzo de 2026), está muy por debajo del valor de mercado.',
  ],
  cta: {
    title: 'Tasá con avisos reales',
    text: 'Buscá propiedades comparables por ciudad, tipo y mapa en Casa-Libre, y publicá gratis las que captás.',
    button: 'Crear cuenta de inmobiliaria en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'estimacion-o-tasacion',
      h2: '¿Qué diferencia hay entre una estimación de precio y una tasación?',
      blocks: [
        {
          t: 'p',
          html: 'La estimación la hace el agente, gratis, para fijar un precio de publicación. La tasación es un informe profesional pago, firmado por un tasador, que se usa cuando alguien necesita un valor con respaldo formal.',
        },
        {
          t: 'table',
          caption: 'Estimación del agente y tasación profesional',
          head: ['', 'Estimación del agente', 'Tasación profesional'],
          rows: [
            ['Quién la hace', 'El agente inmobiliario o asesor', 'Un tasador profesional'],
            ['Costo', 'Sin costo para el propietario', 'Honorarios del tasador (no hay una tarifa publicada)'],
            ['Para qué sirve', 'Fijar el precio de publicación y negociar', 'Créditos, sucesiones, juicios o cuando se exige un informe'],
            ['Resultado', 'Un rango de precio con comparables', 'Un informe firmado con un valor'],
          ],
          note: 'Orientación general. Qué trámite exige una tasación formal lo define quien la pide.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'No llames tasación a una estimación',
          html: 'Si el propietario necesita un valor con respaldo formal, recomendale un tasador. Información general. Consultá con un escribano o contador antes de tomar decisiones.',
        },
        {
          t: 'p',
          html: 'Lo que sí podés ofrecer gratis es la comparación con avisos reales, por ejemplo con las <a href="https://casa-libre.com.py/propiedades">propiedades publicadas en Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'metodos-para-tasar',
      h2: '¿Cómo se tasa una propiedad? Los tres métodos',
      blocks: [
        {
          t: 'p',
          html: 'Hay tres caminos: comparar con propiedades parecidas, sumar terreno y construcción, o partir del alquiler que genera. Para casas, departamentos y terrenos en zonas con oferta, el agente usa casi siempre el primero.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Comparación de mercado</strong>: precios de propiedades parecidas de la zona, ajustados. Es el que se explica en esta guía.',
            '<strong>Costo</strong>: valor del terreno más lo que costaría construir hoy, menos el desgaste. Lo usan los tasadores cuando hay pocas propiedades comparables.',
            '<strong>Ingresos por alquiler</strong>: parte del alquiler que la propiedad puede generar. Sirve para locales y para clientes inversores.',
          ],
        },
        {
          t: 'p',
          html: 'El paso a paso del primero, con una planilla para completar, está en la guía de <a href="/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado (ACM)</a>. Para el método por ingresos de alquiler, buscá alquileres parecidos entre las propiedades en alquiler en <a href="https://casa-libre.com.py/alquilar">Casa-Libre</a>.',
        },
      ],
    },
    {
      id: 'tasar-gratis-online',
      h2: 'Cómo tasar una propiedad gratis y online',
      blocks: [
        {
          t: 'p',
          html: 'Con un buscador que filtre por ciudad, tipo y operación, y con un mapa para ver qué está cerca. Elegí de 5 a 8 avisos lo más parecidos posible y anotá precio, superficie, dormitorios y estado.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Filtrá', html: 'Misma ciudad, mismo tipo y misma operación: por ejemplo, casas en venta en Luque en <a href="https://casa-libre.com.py/venta/casas/luque">Casa-Libre</a>.' },
            { title: 'Acercá en el mapa', html: 'Quedate con las del mismo barrio o a pocas cuadras.' },
            { title: 'Calculá el m²', html: 'Precio dividido por superficie construida, para comparar casas de distinto tamaño.' },
            { title: 'Ajustá', html: 'Subí o bajá según la tabla de ajustes de abajo.' },
            { title: 'Entregá un rango', html: 'Un mínimo y un máximo, no un número exacto.' },
          ],
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: valor por m² de una casa',
          html: 'Supuestos hipotéticos: una casa comparable de 150 m² publicada en USD 90.000 y la casa a tasar con 170 m². Precio por m²: 90.000 ÷ 150 = USD 600. Valor de referencia: 170 × 600 = USD 102.000. En guaraníes, a Gs. 7.300: 102.000 × 7.300 = Gs. 744.600.000, aprox. Con más comparables, usá el promedio de sus m².',
        },
      ],
    },
    {
      id: 'tabla-de-ajustes',
      h2: '¿Qué sube y qué baja el valor de una propiedad?',
      blocks: [
        {
          t: 'p',
          html: 'Ajustá cada comparable por las diferencias con la propiedad que tasás. No hay porcentajes fijos publicados: el tamaño del ajuste sale de comparar avisos que solo se diferencian en ese punto.',
        },
        {
          t: 'table',
          caption: 'Ajustes frecuentes al comparar propiedades',
          head: ['Factor', 'Si la propiedad a tasar está mejor que el comparable', 'Si está peor'],
          rows: [
            ['Ubicación y acceso (asfalto, cercanía a avenida)', 'Ajustá hacia arriba', 'Ajustá hacia abajo'],
            ['Superficie de terreno y construida', 'Comparalo por m²', 'Comparalo por m²'],
            ['Estado y refacciones', 'Arriba', 'Abajo (descontá lo que costaría arreglar)'],
            ['Dormitorios y baños', 'Arriba', 'Abajo'],
            ['Cochera, patio, piscina, quincho', 'Arriba', 'Abajo'],
            ['Papeles en orden (título, impuesto al día)', 'Neutro', 'Abajo, o no publicar hasta resolver'],
          ],
          note: 'Guía de trabajo, no una norma de tasación.',
        },
        {
          t: 'p',
          html: 'Para encontrar comparables con una sola diferencia, usá el filtro por dormitorios y el mapa del buscador de propiedades en Asunción de Casa-Libre.',
        },
      ],
    },
    {
      id: 'precios-por-ciudad',
      h2: 'Precios de referencia de casas por ciudad',
      blocks: [
        {
          t: 'p',
          html: 'Las medianas por ciudad sirven para detectar un precio fuera de lugar, no para tasar una casa puntual. Una casa en Asunción y otra en Capiatá juegan en mercados distintos.',
        },
        {
          t: 'table',
          caption: 'Mediana del precio pedido de casas en venta',
          head: ['Ciudad', 'Mediana', 'Aprox. en guaraníes'],
          rows: [
            ['Asunción', 'USD 275.000', 'Gs. 2.007.500.000'],
            ['Lambaré', 'USD 184.000', 'Gs. 1.343.200.000'],
            ['Encarnación', 'USD 169.000', 'Gs. 1.233.700.000'],
            ['Fernando de la Mora', 'USD 149.000', 'Gs. 1.087.700.000'],
            ['Ciudad del Este', 'USD 93.000', 'Gs. 678.900.000'],
            ['Luque', 'USD 89.000', 'Gs. 649.700.000'],
            ['San Lorenzo', 'USD 79.000', 'Gs. 576.700.000'],
            ['Capiatá', 'USD 56.000', 'Gs. 408.800.000'],
          ],
          note: 'Según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026 (precios pedidos, no precios de cierre). Guaraníes a Gs. 7.300 por dólar, aprox.',
        },
        {
          t: 'p',
          html: 'Para casas en la capital, partí de las casas en venta en Asunción en Casa-Libre. El panorama de todas las ciudades está en <a href="/mercado-inmobiliario-paraguay/">mercado inmobiliario en Paraguay</a>.',
        },
      ],
    },
    {
      id: 'presentar-al-propietario',
      h2: '¿Cómo presentar la tasación al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'En persona, con los comparables impresos o en el celular, y con un rango. Aclarale que son precios pedidos, no precios de cierre, y que el valor final lo define la negociación.',
        },
        {
          t: 'ul',
          items: [
            'Mostrá primero los comparables y después tu rango: que vea de dónde sale.',
            'Si su precio está fuera del rango, decilo con datos y por escrito.',
            'Proponé revisar el precio con las consultas de las primeras semanas.',
          ],
        },
        {
          t: 'p',
          html: 'Para que lo lea con calma, mandale la guía de Casa-Libre sobre cuánto vale una propiedad. Cómo sostener ese número frente a una contraoferta está en <a href="/como-negociar-el-precio-de-una-propiedad/">cómo negociar el precio de una propiedad</a>.',
        },
        {
          t: 'casalibre',
          title: 'Precio acordado: publicala hoy',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
          button: 'Ver la cuenta para inmobiliarias en Casa-Libre',
          href: 'https://casa-libre.com.py/empresas',
        },
      ],
    },
    {
      id: 'valor-fiscal',
      h2: '¿Sirve el valor fiscal para tasar una propiedad?',
      blocks: [
        {
          t: 'p',
          html: 'No para fijar un precio de venta. Según la prensa (marzo de 2026), los valores fiscales que usa Catastro están muy por debajo del valor de mercado; sirven para impuestos, no para tasar.',
        },
        {
          t: 'p',
          html: 'Si el propietario pregunta por impuestos al vender, la guía de Casa-Libre sobre impuestos y gastos al vender lo resume, y su contador lo confirma.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cómo tasar una propiedad gratis?',
      a: 'Compará con 5 a 8 propiedades parecidas en venta en la misma zona, calculá el precio por m², ajustá por estado y ubicación, y entregá un rango. Es una estimación, no una tasación formal.',
    },
    {
      q: '¿Cómo tasar una propiedad online?',
      a: 'Con un portal que permita filtrar por ciudad, tipo y operación y ver los avisos en un mapa. En Casa-Libre buscás por ciudad y en el mapa, con precios en guaraníes y dólares.',
    },
    {
      q: '¿Cuánto cobra un tasador en Paraguay?',
      a: 'No hay una tarifa publicada: cada tasador fija sus honorarios según el tipo de propiedad y el uso del informe. Pedí presupuesto a más de uno antes de recomendarlo.',
    },
    {
      q: '¿Un agente inmobiliario puede tasar una propiedad?',
      a: 'Puede hacer una estimación de precio para publicar y negociar. Cuando se necesita un informe con respaldo formal, corresponde un tasador profesional.',
    },
    {
      q: '¿Cómo tasar mi propiedad si soy propietario?',
      a: 'Hacé la misma comparación con avisos parecidos de tu zona. La guía de Casa-Libre para vender tu casa explica los pasos siguientes.',
    },
  ],
  internalSources: [
    {
      label: 'Casa-Libre: snapshot de propiedades publicadas en Paraguay (content/data/py-market.json)',
      url: 'https://casa-libre.com.py/propiedades',
      date: '2026-11-12',
      note: 'Medianas de casas en venta por ciudad; Gs. 7.300 por dólar.',
    },
    {
      label: 'ABC Color: Catastro moderno y ordenamiento territorial, base de la fiscalidad inmobiliaria',
      url: 'https://www.abc.com.py/edicion-impresa/suplementos/economico/2026/03/08/catastro-moderno-y-ordenamiento-territorial-base-de-la-fiscalidad-inmobiliaria/',
      date: '2026-03-08',
      note: 'Valores fiscales muy por debajo del valor de mercado. Citado como "según la prensa (marzo de 2026)".',
    },
    {
      label: 'Google: sugerencias de búsqueda para "como tasar una propiedad" y "cuanto cobra un tasador" (Paraguay)',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=como%20tasar%20una%20propiedad',
      date: '2026-11-12',
      note: 'Variantes: gratis, online, como tasar mi propiedad; "cuanto cobra un tasador en paraguay". Sin tarifa publicada encontrada.',
    },
  ],
  closing: {
    title: 'Del rango de precio al aviso publicado',
    text: 'Publicá gratis en Casa-Libre las propiedades que tasás y captás, y atendé las consultas por WhatsApp.',
    button: 'Publicar gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['analisis-comparativo-de-mercado-inmobiliario', 'como-negociar-el-precio-de-una-propiedad', 'mercado-inmobiliario-paraguay', 'que-decirle-a-un-propietario-para-captar'],
};
