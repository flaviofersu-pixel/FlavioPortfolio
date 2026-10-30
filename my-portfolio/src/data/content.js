// Everything here stays the same in every language. All translatable text lives in src/i18n/.

export const person = {
  firstName: "Flavio",
  lastName: "Fernandez Suarez",
  fullName: "Flavio Fernandez Suarez",
  phone: "+31 687154687",
  phoneHref: "tel:+31687154687",
  email: "flaviofersu@gmail.com",
  linkedin: "https://www.linkedin.com/in/flavio-fernandez-suarez-0a02a1398/",
  github: "https://github.com/flaviofersu-pixel",
  cv: "/cv-flavio-fernandez.pdf",
};

// Order matters: LucaStars gets the most space, the last two are shown smaller.
// Text for each project is in src/i18n under projects.<id>. Link types: live, github, private.
// Anything in [TODO: ...] is highlighted on the page until you replace it.
export const projects = [
  {
    id: "lucastars",
    name: "LucaStars",
    tech: "[TODO: tech stack]",
    links: [
      { type: "live", href: "[TODO: url]" },
      { type: "github", href: "[TODO: url]" },
    ],
  },
  {
    id: "spotify-remote",
    name: "Spotify mini remote",
    tech: "C++, Arduino framework, PlatformIO, Wokwi",
    links: [{ type: "github", href: "[TODO: url]" }],
    // Put the file in public/projects/, set src and type ("image" or "video"), and write the alt text in src/i18n.
    media: { src: "", type: "video" },
    models: [
      { key: "remote", src: "/projects/spotify-gadget.glb" },
      { key: "iphone", src: "/projects/spotify-gadget-iphone.glb" },
    ],
  },
  {
    id: "climate-impact-tool",
    name: "Climate impact tool for Microsoft Teams",
    tech: "Microsoft Teams app, [TODO: tech stack]",
    links: [{ type: "live", href: "[TODO: url]" }, { type: "private" }],
  },
  {
    id: "angels-treasure",
    name: "Angel’s Treasure website",
    tech: "HTML, CSS, JavaScript, Netlify Forms, Decap CMS",
    links: [
      { type: "live", href: "[TODO: url]" },
      { type: "github", href: "[TODO: url]" },
    ],
    // Put the screenshot in public/projects/, set src, and write the alt text in src/i18n.
    media: { src: "", type: "image" },
  },
];

// Songs for the remote in the hero. url: the track's Spotify link (Share > Copy song link).
// Without a link, that track only plays visually on the screen. seconds: the track length,
// only used when Spotify can't load (Spotify reports the real length while it plays).
export const remoteTracks = [
  { title: "Love Me", artist: "Elvis Presley", url: "https://open.spotify.com/track/2DQ5r0crvortwaNRYcninK", seconds: 167 },
  { title: "Locos - Live", artist: "León Larregui", url: "https://open.spotify.com/track/3c8SCYG8XwNHxSvfIj3jgg", seconds: 212 },
  { title: "A Love Like Her", artist: "BluNites", url: "https://open.spotify.com/track/6WbxpUUZR0gw4Kr4FtUjbH", seconds: 207 },
];

export const navLinks = [
  { href: "#projects", key: "projects" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
];
