import React from "react";

export default function Header() {
  return (
    <header className="mast container">
      <h1 className="title">
        <a href="#home">Cesar Diaz</a>
      </h1>
      <div>
        {/* //TODO:make the search bar */}
        <h3 className="topic">
          <a href="#search">Search</a>
        </h3>
        <h3 className="topic">
          <a href="#contact">Contact</a> //TODO:
        </h3>
        <h3 className="topic">
          <a href="/archive">Archive</a>
        </h3>
      </div>
    </header>
  );
}
