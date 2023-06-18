import useAuth from '@/hook/useAuth'
import { getPlaylist } from '@/manager/API';
import React, { useState  , useEffect} from 'react'
import PlayListSound from '../soundS/PlayListSound';
import Slider from "react-slick";
function YrPlaylist() {
  var setting = {
    arrows:true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows:true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
     

      
     
  return (
    <div className="aboveSlide">
    <Slider {...setting} className='rSlide'>

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
    </Slider>

    </div>


  )
}

export default YrPlaylist