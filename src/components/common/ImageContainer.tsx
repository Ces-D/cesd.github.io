import styled from "styled-components";
import Image from "next/image";
import { HTMLAttributeAnchorTarget } from "react";

const Container = styled.div<{ height: ImageHeight; width: ImageWidth; cursor?: string }>`
  position: relative;
  display: inline-block;
  height: ${(props) => props.height.mobile};
  width: ${(props) => props.width.mobile};
  cursor: ${(props) => props.cursor ?? "pointer"};

  @media ${(props) => props.theme.breakPoints.tablet} {
    height: ${(props) => props.height.tablet};
    width: ${(props) => props.width.tablet};
  }

  @media ${(props) => props.theme.breakPoints.laptop} {
    height: ${(props) => props.height.laptop};
    width: ${(props) => props.width.laptop};
  }
`;

export type ImageHeight = {
  mobile: string;
  tablet: string;
  laptop: string;
};

export type ImageWidth = {
  mobile: string;
  tablet: string;
  laptop: string;
};

type Props = {
  target?: HTMLAttributeAnchorTarget;
  height: ImageHeight;
  width: ImageWidth;
  imgSrc: string;
  imgAlt: string;
  cursor?: string;
};

export default function ImageContainer(props: Props) {
  return (
    <Container height={props.height} width={props.width} cursor={props.cursor}>
      <Image layout="fill" objectFit="cover" src={props.imgSrc} alt={props.imgAlt} />
    </Container>
  );
}
