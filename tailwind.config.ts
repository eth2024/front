type PixelExtends = {
  [key in number]: string;
};

const px0_10 = {
  ...Array.from(Array(11)).map((_, i) => `${i}px`),
} as PixelExtends;
const px0_100 = {
  ...Array.from(Array(101)).map((_, i) => `${i}px`),
} as PixelExtends;
const px0_200 = {
  ...Array.from(Array(201)).map((_, i) => `${i}px`),
} as PixelExtends;
const px0_1000 = {
  ...Array.from(Array(1001)).map((_, i) => `${i}px`),
} as PixelExtends;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#121212",
        white: "#FFF",
        primary: "#B28BF4",
        secondary: "#62D6C5",
        red: "#C26C7B",
        gray: "#D0D5DD",
        darkGray: "#272727",
        lightGray: "#666666",
        disabled: "#A0A4A8",
        pink: "#C746DB",
      },
      fontFamily: {
        sans: ["sans"],
        pretendard: ["Pretendard"],
      },
      rounded: {
        lg: "10px",
      },
      borderWidth: px0_10,
      borderRadius: px0_100,
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
      fontSize: px0_100,
      minWidth: px0_1000,
      minHeight: px0_1000,
      maxWidth: px0_1000,
      maxHeight: px0_1000,
      spacing: px0_200,
      width: px0_1000,
      height: {
        ...px0_1000,
        screen: '100svh',
      },
      lineHeight: {
        ...px0_100,
        normal: '1.4',
        1.5: '1.5',
        relaxed: '1.64',
        ...px0_100,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
