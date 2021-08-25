import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { readdirSync } from "fs";

import BlogDataFactory from "../../utils/contentFactory";
import { BlogPaths } from "../../utils/PathsData";
import { BlogPost } from "../../utils/PostData";
import { CONTENT_DIRECTORY } from "../../utils/GrayMatterData";

export default function BlogPostPage(props: BlogPost) {
  return (
    <>
      <Head>
        <title>{`${props.title} - Cesar Diaz`}</title>
        <meta name="description" content={props.description} />
      </Head>
      <div className="container">
        <h1>{props.title}</h1>
        <p className="date">{new Date(props.date).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext<BlogPaths>) => {
  const fileData = await BlogDataFactory.returnData("Post", `${context.params!.slug}.md`);
  return {
    props: fileData,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" });

  const blogPaths = files.map(async (file) => {
    const fileData = await BlogDataFactory.returnData("Paths", file);
    return { params: fileData };
  });

  const res = await Promise.all(blogPaths);

  return {
    paths: res,
    fallback: false,
  };
};
