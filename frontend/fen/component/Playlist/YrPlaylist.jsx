import useAuth from '@/hook/useAuth'
import { getPlaylist } from '@/manager/API';
import React, { useState  , useEffect} from 'react'
import PlayListSound from '../soundS/PlayListSound';
import Slider from "react-slick";
import { ur } from '@/util/SData';

function YrPlaylist() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
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
     

      // useEffect(() => {
      //   ur.forEach((songUrl) => {
      //     const audio = new Audio(songUrl);
      //     audio.play();
      //   });
      // }, [ur]);
     
  return (
    <div className="aboveSlide">
 
   
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