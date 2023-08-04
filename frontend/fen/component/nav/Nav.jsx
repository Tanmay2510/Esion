'use-client'
import useAuth from '@/hook/useAuth'
import { handleHamState, hanldeLogout } from '@/manager/API';
import { setNewUser,setHomeUser } from '@/context/userAction';
import logo from '../../assets/images/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import React,{useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import Ham from './Ham/Ham.jsx';
function Nav({logout,shFun,hFun,where}) {
const {userDispatch,yourPlaylistClicked,sideNavClicked,deletePlaylistClicked,thePlaylists} = useAuth();

  const [navB,setNavB] = useState(false);
const [opened, setOpen] = useState(false);
const [width, setWidth] = useState(window.innerWidth);
  const log = () =>{
    hanldeLogout(userDispatch);
  }
  const hanldeNewUser = () =>{
    setNewUser();
  }
  const handleUserHome = () =>{
    setHomeUser();
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

const breakpoint = 560;
useEffect(() => {
  window.addEventListener("resize", () => setWidth(window.innerWidth));
}, []);
useEffect(()=>{
  if(width<=breakpoint){
    setOpen(true)
  }else{
    setOpen(false)
  }
},[width])
const handleHam = ()=>{
//  sHState(false)
shFun(!hFun)
}
useEffect(()=>{
  handleHamState(hFun,userDispatch);
},[hFun])
// console.log(hamState)
      // {navB ? "navv active" : "navv "}
  if(where==="form"){
    return(
      <>
      <nav className="navvForm ">
        <h1>ESION</h1>
        <img src={logo.src} style={{width:"5%"}}></img>
        <div className='innerNav'>
<button  onClick={handleUserHome}>Home</button>
        
        </div>
    </nav>
    </>
    )
  }else{

  return (
    <div>
    {
      logout ?
      <>
      
<div className="navvv">
      <h1>ESION</h1>
      {
        opened ? 
        <>
        
        <div onClick={handleHam}>
          <GiHamburgerMenu color={"white"} size={25}/>
        </div>
        {hFun &&
        <div className='ham zI'>
        <Ham />
        </div>
    
        }
        </>
         
        :
        <>
        <img src={logo.src} style={{width:"5%"}}></img>
    <button  onClick={log} className="logBut">Logout</button>
    </>

      }
      
</div>
     

        
    </>
      :
      <>
      <nav className={navB ? "navv active" : "navv "}>
        <h1>ESION</h1>
        <img src={logo.src} style={{width:"5%"}}></img>
        <div className='innerNav'>
<button  onClick={hanldeNewUser}>Start</button>
       
        </div>
    </nav>
    </>
    }
    
    </div>

  )
}

}
export default Nav




  

