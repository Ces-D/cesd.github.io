import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-4xl mx-auto flex flex-col justify-center sm:flex-row items-center mb-6 mt-2 px-2">
      <nav className="w-full flex justify-between items-center">
        <h2>
          <Link href="/">Cesar</Link>
        </h2>
        <h3>
          <Link href="/blog">Blog</Link>
        </h3>
      </nav>
    </header>
  );
}

// REFERENCE: https://leerob.io/dashboard
// REPO: https://github.com/leerob/leerob.io
