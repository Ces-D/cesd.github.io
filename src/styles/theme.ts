import 'styled-components'

const theme = {
	palette: {
		major: {
			alpha: "#0B091B", 	// background
			beta: "#464269", 		// actual main
			omega: "#222032" 		// shade of main
		},
		minor: {
			a: "#82529C", 		// compound harmony 1
			b: "#9C8252", 		// compound harmony 2
			c: "#757267"		// compound harmony 3
		},
		success: "#3D6952",		// double split-complimentary 1
		warning: "#696137",		// double split-complimentary 2
		error: "#694F4C",		// double split-complimentary 3
	},
	typography: {
		400: "clamp(0.625rem, 0.538rem + 0.4348vw, 0.875rem)" // 10/320 -> 14/1240 (font-size / viewport)
	}

}

export default theme

declare module 'styled-components' {
	type Theme = typeof theme;
	export interface DefaultTheme extends Theme {

	}
}
