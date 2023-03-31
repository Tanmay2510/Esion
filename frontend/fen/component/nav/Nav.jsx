import useAuth from '@/hook/useAuth'
import { hanldeLogout } from '@/manager/API';
import React, { useState ,useEffect} from 'react'
import logo from '../../assets/images/logo.png'
function Nav({logout}) {
  const [navB,setNavB] = useState(false);
  const {userDispatch} = useAuth();
  const log = () =>{
    hanldeLogout(userDispatch);
}
  const changeBG = () =>{
    if(window.scrollY >= 150){
      setNavB(true)
    }else{
      setNavB(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',changeBG);
  }, [])
  
  return (
    <nav className={navB ? "navv active" : "navv "}>
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