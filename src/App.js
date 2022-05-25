import About from "./Container/About"
import Profile from "./Container/Profile"
import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [state, setState] = useState('')

  return (
    <div className='App'>
      

        
        <Link to='/about'>About Page</Link>
        <Link to='/profile'>Profile page</Link>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      
 

    </div>
  )
}

export default App 
