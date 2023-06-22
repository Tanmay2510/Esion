import useAuth from '@/hook/useAuth'
import { motion } from 'framer-motion';
import React, { useState } from 'react'

function SideDrop({setIt,itIS}) {
   const {thePlaylists} = useAuth();
  const handleDel = (i) =>(e)=>{
    if(e.target.checked){
      setIt([...itIS,i]);
    }else{
      setIt(itIS.filter((el)=>{
         return el !== i
      }))
    }

  }
  return (
    <motion.div
    initial={{opacity:0,height:0}}
    animate={{opacity:1,height:200}}
    transition={{duration:1}}
    className='sideDrop'>
        <ul className='sideDropUL'>
        {thePlaylists.map((el,i)=>{
          return (
            <li
            className='sideDropLI' 
            key={i}>{el.playName} 
            <input type="checkbox"
            onChange={handleDel(i)}
            ></input>
            </li>

          )
        })}
      </ul>
    </motion.div>
  )
}

export default SideDrop