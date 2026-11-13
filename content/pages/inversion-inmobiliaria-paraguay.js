export default {
  slug: 'inversion-inmobiliaria-paraguay',
  title: 'Inversión inmobiliaria en Paraguay: rentabilidad por ciudad',
  h1: 'Inversión inmobiliaria en Paraguay: rentabilidad por ciudad',
  description:
    'Rentabilidad bruta orientativa de casas y departamentos en alquiler en ciudades de Paraguay, cómo se calcula, qué costos no incluye y cómo presentarla a un inversor.',
  navLabel: 'Inversión inmobiliaria',
  blurb: 'Rentabilidad bruta orientativa por ciudad y tipo, con sus advertencias, y cómo un agente presenta una inversión a un cliente.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'none',
  answer:
    'Según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026 (precios pedidos, no precios de cierre), la rentabilidad bruta orientativa de un departamento en Asunción es 7,8% al año: alquiler mediano de USD 880 por mes contra un precio mediano de USD 135.000. Es una comparación de precios pedidos, no un retorno real: no descuenta impuestos, gastos ni meses vacíos. Varias ciudades tienen muestras chicas.',
  summary: [
    'Departamento en Asunción: 7,8% bruto al año; casa en Asunción: 9,2%. Precios pedidos en Casa-Libre al 12 de noviembre de 2026.',
    'Fernando de la Mora (9,9%) y Encarnación (9,8%) tienen cifras para departamentos con muestras de 17 a 34 anuncios.',
    'Las cifras más altas (Ciudad del Este 16%, San Bernardino 13,7%) tienen muestras chicas o alquileres de temporada.',
    'Fórmula: alquiler mensual × 12 ÷ precio de venta. No descuenta impuestos, gastos, expensas ni meses vacíos.',
    'Casa-Libre muestra en el mismo buscador propiedades en venta y en alquiler para comparar por ciudad.',
  ],
  cta: {
    title: 'Mostrale a tu inversor opciones reales',
    text: 'Publicá gratis en Casa-Libre las propiedades que ofrecés a inversores. Los interesados te escriben directo por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'rentabilidad-por-ciudad',
      h2: 'Rentabilidad bruta por ciudad y tipo de propiedad',
      blocks: [
        {
          t: 'p',
          html: 'La tabla cruza el alquiler mediano con el precio de venta mediano de la misma ciudad y el mismo tipo. Solo aparecen las combinaciones con al menos cinco anuncios con precio en venta y en alquiler.',
        },
        {
          t: 'table',
          caption: 'Rentabilidad bruta orientativa por ciudad y tipo',
          head: ['Ciudad y tipo', 'Venta mediana', 'Alquiler mediano por mes', 'Rentabilidad bruta al año', 'Cuidado'],
          rows: [
            ['Asunción, departamento', 'USD 135.000', 'USD 880', '7,8%', '150 alquileres con precio'],
            ['Asunción, casa', 'USD 275.000', 'USD 2.100', '9,2%', '20 alquileres con precio'],
            ['Luque, departamento', 'USD 73.000', 'USD 490', '8,1%', '31 alquileres con precio'],
            ['Luque, casa', 'USD 89.000', 'USD 920', '12,4%', '15 alquileres con precio'],
            ['Fernando de la Mora, departamento', 'USD 67.000', 'USD 550', '9,9%', '18 alquileres con precio'],
            ['Encarnación, departamento', 'USD 61.000', 'USD 500', '9,8%', '17 alquileres con precio'],
            ['Mariano Roque Alonso, departamento', 'USD 59.000', 'USD 520', '10,6%', 'Muestra chica: 6 alquileres y 9 ventas'],
            ['Lambaré, casa', 'USD 184.000', 'USD 950', '6,2%', 'Muestra chica: 8 alquileres'],
            ['San Lorenzo, departamento', 'USD 86.000', 'USD 320', '4,5%', '12 alquileres con precio'],
            ['San Bernardino, casa', 'USD 250.000', 'USD 2.850', '13,7%', 'Mezcla alquiler de temporada y anual'],
            ['Ciudad del Este, departamento', 'USD 75.000', 'USD 1.000', '16%', 'Muestra chica: 6 alquileres'],
          ],
          note: 'Según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026 (precios pedidos, no precios de cierre). Rentabilidad bruta = alquiler mediano × 12 ÷ precio de venta mediano. Es una comparación orientativa, no un retorno de inversión.',
        },
        {
          t: 'p',
          html: 'Para ver los anuncios detrás de cada cifra, usá el listado de propiedades en alquiler en <a href="https://casa-libre.com.py/alquilar">Casa-Libre</a> y filtrá por ciudad y tipo.',
        },
      ],
    },
    {
      id: 'como-se-calcula',
      h2: '¿Cómo se calcula la rentabilidad bruta de un alquiler?',
      blocks: [
        {
          t: 'p',
          html: 'Se multiplica el alquiler mensual por doce y se divide por el precio de compra. El resultado, en porcentaje, es cuánto del precio vuelve por año en alquileres antes de cualquier gasto.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: un departamento a la mediana de Asunción',
          html: 'Precio y alquiler iguales a las medianas de Asunción en Casa-Libre al 12 de noviembre de 2026 (precios pedidos). Gs. 7.300 por dólar, aprox. Sin gastos ni impuestos.',
          rows: [
            ['Precio de compra', 'USD 135.000 (Gs. 985.500.000 aprox.)'],
            ['Alquiler mensual', 'USD 880 (Gs. 6.424.000 aprox.)'],
            ['Alquiler de un año (880 × 12)', 'USD 10.560 (Gs. 77.088.000 aprox.)'],
            ['Rentabilidad bruta (10.560 ÷ 135.000)', '7,8% al año'],
            ['Si quedara vacío 2 meses (880 × 10 ÷ 135.000)', '6,5% al año'],
          ],
        },
        {
          t: 'p',
          html: 'Los precios de venta de esa cuenta están en los departamentos en venta en Asunción en <a href="https://casa-libre.com.py/venta/departamentos/asuncion">Casa-Libre</a>, y los alquileres en los departamentos en alquiler en Asunción en Casa-Libre.',
        },
      ],
    },
    {
      id: 'costos-no-incluidos',
      h2: '¿Por qué no es la rentabilidad real?',
      blocks: [
        {
          t: 'p',
          html: 'Porque compara precios pedidos y no descuenta nada. La rentabilidad neta de una inversión concreta siempre es menor que la bruta.',
        },
        {
          t: 'ul',
          items: [
            'Gastos de compra: escribanía e impuestos de la operación. Consultá con un escribano o contador.',
            'Impuestos anuales sobre la propiedad y sobre los ingresos del alquiler. Consultá con un contador.',
            'Expensas, mantenimiento y reparaciones a cargo del propietario.',
            'Meses sin inquilino entre un contrato y otro.',
            'Honorarios por colocar el inquilino o por administrar.',
            'La diferencia entre el precio pedido y el que finalmente se paga, en la compra y en el alquiler.',
          ],
        },
        {
          t: 'p',
          html: 'Si tu cliente inversor no quiere ocuparse del alquiler, contale que existe la administración de propiedades de Casa-Libre. Qué incluye ese servicio está en <a href="/administracion-de-propiedades-en-alquiler/">administración de propiedades en alquiler</a>.',
        },
      ],
    },
    {
      id: 'inversion-en-asuncion',
      h2: 'Inversión inmobiliaria en Asunción',
      blocks: [
        {
          t: 'p',
          html: 'Asunción tiene la mayor oferta de alquileres de la muestra: 239 anuncios en alquiler, 151 de ellos departamentos. Eso hace que su cifra de 7,8% para departamentos sea la más respaldada por cantidad de anuncios.',
        },
        {
          t: 'p',
          html: 'El rango también importa: la mitad de los departamentos en alquiler pide entre USD 650 y USD 1.200 por mes, y la mitad de los que están en venta, entre USD 96.000 y USD 218.000. Un inversor puede caer en cualquier punto de esos rangos. Mirá también las casas en alquiler en Asunción en Casa-Libre, que muestran 9,2% bruto con 20 anuncios.',
        },
      ],
    },
    {
      id: 'cifras-altas',
      h2: 'Las cifras altas, con cuidado: San Bernardino y Ciudad del Este',
      blocks: [
        {
          t: 'p',
          html: 'Las dos cifras más altas de la tabla son las menos confiables. No las presentes a un cliente sin explicar por qué.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Ciudad del Este, 16%</strong>: sale de solo 6 departamentos en alquiler con precio. Un par de anuncios caros mueve todo.',
            '<strong>San Bernardino, 13,7%</strong>: los alquileres de casas mezclan temporada y año completo; la mitad del medio va de USD 800 a USD 5.300 por mes.',
            '<strong>Luque, casas, 12,4%</strong>: muestra de 15 alquileres; las casas en alquiler y en venta pueden no ser comparables en tamaño.',
          ],
        },
        {
          t: 'p',
          html: 'Si un cliente se interesa por esas ciudades, mostrale anuncios reales: las casas en alquiler en San Bernardino en Casa-Libre o los departamentos en venta en Ciudad del Este en Casa-Libre.',
        },
      ],
    },
    {
      id: 'presentar-a-un-inversor',
      h2: 'Cómo presentarle una inversión a un cliente',
      blocks: [
        {
          t: 'p',
          html: 'Con números propios, rangos y advertencias escritas. Un inversor desconfía de una cifra sola y confía en quien le muestra de dónde sale.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Preguntá el objetivo', html: 'Alquiler anual, temporada o reventa; plazo; presupuesto en dólares o guaraníes.' },
            { title: 'Mostrá el cálculo bruto', html: 'Con la fórmula y los anuncios usados, no solo el porcentaje.' },
            { title: 'Restá los costos', html: 'Pedí al cliente que confirme impuestos y gastos con su contador antes de decidir.' },
            { title: 'Ofrecé dos o tres propiedades', html: 'Con su propia cuenta de rentabilidad, no la de la ciudad.' },
          ],
        },
        {
          t: 'casalibre',
          title: 'Publicá las oportunidades para inversores',
          html: 'Con la cuenta de inmobiliaria de Casa-Libre publicás gratis, con precio en guaraníes o dólares y ubicación en el mapa. Los interesados escriben directo por WhatsApp y Casa-Libre no cobra comisión sobre la venta.',
          button: 'Crear cuenta de inmobiliaria en Casa-Libre',
          href: 'https://casa-libre.com.py/empresas',
        },
        {
          t: 'p',
          html: 'Cómo comparar propiedades con método está en el <a href="/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado inmobiliario</a>.',
        },
      ],
    },
    {
      id: 'inversores-del-exterior',
      h2: 'Inversores del exterior',
      blocks: [
        {
          t: 'p',
          html: 'Según cifras publicadas en la prensa en 2025 y 2026, hay compradores argentinos, brasileños y, cada vez más, europeos; no existen estadísticas consolidadas sobre cuántos son. Para ellos, precios en dólares y una cuenta clara pesan tanto como la propiedad.',
        },
        {
          t: 'p',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android. Lo que un extranjero tiene que saber antes de comprar está en <a href="/comprar-propiedad-en-paraguay-siendo-extranjero/">comprar una propiedad en Paraguay siendo extranjero</a>, y el listado general en propiedades en venta en Casa-Libre.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Conviene invertir en inmuebles en Paraguay?',
      a: 'Depende de la propiedad, el precio y tus costos. Los precios pedidos en Casa-Libre al 12 de noviembre de 2026 dan rentabilidades brutas orientativas de 4,5% a 16% según ciudad y tipo, pero no descuentan gastos ni impuestos.',
    },
    {
      q: '¿Cuál es la rentabilidad de un departamento en Asunción?',
      a: 'Una rentabilidad bruta orientativa de 7,8% al año: alquiler mediano de USD 880 contra un precio mediano de USD 135.000, según Casa-Libre al 12 de noviembre de 2026. La neta es menor.',
    },
    {
      q: '¿Qué es la rentabilidad bruta?',
      a: 'Es el alquiler de un año dividido por el precio de compra, sin restar gastos, impuestos ni meses vacíos. Sirve para comparar ciudades, no para decidir una compra.',
    },
    {
      q: '¿Por qué Ciudad del Este da una rentabilidad tan alta?',
      a: 'Porque la cifra sale de solo 6 departamentos en alquiler con precio. Con una muestra tan chica, un par de anuncios caros sube mucho el resultado.',
    },
    {
      q: '¿Dónde busco propiedades para invertir?',
      a: 'En el buscador con mapa de <a href="https://casa-libre.com.py/propiedades">Casa-Libre</a>, donde comparás propiedades en venta y en alquiler de la misma ciudad.',
    },
  ],
  internalSources: [
    {
      label: 'Casa-Libre: propiedades publicadas en Paraguay (content/data/py-market.json)',
      url: 'https://casa-libre.com.py/propiedades',
      date: '2026-11-12',
      note: 'casa_gross_rent_yield_pct y departamento_gross_rent_yield_pct por ciudad, medianas y rangos. Precios pedidos, no de cierre. Comparación orientativa, no retorno de inversión.',
    },
    {
      label: 'Infonegocios: mercado del corretaje inmobiliario e inversión extranjera',
      url: 'https://infonegocios.com.py/infomicasa/mercado-del-corretaje-inmobiliario-cambia-de-ritmo-redes-sociales-ia-e-inversion-extranjera-reconfiguran-el-negocio',
      date: '2026-08-07',
      note: 'Compradores brasileños en aumento, sin estadísticas consolidadas. Europeos según Infonegocios 13/04/2026.',
    },
  ],
  closing: {
    title: 'Ofrecé tus propiedades a inversores',
    text: 'Publicá gratis en Casa-Libre, en guaraníes o dólares, y recibí las consultas directo en tu WhatsApp.',
    button: 'Publicar en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  related: ['mercado-inmobiliario-paraguay', 'comprar-propiedad-en-paraguay-siendo-extranjero', 'administracion-de-propiedades-en-alquiler', 'como-vender-propiedades-a-extranjeros'],
};
