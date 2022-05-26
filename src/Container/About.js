import React from 'react'
import './about.css'
function About(props) {
  return (
    <div className='about'>
      <h1>About me {props.data}</h1>
    </div>
  )
}

export default About
