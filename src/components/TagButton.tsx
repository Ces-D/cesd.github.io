import React from "react";

type Props = { tag: string };

export default function TagButton({ tag }: Props) {
  return (
    <button className="bg-gray p-1.5 rounded-md mx-0.5 mb-0.5">
      <p className="capitalize text-sm">#{tag}</p>
    </button>
  );
}
