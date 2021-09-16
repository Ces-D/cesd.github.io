import React from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

import Container from "../layout/Container";
import VerticalCard from "../VerticalCard";

import { BlogExcerpt } from "../../utils/data/ExcerptData";

type Props = {
  posts: BlogExcerpt[];
};

export default function Home(props: Props) {
  return (
    <Container>
      <>
        <p className="mx-auto my-5">
          I am a self taught developer who likes finishing projects. Thats the toughest
          part!
        </p>
        <div className="relative w-full h-40 sm:h-52 my-5">
          <Image
            src="/Muhammad-Ali.jpg"
            layout="fill"
            objectFit="contain"
            alt="Muhammad Ali knocking down opponent"
          />
        </div>
        <h2 className="border-b border-teal mx-auto">THE LATEST</h2>
        <ul className="flex flex-col sm:flex-row justify-around">
          {props.posts.map((post) => (
            <VerticalCard key={uuidv4()} {...post} />
          ))}
        </ul>
      </>
    </Container>
  );
}
