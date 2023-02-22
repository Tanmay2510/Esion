import React, { useState } from 'react'
import "./Reglog.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <h1>User Login</h1>
    <Form classname='Reglog'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <div className="d-grid gap-2">

    <button 
    className='but'
    type="submit" >
      Submit
    </button>
    <h4 style={{textAlign:"center",margin:"1px"}}>OR</h4>
    <button 
    className='but'
    type="submit" >
    Register
  </button>
    </div>

  </Form>
    </div>
  )
}

export default Reglog