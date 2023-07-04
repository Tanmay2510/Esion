import { motion } from 'framer-motion';
import React, { useState , useRef , useEffect} from 'react'
import {BsPlay,BsPause} from 'react-icons/bs'

function Sound({
    keyy,
    src,
    title,
    logo,
    isActive,
    isPlaying,
    onPlay,
    onPause
}) {

  const MAX = 20;
  const [clickedIndex, setClickedIndex] = useState({});
  const audioRef = useRef(null)
  const handleSoundPlay = (keyy)=>() => {
    setClickedIndex(state => ({
                ...state, 
                [keyy]: !state[keyy] 
              }));

    if (isPlaying) {
      onPause && onPause()
    } else {
      onPlay && onPlay()
    }
  }
  function handleVolume(e) {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
  }
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(src)
      audioRef.current = audio
      audio.loop = true
    }
    if (isActive) {
      audioRef.current.play()
      onPlay && onPlay()
    } else {
      audioRef.current.pause()
      onPause && onPause()
    }
  }, [isActive, src])

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(src)
      audioRef.current = audio
      audio.loop = true
    }
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, src]) 
 

  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    
    className={`cardSection ${isPlaying ? "cardSectionActive" : ""} someCS`} >
    <div className='audioLogo' onClick={handleSoundPlay(keyy)}>
    {logo}
    </div>
    <h4 align="center" style={{margin:"15px",color:"white"}}>{title}</h4>
    <div className='audioControls'>
    <input
    min={0}
    max={MAX}
    onChange={(e) => handleVolume(e)} 
    type="range"
    ></input>
    {!clickedIndex[keyy] ? (
    <BsPlay color="white"/>
    ) : (
    <BsPause color="white"/>
    )}
    
</div>
    </motion.div>
  )
}

export default Sound
