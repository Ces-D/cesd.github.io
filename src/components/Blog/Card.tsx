import React from "react";
import Image from "next/image";
import Link from "next/link";

import DateTimeTab from "./DateTimeTab";

import { BlogCard } from "../../utils/data/CardData";

export default function Card(props: { post: BlogCard; flip: boolean }) {
  return (
    <li className="border-b border-darkGray sm:h-64 w-full flex flex-col sm:flex-row items-center justify-center my-8 pb-8">
      <div
        className={`w-full sm:w-1/3 sm:h-full h-40 relative object-center order-1 ${
          props.flip ? "sm:order-2" : "sm:order-1"
        }`}
      >
        <Image
          src={props.post.coverImage}
          layout="fill"
          objectFit="cover"
          alt={props.post.title + "cover image"}
        />
      </div>
      <div
        className={`pt-2 h-full sm:w-2/3 sm:pt-0 flex flex-col justify-center order-2 cursor-default ${
          props.flip ? "sm:order-1 sm:pr-3" : "sm:order-2 sm:pl-3"
        }`}
      >
        <DateTimeTab
          publishDate={props.post.publishDate}
          readingTime={props.post.readingTime}
        />
        <h3 className="mt-0">
          <Link href={`blog/${props.post.slug}`}>{props.post.title}</Link>
        </h3>
        <p className="w-full overflow-clip leading-6 font-tag">{props.post.excerpt}...</p>
      </div>
    </li>
  );
}
