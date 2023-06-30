import React ,{useState}from 'react'
import useAuth from '@/hook/useAuth';
import { setModal } from '@/context/userAction';

import { handlePlaylist } from '@/manager/API';

function Create() {
  const {userDispatch,sideNavClicked,currentName} = useAuth();

 
  const [isValName,setIsValName] = useState(false)
  const [nextClicked,setNextClicked] = useState(false);
  const [playName,setPlayName] = useState("")

  const handleSaveClick = () =>{
    if(playName!==""){
      setIsValName(false)
     handlePlaylist(playName,currentName,userDispatch)
     userDispatch(setModal(sideNavClicked,"Save"))
    }else{
      setIsValName(true)

    }
}
const handleName = (e) =>{
  e.preventDefault();
  setPlayName(e.target.value)
  setIsValName(false)

}
  return (
    <>
    <div className="title">
    {nextClicked ?
      <h1>Create Your Playlist</h1>
       :
    <h2>Here's how playlist work...</h2>
    }
  </div>
  <div className="body">
    {nextClicked ?
      <>
      <input type="text" placeholder='PlayList Name!!' name="playlist"
      value={playName} 
      onChange={handleName}></input>
      <br></br>
      {isValName &&
      <p style={{color:"red",fontSize:"20px"}}>Give a nice name..</p>
      }
      </>
         :
         <>
             <p align="justify">All the sounds that are playing at the moment will be added to your playlist with 
             your favourite name..</p>
             </>
      }
      </div>
      <div className="footer">
      {
        nextClicked ? 
        <>
        <button
        id="SaveBtn"
        onClick={handleSaveClick}
        >
          Save
        </button>
        </>
        :
        <>
        <button
        onClick={()=>setNextClicked(true)}
        id="NextBtn"
        >
          Next
        </button>
        </>
      }
      </div>
    
    
    </>
  )
}

export default Create