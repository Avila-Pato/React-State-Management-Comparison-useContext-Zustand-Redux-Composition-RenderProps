import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/tasks';
import { Link } from 'react-router-dom';

function TaskList() {
    const tasksState = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    }

    return (
        <div className="container mx-auto p-4">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-4xl text-white font-bold">Tasks ({tasksState.length})</h1>
                <Link to="/create-task" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                    Create Task
                </Link>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    tasksState.map(task => (
                        <div key={task.id} className="bg-zinc-800 p-4 rounded-md shadow-lg">
                            <h3 className="text-xl font-semibold text-white mb-2">{task.title}</h3>
                            <p className="text-gray-400 mb-4">{task.description}</p>
                            <div className="flex justify-between">
                                <button 
                                    onClick={() => handleDelete(task.id)} 
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                                >
                                    Delete
                                </button>
                                <Link 
                                    to={`/edit-task/${task.id}`} 
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200"
                                >
                                    Edit
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TaskList;
