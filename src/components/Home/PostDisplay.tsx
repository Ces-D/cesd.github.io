import React from "react";
import { BlogCard } from "../../utils/data/CardData";
import TagButton from "../TagButton";
import { v4 as uuidv4 } from "uuid";

export default function PostDisplay(props: BlogCard) {
  return (
    <li className=" pt-5 pb-8 border-b-2 border-opacity-50">
      <p className="opacity-50 mb-3">{props.date}</p>
      <div className="flex flex-col sm:flex-row flex-grow justify-between items-start gap-y-4">
        <h2 className="text-xl font-bold">
          <a href={`post/${props.slug}`}>{props.title}</a>
        </h2>
        <div className="card-tags">
          {props.tags.map((tag) => (
            <TagButton key={uuidv4()} tag={tag} />
          ))}
        </div>
      </div>
    </li>
  );
}
