import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        light: '#636363',
        DEFAULT: '#434343',
        dark: '#0A0A0A'
      },
      white: {
        light: '#F8F8F8',
        DEFAULT: '#CACACA',
        dark: '#9E9E9E'
      },
      red: {
        light: '#EA5285',
        DEFAULT: '#E12A67',
        dark: '#A71646'
      },
      green: {
        light: '#51B8B0',
        DEFAULT: '#27A097',
        dark: '#12776F'
      },
      yellow: {
        light: '#F6E55B',
        DEFAULT: '#F3DD2E',
        dark: '#AD9A00'
      },
      purple: {
        light: '#482F64',
        DEFAULT: '#3D2459',
        dark: '#2C1348'
      }    
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "24px",
        md: "32px",
        lg: "48px",
        xl: "64px"
      },
    },
    fontFamily: {
      heading: ["futura-pt-bold", "serif", "sans-serif"],
      body: ["futura-pt", "serif", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.png')",
      },
    }
  },
  plugins: [],
};
export default config;
