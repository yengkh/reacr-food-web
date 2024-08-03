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
        itemBackgrondColor: "#EEEDEB",
        priceColor: "#939185",
        lineThroughtColor: "#EB3678",
        activeLinkColor: "#E90074",
      },
    },
  },
  plugins: [
    flowbitePlugin,
    function ({ addUtilities }) {
      addUtilities({
        ".line-clamp-4": {
          overflow: "hidden",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          "-webkit-line-clamp": "3",
          // height: "5.25em", // Adjust based on your line height
        },
      });
    },
  ],
};
