import { data } from '@/util/SData'
import React, { useRef, useState,useEffect } from 'react'
import Sound from './Sound'
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
 
  
  return (
    <div className='middleBG' id="sample">
    <div className='middleSection'>
      {
        data.map((el,i)=>{
          return (
             <Sound 
              key = {i}
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
    </div>
  )
}
export default Sample
