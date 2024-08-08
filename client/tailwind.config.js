/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        graybg: "#5C5E60",
        primary: "#2F2F2F"
      }
    },
  },
  plugins: [
    flowbite.plugin()
  ],
};
