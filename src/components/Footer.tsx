import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-2 bg-dark text-light">
      <nav className="max-w-4xl mx-auto flex flex-col justify-around items-center sm:flex-row">
        <p>
          <Link href="/">Home</Link>
        </p>
        <p>
          <Link href="https://github.com/Ces-D">
            <a target="_blank">GitHub</a>
          </Link>
        </p>
        <p>
          <Link href="https://www.goodreads.com/user/show/101250642-cesar-diaz">
            <a target="_blank">GoodReads</a>
          </Link>
        </p>
      </nav>
    </footer>
  );
}


//TODO: https://www.figma.com/community/file/809292669091916902?preview=fullscreen
// https://www.figma.com/community/file/895225371918055740