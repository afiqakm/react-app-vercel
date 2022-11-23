import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai";

export default function Calendar() {
    return (
        <div className='flex flex-row justify-center max-w-lg h-120 px-5 w-full'>
            <div className="form-control w-full max-w-md">
                <label className="label">
                    <span className="label-text text-lg">Date-picker:</span>
                </label>
                <div className='flex flex-row justify-between'>
                    <button className="btn btn-primary rounded-l-lg rounded-none"><AiOutlineCalendar size={"20px"} /></button>
                    <input type="text" placeholder="00/00/0000" className="input input-bordered w-full max-w-md rounded-r-lg rounded-none" />

                </div>

                <label className="label">
                    <span className="label-text-alt">Click on calendar icon to add data</span>
                </label>
            </div>
        </div>
    )
}
