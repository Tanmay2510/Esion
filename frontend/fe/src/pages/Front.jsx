import React from 'react'
import Nav from '../component/nav/Nav'
import US from '../component/uppserSection/US'
import "./Front.css"
import Reglog from '../component/Form/Reglog'
function Front() {
  return (
    <div>
    <div className='UpperSection'>
    <Nav />
    <div className='UnderNavCont'>
    <US />
    <Reglog />
    </div>
    </div>
    
    </div>
  )
}

export default Front