import React from 'react'
import secondBox from '@/assets/images/secondBox.svg'
import firstBox from '@/assets/images/firstBox.svg'
import Reveal from '../reveal'

function Examp() {
  return (
    <div className='exBox'>
    <Reveal>
        <div className='firstBox'>
        <img src={firstBox.src} style={{width:"40%"}}></img>
        <div className='firstBoxinner'>
        <h1>Plug it in and Chill</h1>
        <p>
         No matter where you are, if you wanna concentrate,work or relax just plug it in!!
        </p>
        </div>

        </div>  
    </Reveal>

      <Reveal>
        <div className='secondBox'>
        <div className='secondBoxinner'>
        <h1>Try out different combos</h1>
        <p>
         You can listen to different combinations and if you like make a playlist!!
        </p>
        </div>
        <img src={secondBox.src} style={{width:"40%"}}></img>

        </div>   
      </Reveal>
  

    </div>
  )
}

export default Examp