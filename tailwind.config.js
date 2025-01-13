/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
	theme: {
		fontFamily: {
			"work-sans": "Work Sans",
			roboto: "Roboto",
			garamond: "EB Garamond",
		},
		extend: {
			colors: {
				"deep-purple": {
					50: "#eeecf5",
					100: "#d3c6e8",
					200: "#b8a1db",
					300: "#9c7ccd",
					400: "#7f59bf",
					500: "#5E35B1",
					600: "#5631a2",
					700: "#4e2c93",
					800: "#472885",
					900: "#3f2477",
					950: "#381f69",
				},
				teal: {
					50: "#ebf1f0",
					100: "#c5dcd7",
					200: "#9ec7bf",
					300: "#76b2a8",
					400: "#4c9e91",
					500: "#00897B",
					600: "#007d71",
					700: "#007266",
					800: "#00675c",
					900: "#005c52",
					950: "#005149",
				},
				amber: {
					50: "#fff5eb",
					100: "#ffe9c8",
					200: "#ffdca3",
					300: "#ffcf7c",
					400: "#ffc250",
					500: "#FFB300",
					600: "#e9a400",
					700: "#d49500",
					800: "#bf8600",
					900: "#ab7800",
					950: "#976a00",
				},
				offwhite: {
					50: "#fefefe",
					100: "#fcfcfc",
					200: "#fafafa",
					300: "#f8f8f8",
					400: "#f7f7f7",
					500: "#F5F5F5",
					600: "#e0e0e0",
					700: "#cccccc",
					800: "#b8b8b8",
					900: "#a4a4a4",
					950: "#919191",
				},
				"dark-gray": {
					50: "#ececec",
					100: "#c3c3c3",
					200: "#9c9c9c",
					300: "#777777",
					400: "#545454",
					500: "#333333",
					600: "#2f2f2f",
					700: "#2a2a2a",
					800: "#262626",
					900: "#222222",
					950: "#1e1e1e",
				},
			},
			keyframes: {
				fadeInUp: {
					"0%": { opacity: 0, transform: "translateY(50px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				fadeInDown: {
					"0%": { opacity: 0, transform: "translateY(-50px)" },
					"100%": { opacity: 1, transform: "translateY(0)" },
				},
				fadeInLeft: {
					"0%": { opacity: 0, transform: "translateX(-50px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				fadeInRight: {
					"0%": { opacity: 0, transform: "translateX(50px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				fadeOutDown: {
					"0%": { opacity: 1, transform: "translateY(0)" },
					"100%": { opacity: 0, transform: "translateY(50px)" },
				},
				fadeOutUp: {
					"0%": { opacity: 1, transform: "translateY(0)" },
					"100%": { opacity: 0, transform: "translateY(-50px)" },
				},
				fadeOutLeft: {
					"0%": { opacity: 1, transform: "translateX(0)" },
					"100%": { opacity: 0, transform: "translateX(-50px)" },
				},
				fadeOutRight: {
					"0%": { opacity: 1, transform: "translateX(0)" },
					"100%": { opacity: 0, transform: "translateX(50px)" },
				},
				lightSpeedIn: {
					"0%": {
						transform: "translateX(100%) skewX(-30deg)",
						opacity: 0,
					},
					"60%": {
						transform: "translateX(-20px) skewX(20deg)",
						opacity: 1,
					},
					"80%": {
						transform: "translateX(0px) skewX(-5deg)",
						opacity: 1,
					},
					"100%": {
						transform: "translateX(0px) skewX(0deg)",
						opacity: 1,
					},
				},
				lightSpeedOut: {
					"0%": {
						transform: "translateX(0px) skewX(0deg)",
						opacity: 1,
					},
					"100%": {
						transform: "translateX(100%) skewX(30deg)",
						opacity: 0,
					},
				},
				slideInUp: {
					"0%": {
						transform: "translateY(100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
				slideInDown: {
					"0%": {
						transform: "translateY(-100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
				slideInLeft: {
					"0%": {
						transform: "translateX(-100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateX(0)",
						opacity: 1,
					},
				},
				slideInRight: {
					"0%": {
						transform: "translateX(100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateX(0)",
						opacity: 1,
					},
				},
				rotateInDownRight: {
					"0%": {
						transform: "rotate(-45deg)",
						opacity: 0,
					},
					"100%": {
						transform: "rotate(0deg)",
						opacity: 1,
					},
				},
				rotateInDownLeft: {
					"0%": {
						transform: "rotate(45deg)",
						opacity: 0,
					},
					"100%": {
						transform: "rotate(0deg)",
						opacity: 1,
					},
				},
				rotateInUpRight: {
					"0%": {
						transform: "rotate(45deg)",
						opacity: 0,
					},
					"100%": {
						transform: "rotate(0deg)",
						opacity: 1,
					},
				},
				rotateInUpLeft: {
					"0%": {
						transform: "rotate(-45deg)",
						opacity: 0,
					},
					"100%": {
						transform: "rotate(0deg)",
						opacity: 1,
					},
				},
				slideInUp: {
					"0%": {
						transform: "translateY(100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
				slideInDown: {
					"0%": {
						transform: "translateY(-100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: 1,
					},
				},
				slideInLeft: {
					"0%": {
						transform: "translateX(-100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateX(0)",
						opacity: 1,
					},
				},
				slideInRight: {
					"0%": {
						transform: "translateX(100%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateX(0)",
						opacity: 1,
					},
				},
				slideOutUp: {
					"0%": {
						transform: "translateY(0)",
						opacity: 1,
					},
					"100%": {
						transform: "translateY(-100%)",
						opacity: 0,
					},
				},
				slideOutDown: {
					"0%": {
						transform: "translateY(0)",
						opacity: 1,
					},
					"100%": {
						transform: "translateY(100%)",
						opacity: 0,
					},
				},
				slideOutLeft: {
					"0%": {
						transform: "translateX(0)",
						opacity: 1,
					},
					"100%": {
						transform: "translateX(-100%)",
						opacity: 0,
					},
				},
				slideOutRight: {
					"0%": {
						transform: "translateX(0)",
						opacity: 1,
					},
					"100%": {
						transform: "translateX(100%)",
						opacity: 0,
					},
				},
				bounce: {
					"0%, 20%, 50%, 80%, 100%": {
						transform: "translateY(0)",
					},
					"40%": {
						transform: "translateY(-30px)",
					},
					"60%": {
						transform: "translateY(-15px)",
					},
				},
				flash: {
					"0%, 50%, 100%": {
						opacity: 1,
					},
					"25%, 75%": {
						opacity: 0,
					},
				},
				pulse: {
					"0%": {
						transform: "scale(1)",
					},
					"50%": {
						transform: "scale(1.05)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
				shake: {
					"0%, 100%": {
						transform: "translateX(0)",
					},
					"10%, 30%, 50%, 70%, 90%": {
						transform: "translateX(-10px)",
					},
					"20%, 40%, 60%, 80%": {
						transform: "translateX(10px)",
					},
				},
				rubberBand: {
					"0%": {
						transform: "scale(1)",
					},
					"30%": {
						transform: "scale(1.25, 0.75)",
					},
					"40%": {
						transform: "scale(0.75, 1.25)",
					},
					"50%": {
						transform: "scale(1.15, 0.85)",
					},
					"65%": {
						transform: "scale(0.95, 1.05)",
					},
					"75%": {
						transform: "scale(1.05, 0.95)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
				jello: {
					"0%, 100%": {
						transform: "scale3d(1, 1, 1)",
					},
					"11.1%, 22.2%": {
						transform: "scale3d(0.9, 1.1, 1)",
					},
					"33.3%": {
						transform: "scale3d(1.1, 0.9, 1)",
					},
					"44.4%": {
						transform: "scale3d(0.95, 1.05, 1)",
					},
					"55.5%": {
						transform: "scale3d(1.05, 0.95, 1)",
					},
					"66.6%": {
						transform: "scale3d(1.02, 0.98, 1)",
					},
					"77.7%": {
						transform: "scale3d(0.98, 1.02, 1)",
					},
					"88.8%": {
						transform: "scale3d(1.01, 0.99, 1)",
					},
				},
				hinge: {
					"0%": {
						transform: "rotate(0deg)",
						transformOrigin: "top left",
						opacity: 1,
					},
					"20%, 60%": {
						transform: "rotate(80deg)",
						transformOrigin: "top left",
						opacity: 1,
					},
					"40%, 80%": {
						transform: "rotate(60deg)",
						transformOrigin: "top left",
						opacity: 1,
					},
					"100%": {
						transform: "translateY(700px)",
						opacity: 0,
					},
				},
				jackInTheBox: {
					"0%": {
						opacity: 0,
						transform: "scale(0.1) rotate(30deg)",
						transformOrigin: "center bottom",
					},
					"50%": {
						opacity: 0.5,
						transform: "scale(0.5) rotate(-10deg)",
					},
					"70%": {
						opacity: 0.7,
						transform: "scale(0.7) rotate(3deg)",
					},
					"100%": {
						opacity: 1,
						transform: "scale(1) rotate(0deg)",
					},
				},
				parallax: {
					"0%": {
						transform: "translateY(0%)",
					},
					"100%": {
						transform: "translateY(-20%)",
					},
				},
			},
			animation: {
				fadeInUp: "fadeInUp 1s ease-out forwards",
				fadeInDown: "fadeInDown 1s ease-out forwards",
				fadeInLeft: "fadeInLeft 1s ease-out forwards",
				fadeInRight: "fadeInRight 1s ease-out forwards",
				fadeOutDown: "fadeOutDown 1s ease-out forwards",
				fadeOutUp: "fadeOutUp 1s ease-out forwards",
				fadeOutLeft: "fadeOutLeft 1s ease-out forwards",
				fadeOutRight: "fadeOutRight 1s ease-out forwards",
				lightSpeedIn: "lightSpeedIn 1s ease-out forwards",
				lightSpeedOut: "lightSpeedOut 1s ease-in forwards",
				slideInUp: "slideInUp 0.5s ease-out forwards",
				slideInDown: "slideInDown 0.5s ease-out forwards",
				slideInLeft: "slideInLeft 0.5s ease-out forwards",
				slideInRight: "slideInRight 0.5s ease-out forwards",
				rotateInDownRight: "rotateInDownRight 0.75s ease-out forwards",
				rotateInDownLeft: "rotateInDownLeft 0.75s ease-out forwards",
				rotateInUpRight: "rotateInUpRight 0.75s ease-out forwards",
				rotateInUpLeft: "rotateInUpLeft 0.75s ease-out forwards",
				slideInUp: "slideInUp 0.5s ease-out forwards",
				slideInDown: "slideInDown 0.5s ease-out forwards",
				slideInLeft: "slideInLeft 0.5s ease-out forwards",
				slideInRight: "slideInRight 0.5s ease-out forwards",
				slideOutUp: "slideOutUp 0.5s ease-in forwards",
				slideOutDown: "slideOutDown 0.5s ease-in forwards",
				slideOutLeft: "slideOutLeft 0.5s ease-in forwards",
				slideOutRight: "slideOutRight 0.5s ease-in forwards",
				bounce: "bounce 1s infinite",
				flash: "flash 1.5s infinite",
				pulse: "pulse 2s infinite",
				shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
				rubberBand: "rubberBand 1s both",
				jello: "jello 0.9s both",
				hinge: "hinge 2s ease-in-out forwards",
				jackInTheBox: "jackInTheBox 1s ease-in-out forwards",
				parallax: "parallax 10s linear infinite",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						pre: {
							color: theme("colors.gray.200"),
							backgroundColor: theme("colors.gray.800"),
						},
						code: {
							color: theme("colors.gray.200"),
							backgroundColor: theme("colors.gray.800"),
							padding: "0.25rem",
							borderRadius: "0.25rem",
							fontWeight: "400",
						},
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(({ addComponents, addUtilities }) => {
			addUtilities({
				".kepson-transition": {
					"transition-property": "all",
					"transition-timing-function": "ease-out",
					"transition-duration": "200ms",
					"transition-delay": "75ms",
				},
			});
			addComponents({
				".img-base": {
					"@apply rounded-xl shadow-xl": {},
				},
				".heading-one": {
					"@apply font-roboto font-semibold leading-snug select-none text-4xl text-dark-gray-950 md:text-5xl lg:text-6xl":
						{},
				},
				".heading-two": {
					"@apply font-medium font-roboto leading-normal text-4xl text-dark-gray-500 md:text-5xl lg:text-6xl":
						{},
				},
				".heading-three": {
					"@apply font-light font-work-sans leading-normal text-3xl text-dark-gray-500 text-opacity-95 md:text-4xl lg:text-5xl":
						{},
				},
				".heading-four": {
					"@apply font-extralight font-work-sans leading-relaxed text-2xl text-dark-gray-500 md:text-3xl lg:text-4xl":
						{},
				},
				".button-base": {
					"@apply font-work-sans grid place-content-center px-8 py-4 rounded-sm shadow text-lg hover:shadow-none kepson-transition":
						{},
				},
				".button-purple": {
					"@apply button-base bg-deep-purple-500 text-offwhite-500 hover:bg-deep-purple-400": {},
				},
				".button-teal": {
					"@apply button-base bg-teal-500 text-offwhite-500 hover:bg-teal-400": {},
				},
				".button-amber": {
					"@apply button-base bg-amber-500 text-dark-gray-500 hover:bg-amber-400": {},
				},
			});
		}),
	],
};
