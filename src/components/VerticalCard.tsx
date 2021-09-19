import React from "react";
import Link from "next/link";

import ImageBlock from "./ImageBlock";

import { BlogExcerpt } from "../utils/data/ExcerptData";

export default function VerticalCard(props: BlogExcerpt) {
  return (
    <li className="bg-white dark:bg-gray-200 w-7/12 sm:w-1/5 my-2 mx-auto sm:my-0 hover:shadow-md">
      <ImageBlock
        dimensionClass="w-36 h-36 mt-4"
        src={props.coverImage}
        alt={props.title + "cover image"}
      />
      <div className="p-2 pt-3 flex flex-col justify-between text-pStrokeL min-h-56">
        <h4 className="text-md sm:text-smd text-center">
          <Link href={`blog/${props.slug}`}>{props.title}</Link>
        </h4>
        <div className="flex flex-row justify-between opacity-60">
          <p className="sm:text-xs dark:text-pStrokeL">
            {new Date(props.publishDate).toLocaleDateString()}
          </p>
          <p className="sm:text-xs dark:text-pStrokeL">{props.readingTime} min read</p>
        </div>
      </div>
    </li>
  );
}
