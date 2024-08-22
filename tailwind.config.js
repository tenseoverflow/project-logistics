/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
  	      	'press-start': ['"Roboto"', 'sans-serif'],
  	    	},
	 	 	/**colors: {
				'green': '#03c03c',
			},*/
		}
	},

daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#03C03C",
"secondary": "green",
"accent": "#00ffff",
"neutral": "#ff00ff",
"base-100": "#ffffff",
"info": "#0000ff",
"success": "#00ff00",
"warning": "#00ff00",
"error": "#ff0000",
          },
        },
      ],
    },

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
