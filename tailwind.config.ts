import type { Config } from "tailwindcss";
import scrollbarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d1c4f",     // Bleu Naoussi
        secondary: "#2b7822",   // Vert Naoussi
        accent: "#FBD100",      // Jaune Naoussi

        naoussi: {
          blue: "#0066B3",
          green: "#8CC63F",
          yellow: "#FBD100",
          darkgreen: "#009444",
          black: "#000000",
          white: "#FFFFFF",
        },

        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },

      fontFamily: {
        sans: ["'Poppins'", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'Montserrat'", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["'Lora'", "serif"],
      },

      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },

      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
        bold: "0 6px 20px rgba(0, 0, 0, 0.15)",
        card: "0 10px 25px rgba(0, 0, 0, 0.1)",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.8s ease-in-out",
        slideDown: "slideDown 0.8s ease-in-out",
      },

      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [scrollbarHide],
};

export default config;
