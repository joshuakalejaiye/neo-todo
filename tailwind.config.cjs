/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		fontFamily: {
			sans: ['Space Grotesk', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {
			colors: {
				'dark-blue': '#1b4d7a',
				'light-blue': '#26B7C5',
				yellow: '#FFD12F',
				'off-yellow': '#ffd12f8c',
				'light-cream': '#FBF9EE',
				cream: '#F3EDCF',
				red: '#DB6163'
			},
			spacing: {
				100: '28rem',
				128: '32rem',
				200: '42rem'
			},
			minHeight: {
				'1/2': '60px'
			}
		}
	},
	plugins: []
};
