import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import {motion } from 'framer-motion'
import axios from 'axios';
function Register({setIsFlipped,isFlipped}) {
  const [ user, setUser] = useState({
    email:"",
    name:"",
    password:"",
    reEnterPassword: "",

})

const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}
const register = (e) => {
  e.preventDefault();
  const {  email, name,password, reEnterPassword,} = user;
  if(  email && name && password && (password === reEnterPassword) ){
    axios.post("http://localhost:3001/register",user,{withCredentials:true})
      // handleregister(user,dispatch)
  } else {
      alert("invalid input")
  }
  setUser({
      email:"",
      name:"",
      password:"",
      reEnterPassword: "",
  })
}
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}>
       <h1 style={{textAlign:"center"}} className="hh" >Register User</h1>
    <Form classname='Reglog'
    onSubmit={register}
    >
    <Form.Group className="mb-3 stl" controlId="formBasicEmail">
      <Form.Label >Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
   
    </Form.Group>
    <Form.Group className="mb-3 stl" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Your Full Name" name="name" value={user.name} onChange={handleChange} />
    </Form.Group>
    <Form.Group className="mb-3 stl" controlId="formBasicPassword" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
    </Form.Group>
  
    <Form.Group className="mb-3 stl" controlId="formBasicPassword">
      <Form.Label>Re-Enter Password</Form.Label>
      <Form.Control type="password" placeholder="Re-Enter Password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange}/>
    </Form.Group>
    <div className="d-grid gap-2">
  
    <button 
    className='but stl'
    >
      Submit
    </button>
    <h4 style={{textAlign:"center",margin:"1px"}}>OR</h4>
    <button 
      className='but stl'
      onClick={()=> setIsFlipped(!isFlipped)}
     >
    Login
  </button>
    </div>
  
  </Form></motion.div>
  )
}

export default Register