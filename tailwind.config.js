/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      lightGreen: "#b4f1d3",
      GReen: "hsl(169, 82%, 27%)",
      white: " hsl(0, 0%, 100%)",
      Red: "hsl(0, 66%, 54%)",
      Greymedium: "hsl(186, 15%, 59%)",
      Greydarker: "hsl(187, 24%, 22%)",
    },
  },
  plugins: [],
};
