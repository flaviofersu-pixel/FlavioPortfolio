export const person = {
  firstName: "Flavio",
  lastName: "Fernandez Suarez",
  fullName: "Flavio Fernandez Suarez",
  role: "Software Engineering Student | Full Stack",
  location: "Almere, Netherlands",
  phone: "+31 687154687",
  phoneHref: "tel:+31687154687",
  email: "flaviofersu@gmail.com",
  linkedin: "https://www.linkedin.com/in/flavio-fernandez-suarez-0a02a1398/",
  github: "https://github.com/flaviofersu-pixel",
};

export const profile = `Second-year HBO-ICT Software Engineering student at the Amsterdam University of Applied Sciences (HvA), on the full stack profile. I’m looking for an internship from February 2027 where I can build real features in a team. Besides programming, I like working with hardware: Arduino, soldering, and my own home lab. I speak Spanish, English, and Dutch.`;

export const education = {
  school: "Hogeschool van Amsterdam (HvA)",
  degree: "Bachelor HBO-ICT, Software Engineering",
  dates: "2025 – present",
  detail: "Public Lab studio, full stack profile",
};

export const experience = {
  title: "Student Mentor",
  org: "Amsterdam University of Applied Sciences (HvA)",
  type: "Part-time job",
  dates: "Sept 2026 – present",
  bullets: [
    "Guide first-year Software Engineering students through their project work",
    "Help them with Git and GitLab (branches, merging, conflicts) and with debugging their code by asking the right questions",
    "Give feedback on their sprint reviews and project reports",
  ],
};

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend & data",
    items: ["REST APIs", "MySQL", "OOP"],
  },
  {
    label: "Tools",
    items: ["Git", "GitLab", "Docker", "Postman"],
  },
  {
    label: "Hardware",
    items: ["Arduino", "ESP32", "Soldering", "Home lab"],
  },
];

export const languages = [
  { name: "Spanish" },
  { name: "English" },
  { name: "Dutch" },
];

export const projects = [
  {
    id: "lucastars",
    name: "LucaStars",
    tag: "Featured project · School project",
    summary:
      "A digital game store with catalog browsing, deals, a shopping cart, checkout, promo codes, and a user profile with order history.",
    features: [
      "Home, store, and product pages with best sellers, latest releases, and weekend deals",
      "Shopping cart with VAT, discounts, promo codes, and related-game suggestions",
      "Checkout flow with contact details, billing address, and order summary",
      "User profile with spend totals and order history",
    ],
    hint: "This shop is a working mini demo. Add a game to your cart, open the Discount code tab, apply LUCA10, and place an order. Use the full screen button for a bigger view.",
  },
  {
    id: "spotify-gadget",
    name: "Spotify mini remote",
    tag: "Personal hardware project",
    dates: "2026 – present",
    summary:
      "A small Spotify remote built around an ESP32-C3 microcontroller, a Sharp memory display, and three buttons.",
    features: [
      "First prototype in C++ (Arduino, PlatformIO)",
      "Tested in the Wokwi simulator",
      "Play/pause, next/previous, and a now-playing screen",
    ],
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
    tag: "School project · Client: City of Amsterdam",
    dates: "2026 – present",
    summary:
      "Making an existing climate impact tool reusable for other organizations and updating it to current calculation models. I’m one of two full stack developers in a team of five.",
    features: [
      "Researching how to build it as a Microsoft Teams app",
      "Designing and building it with the other developer",
      "Direct contact with the client through meetings, feedback rounds, and iterations",
    ],
  },
  {
    id: "angels-treasure",
    name: "Angel’s Treasure website",
    tag: "Freelance · Handmade fashion shop, Amsterdam",
    dates: "2026 – present",
    summary:
      "A website for a small handmade fashion shop that currently only sells through Vinted, Depop, and pop-up markets.",
    features: [
      "Mid-fi and hi-fi designs",
      "One-page site in HTML, CSS, and JavaScript",
      "Product filter and custom order form",
      "Netlify Forms and Decap CMS so the owner can add products and markets",
    ],
  },
  {
    id: "portfolio",
    name: "Personal portfolio",
    tag: "This site",
    summary:
      "A React and Tailwind CSS portfolio built to present my work, education, and internship profile in one place.",
    features: ["React 19", "Vite", "Tailwind CSS", "Responsive layout", "Accessible contact form"],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
