export default {
  slug: 'contacto',
  title: 'Contacto',
  h1: 'Contacto',
  description: 'Escribinos para corregir un dato, avisarnos de un error o proponer un tema para las guías de Cómo Vender Más Propiedades.',
  blurb: 'Cómo escribirnos para corregir un dato o proponer un tema.',
  published: '2026-11-12',
  updated: '2026-11-12',
  review: 'none',
  answer: 'Escribinos a hola@casa-libre.com.py. Leemos todos los mensajes.',
  sections: [
    {
      id: 'escribinos',
      h2: 'Por qué temas escribirnos',
      blocks: [
        { t: 'ul', items: [
          '<strong>Un dato está mal o quedó viejo.</strong> Contanos en qué guía y, si podés, pasanos la fuente correcta. Lo corregimos y actualizamos la fecha.',
          '<strong>Querés proponer un tema.</strong> Contanos qué te gustaría leer. Priorizamos las preguntas que más se repiten.',
        ] },
        { t: 'p', html: 'Correo: <a href="mailto:hola@casa-libre.com.py">hola@casa-libre.com.py</a>' },
      ],
    },
    {
      id: 'casa-libre',
      h2: 'Si tu consulta es sobre Casa-Libre',
      blocks: [
        { t: 'p', html: 'Para publicar una propiedad o crear la cuenta de tu inmobiliaria, entrá a <a href="https://casa-libre.com.py/empresas">Casa-Libre para inmobiliarias y agentes</a>.' },
      ],
    },
  ],
};
