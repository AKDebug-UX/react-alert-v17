/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'xs': '840px',
        'md': '768px',
        'xm': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        "primary": "#0566EB",
        border_col: "var(--primary-300)",
        // title: "#45171D",
        "white-linear":
          "linear-gradient(269.85deg, rgba(208, 37, 0, 0.07) 11.03%, rgba(235, 148, 129, 0.0378) 42.3%)",
        "creamybg":
          "linear-gradient(269.95deg, rgba(235, 148, 129, 0.08) 38.93%, rgba(255, 155, 188, 0) 117.45%)",
      },

      backgroundImage: {
        "white-pattern": "url('/src/assets/FAQsections.svg')",
        "mobile-bg": "url('/src/assets/mobile-getstarted-bg.svg')",
        "mobile-bg2": "url('/src/assets/mobile-getstarted-bg2.svg')",
        reviewbg: "url('/src/assets/testimonialbg.svg')",
      },
    },
  },
  // plugins: [require("@tailwindcss")],
};
const plugin = require("tailwindcss/plugin");
