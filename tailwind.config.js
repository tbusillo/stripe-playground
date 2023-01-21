import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx, md, mdx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [typography, forms]
};
