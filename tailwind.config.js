module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Nunito: "'Nunito Sans',sans-serif",
    },

    extend: {
      colors: {
        "blue-cork": "#4361ee",
        "gray-input": "#e0e6ed",
        "color-primary": "#3b3f5c",
        "gray-check-box": "#888ea8",
      },
      fill: (theme) => ({
        red: theme("colors.red.500"),
        green: theme("colors.green.500"),
        blue: theme("colors.blue.200"),
      }),
      fontSize: { h1: "2.5rem" },
      boxShadow: { button: "0 10px 20px -10px rgba(67,97,238)" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
