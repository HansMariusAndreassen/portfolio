/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        slateBlue: "#6a5acd",
      },
      fontFamily: {
        sans: ["Josefin Slab", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        xl: "5px 5px 10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-md": {
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-lg": {
            textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-xl": {
            textShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-slateblue": {
            textShadow: "5px 5px 10px rgba(106, 90, 205, 0.5)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
