import React from 'react'

export default function ChangelogP1() {
  return (
    <div className='absolute m-100 flex flex-col w-full max-w-xl h-150 z-20 bg-base-300 overflow-y-auto rounded-xl scrollbar-hide'>
      <div className='sticky justify-between top-0 z-30 items-center bg-base-300 gap-4 p-2'>
        <p className='text-xl font-extrabold p-3'>Changelog</p>
        
      </div>
      <div className="divider mt-0"></div>
      <div className='flex flex-col pl-5 font-mono gap-2'>
        <div className="badge badge-info">beta</div>
        <li>Adding error message for null and long input.</li>
        <li>Adding success message for adding task.</li>
        <li>Making checkbox for every task in the task list.</li>
        <li>Adding strikethrough to the checked task. </li>
        <li>Adding scroll down arrow indicator for scrolling.</li>
        <div className="badge badge-warning mt-3">alpha</div>
        <li>Adding function to add task.</li>
        <li>Displaying data to the task list.</li>
        <li>Adding button for edit and delete task function.</li>
        <div className="badge badge-error mt-3">pre-alpha</div>
        <li>Creating UI for Adding task and task list placeholder.</li>
        <li>Designing the UI for the component.</li>
      </div>
    </div>
  )
}

/*
<div className="radial-progress bg-primary text-primary-content border-4 border-primary text-sm " style={{ "--value": 95, "--size": "50px" }}>95%</div>
function ChangeList(props) {

  let badge;
  switch (props.status) {
    case 'beta':
      badge = (
        <div className="badge badge-info">{props.status}</div>
      )
      break;
    case 'alpha':
      badge = (
        <div className="badge badge-warning">{props.status}</div>
      )
      break;
    case 'pre-alpha':
      badge = (
        <div className="badge badge-error">{props.status}</div>
      )
      break;
    default:
      badge = (
        <div className="badge badge-error">{props.status}</div>
      )
  }

  return (
    <>
      {badge}
      <p>{props.change}</p>
    </>
  )
}
*/
