import React from "react";

import SearchGlass from "./Icons/SearchGlass";

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar(props: Props) {
  return (
    <div className="relative w-full mt-2 text-pStrokeL">
      <input
        placeholder="Search"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="focus:outline-none focus:ring-teal focus:ring-1 bg-gray-200 w-full p-2"
      />
      <SearchGlass />
    </div>
  );
}
