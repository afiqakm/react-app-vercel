import React from 'react'
import NumberButton from './NumberButton'
import { useState, useEffect } from 'react'



export default function Calculator() {
    const [number, setNumber] = useState('')

    useEffect(() => {


    }, [])

    let total;
    function getTotal(num) {
        //total = total +num.toString();
    }


    return (
        <div className='flex flex-col w-full max-w-lg item-center justify-center h-120 gap-4'>
            <input
                type="text"
                value={total}
                placeholder=""
                className="input input-lg input-bordered input-primary w-full max-w-md mx-auto hover:cursor-pointer" disabled />
            <div className='max-w-md grid grid-cols-3 gap-1 h-fit w-full mx-auto'>
                <NumberButton number="1" onClick={getTotal(1)} />
                <NumberButton number="2" onClick={getTotal(2)} />
                <NumberButton number="3" onClick={getTotal(3)} />
                <NumberButton number="4" onClick={getTotal(4)} />
                <NumberButton number="5" onClick={getTotal(5)} />
                <NumberButton number="6" onClick={getTotal(6)} />
                <NumberButton number="7" onClick={getTotal(7)} />
                <NumberButton number="8" onClick={getTotal(8)} />
                <NumberButton number="9" onClick={getTotal(9)} />
                <NumberButton number="0" onClick={getTotal(0)} />
                <button className="btn btn-outline btn-accent rounded-none col-span-2">Submit</button>
            </div>
        </div>
    )
}
