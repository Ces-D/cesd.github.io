"use client";

import { useEffect, useState } from "react";

export function useSyncToColorScheme() {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const prefersDarkColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (prefersDarkColorScheme) {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "data-theme") {
            setColorScheme(
              document.documentElement.getAttribute("data-theme") as
                | "dark"
                | "light",
            );
          }
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => { observer.disconnect(); };
  }, []);

  return colorScheme;
}
