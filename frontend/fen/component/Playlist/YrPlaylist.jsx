import useAuth from '@/hook/useAuth'
import { getPlaylist } from '@/manager/API';
import React, { useState  , useEffect,useRef} from 'react'
import PlayListSound from '../soundS/PlayListSound';
import { notSampledata } from '@/util/SData';
function YrPlaylist() {
    const {userDispatch,yourPlaylistClicked,thePlaylists} = useAuth();
    useEffect(()=>{
        if(yourPlaylistClicked){
          getPlaylist(userDispatch)
        }
      },[yourPlaylistClicked])
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
    <div>
    {
      thePlaylists.map((el,i)=>{
            return (

                <PlayListSound 
                nam={el.playName}
                dat={el.playData}
                key={i}
                keyy={i}
                isActive={currentSoundIndex.includes(i)}
              isPlaying={playingSounds[i]}  //for true or false
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
  )
}

export default YrPlaylist