import React from "react";
import Github from "./Icons/Github";
import GoodReads from "./Icons/Goodreads";

export default function Footer() {
  const DIMENSION = 30;

  return (
    <footer className="h-28 sm:h-24 p-2 bg-darkGround text-strokeD dark:bg-lightGround dark:text-strokeL mt-7">
      <nav className="w-full flex flex-col justify-center items-center">
        <p className="text-tag italic text-pStrokeD dark:text-pStrokeL">Building, Learning, Developing</p>
        <div className="mx-auto flex flex-row justify-center gap-x-4 w-20 mt-3">
          <Github w={DIMENSION} h={DIMENSION} />
          <GoodReads w={DIMENSION} h={DIMENSION} />
        </div>
      </nav>
    </footer>
  );
}
