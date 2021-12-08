import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardContainer = styled.div<{ hero: boolean }>`
  border: 1px;
  border-style: solid;
  order: ${(props) => props.hero && -1};

  @media ${(props) => props.theme.breakPoints.tablet} {
    order: ${(props) => props.hero && 0};
  }
`;

const ImageContainer = styled.div<{ hero: boolean }>`
  position: relative;
  height: ${(props) => (props.hero ? "20em" : "10em")};
  cursor: pointer;

  @media ${(props) => props.theme.breakPoints.tablet} {
    height: ${(props) => (props.hero ? "30em" : "15em")};
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
};

export default function RepoCard(props: Props) {
  return (
    <CardContainer hero={props.hero ?? false}>
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
