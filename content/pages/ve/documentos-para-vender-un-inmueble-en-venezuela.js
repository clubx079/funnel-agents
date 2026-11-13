export default {
  slug: 'documentos-para-vender-un-inmueble-en-venezuela',
  group: 'Precio y contratos',
  nav: 'Documentos',
  order: 5,
  title: 'Documentos para vender un inmueble en Venezuela: lista',
  h1: 'Documentos para vender un inmueble en Venezuela',
  description:
    'Lista de documentos para vender un inmueble en Venezuela: documento de propiedad, ficha catastral, solvencias, SENIAT, cédula y RIF, herencias y poderes.',
  navLabel: 'Documentos para vender',
  blurb: 'La lista de documentos que el asesor pide al propietario para vender un inmueble en Venezuela, y qué cambia en cada caso.',
  published: '2026-11-13',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote:
    'A Venezuelan lawyer must confirm the list: documento de propiedad registrado; ficha (cédula) catastral; solvencia municipal de inmuebles urbanos; solvencia de condominio; cédula and RIF of sellers (and spouse); for inheritances, declaración sucesoral and certificado de solvencia de sucesiones from SENIAT; seller SENIAT obligations before the Registro (anticipo de ISLR via Forma 33, or the vivienda principal treatment: verify current rule and rate); utility solvency letters that some Registros request; and the poder requirements for sellers abroad. Requirements vary by Registro and municipality.',
  answer:
    'Para vender un inmueble en Venezuela el propietario necesita, en general, el documento de propiedad registrado, la ficha catastral, la solvencia municipal, la solvencia de condominio si es apartamento, su cédula y su RIF, y cumplir sus obligaciones ante el SENIAT antes de firmar en el Registro. Con herencias o propietarios en el exterior se suman otros documentos. Revisa todo antes de publicar en Casa-Libre.',
  summary: [
    'Base: documento de propiedad registrado, ficha catastral, solvencia municipal, solvencia de condominio, cédula y RIF.',
    'Antes de la firma en el Registro, el vendedor cumple con el SENIAT; pide a un contador que lo revise.',
    'Herencia: declaración sucesoral y solvencia de sucesiones. Propietario afuera: poder válido para vender.',
    'Pide los documentos al captar, no al cerrar: así la venta no se cae al final.',
  ],
  cta: {
    title: 'Documentos listos, inmueble publicado',
    text: 'Publica gratis en Casa-Libre Venezuela los inmuebles con papeles al día y recibe las consultas por WhatsApp.',
    button: 'Crear cuenta de inmobiliaria',
    href: 'https://casa-libre.com.ve/empresas',
  },
  sections: [
    {
      id: 'lista',
      h2: '¿Qué documentos se necesitan para vender un inmueble en Venezuela?',
      blocks: [
        {
          t: 'p',
          html: 'Estos son los documentos que se piden habitualmente. Cada Registro y cada alcaldía puede pedir algo más, así que un abogado debe confirmar la lista para cada inmueble.',
        },
        {
          t: 'table',
          caption: 'Documentos habituales para vender un inmueble en Venezuela',
          head: ['Documento', 'Quién lo emite', 'Para qué sirve'],
          rows: [
            ['Documento de propiedad registrado', 'Registro Inmobiliario', 'Prueba quién es el dueño y describe el inmueble'],
            ['Ficha catastral', 'Alcaldía (catastro)', 'Identifica el inmueble ante el municipio'],
            ['Solvencia municipal', 'Alcaldía', 'Muestra que no hay deuda de impuesto de inmuebles urbanos'],
            ['Solvencia de condominio', 'Junta o administradora del condominio', 'Muestra que no hay cuotas pendientes'],
            ['Cédula y RIF', 'SAIME y SENIAT', 'Identifican a cada vendedor y comprador'],
            ['Cumplimiento ante el SENIAT', 'SENIAT', 'Obligaciones fiscales del vendedor por la venta'],
          ],
          note: 'Información general. Los requisitos varían según el Registro y el municipio.',
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'Importante',
          html: 'Información general. Consulta con un abogado o contador antes de firmar. Confirma los requisitos vigentes en el Registro y la alcaldía del inmueble.',
        },
      ],
    },
    {
      id: 'documento-de-propiedad',
      h2: 'El documento de propiedad: qué revisar',
      blocks: [
        {
          t: 'p',
          html: 'Es la base de todo. Revisa que esté registrado, que esté a nombre de quien vende y que los metros y linderos coincidan con la realidad.',
        },
        {
          t: 'ul',
          items: [
            'Nombre de todos los propietarios, y si el inmueble se compró durante el matrimonio.',
            'Datos de registro: número, tomo, protocolo o los datos del sistema actual.',
            'Hipotecas, prohibiciones de enajenar o medidas: pide a un abogado que lo verifique en el Registro.',
            'Diferencias entre lo construido y lo registrado, por ejemplo una ampliación sin documentar.',
          ],
        },
      ],
    },
    {
      id: 'solvencias',
      h2: '¿Qué son las solvencias y dónde se piden?',
      blocks: [
        {
          t: 'p',
          html: 'Son constancias de que el inmueble no tiene deudas con la alcaldía o con el condominio. La solvencia municipal se tramita en la alcaldía del municipio donde está el inmueble, y la de condominio con la junta o la administradora.',
        },
        {
          t: 'p',
          html: 'Algunos Registros piden además constancias de servicios. Pregunta al abogado qué pide el Registro de tu zona antes de fijar la fecha de firma.',
        },
      ],
    },
    {
      id: 'seniat',
      h2: '¿Qué tiene que hacer el vendedor ante el SENIAT?',
      blocks: [
        {
          t: 'p',
          html: 'Antes de firmar en el Registro, el vendedor debe estar al día con sus obligaciones fiscales por la venta. Según el caso, eso implica pagar un anticipo del impuesto sobre la renta o acreditar que el inmueble era su vivienda principal.',
        },
        {
          t: 'p',
          html: 'Las reglas y porcentajes cambian y dependen de cada caso. Un contador debe calcularlo antes de la opción de compraventa, para que el vendedor sepa cuánto recibirá en realidad.',
        },
      ],
    },
    {
      id: 'casos-especiales',
      h2: 'Herencias, divorcios y propietarios en el exterior',
      blocks: [
        {
          t: 'p',
          html: 'Son los casos donde más ventas se atrasan. Identifícalos en la primera reunión.',
        },
        {
          t: 'table',
          caption: 'Documentos adicionales según el caso',
          head: ['Caso', 'Qué se suma', 'Consejo'],
          rows: [
            ['Inmueble heredado', 'Declaración sucesoral y certificado de solvencia de sucesiones', 'Que firmen todos los herederos o sus apoderados'],
            ['Propietario casado', 'Firma del cónyuge si el bien es de la comunidad conyugal', 'Pregunta el estado civil al captar'],
            ['Propietario divorciado', 'Sentencia y partición de bienes', 'Revisa a quién se adjudicó el inmueble'],
            ['Propietario en el exterior', 'Poder especial para vender', 'Un abogado revisa el poder antes de usarlo'],
          ],
          note: 'Información general, a confirmar con un abogado.',
        },
        {
          t: 'p',
          html: 'El caso del propietario afuera lo explicamos en <a href="/venezuela/vender-inmueble-desde-el-exterior/">vender un inmueble desde el exterior</a>.',
        },
      ],
    },
    {
      id: 'cuando-pedirlos',
      h2: '¿Cuándo pedir los documentos?',
      blocks: [
        {
          t: 'p',
          html: 'En la primera reunión de captación. Con los papeles revisados puedes publicar con confianza y responder sin dudar cuando un comprador pregunte.',
        },
        {
          t: 'p',
          html: 'Si el propietario quiere leer por su cuenta, comparte la guía de documentos para propietarios de <a href="https://casa-libre.com.ve/guias/documentos-para-vender-un-inmueble">Casa-Libre</a>. Cuando todo esté al día, sigue con <a href="/venezuela/como-cerrar-una-venta-inmobiliaria/">cómo cerrar una venta inmobiliaria</a>.',
        },
      ],
    },
  ],
  faq: [
    {
      q: '¿Qué es la ficha catastral?',
      a: 'Es el documento de la alcaldía que identifica el inmueble en el catastro municipal. Se pide para vender y para tramitar la solvencia municipal.',
    },
    {
      q: '¿Se puede vender un inmueble con deuda de condominio?',
      a: 'Es mejor saldarla antes: el comprador y el Registro suelen pedir la solvencia de condominio. Si se descuenta del precio, déjalo por escrito en la opción.',
    },
    {
      q: '¿Cómo se vende un inmueble heredado en Venezuela?',
      a: 'Primero se hace la declaración sucesoral ante el SENIAT y se obtiene la solvencia de sucesiones. Luego firman la venta todos los herederos o sus apoderados.',
    },
    {
      q: '¿El comprador también necesita documentos?',
      a: 'Sí: cédula, RIF y, si compra un apoderado, el poder. El abogado del comprador revisa también el documento de propiedad del vendedor.',
    },
  ],
  internalSources: [
    { label: 'Casa-Libre Venezuela sitemap (paths verified live)', url: 'https://casa-libre.com.ve/sitemap.xml', date: '2026-11-13', note: 'Paths used: /guias/documentos-para-vender-un-inmueble, /empresas.' },
    { label: 'SENIAT', url: 'https://www.seniat.gob.ve/', date: '2026-11-13', note: 'Site responds. ISLR anticipo, vivienda principal and sucesiones requirements to confirm.' },
    { label: 'SAREN (Registros y Notarías)', url: 'http://www.saren.gob.ve/', date: '2026-11-13', note: 'Site responds. Registry requirements to confirm.' },
  ],
  closing: {
    title: 'Publica inmuebles con papeles al día',
    text: 'En Casa-Libre Venezuela publicar es gratis y las consultas llegan por WhatsApp.',
    button: 'Publicar gratis',
    href: 'https://casa-libre.com.ve/publicar',
  },
  related: ['como-cerrar-una-venta-inmobiliaria', 'vender-inmueble-desde-el-exterior', 'como-captar-propiedades'],
};
