module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      inter: "'Inter', sans-serif",
    },
    extend: {
      colors: {
        canvas: "#ffffff",
        bodyColor: "#D9DAFF",
        "primary-btn": "#543BF5",
        pTagColor: "#5E5E5E",
        secoundary: "#543BF5",
      },
      animation: {
        bounce: "bounce 3s linear infinite",
      },
      keyframes: {},
      transitionDuration: {
        2000: "2000ms",
      },
      width: {
        // '128': '429px',
      },
      height: {
        // '128': '643.5px',
      },
      inset: {
        // '76px': '76px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
