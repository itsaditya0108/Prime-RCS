/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1400px", // better for desktop layouts
      },
    },

    extend: {

      /* Modern Font System */
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },

      colors: {
        navy: {
          900: "#0F172A",
          800: "#1E293B",
        },

        rcs: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
        },

        vibrant: {
          purple: "#9333EA",
          sky: "#0EA5E9",
        },

        surface: "#F8FAFC",
      },

      /* Professional Gradients */

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg,#0F172A 0%,#1E293B 40%,#0EA5E9 100%)",

        "cta-gradient":
          "linear-gradient(135deg,#06B6D4 0%,#3B82F6 100%)",

        "accent-gradient":
          "linear-gradient(135deg,#9333EA 0%,#3B82F6 100%)",
      },

      /* Better Desktop Typography */

      fontSize: {
        hero: ["3.2rem", { lineHeight: "1.1", fontWeight: "700" }],
        section: ["2.1rem", { lineHeight: "1.25", fontWeight: "600" }],
      },

      /* Smooth Animations */

      animation: {
        "gradient-move": "gradientMove 10s ease infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },

      keyframes: {
        gradientMove: {
          "0%,100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },

        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      /* Card Shadows for modern UI */

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        soft: "0 5px 15px rgba(0,0,0,0.05)",
      },
    },
  },

  plugins: [],
};