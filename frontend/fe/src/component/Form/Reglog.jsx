import React, { useContext, useState } from 'react'
import "./Reglog.css"
import Register from './register/Register';
import Login from './login/Login'
import { UserStoreContext } from '../../context/userContext';

function Reglog() {
  const {email,name,userDipatch} = useContext(UserStoreContext);
  const [isFlipped,setIsFlipped] = useState(false);
  return (
   <div className='ReglogCont'>
   {
      isFlipped ? 
      <Register 
      dispatch={userDipatch}
      setIsFlipped={setIsFlipped}
      isFlipped={isFlipped}
      />
      :
      <Login 
      dispatch={userDipatch}
      setIsFlipped={setIsFlipped}
      isFlipped={isFlipped}/>
   }
   </div>
  )
}

export default Reglog