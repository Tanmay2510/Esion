import React, { useState } from 'react'
import "./Reglog.css"
import Register from './register/Register';
import Login from './login/Login'

function Reglog() {
  const [isFlipped,setIsFlipped] = useState(false);

  return (
   <div className='ReglogCont'>
   {
      isFlipped ? 
      <Register 
      setIsFlipped={setIsFlipped}
      isFlipped={isFlipped}
      />
      :
      <Login 
      setIsFlipped={setIsFlipped}
      isFlipped={isFlipped}/>
   }
   </div>
  )
}

export default Reglog