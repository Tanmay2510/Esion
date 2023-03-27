import { data } from '@/util/SData'
import React, { useRef, useState,useEffect } from 'react'
import {BsPlay,BsPause} from 'react-icons/bs'
function Sample() {
  const [play, setPlay] = useState(false);
  const [clickedIndex, setClickedIndex] = useState({});
  const [audioIndex,setAudioIndex] = useState(0);
  const [istrack,setIsTrack] = useState({});

  const audioRef = useRef(null);
  const MAX = 20;
  const toggleAudio = (i) => ()=> {
    setClickedIndex(state => ({
          ...state, 
          [i]: !state[i] 
        }));
        setIsTrack((track =>({
          ...track,
          [i] : data[i].uri 
        })))
    setAudioIndex(i)
  //   if (play) {
  //     audioRef.current.pause();
  //     setPlay(false);
  //   } else {
  //     audioRef.current.play();
  //     setPlay(true);
  //   }
  // }
      }
//   console.log(play)
useEffect(()=>{
  if (!clickedIndex[audioIndex]) {
    audioRef.current.pause();

    setPlay(false);
  } else {
    audioRef.current.play();
    // setIsTrack(track => ({
    //   ...track, 
    //   [i]: !track[i] 
    // }));
    setPlay(true);
  }
},[audioIndex])

  function handleVolume(e) {
    const { value } = e.target;
    const volume = Number(value) / MAX;
    audioRef.current.volume = volume;
  }
  return (
    <div className='middleSection'>
      {
        data.map((el,i)=>{
          return (
      <div className='cardSection' >
            <div className='audioLogo' onClick={toggleAudio(i)}>
            {el.logo}
            </div>
            <h4 align="center" style={{margin:"15px"}}>{el.name}</h4>
            <div className='audioControls'>
            <input
            min={0}
            max={MAX}
            onChange={(e) => handleVolume(e)} 
            type="range"></input>
            {!clickedIndex[i] ? (
              <div>
        <audio src={data[i].uri} ref={audioRef} loop></audio>

              <BsPlay />
              </div>

            ) : (
              <div>
              <audio ref={audioRef} loop></audio>
              <BsPause />
                    </div>
            )}
            </div>
      </div>

          )
        })
      }
      

       
      
    </div>
  )
}
export default Sample


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