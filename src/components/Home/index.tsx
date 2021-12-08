import styled from "styled-components";
import { HomePageProps } from "../../pages";
import { H2, H3, P3, P1 } from "../../UI/Typography";
import RepoCard from "./RepoCard";
import Container from "../Container";
import PostCard from "./PostCard";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media ${(props) => props.theme.breakPoints.laptop} {
    flex-direction: row;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media ${(props) => props.theme.breakPoints.tablet} {
    grid-column-gap: 1em;
    grid-template-columns: 1fr 2fr;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    width: 74%;
  }
`;

const RightColContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  @media ${(props) => props.theme.breakPoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    margin-left: 1em;
    width: 30%;
    grid-template-columns: 1fr;
  }
`;

export default function HomePage(props: HomePageProps) {
  const heroRepo = props.repos[0];
  const secondRepo = props.repos[1];
  const thirdRepo = props.repos[2];

  return (
    <Container leftRightSpace>
      <Flex>
        <Grid>
          {/* Left Column - contains secondary repos */}
          <div>
            <RepoCard
              cardLink={secondRepo.html_url}
              imgSrc={
                "https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
            >
              <>
                <H2>{secondRepo.name.toUpperCase()}</H2>
                <P3>{secondRepo.updated_at}</P3>
              </>
            </RepoCard>
            <RepoCard
              cardLink={thirdRepo.html_url}
              imgSrc={
                "https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
            >
              <>
                <H2>{thirdRepo.name.toUpperCase()}</H2>
                <P3>{thirdRepo.updated_at}</P3>
              </>
            </RepoCard>
          </div>
          {/* Hero Column - contains hero repo */}
          <RepoCard
            cardLink={heroRepo.html_url}
            imgSrc={
              "https://images.unsplash.com/photo-1638729330060-b9bafd5f9eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            hero={true}
          >
            <>
              <H2>{heroRepo.name.toUpperCase()}</H2>
              <P1>{heroRepo.description}</P1>
              <P3>{heroRepo.updated_at}</P3>
            </>
          </RepoCard>
        </Grid>
        {/* // Right Column - contains recent blog posts */}
        <RightColContainer>
          {props.posts.map((post) => (
            <PostCard imgSrc={post.coverImage} cardLink={`blog/${post.slug}`}>
              <>
                <H3>{post.title.toUpperCase()}</H3>
                <P3>
                  {post.publishDate} | {post.readingTime} mins
                </P3>
              </>
            </PostCard>
          ))}
        </RightColContainer>
      </Flex>
    </Container>
  );
}
