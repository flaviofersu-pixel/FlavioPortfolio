// English is the source. nl.js and es.js have the same keys.
// Not translated anywhere: names, project names, tech names, the LucaStars demo and the remote's screen.
export default {
  meta: {
    title: "Flavio Fernandez Suarez, full stack student",
    description:
      "Flavio Fernandez Suarez builds checkouts for web shops and solders buttons onto ESP32 boards. Looking for a full stack internship from February 2027.",
    ogDescription: "I build checkouts for web shops and solder buttons onto ESP32 boards.",
    ogImageAlt: "The name Flavio Fernandez Suarez next to the now-playing screen of the Spotify remote",
  },
  nav: {
    skip: "Skip to content",
    label: "Main",
    language: "Language",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  hero: {
    sentence: "I build checkouts for web shops and solder buttons onto ESP32 boards.",
    intro: "I’m in my second year of a software engineering degree, and I live in Almere.",
    internship: "Looking for a full stack internship from February 2027",
    workbenchLabel: "On my workbench:",
    // Edit this line (in all three languages) whenever something new lands on the desk.
    workbench: "[TODO: what’s on your workbench right now?]",
    demoLink: "Try the LucaStars demo",
    screenCaption: "The now-playing screen from my Spotify remote, in the browser. The three buttons work.",
    screenLink: "How I built the remote",
  },
  remote: {
    previous: "Previous track",
    next: "Next track",
    play: "Play",
    pause: "Pause",
    playing: "Playing",
    paused: "Paused",
    status: "{state}: {title} by {artist}",
  },
  demo: {
    label: "LucaStars interactive demo",
    reset: "Reset",
    fullScreen: "Full screen",
    exitFullScreen: "Exit full screen",
    escHint: "Esc also closes it",
  },
  models: {
    choose: "Choose a 3D render",
    remote: {
      label: "The remote",
      alt: "Interactive 3D model of the Spotify mini remote with its display and three buttons",
    },
    iphone: {
      label: "On an iPhone 16 Pro",
      alt: "Interactive 3D model of the Spotify mini remote attached to the back of an iPhone 16 Pro",
    },
  },
  media: {
    play: "Play video",
    pause: "Pause video",
  },
  projects: {
    heading: "Projects",
    builtWith: "Built with:",
    links: {
      live: "Live site",
      github: "GitHub",
      private: "Code is private (client project)",
    },
    lucastars: {
      kind: "School project",
      story: [
        "LucaStars is a digital game store, made as a school project. You can browse the catalog, pick up deals, fill a cart, check out and look back at your orders on your profile. [TODO: solo or team? If team, how many people and which parts did you build yourself?]",
        "The cart adds VAT, takes off discounts and accepts promo codes, and the same total has to come out at checkout and later in the order history. [TODO: one constraint you worked within, for example a required stack, a deadline or the brief.]",
        "[TODO: one decision you made and why, for example where the price calculation lives.]",
        "[TODO: the result, for example the grade, feedback you got or what you would change now.]",
      ],
      tryIt:
        "This is a smaller rebuild of the shop with sample data, running right here in the page. Add a game to your cart, open the Discount code tab, enter LUCA10 and place an order. It shows up under My profile. Nothing is charged.",
    },
    "spotify-remote": {
      kind: "Personal hardware project, since 2026",
      story: [
        "A small remote for Spotify. It runs on an ESP32-C3 with a Sharp memory display and three buttons: play/pause, next and previous. The screen shows what’s playing. [TODO: why did you want to build it?]",
        "I wrote the first prototype in C++ with the Arduino framework and PlatformIO, and tested it in the Wokwi simulator. [TODO: has it run on real hardware yet?]",
        "[TODO: one constraint, for example the display size or power use.] [TODO: one decision you made and why, for example why a Sharp memory display.]",
      ],
      media: {
        // Describe the photo or video once you add it (src goes in src/data/content.js).
        alt: "",
        placeholder: "[TODO: photo or short muted looping video of the real remote]",
      },
    },
    "climate-impact-tool": {
      kind: "School project for the City of Amsterdam, since 2026",
      story: [
        "The City of Amsterdam has a climate impact tool, and our job is to make it reusable for other organizations. [TODO: one sentence on what the tool does.] We’re a team of five, and I’m one of the two full stack developers.",
        "I researched how to build it as a Microsoft Teams app. After that, the other developer and I designed and built it together. I also work with the client directly.",
        "[TODO: one constraint, for example what a Teams app can and can’t do.] [TODO: one decision from your research and why.] [TODO: where the project stands now.]",
      ],
    },
    "angels-treasure": {
      kind: "Freelance, since 2026",
      story: [
        "Angel’s Treasure is a small handmade fashion shop in Amsterdam that sells through Vinted and Depop. I made mid-fi and hi-fi designs first, then built a one-page site in HTML, CSS and JavaScript with a product filter and a custom order form.",
        "I set up Decap CMS so the owner can add products and markets, and Netlify Forms to handle the order form.",
        "[TODO: one constraint, for example budget or hosting.] [TODO: why Decap CMS over other options?]",
      ],
      media: {
        // Describe the screenshot once you add it (src goes in src/data/content.js).
        alt: "",
        placeholder: "[TODO: screenshot of the Angel’s Treasure site]",
      },
    },
  },
  about: {
    heading: "About",
    photoAlt: "Portrait of Flavio",
    lead: "Outside of school I work with hardware: Arduino and ESP32 boards, soldering, and my own home lab. [TODO: what runs on your home lab?] I speak Spanish, English and Dutch.",
    timeline: [
      {
        when: "Since Sept 2026",
        title: "Student Mentor at HvA",
        detail: "Part-time job",
        text: "I guide first-year students through their project work. A lot of that is Git and GitLab: branches, merging and the conflicts that come with it. When their code breaks, I help them debug it by asking the right questions. I also give feedback on their sprint reviews and reports.",
      },
      {
        when: "Since 2025",
        title: "HBO-ICT Software Engineering",
        detail: "Hogeschool van Amsterdam, full stack profile",
      },
    ],
  },
  contact: {
    heading: "I’m looking for a full stack internship from February 2027.",
    text: "Email is the easiest way to reach me. [TODO: where you can work, for example the Amsterdam area, hybrid or remote.]",
    copy: "Copy email",
    copied: "Copied",
    copyFailed: "Couldn’t copy, select the address instead",
    cv: "CV (PDF)",
  },
  footer: {
    backToTop: "Back to top",
  },
};
