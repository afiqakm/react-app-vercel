import { useState } from 'react'

export default function DeleteTab({ onDeleteTab, tabs }) {
    return (
        <>
            <label htmlFor="my-modal-5" className="btn btn-primary">Delete Tab</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <label htmlFor="my-modal-5" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div className="form-control w-full max-w-lg ">
                        <label className="label">
                            <span className="label-text">Delete Tab</span>
                            <span className="label-text-alt pr-24">one at a time!</span>
                        </label>
                        <div className='flex flex-row  w-full justify-between max-w-lg gap-5 '>
                            <select className="shrink select select-bordered w-full max-w-lg">
                                <option disabled selected>Pick one</option>
                                {tabs.map((tab) => (
                                    <option
                                        key={tab.id}

                                    >{tab.text}</option>
                                ))}
                            </select>
                            <label
                                htmlFor="my-modal-5"
                                className='btn btn-error '
                            >
                                Delete!
                            </label>
                        </div>
                    </div>
                </label>
            </label>
        </>
    )
}
