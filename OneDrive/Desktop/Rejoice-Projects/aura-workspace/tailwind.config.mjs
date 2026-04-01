/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", 
        accent: "#3B82F6",  
        background: "#F8FAFC",
        surface: "#FFFFFF",
        textMain: "#0F172A",
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
      },
    },
  },
  plugins: [],
};