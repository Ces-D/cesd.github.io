import React from "react";
import Image from "next/image";
import Link from "next/link";

import DateTimeTab from "./DateTimeTab";

import { BlogCard } from "../../utils/data/CardData";

export default function Card(props: { post: BlogCard; flip: boolean }) {
  return (
    <li className="border-b border-darkGray h-80 sm:h-40 w-full flex flex-col sm:flex-row items-center justify-center my-6 pb-6">
      <div
        className={`w-full sm:w-1/3 sm:h-full h-2/5 relative object-center order-1 ${
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
        className={`pt-2 h-3/5 sm:w-2/3 sm:h-full sm:pt-0 flex flex-col justify-center order-2 cursor-default ${
          props.flip ? "sm:order-1 sm:pr-3" : "sm:order-2 sm:pl-3"
        }`}
      >
        <DateTimeTab
          publishDate={props.post.publishDate}
          readingTime={props.post.readingTime}
        />
        <h3 className="mb-2 leading-5">
          <Link href={`blog/${props.post.slug}`}>{props.post.title}</Link>
        </h3>
        <p className="w-full overflow-clip leading-5">{props.post.excerpt}...</p>
      </div>
    </li>
  );
}
