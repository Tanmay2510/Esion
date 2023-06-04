import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React, { useState } from 'react'
import Modal from '@/component/Modal/Modal'
import SideNav from '@/component/nav/SideNav'
import useAuth from '@/hook/useAuth'
export default function DynamicPage() {

  const {sideNavClicked} = useAuth();
  return (
    <div className="dashContainer">
    {sideNavClicked && 
      <Modal />

    }
    <div className='noModalCover'>
    <SideNav />
    <div className='dashNav'>
    <Nav 
    logout = {true}/>
    <div className='dashmidContainer'>
    <p align="center">Mix Match your audios!!</p>
     <div>
    <Dash />
    </div>
    </div>
    </div>

    </div>
    </div>
  )
}
