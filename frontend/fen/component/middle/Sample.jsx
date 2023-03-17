import { data } from '@/util/SData'
import React, { useRef, useState,useMemo } from 'react'
function Sample() {
  const [isplay,setisplay] = useState(false);
  const [clickedIndex, setClickedIndex] = useState({});

  const hanldeSound = (i) => ( )=>{
    setisplay(!isplay)
    setClickedIndex(state => ({
      ...state, 
      [i]: !state[i] 
    }));
    let aud = new Audio()
  aud.src = data[i].uri;
  if(!isplay){
  aud.play();
  }else{
    alert("pause")
    aud.pause();
  }
  }

  return (
    <div className='middleSection'>
    {
      data.map((el,i)=>{
        return (
          <div
          key={i}
          className='middleSample'
          onClick={hanldeSound(i)}>
            {el.logo}
            {
              clickedIndex[i] ? 
              <div>
              <input type="range"></input>
              </div>
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