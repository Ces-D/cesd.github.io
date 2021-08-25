import React from "react";
import { readdirSync } from "fs";
import { GetStaticProps } from "next";
import ArticleCard from "../components/ArticleCard";

import BlogDataFactory from "../utils/contentFactory";
import { BlogCard } from "../utils/CardData";
import { CONTENT_DIRECTORY } from "../utils/GrayMatterData";

type Props = {
  posts: BlogCard[];
};

export default function HomePage({ posts }: Props) {
  return (
    <div className="container">
      {posts.map((post, index) => (
        <ArticleCard
          key={index}
          title={post.title}
          slug={post.slug}
          coverImage={post.coverImage}
          date={post.date}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" });

  const blogCards = files.map(async (file) => {
    const fileData = await BlogDataFactory.returnData("Card", file);
    return fileData;
  });

  const res = await Promise.all(blogCards);

  return {
    props: { posts: res },
  };
};
