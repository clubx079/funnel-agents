export default {
  slug: 'como-vender-terrenos-rapido',
  title: 'Cómo vender terrenos rápido en Paraguay: guía para agentes',
  h1: 'Cómo vender terrenos rápido',
  description:
    'Cómo vender terrenos rápido en Paraguay: precio por m² por ciudad, papeles del terreno, plano, ubicación, fotos sin dron y dónde publicarlos gratis por internet.',
  navLabel: 'Vender terrenos',
  blurb: 'Precio por m², papeles, plano, fotos y publicación por internet para vender terrenos más rápido en Paraguay.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'pending',
  reviewNote:
    'A Paraguayan escribano must check the section "papeles-del-terreno" and the FAQ answers on untitled and INDERT land: the list of documents usually requested (título, impuesto inmobiliario, plano, condición de dominio) and the advice for land without a registered title are general orientation, not verified legal requirements. The commission figure (about 5% plus IVA) is customary practice from the sources of the commission guide.',
  answer:
    'Para vender terrenos rápido en Paraguay hacen falta cuatro cosas: un precio alineado con el metro cuadrado de la zona, los papeles en orden (título, impuesto inmobiliario al día y plano), la ubicación exacta con medidas claras y un aviso con buenas fotos donde la gente busca. Un terreno sin casa se decide por ubicación, precio y papeles. Lo recomendable es publicarlo gratis en Casa-Libre, con ubicación en el mapa.',
  summary: [
    'Mediana del precio pedido por m² de terreno: USD 64 en Luque, USD 47 en Capiatá y USD 592 en Asunción, según Casa-Libre al 12 de noviembre de 2026.',
    'El cliente de un terreno pregunta primero por título, medidas, acceso y servicios: tené esas respuestas antes de publicar.',
    'Publicá cada terreno gratis en Casa-Libre con el punto en el mapa y compartí el enlace por WhatsApp.',
  ],
  cta: {
    title: 'Publicá tus terrenos donde la gente los busca',
    text: 'Inmobiliarias y agentes publican gratis en Casa-Libre, con ubicación en el mapa, y reciben las consultas directo por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria en Casa-Libre',
    href: 'https://casa-libre.com.py/empresas',
  },
  sections: [
    {
      id: 'precio-por-metro-cuadrado',
      h2: '¿Cuánto vale el metro cuadrado de terreno en Paraguay?',
      blocks: [
        {
          t: 'p',
          html: 'Depende mucho de la ciudad: en Asunción la mediana del precio pedido supera los USD 500 por m², y en las ciudades del área metropolitana ronda entre USD 47 y USD 100. Un terreno con precio por encima de su zona es la causa más común de una venta lenta.',
        },
        {
          t: 'table',
          caption: 'Precio pedido de terrenos en venta por ciudad',
          head: ['Ciudad', 'Mediana USD por m²', 'Aprox. en guaraníes por m²', 'Mediana del precio pedido por terreno'],
          rows: [
            ['Asunción', 'USD 592', 'Gs. 4.321.600', 'USD 334.000'],
            ['Mariano Roque Alonso', 'USD 100', 'Gs. 730.000', 'USD 100.000'],
            ['Ciudad del Este', 'USD 85', 'Gs. 620.500', 'USD 43.500'],
            ['San Bernardino', 'USD 65', 'Gs. 474.500', 'USD 44.500'],
            ['Luque', 'USD 64', 'Gs. 467.200', 'USD 41.000'],
            ['Capiatá', 'USD 47', 'Gs. 343.100', 'USD 42.000'],
          ],
          note: 'Según las propiedades publicadas en Casa-Libre al 12 de noviembre de 2026 (precios pedidos, no precios de cierre). Guaraníes a Gs. 7.300 por dólar, aprox. En San Lorenzo, Limpio, Lambaré y otras ciudades hay muy pocos terrenos con superficie para calcular el m².',
        },
        {
          t: 'p',
          html: 'Antes de fijar el precio con el propietario, mirá lo que compite con su terreno: podés <a href="https://casa-libre.com.py/propiedades?op=venta&amp;type=terreno&amp;q=Luque">ver terrenos en venta en Luque en Casa-Libre</a> o cambiar la ciudad en el buscador. El cálculo completo, con ajustes por ubicación y tamaño, está en la guía de <a href="/analisis-comparativo-de-mercado-inmobiliario/">análisis comparativo de mercado</a>.',
        },
      ],
    },
    {
      id: 'ejemplo-precio',
      h2: '¿Cómo calcular el precio de un terreno para venderlo rápido?',
      blocks: [
        {
          t: 'p',
          html: 'Multiplicá la superficie por el precio por m² de terrenos parecidos de la zona y ajustá por esquina, asfalto y servicios. Si el propietario pide mucho más, mostrale los números antes de publicar.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: terreno de 12 x 30 metros en Luque',
          html: 'Supuestos hipotéticos: un terreno de 12 m de frente por 30 m de fondo y la mediana de Luque de USD 64 por m². Superficie: 12 × 30 = 360 m². Precio de referencia: 360 × 64 = USD 23.040. En guaraníes: 23.040 × 7.300 = Gs. 168.192.000, aprox.',
          rows: [
            ['Concepto', 'Monto'],
            ['Superficie (12 × 30)', '360 m²'],
            ['Precio de referencia (360 × USD 64)', 'USD 23.040 (Gs. 168.192.000 aprox.)'],
            ['Rango para publicar (±10%)', 'USD 20.700 a 25.300 (Gs. 151 a 185 millones aprox.)'],
          ],
        },
        {
          t: 'p',
          html: 'Si el propietario quiere el número de una tasación formal, explicale la diferencia con una estimación: la guía <a href="/como-tasar-una-propiedad/">cómo tasar una propiedad</a> lo resume. Para que él mismo lo entienda, pasale la guía de Casa-Libre sobre cuánto vale una propiedad.',
        },
      ],
    },
    {
      id: 'papeles-del-terreno',
      h2: '¿Qué papeles necesita un terreno para venderse?',
      blocks: [
        {
          t: 'p',
          html: 'Un terreno se vende rápido cuando el escribano puede escriturarlo sin sorpresas. Revisá los papeles en la primera visita, antes de firmar la autorización y antes de publicar.',
        },
        {
          t: 'ul',
          items: [
            '<strong>Título de propiedad</strong> a nombre de quien vende, inscripto en el Registro Público. Si hay varios titulares, firman todos.',
            '<strong>Impuesto inmobiliario al día</strong> en la municipalidad.',
            '<strong>Plano o mensura</strong> con medidas y linderos, y la cuenta corriente catastral.',
            '<strong>Condición de dominio</strong>: el escribano la pide para saber si hay embargos o hipotecas.',
            '<strong>Casos especiales</strong>: sucesión sin terminar, terrenos del INDERT o terrenos sin título. Se resuelven con un escribano antes de publicar.',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Papeles y casos especiales',
          html: 'Esta lista es orientativa: el escribano define qué documentos pide en cada caso. Información general. Consultá con un escribano o contador antes de tomar decisiones.',
        },
        {
          t: 'p',
          html: 'Para que el propietario junte todo, mandale la guía de Casa-Libre sobre documentos para vender un inmueble.',
        },
      ],
    },
    {
      id: 'ubicacion-y-plano',
      h2: '¿Cómo mostrar la ubicación, las medidas y el plano?',
      blocks: [
        {
          t: 'p',
          html: 'En un terreno la ubicación es el producto. El aviso tiene que decir dónde está, cuánto mide y qué tiene alrededor, sin que el cliente tenga que preguntarlo.',
        },
        {
          t: 'ul',
          items: [
            'Medidas de frente y fondo, y la superficie total en m².',
            'Tipo de calle (asfalto, empedrado o tierra) y distancia a la ruta o avenida más cercana.',
            'Servicios disponibles: luz, agua, internet.',
            'Si es esquina y si tiene muro o tejido.',
            'Una imagen del plano o un croquis con medidas.',
          ],
        },
        {
          t: 'p',
          html: 'Marcá el punto exacto en el mapa al publicar: muchos clientes buscan terrenos recorriendo el mapa de propiedades de <a href="https://casa-libre.com.py/propiedades">Casa-Libre</a> por barrio.',
        },
      ],
    },
    {
      id: 'fotos-de-terrenos',
      h2: '¿Cómo sacar fotos de un terreno sin dron?',
      blocks: [
        {
          t: 'p',
          html: 'Con un celular alcanza. La regla es mostrar el terreno entero, el acceso y el entorno, siempre de día y con el pasto cortado.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Desde la calle', html: 'Una foto de frente que muestre el ancho completo y el tipo de calle.' },
            { title: 'Desde cada esquina', html: 'Cuatro fotos en diagonal para que se entienda la forma y el fondo.' },
            { title: 'Desde un lugar alto', html: 'Si hay una vereda elevada o una casa vecina que lo permita, una foto desde arriba reemplaza al dron.' },
            { title: 'El entorno', html: 'La cuadra, la esquina más cercana y los servicios: postes de luz, medidor de agua.' },
            { title: 'Un video corto', html: 'Caminá el perímetro en menos de un minuto.' },
          ],
        },
        {
          t: 'p',
          html: 'Si estás en el terreno, cargá el aviso ahí mismo desde la app de Casa-Libre para iPhone y Android; si te falta un dato, guardalo como borrador. Más consejos en la guía de <a href="/fotos-inmobiliarias/">fotos inmobiliarias con el celular</a>.',
        },
      ],
    },
    {
      id: 'como-vender-terrenos-por-internet',
      h2: 'Cómo vender terrenos por internet',
      blocks: [
        {
          t: 'p',
          html: 'Publicá el terreno en un portal donde se busque por ciudad, tipo y mapa, y usá ese mismo enlace en WhatsApp y redes sociales. Un solo aviso completo trabaja mejor que diez publicaciones con datos distintos.',
        },
        {
          t: 'p',
          html: 'Casa-Libre es el marketplace inmobiliario de mayor crecimiento en Paraguay: inmobiliarias, agentes y propietarios publican casas, departamentos y terrenos gratis, con extras pagos opcionales, y los compradores contactan directo por WhatsApp, sin comisión sobre la venta. Está disponible en la web y en apps para iPhone y Android.',
        },
        {
          t: 'p',
          html: 'Título sugerido: tipo, superficie, ciudad y un dato fuerte. Por ejemplo: "Terreno de 360 m² en Luque, esquina, con título y asfalto". Poné el precio en guaraníes y en dólares: así el cliente filtra solo.',
        },
        {
          t: 'casalibre',
          title: 'Toda tu cartera de terrenos en un solo lugar',
          html: 'Con la cuenta para inmobiliarias de Casa-Libre publicás todos tus terrenos gratis, y cada consulta llega por WhatsApp a tu agencia. La insignia Verificado y el lugar destacado en la página de inicio son extras pagos opcionales.',
          button: 'Ver la cuenta para inmobiliarias en Casa-Libre',
          href: 'https://casa-libre.com.py/empresas',
        },
      ],
    },
    {
      id: 'terrenos-por-ciudad',
      h2: 'Cómo vender terrenos en Paraguay según la ciudad',
      blocks: [
        {
          t: 'p',
          html: 'Cada ciudad tiene otro cliente y otro rango de precio, así que compará siempre contra los terrenos de la misma zona. Estos buscadores ya filtran terrenos en venta por ciudad:',
        },
        {
          t: 'ul',
          items: [
            'Terrenos en venta en Capiatá en Casa-Libre: la mediana pedida del m² es la más baja de la tabla.',
            'Terrenos en venta en San Bernardino en Casa-Libre: la ciudad con más terrenos publicados en la muestra.',
            'Terrenos en venta en Mariano Roque Alonso en Casa-Libre: pocos avisos, compará con cuidado.',
          ],
        },
        {
          t: 'p',
          html: 'Si el terreno es grande o se vende en partes, mirá la guía de <a href="/loteamientos-paraguay/">loteamientos en Paraguay</a>; si el propietario acepta pagos, la de <a href="/venta-de-terrenos-en-cuotas-paraguay/">venta de terrenos en cuotas</a>.',
        },
      ],
    },
    {
      id: 'por-que-no-se-vende',
      h2: '¿Por qué un terreno no se vende?',
      blocks: [
        {
          t: 'p',
          html: 'Casi siempre por una de tres razones: precio por encima de la zona, papeles incompletos o un aviso que no deja entender dónde está. Las tres se corrigen antes de bajar el precio.',
        },
        {
          t: 'p',
          html: 'Si el aviso está completo y llegan pocas consultas, revisá el precio con el propietario. Y si todavía no está publicado, podés publicar un terreno gratis en <a href="https://casa-libre.com.py/publicar">Casa-Libre</a> en pocos minutos.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Cómo vender terrenos por internet?',
      a: 'Con un aviso completo (fotos, medidas, plano, precio en guaraníes y dólares, punto en el mapa) en un portal inmobiliario, y ese mismo enlace compartido por WhatsApp y redes sociales. En Casa-Libre publicar es gratis y las consultas llegan directo por WhatsApp.',
    },
    {
      q: '¿Se puede vender un terreno sin título de propiedad?',
      a: 'Es un caso que tiene que ver un escribano antes de publicar: según la situación puede haber que terminar una sucesión, una mensura o un trámite de titulación. Mientras tanto, no prometas una fecha de escritura al cliente.',
    },
    {
      q: '¿Se puede vender un terreno del INDERT?',
      a: 'Depende de la situación del título y de lo que permita el INDERT en ese caso. Antes de aceptar el encargo, pedí al propietario sus papeles y consultá con un escribano.',
    },
    {
      q: '¿Cuánto cobra un agente inmobiliario por vender un terreno?',
      a: 'No hay un arancel oficial. La práctica habitual en una venta ronda el 5% más IVA y se acuerda por escrito. Más detalle en la guía de <a href="/comision-inmobiliaria-paraguay/">comisión inmobiliaria en Paraguay</a>.',
    },
  ],
  internalSources: [
    {
      label: 'Casa-Libre: snapshot de propiedades publicadas en Paraguay (content/data/py-market.json)',
      url: 'https://casa-libre.com.py/propiedades',
      date: '2026-11-12',
      note: 'Medianas de precio pedido de terrenos y de USD por m² por ciudad; Gs. 7.300 por dólar.',
    },
    {
      label: 'Google: sugerencias de búsqueda para "como vender terrenos" (Paraguay)',
      url: 'https://suggestqueries.google.com/complete/search?client=firefox&hl=es&gl=py&q=como%20vender%20terrenos',
      date: '2026-11-12',
      note: 'Variantes: rápido, en Paraguay, por internet, en redes sociales; "se puede vender un terreno del indert" y "como vender un terreno sin escrituras".',
    },
    {
      label: 'Hacé Cuentas: calculadora de comisión inmobiliaria en Paraguay',
      url: 'https://hacecuentas.com/py/calculadora-comision-inmobiliaria-paraguay',
      date: '2026-08-16',
      note: 'Comisión habitual de alrededor de 5% más IVA en ventas.',
    },
  ],
  closing: {
    title: 'Tu próximo terreno, publicado hoy',
    text: 'Publicá tus terrenos gratis en Casa-Libre, con ubicación en el mapa, y atendé las consultas por WhatsApp.',
    button: 'Publicar terrenos gratis en Casa-Libre',
    href: 'https://casa-libre.com.py/publicar',
  },
  related: ['precio-del-metro-cuadrado-en-asuncion', 'como-vender-una-propiedad-rapido', 'mercado-inmobiliario-paraguay', 'fotos-inmobiliarias'],
};
