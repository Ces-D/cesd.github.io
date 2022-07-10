import 'styled-components'

const theme = {
	palette: {
		// background 
		eerie_black: "#181A1B",

		// status items
		success: "#3D6952",			// double split-complimentary 1
		warning: "#696137",			// double split-complimentary 2
		error: "#694F4C",			// double split-complimentary 3

		// colors
		purple_mountain: "#9C6FB3",
		light_french: "#CDB589",
		silver: "#C3C1BB",

		raisin_black: "#222032",
		rhythm: "#8682B0",
	},
	typography: {
		400: "clamp(0.625rem, 0.538rem + 0.4348vw, 0.875rem)" // 10/320 -> 14/1240 (font-size / viewport)
	}

}

export default theme

declare module 'styled-components' {
	type Theme = typeof theme;
	export interface DefaultTheme extends Theme { }
}
