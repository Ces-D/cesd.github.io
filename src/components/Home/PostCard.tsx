import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardContainer = styled.div<{ borderTop: boolean }>`
  /* border: 1px;
  border-style: solid; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: ${(props) => (props.borderTop ? props.theme.border.solidBrown : "0")};
  padding: 0.5em 0 0.5em 0;
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
  borderTop?: boolean;
  title: string;
};

export default function PostCard(props: Props) {
  return (
    <CardContainer borderTop={props.borderTop ?? false}>
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
