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
    workbench: "[TODO: what’s on your workbench right now?]",
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
  },
  models: {
    choose: "Kies een 3D-weergave", // review
    remote: {
      label: "De afstandsbediening", // review
      alt: "Interactief 3D-model van de Spotify mini remote met het scherm en de drie knoppen", // review
    },
    iphone: {
      label: "Op een iPhone 16 Pro", // review
      alt: "Interactief 3D-model van de Spotify mini remote op de achterkant van een iPhone 16 Pro", // review
    },
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
    },
    lucastars: {
      kind: "Schoolproject", // review
      story: [
        "LucaStars is een digitale gamewinkel, gemaakt als schoolproject. Je kunt door de catalogus bladeren, aanbiedingen pakken, een winkelwagen vullen, afrekenen en je bestellingen terugzien op je profiel. [TODO: solo or team? If team, how many people and which parts did you build yourself?]", // review
        "De winkelwagen telt btw op, trekt kortingen af en accepteert promocodes, en bij het afrekenen en later in de bestelgeschiedenis moet hetzelfde totaal uitkomen. [TODO: one constraint you worked within, for example a required stack, a deadline or the brief.]", // review
        "[TODO: one decision you made and why, for example where the price calculation lives.]",
        "[TODO: the result, for example the grade, feedback you got or what you would change now.]",
      ],
      tryIt:
        "Dit is een kleinere, nagebouwde versie van de winkel met voorbeelddata, die gewoon hier op de pagina draait. Leg een game in je winkelwagen, open het tabblad Discount code, vul LUCA10 in en plaats een bestelling. Die verschijnt onder My profile. Er wordt niets afgeschreven.", // review
    },
    "spotify-remote": {
      kind: "Eigen hardwareproject, sinds 2026", // review
      story: [
        "Een kleine afstandsbediening voor Spotify. Hij draait op een ESP32-C3 met een Sharp memory display en drie knoppen: afspelen/pauzeren, volgende en vorige. Het scherm laat zien wat er speelt. [TODO: why did you want to build it?]", // review
        "Het eerste prototype heb ik in C++ geschreven met het Arduino-framework en PlatformIO, en getest in de Wokwi-simulator. [TODO: has it run on real hardware yet?]", // review
        "[TODO: one constraint, for example the display size or power use.] [TODO: one decision you made and why, for example why a Sharp memory display.]",
      ],
      media: {
        alt: "",
        placeholder: "[TODO: photo or short muted looping video of the real remote]",
      },
    },
    "climate-impact-tool": {
      kind: "Schoolproject voor de gemeente Amsterdam, sinds 2026", // review
      story: [
        "De gemeente Amsterdam heeft een tool voor klimaatimpact, en het is onze taak om die herbruikbaar te maken voor andere organisaties. [TODO: one sentence on what the tool does.] We zijn een team van vijf, en ik ben een van de twee full stack developers.", // review
        "Ik heb onderzocht hoe we het als Microsoft Teams-app kunnen bouwen. Daarna hebben de andere developer en ik het samen ontworpen en gebouwd. Ik heb ook direct contact met de klant.", // review
        "[TODO: one constraint, for example what a Teams app can and can’t do.] [TODO: one decision from your research and why.] [TODO: where the project stands now.]",
      ],
    },
    "angels-treasure": {
      kind: "Freelance, sinds 2026", // review
      story: [
        "Angel’s Treasure is een kleine winkel in handgemaakte mode in Amsterdam die verkoopt via Vinted en Depop. Eerst heb ik mid-fi- en hi-fi-ontwerpen gemaakt, daarna een one-page site gebouwd in HTML, CSS en JavaScript met een productfilter en een formulier voor bestellingen op maat.", // review
        "Ik heb Decap CMS ingericht zodat de eigenaar producten en markten kan toevoegen, en Netlify Forms voor het bestelformulier.", // review
        "[TODO: one constraint, for example budget or hosting.] [TODO: why Decap CMS over other options?]",
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
    lead: "Naast mijn studie werk ik met hardware: Arduino- en ESP32-boards, solderen en mijn eigen homelab. [TODO: what runs on your home lab?] Ik spreek Spaans, Engels en Nederlands.", // review
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
    text: "Mailen is de makkelijkste manier om me te bereiken. [TODO: where you can work, for example the Amsterdam area, hybrid or remote.]", // review
    copy: "E-mail kopiëren", // review
    copied: "Gekopieerd", // review
    copyFailed: "Kopiëren lukte niet, selecteer het adres zelf", // review
    cv: "Cv (pdf)", // review
  },
  footer: {
    backToTop: "Terug naar boven", // review
  },
};
