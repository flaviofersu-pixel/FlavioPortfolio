// Dutch. Same keys as en.js; anything missing falls back to English.
// Lines marked "// review" are translations Flavio hasn't proofread yet. Delete the marker once checked.
// [TODO: ...] placeholders stay in English on purpose.
export default {
  meta: {
    title: "Flavio Fernandez Suarez, full stack developer in opleiding", // review
    description:
      "Flavio Fernandez Suarez bouwt checkouts voor webshops en soldeert knoppen op ESP32-boards. Zoekt een full stack stage vanaf februari 2027.", // review
    ogDescription: "Ik bouw checkouts voor webshops en soldeer knoppen op ESP32-boards.", // review
    ogImageAlt: "De naam Flavio Fernandez Suarez naast het now-playing-scherm van de Spotify-afstandsbediening", // review
  },
  nav: {
    skip: "Naar de inhoud", // review
    label: "Hoofdmenu", // review
    language: "Taal", // review
    projects: "Projecten", // review
    about: "Over mij", // review
    contact: "Contact", // review
  },
  hero: {
    sentence: "Ik bouw checkouts voor webshops en soldeer knoppen op ESP32-boards.", // review
    intro: "Ik zit in het tweede jaar van een opleiding software engineering en woon in Almere.", // review
    internship: "Op zoek naar een full stack stage vanaf februari 2027", // review
    workbenchLabel: "Op mijn werkbank:", // review
    workbench: "De definitieve versie van mijn Spotify-afstandsbediening.", // review
    demoLink: "Probeer de LucaStars-demo", // review
    screenCaption: "Het now-playing-scherm van mijn Spotify-afstandsbediening, in de browser. De drie knoppen werken.", // review
    screenLink: "Zo heb ik de afstandsbediening gebouwd", // review
  },
  remote: {
    previous: "Vorig nummer", // review
    next: "Volgend nummer", // review
    play: "Afspelen", // review
    pause: "Pauzeren", // review
    announcePlaying: "Speelt nu {title} van {artist}", // review
    announcePaused: "Gepauzeerd", // review
    announceTrack: "{title} van {artist}", // review
    listenOnSpotify: "Luister op Spotify", // review
  },
  demo: {
    label: "Interactieve demo van LucaStars", // review
    reset: "Opnieuw", // review
    fullScreen: "Volledig scherm", // review
    exitFullScreen: "Volledig scherm sluiten", // review
    escHint: "Esc sluit het ook", // review
    tryDemo: "Probeer de demo", // review
    previewAlt: "De homepagina van de LucaStars-winkel in de demo", // review
  },
  media: {
    play: "Video afspelen", // review
    pause: "Video pauzeren", // review
  },
  projects: {
    heading: "Projecten", // review
    builtWith: "Gemaakt met:", // review
    links: {
      live: "Live website", // review
      github: "GitHub",
      private: "Code is privé (klantproject)", // review
      school: "Schoolproject, dus de code kan niet gedeeld worden", // review
    },
    lucastars: {
      kind: "Schoolproject", // review
      story: [
        "LucaStars is een digitale gamewinkel, gemaakt als schoolproject. Je kunt door de catalogus bladeren, aanbiedingen pakken, een winkelwagen vullen, afrekenen en je bestellingen terugzien op je profiel. We waren met z’n vijven. Ik heb de winkelwagen, de games-API, het profielsysteem en de database gebouwd, en geholpen met het afrekenen.", // review
        "De winkelwagen telt btw op, trekt kortingen af en accepteert promocodes, en bij het afrekenen en later in de bestelgeschiedenis moet hetzelfde totaal uitkomen.", // review
      ],
      tryIt:
        "Dit is een kleinere, nagebouwde versie van de winkel met voorbeelddata, die gewoon hier op de pagina draait. Leg een game in je winkelwagen, open het tabblad Discount code, vul LUCA10 in en plaats een bestelling. Die verschijnt onder My profile. Er wordt niets afgeschreven.", // review
    },
    "spotify-remote": {
      kind: "Eigen hardwareproject, sinds 2026", // review
      story: [
        "Een kleine afstandsbediening voor Spotify. Hij draait op een ESP32-C3 met een Sharp memory display en drie knoppen: afspelen/pauzeren, volgende en vorige. Het scherm laat zien wat er speelt. Ik wilde altijd al een iPod, omdat ik het fijn vind om een apart scherm voor mijn muziek te hebben. Ik heb al een kleine e-reader en wilde iets net zo kleins voor muziek, zodat ik in de bus of trein van nummer kan wisselen zonder mijn telefoon te pakken.", // review
        "Het eerste prototype heb ik in C++ geschreven met het Arduino-framework en getest op een breadboard. Inmiddels zit het scherm vastgesoldeerd op de microcontroller, en heeft hij een eigen behuizing.", // review
        "Ik wilde dat hij draagbaar was, met een batterij die langer meegaat dan die van een telefoon. Daarom koos ik een Sharp memory display: dat verbruikt heel weinig stroom, dus ik heb geen grotere batterij nodig en de hele afstandsbediening blijft klein.", // review
      ],
      buildLog: {
        label: "Bouwlog", // review
        stepsLabel: "Bouwstappen", // review
        step: "Stap", // review
        announce: "Stap {n} van {total}: {title}", // review
        previous: "Vorige stap", // review
        next: "Volgende stap", // review
        partsHint: "Tik op een nummer op de foto, of op een onderdeel hieronder.", // review
        steps: {
          design: {
            title: "Ontwerp", // review
            date: "[TODO: month] 2026",
            text: "[TODO: why I made the 3D model first]",
            alt: "Interactief 3D-model van de Spotify mini remote met het scherm en de drie knoppen", // review
          },
          breadboard: {
            title: "Breadboard", // review
            date: "[TODO: month] 2026",
            text: "Ik heb de simulator overgeslagen en ben meteen begonnen op een breadboard met Arduino, het echte scherm en de knoppen. [TODO: one thing that went wrong and how I fixed it]", // review
            alt: "Video van het prototype op het breadboard. Een vinger drukt op de knoppen en het Sharp-scherm toont het nummer dat speelt.", // review
          },
          soldering: {
            title: "Solderen", // review
            date: "[TODO: month] 2026",
            text: "Het scherm is nu vastgesoldeerd op de microcontroller. [TODO: one detail]", // review
            alt: "Het Sharp memory display met gekleurde draden verbonden met de XIAO-microcontroller in de open behuizing, met de USB-C-poort aan de voorkant.", // review
          },
          finished: {
            title: "Klaar", // review
            date: "[TODO: month] 2026",
            text: "Zo ver is hij nu: de afstandsbediening in zijn eigen behuizing, klein genoeg om mee te nemen in de bus of de trein.", // review
            alt: "De Spotify-afstandsbediening in een zwarte behuizing met structuur, met drie knoppen boven het scherm. Het scherm toont This Winter van innlet, met een pixelart-kat als hoes.", // review
          },
        },
        parts: {
          buttons: {
            name: "Drie knoppen", // review
            text: "Vorige, afspelen/pauzeren en volgende.", // review
          },
          display: {
            name: "Sharp memory display", // review
            text: "Het verbruikt heel weinig stroom, dus de batterij hoeft niet groot te zijn.", // review
          },
          usbc: {
            name: "USB-C", // review
            text: "[TODO]",
          },
          case: {
            name: "De behuizing", // review
            text: "[TODO: how I made the case and what is inside]",
          },
        },
      },
    },
    "climate-impact-tool": {
      kind: "Schoolproject voor de gemeente Amsterdam, sinds 2026", // review
      story: [
        "De gemeente Amsterdam heeft een tool voor klimaatimpact, en het is onze taak om die herbruikbaar te maken voor andere organisaties. Hij laat zien hoeveel klimaatimpact de bestanden in OneDrive hebben, en we willen mensen ook bewust maken van hoeveel hun opslag het klimaat beïnvloedt. We zijn een team van vijf, en ik ben een van de twee full stack developers.", // review
        "Ik heb onderzocht hoe we het als Microsoft Teams-app kunnen bouwen. Daarna hebben de andere developer en ik het samen ontworpen en gebouwd. Ik heb ook direct contact met de klant.", // review
        "De tool moest bestanden uit OneDrive verwijderen. Maar bij de gemeente Amsterdam mogen medewerkers vanwege de AVG geen documenten verwijderen. Daarom bedacht ik om de bestanden in plaats daarvan van OneDrive naar SharePoint te verplaatsen. Zo zijn er minder kopieën van elk document, en dat bespaart CO₂.", // review
      ],
    },
    "angels-treasure": {
      kind: "Freelance, sinds 2026", // review
      story: [
        "Angel’s Treasure is een kleine winkel in handgemaakte mode in Amsterdam die verkoopt via Vinted en Depop. Eerst heb ik mid-fi- en hi-fi-ontwerpen gemaakt, daarna een one-page site gebouwd in HTML, CSS en JavaScript met een productfilter en een formulier voor bestellingen op maat.", // review
        "Ik heb Decap CMS ingericht zodat de eigenaar producten en markten kan toevoegen. Ik koos het omdat het makkelijk te gebruiken is zonder veel technische kennis. Netlify Forms regelt het bestelformulier.", // review
      ],
      media: {
        alt: "",
        placeholder: "[TODO: screenshot of the Angel’s Treasure site]",
      },
    },
  },
  about: {
    heading: "Over mij", // review
    photoAlt: "Portret van Flavio", // review
    lead: "Naast mijn studie werk ik met hardware: Arduino- en ESP32-boards, solderen en mijn eigen homelab. Ik spreek Spaans, Engels en Nederlands.", // review
    timeline: [
      {
        when: "Sinds sept. 2026", // review
        title: "Studentmentor bij de HvA", // review
        detail: "Bijbaan", // review
        text: "Ik begeleid eerstejaars bij hun projectwerk. Veel daarvan gaat over Git en GitLab: branches, mergen en de conflicten die daarbij horen. Als hun code stukgaat, help ik ze debuggen door de juiste vragen te stellen. Ik geef ook feedback op hun sprintreviews en verslagen.", // review
      },
      {
        when: "Sinds 2025", // review
        title: "HBO-ICT Software Engineering",
        detail: "Hogeschool van Amsterdam, profiel full stack", // review
      },
    ],
  },
  contact: {
    heading: "Ik zoek een full stack stage vanaf februari 2027.", // review
    text: "Mailen is de makkelijkste manier om me te bereiken.", // review
    copy: "E-mail kopiëren", // review
    copied: "Gekopieerd", // review
    copyFailed: "Kopiëren lukte niet, selecteer het adres zelf", // review
    cv: "Cv (pdf)", // review
  },
  footer: {
    backToTop: "Terug naar boven", // review
  },
};
