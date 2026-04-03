import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kevin': {
          'red': '#E8000D',
          'red-dark': '#A00009',
          'white': '#FFFFFF',
          'off-white': '#F5F5F5',
          'terminal-bg': '#0D0D0D',
          'terminal-green': '#00FF41',
          'muted': '#888888',
        },
      },
      fontFamily: {
        michroma: ['var(--font-michroma)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
        'jetbrains-mono': ['var(--font-jetbrains-mono)'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'pulse-red': 'pulse-red 0.6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'pulse-red': {
          '0%, 100%': { color: '#E8000D' },
          '50%': { color: '#A00009' },
        },
      },
    },
  },
  plugins: [],
}

export default config
