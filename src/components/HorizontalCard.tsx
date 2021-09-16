import React from "react";
import Image from "next/image";
import Link from "next/link";

import DateTime from "./DateTime";

import { BlogCard } from "../utils/data/CardData";

export default function HorizontalCard(props: BlogCard) {
  return (
    <li className="bg-gray-100 dark:bg-gray-800 mb-2">
      <div className="flex flex-col sm:flex-row justify-between items-center min-h-56 py-4">
        <div className="w-56 h-44  sm:h-40 sm:w-40 relative mx-auto">
          <Image
            src={props.coverImage}
            layout="fill"
            objectFit="cover"
            alt={props.title + "cover image"}
          />
        </div>
        <div className="w-full sm:w-2/3 pt-3 inline-block cursor-default text-center sm:text-left">
          <DateTime
            publishDate={props.publishDate}
            readingTime={props.readingTime}
            className="justify-center sm:justify-start"
          />
          <h3 className="mt-0">
            <Link href={`blog/${props.slug}`}>{props.title}</Link>
          </h3>
          <p className="overflow-clip leading-6 text-tag">{props.excerpt}...</p>
        </div>
      </div>
    </li>
  );
}
