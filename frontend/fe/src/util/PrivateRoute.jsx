import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import useAuth from '../component/hook/useAuth';



function PrivateRoute() {
  // const {login} = useAuth();
  // console.log(login)
    let auth = true;
  return (
    auth ? <Outlet/> : <Navigate to ="/"/>
  )
}

export default PrivateRoute