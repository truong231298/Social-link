/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       " White": "hsl(0, 0%, 100%)",
        "Grey": "hsl(0, 0%, 20%)",
        "DarkGrey": "hsl(0, 0%, 12%)",
        "OffBlack": "hsl(0, 0%, 8%)",
        "Green": "hsl(75, 94%, 57%)"
      }
    },
  },
  plugins: [],
}