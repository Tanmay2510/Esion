import useAuth from '@/hook/useAuth';
import { notSampledata } from '@/util/SData';
import React, { useState , useRef , useEffect} from 'react'
import {BsMusicNoteList} from 'react-icons/bs'

function PlayListSound({nam,dat,keyy, isActive,
  isPlaying,
  onPlay,
  onPause}) {

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
    <div className="cardSection" >
    <h4 align="center" style={{margin:"15px",color:"white"}}>{nam}</h4>
    <div className='audioControls'>
    <input
    min={0}
    max={100}
    onChange={(e) => handleVolume(e)} 
    type="range"
    ></input>
         
      <BsMusicNoteList color="white" 
    onClick={handleClickKey(keyy)}
      
      />
     
     
    
</div>
    </div>
  )
}

export default PlayListSound