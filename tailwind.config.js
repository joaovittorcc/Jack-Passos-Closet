/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f6f1e6',
        paper: '#efe6d8',
        ink: {
          DEFAULT: '#221e1b',
          soft: '#4a453f',
        },
        wine: {
          DEFAULT: '#6e2136',
          dark: '#4a1624',
        },
        brass: '#ab8654',
        sage: '#6b7255',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        label: ['"Barlow Semi Condensed"', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2.5deg)' },
          '50%': { transform: 'rotate(2.5deg)' },
        },
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        sway: 'sway 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
