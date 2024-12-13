/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "/css", "/assets"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Martian: ["Martian Mono", "monospace"]
    },
    backgroundSize: {
      "25%": "50%"
    },
    colors: {
      neutral: {
        verydark: "#062630",
        dark: "#385159",
        default: "#E6E1DF",
        light: "#FAF5F3"
      },
      white: "#FFFFFF",
      transparent: 'transparent',
      salmon: {
        dark: "#FEA36F",
        default: "#FFF5EF",
        light: "#FFF5EF"
      },
      gradient: {
        dark: "linear-gradient(180deg, #FEA36F 0%, #062630 100%)",
        light: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      }
    },
    backgroundImage: {
      dark: "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
      light: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      glow: "url('./assets/images/pattern-glow.svg')",
      patternCircle: "url('/assets/images/pattern-circle.png')"

    }
  },
  plugins: [],
}