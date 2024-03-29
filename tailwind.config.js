/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#DB3700",
        secondary: "#39393a",
        third: "#B8B8B8",
        fourth: "#297373",
        dark: "#121212",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
