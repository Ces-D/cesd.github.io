import React from "react";

type Props = {
  publishDate: string;
  readingTime: number;
  className?: string;
  fontSize?: string;
};

export default function DateTime(props: Props) {
  const fontSize = typeof props.fontSize === "undefined" ? "text-tag" : props.fontSize;

  return (
    <div
      className={`flex flex-row opacity-60 mb-1 muted-text
       ${typeof props.className === "undefined" ? "" : props.className}`}
    >
      <p className={fontSize}>{props.publishDate}</p>
      <p className={`mx-3 ${fontSize}`}>|</p>
      <p className={fontSize}>{props.readingTime} min read</p>
    </div>
  );
}
