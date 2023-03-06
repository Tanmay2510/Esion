import React from 'react'
import SoundIcon from "../../assets/soundIcon/SoundIcon"
import useAuth from '@/hook/useAuth';
import { hanldeLogout } from '@/manager/API';
function Dash() {
  const {userDispatch} = useAuth();
  const logout = () =>{
      hanldeLogout(userDispatch);
  }
  return (
    <div>
    <button onClick={logout}>Logout</button>
      <SoundIcon />
    </div>
  )
}

export default Dash