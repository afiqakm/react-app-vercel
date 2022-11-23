import { useState } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import ScrollDown from './ScrollDown.js';

export default function TaskBoard() {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: text,
                done: false,
            },
        ]);
    }

    function handleChangeTask(task) {
        setTasks(
            tasks.map((t) => {
                if (t.id === task.id) {
                    return task;
                } else {
                    return t;
                }
            })
        );
    }

    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

    return (
        <>
            <AddTask onAddTask={handleAddTask} />
            <div className='relative tab-content bg-base-200 p-5 rounded-lg mx-5 h-120 min-h-full overflow-y-auto scrollbar-hide md:w-full max-w-xl'>
                <TaskList
                    tasks={tasks}
                    onChangeTask={handleChangeTask}
                    onDeleteTask={handleDeleteTask}
                />
            <ScrollDown /> 
            </div>
        </>
    );
}

let nextId = 2;
const initialTasks = [
    { id: 0, text: 'Dinner with family', done: false },
    { id: 1, text: 'Wash car', done: false },
];
