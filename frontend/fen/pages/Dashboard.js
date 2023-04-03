import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React from 'react'

export default function Dashboard() {
  return (
    <div className="dashContainer">
    <div className='dashNav'>
    <Nav 
    logout = {true}/>
    </div>
    <div className='dashmidContainer'>
    <p align="center">Mix Match your audios!!</p>
     <div>
    <Dash />
    </div>
    </div>
    </div>
  )
}
