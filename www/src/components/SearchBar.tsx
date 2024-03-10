import { JSX } from "solid-js";

import styles from "./SearchBar.module.scss";

export type TSearchInputProps = Omit<
  JSX.InputHTMLAttributes<HTMLInputElement>,
  "placeholder" | "class"
>;

export const SearchInput = (props: TSearchInputProps) => {
  return (
    <div class={styles.search}>
      <input {...props} class={styles.search_input} placeholder="Search" />
    </div>
  );
};
