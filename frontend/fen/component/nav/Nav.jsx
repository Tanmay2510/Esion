import React from 'react'
// import "./Nav.css"
import logo from './logo.png'
function Nav() {
 
  return (
    <nav className='navv'>
        <h1>ESION</h1>
        <img src={logo.src} style={{width:"5%"}}></img>
        <div className='innerNav'>
        <button >TExt HEre 1</button>
        </div>

    </nav>
  )
}

export default Nav