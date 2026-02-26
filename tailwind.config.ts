import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        snow: '#f8f8f6',
        cloud: '#f0efed',
        mist: '#e5e3df',
        stone: '#7a7673',
        bark: '#4a4845',
        ink: '#1e1c1a',
        sage: {
          DEFAULT: '#4a7bb8',
          light: '#c0d4f0',
          soft: '#ebf0f8',
          deep: '#2c5282',
        },
        blush: '#c8a882',
      },
      fontFamily: {
        display: ['var(--font-noto-serif-he)', 'David', 'serif'],
        body: ['var(--font-heebo)', 'sans-serif'],
      },
      maxWidth: {
        container: '1140px',
      },
      boxShadow: {
        soft: '0 2px 20px rgba(30,28,26,0.04)',
        card: '0 4px 30px rgba(30,28,26,0.06)',
        hover: '0 12px 40px rgba(30,28,26,0.1)',
      },
    },
  },
  plugins: [],
}
export default config
