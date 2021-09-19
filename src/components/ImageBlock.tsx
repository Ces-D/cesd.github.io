import React from "react";
import Image from "next/image";

type Props = {
  dimensionClass: string;
  src: string;
  alt: string;
};

export default function ImageBlock(props: Props) {
  return (
    <div className={`${props.dimensionClass} relative mx-auto`}>
      <Image src={props.src} layout="fill" objectFit="cover" alt={props.alt} />
    </div>
  );
}
