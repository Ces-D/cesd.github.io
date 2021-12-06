import type { GetServerSidePropsResult, GetStaticProps, NextPage } from "next";
import Container from "../components/Container";
import { GridWrapper } from "../UI/Grid";
import { readdirSync } from "fs";
import { CONTENT_DIRECTORY } from "../utils/data/GrayMatterData";
import BlogDataFactory from "../utils/fileService";
import { dateSort } from "../utils/sort";
import { BlogExcerpt } from "../utils/data/ExcerptData";

type HomePageProps = { posts: BlogExcerpt[] };

const Home: NextPage<HomePageProps> = (props) => {
  return (
    <Container>
      <GridWrapper
        templateColumns="1fr 2fr 1fr"
        rowGap="1em"
        colGap="0.5em"
      ></GridWrapper>
    </Container>
  );
};

// TODO: create the components for the posts
// TODO: access your public repos to post images and pictures for them
export default Home;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetServerSidePropsResult<HomePageProps>
> => {
  const POST_LIMIT = 3;
  const blogFiles = readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" });

  const blogPosts = blogFiles.map(
    async (blogFile) => await BlogDataFactory.returnData("Excerpt", blogFile)
  );

  const dateSortedResponses = await Promise.all(blogPosts).then((res) =>
    dateSort("newest", res)
  );

  return { props: { posts: dateSortedResponses.slice(0, POST_LIMIT) } };
};
