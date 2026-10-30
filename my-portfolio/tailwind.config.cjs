/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Taken from the Sharp memory display in my Spotify remote:
        // a reflective silver-grey surface with near-black pixels.
        lcd: {
          DEFAULT: "#d3d6cf",
          deep: "#c4c8c0",
        },
        ink: {
          DEFAULT: "#151813",
          soft: "#41463e",
        },
        rule: "#8c9188",
        // The remote's green play button, darkened to pass AA on both greys.
        accent: "#175c3b",
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', "monospace"],
        sans: ['"Atkinson Hyperlegible Next"', "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 60px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
