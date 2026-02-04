/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#2563eb",   // blue
        brandGreen: "#22c55e",  // green
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563eb, #22c55e)",
      },
    },
  },

  plugins: [],
};
