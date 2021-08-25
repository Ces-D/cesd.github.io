import React from "react";
import { readdirSync } from "fs";
import { GetStaticProps } from "next";

import BlogDataFactory from "../utils/contentFactory";
import { CONTENT_DIRECTORY } from "../utils/GrayMatterData";
import { BlogArchive } from "../utils/ArchiveData";

type Props = { posts: BlogArchive[] };

export default function Archive({ posts }: Props) {
  return (
    <div className="container">
      <ul>
        {posts.map((archive) => (
          <li>
            <h2>
              <a href={`post/${archive.slug}`}>{archive.title}</a>
            </h2>
            <p className="date">{archive.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" });

  const blogCards = files.map(async (file) => {
    const fileData = await BlogDataFactory.returnData("Archive", file);
    return fileData;
  });

  const res = await Promise.all(blogCards);

  return {
    props: { posts: res },
  };
};
