import React, { useState, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import Container from "../Container";
import Card from "./Card";

import { BlogCard } from "../../utils/data/CardData";

export default function BlogHome(props: { posts: BlogCard[] }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredPosts = useMemo(() => {
    return props.posts.filter((card) =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  return (
    <Container title="Blog - Cesar Diaz">
      <div className="flex flex-col gap-y-2 justify-center">
        <h1>Hello 🤘</h1>
        <p>
          This is my blog space where I record my thinking behind project decisions, walk
          through some of my code, and note new technologies, patterns or whatever. I have
          written {props.posts.length} posts to date, but don't worry because more are
          coming.
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="absolute right-3 top-3 h-5 w-5 sm:h-5 sm:w-5"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
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
