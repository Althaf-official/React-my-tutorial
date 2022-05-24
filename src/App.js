import About from "./Container/About"
import Profile from "./Container/Profile"
import {useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'//route means when we click on something where should be it have to go we are defining thats called routing

function App() {
  const[state,setState] =useState('')
  
  return (
    <div className='App'>
    <button onClick={()=>setState('about')} >About</button>
    <button onClick={()=>setState('profile')}>Profile</button>
    <Router>
      
    </Router>

    </div>
  )
}

export default App 
