import React from "react";
import Image from "next/image";
import Link from "next/link";

import DateTime from "./DateTime";

import { BlogCard } from "../utils/data/CardData";

export default function HorizontalCard(props: BlogCard) {
  return (
    <li className="w-full h-56 bg-lightGray dark:bg-darkGray mb-1">
      <div className="w-1/3 inline-block">
        <div className="h-20 w-20 relative object-center">
          <Image
            src={props.coverImage}
            layout="fill"
            objectFit="cover"
            alt={props.title + "cover image"}
          />
        </div>
      </div>
      <div className="inline-block w-2/3 justify-center cursor-default">
        <DateTime publishDate={props.publishDate} readingTime={props.readingTime} />
        <h3 className="mt-0">
          <Link href={`blog/${props.slug}`}>{props.title}</Link>
        </h3>
        <p className="w-full overflow-clip leading-6 text-tag">{props.excerpt}...</p>
      </div>
    </li>
  );
}

// TODO: complete this so that it looks like Pitchforks reviews
// https://pitchfork.com/