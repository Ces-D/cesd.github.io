import type { GetServerSidePropsResult, GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import { CONTENT_DIRECTORY } from "../utils/data/GrayMatterData";
import BlogDataFactory from "../utils/fileService";
import { dateSort, repoSort } from "../utils/sort";
import { BlogExcerpt } from "../utils/data/ExcerptData";
import GithubData, { RepoData } from "../utils/data/GithubData";

import HomePage from "../components/Home";

export type HomePageProps = { posts: BlogExcerpt[]; repos: RepoData[] };

const Home: NextPage<HomePageProps> = (props) => {
  return <HomePage {...props} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetServerSidePropsResult<HomePageProps>
> => {
  const REPO_LIMIT = 3;
  const POST_LIMIT = 4;

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
      repos: dateSortedGithubRepos.slice(0, REPO_LIMIT),
    },
  };
};
