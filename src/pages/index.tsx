import React from "react";
import { readdirSync } from "fs";
import { GetStaticProps, GetStaticPropsResult } from "next";
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

  const response = await Promise.all(blogCards).then((res) => {
    res.sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      if (aDate > bDate) {
        return 1;
      } else if (aDate < bDate) {
        return -1;
      } else {
        return 0;
      }
    });

    return res;
  });

  return {
    props: { posts: response },
    revalidate: 30,
  };
};
