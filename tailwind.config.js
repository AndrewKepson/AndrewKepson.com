/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {
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
	],
};
