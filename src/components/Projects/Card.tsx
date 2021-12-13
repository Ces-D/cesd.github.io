import styled from "styled-components";
import { H2, P1, P3, TextSection } from "../../UI/Typography";
import { GithubRepo } from "../../utils/repos/models/GithubRepoData";
import AnchorLink from "../common/AnchorLink";
import { ImageHeight, ImageWidth } from "../common/ImageContainer";
import LinkImageContainer from "../common/LinkImageContainer";

const CardContainer = styled.li`
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type Props = GithubRepo;

export default function Card(props: Props) {
  const imageHeight: ImageHeight = {
    mobile: "10em",
    tablet: "10em",
    laptop: "10em",
  };

  const imageWidth: ImageWidth = {
    mobile: "10em",
    tablet: "10em",
    laptop: "10em",
  };

  return (
    <CardContainer>
      <LinkImageContainer
        href={props.htmlUrl}
        imgSrc={props.coverImage}
        imgAlt={`${props.fullName} repo cover image`}
        height={imageHeight}
        width={imageWidth}
        target={"_blank"}
      />
      <TextSection paddingLeft={"2rem"}>
        <>
          <AnchorLink href={props.htmlUrl} passHref={true} target="_blank">
            <H2>{props.name}</H2>
          </AnchorLink>
          <P1>{props.description}</P1>
          <P3>{props.updatedAt}</P3>
          <P3>{props.language}</P3>
        </>
      </TextSection>
    </CardContainer>
  );
}
