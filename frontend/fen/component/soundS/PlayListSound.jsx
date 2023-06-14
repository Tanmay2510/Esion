import useAuth from '@/hook/useAuth';
import { notSampledata } from '@/util/SData';
import React, { useState , useRef , useEffect} from 'react'

function PlayListSound({nam,dat,keyy, isActive,
  isPlaying,
  onPlay,
  onPause}) {

 const MAX = 20;
 const {thePlaylists} = useAuth();
 const [audData,setAudData] =  useState(null)
 const [clickedIndex, setClickedIndex] = useState({});
 const audioRef = useRef(null)
 const [src,setSrc] = useState([])
 const handleClickKey = (key) =>()=>{
  setClickedIndex(state => ({
    ...state, 
    [key]: !state[key] 
  }));

  if (isPlaying) {
    onPause && onPause()
  } else {
    onPlay && onPlay()
  }
  setAudData(state=>({
    ...state,
    src:thePlaylists[key].playData
  }))
}

useEffect(() => {
  if (!audioRef.current) {
      const audio = new Audio(src[0])
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
    const audio = new Audio(src[0])
    audioRef.current = audio
    audio.loop = true
}
  if (isPlaying) {
    audioRef.current.play()
  } else {
    audioRef.current.pause()
  }
}, [isPlaying, src]) 
console.log(src)
useEffect(()=>{
  if(audData!==null ){
    
    const srcArr =  Object.values(audData.src)
    const datKeys = Object.keys(srcArr[0])
    datKeys.filter((el,i)=>{
      setSrc(oldArray => [...oldArray, notSampledata[el].uri]);
    })

  }
},[clickedIndex])
  return (
    <div>
    <div className="cardSection" >
    <h4 align="center" style={{margin:"15px",color:"white"}}>{nam}</h4>
    <div className='audioControls'>
    <input
    min={0}
    max={100}
    // onChange={(e) => handleVolume(e)} 
    type="range"
    ></input>

     

          <button onClick={handleClickKey(keyy)}> 
          Play
        
          </button>
        
     
    
</div>
    </div>
    </div>
  )
}

export default PlayListSound