import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F5F0EB', light: '#FAF8F5', dark: '#EDE5DB' },
        walnut: { DEFAULT: '#5C4033', light: '#7A5C4F', dark: '#3E2A22' },
        gold: { DEFAULT: '#C8A96E', light: '#D4BC8E', dark: '#A88B4A' },
        charcoal: { DEFAULT: '#2C2C2C', light: '#444444', dark: '#1A1A1A' },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-2%, -1%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
