import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      green: "#0FB59A",
      blue: "#146EFD",
      pink: "#FFB2D8",
      yellow: "#FDD003",
      orange: "#F87A01",
      black: "#000",
      white: "#fff",
      gray: "#6B6B6B",
      "off-white": "#F3F3F3",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        sm: "32px",
        md: "32px",
        lg: "48px",
        xl: "112px",
      },
    },
    fontFamily: {
      heading: ["var(--font-rubik)", "sans-serif"],
      body: ["var(--font-rubik)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.png')",
      },
      fontSize: {
        heading: "28px",
        copy: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
