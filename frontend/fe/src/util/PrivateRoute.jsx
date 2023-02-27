import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
function PrivateRoute() {
    let auth = {'token':false}
  return (
    auth.token ? <Outlet/> : <Navigate to ="/"/>
  )
}

export default PrivateRoute