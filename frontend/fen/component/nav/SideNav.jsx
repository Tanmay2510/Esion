import React from 'react'
import {RiPlayListFill} from 'react-icons/ri'
import {MdOutlineLibraryMusic,MdDeleteOutline} from 'react-icons/md'

function SideNav() {
  return (
    <div className='sideNav active'>
    <ul>
        <li className="li liactive"><button className='insideButton' >Make Playlist<RiPlayListFill/></button></li>
    </ul>
    <ul>
    <li><button className='insideButton'>Delete Playlist<MdDeleteOutline/></button></li>
</ul>
<ul>
<li><button className='insideButton'>Your Playlist<MdOutlineLibraryMusic/></button></li>
</ul>
   
    </div>
  )
}

export default SideNav