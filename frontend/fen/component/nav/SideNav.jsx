import React from 'react'
import {RiPlayListFill} from 'react-icons/ri'
import {MdOutlineLibraryMusic,MdDeleteOutline} from 'react-icons/md'

function SideNav() {
  return (
    <div className='sideNav active'>
    <ul>
        <li className="li liactive"><a href="/Dashboard" ><RiPlayListFill/>Make Playlist</a></li>
    </ul>
    <ul>
    <li><a href="/Dashboard"><MdDeleteOutline/>Delete Playlist</a></li>
</ul>
<ul>
<li><a href="/Dashboard"><MdOutlineLibraryMusic/>Your Playlist</a></li>
</ul>
   
    </div>
  )
}

export default SideNav