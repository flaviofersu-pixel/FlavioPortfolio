// Spanish (neutral, tú). Same keys as en.js; anything missing falls back to English.
// Lines marked "// review" are translations Flavio hasn't proofread yet. Delete the marker once checked.
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
    screenCaption: "La pantalla de reproducción de mi control remoto de Spotify, en el navegador. Los botones funcionan: pulsa reproducir para escuchar la canción.", // review
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
      name: "LucaStars",
      tech: "TypeScript (front end y back end), MySQL, HTML, CSS, Vite, Vitest, MVC, programación orientada a objetos", // review
      kind: "Proyecto académico", // review
      story: [
        "LucaStars es una tienda digital de videojuegos, hecha como proyecto académico. Puedes explorar el catálogo, aprovechar ofertas, llenar un carrito, pagar y ver tus pedidos anteriores en tu perfil. Éramos un equipo de cinco. Yo hice el carrito de compra, la API de juegos, el sistema de perfiles y la base de datos, y ayudé con el proceso de pago.", // review
        "El carrito suma el IVA, aplica descuentos y acepta códigos promocionales, y el total tiene que coincidir al pagar y después en el historial de pedidos.", // review
      ],
      tryIt:
        "Esta es una versión más pequeña de la tienda con datos de ejemplo, que funciona aquí mismo en la página. Añade un juego al carrito, abre la pestaña Discount code, escribe LUCA10 y haz un pedido. Aparece en My profile. No se cobra nada.", // review
    },
    "spotify-remote": {
      name: "Mini control remoto para Spotify", // review
      tech: "C++, Arduino",
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
            date: "2026",
            text: "Un modelo 3D del control remoto, con la pantalla y los tres botones.", // review
            alt: "Modelo 3D interactivo del mini control remoto para Spotify, con su pantalla y sus tres botones", // review
          },
          breadboard: {
            title: "Protoboard", // review
            date: "2026",
            text: "Me salté el simulador y fui directo a una protoboard con Arduino, la pantalla real y los botones.", // review
            alt: "Video del prototipo en la protoboard. Un dedo pulsa los botones y la pantalla Sharp muestra la canción que está sonando.", // review
          },
          soldering: {
            title: "Soldadura", // review
            date: "2026",
            text: "La pantalla ya está soldada al microcontrolador.", // review
            alt: "La pantalla Sharp memory display conectada con cables de colores al microcontrolador XIAO dentro de la carcasa abierta, con el puerto USB-C delante.", // review
          },
          finished: {
            title: "Terminado", // review
            date: "2026",
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
        },
      },
    },
    "climate-impact-tool": {
      name: "Herramienta de impacto climático", // review
      tech: "React, TypeScript, Vite, Microsoft Entra ID (MSAL), Microsoft Graph, Fluent UI, Recharts, Vitest",
      kind: "Proyecto académico para el Ayuntamiento de Ámsterdam, desde 2026", // review
      story: [
        "La HvA tiene un panel en Teams que muestra cuánto CO₂ cuestan los archivos de tu OneDrive. El Ayuntamiento de Ámsterdam quiere lo mismo para sus 20.000 empleados, pero no puede usarlo: funciona con la base de datos propia de la HvA, el cálculo está desactualizado y no pudimos conseguir el código. Así que nuestro equipo de cinco está construyendo una versión nueva que también puedan usar otras organizaciones. Soy uno de los dos desarrolladores full stack.", // review
        "Junto con la otra persona de desarrollo definí el enfoque técnico: una aplicación web en React que escanea tu OneDrive a través de Microsoft Graph y calcula el consumo de energía y el CO₂ en el navegador. A diferencia del panel antiguo, escanea todas las carpetas, no solo las de primer nivel. No hay backend ni base de datos, y la herramienta solo lee datos de los archivos como el nombre, el tamaño y la fecha, nunca su contenido. Según la persona encargada de la privacidad en el ayuntamiento, así el riesgo para la privacidad es pequeño. Más adelante funcionará como una pestaña en Microsoft Teams.", // review
        "El panel antiguo te decía que borraras los archivos que no habías modificado en seis meses. En el ayuntamiento eso no se puede hacer así como así: según la Archiefwet (la ley neerlandesa de archivos), muchos documentos se tienen que conservar durante un tiempo determinado. Por eso nuestra herramienta nunca dice que un archivo se puede borrar. Muestra tus archivos más grandes y antiguos, los abre en OneDrive y remite a las normas de conservación.", // review
      ],
    },
    "angels-treasure": {
      name: "Sitio web de Angel’s Treasure", // review
      tech: "HTML, CSS, JavaScript, Netlify Forms, Decap CMS",
      kind: "Freelance, desde 2026", // review
      story: [
        "Angel’s Treasure es una pequeña tienda de moda hecha a mano en Ámsterdam que vende a través de Vinted y Depop. Primero hice diseños mid-fi y hi-fi, y después construí un sitio de una sola página en HTML, CSS y JavaScript con un filtro de productos y un formulario para pedidos personalizados.", // review
        "Configuré Decap CMS para que quien lleva la tienda pueda añadir productos y mercadillos. Lo elegí porque es fácil de usar sin muchos conocimientos técnicos. Netlify Forms gestiona el formulario de pedidos.", // review
      ],
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
