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
        accent: "#9c2c14",

        // Old palette, still used by About, Experience, Contact and the footer
        // until those sections are rebuilt.
        night: "#0c0918",
        grape: {
          950: "#160f2a",
          900: "#231942",
          800: "#352860",
          700: "#5e548e",
          500: "#9f86c0",
          400: "#c4b5fd",
          300: "#ddd6fe",
        },
        gold: {
          DEFAULT: "#f0c14b",
          dim: "#d4a017",
        },
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
