interface Task {
    id: string;
    name: string;
  }
  
  interface Props {
    list: Task[];
    deleteTask: (id: string) => void;
  }
  
  const TasksList = ({ list, deleteTask }: Props) => {
    return (
      <ul>
        {list.map((task) => (
          <li key={task.id}>
            <p>{task.name}</p>
            <button onClick={() => deleteTask(task.id)}>Borrar tarea</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TasksList;
  