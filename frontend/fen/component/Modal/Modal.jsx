import React from 'react'
import useAuth from '@/hook/useAuth';
import { setModal } from '@/context/userAction';
import Create from './inners/Create';
function Modal() {
  const {userDispatch,sideNavClicked,createPlaylistClicked,
    } = useAuth();
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
        createPlaylistClicked && 
        <Create />
     
      }

    </div>
  </div>
  )
}

export default Modal
