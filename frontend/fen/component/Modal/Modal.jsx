import React ,{useState,useEffect}from 'react'
import useAuth from '@/hook/useAuth';
import { setModal,setCancelModal } from '@/context/userAction';
function Modal() {
  const {userDispatch,sideNavClicked} = useAuth();
  const handleClick = () =>{
    userDispatch(setModal(sideNavClicked));

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
      <div className="title">
        <h1>Are You Sure You Want to Continue?</h1>
      </div>
      <div className="body">
        <p>The next page looks amazing. Hope you want to go there!</p>
      </div>
      <div className="footer">
        <button
        
          id="cancelBtn"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default Modal