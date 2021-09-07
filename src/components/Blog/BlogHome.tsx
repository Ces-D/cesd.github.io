import React, { useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import Container from "../Container";
import Card from "./Card";
import SearchGlass from "../Icons/SearchGlass";

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
      <div className="flex flex-col gap-y-2 justify-center">
        <h1>Hello 🤘</h1>
        <p>
          This is my blog space where I record my thinking behind project decisions, walk
          through some of my code, and note new technologies, patterns or whatever. I have
          written {props.posts.length} posts to date, but don&apos;t worry because more
          are coming.
        </p>
        <p>Use the search below to filter by title</p>
        <div className="relative w-full">
          <input
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className="border=box p-2 border-darkGray focus:ring-teal focus:border-teal w-full rounded-md bg-lightGray text-darkGray"
          />
          <SearchGlass />
        </div>
        <ul className="list-none list-inside">
          {!filteredPosts.length && <p className="text-darkGray mb-4">No posts found.</p>}
          {filteredPosts.map((post, index) => (
            <Card key={uuidv4()} post={post} flip={index % 2 !== 0} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
