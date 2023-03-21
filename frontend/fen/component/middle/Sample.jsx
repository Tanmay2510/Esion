import { data } from '@/util/SData'
import React, { useRef, useState,useEffect } from 'react'
import {RxSpeakerLoud} from 'react-icons/rx'
function Sample() {
  const [play, setPlay] = useState(false);
  const oceanRef = useRef(null);
  const MAX = 20;
  
  return (
    <div className='middleSection'>
      <div className='cardSection'>
      <div className='audioLogo'>
      {data[0].logo}
      </div>
      <div className='audioControls'>
      <input type="range"></input>
      <RxSpeakerLoud />
      </div>
      <audio src={data[0].uri} loop></audio>
      </div>
    </div>
  )
}
export default Sample


// const [clickedIndex, setClickedIndex] = useState({});
  // const [audioIndex,setAudioIndex] = useState(0);
  // const [audio,setAudio] = useState(null)
  // const audioRef = useRef();
  // useEffect(()=>{
  //   setAudio(new Audio(data[audioIndex].uri))
  // },[audioIndex])

  // const hanldeSound = (i) => ( )=>{
  //   setAudioIndex(i)
  //   setClickedIndex(state => ({
  //     ...state, 
  //     [i]: !state[i] 
  //   }));
  // }

  
  // if(clickedIndex[audioIndex]){
  // console.log("play")
  // audio.play();
  // }else if(!clickedIndex[audioIndex]){
  //   console.log("pause")
  // }


// {
//   data.map((el,i)=>{
//     return (
//       <div
//       onClick={hanldeSound(i)}
//       ref={audioRef}
//       key={i}
//       className='middleSample'
//       >
//       {el.logo}

//       <audio
//       src={el.uri}
//       >

//         {
//           // clickedIndex[i] ? 
   
//           // <h1>h</h1>
//           // : null
//         }
//         </audio>

//       </div>


//     )
//   })
// }