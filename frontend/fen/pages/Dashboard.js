import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
    <Nav 
    logout = {true}/>
    <Dash />
    </div>
  )
}
