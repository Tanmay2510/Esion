import React, { useState } from 'react'
import "./Reglog.css"
import ReactCardFlip from "react-card-flip";
import Register from './register/Register';
import Login from './login/Login';


function Reglog() {
  const [flip, setFlip] = useState(false);
  const [ user, setUser] = useState({
    email:"",
    password:""
})
const handleChange = e => {
  const { name, value } = e.target
  setUser({
      ...user,
      [name]: value
  })
}
  return (

    <div className='ReglogCont'>
    <Register />
    <Login />
    </div>

  )
}

export default Reglog