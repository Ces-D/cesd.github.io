"use client";

import styles from "./sprout.module.css";

import { useSyncToColorScheme } from "@/utils/useSyncToColorScheme";

// see - https://codepen.io/mdusmanansari/pen/BamepLe
// see - https://codepen.io/Laura_Salgado/pen/bWKNLm
// see - https://codepen.io/trinketmage/pen/MGgLYJ

export default function SproutingPlants() {
  const colorScheme = useSyncToColorScheme();

  return (
    <div className={styles["sprouting-container"]} data-theme={colorScheme}>
      <div
        className={styles["circle-alpha"]}
        style={{ gridColumn: "5 / 5", gridRow: "3 / 6" }}
      ></div>
      <div
        className={styles["circle-omega"]}
        style={{ gridColumn: "7 / 10", gridRow: "5 / 8" }}
      ></div>
      <div className={styles["stem-1"]}>
        <div className={styles["stem-anchor"]}>
          <div className={styles["leaf-1"]}></div>
          <div className={styles["leaf-2"]}></div>
        </div>
      </div>

      <div className={styles["stem-2"]}>
        <div className={styles["stem-anchor"]}>
          <div className={styles["leaf-1"]}></div>
        </div>
      </div>
      <div className={styles["stem-3"]}>
        <div className={styles["stem-anchor"]}>
          <div className={styles["leaf-1"]}></div>
        </div>
      </div>
    </div>
  );
}
