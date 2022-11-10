import React from 'react'
import {ReactComponent as Logo } from '../assets/images/afiq.svg'


export default function Hero() {
  return (
    <div>
      <div className=" m-auto flex inset-x-0 top-0 w-40 pt-10">
        <Logo/>
      </div>
    </div>
  )
}
