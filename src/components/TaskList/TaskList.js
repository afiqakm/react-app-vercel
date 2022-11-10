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
                    className="btn btn-info"
                >Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                <p className='truncate max-w-sm'>{task.text}</p> 
            </>
        );
        buttonContent = (
            <>
                <button
                    onClick={() => setIsEditing(true)}
                    className="btn btn-info"
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
        <div className='flex flex-col w-full py-1 '>
            <div className="card w-full bg-base-300 shadow-sm">
                <div className="flex flex-row flex-wrap card-body items-center justify-center lg:justify-between">
                    <div className='flex flex-row gap-4 items-center'>
                        {checkedContent}
                    </div>
                    <div className="card-actions ">
                        {buttonContent}
                        <button
                            onClick={() => onDelete(task.id)}
                            className="btn btn-error">
                                Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
