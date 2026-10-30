export const person = {
  firstName: "Flavio",
  lastName: "Fernandez Suarez",
  fullName: "Flavio Fernandez Suarez",
  phone: "+31 687154687",
  phoneHref: "tel:+31687154687",
  email: "flaviofersu@gmail.com",
  linkedin: "https://www.linkedin.com/in/flavio-fernandez-suarez-0a02a1398/",
  github: "https://github.com/flaviofersu-pixel",
};

export const hero = {
  sentence: "I build checkouts for web shops and solder buttons onto ESP32 boards.",
  intro: "I’m in my second year of a software engineering degree, and I live in Almere.",
  internship: "Looking for a full stack internship from February 2027",
  link: "Try the LucaStars demo",
  screenCaption: "The now-playing screen from my Spotify remote, in the browser. The three buttons work.",
  screenLink: "How I built the remote",
};

// Edit this line whenever something new lands on the desk.
export const workbench = "[TODO: what’s on your workbench right now?]";

export const about = {
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
};

// The only place on the site with contact details. The hero links here with the internship date.
export const contact = {
  heading: "I’m looking for a full stack internship from February 2027.",
  text: "Email is the easiest way to reach me. [TODO: where you can work, for example the Amsterdam area, hybrid or remote.]",
};

// Order matters: LucaStars gets the most space, the last two are shown smaller.
// Anything in [TODO: ...] is highlighted on the page until you replace it.
export const projects = [
  {
    id: "lucastars",
    name: "LucaStars",
    kind: "School project",
    story: [
      "LucaStars is a digital game store, made as a school project. You can browse the catalog, pick up deals, fill a cart, check out and look back at your orders on your profile. [TODO: solo or team? If team, how many people and which parts did you build yourself?]",
      "The cart adds VAT, takes off discounts and accepts promo codes, and the same total has to come out at checkout and later in the order history. [TODO: one constraint you worked within, for example a required stack, a deadline or the brief.]",
      "[TODO: one decision you made and why, for example where the price calculation lives.]",
      "[TODO: the result, for example the grade, feedback you got or what you would change now.]",
    ],
    tryIt:
      "This is a smaller rebuild of the shop with sample data, running right here in the page. Add a game to your cart, open the Discount code tab, enter LUCA10 and place an order. It shows up under My profile. Nothing is charged.",
    tech: "[TODO: tech stack]",
    links: [
      { label: "Live site", href: "[TODO: url]" },
      { label: "GitHub", href: "[TODO: url]" },
    ],
  },
  {
    id: "spotify-remote",
    name: "Spotify mini remote",
    kind: "Personal hardware project, since 2026",
    story: [
      "A small remote for Spotify. It runs on an ESP32-C3 with a Sharp memory display and three buttons: play/pause, next and previous. The screen shows what’s playing. [TODO: why did you want to build it?]",
      "I wrote the first prototype in C++ with the Arduino framework and PlatformIO, and tested it in the Wokwi simulator. [TODO: has it run on real hardware yet?]",
      "[TODO: one constraint, for example the display size or power use.] [TODO: one decision you made and why, for example why a Sharp memory display.]",
    ],
    tech: "C++, Arduino framework, PlatformIO, Wokwi",
    links: [{ label: "GitHub", href: "[TODO: url]" }],
    // Put the file in public/projects/, then set src, type ("image" or "video") and alt.
    media: {
      src: "",
      type: "video",
      alt: "",
      placeholder: "[TODO: photo or short muted looping video of the real remote]",
    },
    models: [
      {
        label: "The remote",
        src: "/projects/spotify-gadget.glb",
        alt: "Interactive 3D model of the Spotify mini remote with its display and three buttons",
      },
      {
        label: "On an iPhone 16 Pro",
        src: "/projects/spotify-gadget-iphone.glb",
        alt: "Interactive 3D model of the Spotify mini remote attached to the back of an iPhone 16 Pro",
      },
    ],
  },
  {
    id: "climate-impact-tool",
    name: "Climate impact tool for Microsoft Teams",
    kind: "School project for the City of Amsterdam, since 2026",
    story: [
      "The City of Amsterdam has a climate impact tool, and our job is to make it reusable for other organizations. [TODO: one sentence on what the tool does.] We’re a team of five, and I’m one of the two full stack developers.",
      "I researched how to build it as a Microsoft Teams app. After that, the other developer and I designed and built it together. I also work with the client directly.",
      "[TODO: one constraint, for example what a Teams app can and can’t do.] [TODO: one decision from your research and why.] [TODO: where the project stands now.]",
    ],
    tech: "Microsoft Teams app, [TODO: tech stack]",
    links: [
      { label: "Live site", href: "[TODO: url]" },
      { label: "Code is private (client project)" },
    ],
  },
  {
    id: "angels-treasure",
    name: "Angel’s Treasure website",
    kind: "Freelance, since 2026",
    story: [
      "Angel’s Treasure is a small handmade fashion shop in Amsterdam that sells through Vinted and Depop. I made mid-fi and hi-fi designs first, then built a one-page site in HTML, CSS and JavaScript with a product filter and a custom order form.",
      "I set up Decap CMS so the owner can add products and markets, and Netlify Forms to handle the order form.",
      "[TODO: one constraint, for example budget or hosting.] [TODO: why Decap CMS over other options?]",
    ],
    tech: "HTML, CSS, JavaScript, Netlify Forms, Decap CMS",
    links: [
      { label: "Live site", href: "[TODO: url]" },
      { label: "GitHub", href: "[TODO: url]" },
    ],
    // Put the screenshot in public/projects/, then set src and alt.
    media: {
      src: "",
      type: "image",
      alt: "",
      placeholder: "[TODO: screenshot of the Angel’s Treasure site]",
    },
  },
];

// Songs for the remote's screen. The first one is the track shown in the 3D render.
// TODO: swap the other two for songs you actually play.
export const remoteTracks = [
  { title: "Blinding Lights", artist: "The Weeknd", seconds: 200 },
  { title: "[TODO: song 2]", artist: "[TODO: artist]", seconds: 242 },
  { title: "[TODO: song 3]", artist: "[TODO: artist]", seconds: 178 },
];

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];
