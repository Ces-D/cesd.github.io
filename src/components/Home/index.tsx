import React from "react";
import { v4 as uuidv4 } from "uuid";

import Container from "../Container";
import { BlogCard } from "../../utils/data/CardData";
import PostDisplay from "./PostDisplay";

type Props = { posts: BlogCard[] };

export default function Home({ posts }: Props) {
  return (
    <Container>
      <>
        <h1 className="text-4xl">Recent Posts</h1>
        <ul className="list-inside list-none">
          {posts.map((post) => (
            <PostDisplay key={uuidv4()} {...post} />
          ))}
        </ul>
      </>
    </Container>
  );
}
