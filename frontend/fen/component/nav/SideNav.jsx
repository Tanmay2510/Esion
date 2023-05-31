import React from 'react'
import {RiPlayListFill} from 'react-icons/ri'
import {MdOutlineLibraryMusic,MdDeleteOutline} from 'react-icons/md'
import useAuth from '@/hook/useAuth'
import { setModal } from '@/context/userAction';


function SideNav() {
  const {userDispatch,sideNavClicked,createPlaylistClicked,deletePlaylistClicked,yourPlaylistClicked} = useAuth();
  const handleClick = (whichOne) => () =>{
    userDispatch(setModal(sideNavClicked,whichOne));

  }
  
  return (
    <div className='sideNav active'>
    <div className="sideNavHead">
    <h1 className='sideNavp' align="center">ESION</h1>
    </div>

    <ul>
        <li className="li liactive"><button className='insideButton' onClick={handleClick(
          "createPlaylistClicked"
        )}>Make Playlist<RiPlayListFill/></button></li>
    </ul>
    <ul>
    <li><button className='insideButton' onClick={handleClick("deletePlaylistClicked")}>Delete Playlist<MdDeleteOutline/></button></li>
</ul>
<ul>
<li><button className='insideButton' onClick={handleClick("yourPlaylistClicked")}>Your Playlist<MdOutlineLibraryMusic/></button></li>
</ul>
   
    </div>
  )
}

export default SideNav