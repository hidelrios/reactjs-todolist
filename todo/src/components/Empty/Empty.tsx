import clipboard from "../../assets/clipboard.svg";
import styles from "./Empty.module.css";

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="" />
      <span>Você ainda não tem tarefas cadastradas</span>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
