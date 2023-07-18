import React,{useEffect, useState} from 'react'
import Form from 'react-bootstrap/Form';
import {motion} from "framer-motion"
import { handlelogin } from '../../../manager/API';
import useAuth from '@/hook/useAuth';
function Login({dispatch,setIsFlipped,isFlipped}) {
  const {Msg} = useAuth();

  const [formErrors,setFormErrors] = useState({
    pass:"",
  })
  const [ user, setUser] = useState({
    email:"",
    password:""
})

const [finH,setfinH] = useState(false) 
const [isValid,setIsValid] = useState({
  isValPas:false,
  isValReg:false
})
useEffect(()=>{
  if(finH){
  if( Msg==="Password didn't match"){
              setIsValid({
                isValPas:true
              })
    }else if(Msg==="User not registered"){
              setIsValid({
                isValReg:true
              })
    }else if(Msg === "User Found!!"){
     
      setIsValid({
        isValReg:false,
        isValPas:false
      })
  
    }
          setFormErrors({
            pass:Msg
          })
          setUser({
            email:"",
            password:""
          })
          setfinH(false)
  }

},[finH])

const handleChange = e => {
  const { name, value } = e.target

  setIsValid({
    isValReg:false,
    isValPas:false
  })

  setUser({
      ...user,
      [name]: value
  })
}

const hanldeLogin = async (e) => {
  e.preventDefault();
  const {email,password} = user;
  if(email || password){
  await  handlelogin(user,dispatch);
  setfinH(true)
  }
}
  return (
    <motion.div
    initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}>
    <h1 style={{textAlign:"center"}} className="hh">Login User</h1>
    <Form classname='Reglog'
    onSubmit={hanldeLogin}>
    <Form.Group className="mb-3 stl" controlId="formBasicEmail">
      <Form.Label >Email address</Form.Label>
      <Form.Control type="email" name="email" value={user.email} onChange={handleChange}  placeholder="Enter email" />
      {isValid.isValReg && <p style={{color:"red"}}>{formErrors.pass}</p>}

      </Form.Group>
    <Form.Group className="mb-3 stl" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"  name="password" value={user.password} onChange={handleChange}/>
      {isValid.isValPas && <p style={{color:"red"}}>{formErrors.pass}</p>}
      </Form.Group>
    <div className="d-grid gap-2">
    <button 
    className='but stl'
     >
      Submit
    </button>
    <h4 style={{textAlign:"center",margin:"8px"}} className="hh4">OR</h4>
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