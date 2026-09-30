/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
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
        pixel: ['"Pixelify Sans"', "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"Roboto Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(240, 193, 75, 0.12)",
        card: "0 24px 60px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
