import React,{useContext} from 'react'
import {AppContext} from '../AppContext'

function Two(props) {
    const {} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'yellow',width:'200px'}}>
      <h1>leyer two</h1>
      
    </div>
  )
}

export default Two
