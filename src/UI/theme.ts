export const theme = {
  colors: {
    // main
    primaryBlue: `#13617A`,
    primaryBrown: "#7A532B",
    secondaryBlue: "#0C98C7",
    secondaryBrown: "#C76E1B",
    // neutrals
    black: "#101010",
    white: "#FDFDFD",
    neutralBlue: "#0C98C74F",
    neutralBrown: "#C76E1B69",
    // error
    red: "#891900",
  },
};

declare module "styled-components" {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}
