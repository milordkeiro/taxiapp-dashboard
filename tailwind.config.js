/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003049",
        secondary: "#F77F00",
        success: "#169641",
        info: "#EAE2B7",
        warning: "#FCBF49",
        danger: "#D62828",
      },
    },
  },
  plugins: [],
};
