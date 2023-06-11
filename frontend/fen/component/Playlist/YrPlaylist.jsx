import useAuth from '@/hook/useAuth'
import { getPlaylist } from '@/manager/API';
import React,{useEffect} from 'react'
import PlayListSound from '../soundS/PlayListSound';
function YrPlaylist() {
    const {userDispatch,yourPlaylistClicked,thePlaylists} = useAuth();
    useEffect(()=>{
        if(yourPlaylistClicked){
          getPlaylist(userDispatch)
        }
      },[yourPlaylistClicked])
  
  return (
    <div>
    {
        thePlaylists.map((el,i)=>{
            return(
                <PlayListSound 
                nam={el.playName}
                dat={el.playData}
                />
            )
        })
    }
    
    </div>
  )
}

export default YrPlaylist