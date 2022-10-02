import type { AppProps } from "next/app";
import "@/styles/globals.css"

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}


////https://vanslaars.io/articles/support-syntax-highlighting-and-heading-links-with-mdx-rehype
// https://github.com/hashicorp/next-mdx-remote