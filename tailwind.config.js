/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"slide-in-left":
					"slide-in-left 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
			},
			keyframes: {
				"slide-in-left": {
					"0%": {
						transform: "translateX(-1000px)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0)",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [],
};
