import React from 'react'
import logo from '../../assets/images/logo.png'
import Reveal from '../reveal'

function Examp() {
  return (
    <div className='exBox'>
    <Reveal>
        <div className='firstBox'>
        <img src={logo.src} style={{width:"10%"}}></img>

        <p>
        dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker includin
        </p>

        </div>  
    </Reveal>

      <Reveal>
        <div className='secondBox'>
        <img src={logo.src} style={{width:"10%"}}></img>

        <p>
        dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker includin
        </p>

        </div>   
      </Reveal>
    <Reveal>
        <div className='thirdBox'>
        <img src={logo.src} style={{width:"10%"}}></img>

        <p>
        dustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker includin
        </p>

        </div>   
    </Reveal>

    </div>
  )
}

export default Examp