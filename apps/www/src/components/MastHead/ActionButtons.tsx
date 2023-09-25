"use client";

import Link from "next/link";
import { useRef, useEffect , useState } from "react";
import { BookOpen, Menu, Inbox, Moon, Sun } from "react-feather";
import { useTogglePreferredColorScheme } from "@/utils/useTogglePreferredColorscheme";
import { appRoutes } from "@/utils/routes";
import styles from "./mastHead.module.css";

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
    return () => { document.removeEventListener("click", clickedAwayFromMenu); };
  }, [menuButtonRef, menuRef]);

  return (
    <section content={styles["content-container"]}>
      <button
        className={styles["content-mobile-menu-button"]}
        onClick={() => { setOpenActionsMenu(!openActionsMenu); }}
        ref={menuButtonRef}
      >
        <Menu />
      </button>
      <menu
        className={styles["content-menu"]}
        data-open={openActionsMenu}
        ref={menuRef}
      >
        <Link className={styles["content-item"]} href={appRoutes.articles}>
          <BookOpen />
          articles
        </Link>
        <Link className={styles["content-item"]} href={appRoutes.contact}>
          <Inbox />
          contact
        </Link>
        <button
          className={styles["colorscheme-button"]}
          onClick={toggleColorScheme}
        >
          {colorScheme === "dark" ? <Moon /> : <Sun />}
          {colorScheme}
        </button>
      </menu>
    </section>
  );
}
