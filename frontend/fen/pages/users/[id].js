import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React from 'react'
import Modal from '@/component/Modal/Modal'
import SideNav from '@/component/nav/sideNav/SideNav'
import useAuth from '@/hook/useAuth'
import YrPlaylist from '@/component/Playlist/YrPlaylist'
import { AnimatePresence ,motion} from 'framer-motion'
export default function DynamicPage() {

  const {sideNavClicked,yourPlaylistClicked,thePlaylists} = useAuth();
  return (
    <div className="dashContainer">
    <AnimatePresence>
    {sideNavClicked && 
      <motion.div
      initial={{opacity:0,left:0}}
      animate={{opacity:1,left:100}}
    exit={{opacity:0,right:0}}
      transition={{duration:0.5}}
      >
      <Modal />
      </motion.div>

    }
    </AnimatePresence>

    <div className='noModalCover'>
    <SideNav />
    <div className='dashNav'>
    <Nav 
    logout = {true}/>
    <div className='dashmidContainer'>
    <div className='midText'>

    <p >Mix Match your audios!!</p>
    </div>
  
    <AnimatePresence>

    {yourPlaylistClicked && 

      <motion.div
      initial={{opacity:0,height:0}}
      animate={{opacity:1,height:"auto"}}
    exit={{opacity:0,height:0}}
      transition={{duration:1}}
      >
     

      <YrPlaylist />

      </motion.div>


    }

    </AnimatePresence>

     <motion.div
     >
    <Dash />
    </motion.div>

    </div>
    </div>

    </div>
    </div>
  )
}
