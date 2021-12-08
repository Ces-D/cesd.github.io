import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardContainer = styled.div<{
  hero: boolean;
  marginBottom: boolean;
  borderBottom: boolean;
}>`
  order: ${(props) => props.hero && -1};
  margin-bottom: ${(props) => (props.marginBottom ? "1em" : "0")};

  @media ${(props) => props.theme.breakPoints.tablet} {
    order: ${(props) => props.hero && 0};
    border-bottom: ${(props) =>
      props.borderBottom ? props.theme.border.solidBrown : "0"};
  }
`;

const ImageContainer = styled.div<{ hero: boolean }>`
  position: relative;
  height: ${(props) => (props.hero ? "18em" : "12em")};
  cursor: pointer;

  @media ${(props) => props.theme.breakPoints.tablet} {
    height: ${(props) => (props.hero ? "25em" : "12em")};
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    height: ${(props) => (props.hero ? "30em" : "12em")};
  }
`;

const A = styled.a.attrs({ rel: "nofollow", target: "_blank" })``;

const TextSection = styled.section`
  padding-left: 0.5rem;
  text-align: left;
`;

type Props = {
  cardLink: string;
  imgSrc: string;
  children: React.ReactChild;
  hero?: boolean;
  spaceBelow?: boolean;
  borderBottom?: boolean;
};

export default function RepoCard(props: Props) {
  return (
    <CardContainer
      hero={props.hero ?? false}
      marginBottom={props.spaceBelow ?? false}
      borderBottom={props.borderBottom ?? false}
    >
      <Link href={props.cardLink} passHref>
        <A>
          <ImageContainer hero={props.hero ?? false}>
            <Image layout="fill" objectFit="cover" src={props.imgSrc} />
          </ImageContainer>
        </A>
      </Link>
      <TextSection>{props.children}</TextSection>
    </CardContainer>
  );
}
