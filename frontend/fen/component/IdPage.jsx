import Dash from '@/component/Dashboard/Dash'
import Nav from '@/component/nav/Nav'
import React, { useState,useEffect } from 'react'
import Modal from '@/component/Modal/Modal'
import SideNav from '@/component/nav/sideNav/SideNav'
import useAuth from '@/hook/useAuth'
import YrPlaylist from '@/component/Playlist/YrPlaylist'
import { AnimatePresence ,motion} from 'framer-motion'
import useRouter from "next/router"
import { check } from '@/manager/API';

export default function IdPage() {
const router = useRouter;

  const {userDispatch,sideNavClicked,yourPlaylistClicked,exists} = useAuth();
  const [ii,setii] = useState('')
  const [hamState,setHamState]= useState(false)
  const [rend,setRend] = useState(false)
  useEffect(()=>{
    const a = (async()=>{
  const i = localStorage.getItem('userId');

      await check(i,userDispatch);
      setii(i)
      setRend(true)
    })
    a()
  },[])
   
  if(rend){
    if(!exists){
      router.replace('/')
    }else{
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
        <div className='dashNav'>
        <Nav 
        logout = {true}
        shFun={setHamState}
        hFun={hamState}/>
        <div className="newId">
        <SideNav />
        <div className='dashmidContainer zI'>
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
        <Dash
        />
        </motion.div>
    
        </div>
        </div>

        </div>
    
        </div>

        </div>
      )
    }
  }else{
    return(
      <h1>Loading</h1>
    )
  }

 
}

// }
