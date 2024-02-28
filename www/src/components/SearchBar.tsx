import { JSX } from "solid-js";

import styles from "./SearchBar.module.scss";

export type TSearchInputProps = Omit<
  JSX.InputHTMLAttributes<HTMLInputElement>,
  "placeholder" | "class"
>;

export const SearchInput = (props: TSearchInputProps) => {
  return <input {...props} class={styles.search} placeholder="Search" />;
};
