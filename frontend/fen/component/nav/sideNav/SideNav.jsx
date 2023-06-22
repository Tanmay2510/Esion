import React,{useEffect, useState} from 'react'
import {RiPlayListFill} from 'react-icons/ri'
import {MdOutlineLibraryMusic,MdDeleteOutline} from 'react-icons/md'
import useAuth from '@/hook/useAuth'
import { setModal } from '@/context/userAction';
import SideDrop from './sideDrop';
import { motion } from 'framer-motion';
import { handleDel } from '@/manager/API';

function SideNav() {
  const {userDispatch,sideNavClicked} = useAuth();
  const [isDel,setIsDel] = useState(false)
  const [isCK,setIsCK] = useState([])
  const handleClick = (whichOne) => () =>{
    userDispatch(setModal(sideNavClicked,whichOne));

  }
  const handleClickDel = () =>{
    setIsDel(!isDel)
  }
  useEffect(()=>{
    if(isCK.length !==0){
      handleDel(userDispatch,isCK);
    }
  },[isDel])
  return (
    <div className='sideNav active'>
    <div className="sideNavHead">
    <h1 className='sideNavp' align="center">ESION</h1>
    </div>

    <ul>
        <li ><button className='insideButton' onClick={handleClick(
          "createPlaylistClicked"
        )}>Make Playlist<RiPlayListFill/></button></li>
    </ul>
    <motion.ul
    >
    <motion.li
    className={` ${isDel ? "delLI" : ""}`}
    ><button 
    className={`insideButton ${isDel ? "insideButtonActive" : ""}`}
     onClick={handleClickDel}>Delete Playlist<MdDeleteOutline/></button>
     {

      isDel && 
    
      <SideDrop 
      setIt={setIsCK}
      itIS={isCK}
      />
 

    }

     </motion.li>
   
</motion.ul>
<ul>
<li><button className='insideButton' onClick={handleClick("yourPlaylistClicked")}>Your Playlist<MdOutlineLibraryMusic/></button></li>
</ul>
   
    </div>
  )
}

export default SideNav