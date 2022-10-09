/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#dbeafe",
          200: "#bfdbfe",
          250: "#A9D0FE",
          300: "#93c5fd",
        },
      },
    },
  },
  plugins: [],
};
