import React from 'react'
import NumberButton from './NumberButton'
import { useState } from 'react'



export default function Calculator() {
    const [number, setNumber] = useState('')
    const [total, setTotal] = useState('')


    let addTotal = "";

    const handleChange = (event) => {
        //setTotal(event.target.value);
    };

    function handleClick(num) {
        addTotal += num;
        //console.log(addTotal)
        setNumber(number + addTotal)
    };

    const handleSubmit = () => {
        setTotal(number);
    };

    const handleClear = () => {
        setNumber("")
    };

    return (
        <>
            <p className=' font-bold text-lg max-w-sm w-full mx-auto'>Output: {total}</p>
            <div className='flex flex-col w-full max-w-lg item-center justify-center h-120 gap-4'>
                <input
                    type="text"
                    value={number}
                    onChange={handleChange}
                    placeholder=""
                    className="input input-lg input-bordered input-primary w-full max-w-md mx-auto text-2xl caret" />
                <div className='max-w-md grid grid-cols-3 gap-1 h-fit w-full mx-auto'>
                    <NumberButton number="1" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="2" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="3" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="4" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="5" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="6" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="7" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="8" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="9" onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="." onClickNumber={e => handleClick(e.target.value)} />
                    <NumberButton number="0" onClickNumber={e => handleClick(e.target.value)} />
                    <button className="btn btn-outline btn-accent rounded-none" onClick={handleClear}>Clear</button>
                    <button className="btn btn-outline btn-accent rounded-none col-span-3" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    )
}
