/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
      },
      colors: {
        navbar: "rgba(243, 156, 18, 0.7)",
        night: "#ECF0F1",
      },
    },
  },
  plugins: [],
};
