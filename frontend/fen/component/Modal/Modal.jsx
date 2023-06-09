import React ,{useState,useEffect}from 'react'
import useAuth from '@/hook/useAuth';
import { setModal } from '@/context/userAction';
import { handlePlaylist,getPlaylist } from '@/manager/API';
function Modal() {
  const {userDispatch,sideNavClicked,createPlaylistClicked,
    deletePlaylistClicked,yourPlaylistClicked,currentName,thePlaylists} = useAuth();

  const [playName,setPlayName] = useState("")
  const [nextClicked,setNextClicked] = useState(false);

  console.log(thePlaylists)
    useEffect(()=>{
      if(yourPlaylistClicked){
        getPlaylist(userDispatch)
          // ,theId)
      }
    },[yourPlaylistClicked])


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
      }
      {
        deletePlaylistClicked && 
        <>
        <div className="title">
        <h1>Delete</h1>
        </div>

        <div className="body">
        <p>Select Playlist which you want to delete</p>
        </div>

        <div className="footer">
        <button
        id="Deletebtn"
        >
          Delete
        </button>
        </div>

        </>
      }
      {
        yourPlaylistClicked && 
        <>
        <div className="title">
        <h1>Your Playlist</h1>
        </div>

        <div className="body">
        <p>Select Playlist which you want to delete</p>
        </div>
        
        </>
      }
    </div>
  </div>
  )
}

export default Modal
