import useAuth from '@/hook/useAuth'
import { hanldeLogout } from '@/manager/API';
import { setNewUser } from '@/context/userAction';
import React, { useState ,useEffect} from 'react'
import logo from '../../assets/images/logo.png'
function Nav({logout}) {
  const [navB,setNavB] = useState(false);
  const {userDispatch} = useAuth();
  const log = () =>{
    hanldeLogout(userDispatch);
  }
  const hanldeNewUser = () =>{
    setNewUser();
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
  
  return (
    <div>
    {
      logout ?
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
export default Nav

