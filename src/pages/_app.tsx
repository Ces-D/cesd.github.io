import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import "../globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Header />
      <div className="mx-auto mt-10 w-full sm:w-2/3 lg:w-1/2">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
