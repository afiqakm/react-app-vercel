
import {  useState } from 'react'

export default function AddTab({ onAddTab }) {

  const [text, setText] = useState('');

  return (
    <>
      <label htmlFor="my-modal-4" className="btn btn-primary">Add Tab</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="form-control w-full max-w-lg ">
            <label className="label">
              <span className="label-text">Add new tab</span>
              <span className="label-text-alt pr-20">one word only!</span>
            </label>
            <div className='flex flex-row w-full justify-between gap-5 max-w-lg '>
              <input
                placeholder="Personal, Meeting, etc .."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required={true}
                className="input input-bordered w-full max-w-lg"
              />
              <label
                htmlFor="my-modal-4"
                className='btn btn-primary '
                onClick={() => {
                  setText('');
                  onAddTab(text);

                }}>
                Add
              </label>
            </div>
          </div>
        </label>
      </label>
    </>
  )
}
