const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			nimbus: ['Nimbus Sans Becker PBla', 'sans-serif'],
			nimbusSans: ['Nimbus sans', 'sans-serif'],
			noto: ['Noto Sans KR', 'sans-serif'],
		},
		extend: {
			screens: {
				xs: '475px',
				...defaultTheme.screens,
			},
		},
	},
	plugins: [],
}
