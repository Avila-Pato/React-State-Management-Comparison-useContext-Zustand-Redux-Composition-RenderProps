import { useState } from "react";
import TasksList from "./components/TasksList";

interface Task {
  id: string;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const task = formData.get("task") as string;

    if (task.trim() === "") {
      setError("El campo es obligatorio");
    } else {
      setTasks([...tasks, { id: Date.now().toString(), name: task }]);
      setError(""); // Limpia el mensaje de error
      form.reset();
    }
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" name="task" style={{ display: "block" }} />
          <p>{error}</p>
          <input type="submit" value="Enviar" />
        </form>
        <h1>Task</h1>
        <TasksList list={tasks} deleteTask={deleteTask} />
      </main>
    </>
  );
}

export default App;
