import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import {motion } from 'framer-motion'
import { handleregister } from '../../../manager/API';
import useAuth from '@/hook/useAuth';
function Register({dispatch,setIsFlipped,isFlipped}) {
  const {Msg} = useAuth();
  const [ user, setUser] = useState({
    email:"",
    name:"",
    password:"",
    reEnterPassword: "",
})
const [isValidReg,setisValidReg] = useState(false);
const [formErrors,setFormErrors] = useState({
  pass:"",
})
const [finH,setfinH] = useState(false) 
useEffect(()=>{
  if(finH){
   if(Msg==="User already registered"){
              setisValidReg(true)
    }else if(Msg === "User Found!!"){
      setisValidReg(false)
    }
          setFormErrors({
            pass:Msg
          })
          setUser({
            email:"",
            name:"",
            password:"",
            reEnterPassword: "",
        })
          setfinH(false)
  }

},[finH])
const handleChange = e => {
    const { name, value } = e.target
    setisValidReg(false)

    setUser({
        ...user,
        [name]: value
    })
}
const register = async (e) => {
  e.preventDefault();
  const {  email, name,password, reEnterPassword,} = user;
  if(  email && name && password && (password === reEnterPassword) ){
     await handleregister(user,dispatch)
  setfinH(true)

  } 
 
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
      {isValidReg && <p style={{color:"red"}}>{formErrors.pass}</p>}
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
    <h4 style={{textAlign:"center",margin:"1px"}} className="hh4">OR</h4>
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