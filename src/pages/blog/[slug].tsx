import { GetStaticPaths, GetStaticPropsContext } from "next";
import { readdirSync } from "fs";

import Blog from "../../components/BlogPost";

import BlogDataFactory from "../../utils/contentFactory";
import { BlogPaths } from "../../utils/data/PathsData";
import { BlogPost } from "../../utils/data/PostData";
import { CONTENT_DIRECTORY } from "../../utils/data/GrayMatterData";

export default function BlogPostPage(props: BlogPost) {
  return <Blog {...props} />;
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
