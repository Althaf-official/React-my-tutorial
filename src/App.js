import About from "./Container/About"
import Profile from "./Container/Profile"
import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [state, setState] = useState(10)
  const navigate =useNavigate()

  return (
    <div className='App'>
        <button onClick={()=>navigate('/about')}>About me</button>
        <button onClick={()=>navigate('/profile')}>profile</button>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Profile data={state} />}/>
        </Routes>
    </div>
  )
}

export default App 
