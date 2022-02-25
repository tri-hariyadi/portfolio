module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			kaushan: ['Kaushan Script'],
		},
		// boxShadow: {
		// 	'custom-light': ' 0 0 10px #313131',
		// 	'custom-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c',
		// },
		extend: {
			colors: {
				green: {
					DEFAULT: '#00F260',
				},
				dark: {
					DEFAULT: '#010101',
					100: '#0A0B0E',
					200: '#16181D',
					300: '#16181D',
					500: '#0F1115',
					700: '#1f1f1f',
				},
				'custom-light': '#313131',
				'custom-dark': '#14161c',
			},
			height: {
				128: 'calc(100% + 30px)',
			},
			boxShadow: {
				'custom-light': ' 0 0 10px #313131',
				'custom-dark': '5px 5px 10px #0a0c0e , -5px -5px 10px #14161c',
			}
		},
	},
	variants: {
		extend: {
			boxShadow: ['dark'],
		},
	},
	plugins: [],
};
