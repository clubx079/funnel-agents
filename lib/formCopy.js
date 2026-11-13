import { COUNTRIES } from './countries.js';

// The lead form's words in each country's register: voseo (Paraguay, Uruguay), tú (Bolivia, Venezuela), usted (El Salvador).
const COPY = {
  voseo: {
    heading: 'Recibí más compradores para tus propiedades',
    finalHeading: '¿Querés más consultas para tu cartera? Te ayudamos',
    sub: 'Dejanos tus datos y el equipo de Casa-Libre te escribe por WhatsApp para publicar tu cartera gratis.',
    operation: '¿Qué operás?', city: 'Ciudad', cityPlaceholder: 'Elegí la ciudad', portfolio: 'Propiedades en cartera', role: 'Sos',
    placeholder: 'Elegí una opción',
    name: 'Tu nombre', whatsapp: 'Tu WhatsApp',
    errOperation: 'Elegí qué operás: venta, alquiler o las dos.',
    errCity: 'Elegí la ciudad donde trabajás (o "Otra").',
    errPortfolio: 'Elegí cuántas propiedades manejás.',
    errRole: 'Elegí si sos agente independiente o inmobiliaria.',
    errName: 'Escribí tu nombre (al menos 2 letras).',
    errWhatsapp: (hint) => `Revisá tu WhatsApp: tiene que ser ${hint}.`,
    errEmail: 'Revisá tu email.',
    errSend: 'No pudimos enviar tus datos. Probá de nuevo en un momento.',
    consentLead: 'Al enviar aceptás que Casa-Libre te contacte por WhatsApp o email, según la',
    doneTitle: (n) => `¡Listo, ${n}! Recibimos tus datos.`,
    doneText: (wa) => `El equipo de Casa-Libre te va a escribir por WhatsApp al ${wa} para ayudarte a publicar tu cartera.`,
    meanwhile: 'Mientras tanto, mirá',
    sticky: 'Más compradores para tu cartera',
  },
  'tú': {
    heading: 'Recibe más compradores para tus propiedades',
    finalHeading: '¿Quieres más consultas para tu cartera? Te ayudamos',
    sub: 'Déjanos tus datos y el equipo de Casa-Libre te escribe por WhatsApp para publicar tu cartera gratis.',
    operation: '¿Qué operas?', city: 'Ciudad', cityPlaceholder: 'Elige la ciudad', portfolio: 'Propiedades en cartera', role: 'Eres',
    placeholder: 'Elige una opción',
    name: 'Tu nombre', whatsapp: 'Tu WhatsApp',
    errOperation: 'Elige qué operas: venta, alquiler o las dos.',
    errCity: 'Elige la ciudad donde trabajas (o "Otra").',
    errPortfolio: 'Elige cuántas propiedades manejas.',
    errRole: 'Elige si eres agente independiente o inmobiliaria.',
    errName: 'Escribe tu nombre (al menos 2 letras).',
    errWhatsapp: (hint) => `Revisa tu WhatsApp: tiene que ser ${hint}.`,
    errEmail: 'Revisa tu email.',
    errSend: 'No pudimos enviar tus datos. Prueba de nuevo en un momento.',
    consentLead: 'Al enviar aceptas que Casa-Libre te contacte por WhatsApp o email, según la',
    doneTitle: (n) => `¡Listo, ${n}! Recibimos tus datos.`,
    doneText: (wa) => `El equipo de Casa-Libre te escribirá por WhatsApp al ${wa} para ayudarte a publicar tu cartera.`,
    meanwhile: 'Mientras tanto, mira',
    sticky: 'Más compradores para tu cartera',
  },
  usted: {
    heading: 'Reciba más compradores para sus propiedades',
    finalHeading: '¿Quiere más consultas para su cartera? Le ayudamos',
    sub: 'Déjenos sus datos y el equipo de Casa-Libre le escribe por WhatsApp para publicar su cartera gratis.',
    operation: '¿Qué opera?', city: 'Ciudad', cityPlaceholder: 'Elija la ciudad', portfolio: 'Propiedades en cartera', role: 'Usted es',
    placeholder: 'Elija una opción',
    name: 'Su nombre', whatsapp: 'Su WhatsApp',
    errOperation: 'Elija qué opera: venta, alquiler o las dos.',
    errCity: 'Elija la ciudad donde trabaja (o "Otra").',
    errPortfolio: 'Elija cuántas propiedades maneja.',
    errRole: 'Elija si es agente independiente o inmobiliaria.',
    errName: 'Escriba su nombre (al menos 2 letras).',
    errWhatsapp: (hint) => `Revise su WhatsApp: tiene que ser ${hint}.`,
    errEmail: 'Revise su email.',
    errSend: 'No pudimos enviar sus datos. Pruebe de nuevo en un momento.',
    consentLead: 'Al enviar acepta que Casa-Libre lo contacte por WhatsApp o email, según la',
    doneTitle: (n) => `¡Listo, ${n}! Recibimos sus datos.`,
    doneText: (wa) => `El equipo de Casa-Libre le escribirá por WhatsApp al ${wa} para ayudarle a publicar su cartera.`,
    meanwhile: 'Mientras tanto, vea',
    sticky: 'Más compradores para su cartera',
  },
};

export function formCopy(cc = 'py') {
  const C = COUNTRIES[cc] || COUNTRIES.py;
  return COPY[C.voice] || COPY.voseo;
}

/** The consent line exactly as shown under the button (saved with every lead). */
export const consentText = (cc = 'py') => `${formCopy(cc).consentLead} Política de privacidad.`;
