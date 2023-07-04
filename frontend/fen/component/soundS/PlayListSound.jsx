import useAuth from '@/hook/useAuth';
import { notSampledata } from '@/util/SData';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState , useRef , useEffect} from 'react'
import {Bs1Circle, BsMusicNoteList} from 'react-icons/bs'
function PlayListSound({nam,dat,keyy, isActive,
  isPlaying,
  onPlay,
  onPause,
  logo
}) {

 const MAX = 20;
 const {thePlaylists} = useAuth();
 const [isEse,setEse] = useState(false)
 const [audData,setAudData] =  useState(null)
 const [clickedIndex, setClickedIndex] = useState({});
 const audioRef = useRef(null)
 const [src,setSrc] = useState([])

 const handleClickKey = (key) =>()=>{
  setClickedIndex(state => ({
    ...state, 
    [key]: !state[key] 
  }));
  setAudData(state=>({
    ...state,
    src:thePlaylists[key].playData
  }))
  setEse(!isEse)
}

useEffect(()=>{
  if (isPlaying) {
    onPause && onPause()
  } else {
    onPlay && onPlay()
  }
},[isEse])

useEffect(()=>{
  if(audData!==null ){
    const srcArr =  Object.values(audData.src)
    const datKeys = Object.keys(srcArr[0])
    datKeys.filter((el,i)=>{
      setSrc(oldArray => [...oldArray, notSampledata[el].uri]);
    })

  }
},[clickedIndex])


function handleVolume(e) {
const { value } = e.target;
const volume = Math.min(1,(value / MAX));
audioRef.current.volume = volume;
}

useEffect(() => {
  src.forEach((songUrl)=>{
    if (!audioRef.current) {
      const audio = new Audio(songUrl)
      audioRef.current=audio
      audio.loop = true
    }
    if (isActive) {
      audioRef.current.play()
      onPlay && onPlay()
    } else {
      audioRef.current.pause()
      onPause && onPause()
    }
  })
}, [isActive])

useEffect(() => {
src.forEach((songUrl)=>{
  if (!audioRef.current) {
    const audio = new Audio(songUrl)
    audioRef.current=audio
    audio.loop = true
  }
  if (isPlaying) {
    audioRef.current.play()
  } else {
    audioRef.current.pause()
  }
})
}, [isPlaying]) 



  return (
   <motion.div
   initial={{opacity:0,x:"-100vw"}}
   animate={{opacity:1,x:0}}
   transition={{duration:0.5,delay:keyy*0.1}}
   exit={{opacity:0,y:"-100vw"}}
   
   >
    <div className={`cardSection ${isPlaying ? "cardSectionAct" : ""} someCS`}
    >
    <div className="audioLogo play"
    onClick={handleClickKey(keyy)}
     >
    {logo}
    </div>
    <h4 align="center" style={{margin:"15px",color:"white"}}>{nam}</h4>
    <div className='audioControls'>
    <input
    min={0}
    max={100}
    onChange={(e) => handleVolume(e)} 
    type="range"
    ></input>
      <BsMusicNoteList color="white" 
      
      />
     
</div>
    </div>

    </motion.div>


  )
}

export default PlayListSound