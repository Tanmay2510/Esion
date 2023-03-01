import React, { useContext } from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { UserStoreContext } from '../context/userContext'
import useAuth from '../manager/UAuth';

function PrivateRoute() {
    let auth = useAuth();
    console.log(auth)
  return (
    auth ? <Outlet/> : <Navigate to ="/"/>
  )
}

export default PrivateRoute