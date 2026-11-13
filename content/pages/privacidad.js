export default {
  slug: 'privacidad',
  title: 'Política de privacidad',
  h1: 'Política de privacidad',
  description: 'Qué datos recoge Cómo Vender Más Propiedades cuando completás el formulario, para qué los usa Casa-Libre, cuánto tiempo los guarda y cómo pedir que los borremos.',
  blurb: 'Qué datos recoge el sitio y para qué.',
  published: '2026-11-12',
  updated: '2026-11-13',
  review: 'pending',
  reviewNote: 'A Paraguayan lawyer must review this policy and the form consent text against Ley 7593/2025 before launch (the lead form was added on 2026-11-13). Confirm the retention period and the legal entity, and make the measurement section match the tools actually installed.',
  answer: 'Leer las guías no requiere dejar ningún dato. Si completás el formulario, Casa-Libre usa tu nombre, tu inmobiliaria, tu WhatsApp y tu email solo para contactarte sobre la publicación de tus propiedades. No vendemos ni compartimos tus datos.',
  sections: [
    {
      id: 'responsable',
      h2: 'Quién es responsable',
      blocks: [
        { t: 'p', html: 'Para cualquier consulta sobre privacidad, escribinos a <a href="mailto:hola@casa-libre.com.py">hola@casa-libre.com.py</a>.' },
      ],
    },
    {
      id: 'datos-del-formulario',
      h2: 'Qué datos recoge el formulario',
      blocks: [
        { t: 'p', html: 'Si completás el formulario "Recibí más compradores para tus propiedades", guardamos lo siguiente.' },
        { t: 'ul', items: [
          'Si operás venta, alquiler o las dos, la ciudad donde trabajás, cuántas propiedades manejás y si sos agente independiente o inmobiliaria.',
          'Tu nombre, tu número de WhatsApp y, si los escribiste, el nombre de tu inmobiliaria y tu email.',
          'La página desde la que lo enviaste, la fecha y la hora, tu dirección IP y el tipo de navegador, para evitar envíos automáticos.',
          'El aviso que se muestra junto al botón Enviar ("Al enviar aceptás que Casa-Libre te contacte por WhatsApp o email"), y la fecha y la hora del envío. Enviar el formulario es tu consentimiento, y esto es su constancia.',
        ] },
        { t: 'p', html: '<strong>Para qué los usamos:</strong> el equipo de Casa-Libre te contacta por WhatsApp o email para ayudarte a publicar tus propiedades. No los usamos para otra cosa sin tu permiso.' },
        { t: 'p', html: '<strong>Cuánto tiempo:</strong> guardamos los datos del formulario mientras dure la consulta y los borramos cuando nos lo pedís.' },
      ],
    },
    {
      id: 'datos',
      h2: 'Qué datos recogemos',
      blocks: [
        { t: 'ul', items: [
          '<strong>Datos de navegación.</strong> Como cualquier sitio web, nuestro servidor registra datos técnicos de cada visita: fecha y hora, página pedida, tipo de navegador y dirección IP. Los usamos para mantener el sitio funcionando y seguro.',
          '<strong>Medición de visitas.</strong> Podemos usar herramientas de medición para saber cuántas personas leen cada guía, cuántas usan el formulario y cuántas hacen clic en los enlaces a Casa-Libre. Son datos agregados: no incluyen tu nombre ni tu teléfono.',
          '<strong>Correos que nos mandás.</strong> Si nos escribís, usamos tu dirección y tu mensaje solo para responderte.',
        ] },
      ],
    },
    {
      id: 'no-hacemos',
      h2: 'Qué no hacemos',
      blocks: [
        { t: 'ul', items: [
          'No vendemos ni cedemos datos personales.',
          'No te pedimos que te registres para leer.',
          'No mostramos publicidad de terceros.',
        ] },
      ],
    },
    {
      id: 'enlaces',
      h2: 'Enlaces a Casa-Libre',
      blocks: [
        { t: 'p', html: 'Las guías enlazan a Casa-Libre. Si creás una cuenta o publicás una propiedad ahí, se aplica la política de privacidad de Casa-Libre.' },
      ],
    },
    {
      id: 'derechos',
      h2: 'Tus derechos',
      blocks: [
        { t: 'p', html: 'Podés pedirnos que te digamos qué datos tuyos tenemos, que los corrijamos o que los borremos, y podés retirar tu consentimiento. Escribinos a <a href="mailto:hola@casa-libre.com.py">hola@casa-libre.com.py</a> contándonos con qué número completaste el formulario, y te respondemos.' },
      ],
    },
  ],
};
