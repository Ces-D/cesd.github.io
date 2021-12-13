import styled from "styled-components";
import { H1, P3, TextArticle } from "../../UI/Typography";
import { BlogPost } from "../../utils/blog/models/PostData";
import Container from "../common/Container";
import { ImageWidth } from "../common/ImageContainer";
import ImageContainer, { ImageHeight } from "../common/ImageContainer";

const Tags = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  list-style-position: outside;
  padding-inline-start: 0px;
`;

const Tag = styled.li`
  margin-right: 1.5em;
`;

const TextSpacing = styled.div`
  margin-right: 5em;
  margin-left: 5em;
`;

export default function BlogPostSlugPage(props: BlogPost) {
  const imageHeight: ImageHeight = {
    mobile: "30em",
    tablet: "30em",
    laptop: "30em",
  };

  const imageWidth: ImageWidth = {
    mobile: "100%",
    tablet: "100%",
    laptop: "100%",
  };

  return (
    <Container leftRightSpace={true}>
      <>
        <TextSpacing>
          <H1>{props.title}</H1>
          <P3>{`${props.publishDate} | ${props.readingTime}min`}</P3>
          <Tags>
            {props.tags.map((tag) => (
              <Tag>#{tag}</Tag>
            ))}
          </Tags>
        </TextSpacing>
        <ImageContainer
          height={imageHeight}
          width={imageWidth}
          imgSrc={props.coverImage}
          imgAlt={`${props.title} cover image`}
          cursor="default"
        />
        <TextSpacing>
          <TextArticle dangerouslySetInnerHTML={{ __html: props.content }} />
        </TextSpacing>
      </>
    </Container>
  );
}
