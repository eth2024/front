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
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#E4E7EC",
          300: "#CED2DA",
          400: "#97A1AF",
          500: "#637083",
          600: "#414E62",
          700: "#344051",
          800: "#202B37",
          900: "#141C24",
        },
        red: "#F98686",
        green: "#99E6D9",
        purple: "#A752E0",
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
        screen: "100svh",
      },
      lineHeight: {
        ...px0_100,
        normal: "1.4",
        1.5: "1.5",
        relaxed: "1.64",
        ...px0_100,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
