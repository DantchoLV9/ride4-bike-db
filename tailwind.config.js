const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			bg: "#f3f5f9",
			fg: "#333534",
			white: colors.white,
			coolGray: colors.coolGray,
			blue: colors.blue,
			red: colors.red,
			green: colors.green,
			purple: colors.purple,
			yellow: colors.yellow,
		},
		fontFamily: {
			body: ['"Barlow"'],
		},
		flex: {
			1: "1 1 0%",
			2: "2 2 0%",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
