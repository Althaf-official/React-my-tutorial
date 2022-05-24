import About from "./Container/About"
import Profile from "./Container/Profile"
import {useState} from 'react'

function App() {
  const[state,setState] =useState('')
  let component
  

  
  return (
    <div className='App'>
    <button onClick={()=>setState('about')} >About</button>
    <button onClick={()=>setState('profile')}>Profile</button>
    {component}
    </div>
  )
}

export default App 
