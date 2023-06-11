import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React from 'react'
import Modal from '@/component/Modal/Modal'
import SideNav from '@/component/nav/SideNav'
import useAuth from '@/hook/useAuth'
import YrPlaylist from '@/component/Playlist/YrPlaylist'
export default function DynamicPage() {

  const {sideNavClicked,yourPlaylistClicked} = useAuth();
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
    {yourPlaylistClicked && <YrPlaylist />}
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
