import React from "react";
import Link from "next/link";
import Image from "next/image";

import DateTime from "./DateTime";

import { BlogExcerpt } from "../utils/data/ExcerptData";

export default function VerticalCard(props: BlogExcerpt) {
  return (
    <li className="bg-gray-100 w-9/12 sm:w-22/100 h-72 my-2 mx-auto sm:h-80 sm:mx-2 sm:my-0">
      <div className="h-1/3 w-full bg-gray-400 relative">
        <div className="absolute top-4 inset-x-0.5">
          <div className="w-28 h-28 relative mx-auto">
            <Image
              src={props.coverImage}
              layout="fill"
              objectFit="cover"
              alt={props.title + "cover image"}
            />
          </div>
        </div>
      </div>
      <div className="h-2/3 p-2 pt-7 flex flex-col justify-between text-dark">
        <h4 className="text-smd text-center">
          <Link href={`blog/${props.slug}`}>{props.title}</Link>
        </h4>
        <DateTime
          publishDate={props.publishDate}
          readingTime={props.readingTime}
          fontSize="text-xs"
          className="justify-center dark:text-gray-400"
        />
      </div>
    </li>
  );
}

// TODO: complete this
