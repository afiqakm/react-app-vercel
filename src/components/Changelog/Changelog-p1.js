import React from 'react'

export default function ChangelogP1() {
  return (
    <div className='flex flex-col w-full max-w-xl h-150 z-20 bg-base-300 overflow-y-auto rounded-xl '>
      <div className='sticky flex justify-between items-center gap-4 p-2'>
        <p className='text-xl font-extrabold p-3'>Changelog <span className='badge font-mono font-light text-italic'>V 3.2</span></p>
        <div className='flex flex-row items-center gap-4 '>
          <h1 className='badge text-center font-mono'>Completed with known bug</h1>
          <div className="radial-progress text-primary text-sm " style={{ "--value": 95, "--size": "50px" }}>95%</div>
        </div>

      </div>
      <div className="divider mt-0"></div>
    </div>
  )
}
