// tailwind.config.js
const colorClasses = [
  "primary",
  "secondary",
  "custom",
  "white",
  "blue1",
  "yellow1",
];

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background": 'url("/images/contatos.png")',
      },
      colors: {
        primary: {
          DEFAULT: "#FFB400",
        },
        secondary: {
          DEFAULT: "#F29105",
        },
        blue1: {
          DEFAULT: "#01307E",
        },
        yellow1: {
          DEFAULT: "#F8C627",
        },
        custom: {
          DEFAULT: "#242424",
        },
      },

      container: {
        center: true,
      },

      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1220px",
        "2xl": "1220px",
      },
    },
  },
  safelist: [
    ...colorClasses.map((color) => `bg-${color}`),
    ...colorClasses.map((color) => `text-${color}`),
  ],
  plugins: [],
};
