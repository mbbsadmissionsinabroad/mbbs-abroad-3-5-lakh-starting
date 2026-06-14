/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#e8edf3",
          100: "#c4cfde",
          200: "#9bafc4",
          300: "#728faa",
          400: "#4f7495",
          500: "#2c5a80",
          600: "#1e4570",
          700: "#15355a",
          800: "#0a1628",
          900: "#060e1c",
          950: "#030812",
        },
        saffron: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        wa: {
          DEFAULT: "#22c55e",
          hover: "#16a34a",
        },
        warm: {
          50: "#fafaf9",
          100: "#f5f4f1",
          200: "#e8e5df",
          300: "#d6d1c7",
          400: "#b8b0a0",
          500: "#9a907c",
          600: "#7d7363",
          700: "#645c50",
          800: "#4a433b",
          900: "#302c27",
        },
        medical: {
          gold: "#c9a84c",
          success: "#059669",
          red: "#dc2626",
          blue: "#1d4ed8",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.4s ease-out",
        "pulse-slow": "pulse 3s infinite",
        "pulse-cta": "pulseCta 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseCta: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,158,11,0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(245,158,11,0)" },
        },
      },
    },
  },
  plugins: [],
};
