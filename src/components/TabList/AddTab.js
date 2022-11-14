
import {  useState } from 'react'

export default function AddTab({ onAddTab }) {

  const [text, setText] = useState('');
  const [errText, setErrText] = useState('');
  const [error, setError] = useState(false);
  const [success,setSuccess] = useState(false);

  function handleClick(text) {
    if (text.trim().length !== 0) {
      if ((text.length < 10)) {
        onAddTab(text)
        setError(false)
        setSuccess(true)
        setErrText('New tab added!')
      } else {
        console.log(text.length)
        setError(true)
        setSuccess(false)
        setErrText('value are too long! more than 10 character.')
      }
    }
    else {
      setError(true)
      setSuccess(false)
      setErrText('Please enter a value!')
    }
  };

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
                
                className='btn btn-primary '
                onClick={() => {
                  setText('');
                  handleClick(text);
                }}>
                Add
              </label>
            </div>
          </div>
          <label className="label">
            {error && <span className="label-text text-error">{errText}</span>}
            {success && <span className="label-text text-success">{errText}</span>}
            {!error && <span className="label-text text-base-100">whitespace</span>}
          </label>
        </label>
      </label>
    </>
  )
}
