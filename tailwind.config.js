const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
