import type { AppProps } from "next/app";
import { theme } from "../UI/theme";
import { ThemeProvider } from "styled-components";
import "../app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
