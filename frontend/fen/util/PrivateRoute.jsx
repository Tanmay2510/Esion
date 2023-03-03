import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'

function PrivateRoute(req,res) {
    let auth = true;
  return (
    auth ? <Outlet/> : <Navigate to ="/"/>
  )
}

export default PrivateRoute