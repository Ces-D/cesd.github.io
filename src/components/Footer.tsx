import React from "react";

import Github from "./Icons/Github";
import GoodReads from "./Icons/Goodreads";

export default function Footer() {
  const DIMENSION = 14;

  return (
    <footer className="w-full h-20 p-2 flex flex-col justify-center items-center bg-dark text-light gap-y-1">
      <p className="text-tag italic">Building, Learning, Developing</p>
      <div className="mx-auto flex flex-row justify-center gap-x-2 w-20">
        <p>
          <Github w={DIMENSION} h={DIMENSION} />
        </p>
        <p>
          <GoodReads w={DIMENSION} h={DIMENSION} />
        </p>
      </div>
    </footer>
  );
}
