import About from "./Container/About"
import Profile from "./Container/Profile"
import { useState } from 'react'
import { Routes, Route, Link,Router1, useNavigate } from "react-router-dom";

function App() {
  const [state, setState] = useState('')
  const history =useNavigate()

  return (
    <div className='App'>
        <button onClick={()=>history.push('/about')}>About me</button>
        <button onClick={()=>history.push('/profile')}>profile</button>
     
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
   
      
 

    </div>
  )
}

export default App 
