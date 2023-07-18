import useAuth from '@/hook/useAuth'
import { hanldeLogout } from '@/manager/API';
import { setNewUser,setHomeUser } from '@/context/userAction';
import React, { useState ,useEffect} from 'react'
import logo from '../../assets/images/logo.png'
function Nav(props) {
  const [navB,setNavB] = useState(false);
  const {userDispatch} = useAuth();
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
      // {navB ? "navv active" : "navv "}
  if(props.where==="form"){
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
      props.logout ?
      <>

      <header className="headerButton">
      <button onClick={log}  className="logBut">Logout</button>

      </header>

        
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

