import React , {useState,useEffect} from 'react'
import { notSampledata } from '@/util/SData'
import Sound from '../soundS/Sound'
import useAuth from '@/hook/useAuth'
import { setPlaylist } from '@/context/userAction';
// import { Draggable } from 'react-drag-reorder';
import { ToastContainer, toast } from 'react-toastify';


function Dash() {
  const {userDispatch,createPlaylistClicked} = useAuth();
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
  console.log()
  useEffect(()=>{
    if(createPlaylistClicked && Object.keys(playingSounds).length === 0){
      toast.info("Add some sounds...");
      console.log("H")
    }

  },[createPlaylistClicked])
  useEffect(()=>{
    userDispatch(setPlaylist(playingSounds)); 
  },[playingSounds]) // do some condition only on modal save click
  return (
    <div className='wholeDash'>

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
    <ToastContainer />


    </div>

  )
}

export default Dash