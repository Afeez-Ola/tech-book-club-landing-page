/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "/css", "/assets"],
  theme: {
    extend: {},
    backgroundPosition: {
      'bottom-md': 'right 12rem bottom 0rem',
      'bottom-lg': "right 13rem bottom 0.2rem",
      "left-bottom": "left bottom",
      "right-bottom": "right bottom",
      "right-top": "right top",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Martian: ["Martian Mono", "monospace"]
    },
    backgroundSize: {
      "50%": "50%",
      "25%": "30%"
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
        default: "#FFF5EF"
      },
      gradient: {
        dark: "linear-gradient(180deg, #FEA36F 0%, #062630 100%)",
        light: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      }
    },
    backgroundImage: {
      dark: "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
      glow: "url('/assets/images/pattern-glow.svg')",
      patternCircle: "url('/assets/images/pattern-circle.png')"
    },
    backgroundColor: {
      light: "#FAF5F3",
      salmon: {
        dark: "#FEA36F",
        default: "#FFF5EF"
      },
      neutral: {
        verydark: "#062630",
        dark: "#385159",
        default: "#E6E1DF",
        light: "#FAF5F3"
      },
    }
  },
  plugins: [],
}