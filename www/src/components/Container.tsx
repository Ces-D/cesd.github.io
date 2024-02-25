import type { ParentProps } from "solid-js";
import "./Container.scss";

export const Main = ({ children }: ParentProps<unknown>) => {
  return <main class="main">{children}</main>;
};
