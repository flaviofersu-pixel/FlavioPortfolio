// Everything here stays the same in every language. All translatable text lives in src/i18n/.

export const person = {
  firstName: "Flavio",
  lastName: "Fernandez Suarez",
  fullName: "Flavio Fernandez Suarez",
  phone: "+31 6 87154687",
  phoneHref: "tel:+31687154687",
  email: "flaviofersu1108@gmail.com",
  linkedin: "https://www.linkedin.com/in/flavio-fernandez-suarez-0a02a1398/",
  github: "https://github.com/flaviofersu-pixel",
  cv: {
    nl: "/cv-flavio-fernandez-suarez-nl.pdf",
    en: "/cv-flavio-fernandez-suarez-en.pdf",
  },
};


export const projects = [
  {
    id: "lucastars",
    links: [{ type: "school" }],
  },
  {
    id: "spotify-remote",
    links: [{ type: "github", href: "https://github.com/flaviofersu-pixel/spotify-gadget" }],
    media: [
      {
        key: "design",
        type: "model",
        src: "/projects/spotify-gadget.glb",
        thumb: "/images/remote/design.jpg", // a still render of the model, so the 3D library isn't needed for it
        thumbFit: "contain",
      },
      {
        key: "breadboard",
        type: "video",
        src: "/projects/spotify-remote.mp4",
        poster: "/projects/spotify-remote-poster.jpg",
        thumb: "/images/remote/thumbs/spotify-remote-poster.jpg",
      },
      {
        key: "soldering",
        type: "image",
        src: "/images/remote/soldering.jpg",
        thumb: "/images/remote/thumbs/soldering.jpg",
      },
      {
        key: "finished",
        type: "image",
        src: "/projects/spotify-remote-case.jpg",
        thumb: "/images/remote/thumbs/spotify-remote-case.jpg",
        parts: [
          { key: "buttons", x: 48, y: 25 },
          { key: "display", x: 48, y: 52 },
        ],
      },
    ],
  },
  {
    id: "climate-impact-tool",
    links: [{ type: "school" }],
  },
  {
    id: "angels-treasure",
    links: [],
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
