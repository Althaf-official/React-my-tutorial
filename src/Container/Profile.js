import React from 'react'
import One from '../components/One'
import Two from '../components/Two'
import "./profile.css"

function Profile(props) {
  return (
    <div className='profile'>
      <h1>Profile</h1>
      <One data={props.data}></One>
    </div>
  )
}

export default Profile
