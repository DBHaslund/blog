import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',  
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'card': '-5px -5px 10px rgba(255, 255, 255, .5), 5px 5px 15px rgba(0, 0, 0, .5)',
        'darkCard': '-3px -3px 10px rgba(255, 255, 255, .5), 5px 5px 10px rgba(0, 0, 0, .1)'
      }
    },
  },
  plugins: [],
}
export default config
