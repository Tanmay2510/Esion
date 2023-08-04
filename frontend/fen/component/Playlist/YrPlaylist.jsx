import useAuth from '@/hook/useAuth'
import { getPlaylist } from '@/manager/API';
import React, { useState  , useEffect} from 'react'
import PlayListSound from '../soundS/PlayListSound';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import {ic} from "../../assets/playIcons/ic"
import { AnimatePresence, MotionConfig } from 'framer-motion';
function YrPlaylist() {
  
  var setting = {
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows:true,

        }
      },
    
    ]
  };


 
    const [isyps,setyps] = useState(false)
    const [show,setShow] = useState(false)
    const {userDispatch,yourPlaylistClicked,thePlaylists,rend,yps} = useAuth();
    useEffect(()=>{
      const a = (async()=>{
        await getPlaylist(userDispatch)
        setyps(true)
      })
      a()
      },[yourPlaylistClicked,rend,yps])
      useEffect(()=>{
        if(isyps){
            if(thePlaylists.length===0 && yourPlaylistClicked  ){
              setShow(true)
          toast.info("Explore and create new playlists",{
          autoClose:1500
          })
        }
      }
        setyps(false)
      },[isyps])
      const [currentSoundIndex, setCurrentSoundIndex] = useState([])
      const [playingSounds, setPlayingSounds] = useState({})
      useEffect(() => {
        setPlayingSounds(
          currentSoundIndex.reduce(
            (newPlayingSounds, audioIndex) => {
              newPlayingSounds[audioIndex] = true
              return newPlayingSounds
            },
            {}
          )
        )
      }, [currentSoundIndex])
if(!show){

  return (
    <motion.div 
    className='contPL'>
    <div className='yourP hrp'>
    <p>Your Playlists: </p>
    </div>

     <div className='aboveSlide'>
  
<ToastContainer />
    <Slider {...setting} className='rSlide'>

    {
      thePlaylists.map((el,i)=>{
            return (

              
                <PlayListSound 
                nam={el.playName}
                dat={el.playData}
                key={i}
                keyy={i}
                isActive={currentSoundIndex.includes(i)}
              isPlaying={playingSounds[i]}  //for true or false
              onPlay={() =>
                setPlayingSounds({ ...playingSounds, [i]: true })
              }
              onPause={
                () => {
                const newPlayingSounds = { ...playingSounds }
                delete newPlayingSounds[i]
                setPlayingSounds(newPlayingSounds)
              }
            }
              logo={ic[i
                // Math.floor(Math.random() * ic.length)
              ]}
                />

            ) 

      })
            

    }
    </Slider>



    </div>
    </motion.div>

  )
}

}

export default YrPlaylist