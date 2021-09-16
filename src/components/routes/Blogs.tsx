import React, { useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import Container from "../layout/Container";
import HorizontalCard from "../HorizontalCard";
import SearchBar from "../SearchBar";

import { BlogCard } from "../../utils/data/CardData";

export default function BlogHome(props: { posts: BlogCard[] }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredPosts = useMemo(() => {
    return props.posts.filter((card) =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, props.posts]);

  return (
    <Container title="Blog - Cesar Diaz">
      <>
        <h1>Hello 🤘</h1>
        <p>
          This is my blog space where I record my thinking behind project decisions, walk
          through some of my code, and note new technologies, patterns or whatever. I have
          written {props.posts.length} posts to date, but don&apos;t worry because more
          are coming.
        </p>
        <p>Use the search below to filter by title</p>
        <SearchBar value={searchValue} setValue={setSearchValue} />
        <ul className="list-none list-inside">
          {!filteredPosts.length && <p className="muted-text">No posts found.</p>}
          {filteredPosts.map((post) => (
            <HorizontalCard key={uuidv4()} {...post} />
          ))}
        </ul>
      </>
    </Container>
  );
}
