import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import Container from "../layout/Container";
import ShareButton from "../ShareButton";
import DateTime from "../DateTime";

import { BlogPost } from "../../utils/data/PostData";

export default function BlogPostComponent(props: BlogPost) {
  return (
    <Container
      title={props.title}
      description={props.description}
      articleDate={props.publishDate}
    >
      <div className="flex flex-col w-full">
        <div className="w-full sm:w-11/12 mx-auto">
          <h1>{props.title}</h1>
          <DateTime publishDate={props.publishDate} readingTime={props.readingTime} />
          <ul className="flex flex-row w-full list-none list-inside gap-x-2 muted-text mb-1">
            {props.tags.map((tag) => (
              <li key={uuidv4()} className="text-tag">
                #{tag}
              </li>
            ))}
          </ul>
          <ShareButton description={props.description} title={props.title} />
        </div>
        <div className="w-full h-60 sm:h-80 relative object-center">
          <Image
            src={props.coverImage}
            layout="fill"
            objectFit="cover"
            alt={props.title + "cover image"}
          />
        </div>
        <article
          className="my-4 w-full sm:w-10/12 mx-auto flex flex-col gap-y-5 leading-8"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </Container>
  );
}
