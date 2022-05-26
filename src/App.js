import About from "./Container/About"
import Profile from "./Container/Profile"
import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";

function App() {
  const [state, setState] = useState(10)
  const navigate =useNavigate()

  return (
    <div className='App'>
        <button onClick={()=>navigate('/about')}>About me</button>
        <button onClick={()=>navigate('/profile')}>profile</button>

        <AppContext.Provider value={{data:state}}>
        <Routes>
          <Route path="/about" element={<About  />}/>
          <Route path="/profile" element={<Profile  />}/>
        </Routes>
        </AppContext.Provider>
    </div>
  ) 
}

export default App 
