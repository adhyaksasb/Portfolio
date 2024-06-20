/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(225, 240, 218)",
        secondary: "rgb(212, 231, 197)",
        font1: "rgb(147, 125, 194)",
        font2: "rgb(198, 137, 198)",
        font3: "rgb(255, 171, 225)",
        font4: "rgb(255, 230, 247)",
        dark: {
          100: "#F4EEE0",
          500: "#ABBBC2",
          700: "#6D5D6E",
          900: "#4F4557",
          800: "#393646",
        },
        custom: "#EB966A", //#EB966A, #5c25cb
      },
    },
  },
  plugins: [],
};
