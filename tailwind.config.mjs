/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			colors:{
			  darkBlack: "#060606",
			  darkGray: "#363636",
			  lightGray: "#EAE9E9",
			  ironGray:"#eeeeee",
			}
		  },
	},
	plugins: [],
}
