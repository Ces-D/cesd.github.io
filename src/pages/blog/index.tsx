import { readdirSync } from "fs";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import BlogDataFactory from "../../utils/blog/BlogDataFactory";
import { sortBlogPosts } from "../../utils/blog/sort";
import { BlogCard } from "../../utils/blog/models/CardData";
import { CONTENT_DIRECTORY } from "../../utils/blog/models/GrayMatterData";
import BlogHomePage from "../../components/Blog";
import Meta from "../../components/common/Meta";

export type BlogHomePageProps = { posts: BlogCard[] };

const BlogHome: NextPage<BlogHomePageProps> = (props) => {
  return (
    <>
      <Meta title="Blog Posts" description="List of blog posts" />
      <BlogHomePage {...props} />
    </>
  );
};

export default BlogHome;

// Grab excerpt data for the blog posts
export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<BlogHomePageProps>
> => {
  const blogFiles = readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" });
  const blogPosts = blogFiles.map(async (blogFile) => {
    return await BlogDataFactory.returnData("Card", blogFile);
  });

  const dateSortedResponses = await Promise.all(blogPosts).then((res) => {
    return sortBlogPosts("newest", res);
  });

  return {
    props: { posts: dateSortedResponses },
  };
};
