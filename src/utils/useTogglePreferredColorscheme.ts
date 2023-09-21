"use client";

import { useEffect, useState } from "react";

export function useTogglePreferredColorScheme() {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const prefersDarkColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (prefersDarkColorScheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      setColorScheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setColorScheme("light");
    }
  }, []);

  const toggleColorScheme = () => {
    if (colorScheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      setColorScheme("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setColorScheme("dark");
    }
  };

  return {
    colorScheme,
    toggleColorScheme,
  };
}
