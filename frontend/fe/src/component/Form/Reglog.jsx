import React, {  useState } from 'react'
import "./Reglog.css"
import Register from './register/Register';
import Login from './login/Login'
import useAuth from '../hook/useAuth';

function Reglog() {
  const {userDispatch} = useAuth();
  const [isFlipped,setIsFlipped] = useState(false);
  return (
   <div className='ReglogCont'>
   {
      isFlipped ? 
      <Register 
      dispatch={userDispatch}
      setIsFlipped={setIsFlipped}
      isFlipped={isFlipped}
      />
      :
      <Login 
      dispatch={userDispatch}
      setIsFlipped={setIsFlipped}
      isFlipped={isFlipped}/>
   }
   </div>
  )
}

export default Reglog