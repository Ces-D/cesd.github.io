import React from "react";
import { readdirSync } from "fs";
import { GetStaticProps } from "next";

import Home from "../components/Home";

import BlogDataFactory from "../utils/contentFactory";
import { CONTENT_DIRECTORY } from "../utils/data/GrayMatterData";
import { postsAfterDate } from "../utils/fileService";
import { dateSort } from "../utils/sort";
import { BlogCard } from "../utils/data/CardData";

export default function HomePage(props: { posts: BlogCard[] }) {
  return <Home posts={props.posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const filesAfterDate = postsAfterDate(
    "Six-Months",
    readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" })
  );

  const blogCards = filesAfterDate.map(async (file) => {
    const fileData = await BlogDataFactory.returnData("Card", file);
    return fileData;
  });

  const response = await Promise.all(blogCards).then((res) => {
    return dateSort("newest", res);
  });

  return {
    props: { posts: response },
    revalidate: 30,
  };
};
