import { readdirSync } from "fs";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from "next";
import BlogDataFactory from "../../utils/blog/BlogDataFactory";
import { CONTENT_DIRECTORY } from "../../utils/blog/models/GrayMatterData";
import { BlogPaths } from "../../utils/blog/models/PathsData";
import { BlogPost } from "../../utils/blog/models/PostData";
import BlogPostSlugPage from "../../components/Blog/Slug";

type BlogPostPageProps = { data: BlogPost };

const BlogPostPage: NextPage<BlogPostPageProps> = (props) => {
  return <BlogPostSlugPage {...props.data} />;
};

export default BlogPostPage;

// Grab the file data from the slug
export const getStaticProps = async (
  context: GetStaticPropsContext<BlogPaths>
): Promise<GetStaticPropsResult<BlogPostPageProps>> => {
  const fileData = await BlogDataFactory.returnData("Post", `${context.params!.slug}.md`);

  return {
    props: { data: fileData },
  };
};

// Grab all the slugs and create the paths
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

// TODO: complete the styling of this page
