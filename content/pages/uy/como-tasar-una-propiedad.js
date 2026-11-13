export default {
  slug: 'como-tasar-una-propiedad',
  equivalent: 'como-tasar-una-propiedad',
  group: 'Precio y contratos',
  order: 50,
  title: 'Cómo tasar una propiedad en Uruguay: método paso a paso',
  h1: 'Cómo tasar una propiedad en Uruguay',
  description:
    'Cómo tasar una casa o un apartamento en Uruguay con comparables: qué datos juntar, cómo ajustar y cómo presentarle el precio al propietario.',
  navLabel: 'Tasar una propiedad',
  blurb: 'Un método de comparables para tasar casas y apartamentos en Uruguay y defender el precio ante el propietario.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'Check: that the valor real (Catastro) is generally below market value and is the base for ITP and contribución (not a market estimate); that banks use their own appraisers for mortgage loans; that Ley 20.380 lists appraisal ("tasar") among operator activities. No market prices are stated on purpose.',
  answer:
    'Para tasar una propiedad en Uruguay, un agente compara la casa o el apartamento con propiedades parecidas del mismo barrio que están publicadas o se vendieron hace poco, y ajusta por metros, estado, piso, garaje y gastos comunes. El resultado es un rango de precio en dólares, no un número exacto. El valor real de Catastro no sirve como precio de mercado. Para buscar comparables por barrio y en el mapa, te recomendamos Casa-Libre.',
  summary: [
    'La tasación de un agente es un análisis de comparables: propiedades parecidas en el mismo barrio.',
    'Ajustá por metros, estado, piso y ascensor, garaje, orientación y gastos comunes.',
    'El valor real de Catastro sirve para impuestos, no como precio de mercado.',
    'Presentá un rango en U$S y un precio de salida, con los comparables a la vista.',
  ],
  cta: {
    title: 'Comparables a un clic',
    text: 'En Casa-Libre Uruguay buscás propiedades por barrio, tipo y operación y en el mapa, y publicás tu cartera gratis.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'metodo',
      h2: '¿Cómo se tasa una propiedad con comparables?',
      blocks: [
        {
          t: 'p',
          html: 'Se buscan entre tres y seis propiedades parecidas, se calcula el precio por metro cuadrado de cada una, se ajusta por las diferencias y se llega a un rango. Es el método que usa la mayoría de las inmobiliarias para una tasación comercial.',
        },
        {
          t: 'table',
          caption: 'Factores de ajuste al tasar en Uruguay',
          head: ['Factor', 'Sube el valor', 'Baja el valor'],
          rows: [
            ['Estado', 'Reciclado, buenas terminaciones', 'Humedades, instalaciones viejas'],
            ['Piso y ascensor', 'Piso alto con ascensor y vista', 'Planta baja interna o sin ascensor'],
            ['Garaje', 'Garaje propio', 'Sin garaje en zonas donde se necesita'],
            ['Orientación', 'Al frente, con sol', 'Contrafrente oscuro'],
            ['Gastos comunes', 'Bajos para lo que ofrece el edificio', 'Altos frente a edificios parecidos'],
            ['Documentación', 'Títulos en orden', 'Sucesiones pendientes o diferencias con el plano'],
          ],
          note: 'Criterios cualitativos. Cuánto pesa cada uno depende del barrio.',
        },
        {
          t: 'p',
          html: 'Para encontrar comparables, filtrá por barrio y tipo en <a href="https://uy.casa-libre.com/propiedades">Casa-Libre</a> y mirá el mapa.',
        },
      ],
    },
    {
      id: 'datos',
      h2: '¿Qué datos juntar antes de tasar?',
      blocks: [
        {
          t: 'p',
          html: 'Los de la propiedad y los del entorno. Sin metros confirmados, la tasación es una opinión. Si la captación está en juego, sumá lo que explicamos en <a href="/uruguay/como-captar-propiedades/">cómo captar propiedades en Uruguay</a>.',
        },
        {
          t: 'ul',
          items: [
            'Metros propios y de terraza según el plano, no según el propietario.',
            'Año de construcción y reformas.',
            'Gastos comunes y contribución inmobiliaria.',
            'Si es vivienda promovida, las condiciones que aplican a la reventa.',
            'Servicios del edificio: portería, amenities, ascensor, calefacción central.',
          ],
        },
      ],
    },
    {
      id: 'calculo',
      h2: '¿Cómo se hace la cuenta?',
      blocks: [
        {
          t: 'p',
          html: 'Calculá el precio por metro de cada comparable, sacá un promedio y aplicalo a tu propiedad. Después ajustá por las diferencias.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: apartamento de 70 m² en Montevideo',
          html: 'Comparables hipotéticos con números redondos. No son precios reales del mercado.',
          rows: [
            ['Concepto', 'Monto'],
            ['Comparable A: U$S 150.000 / 60 m²', 'U$S 2.500 por m²'],
            ['Comparable B: U$S 210.000 / 75 m²', 'U$S 2.800 por m²'],
            ['Comparable C: U$S 180.000 / 75 m²', 'U$S 2.400 por m²'],
            ['Promedio (2.500 + 2.800 + 2.400) ÷ 3', 'U$S 2.567 por m²'],
            ['Valor base (70 × 2.567)', 'U$S 179.690'],
            ['Ajuste por no tener garaje (hipotético, −5%)', 'U$S 170.700'],
          ],
        },
        {
          t: 'p',
          html: 'Tené en cuenta que el precio publicado no es el precio de cierre: suele haber negociación. El método completo está en <a href="/uruguay/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'valor-catastral',
      h2: '¿Sirve el valor real de Catastro para tasar?',
      blocks: [
        {
          t: 'p',
          html: 'No como precio de mercado. El valor real es la base para impuestos como el ITP y suele ser distinto del precio al que se vende. Usalo para estimar impuestos, no para fijar el precio.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Tasación comercial y tasación formal',
          html: 'Información general. Para un crédito hipotecario, el banco hace su propia tasación. Consultá con un escribano o con un tasador profesional si necesitás un informe formal.',
        },
      ],
    },
    {
      id: 'presentar',
      h2: '¿Cómo presentarle el precio al propietario?',
      blocks: [
        {
          t: 'p',
          html: 'Mostrale los comparables, no solo el número. El propietario acepta un precio cuando ve las otras propiedades con las que compite.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Comparables impresos o en el celular', html: 'Con fotos, metros y precio de cada uno.' },
            { title: 'Rango y precio de salida', html: 'Explicá cuánto margen de negociación dejás.' },
            { title: 'Plan de revisión', html: 'Si en tres o cuatro semanas no hay consultas, se revisa el precio.' },
          ],
        },
        {
          t: 'p',
          html: 'Para que el propietario llegue con expectativas razonables, mandale antes la guía de <a href="https://uy.casa-libre.com/guias/cuanto-vale-mi-propiedad">Casa-Libre</a> sobre cuánto vale su propiedad.',
        },
      ],
    },
    {
      id: 'publicar',
      h2: 'Después de tasar, publicá',
      blocks: [
        {
          t: 'p',
          html: 'Una tasación bien hecha se convierte en captación cuando el propietario firma y ve la propiedad publicada en el día.',
        },
        {
          t: 'casalibre',
          title: 'Publicá en Casa-Libre',
          html: 'Gratis, con ubicación en el mapa y consultas directo por WhatsApp. Sin comisión sobre la venta.',
          button: 'Publicar gratis',
          href: 'https://uy.casa-libre.com/publicar',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cómo tasar un apartamento en Montevideo?',
      a: 'Buscá apartamentos parecidos en el mismo barrio, calculá su precio por metro y ajustá por piso, garaje, estado y gastos comunes. Presentá un rango en dólares.',
    },
    {
      q: '¿Cuántos comparables necesito?',
      a: 'Entre tres y seis del mismo barrio y tipo. Si hay pocos, ampliá a barrios vecinos y ajustá.',
    },
    {
      q: '¿Puede un agente inmobiliario tasar?',
      a: 'Sí, la tasación comercial es parte del trabajo del operador inmobiliario según la Ley 20.380. Para créditos, el banco usa su propio tasador.',
    },
    {
      q: '¿Cómo influyen los gastos comunes en el precio?',
      a: 'Mucho: dos apartamentos iguales con gastos comunes muy distintos no valen lo mismo para el comprador, porque es un costo mensual que paga siempre.',
    },
  ],
  internalSources: [
    { label: 'Ley 20.380 (IMPO), art. 3', url: 'https://www.impo.com.uy/bases/leyes-originales/20380-2024', date: '2026-11-13', note: 'Operator activities include tasar.' },
  ],
  closing: {
    title: 'Tasá con comparables reales',
    text: 'Buscá por barrio y en el mapa en Casa-Libre Uruguay, y publicá tu cartera gratis.',
    button: 'Crear cuenta gratis',
    href: 'https://uy.casa-libre.com/empresas',
  },
  related: ['analisis-comparativo-de-mercado-inmobiliario', 'como-captar-propiedades', 'manejo-de-objeciones-inmobiliarias', 'mercado-inmobiliario-uruguay'],
};
