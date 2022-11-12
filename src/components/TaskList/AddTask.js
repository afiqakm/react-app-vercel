import { useState } from 'react';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    const [errText, setErrText] = useState('');
    const [error, setError] = useState(false);

    function handleClick(text) {
        if (text.trim().length !== 0) {
            if ((text.length < 20)) {
                onAddTask(text)
                setError(false)
                
            } else {
                console.log(text.length)
                setError(true)
                setErrText('value are too long!')
            }
        }
        else {
            setError(true)
            setErrText('Please enter a value!')
        }
    };
    return (
        <>
            <div className='flex flex-col w-full px-5 m-auto  md:max-w-lg justify-between'>
                <div className="form-control w-full max-w-lg ">
                    <label className="label">
                        <span className="label-text">What is your Task?</span>
                        <span className="label-text-alt pr-20">Keep it short!</span>
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
                            onClick={(e) => {
                                setText('');
                                handleClick(text);
                            }}>
                            Add
                        </button>
                    </div>
                    <label className="label">
                        {error && <span className="label-text text-error">{errText}</span>}
                        {!error && <span className="label-text text-base-100">whitespace</span>}
                    </label>
                </div>
            </div>
        </>
    );
}