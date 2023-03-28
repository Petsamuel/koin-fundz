/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
      },
      colors: {
        blueon: "#1f2658",
        blueoff: "#272e5d",
        mainOn: "#fd8d00",
      },
    },
  },
  plugins: [],
};
