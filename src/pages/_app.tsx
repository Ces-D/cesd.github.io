import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components"
import AppTheme from "@/styles/theme"

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Cascadia Code';
  src: url('assets/Caskaydia Cove Nerd Font Complete.ttf') format('ttf');
  font-style: normal;
  font-weight: 400;
}

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    overflow-y: scroll;
    font-family: 'Cascadia Code'
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={AppTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
