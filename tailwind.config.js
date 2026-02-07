/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  fontFamily: {
    sans: ['Inter', 'system-ui'],
    display: ['Inter Tight', 'Inter']
  },
  theme: {
    extend: {
      colors: {
        brandBlue: "#2563eb",   // blue
        brandGreen: "#22c55e",  // green
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2563eb, #22c55e)",
      },
      animation: {
        "gradient": "gradient 8s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },

  plugins: [],
};
