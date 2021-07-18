module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      Nunito: "'Nunito Sans',sans-serif",
    },

    extend: {
      colors: { "blue-cork": "#4361ee", "gray-input": "#e0e6ed" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
