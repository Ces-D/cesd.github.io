import React from "react";

type Props = {
  publishDate: string;
  readingTime: number;
};

export default function DateTimeTab(props: Props) {
  return (
    <div className="flex flex-row gap-x-3 opacity-50 mb-1">
      <p className="text-tag">{props.publishDate}</p>
      <p className="text-tag">|</p>
      <p className="text-tag">{props.readingTime} min read</p>
    </div>
  );
}
