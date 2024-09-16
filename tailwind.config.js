/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
	theme: {
		fontFamily: {
			"work-sans": "Work Sans",
			roboto: "Roboto",
			garamond: "EB Garamond",
		},
		extend: {
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
	plugins: [require("@tailwindcss/typography")],
};
