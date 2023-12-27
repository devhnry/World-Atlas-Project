/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        blue: {
          "dark-400": "hsl(209, 23%, 22%)",
          "dark-500": "hsl(207, 26%, 17%)",
          "dark-900": "hsl(200, 15%, 8%)",
        },
        gray: {
          100: "hsl(0, 0%, 98%)",
          400: "hsl(0, 0%, 52%)",
        },
      },
    },
  },
  plugins: [],
};
