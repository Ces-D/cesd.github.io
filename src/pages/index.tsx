import type { GetServerSidePropsResult, GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import { CONTENT_DIRECTORY } from "../utils/data/posts/GrayMatterData";
import BlogDataFactory from "../utils/fileService";
import { dateSort, repoSort } from "../utils/sort";
import { BlogExcerpt } from "../utils/data/posts/ExcerptData";
import GithubAccessor from "../utils/data/repos/GithubAccessor";
import { GithubRepo } from "../utils/data/repos/GithubRepoData";

import HomePage from "../components/Home";

export type HomePageProps = { posts: BlogExcerpt[]; repos: GithubRepo[] };

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

  const githubAccess = new GithubAccessor();

  const dateSortedGithubRepos = await githubAccess
    .accessRepoData()
    .then((res) => repoSort("newest", res));

  return {
    props: {
      posts: dateSortedBlogPosts.slice(0, POST_LIMIT),
      repos: dateSortedGithubRepos.slice(0, REPO_LIMIT),
    },
  };
};
