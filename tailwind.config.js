/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        transparentBlack: "rgba(0,0,0,0.85)",
        sunsetOrange: "#FF4F5A",
        Tangaroa: "#1A2E35",
        Gainsboro: "#E1E1E1",
        greenTeal: "#22C55E",
        Gray: "#6B7498"
      },
    },
  },
  plugins: [],
}

