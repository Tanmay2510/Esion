import useAuth from '@/hook/useAuth'
import { hanldeLogout } from '@/manager/API';
import React, { useContext } from 'react'
import logo from '../../assets/images/logo.png'
function Nav({logout}) {
  const {userDispatch} = useAuth();
  const log = () =>{
    hanldeLogout(userDispatch);
}
  return (
    <nav className='navv'>
        <h1>ESION</h1>
        <img src={logo.src} style={{width:"5%"}}></img>
        <div className='innerNav'>
        {
          logout ? <button onClick={log}>Logout</button>: 
        <button ><a href="#sample" style={{textDecoration:"none",color:"green"}}>Sample</a></button>

        }
        </div>
    </nav>
  )
}
export default Nav