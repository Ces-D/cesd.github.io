import React from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import Container from "../../Container";
import ShareButton from "../../ShareButton";
import DateTimeTab from "../DateTimeTab";

import { BlogPost } from "../../../utils/data/PostData";

export default function Blog(props: BlogPost) {
  return (
    <Container
      title={props.title}
      description={props.description}
      articleDate={props.publishDate}
    >
      <div className="flex flex-col w-full">
        <h1>{props.title}</h1>
        <DateTimeTab publishDate={props.publishDate} readingTime={props.readingTime} />
        <ul className="flex flex-row w-full list-none list-inside gap-x-1 text-darkGray">
          {props.tags.map((tag) => (
            <li key={uuidv4()} className="capitalize text-tag">
              #{tag}
            </li>
          ))}
        </ul>
        <ShareButton description={props.description} title={props.title} />
        <div className="w-full h-60 sm:h-72 relative object-center">
          <Image
            src={props.coverImage}
            layout="fill"
            objectFit="cover"
            alt={props.title + "cover image"}
          />
        </div>
        <article
          className="mt-4 prose prose-sm"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </Container>
  );
}
