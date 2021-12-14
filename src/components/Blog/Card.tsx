import styled from "styled-components";
import LinkImageContainer from "../common/LinkImageContainer";
import { BlogCard } from "../../utils/blog/models/CardData";
import { H1, P1, P3, TextSection } from "../../UI/Typography";
import AnchorLink from "../common/AnchorLink";
import { ImageHeight, ImageWidth } from "../common/ImageContainer";

const CardContainer = styled.li`
  margin-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function Card(props: BlogCard) {
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

  const postHref = `/blog/${props.slug}`;

  return (
    <CardContainer>
      <LinkImageContainer
        height={imageHeight}
        width={imageWidth}
        href={postHref}
        imgSrc={props.coverImage}
        imgAlt={`${props.title} cover image`}
      />
      <TextSection paddingLeft={"2rem"}>
        <>
          <AnchorLink href={postHref}>
            <H1>{props.title}</H1>
          </AnchorLink>
          <P1>{props.excerpt}</P1>
          <P3>{`${props.publishDate} | ${props.readingTime}min`}</P3>
        </>
      </TextSection>
    </CardContainer>
  );
}
