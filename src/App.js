import About from "./Container/About"
import Profile from "./Container/Profile"
import {useState} from 'react'

function App() {
  return (
    <div className='App'>

    <button>About</button>
    <button>Profile</button>

     <About></About>
     <Profile></Profile>
    </div>
  )
}

export default App 
