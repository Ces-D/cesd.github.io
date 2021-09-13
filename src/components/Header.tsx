import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto flex flex-row justify-end items-center m-2 px-2 sm:px-5 gap-x-5">
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h3>
        <Link href="/blog">Blog</Link>
      </h3>
    </header>
  );
}

// REFERENCE: https://leerob.io/dashboard
// REPO: https://github.com/leerob/leerob.io
