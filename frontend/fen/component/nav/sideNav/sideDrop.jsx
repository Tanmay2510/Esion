import useAuth from '@/hook/useAuth'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function SideDrop({setIt,itIS}) {
   const {thePlaylists} = useAuth();
  const handleDel = (name) =>(e)=>{
    if(e.target.checked){
      setIt([...itIS,name]);
    }else{
      setIt(itIS.filter((el)=>{
         return el !== name
      }))
    }

  }
  return (
    <motion.div
    initial={{opacity:0,height:0}}
    animate={{opacity:1,height:"auto"}}
    transition={{duration:1}}
    className='sideDrop'>
        <ul className='sideDropUL'>
        {thePlaylists.map((el,i)=>{
          return (
            <li
            className='sideDropLI' 
            key={i}>{el.playName} 
            <input type="checkbox"
            onChange={handleDel(el.playName)}
            ></input>
            </li>

          )
        })}
      </ul>
    </motion.div>
  )
}

export default SideDrop