import React, { useContext } from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { UserStoreContext } from '../context/userContext'

function PrivateRoute() {
    let auth = {'login':false}
  return (
    auth.login ? <Outlet/> : <Navigate to ="/"/>
  )
}

export default PrivateRoute