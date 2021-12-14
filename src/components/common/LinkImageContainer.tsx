import Link from "next/link";
import { A } from "../../UI/Anchors";
import { HTMLAttributeAnchorTarget } from "react";
import ImageContainer, { ImageWidth, ImageHeight } from "./ImageContainer";

type Props = {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  height: ImageHeight;
  width: ImageWidth;
  imgSrc: string;
  imgAlt: string;
  cursor?: string;
};

export default function LinkImageContainer(props: Props) {
  return (
    <Link href={props.href} passHref>
      <A target={props.target}>
        <ImageContainer
          height={props.height}
          width={props.width}
          imgSrc={props.imgSrc}
          imgAlt={props.imgAlt}
          cursor={props.cursor}
        />
      </A>
    </Link>
  );
}
