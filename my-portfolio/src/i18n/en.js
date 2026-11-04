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
    workbench: "The final version of my Spotify mini remote.",
    demoLink: "Try the LucaStars demo",
    screenCaption: "The now-playing screen from my Spotify remote, in the browser. The three buttons work.",
    screenLink: "How I built the remote",
  },
  remote: {
    previous: "Previous track",
    next: "Next track",
    play: "Play",
    pause: "Pause",
    announcePlaying: "Playing {title} by {artist}",
    announcePaused: "Paused",
    announceTrack: "{title} by {artist}",
    listenOnSpotify: "Listen on Spotify",
  },
  demo: {
    label: "LucaStars interactive demo",
    reset: "Reset",
    fullScreen: "Full screen",
    exitFullScreen: "Exit full screen",
    escHint: "Esc also closes it",
    tryDemo: "Try the demo",
    previewAlt: "The LucaStars shop home page in the demo",
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
      school: "School project, so the code can’t be shared",
    },
    lucastars: {
      kind: "School project",
      story: [
        "LucaStars is a digital game store, made as a school project. You can browse the catalog, pick up deals, fill a cart, check out and look back at your orders on your profile. We were a team of five. I built the shopping cart, the games API, the profile system and the database, and helped with the checkout.",
        "The cart adds VAT, takes off discounts and accepts promo codes, and the same total has to come out at checkout and later in the order history.",
      ],
      tryIt:
        "This is a smaller rebuild of the shop with sample data, running right here in the page. Add a game to your cart, open the Discount code tab, enter LUCA10 and place an order. It shows up under My profile. Nothing is charged.",
    },
    "spotify-remote": {
      kind: "Personal hardware project, since 2026",
      story: [
        "A small remote for Spotify. It runs on an ESP32-C3 with a Sharp memory display and three buttons: play/pause, next and previous. The screen shows what’s playing. I always wanted an iPod, because I like having a separate screen just for my music. I already have a small e-reader, and I wanted something just as small for music, so I can switch songs on the bus or the train without taking out my phone.",
        "I wrote the first prototype in C++ with the Arduino framework and tested it on a breadboard. Now the screen is soldered to the microcontroller, and it has its own case.",
        "I wanted it to be portable, with a battery that lasts longer than a phone’s. That’s why I chose a Sharp memory display: it uses very little power, so I don’t need a bigger battery and the whole remote stays small.",
      ],
      buildLog: {
        label: "Build log",
        stepsLabel: "Build steps",
        step: "Step",
        announce: "Step {n} of {total}: {title}",
        previous: "Previous step",
        next: "Next step",
        partsHint: "Tap a number on the photo, or a part below.",
        steps: {
          design: {
            title: "Design",
            date: "2026",
            text: "A 3D model of the remote, with the screen and the three buttons.",
            alt: "Interactive 3D model of the Spotify mini remote with its display and three buttons",
          },
          breadboard: {
            title: "Breadboard",
            date: "2026",
            text: "I skipped the simulator and went straight to a breadboard with Arduino, the real screen and the buttons.",
            alt: "Video of the breadboard prototype. A finger presses the buttons, and the Sharp display shows the song that’s playing.",
          },
          soldering: {
            title: "Soldering",
            date: "2026",
            text: "The screen is now soldered to the microcontroller.",
            alt: "The Sharp memory display wired with coloured wires to the XIAO microcontroller inside the open case, with the USB-C port at the front.",
          },
          finished: {
            title: "Finished",
            date: "2026",
            text: "Where it is now: the remote in its own case, small enough to carry on the bus or the train.",
            alt: "The Spotify mini remote in a black textured case, with three buttons above the screen. The screen shows This Winter by innlet, with a pixel-art cat as the cover.",
          },
        },
        parts: {
          buttons: {
            name: "Three buttons",
            text: "Previous, play/pause and next.",
          },
          display: {
            name: "Sharp memory display",
            text: "It uses very little power, so the battery does not need to be big.",
          },
          usbc: {
            name: "USB-C",
            text: "",
          },
          case: {
            name: "The case",
            text: "",
          },
        },
      },
    },
    "climate-impact-tool": {
      kind: "School project for the City of Amsterdam, since 2026",
      story: [
        "The City of Amsterdam has a climate impact tool, and our job is to make it reusable for other organizations. It shows how much climate impact the files stored in OneDrive have, and we also want to make people aware of how much their storage affects the climate. We’re a team of five, and I’m one of the two full stack developers.",
        "I researched how to build it as a Microsoft Teams app. After that, the other developer and I designed and built it together. I also work with the client directly.",
        "The tool was supposed to delete files from OneDrive. But at the City of Amsterdam, employees aren’t allowed to delete documents because of the GDPR (AVG) rules. So I came up with moving the files from OneDrive to SharePoint instead. That way there are fewer copies of each document, which saves CO₂.",
      ],
    },
    "angels-treasure": {
      kind: "Freelance, since 2026",
      story: [
        "Angel’s Treasure is a small handmade fashion shop in Amsterdam that sells through Vinted and Depop. I made mid-fi and hi-fi designs first, then built a one-page site in HTML, CSS and JavaScript with a product filter and a custom order form.",
        "I set up Decap CMS so the owner can add products and markets. I chose it because it’s easy to use without much technical knowledge. Netlify Forms handles the order form.",
      ],
    },
  },
  about: {
    heading: "About",
    photoAlt: "Portrait of Flavio",
    lead: "Outside of school I work with hardware: Arduino and ESP32 boards, soldering, and my own home lab. I speak Spanish, English and Dutch.",
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
    text: "Email is the easiest way to reach me.",
    copy: "Copy email",
    copied: "Copied",
    copyFailed: "Couldn’t copy, select the address instead",
    cv: "CV (PDF)",
  },
  footer: {
    backToTop: "Back to top",
  },
};
