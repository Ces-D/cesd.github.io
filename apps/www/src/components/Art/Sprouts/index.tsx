"use client";

import { useSyncToColorScheme } from "@/utils/useSyncToColorScheme";
import styles from "./sprout.module.css";
import LilyFlower from "./LilyFlower";


// see - https://codepen.io/mdusmanansari/pen/BamepLe
// see - https://codepen.io/Laura_Salgado/pen/bWKNLm
// see - https://codepen.io/trinketmage/pen/MGgLYJ

export default function SproutingPlants() {
  const colorScheme = useSyncToColorScheme();

  return (
    <div className={styles["sprouting-container"]} data-theme={colorScheme}>
      <div className={styles["content"]}>
        <LilyFlower />
      </div>
    </div>
  );
}
