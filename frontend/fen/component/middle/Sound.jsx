import React, { useState , useRef , useEffect} from 'react'
import {BsPlay,BsPause} from 'react-icons/bs'

function Sound({
    key,
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

  const handleSoundPlay = (key)=>() => {
    setClickedIndex(state => ({
                ...state, 
                [key]: !state[key] 
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
    <div className='cardSection'>
    <div className='audioLogo' onClick={handleSoundPlay(key)}>
    {logo}
    </div>
    <h4 align="center" style={{margin:"15px"}}>{title}</h4>
    <div className='audioControls'>
    <input
    min={0}
    max={MAX}
    onChange={(e) => handleVolume(e)} 
    type="range"
    ></input>
    {!clickedIndex[key] ? (
    <BsPlay />
    ) : (
    <BsPause />
    )}
    
</div>
    </div>
  )
}

export default Sound
