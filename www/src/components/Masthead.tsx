import type { ParentProps } from "solid-js";

import { route } from "../routes/constants";
import styles from "./Masthead.module.scss";

export const Masthead = ({ children }: ParentProps<unknown>) => {
  return (
    <section class={styles.masthead}>
      <div class={styles.masthead_container}>
        <a href={route.Home}>
          <h4 class={styles.masthead_container_heading}>Cesar Diaz</h4>
        </a>
        <nav class={styles.masthead_container_nav}>{children}</nav>
      </div>
    </section>
  );
};
