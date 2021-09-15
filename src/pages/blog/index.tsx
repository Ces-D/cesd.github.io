import React from "react";
import { readdirSync } from "fs";
import { GetStaticProps, GetStaticPropsResult } from "next";

import Blogs from "../../components/routes/Blogs";

import BlogDataFactory from "../../utils/contentFactory";
import { CONTENT_DIRECTORY } from "../../utils/data/GrayMatterData";
import { dateSort } from "../../utils/sort";
import { BlogCard } from "../../utils/data/CardData";

export default function BlogsPage(props: { posts: BlogCard[] }) {
  return <Blogs posts={props.posts} />;
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<{ posts: BlogCard[] }>
> => {
  const blogFiles = readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" });

  const blogPosts = blogFiles.map(async (blogFile) => {
    return await BlogDataFactory.returnData("Card", blogFile);
  });

  const dateSortedResponses = await Promise.all(blogPosts).then((res) => {
    return dateSort("newest", res);
  });

  return {
    props: { posts: dateSortedResponses },
    revalidate: 30,
  };
};
