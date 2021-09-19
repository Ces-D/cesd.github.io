import React, { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import Sun from "./Icons/Sun";
import Moon from "./Icons/Moon";

export default function Header() {
  const DIMENSIONS = 28;
  const { theme, setTheme} = useTheme();

  return (
    <>
      <header className="mb-2 px-2 py-1 sm:px-5 text-highlight">
        <nav className="w-full flex flex-row justify-end items-center gap-x-5">
          <h4>
            <Link href="/">Home</Link>
          </h4>
          <h4>
            <Link href="/blog">Blog</Link>
          </h4>
          {theme === "dark" ? (
            <button onClick={() => setTheme("light")}>
              <Moon w={DIMENSIONS} h={DIMENSIONS} />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")}>
              <Sun w={DIMENSIONS} h={DIMENSIONS} />
            </button>
          )}
        </nav>
      </header>
    </>
  );
}

// REFERENCE: https://leerob.io/dashboard
// REPO: https://github.com/leerob/leerob.io
