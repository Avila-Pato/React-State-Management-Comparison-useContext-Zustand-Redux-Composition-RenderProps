import { createSlice  } from "@reduxjs/toolkit";

const initialState = [
    {
      id: "1",
      title: 'task1',
      description: 'Task description 1',
      completed: false
    },
    {
      id: "2",
      title: 'task2',
      description: 'Task description 2',
      completed: false
    }
  ];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState, // estando en un array vacio, no se necesita el payload ya que es una app de tareas
    // ! Reducers son funciones que modifican el estado de la aplicacion
    reducers: {
        // Pintando los datos en el estado para que se puedan ver en el componente
        addTask: (state, action) => {
            state.push(action.payload)
            // [...state, action.payload]
        },
        deleteTask: (state, action) => {
            const taskIndex = state.findIndex(task => task.id === action.payload)
            if (taskIndex !== -1) {
                // splice recibe dos parametros, el primero es la posicion del 
                //elemento a eliminar y el segundo es la cantidad de elementos a eliminar
                state.splice(taskIndex, 1)
            }
        },
        editTask: (state, action) => {
            const { id, title, description } = action.payload
            const taskFound = state.find(task => task.id === id)
            if (taskFound) {
                taskFound.title = title
                taskFound.description = description
            }
        }
    }
    
})
export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer