import { readdirSync } from "fs";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Container from "../../components/Container";
import BlogDataFactory from "../../utils/blog/BlogDataFactory";
import { sortBlogPosts } from "../../utils/blog/sort";
import { BlogCard } from "../../utils/blog/models/CardData";
import { CONTENT_DIRECTORY } from "../../utils/blog/models/GrayMatterData";

type BlogHomePageProps = { posts: BlogCard[] };

const BlogHome: NextPage<BlogHomePageProps> = (props) => {
  return (
    <Container>
      <>
        <div>Hello from Blog Home</div>
        {props.posts.map((post) => (
          <div>{post.title}</div>
        ))}
      </>
    </Container>
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

// TODO: complete the styling for both this and slug
