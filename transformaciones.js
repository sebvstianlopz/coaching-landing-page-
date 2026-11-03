/*
  TRANSFORMACIONES
  ----------------
  Cada objeto es un cliente. Para añadir uno:
    1. Guarda sus fotos en assets/fotos/ (vertical 4:5 para antes y después, por ejemplo 1200 × 1500 px;
       horizontal 16:10 para la foto extra, opcional).
    2. Copia un bloque, cambia los textos y las rutas, y guarda.

  Campos:
    titulo       Nombre y tiempo. Corto: "Carla, 16 semanas".
    descripcion  Dos o tres frases con la historia real: de dónde partió, la meta y qué cambió.
    antes        Ruta a la foto de antes.        (null = recuadro de muestra)
    despues      Ruta a la foto de después.      (null = recuadro de muestra)
    extra        Ruta a una foto horizontal 16:10 opcional, debajo de la historia. Puede ser null.
    alt          Descripción corta de las fotos para lectores de pantalla.

  Usa solo fotos y datos reales, con permiso del cliente.
  Los tres bloques de abajo son MUESTRAS: reemplázalos antes de publicar.
*/
window.TRANSFORMACIONES = [
  {
    titulo: 'Nombre, 12 semanas',
    descripcion: 'Aquí va la historia real del cliente: de dónde partió, qué meta tenía y qué cambió en fuerza, en fondo y en el espejo.',
    antes: null,
    despues: null,
    extra: null,
    alt: 'Cliente antes y después de 12 semanas de coaching'
  },
  {
    titulo: 'Nombre, 16 semanas',
    descripcion: 'Una segunda historia. Funciona mejor con un dato concreto que el cliente quiera compartir: un peso levantado, un tiempo en 5K, una talla.',
    antes: null,
    despues: null,
    extra: null,
    alt: 'Cliente antes y después de 16 semanas de coaching'
  },
  {
    titulo: 'Nombre, 24 semanas',
    descripcion: 'Una tercera historia. Con tres o cuatro clientes la sección se lee completa; con más, la página sigue funcionando igual.',
    antes: null,
    despues: null,
    extra: null,
    alt: 'Cliente antes y después de 24 semanas de coaching'
  }
];
