import React from 'react'

export default function NumberButton({number,onClickNumber}) {
  return (
    <>
      <button className="btn btn-outline btn-primary-content rounded-none" value={number} onClick={onClickNumber}>{number}</button>
    </>
  )
}
