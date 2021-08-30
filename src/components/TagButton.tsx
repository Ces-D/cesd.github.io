import React from "react";

type Props = { tag: string };

export default function TagButton({ tag }: Props) {
  return (
    <button className="p-2.5 bg-gray-700 rounded-md m-1">
      <p className="capitalize">#{tag}</p>
    </button>
  );
}
