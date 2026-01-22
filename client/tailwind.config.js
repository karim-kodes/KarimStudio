const images = {
  hero: "url('./src/assets/images/service-hero.jpeg')",
};

const colors = {
  primary: "#026DFC",
  dark: "#0C0F13",
  textPrimary: "#fcfcfc",
};

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: colors,
      backgroundImage: images,
    },
  },
  plugins: [],
};
