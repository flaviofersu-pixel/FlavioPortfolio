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
