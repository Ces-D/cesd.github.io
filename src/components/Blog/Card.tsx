import React from "react";
import { BlogCard } from "../../utils/data/CardData";
import TagButton from "../TagButton";
import ExtraTagsButton from "./ExtraTagsButton";
import { v4 as uuidv4 } from "uuid";


export default function Card(props: BlogCard) {
  const SHOWN_TAGS = 4;
  const remainingTags = props.tags.length - SHOWN_TAGS;
  const postTags = props.tags.slice(0, SHOWN_TAGS);

  return (
    <li className="py-4 border-b border-opacity-50 block">
      <p className="opacity-50">{props.publishDate}</p>
      <div className="w-full">
        <h3 className="align-top inline-block mb-3 w-full sm:w-3/4">
          <a href={`blog/${props.slug}`}>{props.title}</a>
        </h3>
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
