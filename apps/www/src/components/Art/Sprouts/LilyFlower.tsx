import styles from "./lily.module.css";

export default function LilyFlower() {
  return (
    <div className={styles["lily-flower"]}>
      <div className={styles["flower-head"]}>
        <span className={styles["petal"]} />
      </div>
      <div className={styles["stem"]}>
        <span className={styles["leaf"]} />
        <span className={styles["leaf"]} />
        <span className={styles["leaf"]} />
        <span className={styles["leaf"]} />
      </div>
    </div>
  );
}
