/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    screens: {
      tiny: "240px",
    },
    fontSize: {
      xxs: "0.625rem", // 10px
    },
  },
};
