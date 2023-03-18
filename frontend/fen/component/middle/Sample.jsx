import { data } from '@/util/SData'
import React, { useRef, useState,useMemo, useEffect } from 'react'
function Sample() {
  const [clickedIndex, setClickedIndex] = useState({});
  const [audioIndex,setAudioIndex] = useState(0);
  const [audio,setAudio] = useState(null)
  const audioRef = useRef();
  useEffect(()=>{
    setAudio(new Audio(data[audioIndex].uri))
  },[audioIndex])

  const hanldeSound = (i) => ( )=>{
    setAudioIndex(i)
    setClickedIndex(state => ({
      ...state, 
      [i]: !state[i] 
    }));
  }

  
  if(clickedIndex[audioIndex]){
  console.log("play")
  audio.play();
  }else if(!clickedIndex[audioIndex]){
    console.log("pause")
  }

  return (
    <div className='middleSection'>
    {
      data.map((el,i)=>{
        return (
          <div
          ref={audioRef}
          key={i}
          className='middleSample'
          onClick={hanldeSound(i)}>
          
            {el.logo}

            {
              clickedIndex[i] ? 
       
              <h1>h</h1>
              : null
            }

          </div>


        )
      })
    }
    </div>
  )
}
export default Sample