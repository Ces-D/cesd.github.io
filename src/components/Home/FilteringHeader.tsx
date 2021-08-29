import React from "react";
import { v4 as uuidv4 } from "uuid";

import PostDisplay from "./PostDisplay";

import { BlogCard } from "../../utils/data/CardData";

export default function FilteringHeader(props: { posts: BlogCard[] }) {
  return (
    <>
      <h1>Recent Posts</h1>
      {props.posts.map((data) => (
        <PostDisplay key={uuidv4()} {...data} />
      ))}
    </>
  );
}
