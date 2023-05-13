import React, { useEffect, useState } from 'react'
import {RiPlayListFill} from 'react-icons/ri'
import {MdOutlineLibraryMusic,MdDeleteOutline} from 'react-icons/md'
import useAuth from '@/hook/useAuth'
import { setModal } from '@/context/userAction';

function SideNav() {
  const {userDispatch,sideNavClicked} = useAuth();
  const handleClick = () =>{
    userDispatch(setModal(sideNavClicked));

  }
  
  return (
    <div className='sideNav active'>
    <ul>
        <li className="li liactive"><button className='insideButton' onClick={handleClick}>Make Playlist<RiPlayListFill/></button></li>
    </ul>
    <ul>
    <li><button className='insideButton' onClick={handleClick}>Delete Playlist<MdDeleteOutline/></button></li>
</ul>
<ul>
<li><button className='insideButton' onClick={handleClick}>Your Playlist<MdOutlineLibraryMusic/></button></li>
</ul>
   
    </div>
  )
}

export default SideNav