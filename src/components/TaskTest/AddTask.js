import { useState } from 'react';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    return (
        <>
            <div className='flex flex-col w-full justify-between max-w-lg '>
                <div className="form-control w-full max-w-lg">
                    <label className="label">
                        <span className="label-text">What is your Task?</span>
                    </label>
                    <div className='flex flex-row w-full justify-between gap-5 max-w-lg '>
                        <input
                            placeholder="Add task"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required={true}
                            className="input input-bordered w-full max-w-lg"
                        />
                        <button
                            className='btn btn-primary'
                            onClick={() => {
                                setText('');
                                onAddTask(text);
                            }}>
                            Add
                        </button>
                    </div>

                </div>


            </div>
        </>
    );
}