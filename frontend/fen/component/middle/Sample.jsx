import { data } from '@/util/SData'
import React, { useState } from 'react'
import {BsPauseFill} from 'react-icons/bs'
function Sample() {
  // const [isplay,setisplay] = useState(false);
  const [clickedIndex, setClickedIndex] = useState({});
  const [isAudio,setIsAudio] = useState(null);
  var audio;
  const hanldeSound = (i) => ( )=>{
    // setisplay(!isplay)
    setClickedIndex(state => ({
      ...state, 
      [i]: !state[i] 
    }));
   audio = new Audio(data[i].uri);
    if(clickedIndex){
    audio.play();
    }
  }
  const handlePause = (i) => () =>{
    setIsAudio(i)
  
    // console.log(clickedIndex)
    // audio = new Audio(data[i].uri);
    // audio.pause();
  }
  return (
    <div className='middleSection'>
    {
      data.map((el,i)=>{
        return (
          <div
          className='middleSample'
          onClick={hanldeSound(i)}>
            {el.logo}
            {
              clickedIndex[i] ? 
              <div>
              <BsPauseFill onClick={()=>{
                let aud = new Audio(el.uri);
                aud.pause();
              {/*handlePause(i)*/}

              }}/>
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