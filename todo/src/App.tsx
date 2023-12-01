import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import plus from "./assets/plus.svg";
import { Info } from "./components/Info/Info";
import { Empty } from "./components/Empty/Empty";
import { Card } from "./components/Card/Card";

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.formInput}>
        <input
          placeholder="Adicione uma nova tarefa"
          className={styles.inputTextarea}
        />
        <button type="submit">
          Criar
          <img src={plus} alt="" />
        </button>
      </div>
      <main>
        <div className={styles.status}>
          <Info info="Tarefas criadas" count="0" type="task_created" />
          <Info info="Concluídas" count="0" type="task_completed" />
        </div>
        {/* <Empty></Empty> */}
        <Card/>
      </main>
    </div>
  );
}

export default App;
