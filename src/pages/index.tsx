import type { GetServerSidePropsResult, GetStaticProps, NextPage } from "next";
import { readdirSync } from "fs";
import { CONTENT_DIRECTORY } from "../utils/blog/models/GrayMatterData";
import BlogDataFactory from "../utils/blog/BlogDataFactory";
import { sortBlogPosts } from "../utils/blog/sort";
import { sortRepos } from "../utils/repos/sort";
import { BlogExcerpt } from "../utils/blog/models/ExcerptData";
import GithubAccessor from "../utils/repos/GithubAccessor";
import { GithubRepo } from "../utils/repos/models/GithubRepoData";

import HomePage from "../components/Home";

export type HomePageProps = { posts: BlogExcerpt[]; repos: GithubRepo[] };

const Home: NextPage<HomePageProps> = (props) => {
  return <HomePage {...props} />;
};

export default Home;

// Grab minimalist data for the Highlight blog posts and repos
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
    sortBlogPosts("newest", res)
  );

  const githubAccess = new GithubAccessor(true);

  const dateSortedGithubRepos = await githubAccess
    .accessRepoData()
    .then((res) => sortRepos("newest", res));

  return {
    props: {
      posts: dateSortedBlogPosts.slice(0, POST_LIMIT),
      repos: dateSortedGithubRepos.slice(0, REPO_LIMIT),
    },
  };
};
