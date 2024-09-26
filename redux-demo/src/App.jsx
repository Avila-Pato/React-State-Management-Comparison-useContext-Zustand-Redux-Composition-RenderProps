import { useSelector } from "react-redux";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList";

// Enrutador de la aplicacion
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);

  return (
    <>
      <div className="">
        {/* Envolvemos la app en un contenedor con Tailwind */}
        <div className="w-full max-w-4xl p-4">
          {/* Rutas de la aplicacion */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/edit-task/:id" element={<TaskForm />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
