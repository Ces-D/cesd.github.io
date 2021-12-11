import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Container from "../components/Container";
import GithubAccessor from "../utils/repos/GithubAccessor";
import { GithubRepo } from "../utils/repos/models/GithubRepoData";
import { sortRepos } from "../utils/repos/sort";

type ProjectsPageProps = { projects: GithubRepo[] };

const Projects: NextPage<ProjectsPageProps> = (props) => {
  return (
    <Container>
      <>
        <div>Hello Projects</div>
        {props.projects.map((project) => (
          <div>{project.fullName}</div>
        ))}
      </>
    </Container>
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

// TODO: complete the styling
