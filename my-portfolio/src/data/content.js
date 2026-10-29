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
};

export const profile = `Second-year Computer Software Engineering student at the Amsterdam University of Applied Sciences (HvA), specializing in full stack development in the Public Lab studio. I'm looking for an internship where I can contribute to real features, work in a team, and grow as a developer. I speak Spanish, English, and Dutch, and I enjoy working in international environments.`;

export const education = {
  school: "Hogeschool van Amsterdam (HvA)",
  degree: "Bachelor's in Computer Software Engineering",
  dates: "2025 – present",
  detail: "Public Lab studio, Full Stack profile (currently)",
};

export const experience = {
  title: "Student Employee",
  org: "Community for Participation and Representation",
  orgNl: "Studentmedewerker Community voor Inspraak en Medezeggenschap",
  company: "Amsterdam University of Applied Sciences",
  type: "Part-time",
  dates: "Sept 2026 – present",
  bullets: [
    "Mentor first-year Software Engineering students, guiding them through their project work and giving regular feedback",
    "Teach Git fundamentals (commits, branches, merging) and help students resolve version control problems",
    "Help students debug and work through technical problems in their projects by asking guiding questions rather than giving the answer",
    "Strengthen communication and teamwork skills by explaining technical concepts to people at different levels",
  ],
};

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Backend & data",
    items: ["Python", "MySQL"],
  },
  {
    label: "Tools",
    items: ["Git"],
  },
  {
    label: "Hardware",
    items: ["Arduino", "ESP32", "C++", "PlatformIO", "Wokwi", "Soldering"],
  },
];

export const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "C1" },
  { name: "Dutch", level: "C1" },
];

export const lucastarsImages = [
  {
    src: "/projects/lucastars-home.png",
    alt: "LucaStars home page with featured games, best sellers, and latest releases",
    label: "Home",
  },
  {
    src: "/projects/lucastars-store.png",
    alt: "LucaStars store with weekend deals and a game catalog",
    label: "Store",
  },
  {
    src: "/projects/lucastars-product.png",
    alt: "LucaStars product page for Ambiguous Darkness with gallery and add to cart",
    label: "Product",
  },
  {
    src: "/projects/lucastars-cart.png",
    alt: "LucaStars shopping cart with VAT, discounts, and promo codes",
    label: "Cart",
  },
  {
    src: "/projects/lucastars-checkout.png",
    alt: "LucaStars checkout with contact details, billing address, and order summary",
    label: "Checkout",
  },
  {
    src: "/projects/lucastars-profile.png",
    alt: "LucaStars user profile with total spent and order history",
    label: "Profile",
  },
];

export const angelsTreasureImages = [
  {
    src: "/projects/angels-treasure-home.jpg",
    alt: "Angel's Treasure hi-fi design: pink hero with the next pop-up market and links to Vinted",
    label: "Home",
  },
  {
    src: "/projects/angels-treasure-shop.jpg",
    alt: "Angel's Treasure shop section with category filters and product cards linking to Vinted and Depop",
    label: "Shop",
  },
  {
    src: "/projects/angels-treasure-popups.jpg",
    alt: "Angel's Treasure pop-up markets section with upcoming dates and locations",
    label: "Pop-ups",
  },
  {
    src: "/projects/angels-treasure-customs.jpg",
    alt: "Angel's Treasure custom order form with name, product type, colours, budget and idea",
    label: "Custom order",
  },
  {
    src: "/projects/angels-treasure-midfi.jpg",
    alt: "Angel's Treasure mid-fi wireframe with notes explaining each section",
    label: "Mid-fi",
  },
];

export const projects = [
  {
    id: "lucastars",
    name: "LucaStars",
    tag: "Featured project",
    summary:
      "A digital game store with catalog browsing, deals, a shopping cart, checkout, promo codes, and a user profile with order history.",
    features: [
      "Home, store, and product pages with best sellers, latest releases, and weekend deals",
      "Shopping cart with VAT, discounts, promo codes, and related-game suggestions",
      "Checkout flow with contact details, billing address, and order summary",
      "User profile with spend totals and order history",
    ],
    images: lucastarsImages,
  },
  {
    id: "angels-treasure",
    name: "Angel's Treasure",
    tag: "Freelance · 2026 – present",
    summary:
      "A website for a small handmade Jfashion shop from Amsterdam that until now only sold through Vinted, Depop and pop-up markets. I talked with the owner about what she needed, made mid-fi and hi-fi designs, and am building it as a one-page site she can manage herself.",
    features: [
      "Mid-fi wireframe first for structure, then a hi-fi design in the shop's own strawberry milk and chocolate style",
      "Shop with a category filter; every product links to Vinted (NL) or Depop (worldwide)",
      "Pop-up market calendar and a custom order form, so requests no longer get lost in DMs",
      "Hosted on Netlify with Netlify Forms and Decap CMS, so the owner can add products and markets herself",
      "AI helped with the first demo; the real version I build and commit myself",
    ],
    images: angelsTreasureImages,
  },
  {
    id: "spotify-remote",
    name: "Spotify Mini Remote",
    tag: "Personal hardware project",
    summary:
      "A small Spotify remote built on an ESP32-C3 with a Sharp memory display and three buttons, plus a 3D-printed stand that holds my phone, my e-reader and the remote.",
    features: ["ESP32-C3", "C++", "PlatformIO", "Wokwi simulator", "Sharp memory display", "3D design"],
    images: [],
  },
  {
    id: "portfolio",
    name: "Personal portfolio",
    tag: "This site",
    summary:
      "A React and Tailwind CSS portfolio built to present my work, education, and internship profile in one place.",
    features: ["React 19", "Tailwind CSS", "Responsive layout", "Accessible contact form"],
    images: [],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
