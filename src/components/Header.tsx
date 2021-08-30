import React from "react";
import Link from "next/link";

import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="w-11/12 sm:w-10/12 mx-auto flex flex-grow flex-col justify-center sm:flex-row sm:items-center">
      <nav className="w-11/12 flex justify-between items-center mx-auto sm:mr-5">
        <h1 className="text-4xl font-bold inline-block">
          <Link href="/">Cesar</Link>
        </h1>
        <h3 className="hidden sm:block align-middle">
          <Link href="#contact">Contact</Link>
        </h3>
        <BurgerMenu />
      </nav>
      <SearchBar />
    </header>
  );
}
