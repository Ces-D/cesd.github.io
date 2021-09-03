import Head from "next/head";
import Header from "./Header";

type Props = {
  title?: string;
  description?: string;
  articleDate?: string;
  children: React.ReactChild;
};

export default function Container(props: Props) {
  const meta = {
    title: props.title || "Cesar Diaz - Building, Learning, Developing",
    description: props.description || "Code connoisseur, Web developer, and blogger",
    type: "website",
    date: props.articleDate,
  };

  return (
    <div>
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
      <main className="px-6">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        {props.children}
        </div>
        </main>
    </div>
  );
}
