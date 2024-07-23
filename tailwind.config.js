/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {fontFamily: {
        'press-start': ['"Roboto"', 'sans-serif'],
      },}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
