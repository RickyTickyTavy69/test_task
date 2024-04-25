/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        navbar: "112px",
        mainContent: "calc(100vh - 112px)"
      }
    },
  },
  plugins: [],
}

