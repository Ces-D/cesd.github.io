import styled from "styled-components";
import { HomePageProps } from "../../pages";
import { H1, H2, H3, P3, P1 } from "../../UI/Typography";
import RepoCard from "./RepoCard";
import Container from "../Container";
import PostCard from "./PostCard";
import { v4 } from "uuid";

const OuterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-direction: column;
  padding-top: 1em;
  border-top: ${(props) => props.theme.border.solidBrown};

  @media ${(props) => props.theme.breakPoints.laptop} {
    flex-direction: row;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1em;

  width: 100%;

  @media ${(props) => props.theme.breakPoints.tablet} {
    margin-bottom: 1em;
    grid-row-gap: 0;
    grid-column-gap: 1em;
    grid-template-columns: 1fr 2fr;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    margin-bottom: 0;
    width: 74%;
  }
`;

const RightColContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  width: 100%;

  @media ${(props) => props.theme.breakPoints.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    margin-left: 1em;
    width: 30%;
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
`;

export default function HomePage(props: HomePageProps) {
  const heroRepo = props.repos[0];
  const secondRepo = props.repos[1];
  const thirdRepo = props.repos[2];

  return (
    <Container leftRightSpace={true}>
      <OuterFlex>
        <Grid>
          {/* Left Column - contains secondary repos */}
          <div>
            <RepoCard
              cardLink={secondRepo.htmlUrl}
              imgSrc={secondRepo.coverImage}
              spaceBelow={true}
              borderBottom={true}
            >
              <>
                <H2>{secondRepo.name.toUpperCase()}</H2>
                <P3>{secondRepo.updatedAt}</P3>
              </>
            </RepoCard>
            <RepoCard cardLink={thirdRepo.htmlUrl} imgSrc={secondRepo.coverImage}>
              <>
                <H2>{thirdRepo.name.toUpperCase()}</H2>
                <P3>{thirdRepo.updatedAt}</P3>
              </>
            </RepoCard>
          </div>
          {/* Hero Column - contains hero repo */}
          <RepoCard
            cardLink={heroRepo.htmlUrl}
            imgSrc={secondRepo.coverImage}
            hero={true}
          >
            <>
              <H1>{heroRepo.name.toUpperCase()}</H1>
              <P1>{heroRepo.description}</P1>
              <P3>{heroRepo.updatedAt}</P3>
            </>
          </RepoCard>
        </Grid>
        {/* // Right Column - contains recent blog posts */}
        <RightColContainer>
          {props.posts.map((post) => (
            <PostCard
              key={v4()}
              imgSrc={post.coverImage}
              cardLink={`blog/${post.slug}`}
              borderTop={true}
            >
              <>
                <H3>{post.title.toUpperCase()}</H3>
                <P3>
                  {post.publishDate} | {post.readingTime} mins
                </P3>
              </>
            </PostCard>
          ))}
        </RightColContainer>
      </OuterFlex>
    </Container>
  );
}
