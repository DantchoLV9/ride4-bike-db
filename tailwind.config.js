const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			bg: "#f3f5f9",
			fg: "#333534",
			white: colors.white,
			blue: colors.blue,
		},
		fontFamily: {
			body: ['"Barlow"'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
