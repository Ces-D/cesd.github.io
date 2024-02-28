import type { JSX, ParentProps } from "solid-js";
import styles from "./Container.module.scss";

export const Main = ({ children }: ParentProps<unknown>) => {
  return <main class={styles.main}>{children}</main>;
};

export const Article = ({ children }: ParentProps<unknown>) => {
  return <article class={styles.article}>{children}</article>;
};

export const Dialog = ({
  children,
  ...props
}: ParentProps<Omit<JSX.DialogHtmlAttributes<HTMLDialogElement>, "class">>) => {
  return (
    <dialog {...props} class={styles.dialog}>
      {children}
    </dialog>
  );
};
