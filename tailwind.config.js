/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    fontSize: {
      sm: "0.75rem",
      base: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    screens: {
      xs: "425px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
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
          300: "hsl(0, 0%, 77%)",
          350: "hsl(0, 0%, 70%)",
          400: "hsl(0, 0%, 52%)",
        },
      },
      boxShadow: {
        sm: "0 2px 4px 0px rgba(0, 0, 0, 0.06)",
        base: "0 2px 9px 0px rgba(0, 0, 0, 0.05)",
        md: "0 0px 7px 0px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
