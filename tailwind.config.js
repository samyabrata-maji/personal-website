/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./page/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "main-layout": "56px 1fr",
      },
      gridTemplateColumns: {
        "hero-layout": "1.66fr 1fr",
        "newsletter-layout": "1fr 1.5fr",
      },
      colors: {
        dark: {
          "rich-black": "#020202",
          "eerie-black": "#181818",
          dandelion: "#F6E71D",
          "metallic-yellow": "#F5D10D",
        },
      },
      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            "border-color": theme("colors.vercel.pink"),
          },
          "40%": {
            "border-color": theme("colors.vercel.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: 1,
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      }),
    },
  },
};
