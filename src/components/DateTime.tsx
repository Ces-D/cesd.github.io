import React from "react";

type Props = {
  publishDate: string;
  readingTime: number;
};

export default function DateTime(props: Props) {
  return (
    <div className="flex flex-row opacity-50 mb-1 muted-text">
      <p className="text-tag">{props.publishDate}</p>
      <p className="text-tag mx-3">|</p>
      <p className="text-tag">{props.readingTime} min read</p>
    </div>
  );
}
