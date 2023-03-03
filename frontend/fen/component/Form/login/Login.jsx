import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import {motion} from "framer-motion"
import { handlelogin } from '../../../manager/API';
// import { useNavigate } from 'react-router-dom';
// import PrivateRoute from '../../../util/PrivateRoute';
function Login({dispatch,setIsFlipped,isFlipped}) {
  // let nav = useNavigate();
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
  const {email,password} = user;
  if(!email || !password){
    alert("Invalid Input");
  }else{
  handlelogin(user,dispatch);
  // PrivateRoute();
  // nav("/Dash")
  setUser({
    email:"",
    password:""
  })
}
  
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
     >
      Submit
    </button>
    <h4 style={{textAlign:"center",margin:"1px"}} className="hh4">OR</h4>
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