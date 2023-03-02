import React from 'react'
import Nav from '../component/nav/Nav'
import US from '../component/uppserSideSection/US'
import "./Front.css"
import Reglog from '../component/Form/Reglog'
function Front() {

  return (
    <div className='Whole'>
    <div className='UpperSection'>
    <Nav />
    <div className='UnderNavCont'>
    <US />
    <Reglog />
    </div>
    </div>
    <div className='bottomSection'>
    <h1>h</h1>
    </div>
    </div>
  )
}

export default Front