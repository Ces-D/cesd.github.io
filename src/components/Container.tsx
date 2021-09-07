import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  title?: string;
  description?: string;
  articleDate?: string;
  children: React.ReactChild;
};

export default function Container(props: Props) {
  const meta = {
    title: props.title || "Building, Learning, Developing - Cesar Diaz",
    description: props.description || "Code connoisseur, Web developer, and blogger",
    type: "website",
    date: props.articleDate,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Cesar Diaz" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <Header />
      <main className="px-6 container">
        <div className="flex flex-col justify-center items-start max-w-xl mx-auto">
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
}
