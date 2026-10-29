const img = (name) => `/projects/lucastars/${name}.jpg`;

export const LOGO = "/projects/lucastars/logo.png";

export const VAT_RATE = 0.21;

// Demo promo codes. The real shop loads these from the API.
export const PROMO_CODES = {
  LUCA10: { amount: 10 },
};

export const games = [
  {
    sku: "escape-the-unseen",
    title: "Escape the Unseen",
    price: 6.99,
    image: img("escape-the-unseen"),
    tags: ["Adventure", "Puzzle"],
    description: "Find your way out of forgotten ruins before something finds you.",
  },
  {
    sku: "dead-mans-secret",
    title: "A dead man's secret",
    price: 25.99,
    image: img("dead-mans-secret"),
    tags: ["Mystery"],
    description: "A murder mystery: follow the footprints and uncover what really happened.",
  },
  {
    sku: "ambiguous-darkness",
    title: "Ambigious Darkness",
    price: 43.99,
    image: img("ambiguous-darkness"),
    gallery: [
      img("ambiguous-darkness-1"),
      img("ambiguous-darkness-2"),
      img("ambiguous-darkness-3"),
      img("ambiguous-darkness-4"),
      img("ambiguous-darkness"),
    ],
    tags: ["Horror", "Exploration"],
    description: "The eerie stillness of Blackwood Manor. Play in full screen.",
  },
  {
    sku: "arkonia",
    title: "Arkonia: The last ascent",
    price: 15.99,
    image: img("arkonia"),
    tags: ["Adventure", "Pixel art"],
    description: "Climb the mountains above the village of Arkonia in this pixel-art adventure.",
  },
  {
    sku: "bakery-master",
    title: "Bakery Master",
    price: 44.99,
    image: img("bakery-master"),
    tags: ["Simulation"],
    description: "Welcome to your first bakery! Serve customers and become the best baker.",
  },
  {
    sku: "behind-closed-doors",
    title: "Behind Closed Doors",
    price: 48.99,
    image: img("behind-closed-doors"),
    tags: ["Puzzle", "Mystery"],
    description: "Look closer at every door. Some of them hide more than a room.",
  },
  {
    sku: "potion-quest",
    title: "Potion Quest",
    price: 9.99,
    image: img("potion-quest"),
    tags: ["Adventure"],
    description: "Search the jungle temple for the ingredients of a legendary potion.",
  },
  {
    sku: "kingdom-conquest",
    title: "Kingdom Conquest",
    price: 13.99,
    image: img("kingdom-conquest"),
    tags: ["Strategy"],
    description: "Build your kingdom, defend the crown, and conquer your rivals.",
  },
  {
    sku: "galaga-pay2leave",
    title: "Galaga Pay2Leave",
    price: 26.99,
    image: img("galaga-pay2leave"),
    tags: ["Arcade"],
    description: "You're locked in the arcade. Beat the machines to get out.",
  },
  {
    sku: "lost-backpack",
    title: "The Lost Backpack",
    price: 13.99,
    image: img("lost-backpack"),
    tags: ["Puzzle", "Pixel art"],
    description: "Someone took your backpack. Search the school to get it back.",
  },
  {
    sku: "ancient-quest",
    title: "The Ancient Quest of Infinity",
    price: 13.49,
    oldPrice: 26.99,
    image: img("ancient-quest"),
    tags: ["Fantasy", "Adventure"],
    description: "Ride with dragons on a quest that never truly ends.",
  },
  {
    sku: "tanner-virus-scanner",
    title: "Tanner de Virus Scanner",
    price: 0.99,
    oldPrice: 1.99,
    image: img("tanner-virus-scanner"),
    tags: ["Arcade"],
    description: "Scan, catch, and remove every virus before it spreads.",
  },
  {
    sku: "doorway-of-deception",
    title: "Doorway of Deception",
    price: 4.5,
    oldPrice: 8.99,
    image: img("doorway-of-deception"),
    tags: ["Fantasy"],
    description: "Step through the portal, but don't trust everything on the other side.",
  },
  {
    sku: "lost-in-dissonance",
    title: "Lost in Dissonance",
    price: 4.5,
    oldPrice: 8.99,
    image: img("lost-in-dissonance"),
    tags: ["Rhythm"],
    description: "A rhythm game where every beat changes the level.",
  },
];

export const bestSellers = ["escape-the-unseen", "dead-mans-secret", "ambiguous-darkness"];
export const latestReleases = ["arkonia", "bakery-master", "behind-closed-doors"];
export const suggested = ["potion-quest", "kingdom-conquest", "galaga-pay2leave", "lost-backpack"];

export const findGame = (sku) => games.find((game) => game.sku === sku);

export const euro = (value) => `€${value.toFixed(2)}`;

// Same rules as the real shop: the discount comes off the subtotal (never
// below zero), then 21% VAT is added on top of the discounted price.
export function cartTotals(items, discount = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const safeDiscount = Math.min(discount, subtotal);
  const vat = (subtotal - safeDiscount) * VAT_RATE;
  return {
    subtotal,
    discount: safeDiscount,
    vat,
    total: Math.max(0, subtotal - safeDiscount + vat),
  };
}
