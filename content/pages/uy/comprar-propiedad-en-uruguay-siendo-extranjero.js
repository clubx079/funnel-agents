export default {
  slug: 'comprar-propiedad-en-uruguay-siendo-extranjero',
  group: 'Clientes y ventas',
  order: 40,
  title: 'Comprar propiedad en Uruguay siendo extranjero: guía',
  h1: 'Comprar propiedad en Uruguay siendo extranjero: qué explicarle al cliente',
  description:
    'Cómo atender a un extranjero que compra propiedad en Uruguay: documentos, poder apostillado, origen de fondos, impuestos y acompañamiento a distancia.',
  navLabel: 'Clientes extranjeros',
  blurb: 'Qué necesita un extranjero para comprar en Uruguay y cómo acompañarlo como agente, aunque compre desde otro país.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Uruguayan escribano must confirm: that foreigners can buy urban property on the same terms as nationals (no general restriction); that a power of attorney signed abroad must be apostilled (or legalised by chain for non-Hague countries), translated if needed, and protocolised in Uruguay; that escribanos and inmobiliarias are AML obligated subjects (Ley 19.574) and ask for proof of origin of funds; that ITP (2% each party) applies equally; that non-resident landlords pay IRNR on rents (rate not stated); the existence of tax residence through real-estate investment (thresholds not stated). Rural land and company-ownership rules not covered on purpose.',
  answer:
    'En Uruguay un extranjero puede comprar una propiedad urbana en las mismas condiciones que un uruguayo. Necesita su documento de identidad o pasaporte, justificar el origen de los fondos ante el escribano y, si no viaja, otorgar un poder apostillado en su país. Paga los mismos impuestos de compra, como su parte del ITP. El agente lo acompaña a distancia: videos, documentación y coordinación con el escribano. Para mostrarle propiedades por barrio y en el mapa, te recomendamos Casa-Libre.',
  summary: [
    'Un extranjero puede comprar propiedad urbana en Uruguay en las mismas condiciones que un uruguayo.',
    'Si no viaja, firma con un poder otorgado en su país, apostillado y, si hace falta, traducido.',
    'El escribano y la inmobiliaria deben pedir el origen de los fondos, por las normas contra el lavado de activos.',
    'Acompañalo a distancia: video de cada visita, comparables y un calendario claro hasta la escritura.',
  ],
  cta: {
    title: 'Mostrá tu cartera a clientes de afuera',
    text: 'En Casa-Libre Uruguay tus propiedades se ven en la web y en las apps para iPhone y Android, con consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://uy.casa-libre.com/empresas',
  },
  sections: [
    {
      id: 'puede-comprar',
      h2: '¿Puede un extranjero comprar propiedad en Uruguay?',
      blocks: [
        {
          t: 'p',
          html: 'Sí. Para propiedades urbanas, como casas y apartamentos, no hay en general restricciones por nacionalidad ni necesidad de residir en el país. El proceso es el mismo que para un uruguayo, con algunos documentos extra.',
        },
        {
          t: 'table',
          caption: 'Qué necesita un comprador extranjero en Uruguay',
          head: ['Tema', 'Qué pide', 'Tu papel como agente'],
          rows: [
            ['Identidad', 'Pasaporte o documento de su país', 'Pedir copia al reservar'],
            ['Poder, si no viaja', 'Poder otorgado en su país, apostillado y traducido si no está en español', 'Coordinar con el escribano el texto del poder'],
            ['Origen de fondos', 'Documentación que justifique el dinero', 'Avisarle desde el principio'],
            ['Pago', 'Por medios bancarios, según indique el escribano', 'Explicar plazos de transferencia'],
            ['Impuestos', 'Su parte del ITP y gastos de escribano', 'Darle el costo total estimado'],
          ],
          note: 'Información general. El escribano define la documentación de cada caso.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Asesoramiento profesional',
          html: 'Información general. Consultá con un escribano y con un contador antes de firmar, sobre todo en temas de residencia fiscal e impuestos en el país del comprador.',
        },
      ],
    },
    {
      id: 'poder',
      h2: '¿Cómo compra un extranjero sin viajar?',
      blocks: [
        {
          t: 'p',
          html: 'Con un poder a favor de una persona de confianza en Uruguay. El escribano uruguayo redacta el texto, el cliente lo firma ante un profesional habilitado de su país, lo apostilla y lo envía para que se protocolice en Uruguay.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Texto del poder', html: 'Lo prepara el escribano uruguayo para que sirva a la operación.' },
            { title: 'Firma en el exterior', html: 'Ante un profesional habilitado en el país del cliente o en un consulado uruguayo.' },
            { title: 'Apostilla', html: 'En el país donde se firmó. Si ese país no es parte del convenio de la apostilla, se legaliza por la vía consular.' },
            { title: 'Traducción', html: 'Si el poder no está en español, hay que traducirlo.' },
            { title: 'Envío', html: 'El original llega a Uruguay y el escribano lo incorpora a la operación.' },
          ],
        },
      ],
    },
    {
      id: 'origen-fondos',
      h2: '¿Por qué pedir el origen de los fondos?',
      blocks: [
        {
          t: 'p',
          html: 'Porque los escribanos y las inmobiliarias están obligados por las normas contra el lavado de activos a conocer al cliente y el origen del dinero. Avisalo desde la primera conversación para que no sea una sorpresa al final.',
        },
        {
          t: 'p',
          html: 'Con la Ley 20.380, cumplir esas normas también es un requisito para inscribirte como operador. Lo explicamos en <a href="/uruguay/como-ser-agente-inmobiliario-uruguay/">cómo ser agente inmobiliario en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'costos',
      h2: '¿Qué costos paga el comprador extranjero?',
      blocks: [
        {
          t: 'p',
          html: 'Los mismos que un comprador local: su parte del ITP, honorarios del escribano y la comisión de la inmobiliaria. Dale un estimado total desde el principio.',
        },
        {
          t: 'example',
          title: 'Ejemplo ilustrativo: apartamento de U$S 250.000 en Punta del Este',
          html: 'Números redondos e hipotéticos. El ITP se calcula sobre el valor real catastral, que aquí suponemos de U$S 100.000. Los honorarios de escribano dependen de cada profesional y no se incluyen.',
          rows: [
            ['Concepto', 'Monto'],
            ['Precio', 'U$S 250.000'],
            ['Comisión de la inmobiliaria (250.000 × 3%)', 'U$S 7.500'],
            ['IVA de la comisión (7.500 × 22%)', 'U$S 1.650'],
            ['ITP del comprador (100.000 × 2%)', 'U$S 2.000'],
            ['Subtotal sin escribano (250.000 + 7.500 + 1.650 + 2.000)', 'U$S 261.150'],
          ],
        },
        {
          t: 'p',
          html: 'Si piensa alquilarla, explicale que las rentas de no residentes tienen su propio impuesto y que lo consulte con un contador. Para la gestión, mirá <a href="/uruguay/alquileres-de-temporada-punta-del-este/">alquileres de temporada en Punta del Este</a>.',
        },
      ],
    },
    {
      id: 'acompanar',
      h2: '¿Cómo acompañar a un cliente que está en otro país?',
      blocks: [
        {
          t: 'p',
          html: 'Siendo sus ojos en Uruguay. El cliente a distancia necesita ver, entender y confiar.',
        },
        {
          t: 'ul',
          items: [
            'Videollamada en cada visita, recorriendo la propiedad y el entorno.',
            'Comparables del barrio en un informe simple.',
            'Un calendario con cada paso: reserva, estudio de títulos, poder y escritura.',
            'Contactos de un escribano y un contador, si no tiene.',
            'Respuestas rápidas por WhatsApp, teniendo en cuenta su huso horario.',
          ],
        },
        {
          t: 'p',
          html: 'Los pasos hasta la escritura están en <a href="/uruguay/como-cerrar-una-venta-inmobiliaria/">cómo cerrar una venta inmobiliaria en Uruguay</a>.',
        },
      ],
    },
    {
      id: 'mostrar',
      h2: '¿Cómo mostrarle propiedades a distancia?',
      blocks: [
        {
          t: 'p',
          html: 'Mandale links a fichas completas, con fotos, mapa y datos, para que filtre antes de la videollamada. Para empezar, mostrale los apartamentos en venta en Punta del Este publicados en <a href="https://uy.casa-libre.com/venta/departamentos/punta-del-este">Casa-Libre</a>.',
        },
        {
          t: 'casalibre',
          title: 'Tu cartera, visible desde cualquier país',
          html: 'En Casa-Libre tus propiedades se ven en la web y en las apps para iPhone y Android, con búsqueda en el mapa, y el interesado te escribe por WhatsApp. Publicar es gratis.',
          button: 'Publicar gratis',
          href: 'https://uy.casa-libre.com/publicar',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Un extranjero necesita residencia para comprar en Uruguay?',
      a: 'No para comprar una casa o un apartamento. Puede comprar con su pasaporte o documento, en las mismas condiciones que un uruguayo.',
    },
    {
      q: '¿Puede comprar sin viajar?',
      a: 'Sí, con un poder otorgado en su país, apostillado y traducido si no está en español.',
    },
    {
      q: '¿Comprar una propiedad da la residencia?',
      a: 'Comprar no da residencia automáticamente. Existe un régimen de residencia fiscal por inversión inmobiliaria con montos mínimos: que lo consulte con un contador.',
    },
    {
      q: '¿Puede pagar desde el exterior?',
      a: 'Sí, por transferencia bancaria, justificando el origen de los fondos. El escribano indica cómo documentarlo.',
    },
  ],
  internalSources: [
    { label: 'Decreto 175/992: poderes otorgados en el extranjero (IMPO)', url: 'https://www.impo.com.uy/bases/decretos/175-1992/1', date: '2026-11-13', note: 'Protocolisation of foreign powers of attorney.' },
    { label: 'MRREE: trámite de apostilla y legalizaciones', url: 'https://www.gub.uy/ministerio-relaciones-exteriores/comunicacion/publicaciones/tramite-apostilla-legalizaciones', date: '2026-11-13', note: 'Apostille vs chain legalisation.' },
    { label: 'Ley 20.380 (IMPO), art. 9', url: 'https://www.impo.com.uy/bases/leyes-originales/20380-2024', date: '2026-11-13', note: 'AML obligations under Ley 19.574.' },
  ],
  closing: {
    title: 'Clientes de afuera, propiedades a la vista',
    text: 'Publicá gratis en Casa-Libre Uruguay y atendé por WhatsApp.',
    button: 'Crear cuenta gratis',
    href: 'https://uy.casa-libre.com/empresas',
  },
  related: ['como-cerrar-una-venta-inmobiliaria', 'alquileres-de-temporada-punta-del-este', 'comision-inmobiliaria-uruguay', 'mercado-inmobiliario-uruguay'],
};
