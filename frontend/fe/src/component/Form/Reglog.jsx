import React, { useState } from 'react'
import "./Reglog.css"
function Reglog() {
  const {isRegLog,setRegLog} = useState(false);
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
    <form 
            // onSubmit={login}
            >
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <button >Login</button>
            </form>
    </div>
  )
}

export default Reglog