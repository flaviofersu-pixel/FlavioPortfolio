// Spanish (neutral, tú). Same keys as en.js; anything missing falls back to English.
// Lines marked "// review" are translations Flavio hasn't proofread yet. Delete the marker once checked.
// [TODO: ...] placeholders stay in English on purpose.
export default {
  meta: {
    title: "Flavio Fernandez Suarez, estudiante full stack", // review
    description:
      "Flavio Fernandez Suarez programa checkouts para tiendas online y suelda botones en placas ESP32. Busca prácticas full stack a partir de febrero de 2027.", // review
    ogDescription: "Programo checkouts para tiendas online y sueldo botones en placas ESP32.", // review
    ogImageAlt: "El nombre Flavio Fernandez Suarez junto a la pantalla de reproducción del control remoto de Spotify", // review
  },
  nav: {
    skip: "Saltar al contenido", // review
    label: "Principal", // review
    language: "Idioma", // review
    projects: "Proyectos", // review
    about: "Sobre mí", // review
    contact: "Contacto", // review
  },
  hero: {
    sentence: "Programo checkouts para tiendas online y sueldo botones en placas ESP32.", // review
    intro: "Estoy en segundo año de la carrera de Ingeniería de Software y vivo en Almere.", // review
    internship: "Busco prácticas full stack a partir de febrero de 2027", // review
    workbenchLabel: "En mi mesa de trabajo:", // review
    workbench: "La versión final de mi control remoto de Spotify.", // review
    demoLink: "Prueba la demo de LucaStars", // review
    screenCaption: "La pantalla de reproducción de mi control remoto de Spotify, en el navegador. Los tres botones funcionan.", // review
    screenLink: "Cómo construí el control remoto", // review
  },
  remote: {
    previous: "Canción anterior", // review
    next: "Canción siguiente", // review
    play: "Reproducir", // review
    pause: "Pausar", // review
    announcePlaying: "Reproduciendo {title} de {artist}", // review
    announcePaused: "En pausa", // review
    announceTrack: "{title} de {artist}", // review
    listenOnSpotify: "Escuchar en Spotify", // review
  },
  demo: {
    label: "Demo interactiva de LucaStars", // review
    reset: "Reiniciar", // review
    fullScreen: "Pantalla completa", // review
    exitFullScreen: "Salir de pantalla completa", // review
    escHint: "También se cierra con Esc", // review
    tryDemo: "Prueba la demo", // review
    previewAlt: "La página de inicio de la tienda LucaStars en la demo", // review
  },
  media: {
    play: "Reproducir video", // review
    pause: "Pausar video", // review
  },
  projects: {
    heading: "Proyectos", // review
    builtWith: "Hecho con:", // review
    links: {
      live: "Sitio web", // review
      github: "GitHub",
      private: "El código es privado (proyecto de cliente)", // review
      school: "Proyecto académico, así que el código no se puede compartir", // review
    },
    lucastars: {
      kind: "Proyecto académico", // review
      story: [
        "LucaStars es una tienda digital de videojuegos, hecha como proyecto académico. Puedes explorar el catálogo, aprovechar ofertas, llenar un carrito, pagar y ver tus pedidos anteriores en tu perfil. Éramos un equipo de cinco. Yo hice el carrito de compra, la API de juegos, el sistema de perfiles y la base de datos, y ayudé con el proceso de pago.", // review
        "El carrito suma el IVA, aplica descuentos y acepta códigos promocionales, y el total tiene que coincidir al pagar y después en el historial de pedidos.", // review
      ],
      tryIt:
        "Esta es una versión más pequeña de la tienda con datos de ejemplo, que funciona aquí mismo en la página. Añade un juego al carrito, abre la pestaña Discount code, escribe LUCA10 y haz un pedido. Aparece en My profile. No se cobra nada.", // review
    },
    "spotify-remote": {
      kind: "Proyecto personal de hardware, desde 2026", // review
      story: [
        "Un pequeño control remoto para Spotify. Funciona con un ESP32-C3, una pantalla Sharp memory display y tres botones: reproducir/pausar, siguiente y anterior. La pantalla muestra lo que está sonando. Siempre quise un iPod, porque me gusta tener una pantalla aparte solo para mi música. Ya tengo un e-reader pequeño y quería algo igual de pequeño para la música, para cambiar de canción en el autobús o en el tren sin sacar el teléfono.", // review
        "Escribí el primer prototipo en C++ con el framework de Arduino y lo probé en una protoboard. Ahora la pantalla está soldada al microcontrolador y tiene su propia carcasa.", // review
        "Quería que fuera portátil, con una batería que durara más que la de un teléfono. Por eso elegí una pantalla Sharp memory display: consume muy poca energía, así que no necesito una batería más grande y todo el control remoto sigue siendo pequeño.", // review
      ],
      buildLog: {
        label: "Diario de montaje", // review
        stepsLabel: "Pasos del montaje", // review
        step: "Paso", // review
        announce: "Paso {n} de {total}: {title}", // review
        previous: "Paso anterior", // review
        next: "Paso siguiente", // review
        partsHint: "Toca un número en la foto o una pieza de abajo.", // review
        steps: {
          design: {
            title: "Diseño", // review
            date: "[TODO: month] 2026",
            text: "[TODO: why I made the 3D model first]",
            alt: "Modelo 3D interactivo del Spotify mini remote con su pantalla y sus tres botones", // review
          },
          breadboard: {
            title: "Protoboard", // review
            date: "[TODO: month] 2026",
            text: "Me salté el simulador y fui directo a una protoboard con Arduino, la pantalla real y los botones. [TODO: one thing that went wrong and how I fixed it]", // review
            alt: "Video del prototipo en la protoboard. Un dedo pulsa los botones y la pantalla Sharp muestra la canción que está sonando.", // review
          },
          soldering: {
            title: "Soldadura", // review
            date: "[TODO: month] 2026",
            text: "La pantalla ya está soldada al microcontrolador. [TODO: one detail]", // review
            alt: "La pantalla Sharp memory display conectada con cables de colores al microcontrolador XIAO dentro de la carcasa abierta, con el puerto USB-C delante.", // review
          },
          finished: {
            title: "Terminado", // review
            date: "[TODO: month] 2026",
            text: "Así está ahora: el control remoto en su propia carcasa, lo bastante pequeño para llevarlo en el autobús o en el tren.", // review
            alt: "El control remoto de Spotify en una carcasa negra con textura, con tres botones encima de la pantalla. La pantalla muestra This Winter de innlet, con un gato en pixel art como portada.", // review
          },
        },
        parts: {
          buttons: {
            name: "Tres botones", // review
            text: "Anterior, reproducir/pausar y siguiente.", // review
          },
          display: {
            name: "Pantalla Sharp memory display", // review
            text: "Consume muy poca energía, así que la batería no tiene que ser grande.", // review
          },
          usbc: {
            name: "USB-C", // review
            text: "[TODO]",
          },
          case: {
            name: "La carcasa", // review
            text: "[TODO: how I made the case and what is inside]",
          },
        },
      },
    },
    "climate-impact-tool": {
      kind: "Proyecto académico para el Ayuntamiento de Ámsterdam, desde 2026", // review
      story: [
        "El Ayuntamiento de Ámsterdam tiene una herramienta de impacto climático, y nuestro trabajo es hacerla reutilizable para otras organizaciones. Muestra cuánto impacto climático tienen los archivos guardados en OneDrive, y también queremos que la gente sea consciente de cuánto afecta su almacenamiento al clima. Somos un equipo de cinco y soy uno de los dos desarrolladores full stack.", // review
        "Investigué cómo construirla como app de Microsoft Teams. Después, junto con la otra persona del equipo de desarrollo, la diseñamos y construimos. También trabajo directamente con el cliente.", // review
        "La herramienta tenía que borrar archivos de OneDrive. Pero en el Ayuntamiento de Ámsterdam el personal no tiene permiso para borrar documentos por las normas del RGPD (AVG). Así que propuse mover los archivos de OneDrive a SharePoint en lugar de borrarlos. Así hay menos copias de cada documento, y eso ahorra CO₂.", // review
      ],
    },
    "angels-treasure": {
      kind: "Freelance, desde 2026", // review
      story: [
        "Angel’s Treasure es una pequeña tienda de moda hecha a mano en Ámsterdam que vende a través de Vinted y Depop. Primero hice diseños mid-fi y hi-fi, y después construí un sitio de una sola página en HTML, CSS y JavaScript con un filtro de productos y un formulario para pedidos personalizados.", // review
        "Configuré Decap CMS para que quien lleva la tienda pueda añadir productos y mercadillos. Lo elegí porque es fácil de usar sin muchos conocimientos técnicos. Netlify Forms gestiona el formulario de pedidos.", // review
      ],
      media: {
        alt: "",
        placeholder: "[TODO: screenshot of the Angel’s Treasure site]",
      },
    },
  },
  about: {
    heading: "Sobre mí", // review
    photoAlt: "Retrato de Flavio", // review
    lead: "Fuera de clase trabajo con hardware: placas Arduino y ESP32, soldadura y mi propio home lab. Hablo español, inglés y neerlandés.", // review
    timeline: [
      {
        when: "Desde sept. 2026", // review
        title: "Mentor de estudiantes en la HvA", // review
        detail: "Trabajo a tiempo parcial", // review
        text: "Acompaño a estudiantes de primer año en su trabajo de proyecto. Gran parte tiene que ver con Git y GitLab: ramas, merges y los conflictos que vienen con ellos. Cuando su código falla, les ayudo a depurarlo haciendo las preguntas adecuadas. También les doy feedback sobre sus sprint reviews e informes.", // review
      },
      {
        when: "Desde 2025", // review
        title: "HBO-ICT Software Engineering",
        detail: "Hogeschool van Amsterdam, perfil full stack", // review
      },
    ],
  },
  contact: {
    heading: "Busco prácticas full stack a partir de febrero de 2027.", // review
    text: "La forma más fácil de contactarme es por email.", // review
    copy: "Copiar email", // review
    copied: "Copiado", // review
    copyFailed: "No se pudo copiar, selecciona la dirección", // review
    cv: "CV (PDF)", // review
  },
  footer: {
    backToTop: "Volver arriba", // review
  },
};
