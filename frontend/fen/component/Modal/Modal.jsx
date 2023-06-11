import React from 'react'
import useAuth from '@/hook/useAuth';
import { setModal } from '@/context/userAction';
import Delete from './inners/Delete';
import Create from './inners/Create';
function Modal() {
  const {userDispatch,sideNavClicked,createPlaylistClicked,
    deletePlaylistClicked} = useAuth();

 
  
  const handleClick = () =>{
    userDispatch(setModal(sideNavClicked,"X"));
  }
  

  return (
    <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <button onClick={handleClick}>X</button>
      </div>
      {
        createPlaylistClicked && <Create />
     
      }

      {
        deletePlaylistClicked && <Delete />
      }
     
    </div>
  </div>
  )
}

export default Modal
