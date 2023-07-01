import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React from 'react'
import Modal from '@/component/Modal/Modal'
import SideNav from '@/component/nav/sideNav/SideNav'
import useAuth from '@/hook/useAuth'
import YrPlaylist from '@/component/Playlist/YrPlaylist'
import { AnimatePresence ,motion} from 'framer-motion'
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
    <AnimatePresence>
    {yourPlaylistClicked && 

      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
    exit={{opacity:0}}
      transition={{duration:2}}
      >
      <YrPlaylist />
      </motion.div>

    }
    </AnimatePresence>

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
