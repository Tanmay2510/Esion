import useAuth from '@/hook/useAuth'
import React from 'react'

function SideDrop() {
  const {thePlaylists} = useAuth();
  
  return (
    <div className='sideDrop'>
        <ul className='sideDropUL'>
        {thePlaylists.map((el,i)=>{
          return (
            <li
            className='sideDropLI' 
            key={i}>{el.playName} 
            <input type="checkbox"></input>
            </li>

          )
        })}
      </ul>
    </div>
  )
}

export default SideDrop