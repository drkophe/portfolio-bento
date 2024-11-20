import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        'portrait': '9 / 16',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {  
          DEFAULT: '#F8AFA6',  
          50: '#FFFFFF',  
          100: '#FFFFFF',  
          200: '#FEF3F2',  
          300: '#FBD1CC',  
          400: '#F8AFA6',  
          500: '#F48072',  
          600: '#F0513E',  
          700: '#E42912',  
          800: '#B0200E',  
          900: '#7C160A',  
          950: '#621208'},
        secondary: {
          DEFAULT: '#3B82F6',  
          50: '#EBF2FE',  
          100: '#D7E6FD',  
          200: '#B0CDFB',  
          300: '#89B4FA',  
          400: '#629BF8',  
          500: '#3B82F6',  
          600: '#0B61EE',  
          700: '#084BB8',  
          800: '#063583',  
          900: '#041F4D',  
          950: '#021532'
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
