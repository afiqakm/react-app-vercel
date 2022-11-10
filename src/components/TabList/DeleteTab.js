import { useState } from 'react'

export default function DeleteTab({ onDeleteTab, tabs }) {
    const [tab, setTabs] = useState(tabs)

    function handleDeleteTab(tabId) {
        setTabs(tab.filter((t) => t.id !== tabId));
    }

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
                                
                                {tabs.map((tab) => (
                                    <option
                                        key={tab.id}
                                        value={tab.id}
                                    >{tab.text}</option>
                                ))}
                            </select>
                            <label
                                htmlFor="my-modal-5"
                                className='btn btn-error '
                                onClick={(e) => handleDeleteTab(1)}
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
