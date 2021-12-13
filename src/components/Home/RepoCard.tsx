import styled from "styled-components";
import { TextSection } from "../../UI/Typography";
import { ImageHeight, ImageWidth } from "../common/ImageContainer";
import LinkImageContainer from "../common/LinkImageContainer";

const CardContainer = styled.div<{
  hero: boolean;
  marginBottom: boolean;
  borderBottom: boolean;
}>`
  order: ${(props) => props.hero && -1};
  margin-bottom: ${(props) => (props.hero ? "0" : "1em")};

  @media ${(props) => props.theme.breakPoints.tablet} {
    order: ${(props) => props.hero && 0};
    border-bottom: ${(props) =>
      props.borderBottom ? props.theme.border.solidBrown : "0"};
  }
`;

type Props = {
  cardLink: string;
  imgSrc: string;
  children: React.ReactChild;
  hero?: boolean;
  spaceBelow?: boolean;
  borderBottom?: boolean;
  title: string;
};

export default function RepoCard(props: Props) {
  const heroImageHeights: ImageHeight = {
    mobile: "18em",
    tablet: "25em",
    laptop: "30em",
  };

  const otherImageHeights: ImageHeight = {
    mobile: "12em",
    tablet: "12em",
    laptop: "12em",
  };

  const heroImageWidths: ImageWidth = {
    mobile: "100%",
    tablet: "100%",
    laptop: "100%",
  };

  const otherImageWidths: ImageWidth = {
    mobile: "100%",
    tablet: "100%",
    laptop: "100%",
  };

  return (
    <CardContainer
      hero={props.hero ?? false}
      marginBottom={props.spaceBelow ?? false}
      borderBottom={props.borderBottom ?? false}
    >
      <LinkImageContainer
        height={props.hero ? heroImageHeights : otherImageHeights}
        width={props.hero ? heroImageWidths : otherImageWidths}
        href={props.cardLink}
        target={"_blank"}
        imgSrc={props.imgSrc}
        imgAlt={`${props.title} cover image`}
      />
      <TextSection>{props.children}</TextSection>
    </CardContainer>
  );
}

//TODO: test this
