/*
  TRANSFORMACIONES
  ----------------
  Cada objeto es un cliente. Para añadir uno:
    1. Guarda sus fotos en assets/fotos/ (vertical 4:5 para antes y después, mismo encuadre y pose;
       horizontal 16:10 para la foto extra, opcional).
    2. Copia un bloque, cambia los textos y las rutas, y guarda.

  Campos:
    titulo       Nombre y tiempo, opcional. Corto: "Carla, 16 semanas". Vacío = sin título.
    descripcion  Dos o tres frases con la historia real, opcional. Vacío = sin texto.
    antes        Ruta a la foto de antes.        (null = recuadro de muestra)
    despues      Ruta a la foto de después.      (null = recuadro de muestra)
    extra        Ruta a una foto horizontal 16:10 opcional, debajo de la historia. Puede ser null.
    alt          Descripción corta de las fotos para lectores de pantalla.

  Usa solo fotos y datos reales, con permiso del cliente.
  Las fotos de abajo son de clientes reales de Jan. Faltan sus nombres, el tiempo y el resultado:
  cuando los tengas, ponlos en "titulo" y "descripcion".
*/
window.TRANSFORMACIONES = [
  {
    titulo: '',
    descripcion: '',
    antes: 'assets/fotos/cliente-1-antes.webp',
    despues: 'assets/fotos/cliente-1-despues.webp',
    extra: null,
    alt: 'Cliente de Jan de espalda, antes y después del coaching'
  },
  {
    titulo: '',
    descripcion: '',
    antes: 'assets/fotos/cliente-2-antes.webp',
    despues: 'assets/fotos/cliente-2-despues.webp',
    extra: null,
    alt: 'Clienta de Jan de frente, antes y después del coaching'
  },
  {
    titulo: '',
    descripcion: '',
    antes: 'assets/fotos/cliente-3-antes.webp',
    despues: 'assets/fotos/cliente-3-despues.webp',
    extra: null,
    alt: 'Cliente de Jan de perfil, antes y después del coaching'
  },
  {
    titulo: '',
    descripcion: '',
    antes: 'assets/fotos/cliente-4-antes.webp',
    despues: 'assets/fotos/cliente-4-despues.webp',
    extra: null,
    alt: 'Cliente de Jan de frente, antes y después del coaching'
  },
  {
    titulo: '',
    descripcion: '',
    antes: 'assets/fotos/cliente-5-antes.webp',
    despues: 'assets/fotos/cliente-5-despues.webp',
    extra: null,
    alt: 'Cliente de Jan de perfil, antes y después del coaching'
  }
];
