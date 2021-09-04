import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import Container from "../Container";
import ShareButton from "../ShareButton";
import TagButton from "../TagButton";

import { BlogPost } from "../../utils/data/PostData";

export default function Blog(props: BlogPost) {
  return (
    <Container
      title={props.title}
      description={props.description}
      articleDate={props.publishDate}
    >
      <div className="flex flex-grow flex-col gap-y-4">
        <h1 className="text-4xl">{props.title}</h1>
        <p className="opacity-50">{props.publishDate}</p>
        <ShareButton description={props.description} title={props.title} />
        <div className="w-full h-60 sm:h-96 relative object-center">
          <Image
            src={props.coverImage}
            layout="fill"
            objectFit="cover"
            alt={props.title + "cover image"}
          />
        </div>
        <article
          className="blog-content prose prose-blue"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <ul className="list-inside list-none w-full">
          {props.tags.map((tag) => (
            <TagButton key={uuidv4()} tag={tag} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
