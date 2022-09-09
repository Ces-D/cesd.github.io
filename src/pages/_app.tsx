import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import "@/styles/globals.css"

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
