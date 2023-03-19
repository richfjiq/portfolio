/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./utils/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			linen: '#f7f1e3',
			indigo: '#24305e',
			'blue-cola': '#0984e3',
			'persian-red': '#d63031',
			wenge: '#5d5454',
			orange: '#ffa502',
			'ocean-blue': '#5f27cd',
			green: '#27ae60',
			'lavender-rose': '#ff9ff3',
			'outer-space': '#2f3542',
		},
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
