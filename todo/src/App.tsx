import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import plus from "./assets/plus.svg";
import { Info } from "./components/Info/Info";
import { Empty } from "./components/Empty/Empty";
import { Task } from "./components/Task/Task";
import { ChangeEvent, FormEvent, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskConcluded, setTaskConcluded] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    if (newTaskText === "") {
      return alert("Task vazia");
    }
    // Verifique se já existe uma tarefa com o mesmo nome
    const taskExists = tasks.some((task) => task.name === newTaskText);
    if (taskExists) {
      return alert("Task já existe");
    }

    const newTask: Task = {
      name: newTaskText,
      concluded: false,
    };

    event.preventDefault();

    setTasks((prevState) => [...prevState, newTask]);
    setNewTaskText("");

    setTaskCreated(taskCreated + 1);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>): void {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleTaskChangeStatus(name: string): void {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.name === name && task.concluded === false) {
          setTaskConcluded(taskConcluded + 1);
          return { ...task, concluded: !task.concluded };
        } else if (task.name === name && task.concluded === true) {
          setTaskConcluded(taskConcluded - 1);
          return { ...task, concluded: !task.concluded };
        }
        return task;
      });
    });
  }

  function handleTaskRemove(name: string): void {
    setTasks((prevState) => {
      const newTasks = prevState.filter((task) => task.name !== name);
      const removedTask = prevState.find((task) => task.name === name);

      if (removedTask) {
        if (removedTask.concluded) {
          // Se a tarefa removida estiver concluída
          const newTaskCreated = Math.max(taskCreated - 1, 0);
          const newTaskConcluded = Math.max(taskConcluded - 1, 0);

          // Se não restarem tarefas, defina ambos os contadores para 0
          if (newTaskCreated === 0 && newTaskConcluded === 0) {
            setTaskCreated(0);
            setTaskConcluded(0);
          } else {
            setTaskCreated(newTaskCreated);
            setTaskConcluded(newTaskConcluded);
          }
        } else {
          // Se a tarefa removida não estiver concluída
          setTaskCreated(Math.max(taskCreated - 1, 0));
        }
      }

      return newTasks;
    });
  }
  return (
    <div className={styles.container}>
      <Header></Header>
      <form onSubmit={handleCreateNewTask} className={styles.formInput}>
        <input
          name="task"
          value={newTaskText}
          onChange={handleNewTaskChange}
          placeholder="Adicione uma nova tarefa"
          className={styles.inputTextarea}
        />
        <button className={styles.buttonCreate} type="submit">
          Criar
          <img src={plus} alt="" />
        </button>
      </form>
      <main>
        <div className={styles.status}>
          <Info
            info="Tarefas criadas"
            count={taskCreated}
            type="task_created"
          />
          <Info info="Concluídas" count={taskConcluded} type="task_completed" />
        </div>
        {tasks.length === 0 ? (
          <Empty />
        ) : (
          tasks.map((task) => (
            <Task
              key={task.name}
              name={task.name}
              concluded={task.concluded}
              onChangeStatus={() => handleTaskChangeStatus(task.name)}
              onRemove={() => handleTaskRemove(task.name)}
            />
          ))
        )}
      </main>
    </div>
  );
}

export default App;
