import React from "react";
import Link from "next/link";

import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="w-11/12 mx-auto flex flex-col justify-center sm:flex-row items-center">
      <nav className="w-full sm:w-9/12 flex justify-between items-center sm:mr-5">
        <h1 className="text-2xl">
          <Link href="/">Cesar</Link>
        </h1>
        {/* Can place Options here  */}
      </nav>
      <SearchBar />
    </header>
  );
}
