/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1D4ED8",
          hover: "#1E40AF",
        },
        sand: "#F8F7F4",
        slateDark: "#0F172A",
        cardDark: "#1E293B",
      }
    }
  }
}
