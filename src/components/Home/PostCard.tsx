import styled from "styled-components";
import { TextSection } from "../../UI/Typography";
import { ImageHeight, ImageWidth } from "../common/ImageContainer";
import LinkImageContainer from "../common/LinkImageContainer";

const CardContainer = styled.div<{ borderBottom: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.25em;

  @media ${(props) => props.theme.breakPoints.laptop} {
    margin-bottom: none;
    border-bottom: ${(props) =>
      props.borderBottom ? props.theme.border.solidBrown : "none"};
  }
`;

type Props = {
  children: React.ReactChild;
  imgSrc: string;
  cardLink: string;
  borderBottom: boolean;
  title: string;
};

export default function PostCard(props: Props) {
  const imageHeight: ImageHeight = {
    mobile: "7em",
    tablet: "7em",
    laptop: "7em",
  };

  const imageWidth: ImageWidth = {
    mobile: "7em",
    tablet: "7em",
    laptop: "7em",
  };

  return (
    <CardContainer borderBottom={props.borderBottom}>
      <TextSection width="70%" paddingRight="0.5rem">
        {props.children}
      </TextSection>
      <LinkImageContainer
        href={props.cardLink}
        height={imageHeight}
        width={imageWidth}
        imgSrc={props.imgSrc}
        imgAlt={`${props.title} cover image`}
      />
    </CardContainer>
  );
}
