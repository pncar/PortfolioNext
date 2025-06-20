/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: 'selector',
  content:[
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
		colors: {
			primary: colors.neutral,
			brand: colors.blue
		},
        fontFamily: {
			sans: ['var(--font-geist)'],
			archivo: ['var(--font-archivo)'],
			mono: ['var(--font-geist-mono)']
        },
	},
  },
  plugins: [],
}

