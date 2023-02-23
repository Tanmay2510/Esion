import React from 'react'
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div>
    <h1 style={{textAlign:"center"}}>Login User</h1>
    <Form classname='Reglog'>
    <Form.Group className="mb-3 stl" controlId="formBasicEmail">
      <Form.Label >Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted stl">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3 stl" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <div className="d-grid gap-2">

    <button 
    className='but stl'
    type="submit" >
      Submit
    </button>
    <h4 style={{textAlign:"center",margin:"1px"}}>OR</h4>
    <button 
    onClick={() => setFlip(!flip)}
    className='but stl'
    type="submit" >
    Register
  </button>
    </div>
  
  </Form>
  </div>
  )
}

export default Login