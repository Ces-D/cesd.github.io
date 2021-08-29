import React from "react";
import Link from "next/link";

import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="header">
      <nav className="menu">
        <h1 className="menu-title">
          <Link href="/">Cesar</Link>
        </h1>
        <h3 className="menu-topic">
          <Link href="#contact">Contact</Link>
        </h3>
        <BurgerMenu />
      </nav>
      <SearchBar />
    </header>
  );
}
