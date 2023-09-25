import Link from "next/link";
import { appRoutes } from "@/utils/routes";
import styles from "./mastHead.module.css";
import ActionButtons from "./ActionButtons";

export default function MastNavigation() {
  return (
    <nav className={styles["mast"]}>
      <section>
        <Link className={styles["brand-title"]} href={appRoutes.home}>
          Cesar Diaz
        </Link>
      </section>
      <ActionButtons />
    </nav>
  );
}
