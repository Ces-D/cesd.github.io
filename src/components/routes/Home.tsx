import React from "react";
import { v4 as uuidv4 } from "uuid";

import Container from "../layout/Container";
import VerticalCard from "../VerticalCard";
import ImageBlock from "../ImageBlock";

import { BlogExcerpt } from "../../utils/data/ExcerptData";

type Props = {
  posts: BlogExcerpt[];
};

export default function Home(props: Props) {
  return (
    <Container>
      <>
        <h4 className="text-center mx-auto my-7">
          I am a self taught developer who likes finishing projects. Thats the toughest
          part!
        </h4>
        <div className="block w-full">
        <ImageBlock
          dimensionClass="w-80 h-60 sm:w-96 sm:h-64"
          src="/images/Muhammad-Ali.jpg"
          alt="Muhammad Ali celebrating a victory"
        />
        </div>
        <h2 className="border-b border-highlight mx-auto">THE LATEST</h2>
        <ul className="flex flex-col sm:flex-row justify-around">
          {props.posts.map((post) => (
            <VerticalCard key={uuidv4()} {...post} />
          ))}
        </ul>
      </>
    </Container>
  );
}
