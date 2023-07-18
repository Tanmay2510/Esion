import { data } from '@/util/SData'
import React, {  useState,useEffect } from 'react'
import Sound from '../soundS/Sound'
import { setNewUser } from '@/context/userAction'
import Reveal from '../reveal'
function Sample() {
  const [currentSoundIndex, setCurrentSoundIndex] = useState([])
  const [playingSounds, setPlayingSounds] = useState({})

  useEffect(() => {
    setPlayingSounds(
      currentSoundIndex.reduce(
        (newPlayingSounds, audioIndex) => {
          newPlayingSounds[audioIndex] = true
          return newPlayingSounds
        },
        {}
      )
    )
  }, [currentSoundIndex])
  const hanldeNewUser = () =>{
    setNewUser();
  }
 
  return (
    
    <div className='middleBG' id="sample">
    <Reveal 
    >
    <div className='middleBG2'>
    <h1 >Get a sneak peek</h1>
    <div className='middleSection '>
      {
        data.map((el,i)=>{
          return (
             <Sound 
             classs="cardSec"
             key={i}
              keyy = {i}
              {...el}
              src={el.uri}
              title={el.name}
              logo={el.logo}
              isActive={currentSoundIndex.includes(i)}
              isPlaying={playingSounds[i]}
              onPlay={() =>
                setPlayingSounds({ ...playingSounds, [i]: true })
              }
              onPause={
                () => {
                const newPlayingSounds = { ...playingSounds }
                delete newPlayingSounds[i]
                setPlayingSounds(newPlayingSounds)
              }
            }
             />
          )
        })
      }
       </div>
       <div className='belowSamp'>
        <p>Loved it?</p>
        <p align="center">Tag along with other users by 
        <br></br> 
         clicking on the button below</p>
        <button onClick={hanldeNewUser}> Get Started</button>
       </div>
        <h3>Made with love</h3>
    </div>

        </Reveal>

    </div>

  )
}

export default Sample