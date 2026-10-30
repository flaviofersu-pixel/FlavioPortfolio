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
    workbench: "[TODO: what’s on your workbench right now?]",
    demoLink: "Prueba la demo de LucaStars", // review
    screenCaption: "La pantalla de reproducción de mi control remoto de Spotify, en el navegador. Los tres botones funcionan.", // review
    screenLink: "Cómo construí el control remoto", // review
  },
  remote: {
    previous: "Canción anterior", // review
    next: "Canción siguiente", // review
    play: "Reproducir", // review
    pause: "Pausar", // review
    playing: "Reproduciendo", // review
    paused: "En pausa", // review
    status: "{state}: {title} de {artist}", // review
  },
  demo: {
    label: "Demo interactiva de LucaStars", // review
    reset: "Reiniciar", // review
    fullScreen: "Pantalla completa", // review
    exitFullScreen: "Salir de pantalla completa", // review
    escHint: "También se cierra con Esc", // review
  },
  models: {
    choose: "Elige una vista 3D", // review
    remote: {
      label: "El control remoto", // review
      alt: "Modelo 3D interactivo del Spotify mini remote con su pantalla y sus tres botones", // review
    },
    iphone: {
      label: "En un iPhone 16 Pro", // review
      alt: "Modelo 3D interactivo del Spotify mini remote montado en la parte trasera de un iPhone 16 Pro", // review
    },
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
    },
    lucastars: {
      kind: "Proyecto académico", // review
      story: [
        "LucaStars es una tienda digital de videojuegos, hecha como proyecto académico. Puedes explorar el catálogo, aprovechar ofertas, llenar un carrito, pagar y ver tus pedidos anteriores en tu perfil. [TODO: solo or team? If team, how many people and which parts did you build yourself?]", // review
        "El carrito suma el IVA, aplica descuentos y acepta códigos promocionales, y el total tiene que coincidir al pagar y después en el historial de pedidos. [TODO: one constraint you worked within, for example a required stack, a deadline or the brief.]", // review
        "[TODO: one decision you made and why, for example where the price calculation lives.]",
        "[TODO: the result, for example the grade, feedback you got or what you would change now.]",
      ],
      tryIt:
        "Esta es una versión más pequeña de la tienda con datos de ejemplo, que funciona aquí mismo en la página. Añade un juego al carrito, abre la pestaña Discount code, escribe LUCA10 y haz un pedido. Aparece en My profile. No se cobra nada.", // review
    },
    "spotify-remote": {
      kind: "Proyecto personal de hardware, desde 2026", // review
      story: [
        "Un pequeño control remoto para Spotify. Funciona con un ESP32-C3, una pantalla Sharp memory display y tres botones: reproducir/pausar, siguiente y anterior. La pantalla muestra lo que está sonando. [TODO: why did you want to build it?]", // review
        "Escribí el primer prototipo en C++ con el framework de Arduino y PlatformIO, y lo probé en el simulador Wokwi. [TODO: has it run on real hardware yet?]", // review
        "[TODO: one constraint, for example the display size or power use.] [TODO: one decision you made and why, for example why a Sharp memory display.]",
      ],
      media: {
        alt: "",
        placeholder: "[TODO: photo or short muted looping video of the real remote]",
      },
    },
    "climate-impact-tool": {
      kind: "Proyecto académico para el Ayuntamiento de Ámsterdam, desde 2026", // review
      story: [
        "El Ayuntamiento de Ámsterdam tiene una herramienta de impacto climático, y nuestro trabajo es hacerla reutilizable para otras organizaciones. [TODO: one sentence on what the tool does.] Somos un equipo de cinco y soy uno de los dos desarrolladores full stack.", // review
        "Investigué cómo construirla como app de Microsoft Teams. Después, junto con la otra persona del equipo de desarrollo, la diseñamos y construimos. También trabajo directamente con el cliente.", // review
        "[TODO: one constraint, for example what a Teams app can and can’t do.] [TODO: one decision from your research and why.] [TODO: where the project stands now.]",
      ],
    },
    "angels-treasure": {
      kind: "Freelance, desde 2026", // review
      story: [
        "Angel’s Treasure es una pequeña tienda de moda hecha a mano en Ámsterdam que vende a través de Vinted y Depop. Primero hice diseños mid-fi y hi-fi, y después construí un sitio de una sola página en HTML, CSS y JavaScript con un filtro de productos y un formulario para pedidos personalizados.", // review
        "Configuré Decap CMS para que quien lleva la tienda pueda añadir productos y mercadillos, y Netlify Forms para gestionar el formulario de pedidos.", // review
        "[TODO: one constraint, for example budget or hosting.] [TODO: why Decap CMS over other options?]",
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
    lead: "Fuera de clase trabajo con hardware: placas Arduino y ESP32, soldadura y mi propio home lab. [TODO: what runs on your home lab?] Hablo español, inglés y neerlandés.", // review
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
    text: "La forma más fácil de contactarme es por email. [TODO: where you can work, for example the Amsterdam area, hybrid or remote.]", // review
    copy: "Copiar email", // review
    copied: "Copiado", // review
    copyFailed: "No se pudo copiar, selecciona la dirección", // review
    cv: "CV (PDF)", // review
  },
  footer: {
    backToTop: "Volver arriba", // review
  },
};
