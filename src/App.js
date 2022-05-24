import About from "./Container/About"
import Profile from "./Container/Profile"
import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [state, setState] = useState('')

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/about" element={<About />}/>
            <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>


        </div>
        )
}

        export default App 
