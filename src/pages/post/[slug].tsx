import React from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { readdirSync } from "fs";

import BlogDataFactory from "../../utils/contentFactory";
import { BlogPaths } from "../../utils/data/PathsData";
import { BlogPost } from "../../utils//data/PostData";
import { CONTENT_DIRECTORY } from "../../utils/data/GrayMatterData";

export default function BlogPostPage(props: BlogPost) {
  return (
    <>
      <Head>
        <title>{`${props.title} - Cesar Diaz`}</title>
        <meta name="description" content={props.description} />
      </Head>
      <div className="flex flex-grow flex-col gap-y-4">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="opacity-50">{props.date}</p>
        <div className="w-full h-60 sm:h-96 relative object-center">
          <Image
            src={props.coverImage}
            layout="fill"
            objectFit="cover"
            alt={props.title + "cover image"}
          />
        </div>
        <article
          className="blog-content prose prose-yellow"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
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
