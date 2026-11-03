/*
  TRANSFORMACIONES
  ----------------
  Cada objeto es una foto de antes y después, tal como Jan la publica (un collage con sus
  propias etiquetas de ANTES / DESPUÉS). Para añadir una:
    1. Guarda la foto en assets/fotos/ en dos tamaños: nombre.webp (grande) y nombre-640.webp (teléfono).
       Si solo tienes uno, usa el mismo archivo en los dos campos.
    2. Copia un bloque, cambia las rutas y el texto alternativo, y guarda.

  Campos:
    foto         Ruta a la foto grande.
    foto640      Ruta a la versión de 640 px de ancho (para teléfonos).
    alt          Qué se ve en la foto, para lectores de pantalla.
    titulo       Opcional: nombre y tiempo, "Carla, 16 semanas". Vacío = sin texto.
    descripcion  Opcional: una o dos frases con el resultado real. Vacío = sin texto.

  Usa solo fotos y datos reales, con permiso del cliente.
*/
window.TRANSFORMACIONES = [
  {
    foto: 'assets/fotos/transformacion-1.webp',
    foto640: 'assets/fotos/transformacion-1-640.webp',
    alt: 'Antes y después de un cliente de Jan, de perfil y de espalda',
    titulo: '',
    descripcion: ''
  },
  {
    foto: 'assets/fotos/transformacion-2.webp',
    foto640: 'assets/fotos/transformacion-2-640.webp',
    alt: 'Antes y después de una clienta de Jan, de frente y corriendo',
    titulo: '',
    descripcion: ''
  },
  {
    foto: 'assets/fotos/transformacion-3.webp',
    foto640: 'assets/fotos/transformacion-3-640.webp',
    alt: 'Antes y después de un cliente de Jan, de perfil y de espalda',
    titulo: '',
    descripcion: ''
  },
  {
    foto: 'assets/fotos/transformacion-4.webp',
    foto640: 'assets/fotos/transformacion-4-640.webp',
    alt: 'Antes y después de clientes de Jan, de perfil y de frente',
    titulo: '',
    descripcion: ''
  }
];
