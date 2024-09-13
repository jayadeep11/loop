/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "timber-green": {
          50: "#f4f9f7",
          100: "#dbece4",
          200: "#b6d9c9",
          300: "#89bfa8",
          400: "#61a087",
          500: "#47856e",
          600: "#376a58",
          700: "#2f5649",
          800: "#29463c",
          900: "#233831",
          950: "#11221c",
        },
        backdropBlur: {
          xs: "2px",
          sm: "4px",
          md: "8px",
          lg: "12px",
          xl: "16px",
        },
      },
    },
  },
  plugins: [],
};
