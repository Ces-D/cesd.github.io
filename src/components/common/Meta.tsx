import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  articleDate?: string;
};

export default function Meta(props: Props) {
  const meta = {
    title: `${props.title ?? "Building, Learning, Developing"} - Cesar Diaz`,
    description: props.description ?? "Code connoisseur, Web developer, and blogger",
    type: "website",
    date: props.articleDate,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Cesar Diaz" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      {meta.date && <meta property="article:published_time" content={meta.date} />}
    </Head>
  );
}
