import flowbitePlugin from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        appBarBackgroundColor: "#89A3B2",
        appBarIconColor: "#FFDE4D",
      },
    },
  },
  plugins: [flowbitePlugin],
};
