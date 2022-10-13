const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["corporate", "business"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "business",
  },
};
