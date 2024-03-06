import cicle_on from "../../assets/cicle-on.svg";
import cicle_off from "../../assets/cicle-off.svg";
import trash from "../../assets/trash.svg";
import styles from "./Task.module.css";
import { Trash, Circle, CheckCircle } from "@phosphor-icons/react";

export type Task = {
  name: string;
  concluded: boolean;
  onChangeStatus?: () => void;
  onRemove?: () => void;
};

export function Task({ name, concluded, onChangeStatus, onRemove }: Task) {
  return (
    <div className={styles.container}>
      <button onClick={onChangeStatus} className={styles.buttonIcon}>
        {concluded ? (
          <CheckCircle size={20} weight="fill" color="#5E60CE" />
        ) : (
          <Circle size={20} color="#4EA8DE" />
        )}
      </button>
      <div className={styles.content}>
        {concluded ? (
          <span className={styles.contentSpan}>{name}</span>
        ) : (
          <span>{name}</span>
        )}
      </div>
      <button className={styles.buttonIcon} onClick={onRemove}>
        <Trash size={20}></Trash>
      </button>
    </div>
  );
}
