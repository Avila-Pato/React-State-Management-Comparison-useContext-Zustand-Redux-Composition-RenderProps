import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasks";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams, Link } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasksState = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(
        editTask({
          id: params.id,
          ...task,
        })
      );
    } else {
      dispatch(
        addTask({
          id: uuid(),
          ...task,
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasksState.find((task) => task.id === params.id);
      setTask({
        title: taskFound.title,
        description: taskFound.description,
      });
    }
  }, [params.id, tasksState]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-white mb-4">
        {params.id ? "Edit Task" : "Create Task"}
      </h2>
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-6 rounded-md shadow-lg">
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter task title"
            onChange={handleChange}
            value={task.title}
            className="w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter task description"
            onChange={handleChange}
            value={task.description}
            className="w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button 
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Save
        </button>
      </form>
      
      {/* Botón para volver a la página principal */}
      <div className="mt-4">
        <Link to="/" className="inline-block bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200">
          Back to Tasks
        </Link>
      </div>
    </div>
  );
}

export default TaskForm;
