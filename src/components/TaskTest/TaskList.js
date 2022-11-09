import { useState } from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    let taskContent, buttonContent, checkedContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            text: e.target.value,
                        });
                    }}
                    className="input input-bordered w-full"
                />

            </>
        );

        buttonContent = (
            <>
                <button
                    onClick={() => setIsEditing(false)}
                    className="btn btn-secondary"
                >Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                {task.text}
            </>
        );
        buttonContent = (
            <>
                <button
                    onClick={() => setIsEditing(true)}
                    className="btn btn-secondary"
                >Edit</button>
            </>
        )
    }

    if (!isChecked) {
        checkedContent = (
            <>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            done: e.target.checked,
                        });
                    }}
                    className='checkbox'
                    onClick={() => setIsChecked(true)}
                />


                <h2 className="card-title text-left">{taskContent}</h2>
            </>
        )

    } else {
        checkedContent = (
            <>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => {
                        onChange({
                            ...task,
                            done: e.target.checked,
                        });
                    }}
                    className='checkbox'
                    onClick={() => setIsChecked(false)}
                />


                <h2 className="card-title line-through text-left">{taskContent}</h2>
            </>
        )
    }
    return (
        <div className='flex flex-col w-full py-5 '>
            <div className="card w-full bg-base-300 shadow-xl">
                <div className="flex flex-row flex-wrap card-body items-center justify-between">
                    <div className='flex flex-row gap-4 items-center'>
                        {checkedContent}
                    </div>
                    <div className="card-actions ">
                        {buttonContent}
                        <button
                            onClick={() => onDelete(task.id)}
                            className="btn btn-circle bg-red-800 hover:bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
