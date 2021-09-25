module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				bg: "#f3f5f9",
				fg: "#333534",
			},
			fontFamily: {
				body: ['"Barlow"'],
			},
			flex: {
				1: "1 1 0%",
				2: "2 2 0%",
			},
			inset: {
				"1/20": "5%",
				"1/10": "10%",
				"16/25": "64%",
				"-1/20": "-5%",
				"-1/10": "-10%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
