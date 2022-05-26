import React,{useContext} from 'react'
import {AppContext} from '../AppContext'

function Two() {
    const {data} = useContext(AppContext)
  return (
    <div style={{backgroundColor:'yellow',width:'200px'}}>
      <h1>leyer two {data}</h1>
    </div>
  )
}

export default Two
