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
      const audioRef = useRef(null)
  
  
      const [clickedIndex, setClickedIndex] = useState({});
      const [audData,setAudData] =  useState(null)
      const [isPlay,setIsPlay] = useState(false);
      const handleClickKey = (key) =>()=>{
        setClickedIndex(state => ({

          ...state, 
          [key]: !state[key] 
        }));
        setAudData(state=>({
          ...state,
          src:thePlaylists[key].playData
        }))
      }
      useEffect(()=>{
        if(!audioRef.current){
          const srcArr =  Object.values(audData.src)
          const datKeys = Object.keys(srcArr[0])
          // notSampledata.map((el,i)=>{
          //     if(datKeys===i){
          //       console.log(el.name)
          //     }
          // })
          const n1 = datKeys.filter((el,i)=>{
            console.log(notSampledata[el].name)
            // return notSampledata[el].name
          })
            // console.log(n1)
          // notSampledata.map((el,i)=>{
          //   if
          // })
        }
      })
  return (
    <div>
    {
        thePlaylists.map((el,i)=>{
            return(
              <div>
    <div className="cardSection" >
    <h4 align="center" style={{margin:"15px",color:"white"}}>{el.playName}</h4>
    <div className='audioControls'>
    <input
    min={0}
    max={100}
    // onChange={(e) => handleVolume(e)} 
    type="range"
    ></input>
        {
          clickedIndex[i] ? 
        <button onClick={handleClickKey(i)}>Pausee</button>
          :
        <button onClick={handleClickKey(i)}>Play</button>

        }
    
</div>
    </div>
    </div>
                // <PlayListSound 
                // nam={el.playName}
                // dat={el.playData}
                // key={i}
                // keyy={i}
                // handle={()=>
                //   setIsClick({})
                // }
                // />
            )
        })
    }
    
    </div>
  )
}

export default YrPlaylist