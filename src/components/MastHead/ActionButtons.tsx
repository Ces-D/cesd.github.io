"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { BookOpen, Menu, Inbox, Moon, Sun } from "react-feather";

import styles from "./mastHead.module.css";

import { useTogglePreferredColorScheme } from "@/utils/useTogglePreferredColorscheme";
import { appRoutes } from "@/utils/routes";
import { useState } from "react";

export default function ActionButtons() {
  const { colorScheme, toggleColorScheme } = useTogglePreferredColorScheme();
  const [openActionsMenu, setOpenActionsMenu] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLMenuElement>(null);

  useEffect(() => {
    const clickedAwayFromMenu = (e: MouseEvent) => {
      const menuButtonNotClicked =
        menuButtonRef.current &&
        !e.composedPath().includes(menuButtonRef.current);
      const menuNotClicked =
        menuRef.current && !e.composedPath().includes(menuRef.current);
      if (menuButtonNotClicked && menuNotClicked) {
        setOpenActionsMenu(false);
      }
    };
    document.addEventListener("click", clickedAwayFromMenu);
    return () => document.removeEventListener("click", clickedAwayFromMenu);
  }, [menuButtonRef, menuRef]);

  return (
    <section content={styles["content-container"]}>
      <button
        ref={menuButtonRef}
        className={styles["content-mobile-menu-button"]}
        onClick={() => setOpenActionsMenu(!openActionsMenu)}
      >
        <Menu />
      </button>
      <menu
        ref={menuRef}
        data-open={openActionsMenu}
        className={styles["content-menu"]}
      >
        <Link href={appRoutes.articles} className={styles["content-item"]}>
          <BookOpen />
          articles
        </Link>
        <Link href={appRoutes.contact} className={styles["content-item"]}>
          <Inbox />
          contact
        </Link>
        <button
          onClick={toggleColorScheme}
          className={styles["colorscheme-button"]}
        >
          {colorScheme === "dark" ? <Moon /> : <Sun />}
          {colorScheme}
        </button>
      </menu>
    </section>
  );
}
