import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React, { useState } from 'react'
import Modal from '../component/Modal/Modal'
import useAuth from '@/hook/useAuth'
export default function Dashboard() {

  const {sideNavClicked} = useAuth();
  return (
    <div className="dashContainer">
    {sideNavClicked && 
      <Modal />

    }

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
