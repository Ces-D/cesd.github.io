import type { GetServerSidePropsResult, GetStaticProps, NextPage } from "next";
import Container from "../components/Container";
import { GridWrapper } from "../UI/Grid";
import { readdirSync } from "fs";
import { CONTENT_DIRECTORY } from "../utils/data/GrayMatterData";
import BlogDataFactory from "../utils/fileService";
import { dateSort, repoSort } from "../utils/sort";
import { BlogExcerpt } from "../utils/data/ExcerptData";
import GithubData, { RepoData } from "../utils/data/GithubData";
import Card from "../components/Card";
import { H2, P1, P3 } from "../UI/Typography";

type HomePageProps = { posts: BlogExcerpt[]; repos: RepoData[] };

const Home: NextPage<HomePageProps> = (props) => {
  return (
    <Container>
      <GridWrapper templateColumns="1fr 2fr 1fr" rowGap="1em" colGap="0.5em">
        <div>
          <Card
            colSpan={1}
            location={props.repos[1].html_url}
            imgSrc="https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          >
            <>
              <H2>{props.repos[1].name.toUpperCase()}</H2>
              <P3>{props.repos[1].updated_at}</P3>
            </>
          </Card>
          <Card
            colSpan={1}
            location={props.repos[2].html_url}
            imgSrc="https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          >
            <>
              <H2>{props.repos[2].name.toUpperCase()}</H2>
              <P3>{props.repos[2].updated_at}</P3>
            </>
          </Card>
        </div>
        <Card
          colSpan={1}
          location={props.repos[0].html_url}
          imgSrc="https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        >
          <>
            <H2>{props.repos[0].name.toUpperCase()}</H2>
            <P1>{props.repos[0].description.toUpperCase()}</P1>
            <P3>{props.repos[0].updated_at}</P3>
          </>
        </Card>
      </GridWrapper>
    </Container>
  );
};

// TODO: create the components for the posts

export default Home;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetServerSidePropsResult<HomePageProps>
> => {
  const POST_LIMIT = 3;

  const blogFiles = readdirSync(CONTENT_DIRECTORY, { encoding: "utf-8" });
  const blogPosts = blogFiles.map(
    async (blogFile) => await BlogDataFactory.returnData("Excerpt", blogFile)
  );
  const dateSortedBlogPosts = await Promise.all(blogPosts).then((res) =>
    dateSort("newest", res)
  );

  const dateSortedGithubRepos = await new GithubData()
    .Repos()
    .then((repos) => repoSort("newest", repos));

  return {
    props: {
      posts: dateSortedBlogPosts.slice(0, POST_LIMIT),
      repos: dateSortedGithubRepos.slice(0, POST_LIMIT),
    },
  };
};
