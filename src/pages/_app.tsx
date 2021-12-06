import type { AppProps } from "next/app";
import { theme } from "../UI/theme";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    background-color: #FDFDFD;
    color:#101010;
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
