import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				spinmorpth: {
					"0%": { transform: "rotate(0deg)" },
					"50%": { transform: "scale(1 1.5)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			colors: {
				background: "var(--background)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
