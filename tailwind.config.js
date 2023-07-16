/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	theme: {
		extend: {
			boxShadow: {
				glow: '0 0 5px rgba(255, 255, 255, 0.6), 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.6)'
			}
		}
	},
	variants: {
		extend: {
			boxShadow: ['hover']
		}
	},
	plugins: []
};
