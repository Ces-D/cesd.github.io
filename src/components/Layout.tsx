import Head from "next/head"
import type { PropsWithChildren } from "react"

type Props = {
  title?: string;
  description?: string;
  date?: string;
}

const Layout = ({ title, description, date, children }: PropsWithChildren<Props>) => {
  const metaTags = {
    title: `${title || "Building, Learning, Developing"} - Cesar Diaz`,
    description: description || "Web developer",
    type: "website",
    date
  }


  return (
    <>
      <Head>
        <title>{metaTags.title}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta property="og:type" content={metaTags.type} />
        <meta property="og:site_name" content="Cesar Diaz" />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:title" content={metaTags.title} />
        {metaTags.date && <meta property="article:published_time" content={metaTags.date} />}
      </Head>
      <main className="bg-zinc-900 min-h-screen text-gray-50 px-3 pt-5">
        {children}
      </main>
    </>
  )
}

export default Layout
