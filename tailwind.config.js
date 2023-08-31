/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      "purple": {
        50: "#eef2ff",
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#4f46e5',
        700: '#4338ca',
        800: '#3730a3',
        900: '#312e81',
        1000: '#a78bfa',
        1100: '#8b5cf6',
        1200: '#7c3aed',
      },
      "grey": {
        50:"#f9fafb",
        100:"#f3f4f6",
        200:"#e5e7eb",
        300:"#d4d4d8",
        400:"#9ca3af",
        500:"#6b7280",
        700:"#3f3f46",
      }
    },
      // 
    extend: {},
  },
  plugins: [],
}

