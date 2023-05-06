import React , {useState,useEffect} from 'react'
import { notSampledata } from '@/util/SData'
import Sound from '../soundS/Sound'

function Dash() {
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
    <div className='wholeDash'>
    <div className='side'>
    <p>TDIFHDSIODFDS</p>
    </div>
    <div className='dashCardContainer'>
      {
        notSampledata.map((el,i)=>{
            return (
              <Sound 
              key = {i}
              keyy={i}
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

export default Dash