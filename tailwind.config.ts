import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'neon-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px #34d399, 0 0 10px #34d399, 0 0 15px #34d399',
          },
          '50%': {
            boxShadow: '0 0 10px #6ee7b7, 0 0 20px #6ee7b7, 0 0 30px #6ee7b7',
          },
        }
      },
      animation: {
        'neon-glow': 'neon-glow 2.5s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
export default config