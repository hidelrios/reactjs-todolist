import styles from "./Info.module.css";

type Props = {
  info: string;
  count: string;
  type: "task_created" | "task_completed";
};

export function Info({ info, count, type }: Props) {
  return (
    <div className={styles.container}>
      <span
        className={styles.infoText}
        style={{
          color: type === "task_created" ? "var(--blue)" : "var(--purple)",
        }}
      >
        {info}
      </span>
      <span className={styles.count}>{count}</span>
    </div>
  );
}
