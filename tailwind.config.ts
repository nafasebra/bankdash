import * as colors from './src/theme/colors';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      screens: {
        xs: '420px'
      }
    },
  },
  plugins: [],
}

export default config;

