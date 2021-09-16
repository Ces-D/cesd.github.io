import React from "react";
import { GetStaticProps, GetStaticPropsResult } from "next";
import { readdirSync } from "fs";

import Home from "../components/routes/Home";

import { BlogExcerpt } from "../utils/data/ExcerptData";
import { CONTENT_DIRECTORY } from "../utils/data/GrayMatterData";
import BlogDataFactory from "../utils/contentFactory";
import { dateSort } from "../utils/sort";

export default function HomePage(props: { posts: BlogExcerpt[] }) {
  return <Home posts={props.posts} />;
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ posts: BlogExcerpt[] }>
> => {
  const CARD_LIMIT = 5;
  const blogFiles = readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" });

  const blogPosts = blogFiles.map(async (blogFile) => {
    return await BlogDataFactory.returnData("Excerpt", blogFile);
  });

  const dateSortedResponses = await Promise.all(blogPosts).then((res) => {
    return dateSort("newest", res);
  });

  const sliceSortedResponses = dateSortedResponses.slice(0, CARD_LIMIT);

  return {
    props: { posts: sliceSortedResponses },
    revalidate: 30,
  };
};

// TODO check out his code to see how he implements everything
// https://github.com/varunyn/til/blob/main/pages/blog/%5Bslug%5D.js
// https://varunyadav.com/how-to-use-bitbucket-pipeline-to-deploy-to-oracle-container-engine-for-kubernetes-oke/
