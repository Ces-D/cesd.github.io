import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto flex flex-row justify-end items-center mb-2 px-2 py-1 sm:px-5 gap-x-5 bg-dark text-light">
      <h4>
        <Link href="/">Home</Link>
      </h4>
      <h4>
        <Link href="/blog">Blog</Link>
      </h4>
    </header>
  );
}

// REFERENCE: https://leerob.io/dashboard
// REPO: https://github.com/leerob/leerob.io
