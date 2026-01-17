/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      gray: {
        700: '#404854',
        800: '#2d323e',
        900: '#1a1f2e',
      },
      bg: '#0f121a',
      panel: '#171b26',
      panel2: '#20263a',
      text: '#e7ecf3',
      muted: '#a7b0c3',
      accent: '#7cffd1',
      accent2: '#7ca9ff',
      warn: '#ffd166',
      danger: '#ff6b6b',
    },
    extend: {
      animation: {
        'spin-wheel': 'spin-wheel 3s cubic-bezier(0.17, 0.67, 0.12, 0.99) forwards',
      },
      keyframes: {
        'spin-wheel': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(1800deg)' },
        }
      }
    },
  },
  plugins: [],
}