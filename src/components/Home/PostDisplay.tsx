import React from "react";
import { BlogCard } from "../../utils/data/CardData";
import TagButton from "../TagButton";
import ExtraTagsButton from "./ExtraTagsButton";
import { v4 as uuidv4 } from "uuid";

export default function PostDisplay(props: BlogCard) {
  const SHOWN_TAGS = 4;
  const remainingTags = props.tags.length - SHOWN_TAGS;
  const postTags = props.tags.slice(0, SHOWN_TAGS);

  return (
    <li className="py-8 border-b border-opacity-30 w-full">
      <p className="opacity-50 mb-3">{props.publishDate}</p>
      <div className="w-full">
        <h2 className="align-top inline-block mb-3 text-xl w-full sm:w-3/4">
          <a href={`blog/${props.slug}`}>{props.title}</a>
        </h2>
        <div className="inline-block w-full sm:w-1/4">
          {postTags.map((tag) => (
            <TagButton key={uuidv4()} tag={tag} />
          ))}
          {remainingTags > 0 ? <ExtraTagsButton extraTags={remainingTags} /> : ""}
        </div>
      </div>
    </li>
  );
}
