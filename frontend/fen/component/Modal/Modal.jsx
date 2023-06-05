import React ,{useState,useEffect}from 'react'
import useAuth from '@/hook/useAuth';

import { setModal } from '@/context/userAction';
import { handlePlaylist } from '@/manager/API';
function Modal() {
  const {userDispatch,sideNavClicked,createPlaylistClicked,
    deletePlaylistClicked,yourPlaylistClicked,currentName} = useAuth();
  const [playName,setPlayName] = useState("")
  const handleClick = () =>{
    userDispatch(setModal(sideNavClicked,"X"));
  }
  const handleSaveClick = () =>{
   
    if(playName!==""){

   handlePlaylist(playName,currentName,userDispatch)
   userDispatch(setModal(sideNavClicked,"Save"))
  }

  }
  const handleName = (e) =>{
    e.preventDefault();
    setPlayName(e.target.value)
  }
  const [nextClicked,setNextClicked] = useState(false);

  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button
          onClick={handleClick}
        >
          X
        </button>
      </div>
      {
        createPlaylistClicked && 
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
          </>
             :
             <>
                 <p>All the sounds that are playing at the moment will be added to your playlist with 
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
      }
      {
        deletePlaylistClicked && 
        <h1> delete?</h1>
      }
      {
        yourPlaylistClicked && 
        <h1> playlist?</h1>
      }
    </div>
  </div>
  )
}

export default Modal
