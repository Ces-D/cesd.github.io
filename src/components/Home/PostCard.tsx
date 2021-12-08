import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardContainer = styled.div`
  border: 1px;
  border-style: solid;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 10em;
  width: 49%;
  cursor: pointer;
`;

const TextSection = styled.section`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  width: 49%;
  height: 100%;
  display: inline-block;
  text-align: left;
`;

type Props = { children: React.ReactChild; imgSrc: string; cardLink: string };

export default function PostCard(props: Props) {
  return (
    <CardContainer>
      <TextSection>{props.children}</TextSection>
      <Link href={props.cardLink}>
        <ImageContainer>
          <Image layout="fill" objectFit="contain" src={props.imgSrc} />
        </ImageContainer>
      </Link>
    </CardContainer>
  );
}
