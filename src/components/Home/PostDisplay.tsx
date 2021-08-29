import React from "react";
import { BlogCard } from "../../utils/data/CardData";

export default function PostDisplay(props: BlogCard) {
  return (
    <li className="card">
      <p className="date">{props.date}</p>
      <h2 className="card-title">
        <a href={`post/${props.slug}`}>{props.title}</a>
      </h2>
      <div>
        {props.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </div>
    </li>
  );
}
