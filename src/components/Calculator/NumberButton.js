import React from 'react'

export default function NumberButton(props) {
  return (
    <>
      <button className="btn btn-outline btn-primary-content rounded-none" >{props.number}</button>
    </>
  )
}
