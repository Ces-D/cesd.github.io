import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Meta from "../components/common/Meta";
import ProjectsPage from "../components/Projects";
import GithubAccessor from "../utils/repos/GithubAccessor";
import { GithubRepo } from "../utils/repos/models/GithubRepoData";
import { sortRepos } from "../utils/repos/sort";

export type ProjectsPageProps = { projects: GithubRepo[] };

const Projects: NextPage<ProjectsPageProps> = (props) => {
  return (
    <>
      <Meta title="Projects" description="List of past projects and github repos" />
      <ProjectsPage {...props} />
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<ProjectsPageProps>
> => {
  const githubAccess = new GithubAccessor(false);

  const dateSortedGithubRepos = await githubAccess
    .accessRepoData()
    .then((res) => sortRepos("newest", res));

  return {
    props: { projects: dateSortedGithubRepos },
  };
};
