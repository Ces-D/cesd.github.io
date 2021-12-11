import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 7em;
  width: 30%;
  cursor: pointer;
`;

const TextSection = styled.section`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 70%;
  display: inline-block;
  text-align: left;
`;

type Props = {
  children: React.ReactChild;
  imgSrc: string;
  cardLink: string;
  borderBottom: boolean;
  title: string;
};

export default function PostCard(props: Props) {
  return (
    <CardContainer borderBottom={props.borderBottom}>
      <TextSection>{props.children}</TextSection>
      <Link href={props.cardLink} passHref>
        <ImageContainer>
          <Image
            layout="fill"
            objectFit="contain"
            src={props.imgSrc}
            alt={`${props.title} cover image`}
          />
        </ImageContainer>
      </Link>
    </CardContainer>
  );
}
