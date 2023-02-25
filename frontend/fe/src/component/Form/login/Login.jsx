import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import {motion} from "framer-motion"
function Login({setIsFlipped,isFlipped}) {
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
const login = e => {
  e.preventDefault();
  axios.post("http://localhost:3001/login",user,{withCredentials:true})
  
}
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}>
    <h1 style={{textAlign:"center"}} className="hh">Login User</h1>
    <Form classname='Reglog'
    onSubmit={login}>
    <Form.Group className="mb-3 stl" controlId="formBasicEmail">
      <Form.Label >Email address</Form.Label>
      <Form.Control type="email" name="email" value={user.email} onChange={handleChange}  placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3 stl" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  name="password" value={user.password} onChange={handleChange}/>
    </Form.Group>
    <div className="d-grid gap-2">
    <button 
    className='but stl'
    type="submit" >
      Submit
    </button>
    <h4 style={{textAlign:"center",margin:"1px"}}>OR</h4>
    <button 
    className='but stl'
    onClick={()=> setIsFlipped(!isFlipped)}>
    Register
    </button>
    </div>
  </Form>
  </motion.div>
  )
}

export default Login