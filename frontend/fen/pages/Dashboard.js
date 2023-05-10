import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React, { useState } from 'react'
import Modal from '../component/Modal/Modal'
export default function Dashboard() {
  const [openModal,setOpenModal] = useState(false)
  return (
    <div className="dashContainer">
    <div className='dashNav'>
    <Nav 
    logout = {true}/>
    </div>
    <div className='dashmidContainer'>
    <button className='openModal' onClick={()=>{
      setOpenModal(true)
    }}style={{color:"black"}}>afd</button>
    {openModal && <Modal setOpenModal={setOpenModal} />}
    <p align="center">Mix Match your audios!!</p>
     <div>
    <Dash />
    </div>
    </div>
    </div>
  )
}
