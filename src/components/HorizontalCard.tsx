import React from "react";
import Image from "next/image";
import Link from "next/link";

import DateTime from "./DateTime";

import { BlogCard } from "../utils/data/CardData";

export default function HorizontalCard(props: BlogCard) {
  return (
    <li className="bg-gray-100 dark:bg-gray-800 mb-1">
      <div className="flex flex-col sm:flex-row justify-between items-center min-h-56 py-4">
        <div className="w-52 h-40  sm:h-36 sm:w-36 relative mx-auto">
          <Image
            src={props.coverImage}
            layout="fill"
            objectFit="cover"
            alt={props.title + "cover image"}
          />
        </div>
        <div className="w-full sm:w-2/3 pt-3 inline-block cursor-default">
          <DateTime publishDate={props.publishDate} readingTime={props.readingTime} />
          <h3 className="mt-0">
            <Link href={`blog/${props.slug}`}>{props.title}</Link>
          </h3>
          <p className="overflow-clip leading-6 text-tag">{props.excerpt}...</p>
        </div>
      </div>
    </li>
  );
}

// TODO: complete this so that it looks like Pitchforks reviews
// https://pitchfork.com/
