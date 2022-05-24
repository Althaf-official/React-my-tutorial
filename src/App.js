import About from "./Container/About"
import Profile from "./Container/Profile"
import {useState} from 'react'

function App() {
  const[state,setState] =useState('')
  return (
    <div className='App'>

    <button onClick={()=>setState('about')} >About</button>
    <button onClick={()=>setState('profile')}>Profile</button>

     <About></About>
     <Profile></Profile>
    </div>
  )
}

export default App 
