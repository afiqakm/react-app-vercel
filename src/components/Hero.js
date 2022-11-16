import React from 'react'
import { ReactComponent as Logo } from '../assets/images/afiq.svg'
import { Parallax } from 'react-scroll-parallax';


export default function Hero() {
  return (
    <Parallax
      className="fixed inset-x-0 top-11 w-40 pt-4 z-50"
      translateX={['880px', '50px']}
      scale={['100%','50%']}
      shouldAlwaysCompleteAnimation={true}
      
    >
      <Logo />
    </Parallax>
  )
}
//<div className="fixed inset-x-0 top-0 w-40 pt-10">